import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { courses } from '../data/courses'

export default function Courses() {
  return (
    <>
      <PageHeader
        tag="Our Courses"
        title={<>Room to grow.<br /><em>Space to become.</em></>}
        subtitle="Learning journeys designed around where you are now — and the person you want to become."
      />
      <section className="section courses-page">
        <div className="course-list">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              className="course-row"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/courses/${course.slug}`} className={`course-card-large ${course.accent}`}>
                <div className="course-card-large-num">{course.icon}</div>
                <div className="course-card-large-body">
                  <small>{course.label}</small>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <div className="course-card-large-meta">
                    <span>{course.meta}</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="course-card-large-arrow">↗</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
