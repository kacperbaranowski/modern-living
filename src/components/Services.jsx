import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const markets = [
  { city: "Warsaw", type: "Residential", count: "14 Projects" },
  { city: "Berlin", type: "Commercial", count: "08 Projects" },
  { city: "Cevio", type: "Retreats", count: "05 Projects" },
  { city: "Kyoto", type: "Cultural", count: "03 Projects" },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section ref={ref} id="services" style={{ padding: '10vh 5vw', backgroundColor: '#fff', color: '#111' }}>
      <div style={{ borderTop: '1px solid #eee', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Where We Operate</h2>
        <span style={{ fontSize: '1rem', opacity: 0.5 }}>International Presence</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {markets.map((market, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            style={{ padding: '2rem', border: '1px solid #f0f0f0', transition: 'border-color 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#111'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#f0f0f0'}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{market.city}</h3>
            <p style={{ fontSize: '1rem', color: '#777', marginBottom: '1rem' }}>{market.type}</p>
            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{market.count}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
