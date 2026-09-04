"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { SectionLabel } from "../ui/SectionLabel";
import { Container } from "../ui/Container";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center pt-32 pb-16 overflow-hidden bg-navy">
      {/* 1. Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="/images/hero-poster.webp"
      >
        <source src="/videos/dev-tee-hero.webm" type="video/webm" />
        <source src="/videos/dev-tee-hero.mp4" type="video/mp4" />
      </video>

      {/* 2. Dark Navy Overlay */}
      <div className="absolute inset-0 bg-navy/65 z-10" />

      {/* 3. Subtle Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-transparent to-transparent z-10" />

      {/* 4. Architectural Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] z-10 pointer-events-none"
      />

      {/* 5. Text Content */}
      <Container className="relative z-20 w-full px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <SectionLabel className="text-electric mb-6 block font-bold text-xs">
              WEB STRATEGY / DESIGN / DEVELOPMENT
            </SectionLabel>
          </motion.div>

          <h1 className="text-white text-[clamp(36px,7vw,72px)] font-extrabold tracking-tight leading-[1.05] mb-8 break-normal max-w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              WE BUILD{" "}
              <motion.span
                initial={{ color: "#ffffff", filter: "blur(4px)" }}
                animate={{ color: "#2563EB", filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 1.2 }}
                className="inline-block"
              >
                BUSINESS
              </motion.span>{" "}
              EXPERIENCES THAT MOVE YOUR BUSINESS FORWARD.
            </motion.div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="text-gray-300 text-[clamp(18px,4vw,22px)] max-w-2xl mb-12 leading-relaxed font-light break-normal"
          >
            From strategy and positioning to design and development, we create
            websites and web experiences that help businesses communicate
            clearly, earn trust, and grow.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-start">
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="w-full sm:w-auto"
            >
              <Link href="/contact" className="w-full block">
                <Button className="w-full">Start a Conversation</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="w-full sm:w-auto"
            >
              <Link href="/case-studies" className="w-full block">
                <Button variant="darkSecondary" className="w-full">
                  Explore Our Work
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
