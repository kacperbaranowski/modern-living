import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import detailImg from '../assets/detail.png'

export default function Story() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section id="story" ref={ref} style={{ padding: '10vh 5vw', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5vw', alignItems: 'center', backgroundColor: '#fff', color: '#111' }}>
      
      {/* Text Side */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span style={{ display: 'block', fontSize: '1rem', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>The Philosophy</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', marginBottom: '2rem', lineHeight: 1.1 }}>
          Architecture that <br /> breathes with nature.
        </h2>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '40ch', color: '#555' }}>
          We believe in spaces that do not compete with their surroundings but rather frame them. Our designs are rooted in the principles of minimalism, sustainability, and timeless elegance.
        </p>
      </motion.div>

      {/* Image Side */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '80vh' }}>
        <motion.div
           initial={{ height: '100%' }}
           animate={isInView ? { height: '0%' } : {}}
           transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
           style={{ position: 'absolute', top: 0, left: 0, width: '100%', background: '#fff', zIndex: 2 }}
        />
        <img src={detailImg} alt="Architectural Detail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

    </section>
  )
}
