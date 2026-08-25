import {
  BatteryCharging,
  Cable,
  Plane,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Zap,
  MessageCircle,
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
      className="relative min-h-screen overflow-hidden bg-[#05040b] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute -right-[25%] top-[8%] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[130px]" />

      <div className="pointer-events-none absolute left-[20%] top-[35%] h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Desktop decorative rings */}
      <div className="pointer-events-none absolute -right-[250px] -top-[220px] hidden h-[750px] w-[750px] rounded-full border border-purple-500/30 lg:block" />

      <div className="pointer-events-none absolute -right-[230px] -top-[200px] hidden h-[700px] w-[700px] rounded-full border-2 border-purple-400/20 lg:block" />

      {/* =====================================================
          MAIN HERO

          IMPORTANT:
          The grid NEVER becomes one column.
          This keeps the power bank on the RIGHT on mobile.
      ===================================================== */}

      <div
        className="
          relative z-10 mx-auto grid
          min-h-screen
          max-w-[1440px]
          grid-cols-[1.15fr_0.85fr]
          items-center
          gap-2
          px-4
          pt-[90px]
          pb-10

          sm:grid-cols-[1.1fr_0.9fr]
          sm:px-6
          sm:pt-[100px]

          lg:grid-cols-[1fr_1fr]
          lg:gap-8
          lg:px-12
          lg:pt-[110px]
          lg:pb-16
        "
      >

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div className="relative z-20 min-w-0">

          {/* Badge */}
          <div className="mb-4 flex items-center gap-2 sm:mb-6 sm:gap-3">
            <span
              className="
                rounded-md
                bg-purple-600
                px-2.5
                py-1.5
                text-[8px]
                font-bold
                tracking-wider
                sm:px-3
                sm:text-[10px]
              "
            >
              {productData.model}
            </span>

            <span
              className="
                whitespace-nowrap
                text-[8px]
                font-medium
                tracking-[0.12em]
                text-gray-400
                sm:text-xs
                sm:tracking-[0.15em]
              "
            >
              {productData.series}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-[700px]
              text-[32px]
              font-black
              leading-[0.94]
              tracking-[-0.055em]

              min-[400px]:text-[36px]

              sm:text-[48px]

              md:text-[58px]

              lg:text-[76px]

              xl:text-[84px]
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
              max-w-[520px]
              text-[10px]
              leading-5
              text-gray-400

              min-[400px]:text-[11px]

              sm:mt-6
              sm:text-sm
              sm:leading-6

              lg:mt-7
              lg:text-lg
              lg:leading-7
            "
          >
            {productData.description}
          </p>

          {/* =====================================================
              FEATURES
          ===================================================== */}

          <div
            className="
              mt-6
              grid
              grid-cols-5
              gap-1

              sm:mt-8
              sm:gap-3

              lg:mt-9
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
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-purple-500/30
                      bg-purple-500/10
                      text-purple-300

                      sm:h-9
                      sm:w-9

                      lg:mb-3
                      lg:h-10
                      lg:w-10
                    "
                  >
                    <Icon
                      size={13}
                      className="sm:h-4 sm:w-4"
                    />
                  </div>

                  <p
                    className="
                      truncate
                      text-[6px]
                      font-bold
                      tracking-wide
                      text-white

                      sm:text-[8px]

                      lg:text-[9px]
                    "
                  >
                    {feature.title}
                  </p>

                  <p
                    className="
                      mt-1
                      hidden
                      text-[7px]
                      leading-3
                      text-gray-500

                      sm:block
                      lg:text-[9px]
                      lg:leading-4
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =====================================================
              PRICING
          ===================================================== */}

          <div
            className="
              mt-6
              grid
              max-w-[680px]
              grid-cols-3
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]

              sm:mt-8
              lg:mt-9
            "
          >

            {/* Original */}
            <div className="min-w-0 px-2.5 py-3 sm:px-4 sm:py-4 lg:px-5">
              <p
                className="
                  text-[6px]
                  uppercase
                  tracking-wider
                  text-gray-500

                  sm:text-[8px]

                  lg:text-[9px]
                "
              >
                Original Price
              </p>

              <p
                className="
                  mt-1
                  truncate
                  text-[11px]
                  font-bold
                  text-gray-400
                  line-through

                  sm:text-base

                  lg:text-lg
                "
              >
                {productData.originalPrice}
              </p>
            </div>

            {/* Promo */}
            <div className="min-w-0 bg-purple-600/20 px-2.5 py-3 sm:px-4 sm:py-4 lg:px-5">
              <p
                className="
                  text-[6px]
                  uppercase
                  tracking-wider
                  text-purple-300

                  sm:text-[8px]

                  lg:text-[9px]
                "
              >
                Promo Price
              </p>

              <p
                className="
                  mt-1
                  truncate
                  text-[15px]
                  font-black
                  text-yellow-300

                  sm:text-xl

                  lg:text-2xl
                "
              >
                {productData.promoPrice}
              </p>
            </div>

            {/* Savings */}
            <div className="min-w-0 px-2.5 py-3 sm:px-4 sm:py-4 lg:px-5">
              <p
                className="
                  text-[6px]
                  uppercase
                  tracking-wider
                  text-gray-500

                  sm:text-[8px]

                  lg:text-[9px]
                "
              >
                You Save
              </p>

              <p
                className="
                  mt-1
                  truncate
                  text-[11px]
                  font-bold
                  text-white

                  sm:text-base

                  lg:text-lg
                "
              >
                {productData.savings}
              </p>
            </div>

          </div>

          {/* =====================================================
              CTA BUTTONS
          ===================================================== */}

          <div
            className="
              mt-5
              grid
              grid-cols-[1.45fr_0.85fr]
              gap-2

              sm:mt-7
              sm:flex
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
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-500
                px-3
                py-3
                shadow-[0_0_30px_rgba(168,85,247,0.25)]
                transition
                duration-300
                hover:-translate-y-1

                sm:gap-3
                sm:px-5
                sm:py-4
                lg:px-7
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

                  sm:h-8
                  sm:w-8
                "
              >
                <MessageCircle
                  size={15}
                  strokeWidth={2}
                />
              </span>

              <span className="min-w-0 text-left">
                <span
                  className="
                    block
                    truncate
                    text-[6px]
                    font-medium
                    uppercase
                    tracking-wider
                    opacity-70

                    sm:text-[8px]
                  "
                >
                  Order Now on WhatsApp
                </span>

                <span
                  className="
                    block
                    text-[10px]
                    font-bold

                    sm:text-sm
                  "
                >
                  08162409010
                </span>
              </span>
            </a>

            {/* Shop */}
            <a
              href="#order"
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-purple-500/30
                bg-white/[0.03]
                px-3
                py-3
                text-[9px]
                font-bold
                transition
                duration-300
                hover:-translate-y-1
                hover:border-purple-400/60
                hover:bg-purple-500/10

                sm:px-7
                sm:py-4
                sm:text-sm
              "
            >
              <ShoppingBag
                size={15}
                className="sm:h-[17px] sm:w-[17px]"
              />

              SHOP NOW
            </a>

          </div>
        </div>

        {/* =====================================================
            RIGHT PRODUCT AREA

            THIS IS THE IMPORTANT PART.

            The product remains on the RIGHT even on phones.
        ===================================================== */}

        <div
          className="
            relative
            flex
            h-full
            min-h-[500px]
            min-w-0
            items-center
            justify-center

            sm:min-h-[600px]

            lg:min-h-[700px]
          "
        >

          {/* Product glow */}
          <div
            className="
              pointer-events-none
              absolute
              right-[10%]
              top-1/2
              h-[250px]
              w-[180px]
              -translate-y-1/2
              rounded-full
              bg-purple-600/30
              blur-[70px]

              sm:h-[350px]
              sm:w-[260px]

              lg:h-[500px]
              lg:w-[350px]
              lg:blur-[110px]
            "
          />

          {/* Bottom glow */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-[18%]
              right-[5%]
              h-[60px]
              w-[200px]
              rounded-[50%]
              bg-purple-600/30
              blur-[40px]

              sm:w-[300px]

              lg:w-[400px]
            "
          />

          {/* =====================================================
              POWER BANK

              Mobile: right side
              Desktop: right side
          ===================================================== */}

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
                relative
                right-[-8%]
                w-[145%]
                max-w-none
                object-contain
                drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]

                min-[400px]:w-[140%]

                sm:right-[-5%]
                sm:w-[125%]

                lg:right-[-2%]
                lg:w-[125%]
              "
            />
          </div>

          {/* =====================================================
              CAPACITY BADGE
              Hide on mobile so it doesn't crush the layout.
          ===================================================== */}

          <div
            className="
              absolute
              right-0
              top-[14%]
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

          {/* =====================================================
              BENEFITS
          ===================================================== */}

          <div
            className="
              absolute
              bottom-[8%]
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