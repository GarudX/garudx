import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import AerospaceDesignShowcase from './pages/AerospaceDesignShowcase'
import './styles/global.css'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
