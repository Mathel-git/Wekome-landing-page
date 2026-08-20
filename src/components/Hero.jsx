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

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#05040b] pt-[76px] text-white"
    >
      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      {/* Main Purple Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[650px] w-[650px] rounded-full bg-purple-600/20 blur-[150px]" />

      {/* Secondary Glow */}
      <div className="pointer-events-none absolute left-[25%] top-[40%] h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[130px]" />

      {/* Decorative Ring */}
      <div className="pointer-events-none absolute -right-[250px] -top-[220px] hidden h-[750px] w-[750px] rounded-full border border-purple-500/30 lg:block" />

      <div className="pointer-events-none absolute -right-[230px] -top-[200px] hidden h-[700px] w-[700px] rounded-full border-[2px] border-purple-400/30 shadow-[0_0_80px_rgba(168,85,247,0.25)] lg:block" />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-[1440px] items-center px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-12 lg:py-20">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="relative z-20 max-w-[650px] pt-2 lg:pt-6">

          {/* Product Badge */}
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-md bg-purple-600 px-3 py-1.5 text-[10px] font-bold tracking-wider">
              {productData.model}
            </span>

            <span className="text-xs font-medium tracking-[0.15em] text-gray-400">
              {productData.series}
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[700px] text-[54px] font-black leading-[0.94] tracking-[-0.05em] sm:text-[70px] lg:text-[84px]">
            Power That
            <br />

            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              Goes With You.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[500px] text-base leading-7 text-gray-400 sm:text-lg">
            {productData.description}
          </p>

          {/* =========================================
              FEATURE HIGHLIGHTS
          ========================================= */}

          <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-5">
            {productData.features.map((feature) => {
              const Icon = iconMap[feature.icon];

              return (
                <div
                  key={feature.title}
                  className="group"
                >
                  <div
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 transition duration-300 group-hover:border-purple-400 group-hover:bg-purple-500/20"
                  >
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

          {/* =========================================
              PRICING
          ========================================= */}

          <div className="mt-9 grid max-w-[600px] overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] sm:grid-cols-3">

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

          {/* =========================================
              CTA BUTTONS
          ========================================= */}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${productData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 px-7 py-4 text-sm font-bold shadow-[0_0_30px_rgba(168,85,247,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[9px] font-bold">
                WA
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

        {/* =========================================
            RIGHT PRODUCT AREA
        ========================================= */}

        <div className="relative mt-16 flex min-h-[560px] items-center justify-center lg:mt-0">

          {/* Main Product Glow */}
          <div className="absolute h-[430px] w-[330px] rounded-full bg-purple-600/30 blur-[110px]" />

          {/* Secondary Glow */}
          <div className="absolute bottom-12 h-[80px] w-[400px] rounded-[50%] bg-purple-600/30 blur-[50px]" />

          {/* =========================================
              REAL POWER BANK IMAGE
          ========================================= */}

          <div className="relative z-10 flex w-full items-center justify-center">

            <img
              src="/images/products/powerbank-hero.png"
              alt="WEKOME WP-66 20,000mAh Power Bank"
              className="w-full max-w-[520px] object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)]"
            />

          </div>

          {/* =========================================
              CAPACITY BADGE
          ========================================= */}

          <div className="absolute right-0 top-[12%] z-20 hidden w-[190px] rounded-2xl border border-purple-400/30 bg-black/70 p-5 backdrop-blur-xl lg:block">

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

            <p className="mt-3 text-xs text-gray-300">
              More power.
              <br />
              Less worry.
            </p>

          </div>

          {/* =========================================
              PRODUCT BENEFITS
          ========================================= */}

          <div className="absolute bottom-4 right-0 z-20 hidden w-[220px] space-y-4 lg:block">

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

                    <p className="mt-1 text-[8px] text-gray-500">
                      {benefit.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;