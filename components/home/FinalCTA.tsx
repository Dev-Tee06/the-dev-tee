"use client"
import { Container } from "../ui/Container"
import { Button } from "../ui/Button"
import { AnimatedSection } from "../ui/animations/AnimatedSection"
import Link from "next/link"

export const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-offwhite">
      <Container>
        <AnimatedSection>
          <div className="max-w-5xl mx-auto bg-white rounded-md border border-border-subtle shadow-[0_10px_40px_rgba(0,0,0,0.03)] p-10 md:p-16 lg:p-20 relative overflow-hidden group">
            {/* Blue top rule */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-electric" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6">
                  LET'S BUILD WHAT YOUR BUSINESS NEEDS NEXT.
                </h2>
                <p className="text-text-muted text-lg">
                  Stop settling for a website that just sits there. Start a conversation about transforming your web presence into a tool for growth.
                </p>
              </div>
              
              <div className="flex flex-col w-full md:w-auto space-y-4">
                <Link href="/contact" className="w-full">
                  <Button className="w-full md:w-auto">Start a Conversation</Button>
                </Link>
                <Link href="/services" className="w-full">
                  <Button variant="secondary" className="w-full md:w-auto text-center justify-center">Explore Services</Button>
                </Link>
                <p className="text-xs text-gray-400 font-medium text-center mt-2">
                  No commitment required.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
