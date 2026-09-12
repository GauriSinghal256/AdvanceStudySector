import { motion } from 'framer-motion'

export default function PageHeader({ tag, title, subtitle, image }) {
  return (
    <section className="page-header">
      <div className={image ? 'page-header-inner has-image' : 'page-header-inner'}>
        <div className="page-header-copy">
          <motion.p
            className="section-tag"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {tag}
          </motion.p>
          <motion.h1
            className="display-heading"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="page-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {image && (
          <motion.div
            className="page-header-visual"
            initial={{ opacity: 0, scale: 0.92, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={image.src} alt={image.alt} />
            {image.caption && (
              <motion.div
                className="page-header-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, rotate: -6 }}
                transition={{ duration: 0.6, delay: 0.5, type: 'spring' }}
              >
                <span>✦</span> {image.caption}
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
