import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'

// TODO: swap this for your real Advance Study Sector video once it's ready.
// The player below is fully wired up — just replace VIDEO_SRC (and POSTER_SRC
// if you want a different thumbnail) and everything else keeps working.
const VIDEO_SRC = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
const POSTER_SRC = '/images/gallery/image.png'

const chips = ['Small, focused batches', 'Doubt-friendly classrooms', 'Mentor-led, not just taught']

export default function VideoTour() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  function handlePlay() {
    setPlaying(true)
    requestAnimationFrame(() => videoRef.current?.play())
  }

  return (
    <section className="video-tour section" id="video-tour">
      <div className="video-tour-glow" />
      <div className="video-tour-layout">
        <Reveal className="video-tour-copy">
          <div className="section-tag light">See it, not just read it</div>
          <h2 className="display-heading light-heading">
            Step inside<br /><em>a real classroom day.</em>
          </h2>
          <p className="light-copy">
            No stock-photo smiles. This is what a session at Advance actually feels like —
            quiet focus, honest questions and mentors who stay a minute longer to explain it right.
          </p>
          <ul className="video-tour-chips">
            {chips.map((c) => (
              <li key={c}><span /> {c}</li>
            ))}
          </ul>
        </Reveal>

        <motion.div
          className="video-tour-frame"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {!playing ? (
            <button type="button" className="video-tour-poster" onClick={handlePlay} aria-label="Play video">
              <img src={POSTER_SRC} alt="A look inside Advance Study Sector" />
              <div className="video-tour-poster-overlay" />
              <span className="video-tour-play">
                <span className="video-tour-play-ring" />
                <span className="video-tour-play-icon">▶</span>
              </span>
              <span className="video-tour-caption">
                <strong>Campus walkthrough</strong>
                <small>Advance Study Sector · Kurukshetra</small>
              </span>
              <span className="video-tour-duration">02:14</span>
            </button>
          ) : (
            <video
              ref={videoRef}
              className="video-tour-video"
              src={VIDEO_SRC}
              poster={POSTER_SRC}
              controls
              playsInline
            />
          )}
        </motion.div>
      </div>
    </section>
  )
}
