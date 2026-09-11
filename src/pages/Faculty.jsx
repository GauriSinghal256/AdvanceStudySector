import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { faculty } from '../data/faculty'

export default function Faculty() {
  return (
    <>
      <PageHeader
        tag="Our Faculty"
        title={<>Good teachers<br /><em>change everything.</em></>}
        subtitle="Subject experts, patient listeners and committed mentors. Meet the people who make Advance feel different."
      />
      <section className="section faculty-page">
        <div className="faculty-full-grid">
          {faculty.map((person, i) => (
            <motion.article
              key={person.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/faculty/${person.id}`} className="faculty-card">
                <div className={`faculty-portrait ${person.tone}`}>
                  <span>{person.initials}</span>
                  {i === 0 && <i>✦</i>}
                </div>
                <div className="faculty-info">
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                  <span className="faculty-link">View profile ↗</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
