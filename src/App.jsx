import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import './App.css'

import Hero from './components/Hero'
import Story from './components/Story'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Process from './components/Process'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Menu from './components/Menu'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app-container">
      <Menu />

      <Hero />
      <Story />
      <Services /> 
      <Gallery />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}


export default App
