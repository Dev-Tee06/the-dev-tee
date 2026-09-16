import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { FinalCTA } from "@/components/home/FinalCTA"
import { Metadata } from "next"
import { AnimatedSection } from "@/components/ui/animations/AnimatedSection"
import { RevealText } from "@/components/ui/animations/RevealText"
import { PhilosophySection } from "@/components/about/PhilosophySection"

export const metadata: Metadata = {
  title: "About | dev-tee.org",
  description: "We are a strategic web experience studio.",
}

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-navy pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden relative border-b border-gray-800 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection delay={0.1}>
              <SectionLabel className="text-electric mb-6 block">ABOUT DEV-TEE</SectionLabel>
            </AnimatedSection>
            
            <h1 className="text-[clamp(36px,7vw,72px)] font-extrabold tracking-tight leading-[1.05] mb-8 break-normal">
              <RevealText text="WE BELIEVE GREAT WEBSITES SHOULD DO MORE THAN LOOK GOOD." delay={0.3} />
            </h1>
            
            <AnimatedSection delay={0.6}>
              <p className="text-gray-400 text-[clamp(18px,4vw,22px)] max-w-2xl leading-relaxed font-light break-normal">
                We are a strategic web experience studio. We understand the business first, then we build the web experience it actually needs.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <PhilosophySection />

      {/* Principles */}
      <section className="py-24 bg-white border-t border-border-subtle">
        <Container>
          <AnimatedSection className="mb-16">
            <h2 className="text-3xl font-bold text-navy">Guiding Principles</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Clarity over complexity", desc: "If a user can't understand what you do in 5 seconds, the design has failed." },
              { title: "Function informs form", desc: "Aesthetics matter, but they must serve the business objective, not distract from it." },
              { title: "Built for speed", desc: "Performance is a feature. We architect for milliseconds because slow websites lose trust." },
              { title: "Systems, not pages", desc: "We build scalable, modular web systems that grow as your business grows." }
            ].map((principle, idx) => (
              <AnimatedSection key={principle.title} delay={idx * 0.15}>
                <div className="border-l-2 border-electric pl-6 group">
                  <h3 className="text-xl font-bold text-navy mb-3 transition-colors duration-300 group-hover:text-electric">{principle.title}</h3>
                  <p className="text-text-muted leading-relaxed">{principle.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  )
}
