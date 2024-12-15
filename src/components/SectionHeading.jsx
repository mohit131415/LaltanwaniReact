import React from 'react'
import { motion } from 'framer-motion'

const SectionHeading = ({ title }) => {
  return (
    <div className="flex items-center justify-center my-12">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="h-0.5 bg-primary w-0 md:w-12 sm:w-16 md:w-20 lg:w-24 mr-4"
      />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center font-display text-foreground whitespace-nowrap"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="h-0.5 bg-primary w-0 md:w-12 sm:w-16 md:w-20 lg:w-24 ml-4"
      />
    </div>
  )
}

export default SectionHeading

