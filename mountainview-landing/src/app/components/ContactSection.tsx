'use client'
import { useState } from 'react'
import { Phone, MessageCircle, Mail } from 'lucide-react'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

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
    <section id="contact" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Banner CTA */}
        <div className="relative overflow-hidden rounded-3xl mb-16 p-[1px]" style={{background:'linear-gradient(135deg, rgba(201,168,76,0.6), rgba(201,168,76,0.1), rgba(201,168,76,0.5))'}}>
          <div className="rounded-3xl px-10 py-14 text-center relative overflow-hidden" style={{background:'linear-gradient(135deg, #1a1400, #111, #1a1400)'}}>
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=30')", backgroundSize:'cover', backgroundPosition:'center'}} />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                لا تفوّت الفرصة
                <span className="text-gold-gradient"> — الوحدات تُباع بسرعة</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
                سجّل الآن واحصل على استشارة مجانية مع أحد خبرائنا لاختيار أفضل وحدة تناسبك
              </p>
              <a href="tel:+201008900076" className="btn-gold inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg font-bold">
                <Phone size={20} />
                اتصل الآن: 01008900076
              </a>
            </div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <p className="text-amber-400 text-sm tracking-widest uppercase mb-3">تواصل معنا</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              نحن هنا
              <span className="text-gold-gradient"> لخدمتك</span>
            </h2>
            <div className="w-12 h-[2px] bg-gradient-to-r from-amber-400 to-transparent mb-6" />
            <p className="text-gray-400 leading-relaxed mb-8">
              فريق خبرائنا جاهز للإجابة على جميع استفساراتك ومساعدتك في اتخاذ القرار الأمثل لاستثمارك العقاري.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { icon: Phone, label: 'اتصل بنا', val: '01008900076', href: 'tel:+201008900076' },
                { icon: MessageCircle, label: 'واتساب', val: 'تواصل عبر واتساب', href: 'https://wa.me/201008900076' },
                { icon: Mail, label: 'البريد الإلكتروني', val: 'leads@grandeur-spaces.com', href: 'mailto:leads@grandeur-spaces.com' },
              ].map((c, i) => (
                <a key={i} href={c.href} className="flex items-center gap-4 p-4 stat-card rounded-xl hover:border-amber-400/40 transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-amber-400/10 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors shrink-0">
                    <c.icon size={20} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{c.label}</p>
                    <p className="font-semibold text-sm group-hover:text-amber-400 transition-colors">{c.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="p-[1px] rounded-2xl" style={{background:'linear-gradient(135deg, rgba(201,168,76,0.4), rgba(201,168,76,0.05), rgba(201,168,76,0.3))'}}>
            <div className="bg-[#111] rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-amber-400 mb-2">تم الإرسال بنجاح!</h3>
                  <p className="text-gray-400">سيتواصل معك فريقنا في أقرب وقت ممكن.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-6">أرسل لنا رسالة</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input type="text" placeholder="الاسم الكامل" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="form-input w-full px-4 py-3.5 rounded-xl text-sm" />
                    <input type="tel" placeholder="رقم الهاتف" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="form-input w-full px-4 py-3.5 rounded-xl text-sm" />
                    <textarea placeholder="رسالتك (اختياري)" rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="form-input w-full px-4 py-3.5 rounded-xl text-sm resize-none" />
                    <button type="submit" disabled={loading} className="btn-gold w-full py-4 rounded-xl text-base font-bold mt-1 disabled:opacity-70">
                      {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
