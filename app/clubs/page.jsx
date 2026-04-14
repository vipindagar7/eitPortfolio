import { sankalpMeta, clubs } from "@/data/clubData"
import ClubCard from "@/components/Club/ClubCard"
import TeamCard from "@/components/Club/TeamCard"
import CoordinatorCard from "@/components/Club/CoordinatorCard"
import SectionWrapper from "@/components/Club/SectionWrapper"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Meteors } from "@/components/ui/meteors"
const defaultTheme = {
    primary: "#3B9EE8",
    soft: "rgba(59,158,232,0.08)",
    border: "rgba(59,158,232,0.22)",
    glow: "rgba(59,158,232,0.3)",
    gradient: "linear-gradient(135deg, #1E6FBF 0%, #3B9EE8 100%)",
}

export default function SankalpPage() {
    return (
        <main style={{ fontFamily: "'Georgia', serif" }} className="min-h-screen">
 <Meteors />
            {/* ── HERO ── */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }} />

                {/* Glows */}
                <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-15"
                    style={{ background: "radial-gradient(circle, #1E6FBF 0%, transparent 70%)" }} />
                <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10"
                    style={{ background: "radial-gradient(circle, #7BAA28 0%, transparent 70%)" }} />

                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: "linear-gradient(to right, transparent, #1E6FBF 30%, #A8D835 70%, transparent)" }} />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-7 py-20">
                    {/* Eyebrow */}
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-[1px] w-10" style={{ background: "linear-gradient(to right, transparent, #1E6FBF)" }} />
                        <span className="text-xs tracking-[0.2em] uppercase"
                            style={{ color: "#A8D835", fontFamily: "'Arial', sans-serif" }}>
                            {"Student's Club Ecosystem"}
                        </span>
                        <div className="h-[1px] w-10" style={{ background: "linear-gradient(to right, #A8D835, transparent)" }} />
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight  ">
                        Sankalp —{" "}
                        <span style={{ color: "#3B9EE8" }}>The Student</span>
                        <br />Club Ecosystem
                    </h1>

                    <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
                        style={{ color: "#7A90A8", fontFamily: "'Arial', sans-serif" }}>
                        Empowering students through skills, leadership, and collaboration.
                        <br />
                        <span style={{ color: "#A8D835" }}>Together Everyone Achieves More.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                        <Link href="/clubs#allClubs"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                            style={{ background: "linear-gradient(135deg, #1E6FBF, #3B9EE8)", color: "#fff", fontFamily: "'Arial', sans-serif", boxShadow: "0 0 30px rgba(30,111,191,0.35)" }}>
                            Explore All Clubs
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href="#about"
                            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                            style={{ background: "rgba(168,216,53,0.08)", color: "#A8D835", border: "1px solid rgba(168,216,53,0.35)", fontFamily: "'Arial', sans-serif" }}>
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            {/* ── ABOUT ── */}
            <SectionWrapper id="about">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-10" style={{ background: "linear-gradient(to right, #1E6FBF, #A8D835)" }} />
                        <span className="text-xs tracking-[0.2em] uppercase"
                            style={{ color: "#A8D835", fontFamily: "'Arial', sans-serif" }}>About Sankalp</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold  ">
                        Beyond the Classroom
                    </h2>
                    <div className="space-y-4">
                        {sankalpMeta.description.map((para, i) => (
                            <p key={i} className="text-base leading-relaxed"
                                style={{ color: "#7A90A8", fontFamily: "'Arial', sans-serif" }}>
                                {para}
                            </p>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* ── VISION & MISSION ── */}
            <SectionWrapper>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Vision */}
                        <div className="relative rounded-2xl p-7 space-y-4 overflow-hidden"
                            style={{ background: "rgba(59,158,232,0.06)", border: "1px solid rgba(59,158,232,0.2)" }}>
                            <div className="absolute top-0 left-0 w-full h-[2px]"
                                style={{ background: "linear-gradient(to right, #1E6FBF, #3B9EE8, transparent)" }} />
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-[2px]" style={{ background: "linear-gradient(to right, #1E6FBF, #3B9EE8)" }} />
                                <span className="text-xs font-semibold tracking-widest uppercase"
                                    style={{ color: "#3B9EE8", fontFamily: "'Arial', sans-serif" }}>Vision</span>
                            </div>
                            <p className="text-base sm:text-lg font-bold   leading-snug">
                                {sankalpMeta.vision}
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="relative rounded-2xl p-7 space-y-4 overflow-hidden"
                            style={{ background: "rgba(168,216,53,0.06)", border: "1px solid rgba(168,216,53,0.2)" }}>
                            <div className="absolute top-0 left-0 w-full h-[2px]"
                                style={{ background: "linear-gradient(to right, #7BAA28, #A8D835, transparent)" }} />
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-[2px]" style={{ background: "linear-gradient(to right, #7BAA28, #A8D835)" }} />
                                <span className="text-xs font-semibold tracking-widest uppercase"
                                    style={{ color: "#A8D835", fontFamily: "'Arial', sans-serif" }}>Mission</span>
                            </div>
                            <p className="text-base sm:text-lg font-bold   leading-snug">
                                {sankalpMeta.mission}
                            </p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* ── CLUBS GRID ── */}
            <SectionWrapper>
                <div id="allClubs" className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <div className="h-[1px] w-10" style={{ background: "linear-gradient(to right, #1E6FBF, #A8D835)" }} />
                                <span className="text-xs tracking-[0.2em] uppercase"
                                    style={{ color: "#A8D835", fontFamily: "'Arial', sans-serif" }}>Our Clubs</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold  ">
                                All <span style={{ color: "#3B9EE8" }}>Clubs & Societies</span>
                            </h2>
                        </div>
                        <Link href="/clubs"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
                            style={{ background: "rgba(59,158,232,0.08)", border: "1px solid rgba(59,158,232,0.25)", color: "#3B9EE8", fontFamily: "'Arial', sans-serif" }}>
                            View All
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {clubs.map((club, i) => (
                            <ClubCard key={club.slug} club={club} index={i} />
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* ── STATS ── */}
            <SectionWrapper>
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {sankalpMeta.stats.map((stat, i) => (
                            <div key={i}
                                className="relative text-center py-8 px-4 rounded-2xl overflow-hidden"
                                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                                <div className="absolute top-0 left-0 w-14 h-[2px]"
                                    style={{ background: `linear-gradient(to right, ${i % 2 === 0 ? "#1E6FBF" : "#A8D835"}, transparent)` }} />
                                <div className="absolute top-0 left-0 w-[2px] h-14"
                                    style={{ background: `linear-gradient(to bottom, ${i % 2 === 0 ? "#1E6FBF" : "#A8D835"}, transparent)` }} />
                                <p className="text-3xl sm:text-4xl font-bold"
                                    style={{ color: i % 2 === 0 ? "#3B9EE8" : "#A8D835" }}>
                                    {stat.value}
                                </p>
                                <p className="mt-2 text-xs sm:text-sm tracking-wide"
                                    style={{ color: "#3D5166", fontFamily: "'Arial', sans-serif" }}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* ── LEADERSHIP ── */}
            <SectionWrapper>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
                    <div className="text-center space-y-3">
                        <div className="flex items-center justify-center gap-3">
                            <div className="h-[1px] w-10" style={{ background: "linear-gradient(to right, transparent, #1E6FBF)" }} />
                            <span className="text-xs tracking-[0.2em] uppercase"
                                style={{ color: "#A8D835", fontFamily: "'Arial', sans-serif" }}>Leadership</span>
                            <div className="h-[1px] w-10" style={{ background: "linear-gradient(to left, transparent, #A8D835)" }} />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold  ">
                            The People Behind <span style={{ color: "#3B9EE8" }}>Sankalp</span>
                        </h2>
                    </div>

                    {/* Faculty */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold tracking-widest uppercase"
                            style={{ color: "#3D5166", fontFamily: "'Arial', sans-serif" }}>Faculty Coordinators</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {sankalpMeta.leadership.faculty.map((person, i) => (
                                <CoordinatorCard key={i} person={person} type="faculty" theme={defaultTheme} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* Student */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold tracking-widest uppercase"
                            style={{ color: "#3D5166", fontFamily: "'Arial', sans-serif" }}>Student Leadership</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {sankalpMeta.leadership.student.map((person, i) => (
                                <TeamCard key={i} person={person} theme={defaultTheme} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>

        </main>
    )
}