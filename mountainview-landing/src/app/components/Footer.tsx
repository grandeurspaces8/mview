export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-gold-gradient font-bold text-xl" style={{fontFamily:'Playfair Display, serif'}}>MOUNTAIN VIEW</span>
            <p className="text-gray-600 text-xs mt-1">LUXURY REAL ESTATE</p>
          </div>
          <p className="text-gray-600 text-sm">© 2024 Mountain View. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-amber-400 transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-amber-400 transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
