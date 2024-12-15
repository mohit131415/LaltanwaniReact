import React, { useState } from 'react'
import { motion } from 'framer-motion'
import DegreesGrid from '../components/DegreesGrid'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import SectionHeading from "@/components/SectionHeading";

const DegreesPage = () => {
  const [view, setView] = useState('grid')

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto px-4 p-12 z-50">
        <Link
          to="/accomplishments"
          className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
        >
          <ChevronLeft className="mr-2 h-5 w-5" />
        Back to Accomplishments
      </Link>
    </div>
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-center mb-12 font-display bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       <SectionHeading title="Academic Degrees" />
      </motion.h1>

      <div className="mb-8 flex justify-center space-x-4">
      </div>

      {view === 'grid' ? <DegreesGrid /> : null}
    </main>
  )
}

export default DegreesPage

