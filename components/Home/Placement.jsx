"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Award, Target } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { placedStudents, placementsData } from "@/data/placementData"
import { motion, AnimatePresence } from "framer-motion"

const icons = [TrendingUp, Users, Award, Target]

export default function Placements() {
    const [[page, direction], setPage] = useState([0, 0])

    const paginate = (dir) => {
        setPage(([prev]) => [prev + dir, dir])
    }

    const index = ((page % placedStudents.length) + placedStudents.length) % placedStudents.length
    const student = placedStudents[index]

    // 🔁 Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    // 🔥 Animations
    const container = {
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
    }

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <section id="placements" className="py-16 md:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 space-y-12 md:space-y-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-3"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                        {placementsData.headline}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                        {placementsData.description}
                    </p>
                </motion.div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Stats */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4 sm:gap-6"
                    >
                        {placementsData.stats.slice(0, 4).map((stat, i) => {
                            const Icon = icons[i]
                            return (
                                <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.05 }}>
                                    <Card className="shadow-md border-0 hover:shadow-xl transition">
                                        <CardContent className="p-5 sm:p-6 text-center space-y-3">

                                            <motion.div
                                                whileHover={{ rotate: 8, scale: 1.1 }}
                                                className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-blue-100 rounded-lg flex items-center justify-center"
                                            >
                                                <Icon className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
                                            </motion.div>

                                            <div>
                                                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
                                                    {stat.value}
                                                </p>
                                                <p className="text-sm sm:text-base font-semibold text-gray-900">
                                                    {stat.label}
                                                </p>
                                            </div>

                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    {/* Student Slider */}
                    <div className="text-center space-y-5">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                            Our Successful Students
                        </h3>

                        <div className="flex justify-center relative">

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={page}
                                    initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="bg-white shadow-lg rounded-2xl p-5 sm:p-6 w-[260px] sm:w-[300px]"
                                >

                                    <div className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto mb-4">
                                        <Image
                                            src={student.image}
                                            alt={student.name}
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    </div>

                                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                                        {student.name}
                                    </h4>
                                    <p className="text-blue-600 font-semibold text-sm sm:text-base">
                                        {student.company}
                                    </p>
                                    <p className="text-gray-600 text-xs sm:text-sm">
                                        {student.ctc}
                                    </p>

                                </motion.div>
                            </AnimatePresence>

                        </div>
                    </div>

                </div>

                {/* Recruiters */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 sm:p-8 shadow-md"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">
                        Our Top Recruiting Partners
                    </h3>

                    <div className="overflow-hidden relative">
                        <motion.div
                            className="flex gap-6 sm:gap-10 w-max items-center"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                duration: 15,
                                ease: "linear",
                            }}
                        >
                            {[...placementsData.topCompanies, ...placementsData.topCompanies].map(
                                (company, i) => (
                                    <div
                                        key={i}
                                        className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 rounded-lg text-gray-800 text-sm sm:text-base font-semibold whitespace-nowrap shadow-sm"
                                    >
                                        {company}
                                    </div>
                                )
                            )}
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}