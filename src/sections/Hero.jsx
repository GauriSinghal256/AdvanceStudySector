import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow'

const heroSlides = [
  { src: '/images/hero/image.png', alt: 'Advance Study Sector learning resources', label: 'Curious Minds', transition: 'zoom-blur' },
  { src: 'https://images.pexels.com/photos/6209570/pexels-photo-6209570.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Students in an interactive classroom session', label: 'Interactive Learning', transition: 'slide-up' },
  { src: '/images/gallery/image.png', alt: 'Creative expression at Advance Study Sector', label: 'Creative Expression', transition: 'pan-right' },
  { src: 'https://images.pexels.com/photos/8199626/pexels-photo-8199626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Smiling student with books', label: 'Confident Students', transition: 'scale-reveal' },
  { src: 'https://images.pexels.com/photos/11025057/pexels-photo-11025057.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Two students studying together', label: 'Together We Grow', transition: 'slide-left' },
]

const SLIDE_TIME = 3400

function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    if (paused) return
    const start = Date.now()
    setElapsed(0)
    const tick = setInterval(() => setElapsed(Date.now() - start), 60)
    const timer = setTimeout(() => setCurrent((c) => (c + 1) % heroSlides.length), SLIDE_TIME)
    return () => { clearInterval(tick); clearTimeout(timer) }
  }, [current, paused])

  const slide = heroSlides[current]
  const progress = Math.min(elapsed / SLIDE_TIME, 1) * 100

  const transitions = {
    'zoom-blur': { initial: { opacity: 0, scale: 1.35, filter: 'blur(16px)' }, animate: { opacity: 1, scale: 1.05, filter: 'blur(0px)' }, exit: { opacity: 0, scale: 1, filter: 'blur(6px)' } },
    'slide-up': { initial: { opacity: 0, y: '30%' }, animate: { opacity: 1, y: '0%' }, exit: { opacity: 0, y: '-15%' } },
    'pan-right': { initial: { opacity: 0, x: '-8%', scale: 1.25 }, animate: { opacity: 1, x: '0%', scale: 1.1 }, exit: { opacity: 0, scale: 1.05 } },
    'scale-reveal': { initial: { opacity: 0, scale: 1.45, filter: 'blur(20px)' }, animate: { opacity: 1, scale: 1.05, filter: 'blur(0px)' }, exit: { opacity: 0, scale: 1, filter: 'blur(10px)' } },
    'slide-left': { initial: { opacity: 0, x: '15%' }, animate: { opacity: 1, x: '0%' }, exit: { opacity: 0, x: '-10%' } },
  }

  const t = transitions[slide.transition]

  return (
    <div className="hero-slideshow">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="hero-slide"
          initial={t.initial}
          animate={t.animate}
          exit={t.exit}
          transition={{ duration: SLIDE_TIME / 2400, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={slide.src} alt={slide.alt} />
          <div className="hero-slide-overlay" />
        </motion.div>
      </AnimatePresence>

      <div className="hero-slide-progress">
        {heroSlides.map((_, i) => (
          <span key={i} className="hero-slide-progress-track">
            <span
              className="hero-slide-progress-fill"
              style={{ width: i === current ? `${progress}%` : i < current ? '100%' : '0%' }}
            />
          </span>
        ))}
      </div>

      <button
        type="button"
        className="hero-slide-toggle"
        aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
        onClick={() => setPaused((p) => !p)}
      >
        {paused ? '▶' : '❚❚'}
      </button>

      <div className="hero-slide-label">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <i className="hero-slide-dot-live" />
            {slide.label}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="hero-slide-counter">0{current + 1} / 0{heroSlides.length}</div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" />
      <motion.div
        className="hero-glow"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="eyebrow-dot" /> Learning with intent
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          Where potential<br /><em>finds its way.</em>
        </motion.h1>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          A future-focused learning space in Kurukshetra, helping students build the knowledge, habits and confidence to go further.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Link className="button button-primary" to="/contact">Start your journey <Arrow /></Link>
          <Link className="text-link" to="/about">Discover our approach <Arrow dark /></Link>
        </motion.div>
        <motion.div
          className="hero-proof"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <div className="avatar-stack">
            <span>AM</span><span>RS</span><span>PK</span><b>+</b>
          </div>
          <div>
            <strong>500+</strong>
            <small>students guided with care</small>
          </div>
        </motion.div>
      </div>

      <div className="hero-visual">
        <motion.div
          className="visual-orbit orbit-one"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="visual-orbit orbit-two"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="hero-slideshow-frame"
          initial={{ opacity: 0, y: 40, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroSlideshow />
        </motion.div>
        <motion.div
          className="floating-note"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: -4 }}
          transition={{ duration: 0.6, delay: 1, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.05, rotate: 0 }}
        >
          <span className="spark">✦</span>
          <div>
            <strong>Since 2018</strong>
            <small>Growing together</small>
          </div>
        </motion.div>
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: -8 }}
          transition={{ duration: 0.6, delay: 1.2, type: 'spring' }}
        >
          <span>THE ADVANCE<br /><b>METHOD</b></span>
        </motion.div>
      </div>

      <motion.div
        className="scroll-cue"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span>Scroll to explore</span>
        <i />
      </motion.div>
    </section>
  )
}
