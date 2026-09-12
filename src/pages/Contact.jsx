import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import { courses } from '../data/courses'
import { site } from '../data/site'

const trustPoints = [
  { icon: '⚡', label: 'Same-day callback' },
  { icon: '🎯', label: 'Free counselling' },
  { icon: '🤝', label: '500+ families guided' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', phone: '', email: '', interest: '', message: '' })
  }

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`

  return (
    <>
      <PageHeader
        tag="Contact & Enquiry"
        title={<>Your next chapter<br /><em>starts here.</em></>}
        subtitle="Tell us a little about your student and we'll get back to you with the right place to begin."
        image={{
          src: 'https://images.pexels.com/photos/8199626/pexels-photo-8199626.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
          alt: 'Smiling student ready to begin at Advance Study Sector',
          caption: 'Free counselling',
        }}
      />

      <section className="section contact-page">
        <div className="contact-trust-row">
          {trustPoints.map((t) => (
            <Reveal key={t.label} className="contact-trust-pill">
              <span>{t.icon}</span> {t.label}
            </Reveal>
          ))}
        </div>

        <div className="contact-page-layout">
          <Reveal className="contact-info-card">
            <div className="contact-info-card-glow" />
            <div className="contact-info-card-header">
              <div className="section-tag light">Reach us directly</div>
              <h2 className="display-heading light-heading">Let's start<br /><em>a conversation.</em></h2>
            </div>

            <div className="contact-info-list">
              <a className="contact-info-row" href={site.phoneHref}>
                <span className="contact-info-icon">📞</span>
                <span className="contact-info-text">
                  <small>Call us</small>
                  <strong>{site.phone}</strong>
                </span>
              </a>
              <a className="contact-info-row" href={site.emailHref}>
                <span className="contact-info-icon">✉️</span>
                <span className="contact-info-text">
                  <small>Email</small>
                  <strong>{site.email}</strong>
                </span>
              </a>
              <div className="contact-info-row">
                <span className="contact-info-icon">📍</span>
                <span className="contact-info-text">
                  <small>Visit us</small>
                  <strong>{site.address}</strong>
                </span>
              </div>
            </div>

            <div className="contact-social-row">
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="contact-social-pill">Instagram <Arrow /></a>
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="contact-social-pill">Facebook <Arrow /></a>
              <a href={site.social.youtube} target="_blank" rel="noopener noreferrer" className="contact-social-pill">YouTube <Arrow /></a>
            </div>

            <div className="contact-map">
              <iframe
                src={mapSrc}
                title="Advance Study Sector location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="contact-form-card">
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

                  <div className="form-row">
                    <label>Your name
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Aarav Sharma" />
                    </label>
                    <label>Phone number
                      <input required type="tel" pattern="[0-9+ ()-]{10,}" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 00000 00000" />
                    </label>
                  </div>

                  <div className="form-row">
                    <label>Email (optional)
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="aarav@example.com" />
                    </label>
                    <label>I'm interested in
                      <select required value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
                        <option value="" disabled>Select a course</option>
                        {courses.map((c) => <option key={c.id}>{c.label}</option>)}
                      </select>
                    </label>
                  </div>

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
