export default function Arrow({ dark = false }) {
  return <span className={dark ? 'arrow dark' : 'arrow'} aria-hidden="true">↗</span>
}
