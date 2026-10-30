
import "dotenv/config";

import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import lockfile from "proper-lockfile";
import fs from "node:fs/promises";
import path from "node:path";
import {
  randomBytes,
  createHmac,
  timingSafeEqual,
} from "node:crypto";

const app = express();

const PORT = Number(process.env.PORT || 3001);
const PRICE = Number(process.env.PRODUCT_PRICE_NAIRA || 20900);
const CURRENCY = "NGN";
const API_BASE_URL = process.env.API_BASE_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;

const STATE_FILE = path.resolve(
  process.env.ORDER_STATE_FILE ||
    "./private-data/order-notifications.json"
);

const allowedColours = ["Black", "White", "Blue", "Purple"];

if (
  !process.env.PAYSTACK_SECRET_KEY ||
  !API_BASE_URL ||
  !FRONTEND_URL
) {
  throw new Error("Missing required payment server configuration.");
}

await fs.mkdir(path.dirname(STATE_FILE), { recursive: true });

try {
  await fs.access(STATE_FILE);
} catch {
  await fs.writeFile(STATE_FILE, JSON.stringify({}), {
    mode: 0o600,
  });
}

app.use(
  cors({
    origin: FRONTEND_URL,
    methods: ["GET", "POST"],
  })
);

// Preserve original request bytes for Paystack webhook verification.
app.use(
  express.json({
    limit: "50kb",
    verify(req, res, buffer) {
      req.rawBody = buffer;
    },
  })
);

function fail(res, status, message) {
  return res.status(status).json({ message });
}

function clean(value, max = 250) {
  return typeof value === "string"
    ? value.trim().slice(0, max)
    : "";
}

function validateOrder(input = {}) {
  const name = clean(input.name, 100);
  const phone = clean(input.phone, 25);
  const email = clean(input.email, 150);
  const colour = clean(input.colour, 20);
  const quantity = Number(input.quantity);
  const delivery = clean(input.delivery, 20);

  let address = clean(input.address, 250);
  let city = clean(input.city, 100);
  let state = clean(input.state, 100);

  if (!name || !/^[0-9+\s()-]{7,25}$/.test(phone)) {
    throw new Error("Enter a valid name and phone number.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Enter a valid email address.");
  }

  if (!allowedColours.includes(colour)) {
    throw new Error("Select a valid product colour.");
  }

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
    throw new Error("Quantity must be between 1 and 20.");
  }

  if (!["delivery", "pickup"].includes(delivery)) {
    throw new Error("Select a valid delivery option.");
  }

  if (delivery === "delivery" && (!address || !city || !state)) {
    throw new Error("Enter your complete delivery address.");
  }

  if (delivery === "pickup") {
    address = "Customer pickup";
    city = "";
    state = "";
  }

  return {
    name,
    phone,
    email,
    colour,
    quantity,
    delivery,
    address,
    city,
    state,
    totalNaira: PRICE * quantity,
  };
}

async function paystackRequest(endpoint, options = {}) {
  const response = await fetch(
    `https://api.paystack.co${endpoint}`,
    {
      ...options,
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    }
  );

  const result = await response.json().catch(() => ({}));

  if (!response.ok || !result.status) {
    throw new Error(result.message || "Paystack request failed.");
  }

  return result.data;
}

async function verifyTransaction(reference) {
  const payment = await paystackRequest(
    `/transaction/verify/${encodeURIComponent(reference)}`,
    { method: "GET" }
  );

  if (
    payment.status !== "success" ||
    payment.currency !== CURRENCY ||
    payment.reference !== reference
  ) {
    throw new Error("Payment has not been verified as successful.");
  }

  const order = payment.metadata?.order;

  if (!order || !Number.isInteger(Number(order.quantity))) {
    throw new Error("Order metadata is missing.");
  }

  const quantity = Number(order.quantity);

  if (quantity < 1 || quantity > 20) {
    throw new Error("Invalid order quantity.");
  }

  const expectedKobo = PRICE * quantity * 100;

  if (Number(payment.amount) !== expectedKobo) {
    throw new Error("Payment amount does not match the order.");
  }

  return {
    reference: payment.reference,
    email: payment.customer?.email || clean(order.email, 150),
    name: clean(order.name, 100),
    phone: clean(order.phone, 25),
    colour: clean(order.colour, 20),
    quantity,
    delivery: clean(order.delivery, 20),
    address: clean(order.address, 250),
    city: clean(order.city, 100),
    state: clean(order.state, 100),
    totalNaira: expectedKobo / 100,
  };
}

function formatOrder(order) {
  return [
    "PAID WEKOME WP-66 ORDER",
    `Reference: ${order.reference}`,
    `Buyer: ${order.name}`,
    `Phone: ${order.phone}`,
    `Email: ${order.email}`,
    `Colour: ${order.colour}`,
    `Quantity: ${order.quantity}`,
    `Delivery: ${order.delivery}`,
    `Address: ${order.address}, ${order.city}, ${order.state}`,
    `Total: NGN ${order.totalNaira.toLocaleString("en-NG")}`,
  ].join("\n");
}

async function sendEmail(order) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SELLER_EMAIL,
    subject: `Paid WEKOME WP-66 order — ${order.reference}`,
    text: formatOrder(order),
  });
}

async function sendWhatsApp(order) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const recipient = process.env.SELLER_WHATSAPP;
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME;
  const graphVersion = process.env.WHATSAPP_GRAPH_VERSION || "v23.0";

  if (!token || !phoneNumberId || !recipient || !templateName) {
    throw new Error("WhatsApp Cloud API is not configured.");
  }

  const body = {
    messaging_product: "whatsapp",
    to: recipient,
    type: "template",
    template: {
      name: templateName,
      language: { code: "en_US" },
      components: [
        {
          type: "body",
          parameters: [
            { type: "text", text: order.reference },
            { type: "text", text: order.name },
            { type: "text", text: order.phone },
            {
              type: "text",
              text: `${order.quantity} x ${order.colour} — NGN ${order.totalNaira.toLocaleString("en-NG")}`,
            },
          ],
        },
      ],
    },
  };

  const response = await fetch(
    `https://graph.facebook.com/${graphVersion}/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`WhatsApp delivery failed: ${error}`);
  }
}

// Track email and WhatsApp delivery independently per payment reference.
async function notifySeller(order) {
  const release = await lockfile.lock(STATE_FILE, {
    retries: { retries: 8, minTimeout: 100, maxTimeout: 1000 },
  });

  try {
    const state = JSON.parse(await fs.readFile(STATE_FILE, "utf8"));

    const current = state[order.reference] || {
      emailSent: false,
      whatsappSent: false,
    };

    if (!current.emailSent) {
      try {
        await sendEmail(order);
        current.emailSent = true;
      } catch (error) {
        console.error("Email notification failed:", error.message);
      }
    }

    if (!current.whatsappSent) {
      try {
        await sendWhatsApp(order);
        current.whatsappSent = true;
      } catch (error) {
        console.error("WhatsApp notification failed:", error.message);
      }
    }

    state[order.reference] = current;

    await fs.writeFile(STATE_FILE, JSON.stringify(state, null, 2), {
      mode: 0o600,
    });

    return current;
  } finally {
    await release();
  }
}

// Start a Paystack checkout.
app.post("/api/initialize", async (req, res) => {
  try {
    const order = validateOrder(req.body);
    const reference = `WP66-${randomBytes(12).toString("hex")}`;

    const data = await paystackRequest("/transaction/initialize", {
      method: "POST",
      body: JSON.stringify({
        email: order.email,
        amount: String(order.totalNaira * 100),
        currency: CURRENCY,
        reference,
        callback_url: `${API_BASE_URL}/api/paystack/callback`,
        metadata: {
          order: {
            name: order.name,
            phone: order.phone,
            email: order.email,
            colour: order.colour,
            quantity: order.quantity,
            delivery: order.delivery,
            address: order.address,
            city: order.city,
            state: order.state,
          },
        },
      }),
    });

    res.json({
      authorization_url: data.authorization_url,
      reference: data.reference,
    });
  } catch (error) {
    console.error("Checkout initialization failed:", error.message);
    fail(res, 400, error.message || "Unable to start checkout.");
  }
});

// Verify payment independently of notification delivery.
app.get("/api/verify/:reference", async (req, res) => {
  try {
    const order = await verifyTransaction(req.params.reference);

    const notifications = await notifySeller(order);

    res.json({
      success: true,
      reference: order.reference,
      notificationsSent:
        notifications.emailSent && notifications.whatsappSent,
    });
  } catch (error) {
    console.error("Payment verification failed:", error.message);
    fail(res, 400, "Payment could not be confirmed.");
  }
});

// Paystack redirects the buyer here after checkout.
app.get("/api/paystack/callback", async (req, res) => {
  const reference = clean(req.query.reference, 100);

  if (!reference) {
    return res.redirect(`${FRONTEND_URL}/payment-failed`);
  }

  let order;

  try {
    order = await verifyTransaction(reference);
  } catch (error) {
    console.error("Payment verification failed:", error.message);

    return res.redirect(
      `${FRONTEND_URL}/payment-pending?reference=${encodeURIComponent(reference)}`
    );
  }

  // Notification failures must not change a verified payment into a failed one.
  try {
    await notifySeller(order);
  } catch (error) {
    console.error("Order notification processing failed:", error.message);
  }

  return res.redirect(
    `${FRONTEND_URL}/payment-success?reference=${encodeURIComponent(order.reference)}`
  );
});

// Paystack webhook: verify signature, then verify payment directly with Paystack.
app.post("/api/paystack/webhook", async (req, res) => {
  const signature = req.get("x-paystack-signature") || "";
  const secret = process.env.PAYSTACK_SECRET_KEY;

  const expected = createHmac("sha512", secret)
    .update(req.rawBody || Buffer.from(""))
    .digest("hex");

  const suppliedBuffer = Buffer.from(signature, "utf8");
  const expectedBuffer = Buffer.from(expected, "utf8");

  if (
    suppliedBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(suppliedBuffer, expectedBuffer)
  ) {
    return res.status(401).send("Invalid signature");
  }

  if (req.body?.event !== "charge.success") {
    return res.sendStatus(200);
  }

  try {
    const reference = clean(req.body?.data?.reference, 100);

    if (!reference) {
      return res.sendStatus(400);
    }

    const order = await verifyTransaction(reference);

    await notifySeller(order);

    return res.sendStatus(200);
  } catch (error) {
    console.error("Webhook processing failed:", error.message);
    return res.sendStatus(500);
  }
});

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "WEKOME checkout",
  });
});

app.listen(PORT, () => {
  console.log(`WEKOME payment server listening on port ${PORT}`);
});
