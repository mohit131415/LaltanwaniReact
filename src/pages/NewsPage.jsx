import React from 'react'
import { motion } from 'framer-motion'
import NewsGrid from '../components/NewsGrid'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

const NewsPage = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <Link
        to="/accomplishments"
        className="inline-flex items-center mb-8 px-4 py-2 border border-transparent text-base font-medium rounded-md text-primary bg-primary-foreground hover:bg-primary-foreground/90"
      >
        <ChevronLeft className="mr-2 h-5 w-5" />
        Back to Accomplishments
      </Link>

      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-center mb-12 font-display bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        In the News
      </motion.h1>

      <NewsGrid />
    </div>
  )
}

export default NewsPage

