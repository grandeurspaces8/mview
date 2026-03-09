'use client'
import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'nav-glass py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <span className="text-gold-gradient font-bold text-2xl tracking-wider" style={{fontFamily:'Playfair Display, serif'}}>
            MOUNTAIN VIEW
          </span>
          <span className="text-xs text-gray-400 tracking-widest mt-[-2px]">LUXURY REAL ESTATE</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {['الرئيسية','مشاريعنا','عن الشركة','تواصل معنا'].map((item,i) => (
            <a key={i} href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-200 relative group">
              {item}
              <span className="absolute bottom-[-4px] right-0 w-0 h-[1px] bg-amber-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="tel:+201008900076" className="hidden md:flex items-center gap-2 btn-gold px-5 py-2.5 rounded-full text-sm">
          <Phone size={15} />
          <span>اتصل الآن</span>
        </a>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-amber-400" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden nav-glass mt-2 px-6 py-4 flex flex-col gap-4 text-sm">
          {['الرئيسية','مشاريعنا','عن الشركة','تواصل معنا'].map((item,i) => (
            <a key={i} href="#" className="text-gray-300 hover:text-amber-400 transition-colors py-1 border-b border-gray-800">
              {item}
            </a>
          ))}
          <a href="tel:+201008900076" className="btn-gold px-5 py-2.5 rounded-full text-center mt-2">
            اتصل الآن
          </a>
        </div>
      )}
    </nav>
  )
}
