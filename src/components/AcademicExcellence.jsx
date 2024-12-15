import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react'

const degrees = [
  {
    title: "Ph.D. in Commerce",
    year: "2005",
    institution: "University of Mumbai",
    description: "Educational Leadership",
    image: "/placeholder.svg?height=400&width=300"
  },
  {
    title: "Ph.D. in Business Policy & Administration",
    year: "2007",
    institution: "Dravidian University",
    description: "Educational Management",
    image: "/placeholder.svg?height=400&width=300"
  },
  {
    title: "Ph.D. in Education & Social Services",
    year: "2009",
    institution: "The American University",
    description: "Educational Technology",
    image: "/placeholder.svg?height=400&width=300"
  },
  {
    title: "D.Litt. in Education",
    year: "2012",
    institution: "Ballsbridge University",
    description: "Educational Psychology",
    image: "/placeholder.svg?height=400&width=300"
  },
  {
    title: "LL.B.",
    year: "2000",
    institution: "University of Mumbai",
    description: "Legal Education",
    image: "/placeholder.svg?height=400&width=300"
  }
]

const AcademicExcellence = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % degrees.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + degrees.length) % degrees.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 font-display bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent"
        >
          Academic Excellence
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-card rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={degrees[currentIndex].image}
                    alt={degrees[currentIndex].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">{degrees[currentIndex].title}</h3>
                  </div>
                  <p className="text-lg font-semibold mb-2">{degrees[currentIndex].institution}</p>
                  <div className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-semibold mb-4">
                    {degrees[currentIndex].year}
                  </div>
                  <p className="text-muted-foreground">{degrees[currentIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 bg-primary text-primary-foreground rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 bg-primary text-primary-foreground rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Degree {currentIndex + 1} of {degrees.length}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AcademicExcellence

