"use client"

import { Card, CardContent } from "@/components/ui/card"
import { testimonialsData } from "@/data/testimonialsData"
import { Star } from "lucide-react"

export default function Testimonials() {
    return (
        <section className="py-16 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 space-y-10 md:space-y-12">

                {/* Header */}
                <div className="text-center space-y-3">
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-[1px] w-8" style={{ background: "#1E6FBF" }} />
                        <span className="text-xs tracking-[0.2em] uppercase"
                            style={{ color: "#A8D835", fontFamily: "'Arial', sans-serif" }}>
                            Alumni Speak
                        </span>
                        <div className="h-[1px] w-8" style={{ background: "#A8D835" }} />
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700"
                        style={{ fontFamily: "'Georgia', serif" }}>
                        Student Success Stories
                    </h2>
                </div>

                {/* Marquee wrapper */}
                <div className="relative overflow-hidden">
                  
                    <div className="flex gap-4 sm:gap-5 w-max animate-marquee hover:[animation-play-state:paused]">
                        {[...testimonialsData, ...testimonialsData].map((t, i) => (
                            <Card key={i}
                                className="min-w-[200px] sm:min-w-[260px] md:min-w-[300px] max-w-[300px] flex-shrink-0 border-0 overflow-hidden"
                                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                                <CardContent className="p-4 sm:p-5 space-y-3">

                                    {/* Stars — alternating blue/green */}
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} className="w-3 h-3 sm:w-4 sm:h-4"
                                                style={{ fill: j < 3 ? "#1E6FBF" : "#A8D835", color: j < 3 ? "#1E6FBF" : "#A8D835" }} />
                                        ))}
                                    </div>

                                    <p className="text-xs sm:text-sm italic leading-relaxed line-clamp-4"
                                        style={{ color: "#4f6276", fontFamily: "'Georgia', serif" }}>
                                        {t.content}
                                    </p>

                                    <div className="pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                                        <p className="font-semibold text-xs sm:text-sm text-blue-700"
                                            style={{ fontFamily: "'Arial', sans-serif" }}>
                                            {t.name}
                                        </p>
                                        <p className="text-xs mt-0.5" style={{ color: "#3D5166", fontFamily: "'Arial', sans-serif" }}>
                                            {t.branch} • {t.batch}
                                        </p>
                                        <p className="text-xs sm:text-sm mt-0.5" style={{ color: "#3B9EE8", fontFamily: "'Arial', sans-serif" }}>
                                            {t.role} @ {t.company}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}