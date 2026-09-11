import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import Arrow from '../components/Arrow'
import { results, highlights } from '../data/results'

export default function Results() {
  return (
    <>
      <PageHeader
        tag="Results & Achievements"
        title={<>Small steps.<br /><em>Big shifts.</em></>}
        subtitle="The best results are not just scores. They are the moment a student raises their hand, takes on a challenge, or starts believing they can."
      />

      <section className="section results-page">
        <div className="highlights-grid">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              className="highlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <strong><Counter value={h.value} suffix={h.suffix} /></strong>
              <small>{h.label}</small>
            </motion.div>
          ))}
        </div>

        <div className="toppers-section">
          <Reveal><div className="section-tag">Our Toppers</div></Reveal>
          {results.map((year, yi) => (
            <motion.div
              key={year.year}
              className="topper-year"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: yi * 0.15 }}
            >
              <h3 className="topper-year-label">{year.year}</h3>
              <div className="topper-grid">
                {year.toppers.map((t, i) => (
                  <div key={i} className="topper-card">
                    <div className="topper-score">{t.score}</div>
                    <strong>{t.name}</strong>
                    <small>{t.class}</small>
                    <span>{t.note}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="course-cta">
          <Reveal>
            <h2 className="display-heading">Your story could be next.</h2>
            <p>Every result starts with a conversation. Let's have yours.</p>
            <Link className="button button-primary" to="/contact">Start your journey <Arrow /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
