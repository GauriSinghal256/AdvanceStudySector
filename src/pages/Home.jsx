import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import AboutPreview from '../sections/AboutPreview'
import VideoTour from '../sections/VideoTour'
import CoursesPreview from '../sections/CoursesPreview'
import ResultsPreview from '../sections/ResultsPreview'
import FacultyPreview from '../sections/FacultyPreview'
import TestimonialsPreview from '../sections/TestimonialsPreview'
import GalleryPreview from '../sections/GalleryPreview'
import ContactPreview from '../sections/ContactPreview'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutPreview />
      <VideoTour />
      <CoursesPreview />
      <ResultsPreview />
      <FacultyPreview />
      <TestimonialsPreview />
      <GalleryPreview />
      <ContactPreview />
    </>
  )
}
