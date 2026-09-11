import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <>
      <PageHeader
        tag="Testimonials"
        title={<>The kind of<br /><em>difference</em> you feel.</>}
        subtitle="Real stories from students and parents who experienced the Advance way."
      />
      <section className="section testimonials-page">
        <div className="testimonials-grid">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="testimonial-quote-mark">"</div>
              <blockquote>{item.quote}</blockquote>
              <div className="testimonial-person">
                <span>{item.initials}</span>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.detail}</small>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
