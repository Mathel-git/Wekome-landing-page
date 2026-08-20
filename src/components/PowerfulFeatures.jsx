import { ArrowUpRight } from "lucide-react";
import featuresData from "../data/featuresData";

const featureImages = [
  "/images/features/01-fast-charging.png",
  "/images/features/02-built-in-cables.png",
  "/images/features/03-fast-outputs.png",
  "/images/features/04-led-display.png",
  "/images/features/05-safety-protection.png",
];

function PowerfulFeatures() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#f5f3fa] py-20 text-[#111111] sm:py-24 lg:py-28"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-300/20 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end lg:mb-16">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-purple-600" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-600">
                Why Wekome
              </span>
            </div>

            <h2 className="max-w-[600px] text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Powerful{" "}
              <span className="text-purple-600">
                Features
              </span>
            </h2>

            <p className="mt-4 max-w-[550px] text-sm leading-6 text-gray-500 sm:text-base">
              Everything you need. All in one power bank.
            </p>
          </div>

          <div className="hidden max-w-[280px] text-right md:block">
            <p className="text-xs leading-5 text-gray-500">
              Designed to keep your devices powered, protected and ready
              wherever life takes you.
            </p>
          </div>

        </div>

        {/* =========================================
            FEATURE CARDS
        ========================================= */}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {featuresData.map((feature, index) => {

            return (
              <article
                key={feature.number}
                className="group relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]"
              >

                {/* =====================================
                    IMAGE
                ===================================== */}

                <div className="relative h-[180px] overflow-hidden bg-gray-100">

                  <img
                    src={featureImages[index]}
                    alt={feature.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  {/* Number */}
                  <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] text-white backdrop-blur-md">
                    {feature.number}
                  </span>

                </div>

                {/* =====================================
                    CONTENT
                ===================================== */}

                <div className="p-5">

                  {/* Icon */}
                  <div className="flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
                      <feature.icon size={20} strokeWidth={1.8} />
                    </div>

                    <div className="pointer-events-none h-16 w-16 rounded-full bg-purple-500/10 blur-2xl" />

                  </div>

                  {/* Text */}
                  <div className="mt-7">

                    <h3 className="text-xl font-black tracking-[-0.03em]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-purple-600">
                      {feature.highlight}
                    </p>

                    <p className="mt-4 text-xs leading-5 text-gray-500">
                      {feature.description}
                    </p>

                  </div>

                  {/* =====================================
                      BOTTOM ARROW
                  ===================================== */}

                  <div className="mt-8 flex items-center justify-between">

                    <span className="h-px w-12 bg-gray-200 transition-all duration-300 group-hover:w-20 group-hover:bg-purple-500" />

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition-all duration-300 group-hover:border-purple-500 group-hover:bg-purple-600 group-hover:text-white">
                      <ArrowUpRight size={14} />
                    </div>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default PowerfulFeatures;