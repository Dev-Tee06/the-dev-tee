"use client"
import { Container } from "../ui/Container"
import { AnimatedSection } from "../ui/animations/AnimatedSection"
import { motion } from "framer-motion"

export const BrandStatement = () => {
  return (
    <section className="py-32 md:py-48 bg-navy text-center relative overflow-hidden">
      {/* Subtle animated grid texture */}
      <motion.div 
        animate={{ y: [0, -40] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] z-0" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy z-10" />

      {/* Faint blue line animation behind text */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-1/2 left-0 right-0 h-[1px] bg-electric z-10"
      />

      <Container className="relative z-20">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight">
              EXCELLENCE IN EXECUTION. <br className="hidden md:block" />
              <span className="text-gray-400">TRUST IN EVERY EXPERIENCE.</span>
            </h2>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
