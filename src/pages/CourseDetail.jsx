import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { courses } from '../data/courses'
import Arrow from '../components/Arrow'
import Reveal from '../components/Reveal'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = courses.find((c) => c.slug === slug)
  const [openFaq, setOpenFaq] = useState(null)

  if (!course) return <Navigate to="/courses" replace />

  return (
    <>
      <section className={`course-hero ${course.accent}`}>
        <div className="course-hero-inner">
          <Link to="/courses" className="back-button">← Back to Courses</Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag">ADVANCE / COURSE GUIDE</div>
            <span className="course-large-number">{course.icon}</span>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <Link className="button button-primary" to="/contact">Ask about this course <Arrow /></Link>
          </motion.div>
        </div>
      </section>

      <section className="section course-detail-section">
        <div className="course-info-grid">
          <Reveal className="course-info-box">
            <small>Duration</small>
            <strong>{course.duration}</strong>
          </Reveal>
          <Reveal delay={0.1} className="course-info-box">
            <small>Eligibility</small>
            <strong>{course.eligibility}</strong>
          </Reveal>
          <Reveal delay={0.2} className="course-info-box">
            <small>Subjects</small>
            <strong>{course.subjects.join(', ')}</strong>
          </Reveal>
        </div>

        <div className="course-curriculum">
          <Reveal>
            <div className="section-tag">What You'll Learn</div>
            <h2 className="display-heading">A plan that<br /><em>fits you.</em></h2>
          </Reveal>
          <div className="curriculum-list">
            {course.curriculum.map((item, i) => (
              <motion.div
                key={i}
                className="curriculum-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <b>{String(i + 1).padStart(2, '0')}</b>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="course-features">
          <Reveal><div className="section-tag">What's Included</div></Reveal>
          <div className="features-grid">
            {course.features.map((feature, i) => (
              <motion.div
                key={i}
                className="feature-pill"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                ✓ {feature}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="course-faqs">
          <Reveal><div className="section-tag">Course FAQs</div></Reveal>
          <div className="faq-list">
            {course.faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{faq.q}</span>
                  <span className="faq-toggle">{openFaq === i ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="course-cta">
          <Reveal>
            <h2 className="display-heading">Ready to begin?</h2>
            <p>Book a free counselling session and find the right starting point.</p>
            <Link className="button button-primary" to="/contact">Book your conversation <Arrow /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
