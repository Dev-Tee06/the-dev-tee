"use client"
import * as React from "react"
import { useRef } from "react"
import { Container } from "../ui/Container"
import { SectionLabel } from "../ui/SectionLabel"
import { AnimatedSection } from "../ui/animations/AnimatedSection"
import { motion, useScroll, useSpring } from "framer-motion"

const steps = [
  { num: "01", title: "DISCOVER", desc: "We start by understanding the business mechanics, the market, the audience, and the exact friction points holding you back." },
  { num: "02", title: "DEFINE", desc: "We clarify the positioning, map the user journeys, and determine exactly what the web experience needs to achieve." },
  { num: "03", title: "STRATEGIZE", desc: "We architect the solution—information architecture, technical stack, and content strategy." },
  { num: "04", title: "DESIGN & DEVELOP", desc: "We build a fast, secure, and beautiful web experience that executes the strategy flawlessly." }
]

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })
  
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-surface-dark text-white border-y border-gray-800 relative">
      <Container>
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <SectionLabel className="mb-6 block text-electric">OUR PROCESS</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            THE RIGHT SOLUTION STARTS WITH THE RIGHT UNDERSTANDING.
          </h2>
        </AnimatedSection>
        
        {/* Desktop Process (Horizontal) */}
        <div className="hidden md:block relative pt-8 pb-12">
           {/* Background line */}
           <div className="absolute top-[42px] left-0 right-0 h-[2px] bg-white/10" />
           {/* Animated progress line */}
           <motion.div 
             className="absolute top-[42px] left-0 right-0 h-[2px] bg-electric origin-left"
             style={{ scaleX }}
           />
           
           <div className="grid grid-cols-4 gap-8">
             {steps.map((step, idx) => (
               <div key={step.num} className="relative z-10 pr-8">
                 <div className="w-6 h-6 rounded-full bg-surface-dark border-2 border-electric flex items-center justify-center mb-6">
                   <div className="w-2 h-2 rounded-full bg-electric" />
                 </div>
                 <div className="text-electric font-bold text-sm mb-2">{step.num}</div>
                 <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
               </div>
             ))}
           </div>
        </div>

        {/* Mobile Process (Vertical) */}
        <div className="md:hidden relative py-4 ml-3">
           {/* Background line */}
           <div className="absolute top-0 bottom-0 left-[11px] w-[2px] bg-white/10" />
           {/* Animated progress line */}
           <motion.div 
             className="absolute top-0 bottom-0 left-[11px] w-[2px] bg-electric origin-top"
             style={{ scaleY }}
           />
           
           <div className="space-y-12">
             {steps.map((step, idx) => (
               <div key={step.num} className="relative z-10 pl-10">
                 <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface-dark border-2 border-electric flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-electric" />
                 </div>
                 <div className="text-electric font-bold text-sm mb-1">{step.num}</div>
                 <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                 <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </Container>
    </section>
  )
}
