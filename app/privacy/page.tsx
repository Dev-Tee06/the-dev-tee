import { Container } from "@/components/ui/Container"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | DEV-TEE",
  description: "Privacy policy and data handling practices for DEV-TEE.",
}

export default function PrivacyPage() {
  return (
    <div className="w-full pt-32 pb-24 bg-offwhite min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded border border-border-subtle shadow-sm">
          <h1 className="text-3xl font-bold text-navy mb-8">Privacy Policy</h1>
          <div className="prose text-text-primary space-y-6">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            <h2>1. What data is collected</h2>
            <p>We collect information you provide directly to us through our contact form, including your name, email address, phone number, and business information. We may also collect anonymous analytics data to understand how visitors use our site.</p>
            <h2>2. Why it's collected and how it's used</h2>
            <p>We use the information collected via the contact form solely to respond to your inquiries, discuss potential projects, and provide our web strategy and development services. Analytics data is used to improve our website experience and performance.</p>
            <h2>3. Third-party sharing</h2>
            <p>We do not sell your personal data. We may share data with trusted third-party service providers (such as email delivery services like Resend, or analytics providers like GA4/Plausible) solely for the purpose of operating our business and website.</p>
            <h2>4. Data retention and deletion</h2>
            <p>We retain your contact information as long as necessary to fulfill the purposes outlined in this policy. You may request deletion of your personal data at any time by contacting us.</p>
            <h2>5. Contact us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us via email.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
