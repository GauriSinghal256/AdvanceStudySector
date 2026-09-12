import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import Arrow from '../components/Arrow'
import { site } from '../data/site'
import { faculty } from '../data/faculty'

export default function About() {
  const founder = faculty[0]

  return (
    <>
      <PageHeader
        tag="About Advance Study Sector"
        title={<>Education that<br /><em>opens doors.</em></>}
        subtitle="Founded in 2018 in Kurukshetra, Advance Study Sector was built on a simple idea: every student deserves to be understood before they are taught."
        image={{
          src: 'https://images.pexels.com/photos/6209570/pexels-photo-6209570.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
          alt: 'Students in an interactive classroom session at Advance Study Sector',
          caption: 'Since 2018',
        }}
      />

      <section className="section about-page">
        <div className="about-story">
          <Reveal>
            <div className="section-tag">Our Story</div>
            <h2 className="display-heading">From one classroom<br /><em>to a movement.</em></h2>
          </Reveal>
          <Reveal delay={0.15} className="about-story-copy">
            <p className="lead">It started with a simple observation: students were memorising, not understanding. They were stressed, not curious. Something needed to change.</p>
            <p>In 2018, Dr. Monika Rohilla opened the first Advance Study Sector classroom with twelve students and a conviction that education should feel different. Not easier — but more honest. More human. More aligned with how learning actually works.</p>
            <p>Six years later, that conviction has guided over 500 students through board exams, career decisions and the occasional existential crisis about trigonometry. The classrooms got bigger. The belief stayed the same.</p>
          </Reveal>
        </div>

        <div className="about-values">
          <Reveal><div className="section-tag">What We Believe</div></Reveal>
          <div className="values-grid">
            {[
              { num: '01', title: 'Clarity over clutter', text: 'We strip away the noise and focus on what truly matters: deep understanding.' },
              { num: '02', title: 'Progress over pressure', text: 'Students grow at their own pace, supported by mentors who listen first.' },
              { num: '03', title: 'Curiosity over compliance', text: 'We reward questions, not just answers. The best learning starts with "why?"' },
              { num: '04', title: 'Person over performance', text: 'A student is not a score. We see the whole human behind every desk.' },
            ].map((v, i) => (
              <motion.div
                key={v.num}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <b>{v.num}</b>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="about-founder" id="founder">
          <Reveal><div className="section-tag">Meet the Founder</div></Reveal>
          <div className="founder-layout">
            <motion.div
              className={`founder-portrait ${founder.tone}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span>{founder.initials}</span>
              <i>✦</i>
            </motion.div>
            <Reveal delay={0.15} className="founder-info">
              <h2 className="display-heading">{founder.name}</h2>
              <p className="founder-role">{founder.role}</p>
              <p className="founder-bio">{founder.bio}</p>
              <blockquote className="founder-quote">"{founder.philosophy}"</blockquote>
              <div className="founder-quals">
                <small>Qualifications</small>
                <ul>
                  {founder.qualifications.map((q, i) => <li key={i}>{q}</li>)}
                </ul>
              </div>
              <Link className="button button-primary" to="/contact">Book a meeting <Arrow /></Link>
            </Reveal>
          </div>
        </div>

        <div className="about-stats">
          {site.stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <strong><Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} /></strong>
              <small>{stat.label}</small>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
