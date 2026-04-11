"use client"

import { Button } from "@/components/ui/button"
import { heroData } from "@/data/heroData"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {

    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
    }

    const fadeUp = {
        hidden: { opacity: 0, y: 48 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    }

    const fadeIn = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
    }

    return (
        <section
            id="home"
            className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >

            {/* ── Background ── */}
            <div className="absolute inset-0 bg-black/50" />



            {/* Gold top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            {/* ── Content ── */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

                    {/* ── LEFT ── */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col space-y-8 text-center lg:text-left"
                    >

                        {/* Badge */}
                        <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
                            <span
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                                style={{
                                    background: "rgba(251,191,36,0.1)",
                                    border: "1px solid rgba(251,191,36,0.35)",
                                    color: "#FCD34D",
                                    fontFamily: "'Arial', sans-serif",
                                    letterSpacing: "0.15em",
                                }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                Admissions Open 2025–26
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.div variants={fadeUp} className="space-y-3">
                            <h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight text-white"
                            >
                                {heroData.title}
                            </h1>
                            <div className="flex items-center justify-center lg:justify-start gap-3 py-1">
                                <div className="h-[2px] w-10 bg-amber-400" />
                                <p
                                    className="text-sm tracking-[0.2em] uppercase"
                                    style={{ color: "#FCD34D", fontFamily: "'Arial', sans-serif", fontSize: "11px" }}
                                >
                                    Excellence in Engineering
                                </p>
                            </div>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            variants={fadeUp}
                            className="text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 text-white/90"
                        >
                            {heroData.subtitle}
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={fadeUp}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                        >
                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                                href={heroData.primaryCta.href}
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 w-full sm:w-auto"
                                style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)", color: "#0A0F1E", fontFamily: "'Arial', sans-serif", boxShadow: "0 0 30px rgba(245,158,11,0.3)" }}>

                                {heroData.primaryCta.text}
                                <ArrowRight className="w-4 h-4" />

                            </motion.div>

                            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}

                                href={heroData.secondaryCta.href}
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 w-full sm:w-auto"
                                style={{
                                    background: "transparent",
                                    color: "#E2E8F0",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    fontFamily: "'Arial', sans-serif",
                                }}
                            >
                                {heroData.secondaryCta.text}
                            </motion.div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={container}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6"
                            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                        >
                            {heroData.stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="flex flex-col gap-0.5"
                                >
                                    <p
                                        className="text-2xl sm:text-3xl font-bold"
                                        style={{ color: "#FCD34D" }}
                                    >
                                        {stat.value}
                                    </p>
                                    <p
                                        className="text-xs leading-snug text-gray-300 uppercase tracking-wide"
                                    >
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                    </motion.div>

                    {/* ── RIGHT — Video ── */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="show"
                        className="w-full hidden sm:block"
                    >
                        {/* Decorative corner marks */}
                        <div className="relative">
                            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-amber-400 rounded-tl-sm z-10" />
                            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-amber-400 rounded-br-sm z-10" />

                            {/* Subtle outer glow frame */}
                            <div
                                className="absolute inset-0 rounded-2xl -m-1 opacity-40"
                                style={{ boxShadow: "0 0 60px rgba(245,158,11,0.2)", borderRadius: "18px" }}
                            />

                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden"
                                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
                            >
                                <iframe
                                    src="https://www.youtube.com/embed/7ra2kTTjhEw?mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=7ra2kTTjhEw"
                                    title="EIT Campus Video"
                                    className="absolute inset-0 w-full h-full"
                                    allow="encrypted-media"
                                    allowFullScreen
                                />
                                {/* Subtle vignette */}
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(10,15,30,0.5) 100%)" }}
                                />
                            </div>

                            {/* Label below video */}
                            <div className="mt-4 flex items-center justify-between px-1">
                                <p
                                    className="text-xs tracking-widest uppercase text-white"
                                >
                                    Campus Tour
                                </p>
                                <div className="flex gap-1.5">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-400 opacity-60" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div >

                {/* Scroll cue */}
                < motion.div
                    initial={{ opacity: 0 }
                    }
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
                >
                    <p
                        className="text-xs tracking-widest uppercase"
                        style={{ color: "#334155", fontFamily: "'Arial', sans-serif" }}
                    >
                        Scroll
                    </p>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-4 h-4" style={{ color: "#475569" }} />
                    </motion.div>
                </motion.div>
            </div >
        </section >
    )
}