import { useEffect, useRef } from 'react'
import { Navbar } from '../components/templates/Navbar'
import { Footer } from '../components/templates/Footer'
import { HeroSection } from '../components/home/HeroSection'
import { ServicesSection } from '../components/home/ServicesSection'
import { FeaturedWorkSection } from '../components/home/FeaturedWorkSection'
import { TestimonialsSection } from '../components/home/TestimonialsSection'
import { EquipmentSection } from '../components/home/EquipmentSection'

/**
 * Home Page Component
 * 
 * The main landing page of the GarudX website
 * Features sections showcasing the company's services, equipment, work, and testimonials.
 */
export function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Scroll to top and set page title when component mounts
    window.scrollTo(0, 0)
    document.title = "GarudX | Drone Experts from the Land of Himalayas"
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen text-white relative">
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <div id="hero">
          <HeroSection />
        </div>
        
        {/* Equipment Section */}
        <div id="equipment">
          <EquipmentSection />
        </div>
        
        {/* Services Section */}
        <div id="services">
          <ServicesSection />
        </div>
        
        {/* Featured Work Section */}
        <div id="portfolio">
          <FeaturedWorkSection />
        </div>
        
        {/* Testimonials Section */}
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        
        <Footer />
      </div>
    </div>
  )
} 
