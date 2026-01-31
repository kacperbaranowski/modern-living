import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import heroImg from '../assets/hero.png'

const team = [
  { name: "Alexander V.", role: "Principal Architect", img: heroImg }, // Placeholder images
  { name: "Sarah K.", role: "Interior Lead", img: heroImg },
  { name: "Michael R.", role: "Structural Engineer", img: heroImg },
]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section ref={ref} id="team" style={{ padding: '15vh 5vw', backgroundColor: '#f9f9f9', color: '#111' }}>
       <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', marginBottom: '5rem' }}
      >
         <h2 style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', marginBottom: '1rem' }}>The Minds Behind</h2>
         <p style={{ maxWidth: '60ch', margin: '0 auto', fontSize: '1.2rem', color: '#666' }}>Guided by a passion for silence, space, and light.</p>
      </motion.div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            style={{ width: '300px', display: 'flex', flexDirection: 'column' }}
          >
             <div style={{ width: '100%', height: '350px', overflow: 'hidden', marginBottom: '1.5rem', filter: 'grayscale(100%)' }}>
               <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
             </div>
             <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{member.name}</h3>
             <p style={{ fontSize: '1rem', color: '#888' }}>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
