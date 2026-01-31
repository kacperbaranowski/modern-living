import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'
import heroImg from '../assets/hero.png'

const reviews = [
  { 
    id: 1,
    text: "Ideally, architecture should be functional and beautiful. They achieved both with a level of mastery I haven't seen in years.", 
    author: "Marcus & Elena", 
    role: "Private Clients",
    size: "large" 
  },
  { 
    id: 2,
    text: "Light and shadow play.", 
    author: "Jonas V.", 
    role: "Critic",
    size: "small"
  },
  { 
    id: 3,
    text: "A seamless integration with the forest. It feels like the house grew from the ground.", 
    author: "Sarah L.", 
    role: "Developer",
    size: "medium"
  },
  { 
    id: 4,
    text: "Uncompromising quality.", 
    author: "David K.", 
    role: "Designer",
    size: "small"
  },
]

export default function Testimonials() {
  const scrollRef = useRef(null)
  
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const skewY = useTransform(smoothVelocity, [-3000, 3000], [5, -5]) // Velocity based skew

  return (
    <section id="testimonials" ref={scrollRef} style={{ padding: '10vh 5vw', backgroundColor: '#fff', color: '#111', overflow: 'hidden' }}>
      
      <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', textTransform: 'uppercase', letterSpacing: '-0.03em' }}>
          Voices
        </h2>
      </div>

      <motion.div 
        style={{ 
          skewY, // Applies the skew to the whole grid container
          transformOrigin: "center center",
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}
      >
        {reviews.map((review, i) => (
          <motion.div 
            key={review.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            style={{ 
              gridColumn: review.size === 'large' ? 'span 2' : 'span 1',
              backgroundColor: '#f5f5f5', 
              padding: '3rem', 
              borderRadius: '2px', // Minimalist rounded
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: review.size === 'large' ? '400px' : '300px'
            }}
          >
            <p style={{ 
              fontSize: review.size === 'large' ? '2.5rem' : '1.5rem', 
              fontWeight: 300, 
              lineHeight: 1.2,
              marginBottom: '2rem'
            }}>
              {review.text}
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
               <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ddd', overflow: 'hidden' }}>
                 <img src={heroImg} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }} />
               </div>
               <div>
                 <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{review.author}</div>
                 <div style={{ fontSize: '0.8rem', color: '#666' }}>{review.role}</div>
               </div>
            </div>

          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}
