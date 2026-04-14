import { clubs } from "@/data/clubData"
import { notFound } from "next/navigation"
import CoordinatorCard from "@/components/Club/CoordinatorCard"
import EventCard from "@/components/Club/EventCard"
import GalleryGrid from "@/components/Club/GalleryGrid"
import { Trophy, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Particles } from "@/components/ui/particles"

export function generateStaticParams() {
    return clubs.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params

    const club = clubs.find(c => c.slug === slug)

    return {
        title: club ? `${club.name} — EIT Sankalp` : "Club Not Found",
    }
}

export default async function ClubPage({ params }) {
    const { slug } = await params

    const club = clubs.find(c => c.slug === slug)

    if (!club) notFound()

    const { theme } = club

    return (
        <main style={{ fontFamily: "'Georgia', serif" }} className="min-h-screen">
            {/* ── CLUB HERO ── */}
            <section className="relative min-h-[55vh] flex items-end overflow-hidden pt-20">

                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }} />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
                    {/* Back */}
                    <Link href="/clubs"
                        className="inline-flex items-center gap-2 text-xs mb-8 transition-colors"
                        style={{ color: "#3D5166", fontFamily: "'Arial', sans-serif" }}>
                        <ArrowLeft className="w-3.5 h-3.5" />
                        All Clubs
                    </Link>

                    {/* Title block */}
                    <div className="space-y-4 max-w-2xl">
                        <span className="inline-block text-xs px-3 py-1 rounded-full font-semibold tracking-widest uppercase"
                            style={{ background: theme.soft, color: theme.primary, border: `1px solid ${theme.border}`, fontFamily: "'Arial', sans-serif" }}>
                            Sankalp — Student Club
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold  leading-tight">
                            {club.name}
                        </h1>
                        <p className="text-lg sm:text-xl font-semibold" style={{ color: theme.primary }}>
                            {club.tagline}
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 py-16">

                {/* ── ABOUT ── */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-10" style={{ background: theme.gradient }} />
                        <span className="text-xs tracking-[0.2em] uppercase"
                            style={{ color: theme.primary, fontFamily: "'Arial', sans-serif" }}>About</span>
                    </div>
                    <div className="max-w-3xl space-y-4">
                        {club.description.map((para, i) => (
                            <p key={i} className="text-base leading-relaxed"
                                style={{ color: "#7A90A8", fontFamily: "'Arial', sans-serif" }}>
                                {para}
                            </p>
                        ))}
                    </div>
                </section>

                {/* ── COORDINATORS ── */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-10" style={{ background: theme.gradient }} />
                        <span className="text-xs tracking-[0.2em] uppercase"
                            style={{ color: theme.primary, fontFamily: "'Arial', sans-serif" }}>Team</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold  ">Coordinators</h2>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <h3 className="text-xs font-semibold tracking-widest uppercase"
                                style={{ color: "#3D5166", fontFamily: "'Arial', sans-serif" }}>Faculty</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {club.coordinators.faculty.map((p, i) => (
                                    <CoordinatorCard key={i} person={p} type="faculty" theme={theme} index={i} />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-xs font-semibold tracking-widest uppercase"
                                style={{ color: "#3D5166", fontFamily: "'Arial', sans-serif" }}>Student Leaders</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {club.coordinators.student.map((p, i) => (
                                    <CoordinatorCard key={i} person={p} type="student" theme={theme} index={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── DOMAINS ── */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-10" style={{ background: theme.gradient }} />
                        <span className="text-xs tracking-[0.2em] uppercase"
                            style={{ color: theme.primary, fontFamily: "'Arial', sans-serif" }}>What We Do</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold  ">Domains & Activities</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {club.domains.map((domain, i) => (
                            <div key={i}
                                className="relative rounded-2xl p-6 space-y-3 overflow-hidden"
                                style={{ background: theme.soft, border: `1px solid ${theme.border}` }}>
                                <div className="absolute top-0 left-0 w-12 h-[2px]"
                                    style={{ background: `linear-gradient(to right, ${theme.primary}, transparent)` }} />
                                <div className="absolute top-0 left-0 w-[2px] h-12"
                                    style={{ background: `linear-gradient(to bottom, ${theme.primary}, transparent)` }} />
                                <div className="w-2 h-2 rounded-full" style={{ background: theme.primary }} />
                                <h3 className="font-bold text-sm  " style={{ fontFamily: "'Arial', sans-serif" }}>
                                    {domain.title}
                                </h3>
                                <p className="text-xs leading-relaxed" style={{ color: "#7A90A8", fontFamily: "'Arial', sans-serif" }}>
                                    {domain.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── EVENTS ── */}
                {club.events.length > 0 && (
                    <section className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-10" style={{ background: theme.gradient }} />
                            <span className="text-xs tracking-[0.2em] uppercase"
                                style={{ color: theme.primary, fontFamily: "'Arial', sans-serif" }}>Events</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold  ">Recent Events</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {club.events.map((event, i) => (
                                <EventCard key={i} event={event} theme={theme} index={i} />
                            ))}
                        </div>
                    </section>
                )}

                {/* ── GALLERY ── */}
                <section className="space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-10" style={{ background: theme.gradient }} />
                        <span className="text-xs tracking-[0.2em] uppercase"
                            style={{ color: theme.primary, fontFamily: "'Arial', sans-serif" }}>Gallery</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold  ">Moments</h2>
                    <GalleryGrid images={club.gallery} theme={theme} />
                </section>

                {/* ── ACHIEVEMENTS ── */}
                {club.achievements.length > 0 && (
                    <section className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-10" style={{ background: theme.gradient }} />
                            <span className="text-xs tracking-[0.2em] uppercase"
                                style={{ color: theme.primary, fontFamily: "'Arial', sans-serif" }}>Achievements</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold  ">Our Wins</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {club.achievements.map((a, i) => (
                                <div key={i}
                                    className="relative flex items-start gap-4 rounded-2xl p-5 overflow-hidden"
                                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                                    <div className="absolute top-0 left-0 right-0 h-[1px]"
                                        style={{ background: `linear-gradient(to right, ${theme.primary}, transparent)` }} />
                                    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                                        style={{ background: theme.soft, border: `1px solid ${theme.border}` }}>
                                        <Trophy className="w-4 h-4" style={{ color: theme.primary }} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm   leading-snug"
                                            style={{ fontFamily: "'Arial', sans-serif" }}>
                                            {a.title}
                                        </p>
                                        <p className="text-xs mt-1" style={{ color: theme.primary, fontFamily: "'Arial', sans-serif" }}>
                                            {a.year}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </main>
    )
}