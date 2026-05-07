import './index.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import { WhatsAppButton } from './components/WhatsAppButton'
import { MobileCTA } from './components/MobileCTA'
import { Hero } from './sections/Hero'
import { AboutSection } from './sections/AboutSection'
import { ServicesSection } from './sections/ServicesSection'
import { HowWeWorkSection } from './sections/HowWeWorkSection'
import { ProcessSection } from './sections/ProcessSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SocialProofSection } from './sections/SocialProofSection'
import { ContactSection } from './sections/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <HowWeWorkSection />
      <ProcessSection />
      <ProjectsSection />
      <SocialProofSection />
      <ContactSection />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <MobileCTA />
    </div>
  )
}

export default App
