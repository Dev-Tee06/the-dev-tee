import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { FinalCTA } from "@/components/home/FinalCTA"
import { caseStudies } from "@/lib/data"
import { notFound } from "next/navigation"
import { AnimatedSection } from "@/components/ui/animations/AnimatedSection"
import { RevealText } from "@/components/ui/animations/RevealText"
import { RevealImage } from "@/components/ui/animations/RevealImage"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = caseStudies.find(s => s.slug === resolvedParams.slug)
  if (!study) return { title: 'Not Found' }
  return {
    title: `${study.client} Case Study | DEV-TEE`,
    description: study.challenge
  }
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = caseStudies.find(s => s.slug === resolvedParams.slug)
  if (!study) notFound()

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-navy pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden relative border-b border-gray-800 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection delay={0.1}>
              <SectionLabel className="text-electric mb-6 block">{study.client} — {study.industry}</SectionLabel>
            </AnimatedSection>
            
            <h1 className="text-[clamp(32px,5vw,60px)] font-extrabold tracking-tight leading-[1.05] mb-8 break-normal">
              <RevealText text="A clearer web experience for a business ready to move forward." delay={0.3} />
            </h1>
            
            <AnimatedSection delay={0.6}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-800">
                 <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Category</h4>
                    <p className="font-medium">{study.category}</p>
                 </div>
                 <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Outcome</h4>
                    <p className="font-medium text-electric">{study.outcome}</p>
                 </div>
                 <div className="col-span-2">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Services</h4>
                    <p className="font-medium">{study.services.join(", ")}</p>
                 </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row gap-16">
            {/* Sticky Metadata (Desktop) */}
            <div className="w-full md:w-1/4">
              <div className="sticky top-32 space-y-8">
                <AnimatedSection delay={0.2}>
                  <h4 className="text-sm font-bold text-navy mb-2">The Challenge</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{study.challenge}</p>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <h4 className="text-sm font-bold text-navy mb-2">The Approach</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{study.approach}</p>
                </AnimatedSection>
                <AnimatedSection delay={0.4}>
                  <h4 className="text-sm font-bold text-navy mb-2">The Solution</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{study.solution}</p>
                </AnimatedSection>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full md:w-3/4 space-y-16">
               <RevealImage>
                 <div className={`w-full aspect-[21/9] rounded-md ${study.imageColor} mb-12`} />
               </RevealImage>
               
               <div className="prose prose-lg max-w-none text-text-primary">
                 <AnimatedSection>
                   <h2 className="text-3xl font-bold text-navy mb-6">1. The Business</h2>
                   <p className="mb-10 text-text-muted">A deep dive into {study.client}'s operations, their market position, and why they needed to evolve their online presence.</p>
                 </AnimatedSection>
                 
                 <AnimatedSection>
                   <h2 className="text-3xl font-bold text-navy mb-6">2. The Challenge</h2>
                   <p className="mb-10 text-text-muted">Detailing the specific friction points, whether it was internal operational drag, low conversion rates, or a brand that didn't reflect their expertise.</p>
                 </AnimatedSection>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    <RevealImage delay={0.1}>
                      <div className={`w-full aspect-[4/3] rounded ${study.imageColor} opacity-80`} />
                    </RevealImage>
                    <RevealImage delay={0.2}>
                      <div className={`w-full aspect-[4/3] rounded ${study.imageColor} opacity-90`} />
                    </RevealImage>
                 </div>
                 
                 <AnimatedSection>
                   <h2 className="text-3xl font-bold text-navy mb-6">3. The Strategy & Experience</h2>
                   <p className="mb-10 text-text-muted">How we restructured their information architecture, defined the new user journeys, and mapped out the technical requirements.</p>
                 </AnimatedSection>

                 <AnimatedSection>
                   <h2 className="text-3xl font-bold text-navy mb-6">4. The Build & Outcome</h2>
                   <p className="text-text-muted">The technical execution phase, focusing on performance, scalability, and the measurable results achieved post-launch. {study.outcome}</p>
                 </AnimatedSection>
               </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  )
}
