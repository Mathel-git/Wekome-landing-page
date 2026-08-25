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
      className="relative overflow-hidden bg-[#05040b] pt-[76px] text-white"
    >
      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      {/* Main Purple Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[650px] w-[650px] rounded-full bg-purple-600/20 blur-[150px]" />

      {/* Secondary Glow */}
      <div className="pointer-events-none absolute left-[25%] top-[40%] h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[130px]" />

      {/* Mobile Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[55%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px] lg:hidden" />

      {/* Decorative Rings */}
      <div className="pointer-events-none absolute -right-[250px] -top-[220px] hidden h-[750px] w-[750px] rounded-full border border-purple-500/30 lg:block" />

      <div className="pointer-events-none absolute -right-[230px] -top-[200px] hidden h-[700px] w-[700px] rounded-full border-[2px] border-purple-400/30 shadow-[0_0_80px_rgba(168,85,247,0.25)] lg:block" />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1440px]
          items-start
          px-5
          py-10
          sm:px-8
          sm:py-14
          lg:min-h-[calc(100vh-76px)]
          lg:grid-cols-[1fr_1fr]
          lg:items-center
          lg:px-12
          lg:py-20
        "
      >

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
          <h1
            className="
              max-w-[700px]
              text-[48px]
              font-black
              leading-[0.94]
              tracking-[-0.05em]
              sm:text-[64px]
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
              mt-6
              max-w-[550px]
              text-sm
              leading-6
              text-gray-400
              sm:mt-7
              sm:text-lg
              sm:leading-7
            "
          >
            {productData.description}
          </p>

          {/* =========================================
              FEATURE HIGHLIGHTS
          ========================================= */}

          <div
            className="
              mt-8
              grid
              grid-cols-5
              gap-1
              sm:mt-9
              sm:gap-x-5
              sm:gap-y-7
            "
          >
            {productData.features.map((feature) => {
              const Icon = iconMap[feature.icon];

              return (
                <div
                  key={feature.title}
                  className="group min-w-0"
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-2
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-purple-500/30
                      bg-purple-500/10
                      text-purple-300
                      transition
                      duration-300
                      group-hover:border-purple-400
                      group-hover:bg-purple-500/20
                      sm:mb-3
                      sm:h-10
                      sm:w-10
                    "
                  >
                    <Icon
                      size={16}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <p className="truncate text-[8px] font-bold tracking-wide text-white sm:text-[9px]">
                    {feature.title}
                  </p>

                  {/* Description */}
                  <p className="mt-1 line-clamp-2 text-[7px] leading-3 text-gray-500 sm:text-[9px] sm:leading-4">
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
              max-w-[600px]
              grid-cols-3
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              sm:mt-9
            "
          >

            {/* Original Price */}
            <div className="px-3 py-4 sm:px-5">
              <p className="text-[7px] uppercase tracking-wider text-gray-500 sm:text-[9px]">
                Original Price
              </p>

              <p className="mt-1 text-sm font-bold text-gray-400 line-through sm:text-lg">
                {productData.originalPrice}
              </p>
            </div>

            {/* Promo Price */}
            <div className="bg-purple-600/20 px-3 py-4 sm:px-5">
              <p className="text-[7px] uppercase tracking-wider text-purple-300 sm:text-[9px]">
                Promo Price
              </p>

              <p className="mt-1 text-lg font-black text-yellow-300 sm:text-2xl">
                {productData.promoPrice}
              </p>
            </div>

            {/* Savings */}
            <div className="px-3 py-4 sm:px-5">
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
              gap-2
              sm:mt-7
              sm:flex-row
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
                flex-1
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-500
                px-3
                py-3.5
                text-center
                shadow-[0_0_30px_rgba(168,85,247,0.25)]
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]
                sm:gap-3
                sm:px-7
                sm:py-4
              "
            >

              {/* WhatsApp Icon */}
              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  sm:h-9
                  sm:w-9
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48A11.82 11.82 0 0012.05 0C5.49 0 .15 5.34.15 11.9c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.87 11.87 0 005.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.44-8.43zM12.06 21.8h-.01a9.88 9.88 0 01-5.04-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.86 9.86 0 01-1.51-5.28C2.17 6.44 6.6 2 12.05 2c2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 012.89 7c0 5.45-4.43 9.9-9.86 9.9zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                </svg>
              </span>

              <span className="text-left">
                <span className="block text-[7px] font-medium uppercase tracking-wider opacity-70 sm:text-[8px]">
                  Order Now on WhatsApp
                </span>

                <span className="text-xs font-bold sm:text-sm">
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
                px-4
                py-3.5
                text-xs
                font-bold
                transition
                duration-300
                hover:-translate-y-1
                hover:border-purple-400/60
                hover:bg-purple-500/10
                sm:px-8
                sm:py-4
                sm:text-sm
              "
            >
              <ShoppingBag size={17} />

              SHOP NOW
            </a>

          </div>

        </div>

        {/* =========================================
            RIGHT PRODUCT AREA
        ========================================= */}

        <div
          className="
            relative
            mt-6
            flex
            h-[330px]
            items-center
            justify-center
            sm:mt-8
            sm:h-[390px]
            lg:mt-0
            lg:min-h-[560px]
            lg:h-auto
          "
        >

          {/* Main Product Glow */}
          <div
            className="
              absolute
              h-[260px]
              w-[210px]
              rounded-full
              bg-purple-600/30
              blur-[85px]
              sm:h-[320px]
              sm:w-[250px]
              lg:h-[430px]
              lg:w-[330px]
              lg:blur-[110px]
            "
          />

          {/* Bottom Glow */}
          <div
            className="
              absolute
              bottom-4
              h-[60px]
              w-[280px]
              rounded-[50%]
              bg-purple-600/30
              blur-[40px]
              sm:w-[350px]
              lg:bottom-12
              lg:h-[80px]
              lg:w-[400px]
              lg:blur-[50px]
            "
          />

          {/* =========================================
              REAL POWER BANK IMAGE
          ========================================= */}

          <div
            className="
              relative
              z-10
              flex
              h-full
              w-full
              items-center
              justify-center
            "
          >

            <img
              src="/images/products/powerbank-hero.png"
              alt="WEKOME WP-66 20,000mAh Power Bank"
              className="
                w-[290px]
                max-w-none
                scale-[1.25]
                object-contain
                drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)]

                sm:w-[340px]
                sm:scale-[1.25]

                lg:w-full
                lg:max-w-[680px]
                lg:scale-150
              "
            />

          </div>

          {/* =========================================
              CAPACITY BADGE
          ========================================= */}

          <div
            className="
              absolute
              right-0
              top-[12%]
              z-20
              hidden
              w-[190px]
              rounded-2xl
              border
              border-purple-400/30
              bg-black/70
              p-5
              backdrop-blur-xl
              lg:block
            "
          >

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

          <div
            className="
              absolute
              bottom-4
              right-0
              z-20
              hidden
              w-[220px]
              space-y-4
              lg:block
            "
          >

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