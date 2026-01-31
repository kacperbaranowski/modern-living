import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import interiorImg from '../assets/interior.png'
import heroImg from '../assets/hero.png'
import detailImg from '../assets/detail.png'

const projects = [
  { id: 1, title: "The Forest Villa", img: interiorImg, type: "Residential", align: "left" },
  { id: 2, title: "Concrete Retreat", img: heroImg, type: "Retreat", align: "right" },
  { id: 3, title: "Nordic Cabin", img: detailImg, type: "Cabin", align: "left" },
  { id: 4, title: "Urban Loft", img: interiorImg, type: "Commercial", align: "right" },
  { id: 5, title: "Lake House", img: heroImg, type: "Residential", align: "center" }, 
]

function ParallaxImage({ project, setSelectedProject }) {
  const ref = useRef(null)
  
  // Parallax effect: image moves slightly inside its container or container moves
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]) // Gentle parallax

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        display: 'flex',
        justifyContent: project.align === 'center' ? 'center' : (project.align === 'left' ? 'flex-start' : 'flex-end'),
        padding: '0 5vw',
        marginBottom: '15vh'
      }}
    >
      <motion.div
        style={{ width: project.align === 'center' ? '90vw' : '70vw', cursor: 'zoom-in', position: 'relative' }}
        onClick={() => setSelectedProject(project)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <div style={{ overflow: 'hidden', height: '80vh' }}>
          <motion.img
            style={{ y, scale: 1.1, width: '100%', height: '100%', objectFit: 'cover' }}
            src={project.img}
            alt={project.title}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}
        >
           <h3 style={{ fontSize: '2rem', fontWeight: 400 }}>{project.title}</h3>
           <span style={{ fontSize: '0.9rem', color: '#666', textTransform: 'uppercase' }}>{project.type}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section id="gallery" style={{ padding: '15vh 0', backgroundColor: '#fcfcfc' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ padding: '0 5vw 8rem' }}
        >
           <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', textAlign: 'left', textTransform: 'uppercase', lineHeight: 0.9 }}>
            Selected<br/><span style={{ paddingLeft: '4rem', color: '#888' }}>Works</span>
          </h2>
        </motion.div>

        <div>
          {projects.map((project) => (
             <ParallaxImage key={project.id} project={project} setSelectedProject={setSelectedProject} />
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,255,255,0.95)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0' }}
            onClick={() => setSelectedProject(null)}
          >
            <button style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'transparent', color: '#111', border: 'none', cursor: 'pointer', zIndex: 301 }}>
               <X size={48} />
            </button>
            <motion.img 
              layoutId={`img-${selectedProject.id}`} 
              src={selectedProject.img} 
              style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
