"use client"
import { motion } from "framer-motion"

export default function TeamCard({ person, theme, index = 0 }) {
  const initials = person.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -4 }}
      className="relative rounded-2xl p-6 text-center flex flex-col items-center gap-3"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: theme.gradient }} />

      <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg"
        style={{ background: theme.gradient, color: "#fff", fontFamily: "'Arial', sans-serif" }}>
        {initials}
      </div>

      <div>
        <p className="font-bold text-sm text-white" style={{ fontFamily: "'Arial', sans-serif" }}>
          {person.name}
        </p>
        <p className="text-xs mt-0.5" style={{ color: theme.primary, fontFamily: "'Arial', sans-serif" }}>
          {person.role}
        </p>
        {person.club && (
          <p className="text-[10px] mt-1" style={{ color: "#3D5166", fontFamily: "'Arial', sans-serif" }}>
            {person.club}
          </p>
        )}
      </div>
    </motion.div>
  )
}