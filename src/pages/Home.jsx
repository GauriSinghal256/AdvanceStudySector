import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import AboutPreview from '../sections/AboutPreview'
import VideoTour from '../sections/VideoTour'
import CoursesPreview from '../sections/CoursesPreview'
import ContactPreview from '../sections/ContactPreview'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutPreview />
      <VideoTour />
      <CoursesPreview />
      <ContactPreview />
    </>
  )
}
