"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function GalleryGrid({ images = [], theme }) {
  if (!images.length) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-xl aspect-video flex items-center justify-center"
            style={{ background: theme.soft, border: `1px solid ${theme.border}` }}>
            <span className="text-xs" style={{ color: "#3D5166", fontFamily: "'Arial', sans-serif" }}>
              Photo {i + 1}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {images.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.04 }}
          className="relative rounded-xl overflow-hidden aspect-video cursor-pointer"
          style={{ border: `1px solid ${theme.border}` }}
        >
          <Image src={item.image} alt={item.caption || ""} fill className="object-cover" />
          {item.caption && (
            <div className="absolute bottom-0 left-0 right-0 p-2 text-[10px]  "
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)", fontFamily: "'Arial', sans-serif" }}>
              {item.caption}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}