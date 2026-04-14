"use client"
import { motion } from "framer-motion"

export default function CoordinatorCard({ person, type = "faculty", theme, index = 0 }) {
  const initials = person.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()
  const isFaculty = type === "faculty"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="relative rounded-2xl p-5 flex items-start gap-4"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-10 h-[2px]"
        style={{ background: `linear-gradient(to right, ${theme.primary}, transparent)` }} />

      {/* Avatar */}
      <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-sm"
        style={{ background: theme.soft, border: `1px solid ${theme.border}`, color: theme.primary, fontFamily: "'Arial', sans-serif" }}>
        {initials}
      </div>

      <div className="space-y-0.5 min-w-0">
        <p className="font-semibold text-sm   truncate"
          style={{ fontFamily: "'Arial', sans-serif" }}>
          {person.name}
        </p>
        <p className="text-xs" style={{ color: "#7A90A8", fontFamily: "'Arial', sans-serif" }}>
          {isFaculty ? person.designation : person.role}
        </p>
        {/* Badge */}
        <span className="inline-block mt-1.5 text-[10px] px-2 py-0.5 rounded-full"
          style={{
            background: isFaculty ? "rgba(59,158,232,0.1)" : theme.soft,
            color: isFaculty ? "#3B9EE8" : theme.primary,
            border: `1px solid ${isFaculty ? "rgba(59,158,232,0.25)" : theme.border}`,
            fontFamily: "'Arial', sans-serif",
          }}>
          {isFaculty ? "Faculty" : "Student Leader"}
        </span>
      </div>
    </motion.div>
  )
}