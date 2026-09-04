import {
  ArrowRight,
  BatteryCharging,
  Cable,
  Check,
  Laptop,
  Plane,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import wp66Image from "../assets/wp66-main.png";

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

/* =========================================================
   WHATSAPP ICON
========================================================= */

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" fill="#25D366" />

      <path
        d="M16.7 13.93c-.26-.13-1.54-.76-1.78-.84-.24-.09-.41-.13-.59.13-.17.26-.67.84-.82 1.01-.15.18-.3.2-.56.07-.26-.13-1.1-.41-2.1-1.3-.78-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.59-1.42-.8-1.95-.21-.51-.42-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.69c.13.17 1.83 2.8 4.43 3.92.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.17-.5-.3Z"
        fill="white"
      />
    </svg>
  );
}

/* =========================================================
   FEATURE ITEM
========================================================= */

function FeatureItem({ icon: Icon, value, label }) {
  return (
    <div className="flex min-w-0 flex-col items-center text-center">
      <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/[0.08] text-purple-300 sm:h-9 sm:w-9">
        <Icon size={14} strokeWidth={1.8} />
      </div>

      <span className="whitespace-nowrap text-[7px] font-black tracking-[0.03em] text-white sm:text-[8px]">
        {value}
      </span>

      <span className="mt-0.5 whitespace-nowrap text-[5px] font-medium tracking-[0.03em] text-gray-500 sm:text-[6px]">
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   BENEFIT ITEM
========================================================= */

function BenefitItem({ icon: Icon, title, description }) {
  return (
    <div className="group flex items-start gap-2.5">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/[0.08] text-purple-300">
        <Icon size={14} strokeWidth={1.8} />
      </div>

      <div className="min-w-0">
        <h3 className="text-[8px] font-bold tracking-[0.05em] text-white sm:text-[9px]">
          {title}
        </h3>

        <p className="mt-1 text-[6px] leading-relaxed text-gray-500 sm:text-[7px]">
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/2348162409010?text=Hello%20I%20want%20to%20order%20the%20Wekome%20WP-66%20Power%20Bank";

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#05040b] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[8%] h-[420px] w-[420px] rounded-full bg-purple-700/[0.09] blur-[120px]" />

        <div className="absolute right-[-12%] top-[15%] h-[500px] w-[500px] rounded-full bg-fuchsia-700/[0.07] blur-[140px]" />

        <div className="absolute bottom-[-20%] left-[30%] h-[450px] w-[450px] rounded-full bg-purple-900/[0.07] blur-[130px]" />

        <div className="absolute left-[-15%] top-[18%] h-[500px] w-[850px] rotate-[-12deg] rounded-[50%] border border-purple-500/[0.05]" />

        <div className="absolute right-[-25%] top-[5%] h-[650px] w-[900px] rotate-[12deg] rounded-[50%] border border-purple-500/[0.04]" />
      </div>

      {/* =====================================================
          DESKTOP
      ====================================================== */}

      <div className="relative mx-auto hidden min-h-[calc(100vh-76px)] max-w-[1500px] px-8 pb-10 pt-[105px] lg:block xl:px-12">
        <div className="grid min-h-[620px] grid-cols-[38%_40%_22%] items-start">
          {/* =================================================
              LEFT
          ================================================= */}

          <div className="relative z-30 pt-7 pr-4 xl:pt-10">
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-full border border-purple-400/30 bg-purple-500/[0.08] px-3 py-1.5 text-[9px] font-bold tracking-[0.12em] text-purple-300">
                WP-66
              </span>

              <span className="text-[9px] font-semibold tracking-[0.18em] text-gray-500">
                KINKONG SERIES
              </span>
            </div>

            <h1 className="max-w-[560px] text-[clamp(52px,5vw,82px)] font-black leading-[0.88] tracking-[-0.055em]">
              Power That
              <br />
              Goes With
              <br />
              <span className="bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
                You.
              </span>
            </h1>

            <p className="mt-7 max-w-[470px] text-[13px] leading-[1.8] text-gray-400">
              20,000mAh Power Bank with up to{" "}
              <span className="font-semibold text-white">
                22.5W Super Fast Charging.
              </span>
            </p>

            {/* FEATURES */}
            <div className="mt-8 grid max-w-[520px] grid-cols-5 gap-2 border-y border-white/[0.07] py-5">
              {features.map((feature) => (
                <FeatureItem key={feature.value} {...feature} />
              ))}
            </div>

            {/* PRICE */}
            <div className="mt-7 flex items-end gap-5">
              <div>
                <p className="mb-1 text-[8px] tracking-[0.08em] text-gray-600">
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

                <p className="text-[29px] font-black leading-none tracking-[-0.04em]">
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
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[9px] font-black uppercase tracking-[0.08em] text-[#05040b] transition hover:-translate-y-0.5 hover:bg-purple-100"
              >
                <WhatsAppIcon size={17} />
                WhatsApp
              </a>

              <a
                href="#order"
                className="flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 text-[9px] font-black uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-purple-500/10"
              >
                Shop Now
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* =================================================
              CENTER PRODUCT
          ================================================= */}

          <div className="relative z-20 flex h-[650px] items-center justify-center">
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[100px]" />

            {/* Ring */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.05]" />

            {/* PRODUCT IMAGE */}
            <img
              src={wp66Image}
              alt="Wekome WP-66 Kinkong Series 20,000mAh Power Bank"
              className="relative z-30 block h-auto w-[620px] max-w-none object-contain drop-shadow-[0_35px_70px_rgba(0,0,0,0.8)] xl:w-[700px]"
            />

            {/* Small product label */}
            <div className="absolute bottom-[45px] left-[2%] z-40 rounded-xl border border-white/10 bg-[#0b0913]/90 px-4 py-3 backdrop-blur-xl">
              <p className="text-[7px] font-semibold tracking-[0.15em] text-gray-500">
                POWER YOU CAN TRUST
              </p>

              <p className="mt-1 text-[12px] font-black">
                22.5W SUPER FAST
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT
          ================================================= */}

          <div className="relative z-30 pt-8 pl-5 xl:pt-12 xl:pl-7">
            {/* Capacity */}
            <div className="rounded-2xl border border-purple-400/15 bg-gradient-to-br from-purple-500/[0.12] to-white/[0.02] p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-bold tracking-[0.15em] text-purple-300">
                  REAL CAPACITY
                </span>

                <Check size={13} className="text-purple-300" />
              </div>

              <p className="mt-4 text-[30px] font-black leading-none tracking-[-0.04em]">
                20,000
                <span className="ml-1 text-[11px] text-gray-400">
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

      {/* =====================================================
          MOBILE
      ====================================================== */}

      <div className="relative min-h-[735px] px-4 pb-7 pt-[92px] lg:hidden sm:min-h-[770px] sm:px-6">
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="relative z-30 w-[58%]">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full border border-purple-400/30 bg-purple-500/[0.08] px-2.5 py-1 text-[7px] font-bold tracking-[0.1em] text-purple-300">
              WP-66
            </span>

            <span className="whitespace-nowrap text-[6px] font-semibold tracking-[0.12em] text-gray-500">
              KINKONG SERIES
            </span>
          </div>

          <h1 className="text-[clamp(39px,11vw,55px)] font-black leading-[0.88] tracking-[-0.055em]">
            Power That
            <br />
            Goes With
            <br />
            <span className="bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
              You.
            </span>
          </h1>

          <p className="mt-4 max-w-[220px] text-[8px] leading-[1.7] text-gray-400">
            20,000mAh Power Bank with up to{" "}
            <span className="font-semibold text-gray-200">
              22.5W Super Fast Charging.
            </span>
          </p>
        </div>

        {/* =================================================
            MOBILE PRODUCT
        ================================================= */}

        <div className="pointer-events-none absolute right-[-2%] top-[72px] z-20 w-[55%]">
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-[280px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[70px]" />

          {/* Image */}
          <img
            src={wp66Image}
            alt="Wekome WP-66 20,000mAh Power Bank"
            className="relative z-30 block h-auto w-[330px] max-w-none object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.85)]"
          />
        </div>

        {/* =================================================
            FEATURES
        ================================================= */}

        <div className="absolute left-4 top-[365px] z-30 w-[55%] sm:left-6 sm:top-[380px]">
          <div className="grid grid-cols-5 gap-1 border-y border-white/[0.07] py-4">
            {features.map((feature) => (
              <FeatureItem key={feature.value} {...feature} />
            ))}
          </div>
        </div>

        {/* =================================================
            CAPACITY
        ================================================= */}

        <div className="absolute right-3 top-[335px] z-40 w-[38%] sm:right-5 sm:top-[350px]">
          <div className="rounded-xl border border-purple-400/15 bg-[#0b0913]/90 p-3 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="text-[6px] font-bold tracking-[0.1em] text-purple-300">
                REAL CAPACITY
              </span>

              <Check size={10} className="text-purple-300" />
            </div>

            <p className="mt-2 text-[19px] font-black leading-none tracking-[-0.04em]">
              20,000
              <span className="ml-0.5 text-[7px] text-gray-400">
                mAh
              </span>
            </p>

            <p className="mt-1.5 text-[6px] leading-relaxed text-gray-500">
              More power.
              <br />
              Less worry.
            </p>
          </div>
        </div>

        {/* =================================================
            BENEFITS
        ================================================= */}

        <div className="absolute right-3 top-[435px] z-40 w-[39%] space-y-4 sm:right-5 sm:top-[450px]">
          {benefits.map((benefit) => (
            <BenefitItem key={benefit.title} {...benefit} />
          ))}
        </div>

        {/* =================================================
            PRICE
        ================================================= */}

        <div className="absolute left-4 top-[475px] z-40 sm:left-6 sm:top-[490px]">
          <div className="flex items-end gap-3">
            <div>
              <p className="text-[6px] text-gray-600">ORIGINAL</p>

              <p className="text-[10px] font-semibold text-gray-500 line-through">
                ₦24,000
              </p>
            </div>

            <div>
              <p className="text-[6px] font-bold text-purple-400">
                PROMO PRICE
              </p>

              <p className="text-[21px] font-black leading-none">
                ₦20,900
              </p>
            </div>

            <div className="rounded-full border border-purple-400/20 bg-purple-500/[0.08] px-2 py-1">
              <span className="text-[6px] font-bold text-purple-300">
                SAVE ₦3,100
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            CTA
        ================================================= */}

        <div className="absolute left-4 top-[535px] z-50 flex w-[55%] gap-2 sm:left-6 sm:top-[550px]">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full bg-white px-2 text-[7px] font-black uppercase tracking-[0.03em] text-[#05040b] active:scale-95"
          >
            <WhatsAppIcon size={15} />
            WhatsApp
          </a>

          <a
            href="#order"
            className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2 text-[7px] font-black uppercase tracking-[0.03em] text-white active:scale-95"
          >
            Shop Now
            <ArrowRight size={11} />
          </a>
        </div>

        {/* =================================================
            BOTTOM DETAILS
        ================================================= */}

        <div className="absolute bottom-5 left-4 right-4 z-30 flex items-center justify-between border-t border-white/[0.06] pt-3 sm:left-6 sm:right-6">
          <div className="flex items-center gap-1.5">
            <ShieldCheck
              size={10}
              className="text-purple-400"
              strokeWidth={1.8}
            />

            <span className="text-[5px] font-semibold tracking-[0.06em] text-gray-500 sm:text-[6px]">
              MULTI-SAFETY PROTECTION
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Laptop
              size={10}
              className="text-purple-400"
              strokeWidth={1.8}
            />

            <span className="text-[5px] font-semibold tracking-[0.06em] text-gray-500 sm:text-[6px]">
              WIDE COMPATIBILITY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}