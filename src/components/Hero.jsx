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

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.87c0 2.09.55 4.13 1.59 5.93L.08 24l6.35-1.66a11.86 11.86 0 0 0 5.62 1.43h.01c6.54 0 11.86-5.32 11.86-11.87 0-3.17-1.23-6.15-3.4-8.42ZM12.06 21.77h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.87 9.87 0 1 1 8.39 4.65Zm5.41-7.39c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.67-2.07-.18-.3-.02-.46.14-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.28.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#05040b]
        pt-[76px]
        text-white
        min-h-[820px]
        sm:min-h-[900px]
        lg:min-h-screen
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}
        <div
          className="
            absolute
            -right-[220px]
            top-[30px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-purple-700/20
            blur-[120px]
            sm:h-[650px]
            sm:w-[650px]
            lg:-right-40
            lg:top-20
          "
        />

        {/* Lower glow */}
        <div
          className="
            absolute
            right-[0]
            bottom-[50px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-purple-600/15
            blur-[100px]
            sm:h-[450px]
            sm:w-[450px]
          "
        />

        {/* Ring 1 */}
        <div
          className="
            absolute
            -right-[330px]
            -top-[280px]
            h-[700px]
            w-[700px]
            rounded-full
            border
            border-purple-500/20
            sm:-right-[270px]
            sm:-top-[230px]
            sm:h-[760px]
            sm:w-[760px]
          "
        />

        {/* Ring 2 */}
        <div
          className="
            absolute
            -right-[300px]
            -top-[250px]
            h-[640px]
            w-[640px]
            rounded-full
            border
            border-purple-400/20
            sm:-right-[240px]
            sm:-top-[210px]
            sm:h-[700px]
            sm:w-[700px]
          "
        />
      </div>

      {/* =====================================================
          HERO CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
          px-4
          sm:px-7
          lg:grid
          lg:min-h-[calc(100vh-76px)]
          lg:grid-cols-2
          lg:items-center
          lg:px-12
        "
      >

        {/* =====================================================
            MOBILE PRODUCT
            IMPORTANT:

            This is ABSOLUTELY positioned on mobile.

            It starts beside WP-66 and stays on the RIGHT.
            It does NOT create a new row.
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-12px]
            top-[82px]
            z-20
            flex
            h-[350px]
            w-[47%]
            items-start
            justify-center

            sm:right-[-8px]
            sm:top-[88px]
            sm:h-[430px]
            sm:w-[45%]

            lg:relative
            lg:right-auto
            lg:top-auto
            lg:h-[680px]
            lg:w-full
          "
        >
          {/* Product glow */}
          <div
            className="
              absolute
              left-1/2
              top-[45%]
              h-[240px]
              w-[190px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-purple-600/30
              blur-[80px]

              sm:h-[340px]
              sm:w-[260px]
              sm:blur-[100px]

              lg:h-[430px]
              lg:w-[330px]
              lg:blur-[110px]
            "
          />

          {/* =================================================
              POWER BANK
          ================================================= */}

          <img
            src="/images/products/powerbank-hero.png"
            alt="WEKOME WP-66 20,000mAh Power Bank"
            className="
              relative
              z-10
              mt-0
              h-auto
              w-[275px]
              max-w-none
              object-contain
              drop-shadow-[0_30px_70px_rgba(0,0,0,0.75)]

              sm:w-[350px]

              lg:w-full
              lg:max-w-[540px]
            "
          />

          {/* =================================================
              CAPACITY CARD
              Desktop / tablet only
          ================================================= */}

          <div
            className="
              absolute
              right-[-5px]
              top-[8%]
              z-30
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

          {/* =================================================
              DESKTOP BENEFITS
          ================================================= */}

          <div
            className="
              absolute
              bottom-4
              right-0
              z-30
              hidden
              w-[220px]
              space-y-4
              lg:block
            "
          >
            {productData.benefits.slice(0, 4).map((benefit) => {
              const Icon = iconMap[benefit.icon];

              return (
                <div
                  key={benefit.title}
                  className="flex items-center gap-3"
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-purple-500/30
                      bg-purple-500/10
                      text-purple-300
                    "
                  >
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

        {/* =====================================================
            LEFT CONTENT

            MOBILE:
            Content deliberately stays LEFT at ~57%.
            Product occupies RIGHT ~43%.
        ====================================================== */}

        <div
          className="
            relative
            z-40
            w-[58%]
            pt-7

            sm:w-[57%]
            sm:pt-10

            lg:w-full
            lg:max-w-[650px]
            lg:pt-6
          "
        >
          {/* =================================================
              PRODUCT BADGE
          ================================================= */}

          <div
            className="
              mb-4
              flex
              items-center
              gap-2

              sm:mb-6
              sm:gap-3
            "
          >
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
                text-[7px]
                font-medium
                tracking-[0.1em]
                text-gray-400

                sm:text-xs
                sm:tracking-[0.15em]
              "
            >
              {productData.series}
            </span>
          </div>

          {/* =================================================
              HEADING
          ================================================= */}

          <h1
            className="
              max-w-[270px]
              text-[38px]
              font-black
              leading-[0.91]
              tracking-[-0.055em]

              sm:max-w-[400px]
              sm:text-[54px]

              md:text-[64px]

              lg:max-w-[700px]
              lg:text-[84px]
            "
          >
            Power That
            <br />

            <span
              className="
                bg-gradient-to-r
                from-purple-400
                via-fuchsia-500
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              Goes With You.
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-5
              max-w-[300px]
              text-[10px]
              leading-5
              text-gray-400

              sm:mt-7
              sm:max-w-[400px]
              sm:text-base
              sm:leading-7

              lg:max-w-[500px]
              lg:text-lg
            "
          >
            {productData.description}
          </p>

          {/* =================================================
              FEATURES

              IMPORTANT:
              These remain underneath the LEFT content.
              They don't move underneath the power bank.
          ================================================= */}

          <div
            className="
              mt-7
              grid
              grid-cols-2
              gap-x-3
              gap-y-5

              sm:mt-9
              sm:grid-cols-5
              sm:gap-3

              lg:max-w-[650px]
            "
          >
            {productData.features.slice(0, 5).map((feature) => {
              const Icon = iconMap[feature.icon];

              return (
                <div
                  key={feature.title}
                  className="min-w-0"
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
                      sm:mb-3
                    "
                  >
                    <Icon
                      size={14}
                      className="sm:h-[17px] sm:w-[17px]"
                    />
                  </div>

                  <p
                    className="
                      truncate
                      text-[7px]
                      font-bold
                      tracking-wide
                      text-white

                      sm:text-[9px]
                    "
                  >
                    {feature.title}
                  </p>

                  <p
                    className="
                      mt-1
                      truncate
                      text-[6px]
                      leading-3
                      text-gray-500

                      sm:text-[9px]
                      sm:leading-4
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =================================================
              PRICE
          ================================================= */}

          <div
            className="
              mt-7
              grid
              w-[calc(100vw-32px)]
              max-w-[665px]
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
              <p className="text-[6px] uppercase tracking-wider text-gray-500 sm:text-[9px]">
                Original Price
              </p>

              <p className="mt-1 text-[13px] font-bold text-gray-400 line-through sm:text-lg">
                {productData.originalPrice}
              </p>
            </div>

            {/* Promo */}
            <div className="bg-purple-600/20 px-3 py-3 sm:px-5 sm:py-4">
              <p className="text-[6px] uppercase tracking-wider text-purple-300 sm:text-[9px]">
                Promo Price
              </p>

              <p className="mt-1 text-[17px] font-black text-yellow-300 sm:text-2xl">
                {productData.promoPrice}
              </p>
            </div>

            {/* Savings */}
            <div className="px-3 py-3 sm:px-5 sm:py-4">
              <p className="text-[6px] uppercase tracking-wider text-gray-500 sm:text-[9px]">
                You Save
              </p>

              <p className="mt-1 text-[13px] font-bold text-white sm:text-lg">
                {productData.savings}
              </p>
            </div>
          </div>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <div
            className="
              mt-5
              flex
              w-[calc(100vw-32px)]
              max-w-[665px]
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
                px-2
                py-3
                shadow-[0_0_30px_rgba(168,85,247,0.25)]
                transition
                duration-300
                hover:-translate-y-1

                sm:gap-3
                sm:px-5
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

                  sm:h-8
                  sm:w-8
                "
              >
                <WhatsAppIcon size={17} />
              </span>

              <span className="min-w-0 text-left">
                <span
                  className="
                    block
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
                    truncate
                    text-[10px]
                    font-bold

                    sm:text-sm
                  "
                >
                  08162409010
                </span>
              </span>
            </a>

            {/* Shop Now */}
            <a
              href="#order"
              className="
                flex
                w-[115px]
                shrink-0
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

                sm:w-[165px]
                sm:px-5
                sm:py-4
                sm:text-sm
              "
            >
              <ShoppingBag size={15} />

              <span>SHOP NOW</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;