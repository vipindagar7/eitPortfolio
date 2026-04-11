"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "@/data/faqData"
import { motion } from "framer-motion"

export default function FAQ() {
    // 🔥 Animation Variants
    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.12 },
        },
    }

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    }

    return (
        <section
            id="faqs"
            className="py-14 md:py-20 bg-blue-600 text-white"
        >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-10 md:space-y-12"
                >

                    {/* Header */}
                    <motion.div variants={fadeUp} className="text-center space-y-3 sm:space-y-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                            Frequently Asked Questions
                        </h2>

                        <p className="text-sm sm:text-base md:text-lg text-blue-100 max-w-xl mx-auto">
                            Find answers to common questions about admissions, programs, and campus life
                        </p>
                    </motion.div>

                    {/* Accordion */}
                    <motion.div variants={container}>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-3 sm:space-y-4"
                        >
                            {faqData.map((faq, i) => (
                                <motion.div key={faq.id} variants={fadeUp}>
                                    <AccordionItem
                                        value={faq.id}
                                        className="bg-white border-0 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
                                    >
                                        <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-5 hover:text-blue-600 transition">

                                            <span className="text-left font-semibold text-gray-900 text-sm sm:text-base">
                                                {faq.question}
                                            </span>

                                        </AccordionTrigger>

                                        {/* 🔥 Smooth expand feel */}
                                        <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 text-gray-700 text-sm sm:text-base leading-relaxed">
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {faq.answer}
                                            </motion.div>
                                        </AccordionContent>

                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}