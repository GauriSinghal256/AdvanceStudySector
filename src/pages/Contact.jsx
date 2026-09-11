import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import { courses } from '../data/courses'
import { site } from '../data/site'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', phone: '', email: '', interest: '', message: '' })
  }

  return (
    <>
      <PageHeader
        tag="Contact & Enquiry"
        title={<>Your next chapter<br /><em>starts here.</em></>}
        subtitle="Tell us a little about your student and we'll get back to you with the right place to begin."
      />
      <section className="section contact-page">
        <div className="contact-page-layout">
          <Reveal className="contact-info">
            <div className="contact-info-block">
              <small>Phone</small>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
            <div className="contact-info-block">
              <small>Email</small>
              <a href={site.emailHref}>{site.email}</a>
            </div>
            <div className="contact-info-block">
              <small>Address</small>
              <span>{site.address}</span>
            </div>
            <div className="contact-info-block">
              <small>Follow</small>
              <div className="contact-social">
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
                <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a>
                <a href={site.social.youtube} target="_blank" rel="noopener noreferrer">YouTube ↗</a>
              </div>
            </div>
            <div className="map-placeholder">
              <div className="map-pin">📍</div>
              <small>Find us in Kurukshetra</small>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="contact-form-area">
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
                  className="enquiry-form contact-form"
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
                  <label>Email (optional)
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="aarav@example.com" />
                  </label>
                  <label>I'm interested in
                    <select required value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                      <option value="" disabled>Select a course</option>
                      {courses.map((c) => <option key={c.id}>{c.label}</option>)}
                    </select>
                  </label>
                  <label>Message (optional)
                    <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your student..." />
                  </label>
                  <button className="button button-primary full-button">Book my conversation <Arrow /></button>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>
    </>
  )
}
