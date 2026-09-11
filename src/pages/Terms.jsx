import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

export default function Terms() {
  return (
    <>
      <PageHeader tag="Terms of Use" title={<>The fine<br /><em>print.</em></>} />
      <section className="section legal-page">
        <Reveal>
          <div className="legal-content">
            <p className="lead">Last updated: September 2024</p>
            <p>By using the {site.name} website and services, you agree to the following terms.</p>
            <h3>Enrolment</h3>
            <p>Enrolment in any course is subject to availability and assessment. Fees are due as per the schedule communicated at the time of admission.</p>
            <h3>Attendance</h3>
            <p>Students are expected to attend all scheduled classes. Backup sessions are available for missed classes when prior notice is given.</p>
            <h3>Refund Policy</h3>
            <p>Fees are non-refundable once a course has begun. In exceptional circumstances, partial refunds may be considered at the discretion of the management.</p>
            <h3>Code of Conduct</h3>
            <p>Students are expected to maintain respectful behaviour towards faculty and peers. Bullying, harassment or disruptive behaviour may result in discontinuation without refund.</p>
            <h3>Website Use</h3>
            <p>All content on this website is the property of {site.name}. You may not reproduce or distribute it without permission.</p>
            <h3>Contact</h3>
            <p>For any questions about these terms, please contact us at {site.email}.</p>
          </div>
        </Reveal>
      </section>
    </>
  )
}
