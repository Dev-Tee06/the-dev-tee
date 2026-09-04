"use client"
import { Container } from "../ui/Container"
import { SectionLabel } from "../ui/SectionLabel"
import { Button } from "../ui/Button"
import { AnimatedSection } from "../ui/animations/AnimatedSection"
import { RevealImage } from "../ui/animations/RevealImage"
import Link from "next/link"

import { caseStudies } from "@/lib/data"

export const SelectedWork = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <AnimatedSection className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <SectionLabel className="mb-6 block text-text-primary">SELECTED WORK</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">
              WE DON'T JUST BUILD.<br />
              <span className="text-electric md:text-navy">WE SOLVE.</span>
            </h2>
          </div>
          <Link href="/case-studies">
            <Button variant="secondary">View All Work</Button>
          </Link>
        </AnimatedSection>

        <div className="space-y-24 md:space-y-32">
          {caseStudies.slice(0, 2).map((project, idx) => (
            <div key={project.client} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 group`}>
              
              <div className="w-full md:w-3/5 overflow-hidden rounded-md relative cursor-pointer">
                <Link href={`/case-studies/${project.slug}`}>
                  <RevealImage delay={0.1}>
                    <div className="w-full aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-[1.03] relative overflow-hidden bg-gray-100" >
                      <img src={project.image} alt={project.client} className="absolute inset-0 w-full h-full object-cover object-top" />
                      {/* Subtle blue light effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-electric/0 via-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </RevealImage>
                </Link>
              </div>
              
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <AnimatedSection delay={0.3}>
                  <div className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3 transition-colors duration-500 group-hover:text-electric">{project.industry}</div>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6">{project.client}</h3>
                </AnimatedSection>
                <AnimatedSection delay={0.5}>
                  <p className="text-text-muted text-lg leading-relaxed mb-8">{project.outcome}</p>
                </AnimatedSection>
                
                <AnimatedSection delay={0.6} className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-widest mb-2">Services Delivered</h4>
                    <p className="text-sm text-text-muted">{project.services.join(" / ")}</p>
                  </div>
                  <Link href={`/case-studies/${project.slug}`} className="inline-flex items-center font-bold text-navy hover:text-electric transition-colors border-b border-navy hover:border-electric pb-1 self-start group/link">
                    View Case Study <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </Link>
                </AnimatedSection>
              </div>

            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
