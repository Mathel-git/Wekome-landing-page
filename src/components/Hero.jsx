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
        text-white
        min-h-[760px]
        sm:min-h-[820px]
        lg:min-h-[calc(100vh-76px)]
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-[180px]
            top-[40px]
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
            right-[0]
            bottom-[40px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-purple-600/15
            blur-[110px]
            sm:h-[500px]
            sm:w-[500px]
          "
        />

        {/* Large decorative rings */}
        <div
          className="
            absolute
            -right-[330px]
            -top-[280px]
            h-[680px]
            w-[680px]
            rounded-full
            border
            border-purple-500/20
            sm:-right-[280px]
            sm:-top-[240px]
            sm:h-[800px]
            sm:w-[800px]
          "
        />

        <div
          className="
            absolute
            -right-[310px]
            -top-[250px]
            h-[620px]
            w-[620px]
            rounded-full
            border
            border-purple-400/15
            sm:-right-[260px]
            sm:-top-[210px]
            sm:h-[730px]
            sm:w-[730px]
          "
        />
      </div>

      {/* =========================================================
          DESKTOP + MOBILE CONTAINER
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          sm:px-7
          lg:px-12
        "
      >
        {/* =======================================================
            MOBILE LAYOUT

            This is deliberately built as a separate composition.

            LEFT:
            WP-66
            Heading
            Description
            5 Features

            RIGHT:
            Large Powerbank
            Capacity
            Benefits

            BOTTOM:
            Price
            Buttons
        ======================================================== */}

        <div className="relative block min-h-[760px] pt-7 sm:min-h-[820px] sm:pt-10 lg:hidden">
          {/* =====================================================
              LEFT SIDE CONTENT
          ====================================================== */}

          <div
            className="
              relative
              z-20
              w-[62%]
              pr-2
            "
          >
            {/* Product label */}
            <div className="mb-5 flex items-center gap-2">
              <span
                className="
                  rounded-md
                  bg-purple-600
                  px-3
                  py-2
                  text-[9px]
                  font-bold
                  tracking-wider
                  shadow-[0_0_20px_rgba(147,51,234,0.25)]
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
                "
              >
                {productData.series}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-[270px]
                text-[42px]
                font-black
                leading-[0.91]
                tracking-[-0.055em]
                sm:max-w-[340px]
                sm:text-[54px]
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
                mt-6
                max-w-[310px]
                text-[11px]
                leading-5
                text-gray-400
                sm:text-sm
                sm:leading-6
              "
            >
              {productData.description}
            </p>
          </div>

          {/* =====================================================
              RIGHT SIDE — POWERBANK

              IMPORTANT:
              It starts high, close to the WP-66 line.
              It is deliberately LARGE.
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              right-[5px]
              top-[45px]
              z-10
              h-[335px]
              w-[40%]
              sm:right-[12px]
              sm:top-[55px]
              sm:h-[390px]
            "
          >
            {/* Product glow */}
            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[220px]
                w-[150px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-purple-600/35
                blur-[70px]
                sm:h-[300px]
                sm:w-[210px]
                sm:blur-[90px]
              "
            />

            {/* Powerbank */}
            <div className="absolute inset-0 flex items-start justify-center">
              <img
                src="/images/products/powerbank-hero.png"
                alt="WEKOME WP-66 20,000mAh Power Bank"
                className="
                  h-auto
                  w-[155px]
                  max-w-none
                  object-contain
                  drop-shadow-[0_25px_55px_rgba(0,0,0,0.75)]
                  sm:w-[185px]
                "
              />
            </div>
          </div>

          {/* =====================================================
              CAPACITY CARD

              It sits BESIDE the powerbank.
              It does NOT cover the powerbank.
          ====================================================== */}

          <div
            className="
              absolute
              right-0
              top-[285px]
              z-30
              w-[142px]
              rounded-xl
              border
              border-purple-400/30
              bg-[#08060e]/90
              p-3
              shadow-[0_15px_40px_rgba(0,0,0,0.45)]
              backdrop-blur-xl
              sm:top-[315px]
              sm:w-[165px]
              sm:p-4
            "
          >
            <div className="flex items-end gap-1">
              <span className="text-[25px] font-black leading-none sm:text-[29px]">
                {productData.capacity}
              </span>

              <span className="mb-0.5 text-[8px] font-bold text-purple-400 sm:text-[10px]">
                {productData.capacityUnit}
              </span>
            </div>

            <p className="mt-2 text-[6px] uppercase tracking-[0.2em] text-gray-500 sm:text-[7px]">
              Real Capacity
            </p>

            <div className="my-2 h-px bg-white/10" />

            <p className="text-[8px] leading-4 text-gray-300 sm:text-[9px]">
              More power.
              <br />
              Less worry.
            </p>
          </div>

          {/* =====================================================
              FIVE MAIN FEATURES

              These stay on the LEFT side.
              They do NOT become a vertical list.
          ====================================================== */}

          <div
            className="
              absolute
              left-0
              top-[350px]
              z-20
              grid
              w-[62%]
              grid-cols-2
              gap-x-4
              gap-y-6
              pr-3
              sm:top-[390px]
              sm:gap-x-6
              sm:gap-y-7
            "
          >
            {productData.features.slice(0, 5).map((feature) => {
              const Icon = iconMap[feature.icon];

              return (
                <div
                  key={feature.title}
                  className="
                    min-w-0
                  "
                >
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
                    "
                  >
                    <Icon size={16} />
                  </div>

                  <p
                    className="
                      text-[8px]
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
                      text-[7px]
                      leading-3
                      text-gray-500
                      sm:text-[8px]
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =====================================================
              RIGHT BENEFITS

              These begin beside the feature section and run
              vertically down the RIGHT side.
          ====================================================== */}

          <div
            className="
              absolute
              right-0
              top-[430px]
              z-30
              w-[38%]
              space-y-5
              sm:top-[450px]
              sm:space-y-6
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
                  "
                >
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
                    "
                  >
                    <Icon size={14} />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        whitespace-nowrap
                        text-[7px]
                        font-bold
                        text-white
                        sm:text-[8px]
                      "
                    >
                      {benefit.title}
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[6px]
                        leading-3
                        text-gray-500
                        sm:text-[7px]
                      "
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =====================================================
              PRICE

              FULL WIDTH BELOW BOTH SIDES.
          ====================================================== */}

          <div
            className="
              absolute
              left-0
              right-0
              top-[610px]
              z-40
              grid
              grid-cols-3
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
              sm:top-[650px]
            "
          >
            {/* Original */}
            <div className="px-3 py-3 sm:px-5 sm:py-4">
              <p className="text-[6px] uppercase tracking-wider text-gray-500 sm:text-[8px]">
                Original Price
              </p>

              <p className="mt-1 text-[13px] font-bold text-gray-400 line-through sm:text-lg">
                {productData.originalPrice}
              </p>
            </div>

            {/* Promo */}
            <div className="bg-purple-600/20 px-3 py-3 sm:px-5 sm:py-4">
              <p className="text-[6px] uppercase tracking-wider text-purple-300 sm:text-[8px]">
                Promo Price
              </p>

              <p className="mt-1 text-[17px] font-black text-yellow-300 sm:text-2xl">
                {productData.promoPrice}
              </p>
            </div>

            {/* Savings */}
            <div className="px-3 py-3 sm:px-5 sm:py-4">
              <p className="text-[6px] uppercase tracking-wider text-gray-500 sm:text-[8px]">
                You Save
              </p>

              <p className="mt-1 text-[13px] font-bold text-white sm:text-lg">
                {productData.savings}
              </p>
            </div>
          </div>

          {/* =====================================================
              BUTTONS

              FULL WIDTH BELOW PRICE.
          ====================================================== */}

          <div
            className="
              absolute
              left-0
              right-0
              top-[685px]
              z-50
              flex
              gap-2
              sm:top-[730px]
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
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                "
              >
                <WhatsAppIcon size={19} />
              </span>

              <span className="min-w-0 text-left">
                <span className="block text-[6px] font-medium uppercase tracking-wider opacity-70 sm:text-[8px]">
                  Order Now on WhatsApp
                </span>

                <span className="block truncate text-[10px] font-bold sm:text-sm">
                  08162409010
                </span>
              </span>
            </a>

            {/* Shop */}
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
                sm:w-[150px]
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

        {/* =========================================================
            DESKTOP LAYOUT
        ========================================================== */}

        <div
          className="
            relative
            hidden
            min-h-[calc(100vh-76px)]
            lg:grid
            lg:grid-cols-[52%_48%]
            lg:items-center
            lg:gap-0
          "
        >
          {/* =====================================================
              DESKTOP LEFT
          ====================================================== */}

          <div className="relative z-30 max-w-[680px] py-12">
            {/* Badge */}
            <div className="mb-6 flex items-center gap-3">
              <span
                className="
                  rounded-md
                  bg-purple-600
                  px-4
                  py-2
                  text-xs
                  font-bold
                  tracking-wider
                "
              >
                {productData.model}
              </span>

              <span className="text-sm font-medium tracking-[0.15em] text-gray-400">
                {productData.series}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-[76px]
                font-black
                leading-[0.91]
                tracking-[-0.055em]
                xl:text-[86px]
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
            <p className="mt-7 max-w-[560px] text-lg leading-7 text-gray-400">
              {productData.description}
            </p>

            {/* Features */}
            <div className="mt-10 grid grid-cols-5 gap-3">
              {productData.features.slice(0, 5).map((feature) => {
                const Icon = iconMap[feature.icon];

                return (
                  <div key={feature.title}>
                    <div
                      className="
                        mb-3
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-purple-500/30
                        bg-purple-500/10
                        text-purple-300
                      "
                    >
                      <Icon size={18} />
                    </div>

                    <p className="text-[10px] font-bold tracking-wide">
                      {feature.title}
                    </p>

                    <p className="mt-1 text-[9px] leading-4 text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Price */}
            <div className="mt-8 grid max-w-[650px] grid-cols-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <div className="px-5 py-4">
                <p className="text-[9px] uppercase tracking-wider text-gray-500">
                  Original Price
                </p>

                <p className="mt-1 text-xl font-bold text-gray-400 line-through">
                  {productData.originalPrice}
                </p>
              </div>

              <div className="bg-purple-600/20 px-5 py-4">
                <p className="text-[9px] uppercase tracking-wider text-purple-300">
                  Promo Price
                </p>

                <p className="mt-1 text-2xl font-black text-yellow-300">
                  {productData.promoPrice}
                </p>
              </div>

              <div className="px-5 py-4">
                <p className="text-[9px] uppercase tracking-wider text-gray-500">
                  You Save
                </p>

                <p className="mt-1 text-xl font-bold">
                  {productData.savings}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex max-w-[650px] gap-3">
              <a
                href={`https://wa.me/${productData.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  bg-gradient-to-r
                  from-purple-600
                  to-fuchsia-500
                  px-5
                  py-4
                  shadow-[0_0_30px_rgba(168,85,247,0.25)]
                  transition
                  duration-300
                  hover:-translate-y-1
                "
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <WhatsAppIcon size={21} />
                </span>

                <span className="text-left">
                  <span className="block text-[9px] font-medium uppercase tracking-wider opacity-70">
                    Order Now on WhatsApp
                  </span>

                  <span className="block text-sm font-bold">
                    08162409010
                  </span>
                </span>
              </a>

              <a
                href="#order"
                className="
                  flex
                  w-[170px]
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-purple-500/30
                  bg-white/[0.03]
                  px-5
                  py-4
                  text-sm
                  font-bold
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-purple-400/60
                  hover:bg-purple-500/10
                "
              >
                <ShoppingBag size={17} />
                SHOP NOW
              </a>
            </div>
          </div>

          {/* =====================================================
              DESKTOP RIGHT — PRODUCT
          ====================================================== */}

          <div className="relative h-[720px]">
            {/* Glow */}
            <div
              className="
                absolute
                left-[42%]
                top-[45%]
                h-[480px]
                w-[360px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-purple-600/30
                blur-[110px]
              "
            />

            {/* Powerbank */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/images/products/powerbank-hero.png"
                alt="WEKOME WP-66 20,000mAh Power Bank"
                className="
                  w-[500px]
                  max-w-none
                  object-contain
                  drop-shadow-[0_30px_70px_rgba(0,0,0,0.75)]
                  xl:w-[560px]
                "
              />
            </div>

            {/* Capacity */}
            <div
              className="
                absolute
                right-0
                top-[100px]
                w-[190px]
                rounded-xl
                border
                border-purple-400/30
                bg-black/70
                p-5
                backdrop-blur-xl
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

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-gray-500">
                Real Capacity
              </p>

              <div className="mt-3 h-px bg-white/10" />

              <p className="mt-3 text-xs text-gray-300">
                More power.
                <br />
                Less worry.
              </p>
            </div>

            {/* Benefits */}
            <div className="absolute bottom-[70px] right-0 w-[220px] space-y-6">
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
                        h-10
                        w-10
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
                      <p className="text-[10px] font-bold text-white">
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
      </div>
    </section>
  );
}

export default Hero;