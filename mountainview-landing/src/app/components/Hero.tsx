'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', type: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=80"
          alt="luxury property"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        {/* Gold particles effect */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(201,168,76,0.05) 0%, transparent 50%)'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="opacity-0 animate-fade-up">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-400/5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-400 text-sm tracking-wider">وحدات محدودة متاحة</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              اكتشف حياة
              <span className="block text-gold-gradient" style={{fontFamily:'Playfair Display, serif'}}>
                لا مثيل لها
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              مشاريع سكنية فاخرة في أرقى مواقع مصر. صمّمت لمن يستحق الأفضل — حيث يلتقي الأناقة بالراحة.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mb-10">
              {[
                { num: '+50', label: 'مشروع سكني' },
                { num: '+30K', label: 'عميل سعيد' },
                { num: '25+', label: 'سنة خبرة' },
              ].map((s,i) => (
                <div key={i} className={`opacity-0 animate-fade-up delay-${(i+2)*100}`}>
                  <div className="text-2xl font-black text-gold-gradient">{s.num}</div>
                  <div className="text-xs text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a href="#projects" className="btn-gold px-8 py-3.5 rounded-full font-bold text-base">
                استكشف المشاريع
              </a>
              <a href="#contact" className="px-8 py-3.5 rounded-full border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 transition-all duration-300 font-semibold text-base">
                تحدث مع خبير
              </a>
            </div>
          </div>

          {/* Right - Lead Form */}
          <div className="opacity-0 animate-fade-up delay-300">
            <div className="relative p-[1px] rounded-2xl" style={{background:'linear-gradient(135deg, rgba(201,168,76,0.5), rgba(201,168,76,0.1), rgba(201,168,76,0.4))'}}>
              <div className="bg-[#111] rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="text-xl font-bold text-amber-400 mb-2">شكراً لك!</h3>
                    <p className="text-gray-400">سيتواصل معك أحد خبرائنا خلال دقائق.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-1">احجز استشارتك المجانية</h3>
                    <p className="text-gray-400 text-sm mb-6">خبراؤنا جاهزون لمساعدتك في اختيار وحدتك المثالية</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <input
                        type="text"
                        placeholder="الاسم الكامل"
                        required
                        value={form.name}
                        onChange={e => setForm({...form, name: e.target.value})}
                        className="form-input w-full px-4 py-3.5 rounded-xl text-sm"
                      />
                      <input
                        type="tel"
                        placeholder="رقم الهاتف"
                        required
                        value={form.phone}
                        onChange={e => setForm({...form, phone: e.target.value})}
                        className="form-input w-full px-4 py-3.5 rounded-xl text-sm"
                      />
                      <select
                        value={form.type}
                        onChange={e => setForm({...form, type: e.target.value})}
                        className="form-input w-full px-4 py-3.5 rounded-xl text-sm appearance-none cursor-pointer"
                        style={{background:'rgba(255,255,255,0.05)'}}
                      >
                        <option value="" disabled>نوع الوحدة المطلوبة</option>
                        <option value="villa">فيلا</option>
                        <option value="apartment">شقة</option>
                        <option value="townhouse">تاون هاوس</option>
                        <option value="twin">توين هاوس</option>
                      </select>

                      <button type="submit" disabled={loading} className="btn-gold w-full py-4 rounded-xl text-base font-bold mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70"/>
                            </svg>
                            جاري الإرسال...
                          </span>
                        ) : 'احجز الآن مجاناً'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#projects" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-amber-400/60 hover:text-amber-400 transition-colors animate-float">
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
