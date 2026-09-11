import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import { faqs } from '../data/faqs'
import { Link } from 'react-router-dom'

export default function FAQs() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <PageHeader
        tag="Frequently Asked Questions"
        title={<>Questions,<br /><em>answered.</em></>}
        subtitle="Everything you might want to know before joining the Advance Study Sector family."
      />
      <section className="section faqs-page">
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <span className="faq-toggle">{open === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {open === i && (
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
        <div className="course-cta">
          <h2 className="display-heading">Still have questions?</h2>
          <p>Book a free counselling session and we'll answer them all.</p>
          <Link className="button button-primary" to="/contact">Get in touch →</Link>
        </div>
      </section>
    </>
  )
}
