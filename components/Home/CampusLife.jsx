"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CampusLife() {
    const [index, setIndex] = useState(0)

    const facilities = [
        {
            title: "Modern Laboratories",
            description: "State-of-the-art labs equipped with latest technology",
        },
        {
            title: "Library & Digital Resources",
            description: "Comprehensive collection of books and online databases",
        },
        {
            title: "Sports & Recreation",
            description: "Facilities for cricket, football, badminton and other sports",
        },
        {
            title: "Hostel Facilities",
            description: "Comfortable hostels with all modern amenities",
        },
        {
            title: "Cafeteria & Dining",
            description: "Hygienic and nutritious food services",
        },
        {
            title: "Cultural Programs",
            description: "Events and festivals celebrating campus life",
        },
    ]

    const total = facilities.length

    const prev = () => setIndex((p) => (p - 1 + total) % total)
    const next = () => setIndex((p) => (p + 1) % total)

    // Auto rotation
    useEffect(() => {
        const interval = setInterval(next, 2500)
        return () => clearInterval(interval)
    }, [total])

    return (
        <section id="campus" className="py-16 md:py-24 bg-gray-50 overflow-hidden">

            {/* Header */}
            <div className="text-center mb-12 md:mb-16 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Campus Life at EIT
                </h2>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    Vibrant campus with modern infrastructure
                </p>
            </div>

            {/* Desktop Carousel */}
            <div className="hidden md:block">
                <div
                    className="relative flex justify-center items-center h-[360px] mx-auto max-w-5xl"
                    style={{ perspective: "1000px" }}
                >
                    {facilities.map((facility, i) => {
                        let offset = i - index
                        if (offset > total / 2) offset -= total
                        if (offset < -total / 2) offset += total

                        return (
                            <div
                                key={i}
                                className="absolute transition-all duration-700 ease-in-out"
                                style={{
                                    transform: `
                                        translateX(${offset * 260}px)
                                        scale(${offset === 0 ? 1.15 : 0.82})
                                        rotateY(${offset === 0 ? 0 : offset > 0 ? -28 : 28}deg)
                                    `,
                                    zIndex: total - Math.abs(offset),
                                    opacity: Math.abs(offset) > 2 ? 0 : Math.abs(offset) === 2 ? 0.4 : 1,
                                    filter: offset === 0 ? "none" : "blur(1px)",
                                    pointerEvents: offset === 0 ? "auto" : "none",
                                }}
                            >
                                <Card className="w-[240px] shadow-xl overflow-hidden border-0">
                                    <div className="h-36 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                                        <p className="text-white text-3xl font-bold opacity-20 select-none">
                                            {i + 1}
                                        </p>
                                    </div>
                                    <CardContent className="pt-4 text-center px-4 pb-6">
                                        <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                                            {facility.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-gray-600 mt-2">
                                            {facility.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })}

                    {/* Prev / Next Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 z-20 p-2 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-200 transition"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 z-20 p-2 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-200 transition"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                </div>

                {/* Desktop Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {facilities.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? "bg-blue-600 w-5" : "bg-gray-300"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden px-4 sm:px-6">
                <div className="relative overflow-hidden rounded-xl">
                    <Card className="shadow-lg border-0 overflow-hidden">
                        <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                            <p className="text-white text-4xl font-bold opacity-20 select-none">
                                {index + 1}
                            </p>
                        </div>
                        <CardContent className="pt-4 text-center px-4 pb-6">
                            <h3 className="font-semibold text-gray-900 text-base">
                                {facilities[index].title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">
                                {facilities[index].description}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Mobile Arrows */}
                    <button
                        onClick={prev}
                        className="absolute left-2 top-16 sm:top-20 z-10 p-1.5 rounded-full bg-white/80 shadow border border-gray-200"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-4 h-4 text-gray-700" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-16 sm:top-20 z-10 p-1.5 rounded-full bg-white/80 shadow border border-gray-200"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-4 h-4 text-gray-700" />
                    </button>
                </div>

                {/* Mobile Dots */}
                <div className="flex justify-center gap-2 mt-4">
                    {facilities.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === index ? "bg-blue-600 w-5" : "bg-gray-300 w-2"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}