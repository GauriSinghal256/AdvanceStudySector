import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { faculty } from '../data/faculty'
import Arrow from '../components/Arrow'
import Reveal from '../components/Reveal'

export default function FacultyDetail() {
  const { id } = useParams()
  const person = faculty.find((f) => f.id === id)

  if (!person) return <Navigate to="/faculty" replace />

  return (
    <>
      <section className={`course-hero ${person.tone}`}>
        <div className="course-hero-inner">
          <Link to="/faculty" className="back-button">← Back to Faculty</Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`founder-portrait-large ${person.tone}`}>
              <span>{person.initials}</span>
              <i>✦</i>
            </div>
            <h1>{person.name}</h1>
            <p className="founder-role">{person.role}</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="founder-detail-layout">
          <Reveal className="founder-detail-bio">
            <div className="section-tag">About</div>
            <p className="lead">{person.bio}</p>
            <blockquote className="founder-quote">"{person.philosophy}"</blockquote>
          </Reveal>
          <Reveal delay={0.15} className="founder-detail-side">
            <div className="founder-quals">
              <small>Qualifications</small>
              <ul>
                {person.qualifications.map((q, i) => <li key={i}>{q}</li>)}
              </ul>
            </div>
            <div className="founder-subjects">
              <small>Subjects</small>
              <div className="subject-pills">
                {person.subjects.map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="course-cta">
          <Reveal>
            <h2 className="display-heading">Want to learn with {person.name.split(' ')[0]}?</h2>
            <p>Book a free counselling session to get started.</p>
            <Link className="button button-primary" to="/contact">Book a conversation <Arrow /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
