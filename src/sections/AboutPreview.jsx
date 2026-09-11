import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Arrow from '../components/Arrow'
import Counter from '../components/Counter'
import { site } from '../data/site'

export default function AboutPreview() {
  return (
    <section className="about section" id="about">
      <Reveal><div className="section-tag">01 / Our point of view</div></Reveal>
      <div className="about-layout">
        <Reveal delay={0.1}>
          <h2 className="display-heading">Education should<br /><em>open doors.</em></h2>
        </Reveal>
        <Reveal delay={0.2} className="about-copy">
          <p className="lead">We are not here to make students fit a mould. We are here to help them find their own shape.</p>
          <p>At Advance Study Sector, every lesson is designed to make the complex clear, the unfamiliar approachable and the next step feel possible. Because when students understand their why, the how follows.</p>
          <Link className="text-link" to="/about">Meet the Advance way <Arrow dark /></Link>
        </Reveal>
      </div>
      <div className="about-figures">
        {site.stats.slice(0, 3).map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <strong><Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} /></strong>
            <small>{stat.label}</small>
          </motion.div>
        ))}
        <motion.div
          className="about-circle"
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 9 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
        >
          A better<br /><b>beginning</b><br />starts here.
        </motion.div>
      </div>
    </section>
  )
}
