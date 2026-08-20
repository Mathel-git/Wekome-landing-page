import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "FEATURES", href: "#features" },
  { name: "SPECIFICATIONS", href: "#specifications" },
  { name: "COLORS", href: "#colors" },
  { name: "REVIEWS", href: "#reviews" },
  { name: "CONTACT", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#05040b]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex flex-col leading-none"
        >
          <span className="text-[24px] font-black tracking-[-0.04em] text-white">
            WEKOME
            <sup className="ml-0.5 text-[8px] font-bold text-purple-400">
              ®
            </sup>
          </span>

          <span className="mt-1 text-[7px] font-medium tracking-[0.35em] text-gray-500 transition-colors group-hover:text-purple-400">
            FOCUS ON DREAMS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative py-2 text-[10px] font-semibold tracking-[0.08em] transition-colors duration-300 ${
                index === 0
                  ? "text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {link.name}

              {index === 0 && (
                <span className="absolute bottom-0 left-0 h-[1px] w-full bg-purple-500" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Order Button */}
        <a
          href="#order"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(168,85,247,0.45)] lg:flex"
        >
          <span>Order Now</span>
          <ShoppingBag size={13} strokeWidth={2.2} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-300 transition hover:border-purple-500/50 hover:text-white lg:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/[0.05] bg-[#07060d]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-[1440px] flex-col px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-white/[0.05] py-4 text-xs font-semibold tracking-[0.1em] text-gray-400 transition-colors hover:text-white last:border-b-0"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#order"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white"
          >
            <ShoppingBag size={15} />
            Order Now
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;