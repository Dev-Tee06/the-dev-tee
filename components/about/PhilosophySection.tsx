"use client"
import { Container } from "../ui/Container"
import { SectionLabel } from "../ui/SectionLabel"
import { motion } from "framer-motion"

export const PhilosophySection = () => {
  return (
    <section className="py-32 md:py-48 bg-offwhite overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SectionLabel className="text-text-primary mb-8 block font-bold tracking-widest text-sm">OUR PHILOSOPHY</SectionLabel>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold text-navy leading-[1.1] tracking-tight mb-4 break-normal">
              Businesses don't need more digital noise.
            </h2>
            <h2 className="text-[clamp(32px,5vw,56px)] font-extrabold text-navy leading-[1.1] tracking-tight mb-16 break-normal">
              They need clarity.
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
            className="w-full h-[1px] bg-electric origin-left mb-16"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-[clamp(20px,3vw,28px)] font-medium text-navy leading-relaxed">
              We understand the business first.
            </p>
            <p className="text-[clamp(20px,3vw,28px)] font-medium text-text-muted leading-relaxed">
              Then we build what it actually needs.
            </p>
          </motion.div>
          
        </div>
      </Container>
    </section>
  )
}
