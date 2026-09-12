import { Link } from 'react-router-dom'
import Logo from './Logo'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo compact />
          <p className="footer-desc">{site.description}</p>
          <div className="footer-social">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">Facebook ↗</a>
            <a href={site.social.youtube} target="_blank" rel="noopener noreferrer">YouTube ↗</a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h4>Get in touch</h4>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.emailHref}>{site.email}</a>
          <span className="footer-address">{site.address}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {site.name}. Made for curious minds.</p>
      </div>
    </footer>
  )
}
