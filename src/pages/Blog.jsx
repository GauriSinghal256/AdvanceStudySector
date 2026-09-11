import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import { blogPosts } from '../data/blog'

export default function Blog() {
  return (
    <>
      <PageHeader
        tag="Blog & News"
        title={<>Ideas worth<br /><em>sharing.</em></>}
        subtitle="Study strategies, career guidance and perspectives on learning from the Advance Study Sector team."
      />
      <section className="section blog-page">
        <div className="blog-list">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-meta">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span>{post.author} · {post.date}</span>
                  <span>Read →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
