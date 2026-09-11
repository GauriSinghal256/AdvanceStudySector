import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { courses } from '../data/courses'

export default function CoursesPreview() {
  return (
    <section className="courses section" id="courses">
      <div className="section-heading">
        <Reveal>
          <div className="section-tag">02 / Find your direction</div>
          <h2 className="display-heading">Room to grow.<br /><em>Space to become.</em></h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p>Learning journeys designed around where you are now — and the person you want to become.</p>
        </Reveal>
      </div>
      <div className="course-grid">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <Link to={`/courses/${course.slug}`} className={`course-card ${course.accent}`}>
              <article>
                <div className="course-top">
                  <span>{course.icon}</span>
                  <span className="course-arrow">↗</span>
                </div>
                <div className="course-content">
                  <small>{course.label}</small>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span>{course.meta}</span>
                    <span>Explore course</span>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="section-cta">
        <Link to="/courses" className="text-link">View all courses →</Link>
      </div>
    </section>
  )
}
