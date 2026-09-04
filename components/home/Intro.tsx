"use client"
import { Container } from "../ui/Container"
import { AnimatedSection } from "../ui/animations/AnimatedSection"

export const Intro = () => {
  return (
    <section className="py-24 md:py-32 bg-offwhite border-b border-border-subtle overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left: Large statement */}
          <div className="w-full lg:w-1/2">
            <AnimatedSection delay={0.1}>
              <h2 className="text-[clamp(32px,5vw,60px)] font-extrabold text-navy leading-[1.05] tracking-tight break-normal">
                BUSINESS SOLUTIONS BUILT AROUND THE BUSINESS.
              </h2>
            </AnimatedSection>
          </div>
          
          {/* Right: Explanation */}
          <div className="w-full lg:w-1/2">
            <AnimatedSection delay={0.3}>
              <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-light break-normal">
                We believe great websites should do more than look good. They should solve operational friction, communicate clarity, and build immediate trust with the right audience.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  )
}
