import {
  Plane,
  ShieldCheck,
  ShoppingBag,
  Award,
} from "lucide-react";

const footerFeatures = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Power You Can Trust.",
  },
  {
    icon: ShieldCheck,
    title: "12 Months Warranty",
    description: "Reliable Product Support.",
  },
  {
    icon: Plane,
    title: "Travel Friendly",
    description: "Carry-on Approved.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    description: "Advanced Protection.",
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
    >
      <path
        d="M12 2.5C6.75 2.5 2.5 6.72 2.5 11.93C2.5 13.59 2.94 15.15 3.7 16.5L2.45 21.5L7.58 20.2C8.91 20.93 10.42 21.35 12.02 21.35C17.27 21.35 21.5 17.13 21.5 11.92C21.5 6.72 17.27 2.5 12 2.5Z"
        fill="currentColor"
      />

      <path
        d="M16.95 13.92C16.68 13.78 15.38 13.15 15.13 13.05C14.88 12.96 14.7 12.91 14.51 13.19C14.33 13.46 13.81 14.08 13.65 14.27C13.48 14.46 13.31 14.48 13.03 14.34C12.76 14.2 11.89 13.92 10.86 13C10.05 12.28 9.5 11.39 9.34 11.11C9.19 10.83 9.33 10.68 9.47 10.54C9.6 10.41 9.75 10.2 9.89 10.03C10.03 9.86 10.08 9.73 10.17 9.54C10.26 9.35 10.21 9.19 10.15 9.05C10.08 8.91 9.54 7.61 9.32 7.08C9.1 6.55 8.87 6.64 8.7 6.63C8.53 6.62 8.35 6.62 8.16 6.62C7.97 6.62 7.67 6.69 7.42 6.97C7.17 7.25 6.47 7.9 6.47 9.2C6.47 10.5 7.44 11.75 7.58 11.93C7.72 12.12 9.49 14.84 12.19 16.01C12.84 16.29 13.35 16.46 13.75 16.59C14.4 16.8 14.99 16.77 15.46 16.69C15.98 16.61 17.07 16.04 17.29 15.41C17.52 14.79 17.52 14.25 17.45 14.14C17.38 14.03 17.21 13.97 16.95 13.92Z"
        fill="white"
      />
    </svg>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#08060d] text-white"
    >

      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-purple-900/20 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-purple-800/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-fuchsia-900/10 blur-[100px]" />

      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* =========================================
            BRAND / NAVIGATION / CONTACT
        ========================================= */}

        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:py-20">

          {/* BRAND */}
          <div>

            <a
              href="#home"
              className="group inline-block"
            >
              <div className="text-3xl font-black tracking-[-0.05em] transition duration-300 group-hover:text-purple-300">
                WEKOME
                <span className="text-purple-500">®</span>
              </div>

              <div className="mt-1 text-[8px] font-medium uppercase tracking-[0.45em] text-gray-500">
                Focus On Dreams
              </div>
            </a>

            <p className="mt-6 max-w-[360px] text-sm leading-6 text-gray-500">
              Powerful portable energy designed to keep you connected,
              productive and powered wherever life takes you.
            </p>

            {/* CONTACT BUTTONS */}
            <div className="mt-7 flex flex-wrap gap-3">

              {/* WhatsApp */}
              <a
                href="https://wa.me/08162409010"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:text-white"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <WhatsAppIcon size={14} />
                </span>

                WhatsApp
              </a>

              {/* Shop */}
              <a
                href="#order"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white"
              >
                <ShoppingBag size={14} />

                Shop Now
              </a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-400">
              Quick Links
            </h3>

            <nav className="mt-6 flex flex-col gap-4">

              <a
                href="#home"
                className="group flex w-fit items-center gap-2 text-sm text-gray-400 transition hover:text-white"
              >
                <span className="h-px w-0 bg-purple-500 transition-all duration-300 group-hover:w-4" />
                Home
              </a>

              <a
                href="#features"
                className="group flex w-fit items-center gap-2 text-sm text-gray-400 transition hover:text-white"
              >
                <span className="h-px w-0 bg-purple-500 transition-all duration-300 group-hover:w-4" />
                Features
              </a>

              <a
                href="#colors"
                className="group flex w-fit items-center gap-2 text-sm text-gray-400 transition hover:text-white"
              >
                <span className="h-px w-0 bg-purple-500 transition-all duration-300 group-hover:w-4" />
                Specifications
              </a>

              <a
                href="#colors"
                className="group flex w-fit items-center gap-2 text-sm text-gray-400 transition hover:text-white"
              >
                <span className="h-px w-0 bg-purple-500 transition-all duration-300 group-hover:w-4" />
                Colors
              </a>

              <a
                href="#order"
                className="group flex w-fit items-center gap-2 text-sm text-gray-400 transition hover:text-white"
              >
                <span className="h-px w-0 bg-purple-500 transition-all duration-300 group-hover:w-4" />
                Order Now
              </a>

            </nav>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-400">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <div>
                <p className="text-[9px] uppercase tracking-wider text-gray-600">
                  WhatsApp / Phone
                </p>

                <a
                  href="tel:+2348162409010"
                  className="mt-1 block text-sm font-semibold text-gray-300 transition hover:text-white"
                >
                  0816 240 9010
                </a>
              </div>

        ]      <div>
                <p className="text-[9px] uppercase tracking-wider text-gray-600">
                  Product
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  WP-66 · KingKong Series
                </p>
              </div>

              <a
                href="#order"
                className="group inline-flex items-center gap-2 text-sm font-bold text-purple-400 transition hover:text-purple-300"
              >
                <ShoppingBag
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

                Get Your Power Bank
              </a>

            </div>

          </div>

        </div>

        {/* =========================================
            TRUST FEATURES
        ========================================= */}

        <div className="grid grid-cols-2 border-b border-white/10 py-8 md:grid-cols-4">

          {footerFeatures.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`group flex items-center gap-3 px-4 py-5 transition duration-300 sm:px-6 ${
                  index !== footerFeatures.length - 1
                    ? "md:border-r md:border-white/10"
                    : ""
                }`}
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 transition duration-300 group-hover:border-purple-400/50 group-hover:bg-purple-500/20 group-hover:text-purple-300">
                  <Icon
                    size={17}
                    strokeWidth={1.6}
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold text-white">
                    {feature.title}
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-gray-600">
                    {feature.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================= */}

        <div className="flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[9px] uppercase tracking-[0.15em] text-gray-600">
            © {new Date().getFullYear()} WEKOME. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="#"
              className="text-[9px] uppercase tracking-wider text-gray-600 transition hover:text-gray-300"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[9px] uppercase tracking-wider text-gray-600 transition hover:text-gray-300"
            >
              Terms
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;