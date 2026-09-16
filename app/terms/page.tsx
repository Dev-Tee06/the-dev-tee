import { Container } from "@/components/ui/Container"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | dev-tee.org",
  description: "Terms of service for DEV-TEE.",
}

export default function TermsPage() {
  return (
    <div className="w-full pt-32 pb-24 bg-offwhite min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded border border-border-subtle shadow-sm">
          <h1 className="text-3xl font-bold text-navy mb-8">Terms of Service</h1>
          <div className="prose text-text-primary space-y-6">
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
            <h2>1. Acceptable Use</h2>
            <p>By accessing our website, you agree to use it only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the site.</p>
            <h2>2. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and case studies, is the property of DEV-TEE or our respective clients and is protected by intellectual property laws. You may not reproduce or use this content without explicit permission.</p>
            <h2>3. Disclaimer of Guarantees</h2>
            <p>While we apply SEO best practices and aim for high performance, DEV-TEE does not guarantee specific Google rankings, search engine placement, or exact conversion metrics. Any results or statistics shared in case studies reflect specific past projects and are not a guarantee of future performance for your business.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
