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

/* =========================================================
   WHATSAPP LOGO
========================================================= */
function WhatsAppIcon({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16.002 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.352.612 4.562 1.684 6.48L2.667 29.333l7.05-1.647A13.27 13.27 0 0 0 16.002 29.333c7.363 0 13.331-5.971 13.331-13.333S23.365 2.667 16.002 2.667Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M11.083 9.333c.278-.044.556.104.7.367l1.327 2.5c.125.236.11.524-.04.744l-1.067 1.544c-.06.087-.07.2-.02.294.52 1.03 1.343 1.852 2.374 2.373.095.048.207.04.294-.02l1.543-1.068c.22-.15.509-.165.745-.04l2.5 1.328c.263.14.41.42.366.698l-.216 1.36c-.09.57-.583 1.01-1.16 1.01-4.79 0-8.67-3.88-8.67-8.667 0-.578.44-1.071 1.01-1.162l1.36-.214Z"
        fill="currentColor"
      />
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
        text-white

        /* MOBILE */
        min-h-[1040px]

        /* TABLET */
        sm:min-h-[900px]

        /* DESKTOP */
        lg:min-h-[calc(100vh-76px)]
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main purple glow */}
        <div
          className="
            absolute
            -right-[180px]
            top-[40px]
            h-[520px]
            w-[520px]
            rounded-full
            bg-purple-700/20
            blur-[120px]

            sm:-right-[160px]
            sm:top-[30px]
            sm:h-[650px]
            sm:w-[650px]

            lg:-right-[120px]
            lg:top-[40px]
            lg:h-[800px]
            lg:w-[800px]
          "
        />

        {/* Lower glow */}
        <div
          className="
            absolute
            right-[5%]
            bottom-[0]
            h-[350px]
            w-[350px]
            rounded-full
            bg-purple-600/15
            blur-[110px]

            sm:h-[450px]
            sm:w-[450px]

            lg:h-[600px]
            lg:w-[600px]
          "
        />

        {/* Decorative rings */}
        <div
          className="
            absolute
            -right-[300px]
            -top-[280px]
            h-[650px]
            w-[650px]
            rounded-full
            border
            border-purple-500/20

            sm:-right-[250px]
            sm:-top-[220px]
            sm:h-[750px]
            sm:w-[750px]

            lg:-right-[180px]
            lg:-top-[250px]
            lg:h-[950px]
            lg:w-[950px]
          "
        />

        <div
          className="
            absolute
            -right-[280px]
            -top-[250px]
            h-[600px]
            w-[600px]
            rounded-full
            border
            border-purple-400/20

            sm:-right-[230px]
            sm:-top-[200px]
            sm:h-[700px]
            sm:w-[700px]

            lg:-right-[160px]
            lg:-top-[220px]
            lg:h-[900px]
            lg:w-[900px]
          "
        />
      </div>

      {/* =====================================================
          HERO WRAPPER

          IMPORTANT:
          We deliberately DON'T use a normal mobile
          one-column stack.

          The mobile composition remains left + right,
          just like the reference image.
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          min-h-[1040px]
          max-w-[1500px]

          /* MOBILE */
          px-5

          /* TABLET */
          sm:min-h-[900px]
          sm:px-7

          /* DESKTOP */
          lg:grid
          lg:min-h-[calc(100vh-76px)]
          lg:grid-cols-[52%_48%]
          lg:items-center
          lg:px-10
          xl:px-14
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-30

            /* MOBILE */
            w-[61%]
            pt-[66px]

            /* TABLET */
            sm:w-[57%]
            sm:pt-[70px]

            /* DESKTOP */
            lg:w-full
            lg:max-w-[680px]
            lg:pt-0
          "
        >
          {/* -------------------------------------------------
              PRODUCT BADGE
          -------------------------------------------------- */}

          <div
            className="
              mb-5
              flex
              items-center
              gap-2

              sm:mb-6
              sm:gap-3

              lg:mb-7
            "
          >
            <span
              className="
                rounded-md
                bg-purple-600
                px-3
                py-2
                text-[9px]
                font-bold
                tracking-wider

                sm:px-3.5
                sm:text-[10px]

                lg:px-4
                lg:py-2.5
                lg:text-xs
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

                sm:text-[10px]

                lg:text-xs
                lg:tracking-[0.15em]
              "
            >
              {productData.series}
            </span>
          </div>

          {/* -------------------------------------------------
              HEADING
          -------------------------------------------------- */}

          <h1
            className="
              max-w-[350px]
              text-[39px]
              font-black
              leading-[0.92]
              tracking-[-0.055em]

              sm:text-[50px]

              md:text-[58px]

              lg:max-w-[700px]
              lg:text-[76px]

              xl:text-[84px]
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

          {/* -------------------------------------------------
              DESCRIPTION
          -------------------------------------------------- */}

          <p
            className="
              mt-6
              max-w-[355px]
              text-[11px]
              leading-5
              text-gray-400

              sm:mt-7
              sm:text-sm
              sm:leading-6

              lg:mt-8
              lg:max-w-[530px]
              lg:text-lg
              lg:leading-7
          "
          >
            {productData.description}
          </p>

          {/* =================================================
              FIVE FEATURES

              MOBILE:
              Keep all 5 in ONE horizontal row.
              They stay on the left side.
          ================================================== */}

          <div
            className="
              mt-8
              grid
              w-[calc(100vw-40px)]
              max-w-[650px]
              grid-cols-5
              gap-1

              sm:mt-9
              sm:gap-2

              lg:mt-10
              lg:gap-4
            "
          >
            {productData.features.slice(0, 5).map((feature) => {
              const Icon = iconMap[feature.icon];

              return (
                <div
                  key={feature.title}
                  className="min-w-0"
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

                      sm:h-10
                      sm:w-10

                      lg:mb-3
                      lg:h-12
                      lg:w-12
                    "
                  >
                    <Icon
                      size={15}
                      className="
                        sm:h-[17px]
                        sm:w-[17px]

                        lg:h-[20px]
                        lg:w-[20px]
                      "
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

                      lg:text-[10px]
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

                      sm:text-[8px]
                      sm:leading-4

                      lg:text-[9px]
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
          ================================================== */}

          <div
            className="
              mt-8
              grid
              w-[calc(100vw-40px)]
              max-w-[665px]
              grid-cols-3
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]

              sm:mt-9

              lg:mt-10
            "
          >
            {/* Original price */}
            <div
              className="
                px-3
                py-3

                sm:px-5
                sm:py-4

                lg:px-6
                lg:py-5
              "
            >
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
                  text-[13px]
                  font-bold
                  text-gray-400
                  line-through

                  sm:text-lg

                  lg:text-xl
                "
              >
                {productData.originalPrice}
              </p>
            </div>

            {/* Promo */}
            <div
              className="
                bg-purple-600/20
                px-3
                py-3

                sm:px-5
                sm:py-4

                lg:px-6
                lg:py-5
              "
            >
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
                  text-[17px]
                  font-black
                  text-yellow-300

                  sm:text-2xl

                  lg:text-3xl
                "
              >
                {productData.promoPrice}
              </p>
            </div>

            {/* Savings */}
            <div
              className="
                px-3
                py-3

                sm:px-5
                sm:py-4

                lg:px-6
                lg:py-5
              "
            >
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
                  text-[13px]
                  font-bold
                  text-white

                  sm:text-lg

                  lg:text-xl
                "
              >
                {productData.savings}
              </p>
            </div>
          </div>

          {/* =================================================
              CTA BUTTONS
          ================================================== */}

          <div
            className="
              mt-6
              flex
              w-[calc(100vw-40px)]
              max-w-[665px]
              gap-2

              sm:mt-7
              sm:gap-3

              lg:mt-8
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

                lg:gap-4
              "
            >
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

                  sm:h-9
                  sm:w-9

                  lg:h-10
                  lg:w-10
                "
              >
                <WhatsAppIcon
                  size={21}
                  className="text-white"
                />
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

                    lg:text-[9px]
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

                    lg:text-base
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
                w-[112px]
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

                sm:w-[155px]
                sm:px-5
                sm:py-4
                sm:text-sm

                lg:w-[170px]
              "
            >
              <ShoppingBag size={16} />

              <span>SHOP NOW</span>
            </a>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE

            THIS IS THE KEY PART.

            The product and right-side information are absolutely
            positioned so they DON'T fall underneath the left
            content on mobile.
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            z-20

            /* =================================================
               MOBILE
               ================================================= */

            right-[-8px]
            top-[70px]
            h-[710px]
            w-[43%]

            /* TABLET */
            sm:right-[-5px]
            sm:top-[72px]
            sm:h-[680px]
            sm:w-[44%]

            /* DESKTOP */
            lg:relative
            lg:right-auto
            lg:top-auto
            lg:h-[720px]
            lg:w-full
          "
        >
          {/* -------------------------------------------------
              PRODUCT GLOW
          -------------------------------------------------- */}

          <div
            className="
              absolute
              left-1/2
              top-[150px]
              h-[300px]
              w-[190px]
              -translate-x-1/2
              rounded-full
              bg-purple-600/30
              blur-[85px]

              sm:top-[150px]
              sm:h-[380px]
              sm:w-[250px]

              lg:top-1/2
              lg:h-[480px]
              lg:w-[350px]
              lg:-translate-y-1/2
              lg:blur-[110px]
            "
          />

          {/* =================================================
              POWER BANK

              IMPORTANT:
              On mobile this starts near the WP-66 line.
              It is large and stays on the RIGHT.
          ================================================== */}

          <div
            className="
              absolute
              right-[8px]
              top-[42px]
              flex
              items-start
              justify-center

              sm:right-[12px]
              sm:top-[35px]

              lg:inset-0
              lg:items-center
            "
          >
            <img
              src="/images/products/powerbank-hero.png"
              alt="WEKOME WP-66 20,000mAh Power Bank"
              className="
                h-auto
                w-[155px]
                max-w-none
                object-contain
                drop-shadow-[0_30px_70px_rgba(0,0,0,0.75)]

                sm:w-[205px]

                md:w-[250px]

                lg:w-[480px]

                xl:w-[520px]
              "
            />
          </div>

          {/* =================================================
              CAPACITY CARD

              It sits beside the TOP portion of the power bank.
          ================================================== */}

          <div
            className="
              absolute
              right-[-2px]
              top-[170px]
              z-30
              w-[145px]
              rounded-xl
              border
              border-purple-400/30
              bg-black/75
              p-3
              backdrop-blur-xl

              sm:right-0
              sm:top-[165px]
              sm:w-[165px]
              sm:p-4

              lg:right-0
              lg:top-[10%]
              lg:w-[195px]
              lg:p-5

              xl:w-[210px]
            "
          >
            <div className="flex items-end gap-1">
              <span
                className="
                  text-[25px]
                  font-black
                  leading-none

                  sm:text-2xl

                  lg:text-3xl
                "
              >
                {productData.capacity}
              </span>

              <span
                className="
                  mb-0.5
                  text-[8px]
                  font-bold
                  text-purple-400

                  sm:text-[9px]

                  lg:text-sm
                "
              >
                {productData.capacityUnit}
              </span>
            </div>

            <p
              className="
                mt-2
                text-[6px]
                uppercase
                tracking-[0.2em]
                text-gray-500

                sm:text-[7px]

                lg:text-[9px]
              "
            >
              Real Capacity
            </p>

            <div className="mt-3 h-px bg-white/10" />

            <p
              className="
                mt-3
                text-[8px]
                leading-4
                text-gray-300

                sm:text-[9px]

                lg:text-xs
              "
            >
              More power.
              <br />
              Less worry.
            </p>
          </div>

          {/* =================================================
              BENEFITS

              IMPORTANT:
              They are on the RIGHT, directly beside the
              power bank, and start around the headline area.
          ================================================== */}

          <div
            className="
              absolute
              right-[-2px]
              top-[390px]
              z-30
              w-[155px]
              space-y-4

              sm:right-0
              sm:top-[380px]
              sm:w-[175px]
              sm:space-y-5

              lg:right-0
              lg:top-[39%]
              lg:w-[220px]
              lg:space-y-6
            "
          >
            {productData.benefits.slice(0, 4).map((benefit) => {
              const Icon = iconMap[benefit.icon];

              return (
                <div
                  key={benefit.title}
                  className="
                    flex
                    items-center
                    gap-2

                    sm:gap-3

                    lg:gap-3
                  "
                >
                  {/* Benefit icon */}
                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-purple-500/30
                      bg-purple-500/10
                      text-purple-300

                      sm:h-9
                      sm:w-9

                      lg:h-10
                      lg:w-10
                    "
                  >
                    <Icon
                      size={14}
                      className="
                        sm:h-4
                        sm:w-4

                        lg:h-[18px]
                        lg:w-[18px]
                      "
                    />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        truncate
                        text-[7px]
                        font-bold
                        uppercase
                        text-white

                        sm:text-[8px]

                        lg:text-[10px]
                      "
                    >
                      {benefit.title}
                    </p>

                    <p
                      className="
                        mt-0.5
                        truncate
                        text-[6px]
                        leading-3
                        text-gray-500

                        sm:text-[7px]

                        lg:text-[9px]
                      "
                    >
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