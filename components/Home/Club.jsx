"use client"

import { useState, useEffect } from "react"
import * as Icons from "lucide-react" // ✅ import all icons
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { clubs } from "@/data/clubData"
import Link from "next/link"
import ClubCard from "../Club/ClubCard"

export default function ClubsCarousel() {
    const [index, setIndex] = useState(0)
    const [paused, setPaused] = useState(false)

    const total = clubs.length

    const prev = () => setIndex((p) => (p - 1 + total) % total)
    const next = () => setIndex((p) => (p + 1) % total)

    // Auto slide
    useEffect(() => {
        if (paused) return
        const interval = setInterval(next, 2500)
        return () => clearInterval(interval)
    }, [paused])

    return (
        <section className="py-20 overflow-hidden">
            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Blue glow */}
            <div
                className="absolute -left-32 top-0 w-[500px] h-[400px] rounded-full pointer-events-none opacity-10"
                style={{ background: "radial-gradient(circle, #1E6FBF 0%, transparent 70%)" }}
            />

            {/* Green glow */}
            <div
                className="absolute -right-32 bottom-0 w-[450px] h-[400px] rounded-full pointer-events-none opacity-10"
                style={{ background: "radial-gradient(circle, #7BAA28 0%, transparent 70%)" }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={"container"}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    className="space-y-14 md:space-y-16"
                >

                    {/* ── Header ── */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <motion.div variants={"fadeUp"} className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-10"
                                    style={{ background: "linear-gradient(to right, #1E6FBF, #A8D835)" }} />
                                <span
                                    className="text-xs tracking-[0.2em] uppercase"
                                    style={{ color: "#A8D835", fontFamily: "'Arial', sans-serif" }}
                                >
                                    Campus Life
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
                                Sankalp —{" "}
                                <span style={{ color: "#3B9EE8" }}>{"Student's Clubs"}</span>
                            </h2>

                            <p
                                className="text-sm sm:text-base leading-relaxed max-w-xl"
                                style={{ color: "#7A90A8", fontFamily: "'Arial', sans-serif" }}
                            >
                                Together Everyone Achieves More. Clubs that cover all aspects of human
                                development — sports, culture, tech, service & creativity.
                            </p>
                        </motion.div>

                        {/* View All */}
                        <motion.div variants={"fadeUp"} className="flex-shrink-0">
                            <Link
                                href="/clubs"
                                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                                style={{
                                    background: "rgba(59,158,232,0.08)",
                                    border: "1px solid rgba(59,158,232,0.25)",
                                    color: "#3B9EE8",
                                    fontFamily: "'Arial', sans-serif",
                                }}
                            >
                                Explore All Clubs
                                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            {/* Carousel */}
            <div
                className="hidden md:block"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div
                    className="relative flex items-center justify-center h-[420px] max-w-6xl mx-auto"
                    style={{ perspective: "1000px" }}
                >
                    {clubs.map((club, i) => {

                        const Icon =
                            Icons[club.icon] || Icons.HelpCircle

                        let offset = i - index
                        if (offset > total / 2) offset -= total
                        if (offset < -total / 2) offset += total

                        return (
                            <div
                                key={i}
                                className="absolute transition-all duration-700 ease-in-out"
                                style={{
                                    transform: `
                    translateX(${offset * 280}px)
                    scale(${offset === 0 ? 1.1 : 0.85})
                    rotateY(${offset === 0 ? 0 : offset > 0 ? -25 : 25}deg)
                  `,
                                    zIndex: total - Math.abs(offset),
                                    opacity:
                                        Math.abs(offset) > 2
                                            ? 0
                                            : Math.abs(offset) === 2
                                                ? 0.4
                                                : 1,
                                    filter: offset === 0 ? "none" : "blur(1px)",
                                    pointerEvents: offset === 0 ? "auto" : "none",
                                }}
                            >
                                {/* Card */}
                                <div
                                    className="w-[280px] rounded-2xl p-5 flex flex-col gap-4 shadow-xl"
                                    style={{
                                        background: club.accent,
                                        border: `1px solid ${club.border}`,
                                    }}
                                >

                                    <ClubCard key={club.slug} club={club} index={i} />



                                </div>
                            </div>
                        )
                    })}

                    {/* Arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-0 z-20 p-2 rounded-full bg-white/90 shadow"
                    >
                        <ChevronLeft className="w-5 h-5 text-black" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 z-20 p-2 rounded-full bg-white/90 shadow"
                    >
                        <ChevronRight className="w-5 h-5 text-black" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {clubs.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-2 rounded-full transition-all ${i === index ? "bg-blue-500 w-5" : "bg-gray-500 w-2"
                                }`}
                        />
                    ))}
                </div>
            </div>



        </section >
    )
}