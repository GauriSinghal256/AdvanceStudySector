import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'

export default function GalleryPreview() {
  return (
    <section className="gallery section">
      <div className="gallery-copy">
        <Reveal><div className="section-tag">06 / Life at Advance</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-heading">More than<br /><em>a classroom.</em></h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p>Space to ask better questions, make new friends and enjoy the process of becoming.</p>
          <Link className="text-link" to="/gallery">See full gallery <Arrow dark /></Link>
        </Reveal>
      </div>
      <div className="gallery-stack">
        <motion.div
          className="gallery-image image-a"
          initial={{ opacity: 0, rotate: -12, x: -30 }}
          whileInView={{ opacity: 1, rotate: -5, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src="/images/gallery/image.png" alt="Learning and creative expression at Advance Study Sector" />
        </motion.div>
        <motion.div
          className="gallery-stamp"
          initial={{ opacity: 0, scale: 0.8, rotate: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
        >
          COME AS<br /><b>YOU ARE</b>
        </motion.div>
        <motion.div
          className="gallery-image image-b"
          initial={{ opacity: 0, rotate: 15, x: 30 }}
          whileInView={{ opacity: 1, rotate: 6, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="abstract-student">A<br /><span>+</span><br />S</div>
        </motion.div>
      </div>
    </section>
  )
}
