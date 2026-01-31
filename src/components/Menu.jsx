import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu as MenuIcon } from 'lucide-react'

const navLinks = [
  { title: "Home", href: "#" },
  { title: "Philosophy", href: "#story" },
  { title: "Selected Works", href: "#gallery" },
  { title: "Markets", href: "#services" },
  { title: "Contact", href: "#contact" },
]

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <div 
        onClick={toggleMenu}
        style={{ position: 'fixed', top: '2rem', right: '5vw', zIndex: 200, cursor: 'pointer', mixBlendMode: 'difference', color: 'white', display: 'flex', alignItems: 'center', gap: '1rem' }}
      >
        <span style={{ fontSize: '1rem', textTransform: 'uppercase' }}>{isOpen ? 'Close' : 'Menu'}</span>
        <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center' }}>
            {isOpen ? <X /> : <MenuIcon />}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', backgroundColor: '#111', zIndex: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
             <nav style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
               {navLinks.map((link, i) => (
                 <motion.a
                   key={i}
                   href={link.href}
                   onClick={() => setIsOpen(false)}
                   initial={{ y: 50, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                   style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: '#fff', textDecoration: 'none', overflow: 'hidden' }}
                   whileHover={{ fontStyle: 'italic', x: 20 }}
                 >
                   {link.title}
                 </motion.a>
               ))}
             </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
