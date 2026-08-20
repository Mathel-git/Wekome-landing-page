import {
  BatteryCharging,
  CheckCircle,
  Smartphone,
  Zap,
} from "lucide-react";

const trustStats = [
  {
    value: "20,000",
    unit: "mAh",
    label: "High Capacity",
    description: "Power that lasts",
    icon: BatteryCharging,
  },
  {
    value: "22.5",
    unit: "W",
    label: "Super Fast Charging",
    description: "Less waiting. More power.",
    icon: Zap,
  },
  {
    value: "5",
    unit: "Devices",
    label: "Charge Simultaneously",
    description: "Power multiple devices",
    icon: Smartphone,
  },
  {
    value: "100",
    unit: "%",
    label: "Safe & Reliable",
    description: "Built for protection",
    icon: CheckCircle,
  },
];

function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-[#12052b] py-16 sm:py-20">

      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[100px]" />

      {/* Top Line */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

      {/* Bottom Line */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <div className="mb-12 text-center">

          <div className="mb-4 flex items-center justify-center gap-3">

            <span className="h-px w-8 bg-purple-500/60" />

            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-purple-300">
              Built To Perform
            </span>

            <span className="h-px w-8 bg-purple-500/60" />

          </div>

          <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">

            Trusted Power.{" "}

            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              Anytime. Anywhere.
            </span>

          </h2>

          <p className="mx-auto mt-4 max-w-lg text-xs leading-5 text-purple-200/50 sm:text-sm">
            Engineered to give you reliable power whenever and wherever
            you need it.
          </p>

        </div>

        {/* =========================================
            STATISTICS
        ========================================= */}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-0">

          {trustStats.map((stat, index) => {

            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`group relative flex flex-col items-center px-5 py-7 text-center transition-all duration-500 sm:px-6 ${
                  index !== trustStats.length - 1
                    ? "sm:border-r sm:border-purple-300/15"
                    : ""
                }`}
              >

                {/* Hover Glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/0 blur-3xl transition duration-500 group-hover:bg-purple-500/15" />

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-300 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-purple-400/50 group-hover:bg-purple-500/20 group-hover:text-purple-200">
                  <Icon
                    size={21}
                    strokeWidth={1.6}
                  />
                </div>

                {/* Number */}
                <div className="relative mt-5 flex items-baseline justify-center gap-1">

                  <span className="text-3xl font-black tracking-[-0.05em] text-white transition duration-300 group-hover:text-purple-200 sm:text-4xl">
                    {stat.value}
                  </span>

                  <span className="text-xs font-bold text-purple-400">
                    {stat.unit}
                  </span>

                </div>

                {/* Label */}
                <p className="relative mt-2 text-[9px] font-bold uppercase tracking-[0.12em] text-gray-300">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="relative mt-2 text-[9px] text-purple-200/40">
                  {stat.description}
                </p>

                {/* Bottom Indicator */}
                <div className="relative mt-5 h-px w-8 bg-purple-500/20 transition-all duration-500 group-hover:w-14 group-hover:bg-purple-400/60" />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default TrustBar;