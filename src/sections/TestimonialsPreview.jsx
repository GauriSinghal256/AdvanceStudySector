import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { testimonials } from '../data/testimonials'
import { Link } from 'react-router-dom'

export default function TestimonialsPreview() {
  const [active, setActive] = useState(0)
  const item = testimonials[active]

  return (
    <section className="testimonials section">
      <div className="testimonial-quote">"</div>
      <Reveal><div className="section-tag">05 / In their words</div></Reveal>
      <div className="testimonial-main">
        <div>
          <h2 className="display-heading">The kind of<br /><em>difference</em> you feel.</h2>
          <div className="testimonial-controls">
            <button aria-label="Previous" onClick={() => setActive((active + testimonials.length - 1) % testimonials.length)}>←</button>
            <span>0{active + 1} / 0{testimonials.length}</span>
            <button aria-label="Next" onClick={() => setActive((active + 1) % testimonials.length)}>→</button>
          </div>
          <Link to="/testimonials" className="text-link" style={{ marginTop: '30px', display: 'inline-block' }}>Read more stories →</Link>
        </div>
        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {item.quote}
            </motion.blockquote>
          </AnimatePresence>
          <div className="testimonial-person">
            <span>{item.initials}</span>
            <div>
              <strong>{item.name}</strong>
              <small>{item.detail}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
