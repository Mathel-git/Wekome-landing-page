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
  const features = productData.features.slice(0, 5);
  const benefits = productData.benefits.slice(0, 4);

  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#05040b]
        pt-[76px]
        text-white
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
            sm:h-[700px]
            sm:w-[700px]
          "
        />

        <div
          className="
            absolute
            right-[5%]
            bottom-[100px]
            h-[350px]
            w-[350px]
            rounded-full
            bg-purple-600/15
            blur-[110px]
          "
        />

        <div
          className="
            absolute
            -right-[330px]
            -top-[250px]
            h-[700px]
            w-[700px]
            rounded-full
            border
            border-purple-500/20
            sm:-right-[280px]
            sm:-top-[220px]
            sm:h-[850px]
            sm:w-[850px]
          "
        />

        <div
          className="
            absolute
            -right-[290px]
            -top-[220px]
            h-[630px]
            w-[630px]
            rounded-full
            border
            border-purple-400/10
            sm:-right-[240px]
            sm:-top-[190px]
            sm:h-[760px]
            sm:w-[760px]
          "
        />
      </div>

      {/* =========================================================
          HERO GRID

          MOBILE:
          LEFT      | PRODUCT       | RIGHT
          ~50%      | ~30%          | ~20%

          DESKTOP:
          LEFT      | PRODUCT       | RIGHT
          ~48%      | ~34%          | ~18%
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
          px-4
          pb-8
          sm:px-7
          sm:pb-12
          lg:px-10
          lg:pb-14
        "
      >
        <div
          className="
            grid
            min-h-[850px]
            grid-cols-[50%_30%_20%]
            items-start

            sm:min-h-[900px]
            sm:grid-cols-[50%_30%_20%]

            lg:min-h-[calc(100vh-76px)]
            lg:grid-cols-[48%_34%_18%]
            lg:items-start
          "
        >
          {/* =====================================================
              LEFT COLUMN
          ====================================================== */}

          <div
            className="
              relative
              z-20
              min-w-0
              pt-6
              pr-2

              sm:pt-9
              sm:pr-4

              lg:pt-16
              lg:pr-8
            "
          >
            {/* Product label */}

            <div
              className="
                mb-4
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
                  shrink-0
                  rounded-md
                  bg-purple-600
                  px-2.5
                  py-1.5
                  text-[8px]
                  font-bold
                  tracking-wider

                  sm:px-3
                  sm:text-[10px]

                  lg:px-4
                  lg:py-2
                  lg:text-xs
                "
              >
                {productData.model}
              </span>

              <span
                className="
                  truncate
                  text-[7px]
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

            {/* Heading */}

            <h1
              className="
                max-w-full
                text-[35px]
                font-black
                leading-[0.92]
                tracking-[-0.055em]

                sm:text-[50px]

                lg:max-w-[650px]
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

            {/* Description */}

            <p
              className="
                mt-5
                max-w-[310px]
                text-[10px]
                leading-5
                text-gray-400

                sm:mt-7
                sm:max-w-[420px]
                sm:text-sm
                sm:leading-6

                lg:mt-8
                lg:max-w-[500px]
                lg:text-lg
                lg:leading-7
              "
            >
              {productData.description}
            </p>

            {/* ===================================================
                FIVE MAIN FEATURES
            ==================================================== */}

            <div
              className="
                mt-8
                grid
                grid-cols-5
                gap-1

                sm:mt-10
                sm:gap-2

                lg:mt-12
                lg:gap-3
              "
            >
              {features.map((feature) => {
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

                        sm:h-9
                        sm:w-9

                        lg:mb-3
                        lg:h-11
                        lg:w-11
                      "
                    >
                      <Icon
                        size={14}
                        className="sm:h-4 sm:w-4 lg:h-[18px] lg:w-[18px]"
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

                        lg:text-[10px]
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

                        sm:text-[7px]
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

            {/* ===================================================
                PRICE
            ==================================================== */}

            <div
              className="
                mt-8
                grid
                grid-cols-3
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]

                sm:mt-10

                lg:mt-12
              "
            >
              <div
                className="
                  min-w-0
                  px-2
                  py-3

                  sm:px-4
                  sm:py-4

                  lg:px-5
                  lg:py-5
                "
              >
                <p
                  className="
                    text-[5px]
                    uppercase
                    tracking-wider
                    text-gray-500

                    sm:text-[7px]

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

                    lg:text-xl
                  "
                >
                  {productData.originalPrice}
                </p>
              </div>

              <div
                className="
                  min-w-0
                  bg-purple-600/20
                  px-2
                  py-3

                  sm:px-4
                  sm:py-4

                  lg:px-5
                  lg:py-5
                "
              >
                <p
                  className="
                    text-[5px]
                    uppercase
                    tracking-wider
                    text-purple-300

                    sm:text-[7px]

                    lg:text-[9px]
                  "
                >
                  Promo Price
                </p>

                <p
                  className="
                    mt-1
                    truncate
                    text-[14px]
                    font-black
                    text-yellow-300

                    sm:text-xl

                    lg:text-2xl
                  "
                >
                  {productData.promoPrice}
                </p>
              </div>

              <div
                className="
                  min-w-0
                  px-2
                  py-3

                  sm:px-4
                  sm:py-4

                  lg:px-5
                  lg:py-5
                "
              >
                <p
                  className="
                    text-[5px]
                    uppercase
                    tracking-wider
                    text-gray-500

                    sm:text-[7px]

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

                    lg:text-xl
                  "
                >
                  {productData.savings}
                </p>
              </div>
            </div>

            {/* ===================================================
                BUTTONS
            ==================================================== */}

            <div
              className="
                mt-4
                grid
                grid-cols-[1fr_auto]
                gap-2

                sm:mt-6
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
                  transition
                  duration-300
                  hover:-translate-y-1

                  sm:gap-2
                  sm:px-4
                  sm:py-4
                "
              >
                <span
                  className="
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10

                    sm:h-8
                    sm:w-8
                  "
                >
                  <WhatsAppIcon
                    size={15}
                    className="sm:h-[18px] sm:w-[18px]"
                  />
                </span>

                <span className="min-w-0 text-left">
                  <span
                    className="
                      block
                      truncate
                      text-[5px]
                      font-medium
                      uppercase
                      tracking-wider
                      opacity-70

                      sm:text-[7px]
                    "
                  >
                    Order Now on WhatsApp
                  </span>

                  <span
                    className="
                      block
                      truncate
                      text-[9px]
                      font-bold

                      sm:text-xs
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
                  w-[72px]
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
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-purple-400/60
                  hover:bg-purple-500/10

                  sm:w-[100px]
                  sm:gap-2
                  sm:text-[9px]
                "
              >
                <ShoppingBag
                  size={13}
                  className="sm:h-4 sm:w-4"
                />

                <span>SHOP NOW</span>
              </a>
            </div>
          </div>

          {/* =====================================================
              CENTER COLUMN — LARGE POWER BANK
          ====================================================== */}

          <div
            className="
              relative
              z-10
              h-[650px]
              min-w-0

              sm:h-[720px]

              lg:h-[800px]
          "
          >
            {/* Product glow */}

            <div
              className="
                absolute
                left-1/2
                top-[42%]
                h-[300px]
                w-[190px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-purple-600/30
                blur-[90px]

                sm:h-[400px]
                sm:w-[260px]

                lg:h-[550px]
                lg:w-[360px]
                lg:blur-[120px]
              "
            />

            {/* Power bank */}

            <div
              className="
                absolute
                left-1/2
                top-[82px]
                flex
                h-[480px]
                w-full
                -translate-x-1/2
                items-start
                justify-center

                sm:top-[90px]
                sm:h-[580px]

                lg:top-[80px]
                lg:h-[680px]
              "
            >
              <img
                src="/images/products/powerbank-hero.png"
                alt="WEKOME WP-66 20,000mAh Power Bank"
                className="
                  h-auto
                  w-[175px]
                  max-w-none
                  object-contain
                  drop-shadow-[0_35px_70px_rgba(0,0,0,0.75)]

                  sm:w-[230px]

                  lg:w-[430px]
                  xl:w-[500px]
                "
              />
            </div>
          </div>

          {/* =====================================================
              RIGHT COLUMN

              20,000mAh CARD
              ↓
              TRAVEL
              ↓
              MORE POWER
              ↓
              SAFE CHARGING
              ↓
              WIDE COMPATIBILITY
          ====================================================== */}

          <div
            className="
              relative
              z-20
              min-w-0
              pt-7

              sm:pt-10

              lg:pt-20
            "
          >
            {/* Capacity card */}

            <div
              className="
                w-full
                rounded-xl
                border
                border-purple-400/30
                bg-black/70
                p-2
                backdrop-blur-xl

                sm:p-3

                lg:p-5
              "
            >
              <div className="flex items-end gap-1">
                <span
                  className="
                    text-[18px]
                    font-black

                    sm:text-2xl

                    lg:text-4xl
                  "
                >
                  {productData.capacity}
                </span>

                <span
                  className="
                    mb-0.5
                    text-[6px]
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
                  mt-1
                  text-[5px]
                  uppercase
                  tracking-[0.16em]
                  text-gray-500

                  sm:text-[7px]

                  lg:text-[9px]
                "
              >
                Real Capacity
              </p>

              <div className="my-2 h-px bg-white/10 lg:my-3" />

              <p
                className="
                  text-[6px]
                  leading-3
                  text-gray-300

                  sm:text-[8px]
                  sm:leading-4

                  lg:text-xs
                  lg:leading-5
                "
              >
                More power.
                <br />
                Less worry.
              </p>
            </div>

            {/* ===================================================
                BENEFITS
            ==================================================== */}

            <div
              className="
                mt-5
                space-y-4

                sm:mt-7
                sm:space-y-6

                lg:mt-10
                lg:space-y-8
              "
            >
              {benefits.map((benefit) => {
                const Icon = iconMap[benefit.icon];

                return (
                  <div
                    key={benefit.title}
                    className="
                      flex
                      min-w-0
                      items-start
                      gap-1.5

                      sm:gap-2

                      lg:gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-7
                        w-7
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

                        lg:h-10
                        lg:w-10
                      "
                    >
                      <Icon
                        size={12}
                        className="sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4"
                      />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          text-[6px]
                          font-bold
                          leading-3
                          text-white

                          sm:text-[8px]
                          sm:leading-4

                          lg:text-[10px]
                          lg:leading-5
                        "
                      >
                        {benefit.title}
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[5px]
                          leading-3
                          text-gray-500

                          sm:text-[7px]
                          sm:leading-3

                          lg:text-[9px]
                          lg:leading-4
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
      </div>
    </section>
  );
}

export default Hero;