import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { FinalCTA } from "@/components/home/FinalCTA"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { caseStudies } from "@/lib/data"
import { AnimatedSection } from "@/components/ui/animations/AnimatedSection"
import { RevealImage } from "@/components/ui/animations/RevealImage"
import { RevealText } from "@/components/ui/animations/RevealText"

export const metadata: Metadata = {
  title: "Website & Web Experience Case Studies | dev-tee.org",
  description: "Explore how strategy, design, and technology come together to turn business challenges into useful web experiences.",
}

export default function CaseStudiesPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-navy pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden relative border-b border-gray-800 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection delay={0.1}>
              <SectionLabel className="text-electric mb-6 block">SELECTED WORK</SectionLabel>
            </AnimatedSection>
            
            <h1 className="text-[clamp(36px,7vw,72px)] font-extrabold tracking-tight leading-[1.05] mb-8 break-normal">
              <RevealText text="WE DON'T JUST BUILD. WE SOLVE." delay={0.3} />
            </h1>
            
            <AnimatedSection delay={0.6}>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                Explore how strategy, design, and technology come together to turn business challenges into useful web experiences.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <Container>
          <div className="space-y-24 md:space-y-32">
            {caseStudies.map((study, idx) => (
              <div key={study.slug} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 group`}>
                <div className="w-full md:w-1/2 overflow-hidden rounded-md relative cursor-pointer">
                  <Link href={`/case-studies/${study.slug}`}>
                    <RevealImage delay={0.1}>
                      <div className="w-full aspect-[4/3] rounded-md transition-transform duration-700 ease-out group-hover:scale-[1.03] relative overflow-hidden bg-gray-100" >
                         <img src={study.image} alt={study.client} className="absolute inset-0 w-full h-full object-cover object-top" />
                         <div className="absolute inset-0 bg-gradient-to-tr from-electric/0 via-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                    </RevealImage>
                  </Link>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
                  <div>
                    <AnimatedSection delay={0.2}>
                      <div className="text-xs font-bold text-text-muted uppercase tracking-widest mb-2 transition-colors duration-500 group-hover:text-electric">{study.industry}</div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">{study.client}</h2>
                      <h3 className="text-lg md:text-xl font-medium text-text-muted">{study.title}</h3>
                    </AnimatedSection>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <AnimatedSection delay={0.4}>
                      <h4 className="text-sm font-bold text-electric mb-2">The Challenge</h4>
                      <p className="text-text-muted text-sm">{study.challenge}</p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.45}>
                      <h4 className="text-sm font-bold text-electric mb-2">The Approach</h4>
                      <p className="text-text-muted text-sm">{study.approach}</p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.5}>
                      <h4 className="text-sm font-bold text-electric mb-2">The Outcome</h4>
                      <p className="text-text-muted text-sm">{study.outcome}</p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.55}>
                      <h4 className="text-sm font-bold text-electric mb-2">Services</h4>
                      <ul className="text-text-muted text-sm space-y-1">
                        {study.services.map(s => <li key={s}>— {s}</li>)}
                      </ul>
                    </AnimatedSection>
                  </div>

                  <AnimatedSection delay={0.6}>
                    <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center font-bold text-navy hover:text-electric transition-colors border-b border-navy hover:border-electric pb-1 self-start mt-4 group/link">
                      View Case Study <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </AnimatedSection>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  )
}
