import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const [formState, setFormState] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('sending')
    setTimeout(() => setFormState('success'), 1500)
  }

  return (
    <section ref={ref} id="contact" style={{ padding: '20vh 5vw 10vh', backgroundColor: '#fff', color: '#111' }}>
       <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={isInView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 1 }}
       >
         <h2 style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 0.9, marginBottom: '5rem', maxWidth: '10ch' }}>
           LET'S BUILD TOGETHER
         </h2>
       </motion.div>

       <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <h3 style={{ textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Direct Contact</h3>
            <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>hello@modernliving.com</p>
            <p style={{ fontSize: '1.2rem' }}>+48 555 000 999</p>
            
            <h3 style={{ textTransform: 'uppercase', marginTop: '3rem', marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Studio</h3>
            <p style={{ fontSize: '1.2rem' }}>Złota 44, Warsaw</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>Name</label>
              <input type="text" placeholder="John Doe" style={{ width: '100%', borderBottom: '1px solid #ddd', padding: '1rem 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none', fontSize: '1.5rem', outline: 'none' }} required />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>Email</label>
              <input type="email" placeholder="john@example.com" style={{ width: '100%', borderBottom: '1px solid #ddd', padding: '1rem 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none', fontSize: '1.5rem', outline: 'none' }} required />
            </div>

             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>Inquiry</label>
              <textarea placeholder="Tell us about your project" rows="4" style={{ width: '100%', borderBottom: '1px solid #ddd', padding: '1rem 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none', fontSize: '1.5rem', outline: 'none', resize: 'none' }} required />
            </div>

            <button type="submit" style={{ alignSelf: 'start', padding: '1rem 3rem', background: '#111', color: '#fff', fontSize: '1rem', textTransform: 'uppercase', border: 'none', cursor: 'pointer', marginTop: '1rem' }}>
              {formState === 'idle' ? 'Send Message' : formState === 'sending' ? 'Sending...' : 'Sent Successfully'}
            </button>
          </form>
       </div>
    </section>
  )
}
