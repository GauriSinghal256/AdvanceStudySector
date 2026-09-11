import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import Counter from '../components/Counter'
import { highlights } from '../data/results'

export default function ResultsPreview() {
  return (
    <section className="results section" id="results">
      <div className="results-glow" />
      <Reveal><div className="section-tag light">03 / What happens next</div></Reveal>
      <div className="results-layout">
        <Reveal>
          <h2 className="display-heading light-heading">Small steps.<br /><em>Big shifts.</em></h2>
          <p className="light-copy">The best results are not just scores. They are the moment a student raises their hand, takes on a challenge, or starts believing they can.</p>
          <Link className="button button-light" to="/results">See our results <Arrow dark /></Link>
        </Reveal>
        <motion.div
          className="result-board"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="result-title">
            <span>THE 2024 HIGHLIGHTS</span>
            <span>ADVANCE / 24</span>
          </div>
          <div className="result-number">
            <Counter value={94} suffix="%" />
          </div>
          <p>of our students achieved their<br /><b>personal best.</b></p>
          <div className="result-bars">
            <span style={{ '--bar': '84%' }} />
            <span style={{ '--bar': '70%' }} />
            <span style={{ '--bar': '92%' }} />
            <span style={{ '--bar': '78%' }} />
            <span style={{ '--bar': '98%' }} />
          </div>
          <div className="result-labels">
            <small>Confidence</small>
            <small>Clarity</small>
            <small>Consistency</small>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
