import { useEffect } from 'react'
import { Navbar } from '../components/templates/Navbar'
import { Footer } from '../components/templates/Footer'
import { HeroSection } from '../components/home/HeroSection'
import { ServicesSection } from '../components/home/ServicesSection'
import { FeaturedWorkSection } from '../components/home/FeaturedWorkSection'
import { TestimonialsSection } from '../components/home/TestimonialsSection'
import { ContactSection } from '../components/home/ContactSection'
import { EquipmentSection } from '../components/home/EquipmentSection'

/**
 * Home Page Component
 * 
 * The main landing page of the GarudX website
 * Features sections showcasing the company's services, equipment, work, and testimonials.
 */
export function Home() {
  useEffect(() => {
    // Scroll to top and set page title when component mounts
    window.scrollTo(0, 0)
    document.title = "GarudX | Drone Experts from the Land of Himalayas"
  }, [])

  return (
    <div className="min-h-screen text-white relative">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Equipment Section */}
        <EquipmentSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Featured Work Section */}
        <FeaturedWorkSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Contact Section */}
        <ContactSection />
        
        <Footer />
      </div>
    </div>
  )
} 
