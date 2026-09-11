import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const slides = [
  {
    src: '/images/hero/image.png',
    alt: 'Advance Study Sector learning resources',
    caption: 'Where curiosity',
    caption2: 'becomes clarity',
    effect: 'zoom-blur',
  },
  {
    src: 'https://images.pexels.com/photos/8618018/pexels-photo-8618018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Student concentrating on writing',
    caption: 'Where effort',
    caption2: 'becomes habit',
    effect: 'slide-right',
  },
  {
    src: 'https://images.pexels.com/photos/37811241/pexels-photo-37811241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Students studying together in classroom',
    caption: 'Where questions',
    caption2: 'become confidence',
    effect: 'pan-left',
  },
  {
    src: '/images/gallery/image.png',
    alt: 'Creative expression at Advance Study Sector',
    caption: 'Where potential',
    caption2: 'finds its way',
    effect: 'crossfade-zoom',
  },
  {
    src: 'https://images.pexels.com/photos/8199555/pexels-photo-8199555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Student smiling while studying',
    caption: 'Advance',
    caption2: 'Study Sector',
    effect: 'scale-reveal',
  },
]

const SLIDE_DURATION = 1400

export default function Intro() {
  const [visible, setVisible] = useState(true)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!visible) return
    if (current < slides.length - 1) {
      const timer = setTimeout(() => setCurrent((c) => c + 1), SLIDE_DURATION)
      return () => clearTimeout(timer)
    }
    const exitTimer = setTimeout(() => setVisible(false), SLIDE_DURATION + 600)
    return () => clearTimeout(exitTimer)
  }, [current, visible])

  const slide = slides[current]
  const progress = ((current + 1) / slides.length) * 100

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="cinematic-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="cinematic-slide"
              initial={getInitial(slide.effect)}
              animate={getAnimate(slide.effect)}
              exit={getExit(slide.effect)}
              transition={{ duration: SLIDE_DURATION / 1000, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src={slide.src} alt={slide.alt} />
              <div className="cinematic-overlay" />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`caption-${current}`}
              className="cinematic-caption"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span className="caption-line-1">{slide.caption}</span>
              <span className="caption-line-2">{slide.caption2}</span>
            </motion.div>
          </AnimatePresence>

          <div className="cinematic-progress">
            <motion.div
              className="cinematic-progress-bar"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>

          <div className="cinematic-counter">
            0{current + 1} <span>/ 0{slides.length}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function getInitial(effect) {
  switch (effect) {
    case 'zoom-blur': return { opacity: 0, scale: 1.4, filter: 'blur(24px)' }
    case 'slide-right': return { opacity: 0, x: '100%', scale: 1.15 }
    case 'pan-left': return { opacity: 0, x: '-8%', scale: 1.25 }
    case 'crossfade-zoom': return { opacity: 0, scale: 1.3, filter: 'blur(12px)' }
    case 'scale-reveal': return { opacity: 0, scale: 1.5, filter: 'blur(30px)' }
    default: return { opacity: 0, scale: 1.3 }
  }
}

function getAnimate(effect) {
  switch (effect) {
    case 'zoom-blur': return { opacity: 1, scale: 1.08, filter: 'blur(0px)' }
    case 'slide-right': return { opacity: 1, x: '0%', scale: 1.12 }
    case 'pan-left': return { opacity: 1, x: '0%', scale: 1.18 }
    case 'crossfade-zoom': return { opacity: 1, scale: 1.1, filter: 'blur(0px)' }
    case 'scale-reveal': return { opacity: 1, scale: 1.05, filter: 'blur(0px)' }
    default: return { opacity: 1, scale: 1.1 }
  }
}

function getExit(effect) {
  switch (effect) {
    case 'zoom-blur': return { opacity: 0, scale: 1, filter: 'blur(8px)' }
    case 'slide-right': return { opacity: 0, x: '-10%', scale: 1.1 }
    case 'pan-left': return { opacity: 0, scale: 1.05, filter: 'blur(6px)' }
    case 'crossfade-zoom': return { opacity: 0, scale: 1, filter: 'blur(8px)' }
    case 'scale-reveal': return { opacity: 0, scale: 1, filter: 'blur(16px)' }
    default: return { opacity: 0, scale: 1 }
  }
}
