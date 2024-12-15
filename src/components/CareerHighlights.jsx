import React from 'react'
import { motion } from 'framer-motion'

const highlights = [
  "Founder Trustee of BBRT International School",
  "Director in The Nav – Jeevan Co-op Bank Ltd.",
  "Past Educational Director of Jhulelal Trust School",
  "Past President of Rotary Club of Ulhasnagar Midtown",
  "Guided over 50,000 students in various career paths"
]

const CareerHighlights = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="bg-card rounded-lg shadow-lg p-6 w-full max-w-3xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Career Highlights</h2>
        <ul className="space-y-2">
          {highlights.map((highlight, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start"
            >
              <span className="text-primary mr-2">•</span>
              <span>{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default CareerHighlights

