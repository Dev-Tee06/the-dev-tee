import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { FinalCTA } from "@/components/home/FinalCTA"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animations/AnimatedSection"
import { RevealText } from "@/components/ui/animations/RevealText"

export const metadata: Metadata = {
  title: "Services | DEV-TEE",
  description: "Web strategy, design, and development services.",
}

const services = [
  { num: "01", title: "Web Strategy", desc: "Clarify what the business stands for and how it should communicate online." },
  { num: "02", title: "Website Design", desc: "Custom interfaces designed around the business, audience, and desired outcome." },
  { num: "03", title: "Next.js Development", desc: "High-performance, scalable web architecture built for the modern web." },
  { num: "04", title: "SEO & Search", desc: "Build a search-ready foundation that helps the right audience discover the business." },
  { num: "05", title: "Conversion Optimization", desc: "Improve journeys and messaging to increase meaningful actions." },
  { num: "06", title: "Business Web Solutions", desc: "Dashboards, portals, and web systems where a standard website isn't enough." }
]

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-navy pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden relative border-b border-gray-800 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <AnimatedSection delay={0.1}>
              <SectionLabel className="text-electric mb-6 block">OUR SERVICES</SectionLabel>
            </AnimatedSection>
            
            <h1 className="text-[clamp(36px,7vw,72px)] font-extrabold tracking-tight leading-[1.05] mb-8 break-normal">
              <RevealText text="BUSINESS SOLUTIONS BUILT AROUND YOUR BUSINESS." delay={0.3} />
            </h1>
            
            <AnimatedSection delay={0.6}>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                From strategy and positioning to design, development, and growth, we build web experiences around real business problems.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Service Grid */}
      <section className="py-24 bg-offwhite">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <AnimatedSection key={service.num} delay={idx * 0.1}>
                <Link href="/contact" className="group block h-full">
                  <div className="h-full flex flex-col bg-white rounded border border-border-subtle p-8 transition-all duration-400 ease-out hover:border-electric hover:shadow-[0_10px_30px_rgba(37,99,235,0.05)] hover:-translate-y-1">
                    <div className="text-electric font-bold mb-4 flex items-center justify-between">
                      <span>{service.num}.</span>
                      <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                    <h3 className="font-bold text-navy text-xl mb-4 group-hover:text-electric transition-colors">{service.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                    <div className="inline-flex items-center text-sm font-bold text-navy group-hover:text-electric transition-colors mt-auto">
                      Explore Service <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </div>
  )
}
