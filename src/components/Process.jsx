import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { number: "01", title: "Discovery", desc: "We begin by understanding your lifestyle, the land, and the unseen potential of the site." },
  { number: "02", title: "Concept", desc: "Translating emotions into forms. We sketch, model, and visualize the soul of the building." },
  { number: "03", title: "Development", desc: "Refining details. Selecting materials that age gracefully. Ensuring structural integrity." },
  { number: "04", title: "Execution", desc: "Overseeing construction with obsessive attention to detail until the keys are in your hand." },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section ref={ref} id="process" style={{ padding: '15vh 5vw', backgroundColor: '#fff', color: '#111' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '5rem' }}
      >
        <span style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>How We Work</span>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', marginTop: '1rem' }}>From Abstract to Concrete</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div style={{ fontSize: '3rem', fontWeight: 700, opacity: 0.1, marginBottom: '1rem' }}>{step.number}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#555' }}>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
