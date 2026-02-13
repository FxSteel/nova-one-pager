import './index.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { AboutSection } from './sections/AboutSection'
import { ServicesSection } from './sections/ServicesSection'
import { HowWeWorkSection } from './sections/HowWeWorkSection'
import { OfferingsSection } from './sections/OfferingsSection'
import { ProcessSection } from './sections/ProcessSection'
import { ContactSection } from './sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <HowWeWorkSection />
      <OfferingsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
