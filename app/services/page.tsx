import { Container } from "@/components/ui/Container"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { FinalCTA } from "@/components/home/FinalCTA"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animations/AnimatedSection"
import { RevealText } from "@/components/ui/animations/RevealText"

export const metadata: Metadata = {
  title: "Services | dev-tee.org",
  description: "Web strategy, design, and development services.",
}

const services = [
  { num: "01", title: "WEBSITE DESIGN & DEVELOPMENT", desc: "We design and develop modern, responsive websites that communicate your value clearly and give your business a strong digital presence." },
  { num: "02", title: "BRAND CLARITY & DIGITAL POSITIONING", desc: "We help businesses define their message, communicate their value, and position themselves clearly so the right customers understand why they should choose them." },
  { num: "03", title: "WEBSITE REDESIGN & OPTIMIZATION", desc: "We transform outdated, confusing, or underperforming websites into clean, modern experiences designed around your business goals and customer needs." },
  { num: "04", title: "SEO & DIGITAL DISCOVERABILITY", desc: "We optimize your website and content to improve search visibility, help potential customers find your business, and build a stronger presence across search engines." },
  { num: "05", title: "CONVERSION OPTIMIZATION", desc: "We improve the journey from visitor → interest → action by optimizing your website’s structure, messaging, calls-to-action, and user experience to generate more enquiries, bookings, purchases, or leads." },
  { num: "06", title: "DIGITAL BUSINESS SOLUTIONS", desc: "We build practical digital systems that solve specific business problems — from customer interactions and bookings to forms, dashboards, workflows, and other tools that make operations more efficient." },
  { num: "07", title: "WEBSITE MAINTENANCE & GROWTH", desc: "We don’t just build and leave. We help businesses maintain, improve, update, and scale their digital platforms as their needs and goals evolve." }
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
