import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '../data/blog'
import Arrow from '../components/Arrow'
import Reveal from '../components/Reveal'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      <section className="blog-post-hero">
        <div className="blog-post-hero-inner">
          <Link to="/blog" className="back-button">← Back to Blog</Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="blog-post-meta">
              <span>{post.category}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <h1>{post.title}</h1>
            <p className="blog-post-author">By {post.author}</p>
          </motion.div>
        </div>
      </section>

      <section className="section blog-post-section">
        <Reveal>
          <div className="blog-post-content">
            <p className="lead">{post.excerpt}</p>
            {post.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Reveal>

        <div className="blog-related">
          <h3>More articles</h3>
          <div className="blog-related-grid">
            {related.map((rp) => (
              <Link key={rp.id} to={`/blog/${rp.slug}`} className="blog-related-card">
                <small>{rp.category}</small>
                <h4>{rp.title}</h4>
                <span>Read →</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="course-cta">
          <Reveal>
            <h2 className="display-heading">Have a question?</h2>
            <p>We're always happy to talk about learning.</p>
            <Link className="button button-primary" to="/contact">Get in touch <Arrow /></Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
