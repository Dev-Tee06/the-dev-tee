import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] bg-navy pt-40 pb-32 flex flex-col items-center justify-center text-center text-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      <Container className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-electric">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">This page didn't make the cut.</h2>
        <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
          Let's get you back on track and moving forward.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/">
            <Button variant="secondary" className="border-white/30 text-white hover:bg-white/10">Back to Home</Button>
          </Link>
          <Link href="/contact">
            <Button>Start a Conversation</Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
