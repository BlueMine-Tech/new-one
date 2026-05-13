import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Services", "Why Us", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#e2d0a0] shadow-[0_4px_24px_rgba(0,68,170,0.07)]"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c9a84c] via-[#0044aa] to-[#c9a84c]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#e8c84a] shadow-[0_2px_12px_rgba(201,168,76,0.35)] group-hover:shadow-[0_4px_18px_rgba(201,168,76,0.5)] transition-shadow" />
            <div className="absolute inset-[2px] rounded-[6px] bg-white flex items-center justify-center">
              <span
                className="text-[#0044aa] font-black text-lg leading-none"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                SM
              </span>
            </div>
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className="text-[#0a1628] font-black text-base leading-none"
              style={{ fontFamily: "'Exo 2', sans-serif" }}
            >
              Sakaya Matha
            </span>
            <span
              className="text-[9px] text-[#9a7020] tracking-[0.18em] uppercase mt-0.5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Digital Hub & Academy
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="relative px-4 py-2 text-sm text-[#4a6080] hover:text-[#0044aa] font-medium transition-colors duration-200 group"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link}
                {/* Gold underline on hover */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-[#c9a84c] to-[#e8c84a] group-hover:w-4/5 transition-all duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold text-[#0044aa] border-2 border-[#0044aa]/25 rounded-lg hover:border-[#0044aa] hover:bg-[#0044aa]/5 transition-all duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#c9a84c] to-[#e0b84a] rounded-lg hover:shadow-[0_4px_16px_rgba(201,168,76,0.4)] transition-all duration-300 shadow-[0_2px_10px_rgba(201,168,76,0.3)]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Our Services
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 bg-[#0044aa] transition-all duration-300 ${
              menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
            }`}
          />
          <span
            className={`block h-0.5 bg-[#0044aa] transition-all duration-300 ${
              menuOpen ? "opacity-0 w-0" : "w-4"
            }`}
          />
          <span
            className={`block h-0.5 bg-[#0044aa] transition-all duration-300 ${
              menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-[#e2d0a0] shadow-[0_8px_24px_rgba(0,68,170,0.08)]`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-[#4a6080] hover:text-[#0044aa] hover:bg-[#f0f5ff] rounded-lg transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link}
              </a>
            </li>
          ))}

          {/* Divider */}
          <li>
            <div className="my-2 h-px bg-gradient-to-r from-transparent via-[#e2d0a0] to-transparent" />
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-center px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#c9a84c] to-[#e0b84a] rounded-lg shadow-[0_2px_10px_rgba(201,168,76,0.3)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get Our Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}