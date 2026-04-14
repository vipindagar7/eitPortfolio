"use client"
import { motion } from "framer-motion"

export default function SectionWrapper({ children, className = "", id = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`relative py-16 md:py-24 overflow-hidden ${className}`}
    >
      {children}
    </motion.section>
  )
}