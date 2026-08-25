import {
  BatteryCharging,
  Plane,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Zap,
} from "lucide-react";

import productData from "../data/productData";

const iconMap = {
  zap: Zap,
  cable: Zap,
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

      <div className="pointer-events-none absolute -right-40 top-20 h-[650px] w-[650px] rounded-full bg-purple-600/20 blur-[150px]" />

      <div className="pointer-events-none absolute left-[25%] top-[40%] h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[130px]" />

      {/* Decorative Rings */}
      <div className="pointer-events-none absolute -right-[250px] -top-[220px] hidden h-[750px] w-[750px] rounded-full border border-purple-500/30 lg:block" />

      <div className="pointer-events-none absolute -right-[230px] -top-[200px] hidden h-[700px] w-[700px] rounded-full border-2 border-purple-400/30 shadow-[0_0_80px_rgba(168,85,247,0.25)] lg:block" />

      {/* =========================================
          MAIN HERO
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          min-h-[calc(100vh-76px)]
          max-w-[1440px]
          px-5
          py-10

          sm:px-8
          sm:py-14

          lg:grid
          lg:grid-cols-[1fr_1fr]
          lg:items-center
          lg:px-12
          lg:py-20
        "
      >
        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div
          className="
            relative
            z-30
            max-w-[650px]

            lg:pt-6
          "
        >
          {/* Product Badge */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="rounded-md bg-purple-600 px-3 py-1.5 text-[9px] font-bold tracking-wider sm:text-[10px]">
              {productData.model}
            </span>

            <span className="text-[10px] font-medium tracking-[0.15em] text-gray-400 sm:text-xs">
              {productData.series}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-[700px]
              text-[45px]
              font-black
              leading-[0.94]
              tracking-[-0.05em]

              sm:text-[60px]

              lg:text-[84px]
            "
          >
            Power That
            <br />

            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
              Goes With You.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[500px]
              text-[13px]
              leading-6
              text-gray-400

              sm:mt-7
              sm:text-base

              lg:text-lg
            "
          >
            {productData.description}
          </p>

          {/* =========================================
              FEATURES
          ========================================= */}

          <div
            className="
              mt-7
              grid
              grid-cols-5
              gap-2

              sm:mt-9
              sm:gap-4

              lg:gap-5
            "
          >
            {productData.features.map((feature) => {
              const Icon = iconMap[feature.icon];

              return (
                <div
                  key={feature.title}
                  className="group min-w-0"
                >
                  <div
                    className="
                      mb-2
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-purple-500/30
                      bg-purple-500/10
                      text-purple-300

                      sm:h-10
                      sm:w-10
                    "
                  >
                    <Icon size={14} className="sm:h-[17px] sm:w-[17px]" />
                  </div>

                  <p className="truncate text-[7px] font-bold tracking-wide text-white sm:text-[9px]">
                    {feature.title}
                  </p>

                  <p className="mt-1 line-clamp-2 text-[6px] leading-3 text-gray-500 sm:text-[9px] sm:leading-4">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =========================================
              PRICING
          ========================================= */}

          <div
            className="
              mt-7
              grid
              grid-cols-3
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]

              sm:mt-9
            "
          >
            {/* Original */}
            <div className="px-3 py-3 sm:px-5 sm:py-4">
              <p className="text-[7px] uppercase tracking-wider text-gray-500 sm:text-[9px]">
                Original Price
              </p>

              <p className="mt-1 text-sm font-bold text-gray-400 line-through sm:text-lg">
                {productData.originalPrice}
              </p>
            </div>

            {/* Promo */}
            <div className="bg-purple-600/20 px-3 py-3 sm:px-5 sm:py-4">
              <p className="text-[7px] uppercase tracking-wider text-purple-300 sm:text-[9px]">
                Promo Price
              </p>

              <p className="mt-1 text-lg font-black text-yellow-300 sm:text-2xl">
                {productData.promoPrice}
              </p>
            </div>

            {/* Savings */}
            <div className="px-3 py-3 sm:px-5 sm:py-4">
              <p className="text-[7px] uppercase tracking-wider text-gray-500 sm:text-[9px]">
                You Save
              </p>

              <p className="mt-1 text-sm font-bold text-white sm:text-lg">
                {productData.savings}
              </p>
            </div>
          </div>

          {/* =========================================
              CTA BUTTONS
          ========================================= */}

          <div
            className="
              mt-6
              flex
              flex-row
              gap-2

              sm:mt-7
              sm:gap-3
            "
          >
            {/* WhatsApp */}
            <a
              href={`https://wa.me/${productData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                min-w-0
                flex-1
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-500
                px-3
                py-3
                text-center
                shadow-[0_0_30px_rgba(168,85,247,0.25)]

                sm:gap-3
                sm:px-7
                sm:py-4
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-[8px]
                  font-bold

                  sm:h-8
                  sm:w-8
                "
              >
                WA
              </span>

              <span className="min-w-0 text-left">
                <span className="block truncate text-[6px] font-medium uppercase tracking-wider opacity-70 sm:text-[8px]">
                  Order Now on WhatsApp
                </span>

                <span className="text-[10px] font-bold sm:text-sm">
                  08162409010
                </span>
              </span>
            </a>

            {/* Shop Now */}
            <a
              href="#order"
              className="
                flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-purple-500/30
                bg-white/[0.03]
                px-5
                py-3
                text-[10px]
                font-bold

                sm:px-8
                sm:py-4
                sm:text-sm
              "
            >
              <ShoppingBag size={14} />

              SHOP NOW
            </a>
          </div>
        </div>

        {/* =========================================
            RIGHT PRODUCT AREA
        ========================================= */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-[35px]
            right-[-35px]
            z-10
            flex
            w-[245px]
            items-center
            justify-center

            sm:bottom-[25px]
            sm:right-[-20px]
            sm:w-[350px]

            lg:pointer-events-auto
            lg:relative
            lg:bottom-auto
            lg:right-auto
            lg:mt-0
            lg:min-h-[560px]
            lg:w-auto
          "
        >
          {/* Product Glow */}
          <div
            className="
              absolute
              h-[220px]
              w-[180px]
              rounded-full
              bg-purple-600/30
              blur-[80px]

              sm:h-[300px]
              sm:w-[240px]

              lg:h-[430px]
              lg:w-[330px]
              lg:blur-[110px]
            "
          />

          {/* Bottom Glow */}
          <div className="absolute bottom-0 h-[60px] w-[280px] rounded-[50%] bg-purple-600/30 blur-[45px] lg:h-[80px] lg:w-[400px]" />

          {/* =========================================
              REAL POWER BANK
          ========================================= */}

          <img
            src="/images/products/powerbank-hero.png"
            alt="WEKOME WP-66 20,000mAh Power Bank"
            className="
              relative
              z-10
              w-[210px]
              max-w-none
              object-contain
              drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)]

              sm:w-[300px]

              lg:w-[620px]
            "
          />

          {/* =========================================
              CAPACITY BADGE
          ========================================= */}

          <div className="absolute right-[-5px] top-[12%] z-20 hidden w-[190px] rounded-2xl border border-purple-400/30 bg-black/70 p-5 backdrop-blur-xl lg:block">
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
              BENEFITS
          ========================================= */}

          <div className="absolute bottom-4 right-0 z-20 hidden w-[220px] space-y-4 lg:block">
            {productData.benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon];

              return (
                <div
                  key={benefit.title}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300">
                    <Icon size={16} />
                  </div>

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