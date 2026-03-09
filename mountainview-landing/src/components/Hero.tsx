"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const counterRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const counters = [
      { ref: 0, target: 25, suffix: "+" },
      { ref: 1, target: 5000, suffix: "+" },
      { ref: 2, target: 15, suffix: "" },
      { ref: 3, target: 98, suffix: "%" },
    ];

    counters.forEach(({ ref, target, suffix }) => {
      const el = counterRefs.current[ref];
      if (!el) return;
      let current = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          el.textContent = target.toLocaleString("ar") + suffix;
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current).toLocaleString("ar") + suffix;
        }
      }, 25);
    });
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(212,168,83,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(212,168,83,0.05) 0%, transparent 50%), #0a0a0a",
      }}
    >
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d4a853" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-gold-500/10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border border-gold-500/5" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-1.5 mb-8">
          <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-gold-400 text-sm font-medium">أفضل مطور عقاري في مصر</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          <span className="text-white">اعيش في </span>
          <span className="text-gold-gradient">فخامة حقيقية</span>
          <br />
          <span className="text-white text-3xl md:text-4xl font-light">مع Mountain View</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          مشاريع عقارية فاخرة بمواصفات عالمية في أرقى مناطق مصر.
          <br />
          من الشاليهات الساحلية إلى الكمبوندات الراقية — حياة مختلفة تماماً.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={scrollToContact}
            className="gold-gradient text-black font-bold text-lg px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-gold-500/20"
          >
            احجز وحدتك الآن
          </button>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border border-gold-500/40 text-gold-400 font-semibold text-lg px-8 py-4 rounded-full hover:bg-gold-500/10 transition-all duration-300"
          >
            تصفح المشاريع
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: "مشروع ناجح", refIdx: 0 },
            { label: "عميل سعيد", refIdx: 1 },
            { label: "سنة خبرة", refIdx: 2 },
            { label: "رضا العملاء", refIdx: 3 },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
            >
              <div className="text-3xl font-black text-gold-gradient mb-1">
                <span
                  ref={(el) => {
                    if (el) counterRefs.current[stat.refIdx] = el;
                  }}
                >
                  0
                </span>
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-500 text-xs">اسكرول للأسفل</span>
        <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
