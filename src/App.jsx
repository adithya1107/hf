import React from 'react'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import Footer from './components/Footer.jsx'
import Subsystem from './components/Subsystem.jsx'
import About from './components/About.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Subsystem />
      <Footer />
    </div>
  )
}

export default App
