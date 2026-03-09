import { Shield, Star, MapPin, Headphones, Award, TrendingUp } from 'lucide-react'

const features = [
  { icon: Shield, title: 'ضمان الجودة', desc: 'معايير بناء عالمية مع ضمان كامل على جميع وحداتنا السكنية' },
  { icon: MapPin, title: 'أفضل المواقع', desc: 'مشاريعنا في أرقى المناطق مع سهولة الوصول لكل الخدمات' },
  { icon: Star, title: 'تصميم استثنائي', desc: 'فرق هندسية عالمية تصمم كل وحدة بأعلى مستوى من الأناقة' },
  { icon: Headphones, title: 'خدمة عملاء 24/7', desc: 'فريقنا دائماً جاهز لمساعدتك قبل وبعد الشراء' },
  { icon: Award, title: 'سمعة راسخة', desc: 'أكثر من 25 عاماً من التميز والثقة في السوق العقاري المصري' },
  { icon: TrendingUp, title: 'استثمار مضمون', desc: 'عائد استثماري مرتفع وارتفاع مستمر في قيمة الوحدات' },
]

export default function WhyUs() {
  return (
    <section className="py-24" style={{background:'linear-gradient(180deg, #0d0d0d 0%, #111 50%, #0d0d0d 100%)'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm tracking-widest uppercase mb-3">لماذا Mountain View</p>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            نقدم أكثر من
            <span className="text-gold-gradient"> مجرد منزل</span>
          </h2>
          <div className="mx-auto mt-4 w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="stat-card p-6 rounded-2xl group hover:border-amber-400/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center mb-4 group-hover:bg-amber-400/20 transition-colors">
                <f.icon size={22} className="text-amber-400" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
