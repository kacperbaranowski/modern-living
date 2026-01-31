import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import interiorImg from '../assets/interior.jpeg'

export default function Story() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Subtle parallax on the interior image
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      id="story"
      ref={ref}
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: '#111'
      }}
    >
      {/* Interior Background Image */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '120%',
          y: imgY,
          zIndex: 0
        }}
      >
        <img
          src={interiorImg}
          alt="Interior view"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        {/* Dark overlay for text readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)'
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '10vh 5vw',
          color: 'white',
          maxWidth: '600px',
          opacity: contentOpacity
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            display: 'block',
            fontSize: '1rem',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            letterSpacing: '0.1em',
            color: '#aaa'
          }}
        >
          The Philosophy
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            marginBottom: '2rem',
            lineHeight: 1.1,
            fontWeight: 600
          }}
        >
          Architecture that breathes with nature.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            fontSize: '1.2rem',
            lineHeight: 1.7,
            color: '#ccc'
          }}
        >
          We believe in spaces that do not compete with their surroundings but rather frame them.
          Our designs are rooted in the principles of minimalism, sustainability, and timeless elegance.
        </motion.p>
      </motion.div>
    </section>
  )
}
