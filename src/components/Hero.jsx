import {
  ArrowRight,
  BatteryCharging,
  Cable,
  Check,
  Laptop,
  Plane,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    value: "22.5W",
    label: "SUPER FAST",
  },
  {
    icon: Cable,
    value: "4-IN-1",
    label: "BUILT-IN CABLES",
  },
  {
    icon: Smartphone,
    value: "5",
    label: "OUTPUTS",
  },
  {
    icon: BatteryCharging,
    value: "LED",
    label: "DISPLAY",
  },
  {
    icon: ShieldCheck,
    value: "SAFE",
    label: "MULTI-PROTECTION",
  },
];

const benefits = [
  {
    icon: Plane,
    title: "TRAVEL FRIENDLY",
    description: "Carry-on Approved",
  },
  {
    icon: BatteryCharging,
    title: "MORE POWER.",
    description: "All-Day Power You Can Trust.",
  },
  {
    icon: ShieldCheck,
    title: "SAFE CHARGING",
    description: "Advanced Protection",
  },
  {
    icon: Smartphone,
    title: "WIDE COMPATIBILITY",
    description: "Phones, Tablets & More",
  },
];

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M12 2C6.477 2 2 6.477 2 12c0 1.76.454 3.414 1.25 4.87L2 22l5.27-1.22A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Z"
        fill="#25D366"
      />

      <path
        d="M16.7 13.93c-.26-.13-1.54-.76-1.78-.84-.24-.09-.41-.13-.59.13-.17.26-.67.84-.82 1.01-.15.18-.3.2-.56.07-.26-.13-1.1-.41-2.1-1.3-.78-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.59-1.42-.8-1.95-.21-.51-.42-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.69c.13.17 1.83 2.8 4.43 3.92.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.17-.5-.3Z"
        fill="white"
      />
    </svg>
  );
}

function FeatureItem({ icon: Icon, value, label }) {
  return (
    <div className="flex min-w-0 flex-col items-center text-center">
      <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/[0.08] text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.08)] sm:h-10 sm:w-10">
        <Icon size={16} strokeWidth={1.8} />
      </div>

      <span className="whitespace-nowrap text-[8px] font-black tracking-[0.04em] text-white sm:text-[9px]">
        {value}
      </span>

      <span className="mt-0.5 whitespace-nowrap text-[6px] font-medium tracking-[0.04em] text-gray-500 sm:text-[7px]">
        {label}
      </span>
    </div>
  );
}

function BenefitItem({ icon: Icon, title, description }) {
  return (
    <div className="group flex items-start gap-2.5">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/[0.08] text-purple-300 transition-all duration-300 group-hover:border-purple-400/40 group-hover:bg-purple-500/15">
        <Icon size={14} strokeWidth={1.8} />
      </div>

      <div className="min-w-0">
        <h3 className="text-[8px] font-bold tracking-[0.06em] text-white sm:text-[9px]">
          {title}
        </h3>

        <p className="mt-1 text-[7px] leading-relaxed text-gray-500 sm:text-[8px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#05040b] text-white"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[8%] h-[420px] w-[420px] rounded-full bg-purple-700/[0.09] blur-[120px]" />

        <div className="absolute right-[-12%] top-[18%] h-[500px] w-[500px] rounded-full bg-fuchsia-700/[0.07] blur-[140px]" />

        <div className="absolute bottom-[-20%] left-[30%] h-[450px] w-[450px] rounded-full bg-purple-900/[0.07] blur-[130px]" />

        {/* subtle curved lines */}
        <div className="absolute left-[-15%] top-[18%] h-[500px] w-[850px] rounded-[50%] border border-purple-500/[0.05] rotate-[-12deg]" />

        <div className="absolute right-[-25%] top-[5%] h-[650px] w-[900px] rounded-[50%] border border-purple-500/[0.04] rotate-[12deg]" />
      </div>

      {/* =========================================================
          DESKTOP HERO
      ========================================================== */}

      <div className="relative mx-auto hidden min-h-[calc(100vh-76px)] max-w-[1500px] px-8 pb-12 pt-[108px] lg:block xl:px-12">
        <div className="grid min-h-[610px] grid-cols-[38%_40%_22%] items-start">
          {/* -----------------------------------------------------
              LEFT CONTENT
          ------------------------------------------------------ */}

          <div className="relative z-20 pt-7 pr-4 xl:pt-10">
            {/* Product badge */}
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-full border border-purple-400/30 bg-purple-500/[0.08] px-3 py-1.5 text-[9px] font-bold tracking-[0.12em] text-purple-300">
                WP-66
              </span>

              <span className="text-[9px] font-semibold tracking-[0.18em] text-gray-500">
                KINKONG SERIES
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[560px] text-[clamp(52px,5vw,82px)] font-black leading-[0.88] tracking-[-0.055em]">
              Power That
              <br />
              Goes With
              <br />
              <span className="bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
                You.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[470px] text-[13px] leading-[1.8] text-gray-400">
              20,000mAh Power Bank with up to{" "}
              <span className="font-semibold text-white">
                22.5W Super Fast Charging.
              </span>
            </p>

            {/* Features */}
            <div className="mt-8 grid max-w-[520px] grid-cols-5 gap-2 border-y border-white/[0.07] py-5">
              {features.map((feature) => (
                <FeatureItem key={feature.value} {...feature} />
              ))}
            </div>

            {/* Pricing */}
            <div className="mt-7 flex items-end gap-5">
              <div>
                <p className="mb-1 text-[8px] font-medium tracking-[0.08em] text-gray-600">
                  ORIGINAL PRICE
                </p>

                <p className="text-[14px] font-semibold text-gray-500 line-through">
                  ₦24,000
                </p>
              </div>

              <div>
                <p className="mb-1 text-[8px] font-bold tracking-[0.08em] text-purple-400">
                  TODAY'S PRICE
                </p>

                <p className="text-[29px] font-black leading-none tracking-[-0.04em] text-white">
                  ₦20,900
                </p>
              </div>

              <div className="rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-3 py-1.5">
                <span className="text-[8px] font-bold text-purple-300">
                  SAVE ₦3,100
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 flex items-center gap-3">
              <a
  href="https://wa.me/2348162409010?text=Hello%20I%20want%20to%20order%20the%20Wekome%20WP-66%20Power%20Bank"
  target="_blank"
  rel="noreferrer"
  className="group flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[9px] font-black uppercase tracking-[0.08em] text-[#05040b] transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-100"
>
  <WhatsAppIcon size={17} />
  WhatsApp
</a>

              <a
                href="#order"
                className="group flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 text-[9px] font-black uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-purple-500/10"
              >
                Shop Now
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* -----------------------------------------------------
              PRODUCT
          ------------------------------------------------------ */}
{/* PRODUCT */}
<div className="relative z-30 flex h-[620px] items-center justify-center">
  {/* Purple glow */}
  <div className="absolute left-1/2 top-1/2 h-[400px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[100px]" />

  {/* Product */}
  <img
    src="/products/wp66-main.png"
    alt="Wekome WP-66 Kinkong Series 20,000mAh Power Bank"
    className="relative z-50 block h-auto w-[430px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)] xl:w-[500px]"
    onError={(e) => {
      console.error("Power bank image failed to load:", e.currentTarget.src);
    }}
  />
</div>
            {/* floating capacity label */}
            <div className="absolute bottom-[45px] left-[4%] z-20 rounded-xl border border-white/10 bg-[#0b0913]/85 px-4 py-3 backdrop-blur-xl">
              <p className="text-[8px] font-semibold tracking-[0.15em] text-gray-500">
                POWER YOU CAN TRUST
              </p>

              <p className="mt-1 text-[13px] font-black text-white">
                22.5W SUPER FAST
              </p>
            </div>
          </div>

          {/* -----------------------------------------------------
              RIGHT COLUMN
          ------------------------------------------------------ */}

          <div className="relative z-20 pt-5 pl-4 xl:pt-10 xl:pl-7">
            {/* Capacity card */}
            <div className="rounded-2xl border border-purple-400/15 bg-gradient-to-br from-purple-500/[0.12] to-white/[0.02] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-bold tracking-[0.15em] text-purple-300">
                  REAL CAPACITY
                </span>

                <Check size={13} className="text-purple-300" />
              </div>

              <p className="mt-4 text-[30px] font-black leading-none tracking-[-0.04em]">
                20,000
                <span className="ml-1 text-[11px] font-bold tracking-normal text-gray-400">
                  mAh
                </span>
              </p>

              <p className="mt-2 text-[9px] leading-relaxed text-gray-500">
                More power.
                <br />
                Less worry.
              </p>
            </div>

            {/* Benefits */}
            <div className="mt-9 space-y-7">
              {benefits.map((benefit) => (
                <BenefitItem key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE HERO
      ========================================================== */}

      <div className="relative block min-h-[755px] px-4 pb-8 pt-[94px] sm:min-h-[790px] sm:px-6 lg:hidden">
        {/* =====================================================
            MOBILE TOP CONTENT
        ====================================================== */}

        <div className="relative z-30 w-[57%] pt-2 sm:w-[55%]">
          {/* Badge */}
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full border border-purple-400/30 bg-purple-500/[0.08] px-2.5 py-1 text-[7px] font-bold tracking-[0.1em] text-purple-300 sm:text-[8px]">
              WP-66
            </span>

            <span className="whitespace-nowrap text-[6px] font-semibold tracking-[0.12em] text-gray-500 sm:text-[7px]">
              KINKONG SERIES
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(39px,11vw,57px)] font-black leading-[0.88] tracking-[-0.055em]">
            Power That
            <br />
            Goes With
            <br />
            <span className="bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
              You.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-[235px] text-[8px] leading-[1.7] text-gray-400 sm:text-[9px]">
            20,000mAh Power Bank with up to{" "}
            <span className="font-semibold text-gray-200">
              22.5W Super Fast Charging.
            </span>
          </p>
        </div>

        {/* =====================================================
            MOBILE PRODUCT
        ====================================================== */}

<div className="absolute right-[15%] top-[115px] z-50 flex w-[42%] items-center justify-center sm:right-[17%]">
  {/* Glow */}
  <div className="absolute left-1/2 top-1/2 h-[220px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[60px]" />

  {/* Power Bank */}
  <img
    src="/products/wp66-main.png"
    alt="Wekome WP-66 20,000mAh Power Bank"
    className="relative z-50 block h-auto w-[175px] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)] sm:w-[210px]"
    onError={(e) => {
      console.error("Power bank image failed to load:", e.currentTarget.src);
    }}
  />
</div>

        {/* =====================================================
            MOBILE CAPACITY CARD Updated
        ====================================================== */}

        <div className="absolute right-3 top-[335px] z-30 w-[38%] sm:right-5 sm:top-[350px] sm:w-[35%]">
          <div className="rounded-xl border border-purple-400/15 bg-gradient-to-br from-purple-500/[0.13] to-white/[0.02] p-3 backdrop-blur-xl sm:rounded-2xl sm:p-4">
            <div className="flex items-center justify-between gap-1">
              <span className="text-[6px] font-bold tracking-[0.1em] text-purple-300 sm:text-[7px]">
                REAL CAPACITY
              </span>

              <Check size={10} className="text-purple-300" />
            </div>

            <p className="mt-2 text-[19px] font-black leading-none tracking-[-0.04em] sm:text-[24px]">
              20,000
              <span className="ml-0.5 text-[7px] font-bold tracking-normal text-gray-400 sm:text-[9px]">
                mAh
              </span>
            </p>

            <p className="mt-1.5 text-[6px] leading-relaxed text-gray-500 sm:text-[7px]">
              More power.
              <br />
              Less worry.
            </p>
          </div>
        </div>

        {/* =====================================================
            MOBILE BENEFITS
        ====================================================== */}

        <div className="absolute right-3 top-[445px] z-30 w-[39%] space-y-4 sm:right-5 sm:top-[465px] sm:w-[36%] sm:space-y-5">
          {benefits.map((benefit) => (
            <BenefitItem key={benefit.title} {...benefit} />
          ))}
        </div>

        {/* =====================================================
            MOBILE FEATURES
        ====================================================== */}

        <div className="absolute left-4 top-[380px] z-30 w-[54%] sm:left-6 sm:top-[395px] sm:w-[52%]">
          <div className="grid grid-cols-5 gap-1 border-y border-white/[0.07] py-4">
            {features.map((feature) => (
              <FeatureItem key={feature.value} {...feature} />
            ))}
          </div>
        </div>

        {/* =====================================================
            MOBILE PRICE
        ====================================================== */}

        <div className="absolute left-4 top-[485px] z-30 sm:left-6 sm:top-[500px]">
          <div className="flex items-end gap-3">
            <div>
              <p className="text-[6px] font-medium tracking-[0.06em] text-gray-600 sm:text-[7px]">
                ORIGINAL
              </p>

              <p className="text-[10px] font-semibold text-gray-500 line-through sm:text-[12px]">
                ₦24,000
              </p>
            </div>

            <div>
              <p className="text-[6px] font-bold tracking-[0.06em] text-purple-400 sm:text-[7px]">
                PROMO PRICE
              </p>

              <p className="text-[21px] font-black leading-none tracking-[-0.04em] sm:text-[25px]">
                ₦20,900
              </p>
            </div>

            <div className="rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-2 py-1 sm:px-2.5">
              <span className="text-[6px] font-bold text-purple-300 sm:text-[7px]">
                SAVE ₦3,100
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE CTA
        ====================================================== */}

        <div className="absolute left-4 top-[550px] z-40 flex w-[54%] gap-2 sm:left-6 sm:top-[565px] sm:w-[52%]">
          <a
  href="https://wa.me/2348162409010?text=Hello%20I%20want%20to%20order%20the%20Wekome%20WP-66%20Power%20Bank"
  target="_blank"
  rel="noreferrer"
  className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-white px-2 text-[7px] font-black uppercase tracking-[0.04em] text-[#05040b] transition-all duration-300 active:scale-95 sm:h-11 sm:text-[8px]"
>
  <WhatsAppIcon size={15} />
  WhatsApp
</a>

          <a
            href="#order"
            className="group flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2 text-[7px] font-black uppercase tracking-[0.04em] text-white transition-all duration-300 active:scale-95 sm:h-11 sm:text-[8px]"
          >
            Shop Now
            <ArrowRight size={11} />
          </a>
        </div>

        {/* =====================================================
            MOBILE BOTTOM DETAIL
        ====================================================== */}

        <div className="absolute bottom-5 left-4 right-4 z-20 flex items-center justify-between border-t border-white/[0.06] pt-3 sm:left-6 sm:right-6">
          <div className="flex items-center gap-1.5">
            <ShieldCheck
              size={11}
              strokeWidth={1.8}
              className="text-purple-400"
            />

            <span className="text-[6px] font-semibold tracking-[0.08em] text-gray-500 sm:text-[7px]">
              MULTI-SAFETY PROTECTION
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Laptop
              size={11}
              strokeWidth={1.8}
              className="text-purple-400"
            />

            <span className="text-[6px] font-semibold tracking-[0.08em] text-gray-500 sm:text-[7px]">
              WIDE COMPATIBILITY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}