
import { useState } from "react";
import { ShoppingBag, CheckCircle2, ArrowLeft } from "lucide-react";
import Checkout from "./Checkout";

const UNIT_PRICE = 20900;

const colors = [
  { name: "Black", hex: "#222222" },
  { name: "White", hex: "#F2F2F2" },
  { name: "Blue", hex: "#69A9DF" },
  { name: "Purple", hex: "#B67AE8" },
];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  color: "Purple",
  quantity: "1",
  deliveryMethod: "Delivery",
  address: "",
  city: "",
  state: "",
};

export default function OrderForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [orderPreview, setOrderPreview] = useState(null);

  const quantity = Number(form.quantity);
  const subtotal = quantity * UNIT_PRICE;

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!/^[0-9+\s()-]{7,25}$/.test(form.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!colors.some((item) => item.name === form.color)) {
      nextErrors.color = "Please select a valid colour.";
    }

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
      nextErrors.quantity = "Please select a valid quantity.";
    }

    if (
      form.deliveryMethod === "Delivery" &&
      !form.address.trim()
    ) {
      nextErrors.address = "Please enter your delivery address.";
    }

    if (form.deliveryMethod === "Delivery" && !form.city.trim()) {
      nextErrors.city = "Please enter your city or town.";
    }

    if (form.deliveryMethod === "Delivery" && !form.state.trim()) {
      nextErrors.state = "Please enter your state.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setOrderPreview({
      ...form,
      email: form.email.trim(),
      subtotal,
    });
  }

  function startNewOrder() {
    setForm(initialForm);
    setErrors({});
    setOrderPreview(null);
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100";

  const labelClass = "block text-sm font-semibold text-gray-700";

  function fieldError(name) {
    return errors[name] ? (
      <p className="mt-1 text-xs text-red-600">{errors[name]}</p>
    ) : null;
  }

  return (
    <section
      id="website-order"
      className="bg-[#f8f6fc] px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-4xl">
        {!orderPreview ? (
          <>
            <div className="mb-8 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-purple-700">
                <ShoppingBag size={15} />
                WEKOME WP-66
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-gray-950 sm:text-5xl">
                Place Your <span className="text-purple-700">Order</span>
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
                Complete the form below to review your power bank order.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-gray-200 bg-white p-5 shadow-xl shadow-purple-950/5 sm:p-8"
            >
              <div className="flex flex-col gap-3 border-b border-gray-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-black text-gray-950">
                    Customer information
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Fields marked * are required.
                  </p>
                </div>

                <div className="rounded-xl bg-purple-50 px-4 py-3">
                  <p className="text-xs text-gray-500">Promotional price</p>
                  <p className="text-xl font-black text-purple-700">
                    ₦20,900
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="order-name">
                    Full name *
                  </label>
                  <input
                    id="order-name"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className={inputClass}
                  />
                  {fieldError("fullName")}
                </div>

                <div>
                  <label className={labelClass} htmlFor="order-phone">
                    Phone number *
                  </label>
                  <input
                    id="order-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="08012345678"
                    className={inputClass}
                  />
                  {fieldError("phone")}
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="order-email">
                    Email address *
                  </label>
                  <input
                    id="order-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                  {fieldError("email")}
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <h3 className="text-xl font-black text-gray-950">
                  Product selection
                </h3>

                <div className="mt-5">
                  <span className={labelClass}>Choose your colour *</span>

                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {colors.map((color) => {
                      const selected = form.color === color.name;

                      return (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() =>
                            setForm((current) => ({
                              ...current,
                              color: color.name,
                            }))
                          }
                          aria-pressed={selected}
                          className={`rounded-xl border p-4 transition ${
                            selected
                              ? "border-purple-600 bg-purple-50 ring-2 ring-purple-100"
                              : "border-gray-200 hover:border-purple-300"
                          }`}
                        >
                          <span
                            className="mx-auto block h-8 w-8 rounded-full border border-gray-300"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="mt-2 block text-sm font-semibold text-gray-800">
                            {color.name}
                          </span>
                          {selected && (
                            <span className="mt-1 block text-xs font-bold text-purple-700">
                              Selected
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {fieldError("color")}
                </div>

                <div className="mt-5">
                  <label className={labelClass} htmlFor="order-quantity">
                    Quantity *
                  </label>
                  <select
                    id="order-quantity"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {[1, 2, 3, 4, 5, 10].map((qty) => (
                      <option key={qty} value={qty}>
                        {qty} {qty === 1 ? "unit" : "units"}
                      </option>
                    ))}
                  </select>
                  {fieldError("quantity")}
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <h3 className="text-xl font-black text-gray-950">
                  Delivery information
                </h3>

                <div className="mt-5">
                  <label className={labelClass} htmlFor="order-delivery">
                    Fulfilment method *
                  </label>
                  <select
                    id="order-delivery"
                    name="deliveryMethod"
                    value={form.deliveryMethod}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="Delivery">Deliver to my address</option>
                    <option value="Pickup">Pickup</option>
                  </select>
                </div>

                {form.deliveryMethod === "Delivery" && (
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className={labelClass} htmlFor="order-address">
                        Street address *
                      </label>
                      <input
                        id="order-address"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        autoComplete="street-address"
                        placeholder="House number, street, or landmark"
                        className={inputClass}
                      />
                      {fieldError("address")}
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="order-city">
                        City / town *
                      </label>
                      <input
                        id="order-city"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="Enter your city"
                        className={inputClass}
                      />
                      {fieldError("city")}
                    </div>

                    <div>
                      <label className={labelClass} htmlFor="order-state">
                        State *
                      </label>
                      <input
                        id="order-state"
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        placeholder="Enter your state"
                        className={inputClass}
                      />
                      {fieldError("state")}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 rounded-2xl bg-[#f8f5fc] p-5">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-gray-600">
                    {quantity} × ₦20,900
                  </span>
                  <span className="font-semibold text-gray-900">
                    ₦{subtotal.toLocaleString("en-NG")}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-purple-100 pt-3">
                  <span className="font-bold text-gray-900">
                    Product total
                  </span>
                  <span className="text-2xl font-black text-purple-700">
                    ₦{subtotal.toLocaleString("en-NG")}
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Delivery fees are not included. Review your order before
                  proceeding to payment.
                </p>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-700 px-5 py-4 text-sm font-bold text-white transition hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-200"
              >
                Review My Order
                <ShoppingBag size={18} />
              </button>
            </form>
          </>
        ) : (
          <div className="rounded-3xl border border-gray-200 bg-white p-6 text-center shadow-xl shadow-purple-950/5 sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
              <CheckCircle2 size={34} />
            </div>

            <h2 className="mt-5 text-3xl font-black text-gray-950">
              Review Your Order
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Check your details before continuing to secure payment.
            </p>

            <div className="mx-auto mt-7 max-w-lg rounded-2xl bg-[#f8f5fc] p-5 text-left">
              {[
                ["Customer", orderPreview.fullName],
                ["Phone", orderPreview.phone],
                ["Email", orderPreview.email],
                ["Colour", orderPreview.color],
                ["Quantity", String(orderPreview.quantity)],
                ["Fulfilment", orderPreview.deliveryMethod],
                ...(orderPreview.deliveryMethod === "Delivery"
                  ? [
                      [
                        "Address",
                        `${orderPreview.address}, ${orderPreview.city}, ${orderPreview.state}`,
                      ],
                    ]
                  : []),
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between gap-4 border-b border-purple-100 py-3 last:border-0"
                >
                  <span className="text-sm text-gray-500">{label}</span>
                  <span className="max-w-[65%] break-words text-right text-sm font-semibold text-gray-900">
                    {value}
                  </span>
                </div>
              ))}

              <div className="mt-3 flex justify-between gap-4 border-t border-purple-200 pt-4">
                <span className="font-bold text-gray-900">Product total</span>
                <span className="text-xl font-black text-purple-700">
                  ₦{orderPreview.subtotal.toLocaleString("en-NG")}
                </span>
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-lg">
              <Checkout
                order={{
                  name: orderPreview.fullName.trim(),
                  phone: orderPreview.phone.trim(),
                  email: orderPreview.email.trim(),
                  colour: orderPreview.color,
                  quantity: Number(orderPreview.quantity),
                  delivery:
                    orderPreview.deliveryMethod === "Delivery"
                      ? "delivery"
                      : "pickup",
                  address: orderPreview.address.trim(),
                  city: orderPreview.city.trim(),
                  state: orderPreview.state.trim(),
                }}
              />
            </div>

            <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setOrderPreview(null)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
              >
                <ArrowLeft size={17} />
                Edit Details
              </button>

              <button
                type="button"
                onClick={startNewOrder}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-800"
              >
                <ShoppingBag size={17} />
                Start New Order
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
