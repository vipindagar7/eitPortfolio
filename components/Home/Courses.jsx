"use client"

import { useState, useEffect } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { GraduationCap, ChevronLeft, ChevronRight } from "lucide-react"
import { coursesData } from "@/data/courseData"

export default function CoursesCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const total = coursesData.length

  const prev = () => setIndex((p) => (p - 1 + total) % total)
  const next = () => setIndex((p) => (p + 1) % total)

  // Auto rotate
  useEffect(() => {
    if (paused) return
    const interval = setInterval(next, 2000)
    return () => clearInterval(interval)
  }, [total, paused])

  return (
    <section className="py-16 md:py-20 bg-green-50 text-blue-900 overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-10 md:mb-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Our Engineering Programs
        </h2>
        <p className="text-gray-700 mt-2 text-sm sm:text-base">
          Industry-focused B.Tech programs
        </p>
      </div>

      {/* Desktop 3D Carousel */}
      <div
        className="hidden md:block"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="relative flex items-center justify-center h-[400px] max-w-5xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          {coursesData.map((course, i) => {
            let offset = i - index
            if (offset > total / 2) offset -= total
            if (offset < -total / 2) offset += total

            return (
              <div
                key={course.id}
                className="absolute transition-all duration-700 ease-in-out"
                style={{
                  transform: `
                    translateX(${offset * 260}px)
                    scale(${offset === 0 ? 1.15 : 0.82})
                    rotateY(${offset === 0 ? 0 : offset > 0 ? -25 : 25}deg)
                  `,
                  zIndex: total - Math.abs(offset),
                  opacity: Math.abs(offset) > 2 ? 0 : Math.abs(offset) === 2 ? 0.4 : 1,
                  filter: offset === 0 ? "none" : "blur(1px)",
                  pointerEvents: offset === 0 ? "auto" : "none",
                }}
              >
                <Card className="w-[250px] shadow-xl overflow-hidden hover:shadow-2xl transition border-0">
                  <CardHeader className="bg-blue-600 text-white p-4">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <CardTitle className="text-sm md:text-base leading-snug">
                          {course.name}
                        </CardTitle>
                        <CardDescription className="text-blue-100 text-xs md:text-sm mt-1">
                          {course.duration}
                        </CardDescription>
                      </div>
                      <GraduationCap className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    </div>
                  </CardHeader>
                  <CardContent className="text-left space-y-2 p-4">
                    <p className="text-xs md:text-sm text-gray-600 line-clamp-3">
                      {course.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )
          })}

          {/* Arrows */}
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
          {coursesData.map((_, i) => (
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

      {/* Mobile Card Carousel */}
      <div className="md:hidden px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-xl">
          <Card className="shadow-lg border-0 overflow-hidden">
            <CardHeader className="bg-blue-600 text-white p-4">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <CardTitle className="text-base leading-snug">
                    {coursesData[index].name}
                  </CardTitle>
                  <CardDescription className="text-blue-100 text-sm mt-1">
                    {coursesData[index].duration}
                  </CardDescription>
                </div>
                <GraduationCap className="w-5 h-5 flex-shrink-0 mt-0.5" />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <p className="text-sm text-gray-600 line-clamp-4">
                {coursesData[index].description}
              </p>
            </CardContent>
          </Card>

          {/* Mobile Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-5 z-10 p-1.5 rounded-full bg-white/80 shadow border border-gray-200"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-5 z-10 p-1.5 rounded-full bg-white/80 shadow border border-gray-200"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        {/* Mobile Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {coursesData.map((_, i) => (
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