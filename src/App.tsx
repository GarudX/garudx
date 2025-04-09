import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { ComponentsShowcase } from './pages/ComponentsShowcase'
import AerospaceDesignShowcase from './pages/AerospaceDesignShowcase'
import './styles/global.css'
import './App.css'

function App() {
  // Add scroll reveal effect for elements with data-scroll attribute
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-scroll]')
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealElements[i].getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active')
        } else {
          revealElements[i].classList.remove('active')
        }
      }
    }
    
    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll()
    
    return () => window.removeEventListener('scroll', revealOnScroll)
  }, [])
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<ComponentsShowcase />} />
        <Route path="/aerospace" element={<AerospaceDesignShowcase />} />
        {/* Add more routes as you build additional pages */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/anti-drone-systems" element={<AntiDroneSystems />} /> */}
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default App
