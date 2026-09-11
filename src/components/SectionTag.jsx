export default function SectionTag({ children, light = false }) {
  return <p className={light ? 'section-tag light' : 'section-tag'}>{children}</p>
}
