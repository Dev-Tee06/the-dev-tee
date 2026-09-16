import { Metadata } from "next"
import { ContactContent } from "@/components/contact/ContactContent"

export const metadata: Metadata = {
  title: "Start a Conversation | dev-tee.org",
  description: "Let's build what your business needs next. Start a conversation with DEV-TEE.",
}

export default function ContactPage() {
  return <ContactContent />
}
