import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import WhyUs from './components/WhyUs'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <WhyUs />
      <ContactSection />
      <Footer />
    </main>
  )
}
