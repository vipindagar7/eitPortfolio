"use client"

import { motion } from "framer-motion"

export default function About() {
    const highlights = [
        "World-class faculty with industry experience",
        "State-of-the-art laboratories and facilities",
        "100% placement assistance program",
        "Industry partnerships and collaborations",
        "International exchange programs",
        "Research and innovation centers",
    ]

    const stats = [
        { number: "500+", label: "Active Students" },
        { number: "85+", label: "Faculty Members" },
        { number: "20+", label: "Years of Excellence" },
    ]

    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
    }
    const fadeUp = {
        hidden: { opacity: 0, y: 36 },
        show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
    }

    return (
        <section id="about" className="relative py-20 md:py-28 overflow-hidden">

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }} />

            {/* Green glow */}
            <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(123,170,40,0.10) 0%, transparent 70%)" }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div variants={container} initial="hidden" whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="space-y-16 md:space-y-20">

                    {/* Header */}
                    <motion.div variants={fadeUp} className="text-center space-y-5 max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-3">
                            <div className="h-[1px] w-10" style={{ background: "linear-gradient(to right, #1E6FBF, #A8D835)" }} />
                            <span className="text-xs tracking-[0.2em] uppercase"
                                style={{ color: "#A8D835", fontFamily: "'Arial', sans-serif" }}>
                                Our Story
                            </span>
                            <div className="h-[1px] w-10" style={{ background: "linear-gradient(to left, #1E6FBF, #A8D835)" }} />
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight  ">
                            About Echelon Institute<br className="hidden sm:block" /> of Technology
                        </h2>

                        <p className="text-base sm:text-lg leading-relaxed"
                            style={{ color: "#7A90A8", fontFamily: "'Arial', sans-serif" }}>
                            With over 20 years of excellence in engineering education, EIT Faridabad
                            stands as a beacon of innovation and academic rigor in India.
                        </p>
                    </motion.div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

                        {/* Mission & Vision */}
                        <motion.div variants={fadeUp}>
                            <div className="space-y-6 p-6 sm:p-8 rounded-2xl"
                                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                                <h3 className="text-xl sm:text-2xl font-bold  ">
                                    Our Mission & Vision
                                </h3>
                                <div className="space-y-5 text-sm sm:text-base leading-relaxed"
                                    style={{ fontFamily: "'Arial', sans-serif" }}>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-[2px]" style={{ background: "linear-gradient(to right, #1E6FBF, #3B9EE8)" }} />
                                            <span className="text-xs font-semibold tracking-widest uppercase"
                                                style={{ color: "#3B9EE8" }}>Mission</span>
                                        </div>
                                        <p style={{ color: "#7A90A8" }}>
                                            To impart quality engineering education and produce professionals
                                            who are technically competent, ethically sound, and committed
                                            to societal development.
                                        </p>
                                    </div>
                                    <div className="h-[1px]" style={{ background: "rgba(255,255,255,0.06)" }} />
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-[2px]" style={{ background: "linear-gradient(to right, #7BAA28, #A8D835)" }} />
                                            <span className="text-xs font-semibold tracking-widest uppercase"
                                                style={{ color: "#A8D835" }}>Vision</span>
                                        </div>
                                        <p style={{ color: "#7A90A8" }}>
                                            To be a globally recognized institute for engineering education,
                                            research, and innovation that shapes future leaders of the industry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Highlights */}
                        <motion.div variants={container} className="space-y-5">
                            <motion.h3 variants={fadeUp} className="text-xl sm:text-2xl font-bold  ">
                                Why Choose EIT?
                            </motion.h3>
                            <div className="space-y-3">
                                {highlights.map((highlight, i) => (
                                    <motion.div key={i} variants={fadeUp} whileHover={{ x: 6 }}
                                        className="flex items-start gap-3 group cursor-default">
                                        <div className="mt-1 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                                            style={{
                                                background: i % 2 === 0 ? "rgba(30,111,191,0.12)" : "rgba(168,216,53,0.1)",
                                                border: `1px solid ${i % 2 === 0 ? "rgba(30,111,191,0.4)" : "rgba(168,216,53,0.35)"}`,
                                            }}>
                                            <div className="w-1.5 h-1.5 rounded-full"
                                                style={{ background: i % 2 === 0 ? "#3B9EE8" : "#A8D835" }} />
                                        </div>
                                        <span className="text-sm sm:text-base leading-relaxed transition-colors duration-200 group-hover: "
                                            style={{ color: "#7A90A8", fontFamily: "'Arial', sans-serif" }}>
                                            {highlight}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats */}
                    <motion.div variants={container} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        {stats.map((stat, i) => (
                            <motion.div key={i} variants={fadeUp} whileHover={{ y: -4 }}
                                className="relative text-center py-8 sm:py-10 px-6 rounded-2xl overflow-hidden transition-all duration-300"
                                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                                {/* Corner — alternates blue / green */}
                                <div className="absolute top-0 left-0 w-14 h-[2px]"
                                    style={{ background: `linear-gradient(to right, ${i === 1 ? "#A8D835" : "#1E6FBF"}, transparent)` }} />
                                <div className="absolute top-0 left-0 w-[2px] h-14"
                                    style={{ background: `linear-gradient(to bottom, ${i === 1 ? "#A8D835" : "#1E6FBF"}, transparent)` }} />

                                <p className="text-4xl sm:text-5xl font-bold"
                                    style={{ color: i === 1 ? "#A8D835" : "#3B9EE8" }}>
                                    {stat.number}
                                </p>
                                <p className="mt-2 text-sm sm:text-base tracking-wide"
                                    style={{ color: "#3D5166", fontFamily: "'Arial', sans-serif" }}>
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}