import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

export default function Privacy() {
  return (
    <>
      <PageHeader tag="Privacy Policy" title={<>Your privacy<br /><em>matters.</em></>} />
      <section className="section legal-page">
        <Reveal>
          <div className="legal-content">
            <p className="lead">Last updated: September 2024</p>
            <p>At {site.name}, we take your privacy seriously. This policy explains what information we collect, how we use it, and the choices you have.</p>
            <h3>Information We Collect</h3>
            <p>When you submit an enquiry form, we collect your name, phone number, email (if provided) and your area of interest. We do not collect any information from students under 13 without parental consent.</p>
            <h3>How We Use Your Information</h3>
            <p>We use the information you provide to contact you about our courses, answer your questions, and share relevant updates. We do not sell or share your information with third parties.</p>
            <h3>Data Security</h3>
            <p>Your information is stored securely and accessible only to authorised staff. We take reasonable measures to protect your data from unauthorised access.</p>
            <h3>Your Rights</h3>
            <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at {site.email}.</p>
            <h3>Changes to This Policy</h3>
            <p>We may update this policy from time to time. Any changes will be posted on this page with an updated date.</p>
          </div>
        </Reveal>
      </section>
    </>
  )
}
