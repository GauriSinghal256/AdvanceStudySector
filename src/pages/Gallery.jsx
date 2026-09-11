import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import { galleryItems } from '../data/gallery'

export default function Gallery() {
  return (
    <>
      <PageHeader
        tag="Gallery"
        title={<>More than<br /><em>a classroom.</em></>}
        subtitle="Space to ask better questions, make new friends and enjoy the process of becoming."
      />
      <section className="section gallery-page">
        <div className="gallery-masonry">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              className={`gallery-tile tile-${(i % 3) + 1}`}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="gallery-tile-body">
                <small>{item.category}</small>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {i === 0 && (
                <img src="/images/gallery/image.png" alt={item.title} />
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
