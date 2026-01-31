import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import exteriorImg from '../assets/exterior.jpeg'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Zoom into the window (right side where the large window is)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3])
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  // Text fades out quickly
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  // Scroll indicator fades even faster
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [0.7, 0])

  return (
    <section ref={ref} style={{ height: '200vh' }}>
      {/* Sticky container - stays fixed while scrolling through the 200vh */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#111'
      }}>

        {/* Background Image with Zoom Effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            scale,
            y: imgY,
            transformOrigin: '75% 50%', // Zoom towards the large window on the right
            zIndex: 0
          }}
        >
          <img
            src={exteriorImg}
            alt="Modern house in forest"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.7
            }}
          />
        </motion.div>

        {/* Noise Overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none', opacity: 0.07,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}></div>

        {/* Floating Elements (Abstract Glass Panes) */}
        <motion.div style={{ opacity }}>
          <FloatingElement top="20%" left="10%" delay={0} duration={8} />
          <FloatingElement top="60%" right="15%" delay={2} duration={10} size={150} />
        </motion.div>

        {/* Content - fades out on scroll */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            opacity
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'block' }}
          >
            Architectural Studio
          </motion.span>

          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 10rem)', lineHeight: 0.9, fontWeight: 700, letterSpacing: '-0.04em', marginBottom: '2rem', textTransform: 'uppercase' }}>
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>Modern</motion.div>
            <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ color: '#aaa', fontStyle: 'italic' }}>Living</motion.div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            style={{ maxWidth: '40ch', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '3rem', color: '#ddd' }}
          >
            We design spaces that frame the silence of nature.
            Where every line has a purpose and every view tells a story.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}
            whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1rem 3rem', background: 'transparent', border: '1px solid white', color: 'white',
              fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', transition: 'background-color 0.3s, color 0.3s'
            }}
            onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
          >
            See Projects
          </motion.button>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            x: '-50%',
            zIndex: 10,
            opacity: scrollIndicatorOpacity,
            color: 'white'
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scroll</span>
        </motion.div>

      </div>
    </section>
  )
}

function FloatingElement({ top, left, right, bottom, delay, duration, size = 100 }) {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: duration,
        ease: "easeInOut",
        delay: delay
      }}
      style={{
        position: 'absolute',
        top, left, right, bottom,
        width: size, height: size,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '50%',
        zIndex: 5,
        pointerEvents: 'none'
      }}
    />
  )
}
