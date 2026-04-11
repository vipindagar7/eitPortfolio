"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/data/siteConfig"
import { Mail, Phone, MapPin } from "lucide-react"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formState)
        setFormState({ name: "", email: "", phone: "", message: "" })
    }

    // 🔥 Animation Variants
    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.15 },
        },
    }

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section id="contact" className="py-14 md:py-20 bg-green-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-10 md:space-y-12"
                >

                    {/* Header */}
                    <motion.div variants={fadeUp} className="text-center space-y-3">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            Get in Touch
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                            Have questions? Our admissions team is ready to help you
                        </p>
                    </motion.div>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                        {/* FORM */}
                        <motion.div variants={fadeUp} className="bg-green-50 p-5 sm:p-6 rounded-2xl shadow-sm">
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

                                {[
                                    { label: "Full Name", type: "text", key: "name", placeholder: "Your name" },
                                    { label: "Email Address", type: "email", key: "email", placeholder: "your@email.com" },
                                    { label: "Phone Number", type: "tel", key: "phone", placeholder: "+91 XXXXX XXXXX" },
                                ].map((field, i) => (
                                    <motion.div key={i} variants={fadeUp}>
                                        <label className="block text-sm font-medium text-gray-900 mb-1">
                                            {field.label}
                                        </label>
                                        <Input
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            value={formState[field.key]}
                                            onChange={(e) =>
                                                setFormState({ ...formState, [field.key]: e.target.value })
                                            }
                                            className="w-full focus:scale-[1.01] transition"
                                        />
                                    </motion.div>
                                ))}

                                {/* Message */}
                                <motion.div variants={fadeUp}>
                                    <label className="block text-sm font-medium text-gray-900 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="Your message here..."
                                        value={formState.message}
                                        onChange={(e) =>
                                            setFormState({ ...formState, message: e.target.value })
                                        }
                                        rows={4}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition focus:scale-[1.01]"
                                    />
                                </motion.div>

                                {/* Button */}
                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                                        Send Message
                                    </Button>
                                </motion.div>

                            </form>
                        </motion.div>

                        {/* INFO */}
                        <motion.div variants={container} className="space-y-5">

                            {/* Cards */}
                            {[
                                { icon: MapPin, title: "Address", value: siteConfig.contact.address },
                                { icon: Mail, title: "Email", value: siteConfig.contact.email, link: `mailto:${siteConfig.contact.email}` },
                                { icon: Phone, title: "Phone", value: siteConfig.contact.phone, link: `tel:${siteConfig.contact.phone}` },
                            ].map((item, i) => {
                                const Icon = item.icon
                                return (
                                    <motion.div key={i} variants={fadeUp} whileHover={{ y: -4 }}>
                                        <Card className="bg-green-50 border-0 shadow-sm hover:shadow-md transition">
                                            <CardContent className="p-4 sm:p-5 flex gap-4 items-start">

                                                <motion.div
                                                    whileHover={{ rotate: 8, scale: 1.1 }}
                                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                                                >
                                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                                </motion.div>

                                                <div>
                                                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                                                        {item.title}
                                                    </h3>

                                                    {item.link ? (
                                                        <a href={item.link} className="text-blue-600 hover:text-blue-700 text-sm">
                                                            {item.value}
                                                        </a>
                                                    ) : (
                                                        <p className="text-gray-600 text-sm">
                                                            {item.value}
                                                        </p>
                                                    )}
                                                </div>

                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                )
                            })}

                            {/* Social */}
                            <motion.div variants={fadeUp} className="pt-4 border-t border-gray-200">
                                <p className="font-semibold text-gray-900 mb-3">
                                    Follow Us
                                </p>

                                <div className="flex gap-3 flex-wrap">
                                    {[
                                        { icon: FaFacebook, link: siteConfig.links.facebook, color: "bg-blue-600" },
                                        { icon: FaTwitter, link: siteConfig.links.twitter, color: "bg-blue-400" },
                                        { icon: FaLinkedin, link: siteConfig.links.linkedin, color: "bg-blue-700" },
                                        { icon: FaInstagram, link: siteConfig.links.instagram, color: "bg-pink-600" },
                                    ].map((social, i) => {
                                        const Icon = social.icon
                                        return (
                                            <motion.a
                                                key={i}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.15 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`${social.color} w-9 h-9 sm:w-10 sm:h-10 text-white rounded-lg flex items-center justify-center`}
                                            >
                                                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </motion.a>
                                        )
                                    })}
                                </div>
                            </motion.div>

                        </motion.div>

                    </div>

                </motion.div>
            </div>
        </section>
    )
}