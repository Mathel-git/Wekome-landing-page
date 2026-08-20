import {
  BatteryCharging,
  Cable,
  Plane,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Zap,
} from "lucide-react";

import productData from "../data/productData";

const iconMap = {
  zap: Zap,
  cable: Cable,
  smartphone: Smartphone,
  battery: BatteryCharging,
  shield: ShieldCheck,
  plane: Plane,
};

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.82 11.82 0 0012.05 0C5.52 0 .21 5.31.21 11.84c0 2.09.55 4.13 1.59 5.92L.11 24l6.39-1.67a11.83 11.83 0 005.55 1.41h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.16-1.23-6.13-3.38-8.42ZM12.06 21.73h-.01a9.83 9.83 0 01-5.01-1.37l-.36-.21-3.79.99 1.01-3.69-.23-.38a9.82 9.82 0 01-1.51-5.23C2.16 6.42 6.59 1.99 12.05 1.99a9.79 9.79 0 017 2.91 9.79 9.79 0 012.9 6.99c0 5.46-4.43 9.9-9.89 9.9Zm5.42-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.23 5.11 4.52.71.31 1.27.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#05040b] pt-[76px] text-white"
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      {/* Main Purple Glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[700px] w-[700px] rounded-full bg-purple-700/20 blur-[150px]" />

      {/* Product Glow */}
      <div className="pointer-events-none absolute right-[15%] top-[35%] h-[500px] w-[350px] rounded-full bg-purple-600/25 blur-[130px]" />

      {/* Left Glow */}
      <div className="pointer-events-none absolute left-[20%] top-[45%] h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[130px]" />

      {/* Decorative Ring */}
      <div className="pointer-events-none absolute -right-[280px] -top-[230px] hidden h-[820px] w-[820px] rounded-full border border-purple-500/30 lg:block" />

      <div className="pointer-events-none absolute -right-[255px] -top-[205px] hidden h-[770px] w-[770px] rounded-full border-[2px] border-purple-400/25 shadow-[0_0_100px_rgba(168,85,247,0.2)] lg:block" />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-[1500px] items-center px-5 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-12 xl:px-14">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="relative z-30 max-w-[690px] pt-4 lg:pt-0">

          {/* Product Badge */}
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-500 px-3.5 py-2 text-[10px] font-bold tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.25)]">
              {productData.model}
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.18em] text-gray-400">
              {productData.series}
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[700px] text-[54px] font-black leading-[0.93] tracking-[-0.055em] sm:text-[70px] lg:text-[76px] xl:text-[88px]">
            Power That
            <br />

            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              Goes With You.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[510px] text-base leading-7 text-gray-400 sm:text-lg">
            {productData.description}
          </p>

          {/* =================================================
              FEATURE HIGHLIGHTS
          ================================================= */}

          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-5 sm:gap-x-4">
            {productData.features.map((feature) => {
              const Icon = iconMap[feature.icon];

              return (
                <div
                  key={feature.title}
                  className="group min-w-0"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 transition duration-300 group-hover:border-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-200">
                    <Icon size={17} />
                  </div>

                  <p className="text-[9px] font-bold tracking-wide text-white">
                    {feature.title}
                  </p>

                  <p className="mt-1 text-[9px] leading-4 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =================================================
              PRICING
          ================================================= */}

          <div className="mt-8 grid max-w-[620px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] sm:grid-cols-3">

            {/* Original Price */}
            <div className="px-5 py-4">
              <p className="text-[9px] uppercase tracking-wider text-gray-500">
                Original Price
              </p>

              <p className="mt-1 text-lg font-bold text-gray-400 line-through">
                {productData.originalPrice}
              </p>
            </div>

            {/* Promo Price */}
            <div className="bg-purple-600/20 px-5 py-4">
              <p className="text-[9px] uppercase tracking-wider text-purple-300">
                Promo Price
              </p>

              <p className="mt-1 text-2xl font-black text-yellow-300">
                {productData.promoPrice}
              </p>
            </div>

            {/* Savings */}
            <div className="px-5 py-4">
              <p className="text-[9px] uppercase tracking-wider text-gray-500">
                You Save
              </p>

              <p className="mt-1 text-lg font-bold text-white">
                {productData.savings}
              </p>
            </div>

          </div>

          {/* =================================================
              CTA BUTTONS
          ================================================= */}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${productData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 px-7 py-4 text-sm font-bold shadow-[0_0_30px_rgba(168,85,247,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(168,85,247,0.4)]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <WhatsAppIcon size={18} />
              </span>

              <span className="text-left">
                <span className="block text-[8px] font-medium uppercase tracking-wider opacity-70">
                  Order Now on WhatsApp
                </span>

                <span className="text-sm">
                  08162409010
                </span>
              </span>
            </a>

            {/* Shop Now */}
            <a
              href="#order"
              className="flex items-center justify-center gap-3 rounded-lg border border-purple-500/30 bg-white/[0.03] px-8 py-4 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:bg-purple-500/10"
            >
              <ShoppingBag size={17} />

              SHOP NOW
            </a>

          </div>
        </div>

        {/* =================================================
            RIGHT PRODUCT AREA
        ================================================= */}

        <div className="relative mt-4 flex min-h-[260px] items-center justify-center sm:min-h-[360px] lg:mt-0 lg:min-h-[560px]">

          {/* Large Product Glow */}
          <div className="pointer-events-none absolute right-[18%] top-[35%] h-[430px] w-[300px] -translate-y-1/2 rounded-full bg-purple-600/35 blur-[100px]" />

          {/* Bottom Glow */}
          <div className="pointer-events-none absolute bottom-[10%] right-[20%] h-[90px] w-[420px] rounded-[50%] bg-purple-600/30 blur-[55px]" />

          {/* =================================================
              REAL POWER BANK IMAGE

              IMPORTANT:
              This is deliberately much larger than before.
          ================================================= */}

          <div className="relative z-10 flex h-[620px] w-full items-center justify-center lg:translate-x-[-20px] xl:translate-x-[-35px]">

           <div className="relative z-10 flex w-full items-center justify-center lg:-translate-y-6 lg:translate-x-4">
  <img
    src="/images/products/powerbank-hero.png"
    alt="WEKOME WP-66 20,000mAh Power Bank"
    className="
      w-full
      max-w-[680px]
      scale-125
      object-contain
      drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)]
      sm:scale-125
      lg:scale-150
    "
  />
</div>
          </div>

          {/* =================================================
              CAPACITY BADGE
          ================================================= */}

          <div className="absolute right-[1%] top-[13%] z-30 hidden w-[195px] rounded-2xl border border-purple-400/30 bg-[#090610]/80 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:block">

            <div className="flex items-end gap-1">
              <span className="text-3xl font-black">
                {productData.capacity}
              </span>

              <span className="mb-1 text-sm font-bold text-purple-400">
                {productData.capacityUnit}
              </span>
            </div>

            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-gray-500">
              Real Capacity
            </p>

            <div className="mt-3 h-px bg-white/10" />

            <p className="mt-3 text-xs leading-5 text-gray-300">
              More power.
              <br />
              Less worry.
            </p>

          </div>

          {/* =================================================
              PRODUCT BENEFITS
          ================================================= */}

          <div className="absolute bottom-[7%] right-[-1%] z-30 hidden w-[225px] space-y-4 lg:block">

            {productData.benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon];

              return (
                <div
                  key={benefit.title}
                  className="flex items-center gap-3"
                >

                  {/* Icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
                    <Icon size={16} />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-[9px] font-bold text-white">
                      {benefit.title}
                    </p>

                    <p className="mt-1 text-[8px] leading-3 text-gray-500">
                      {benefit.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>

      {/* =====================================================
          MOBILE PRODUCT AREA DECORATION
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  );
}

export default Hero;