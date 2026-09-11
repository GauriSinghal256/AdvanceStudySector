import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { faculty } from '../data/faculty'

export default function FacultyPreview() {
  return (
    <section className="faculty section" id="faculty">
      <div className="section-heading">
        <Reveal>
          <div className="section-tag">04 / The people behind it</div>
          <h2 className="display-heading">Good teachers<br /><em>change everything.</em></h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p>Subject experts, patient listeners and committed mentors. Meet the people who make Advance feel different.</p>
        </Reveal>
      </div>
      <div className="faculty-grid">
        {faculty.slice(0, 3).map((person, i) => (
          <motion.article
            key={person.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
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
      <div className="section-cta">
        <Link to="/faculty" className="text-link">Meet the full team →</Link>
      </div>
    </section>
  )
}
