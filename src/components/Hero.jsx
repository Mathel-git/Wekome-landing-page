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
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.05 0C5.5.0.18 5.32.18 11.87c0 2.09.55 4.13 1.59 5.93L.08 24l6.35-1.66a11.86 11.86 0 0 0 5.62 1.43h.01c6.54 0 11.86-5.32 11.86-11.87 0-3.17-1.23-6.15-3.4-8.42ZM12.06 21.77h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.87 9.87 0 1 1 8.39 4.65Zm5.41-7.39c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.67-2.07-.18-.3-.02-.46.14-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.52.07-.8.37-.28.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[760px]
        overflow-hidden
        bg-[#05040b]
        pt-[76px]
        text-white
        sm:min-h-[820px]
        lg:min-h-screen
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -right-[180px]
            top-[20px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-purple-700/20
            blur-[120px]
            sm:h-[650px]
            sm:w-[650px]
          "
        />

        <div
          className="
            absolute
            bottom-[20px]
            right-[5%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-purple-600/15
            blur-[100px]
            sm:h-[450px]
            sm:w-[450px]
          "
        />

        <div
          className="
            absolute
            -right-[320px]
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
          "
        />

        <div
          className="
            absolute
            -right-[290px]
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
          min-h-[684px]
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
            LEFT CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-30
            w-[59%]
            pt-8
            sm:w-[57%]
            sm:pt-12
            lg:w-full
            lg:max-w-[650px]
            lg:pt-6
          "
        >

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
              "
            >
              {productData.series}
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              max-w-[250px]
              text-[35px]
              font-black
              leading-[0.92]
              tracking-[-0.055em]
              sm:max-w-[350px]
              sm:text-[48px]
              md:text-[60px]
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

          {/* Description */}

          <p
            className="
              mt-5
              max-w-[240px]
              text-[10px]
              leading-5
              text-gray-400
              sm:max-w-[380px]
              sm:text-sm
              sm:leading-6
              lg:max-w-[500px]
              lg:text-lg
            "
          >
            {productData.description}
          </p>

          {/* =================================================
              FEATURES
          ================================================== */}

          <div
            className="
              mt-7
              flex
              w-full
              max-w-[650px]
              justify-between
              gap-1
              sm:mt-9
              sm:gap-3
              lg:grid
              lg:grid-cols-5
            "
          >
            {productData.features.slice(0, 5).map((feature) => {
              const Icon = iconMap[feature.icon];

              return (
                <div
                  key={feature.title}
                  className="min-w-0 flex-1"
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
                      sm:h-10
                      sm:w-10
                      lg:mb-3
                    "
                  >
                    <Icon size={13} className="sm:h-[17px] sm:w-[17px]" />
                  </div>

                  <p
                    className="
                      truncate
                      text-[6px]
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
                      text-[5px]
                      leading-3
                      text-gray-500
                      sm:text-[8px]
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
          ================================================== */}

          <div
            className="
              mt-7
              grid
              w-full
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
            <div className="px-2 py-3 sm:px-5 sm:py-4">
              <p className="text-[5px] uppercase tracking-wider text-gray-500 sm:text-[9px]">
                Original Price
              </p>

              <p className="mt-1 text-[11px] font-bold text-gray-400 line-through sm:text-lg">
                {productData.originalPrice}
              </p>
            </div>

            <div className="bg-purple-600/20 px-2 py-3 sm:px-5 sm:py-4">
              <p className="text-[5px] uppercase tracking-wider text-purple-300 sm:text-[9px]">
                Promo Price
              </p>

              <p className="mt-1 text-[14px] font-black text-yellow-300 sm:text-2xl">
                {productData.promoPrice}
              </p>
            </div>

            <div className="px-2 py-3 sm:px-5 sm:py-4">
              <p className="text-[5px] uppercase tracking-wider text-gray-500 sm:text-[9px]">
                You Save
              </p>

              <p className="mt-1 text-[11px] font-bold text-white sm:text-lg">
                {productData.savings}
              </p>
            </div>
          </div>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <div
            className="
              mt-5
              flex
              w-full
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
                gap-1.5
                rounded-lg
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-500
                px-2
                py-3
                shadow-[0_0_30px_rgba(168,85,247,0.25)]
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
                <span className="block text-[5px] font-medium uppercase tracking-wider opacity-70 sm:text-[8px]">
                  Order Now on WhatsApp
                </span>

                <span className="block truncate text-[9px] font-bold sm:text-sm">
                  08162409010
                </span>
              </span>
            </a>

            {/* Shop */}

            <a
              href="#order"
              className="
                flex
                w-[85px]
                shrink-0
                items-center
                justify-center
                gap-1
                rounded-lg
                border
                border-purple-500/30
                bg-white/[0.03]
                px-2
                py-3
                text-[7px]
                font-bold
                sm:w-[165px]
                sm:gap-2
                sm:px-5
                sm:py-4
                sm:text-sm
              "
            >
              <ShoppingBag size={14} />

              <span>SHOP NOW</span>
            </a>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE — POWERBANK + INFORMATION

            IMPORTANT:
            This remains a RIGHT-SIDE composition on MOBILE.
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-[105px]
            z-20
            h-[560px]
            w-[48%]

            sm:top-[110px]
            sm:h-[650px]

            lg:relative
            lg:right-auto
            lg:top-auto
            lg:h-[650px]
            lg:w-full
          "
        >

          {/* Product glow */}

          <div
            className="
              absolute
              left-[25%]
              top-[38%]
              h-[220px]
              w-[150px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-purple-600/30
              blur-[70px]
              sm:h-[350px]
              sm:w-[260px]
              sm:blur-[100px]
              lg:h-[430px]
              lg:w-[330px]
            "
          />

          {/* =================================================
              POWERBANK
          ================================================== */}

          <div
            className="
              absolute
              left-0
              top-[185px]
              flex
              items-center
              justify-center
              sm:top-[190px]
              lg:inset-0
            "
          >
            <img
              src="/images/products/powerbank-hero.png"
              alt="WEKOME WP-66 20,000mAh Power Bank"
              className="
                h-auto
                w-[105px]
                max-w-none
                object-contain
                drop-shadow-[0_30px_70px_rgba(0,0,0,0.7)]
                sm:w-[150px]
                lg:w-full
                lg:max-w-[520px]
              "
            />
          </div>

          {/* =================================================
              CAPACITY CARD
          ================================================== */}

          <div
            className="
              absolute
              right-0
              top-[135px]
              w-[75px]
              rounded-lg
              border
              border-purple-400/30
              bg-black/70
              p-2
              backdrop-blur-xl

              sm:top-[120px]
              sm:w-[115px]
              sm:p-3

              lg:right-0
              lg:top-[12%]
              lg:w-[190px]
              lg:p-5
            "
          >
            <div className="flex items-end gap-1">
              <span className="text-[14px] font-black sm:text-xl lg:text-3xl">
                {productData.capacity}
              </span>

              <span className="mb-0.5 text-[6px] font-bold text-purple-400 sm:text-[9px] lg:text-sm">
                {productData.capacityUnit}
              </span>
            </div>

            <p className="mt-1 text-[4px] uppercase tracking-[0.15em] text-gray-500 sm:text-[6px] lg:text-[9px]">
              Real Capacity
            </p>

            <div className="mt-1 h-px bg-white/10" />

            <p className="mt-1 text-[5px] leading-3 text-gray-300 sm:text-[7px] sm:leading-3 lg:text-xs">
              More power.
              <br />
              Less worry.
            </p>
          </div>

          {/* =================================================
              BENEFITS — NOW VISIBLE ON MOBILE
              AND POSITIONED BESIDE THE POWERBANK
          ================================================== */}

          <div
            className="
              absolute
              right-0
              top-[230px]
              w-[78px]
              space-y-4

              sm:top-[230px]
              sm:w-[115px]
              sm:space-y-5

              lg:top-auto
              lg:bottom-4
              lg:w-[220px]
              lg:space-y-4
            "
          >
            {productData.benefits.slice(0, 4).map((benefit) => {
              const Icon = iconMap[benefit.icon];

              return (
                <div
                  key={benefit.title}
                  className="flex items-start gap-1.5 sm:gap-2.5 lg:gap-3"
                >
                  <div
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-purple-500/30
                      bg-purple-500/10
                      text-purple-300

                      sm:h-8
                      sm:w-8

                      lg:h-9
                      lg:w-9
                    "
                  >
                    <Icon size={10} className="sm:h-3 sm:w-3 lg:h-4 lg:w-4" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[5px]
                        font-bold
                        leading-tight
                        text-white
                        sm:text-[7px]
                        lg:text-[9px]
                      "
                    >
                      {benefit.title}
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[4px]
                        leading-2
                        text-gray-500
                        sm:text-[6px]
                        lg:text-[8px]
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