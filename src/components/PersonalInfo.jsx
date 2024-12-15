import React from 'react'
import { motion } from 'framer-motion'

const PersonalInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-card rounded-lg shadow-lg p-6 w-full max-w-3xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Dr. Lal Tanwani</h2>
        <p className="mb-4 text-lg">Motivator | Academician | Educator | Career Coach | Mentor</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-semibold">
            Founder Trustee, Padma International School
          </span>
          <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-semibold">
            CMD, Padma Institute of Knowledge
          </span>
          <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-semibold">
            Advisory Council, Central Board of Film Certification
          </span>
        </div>
        <p className="text-muted-foreground">
          With over 30 years of experience in education, Dr. Lal Tanwani has dedicated his life to empowering minds and shaping the future of education.
        </p>
      </div>
    </motion.div>
  )
}

export default PersonalInfo

