import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import Arrow from './Arrow'

const navLinks = [
  ['Home', '/'],
  ['About', '/about'],
  ['Courses', '/courses'],
  ['Faculty', '/faculty'],
  ['Results', '/results'],
  ['Gallery', '/gallery'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="site-header">
      <div className="header-inner">
        <Logo />
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navLinks.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              className={location.pathname === href ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" to="/contact" onClick={() => setMenuOpen(false)}>
          Book a free counselling <Arrow />
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map(([label, href]) => (
              <Link
                key={href}
                to={href}
                className={location.pathname === href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
