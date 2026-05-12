import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Services", "Products", "Industries", "Portfolio", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#090d14]/95 backdrop-blur-md border-b border-[#c9a84c]/20 shadow-[0_4px_30px_rgba(0,100,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#f0d080] opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-[2px] rounded-[6px] bg-[#090d14] flex items-center justify-center">
              <span className="text-[#f0d080] font-black text-lg leading-none" style={{ fontFamily: "'Exo 2', sans-serif" }}>B</span>
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[10px] text-[#c9a84c] tracking-[0.2em] uppercase">Tech Solutions</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="relative px-4 py-2 text-sm text-[#8ab4cf] hover:text-white transition-colors duration-200 group"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link}
                {/* Gold underline on hover */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-[#c9a84c] to-[#f0d080] group-hover:w-4/5 transition-all duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="relative px-5 py-2.5 text-sm font-semibold text-[#f0d080] border border-[#c9a84c]/50 rounded-lg hover:border-[#f0d080] hover:bg-[#c9a84c]/10 transition-all duration-300"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Free Consultation
          </a>
          <a
            href="#services"
            className="px-5 py-2.5 text-sm font-semibold text-[#090d14] bg-gradient-to-r from-[#c9a84c] to-[#f0d080] rounded-lg hover:from-[#d4b860] hover:to-[#f5dc90] transition-all duration-300 shadow-[0_0_20px_rgba(201,168,76,0.3)]"
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
          <span className={`block h-0.5 bg-[#f0d080] transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
          <span className={`block h-0.5 bg-[#f0d080] transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`} />
          <span className={`block h-0.5 bg-[#f0d080] transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-[#090d14]/98 backdrop-blur-lg border-t border-[#c9a84c]/20`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm text-[#8ab4cf] hover:text-white hover:bg-[#c9a84c]/10 rounded-lg transition-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              className="block text-center px-4 py-3 text-sm font-semibold text-[#090d14] bg-gradient-to-r from-[#c9a84c] to-[#f0d080] rounded-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get Free Consultation
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}