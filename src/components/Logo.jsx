import { Link } from 'react-router-dom'

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className={`brand ${compact ? 'brand-compact' : ''}`} aria-label="Advance Study Sector home">
      <img src="/images/logo/image.png" alt="Advance Study Sector" />
    </Link>
  )
}
