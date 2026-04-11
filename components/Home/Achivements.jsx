"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, BookOpen, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function Achievements() {
  const achievements = [
    {
      icon: Award,
      title: "NAAC Accreditation",
      description:
        "Accredited with Grade 'A' by the National Assessment and Accreditation Council",
    },
    {
      icon: Globe,
      title: "International Partnerships",
      description:
        "Collaborations with leading universities in USA, Germany, and other countries",
    },
    {
      icon: BookOpen,
      title: "Research Excellence",
      description:
        "Active research centers focusing on emerging technologies and innovation",
    },
    {
      icon: Users,
      title: "Industry Recognition",
      description:
        "Recognized by top companies as a premier source of engineering talent",
    },
  ]

  // 🔥 Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="achievements"
      className="py-14 md:py-20 bg-blue-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >

          {/* Header */}
          <motion.div variants={fadeUp} className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Our Achievements & Recognition
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
              Setting benchmarks in engineering education and research
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, y: -5 }} // 🔥 hover lift
                  className="h-full"
                >
                  <Card className="border-0 shadow-md bg-white h-full">
                    <CardContent className="p-6 sm:p-8 flex flex-col gap-4">

                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 8, scale: 1.1 }} // 🔥 icon animation
                        className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-lg flex items-center justify-center"
                      >
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
                      </motion.div>

                      {/* Text */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                          {achievement.title}
                        </h3>

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>

                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}