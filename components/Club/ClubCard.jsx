"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ClubCard({ club, index = 0 }) {
    const { theme } = club

    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.02 }}
        >
            <Link href={`/clubs/${club.slug}`} className="block h-full">
                <div
                    className="relative h-full rounded-2xl p-5 flex flex-col gap-4 cursor-pointer group transition-all duration-300"
                    style={{
                        background: theme.soft,
                        border: `1px solid ${theme.border}`,
                        boxShadow: `0 0 0 0 ${theme.glow}`,
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 40px ${theme.glow}`}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = `0 0 0 0 ${theme.glow}`}
                >
                    {/* Corner accent */}
                    <div className="absolute top-0 left-0 w-12 h-[2px] rounded-tl-2xl"
                        style={{ background: `linear-gradient(to right, ${theme.primary}, transparent)` }} />
                    <div className="absolute top-0 left-0 w-[2px] h-12"
                        style={{ background: `linear-gradient(to bottom, ${theme.primary}, transparent)` }} />

                    {/* Color dot */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: theme.gradient }}>
                        <div className="w-3 h-3 bg-white rounded-full opacity-90" />
                    </div>

                    {/* Name & tagline */}
                    <div className="flex-1 space-y-1">
                        <h3 className="font-bold text-sm sm:text-base   leading-snug"
                            style={{ fontFamily: "'Arial', sans-serif" }}>
                            {club.name}
                        </h3>
                        <p className="text-xs font-semibold tracking-wide"
                            style={{ color: theme.primary, fontFamily: "'Arial', sans-serif" }}>
                            {club.tagline}
                        </p>
                    </div>

                    {/* Description snippet */}
                    <p className="text-xs leading-relaxed line-clamp-2"
                        style={{ color: "#7A90A8", fontFamily: "'Arial', sans-serif" }}>
                        {club.description[0]}
                    </p>

                    {/* Domain pills */}
                    <div className="flex flex-wrap gap-1.5">
                        {club.domains.slice(0, 2).map((d, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 rounded-full"
                                style={{
                                    background: theme.soft,
                                    color: theme.primary,
                                    border: `1px solid ${theme.border}`,
                                    fontFamily: "'Arial', sans-serif",
                                }}>
                                {d.title.split("–")[0].trim()}
                            </span>
                        ))}
                        {club.domains.length > 2 && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full"
                                style={{ color: "#3D5166", fontFamily: "'Arial', sans-serif" }}>
                                +{club.domains.length - 2} more
                            </span>
                        )}
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-end">
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5"
                            style={{ color: theme.primary }} />
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}