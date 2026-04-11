"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { eventsData } from "@/data/eventsData"
import { Calendar } from "lucide-react"
import Image from "next/image"

export default function Events() {
  const [[page, direction], setPage] = useState([0, 0])
  const total = eventsData.length

  const paginate = (dir) => {
    setPage(([prev]) => [prev + dir, dir])
  }

  const index = ((page % total) + total) % total

  // 🔁 Auto slide (desktop only)
  useEffect(() => {
    if (window.innerWidth < 768) return

    const interval = setInterval(() => {
      paginate(1)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-20 bg-green-50 text-blue-900">
      <div className="max-w-7xl mx-auto px-4 space-y-10 md:space-y-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Upcoming Events
          </h2>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* 🔥 Slider */}
          <div className="lg:col-span-2 relative w-full h-[260px] sm:h-[320px] md:h-[400px] rounded-2xl overflow-hidden">

            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x

                  if (swipe < -1000) paginate(1)
                  else if (swipe > 1000) paginate(-1)
                }}
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">

                  <Image
                    src={eventsData[index].image}
                    alt={eventsData[index].title}
                    fill
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 p-4 sm:p-6 text-white space-y-2">
                    <p className="flex items-center gap-2 text-xs sm:text-sm opacity-80">
                      <Calendar className="w-4 h-4" />
                      {eventsData[index].date}
                    </p>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                      {eventsData[index].title}
                    </h3>

                    <p className="text-xs sm:text-sm opacity-80 max-w-md line-clamp-2 sm:line-clamp-3">
                      {eventsData[index].description}
                    </p>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded shadow"
            >
              ←
            </button>

            <button
              onClick={() => paginate(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 rounded shadow"
            >
              →
            </button>

          </div>

          {/* 🔥 RIGHT LIST */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 sm:gap-4 max-h-[300px] sm:max-h-[400px] overflow-y-auto pr-1 sm:pr-2"
          >
            {eventsData.slice(0, 5).map((event, i) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setPage([i, i > index ? 1 : -1])}
                className={`cursor-pointer p-3 sm:p-4 rounded-xl border transition ${
                  i === index
                    ? "bg-blue-50 border-blue-400"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </p>

                <h4 className="font-semibold text-gray-900 mt-1 text-sm sm:text-base">
                  {event.title}
                </h4>

                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  )
}