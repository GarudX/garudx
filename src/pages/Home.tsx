import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Navbar } from '../components/templates/Navbar'
import { Footer } from '../components/templates/Footer'
import { HeroSection } from '../components/home/HeroSection'
import { ServicesSection } from '../components/home/ServicesSection'
import { FeaturedWorkSection } from '../components/home/FeaturedWorkSection'
import { TestimonialsSection } from '../components/home/TestimonialsSection'
import { EquipmentSection } from '../components/home/EquipmentSection'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

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

    // Initialize GSAP scroll animations
    const initScrollAnimations = () => {
      // Set GSAP defaults
      gsap.defaults({ ease: "power2.out" })

      // Hero section parallax effect
      gsap.to(".hero-background", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      })

      // Equipment cards stagger animation
      gsap.fromTo(".equipment-card", 
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: "#equipment",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Services cards slide in from sides
      gsap.fromTo(".service-card:nth-child(odd)", 
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: "#services",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      gsap.fromTo(".service-card:nth-child(even)", 
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: "#services",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Featured work projects scale in
      gsap.fromTo(".project-card", 
        { scale: 0.8, opacity: 0, rotationY: 45 },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: "#portfolio",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Testimonials fade in with stagger
      gsap.fromTo(".testimonial-card", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: "#testimonials",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Section headers text reveal
      gsap.fromTo(".section-header", 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".section-header",
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Floating animation for special elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      })

      // Background morphing effect
      gsap.to(".morph-background", {
        background: "radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 70%)",
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".morph-background",
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      })

      // Magnetic effect for interactive elements
      const magneticElements = document.querySelectorAll('.magnetic')
      magneticElements.forEach((element) => {
        element.addEventListener('mousemove', (e) => {
          const mouseEvent = e as MouseEvent
          const { clientX, clientY } = mouseEvent
          const { left, top, width, height } = element.getBoundingClientRect()
          const x = clientX - left - width / 2
          const y = clientY - top - height / 2

          gsap.to(element, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out"
          })
        })

        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      })
    }

    // Initialize animations after a short delay
    const timer = setTimeout(initScrollAnimations, 100)

    // Cleanup function
    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
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
