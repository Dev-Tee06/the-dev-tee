"use client"
import { Container } from "../ui/Container"
import { SectionLabel } from "../ui/SectionLabel"
import { AnimatedSection } from "../ui/animations/AnimatedSection"
import { ArrowRight } from "lucide-react"

const values = [
  { num: "01", title: "BUILD", desc: "We architect scalable web platforms that give businesses a solid foundation for the future." },
  { num: "02", title: "SOLVE", desc: "We remove operational friction by building intelligent interfaces that make complex tasks simple." },
  { num: "03", title: "GROW", desc: "We design conversion-focused experiences that connect the right audience with the right outcome." }
]

export const ValueEngine = () => {
  return (
    <section className="py-24 bg-white border-b border-border-subtle">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <SectionLabel className="mb-6 block">CORE VALUE ENGINE</SectionLabel>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
              A SYSTEMATIC APPROACH TO BUSINESS WEB EXPERIENCES.
            </h2>
          </AnimatedSection>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <AnimatedSection key={value.num} delay={idx * 0.15}>
              <div className="group h-full bg-offwhite rounded border border-border-subtle p-8 transition-all duration-400 ease-out hover:border-electric hover:shadow-[0_10px_30px_rgba(37,99,235,0.05)] hover:-translate-y-1 hover:bg-white cursor-default flex flex-col">
                <div className="text-navy/30 font-extrabold text-3xl mb-6 transition-colors duration-400 group-hover:text-electric">{value.num}</div>
                <h3 className="font-bold text-navy text-2xl mb-4">{value.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed flex-grow transition-colors duration-400 group-hover:text-text-primary">{value.desc}</p>
                <div className="mt-8 pt-6 border-t border-border-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex justify-end">
                   <ArrowRight className="w-5 h-5 text-electric -translate-x-4 group-hover:translate-x-0 transition-transform duration-400" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  )
}
