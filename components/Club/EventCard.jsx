"use client"
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function EventCard({ event, theme, index = 0 }) {
  const dateStr = event.date
    ? new Date(event.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })
    : ""

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="relative rounded-2xl overflow-hidden"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* Image placeholder */}
      <div className="h-36 w-full flex items-center justify-center"
        style={{ background: theme.gradient }}>
        <p className="  text-4xl font-bold opacity-10 select-none"
          style={{ fontFamily: "'Georgia', serif" }}>
          {index + 1}
        </p>
      </div>

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: theme.gradient }} />

      <div className="p-5 space-y-3">
        <h3 className="font-bold text-sm sm:text-base   leading-snug"
          style={{ fontFamily: "'Arial', sans-serif" }}>
          {event.title}
        </h3>

        {dateStr && (
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" style={{ color: theme.primary }} />
            <span className="text-xs" style={{ color: theme.primary, fontFamily: "'Arial', sans-serif" }}>
              {dateStr}
            </span>
          </div>
        )}

        <p className="text-xs leading-relaxed" style={{ color: "#7A90A8", fontFamily: "'Arial', sans-serif" }}>
          {event.description}
        </p>
      </div>
    </motion.div>
  )
}