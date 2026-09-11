import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import { courses } from '../data/courses'
import { site } from '../data/site'

export default function ContactPreview() {
  const [form, setForm] = useState({ name: '', phone: '', interest: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', phone: '', interest: '' })
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact-panel">
        <Reveal className="contact-copy">
          <div className="section-tag light">07 / Take the first step</div>
          <h2 className="display-heading light-heading">Your next chapter<br /><em>starts here.</em></h2>
          <p>Tell us a little about your student and we'll get back to you with the right place to begin.</p>
          <div className="contact-details">
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={site.emailHref}>{site.email}</a>
            <span>{site.address}</span>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="enquiry-form-wrap">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                className="success-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <span>✓</span>
                <h3>You're on your way.</h3>
                <p>Thank you for reaching out. Our team will call you shortly.</p>
                <button className="button button-light" onClick={() => setSent(false)}>Send another enquiry</button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="enquiry-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="form-intro">
                  <span>FREE COUNSELLING</span>
                  <p>No pressure. Just a good conversation.</p>
                </div>
                <label>Your name
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Aarav Sharma" />
                </label>
                <label>Phone number
                  <input required type="tel" pattern="[0-9+ ()-]{10,}" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 00000 00000" />
                </label>
                <label>I'm interested in
                  <select required value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                    <option value="" disabled>Select a course</option>
                    {courses.map((c) => <option key={c.id}>{c.label}</option>)}
                  </select>
                </label>
                <button className="button button-primary full-button">Book my conversation <Arrow /></button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
