"use client"

import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function AdmissionCTA() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  }

  const contactItems = [
    { icon: Mail, label: "Email", value: "admissions@eitfaridabad.co.in", color: "#3B9EE8" },
    { icon: Phone, label: "Phone", value: "+91 129-4143900", color: "#A8D835" },
    { icon: MapPin, label: "Campus Visit", value: "Every Saturday, 9 AM", color: "#3B9EE8" },
  ]

  return (
    <section
      id="admission"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue glow — left */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, #1E6FBF 0%, transparent 70%)" }}
      />

      {/* Green glow — right */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #7BAA28 0%, transparent 70%)" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center space-y-10"
        >

          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-10"
              style={{ background: "linear-gradient(to right, transparent, #1E6FBF)" }} />
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "#A8D835", fontFamily: "'Arial', sans-serif" }}
            >
              Admissions 2025–26
            </span>
            <div className="h-[1px] w-10"
              style={{ background: "linear-gradient(to left, transparent, #A8D835)" }} />
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeUp} className="space-y-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight  ">
              Ready to Start Your<br className="hidden sm:block" />
              <span style={{ color: "#3B9EE8" }}> Engineering </span>
              Journey?
            </h2>

            <p
              className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: "#7A90A8", fontFamily: "'Arial', sans-serif" }}
            >
              Join thousands of successful alumni who have transformed their
              careers through EIT education.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}

              href="#apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #1E6FBF, #3B9EE8)",
                color: "#fff",
                fontFamily: "'Arial', sans-serif",
                boxShadow: "0 0 32px rgba(30,111,191,0.35)",
              }}>
              Apply Online
              <ArrowRight className="w-4 h-4" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}

              href="#brochure"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 w-full sm:w-auto"
              style={{
                background: "rgba(168,216,53,0.08)",
                color: "#A8D835",
                border: "1px solid rgba(168,216,53,0.35)",
                fontFamily: "'Arial', sans-serif",
              }}>
              Request Brochure
            </motion.div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="relative flex flex-col items-center gap-3 py-6 px-4 rounded-2xl transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-10 h-[2px] rounded-tl-lg"
                  style={{ background: `linear-gradient(to right, ${item.color}, transparent)` }} />
                <div className="absolute top-0 left-0 w-[2px] h-10"
                  style={{ background: `linear-gradient(to bottom, ${item.color}, transparent)` }} />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: `rgba(${item.color === "#3B9EE8" ? "59,158,232" : "168,216,53"},0.1)`,
                    border: `1px solid rgba(${item.color === "#3B9EE8" ? "59,158,232" : "168,216,53"},0.3)`,
                  }}
                >
                  <item.icon className="w-4 h-4" style={{ color: item.color }} />
                </div>

                <div className="space-y-1 text-center">
                  <p
                    className="text-xs tracking-widest uppercase"
                    style={{ color: item.color, fontFamily: "'Arial', sans-serif" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="font-semibold text-xs sm:text-sm break-all leading-snug  "
                    style={{ fontFamily: "'Arial', sans-serif" }}
                  >
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div >
    </section >
  )
}