import {
  BatteryCharging,
  CheckCircle,
  ShoppingBag,
  Zap,
} from "lucide-react";

import productData from "../data/productData";

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2.5C6.75 2.5 2.5 6.72 2.5 11.93C2.5 13.59 2.94 15.15 3.7 16.5L2.45 21.5L7.58 20.2C8.91 20.93 10.42 21.35 12.02 21.35C17.27 21.35 21.5 17.13 21.5 11.92C21.5 6.72 17.27 2.5 12 2.5Z"
        fill="currentColor"
      />

      <path
        d="M16.95 13.92C16.68 13.78 15.38 13.15 15.13 13.05C14.88 12.96 14.7 12.91 14.51 13.19C14.33 13.46 13.81 14.08 13.65 14.27C13.48 14.46 13.31 14.48 13.03 14.34C12.76 14.2 11.89 13.92 10.86 13C10.05 12.28 9.5 11.39 9.34 11.11C9.19 10.83 9.33 10.68 9.47 10.54C9.6 10.41 9.75 10.2 9.89 10.03C10.03 9.86 10.08 9.73 10.17 9.54C10.26 9.35 10.21 9.19 10.15 9.05C10.08 8.91 9.54 7.61 9.32 7.08C9.1 6.55 8.87 6.64 8.7 6.63C8.53 6.62 8.35 6.62 8.16 6.62C7.97 6.62 7.67 6.69 7.42 6.97C7.17 7.25 6.47 7.9 6.47 9.2C6.47 10.5 7.44 11.75 7.58 11.93C7.72 12.12 9.49 14.84 12.19 16.01C12.84 16.29 13.35 16.46 13.75 16.59C14.4 16.8 14.99 16.77 15.46 16.69C15.98 16.61 17.07 16.04 17.29 15.41C17.52 14.79 17.52 14.25 17.45 14.14C17.38 14.03 17.21 13.97 16.95 13.92Z"
        fill="white"
      />
    </svg>
  );
}

function ProductCTA() {
  return (
    <section
      id="order"
      className="relative overflow-hidden bg-gradient-to-br from-[#4c1595] via-[#6d22c8] to-[#3b0b7a] text-white"
    >
      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div className="pointer-events-none absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-300/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-fuchsia-400/20 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-px w-1/2 bg-white/20" />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative mx-auto grid max-w-[1440px] items-center lg:grid-cols-[0.85fr_1.15fr]">

        {/* =========================================
            LEFT — LIFESTYLE IMAGE
        ========================================= */}

        <div className="relative flex min-h-[430px] items-end justify-center overflow-hidden px-6 pt-16 sm:min-h-[500px] lg:min-h-[530px] lg:justify-start lg:px-12">

          {/* Image Glow */}
          <div className="absolute bottom-20 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-purple-200/30 blur-[80px]" />

          {/* Decorative Circle */}
          <div className="absolute bottom-[-180px] left-[-80px] h-[500px] w-[500px] rounded-full border border-white/10" />

          {/* Lifestyle Image */}
          <div className="relative z-10 flex items-end justify-center">
            <img
              src="/images/lifestyle/powerbank-woman.png"
              alt="Woman holding WEKOME power bank"
              className="w-full max-w-[520px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
            />
          </div>

          {/* Floating Power Icon */}
          <div className="absolute left-[12%] top-[28%] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
            <Zap size={19} />
          </div>

          {/* Floating Battery Icon */}
          <div className="absolute right-[12%] top-[18%] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
            <BatteryCharging size={19} />
          </div>

        </div>

        {/* =========================================
            RIGHT — CTA CONTENT
        ========================================= */}

        <div className="relative px-6 pb-16 pt-4 sm:px-10 sm:pb-20 lg:px-16 lg:py-20">

          {/* Small Label */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-200" />

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-100">
              Stay Powered
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[700px] text-4xl font-black leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl">
            Don't Run Out of{" "}
            <span className="text-purple-200">
              Power
            </span>{" "}
            Again!
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-[500px] text-sm leading-6 text-purple-100/80 sm:text-base">
            Stay connected, stay productive, stay powered. Keep the{" "}
            {productData.capacity}mAh {productData.brand} power bank with
            you wherever you go.
          </p>

          {/* =========================================
              PRODUCT HIGHLIGHTS
          ========================================= */}

          <div className="mt-8 flex flex-wrap gap-3">

            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md">
              <BatteryCharging size={15} />

              <span className="text-[10px] font-bold">
                {productData.capacity}mAh
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md">
              <Zap size={15} />

              <span className="text-[10px] font-bold">
                {productData.chargingPower} Fast Charging
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md">
              <CheckCircle size={15} />

              <span className="text-[10px] font-bold">
                Safe & Reliable
              </span>
            </div>

          </div>

          {/* =========================================
              CTA BUTTONS
          ========================================= */}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            {/* WhatsApp */}
            <a
              href="https://wa.me/08162409010"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-purple-700 shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >

              {/* WhatsApp Logo */}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition duration-300 group-hover:scale-110">
                <WhatsAppIcon size={22} />
              </span>

              <span className="text-left">

                <span className="block text-[8px] font-semibold uppercase tracking-wider text-purple-400">
                  Order Now on WhatsApp
                </span>

                <span className="text-base font-black">
                  08162409010
                </span>

              </span>

            </a>

            {/* Shop Now */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/5 px-8 py-4 text-sm font-bold backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/15"
            >
              <ShoppingBag size={18} />

              SHOP NOW
            </a>

          </div>

          {/* Bottom Trust Line */}
          <div className="mt-8 flex items-center gap-3 text-[9px] uppercase tracking-[0.15em] text-purple-200/70">

            <span className="h-px w-8 bg-purple-200/40" />

            Premium quality. Power you can trust.

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductCTA;