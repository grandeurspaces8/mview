"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-gold-500/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
            <span className="text-black font-black text-sm">MV</span>
          </div>
          <div>
            <div className="text-white font-bold text-base leading-none">Mountain View</div>
            <div className="text-gold-400 text-xs">مشاريع فاخرة</div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {[
            { label: "الرئيسية", id: "hero" },
            { label: "مشاريعنا", id: "projects" },
            { label: "المميزات", id: "features" },
            { label: "تواصل معنا", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-gray-300 hover:text-gold-400 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:block gold-gradient text-black font-bold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
        >
          احجز مشاورة مجانية
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gold-500/20 px-4 py-4 flex flex-col gap-4">
          {[
            { label: "الرئيسية", id: "hero" },
            { label: "مشاريعنا", id: "projects" },
            { label: "المميزات", id: "features" },
            { label: "تواصل معنا", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-gray-300 text-right text-sm py-2"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="gold-gradient text-black font-bold text-sm px-5 py-3 rounded-full"
          >
            احجز مشاورة مجانية
          </button>
        </div>
      )}
    </nav>
  );
}
