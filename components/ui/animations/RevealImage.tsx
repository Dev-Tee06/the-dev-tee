"use client"
import { motion } from "framer-motion"
import * as React from "react"

export const RevealImage = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, clipPath: "inset(10% 0 10% 0)" }}
      whileInView={{ opacity: 1, scale: 1, clipPath: "inset(0% 0 0% 0)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  )
}
