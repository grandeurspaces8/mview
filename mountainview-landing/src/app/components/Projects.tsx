'use client'

const projects = [
  {
    name: 'Mountain View iCity',
    location: 'التجمع الخامس، القاهرة الجديدة',
    type: 'فيلات & شقق فاخرة',
    price: 'يبدأ من 3.5 مليون جنيه',
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    tag: 'الأكثر مبيعاً',
    tagColor: 'bg-amber-400 text-black',
  },
  {
    name: 'Mountain View Ras El Hekma',
    location: 'رأس الحكمة، الساحل الشمالي',
    type: 'شاليهات & فيلات بحرية',
    price: 'يبدأ من 5 مليون جنيه',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    tag: 'جديد',
    tagColor: 'bg-emerald-500 text-white',
  },
  {
    name: 'Mountain View Hyde Park',
    location: 'التجمع الخامس، القاهرة الجديدة',
    type: 'توين هاوس & تاون هاوس',
    price: 'يبدأ من 4.2 مليون جنيه',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    tag: 'متاح',
    tagColor: 'bg-blue-500 text-white',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 text-sm tracking-widest uppercase mb-3">مشاريعنا المميزة</p>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            اختر مشروعك
            <span className="text-gold-gradient"> المثالي</span>
          </h2>
          <div className="mx-auto mt-4 w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            مجموعة متنوعة من المشاريع الفاخرة في أرقى المواقع، لتناسب كل احتياجاتك
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="project-card rounded-2xl overflow-hidden bg-[#161616] border border-white/5 group cursor-pointer">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
                <span className={`absolute top-4 right-4 ${p.tagColor} text-xs font-bold px-3 py-1 rounded-full`}>
                  {p.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1 group-hover:text-amber-400 transition-colors">{p.name}</h3>
                <p className="text-gray-400 text-sm mb-1">📍 {p.location}</p>
                <p className="text-gray-500 text-xs mb-4">🏠 {p.type}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">السعر</p>
                    <p className="text-amber-400 font-bold text-sm">{p.price}</p>
                  </div>
                  <button className="btn-gold px-5 py-2 rounded-full text-xs font-bold">
                    تفاصيل أكثر
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-block border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 transition-all px-10 py-3.5 rounded-full font-semibold">
            عرض جميع المشاريع
          </a>
        </div>
      </div>
    </section>
  )
}
