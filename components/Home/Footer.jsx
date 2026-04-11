"use client"

import { siteConfig } from "@/data/siteConfig"
import { motion } from "framer-motion"

const Footer = () => {
    // 🔥 Animation Variants
    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.15 },
        },
    }

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    }

    return (
        <footer className="bg-blue-700 text-gray-200 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10"
                >

                    {/* Column */}
                    {[
                        {
                            title: "About EIT",
                            links: [
                                { label: "About Us", href: "#about" },
                                { label: "History", href: "#" },
                                { label: "Achievements", href: "#" },
                            ],
                        },
                        {
                            title: "Academics",
                            links: [
                                { label: "Programs", href: "#courses" },
                                { label: "Faculty", href: "#" },
                                { label: "Curriculum", href: "#" },
                            ],
                        },
                        {
                            title: "Quick Links",
                            links: [
                                { label: "Admissions", href: "#admission" },
                                { label: "Placements", href: "#placements" },
                                { label: "News", href: "#" },
                            ],
                        },
                    ].map((section, i) => (
                        <motion.div key={i} variants={fadeUp}>
                            <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">
                                {section.title}
                            </h4>

                            <ul className="space-y-2 text-xs sm:text-sm">
                                {section.links.map((link, j) => (
                                    <li key={j}>
                                        <a
                                            href={link.href}
                                            className="hover:text-white transition relative group"
                                        >
                                            {link.label}

                                            {/* 🔥 underline animation */}
                                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    {/* Contact */}
                    <motion.div variants={fadeUp}>
                        <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">
                            Contact
                        </h4>

                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li>{siteConfig.contact.email}</li>
                            <li>{siteConfig.contact.phone}</li>
                        </ul>
                    </motion.div>

                </motion.div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-xs sm:text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>

                    <div className="flex gap-4 text-xs sm:text-sm">
                        <a href="#" className="hover:text-white transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Terms & Conditions
                        </a>
                    </div>
                </motion.div>

            </div>
        </footer>
    )
}

export default Footer