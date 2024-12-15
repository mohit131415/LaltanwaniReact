import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const degrees = [
  { title: "Ph.D. in Commerce", year: "2005", institution: "University of Mumbai", image: "/placeholder.svg?height=200&width=300" },
  { title: "Ph.D. in Business Policy & Administration", year: "2007", institution: "Dravidian University", image: "/placeholder.svg?height=200&width=300" },
  { title: "Ph.D. in Education & Social Services", year: "2009", institution: "The American University", image: "/placeholder.svg?height=200&width=300" },
  { title: "D.Litt. in Education", year: "2012", institution: "Ballsbridge University", image: "/placeholder.svg?height=200&width=300" },
  { title: "LL.B.", year: "2000", institution: "University of Mumbai", image: "/placeholder.svg?height=200&width=300" },
  { title: "M.B.A. in Finance", year: "1998", institution: "Vinayaka Missions Sikkim University", image: "/placeholder.svg?height=200&width=300" },
  { title: "M.A. in Economics", year: "1996", institution: "Madurai Kamraj University", image: "/placeholder.svg?height=200&width=300" },
  { title: "M.Phil. in Commerce", year: "2003", institution: "The Global Open University", image: "/placeholder.svg?height=200&width=300" },
]

const DegreesTimeline = () => {
  const sortedDegrees = [...degrees].sort((a, b) => parseInt(a.year) - parseInt(b.year))

  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
      {sortedDegrees.map((degree, index) => (
        <motion.div
          key={index}
          className={`mb-8 flex items-center w-full ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
          >
            <div className="bg-card shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 p-4">
              <div className="flex items-center mb-2">
                <GraduationCap className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold">{degree.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{degree.year}</p>
              <p className="text-sm text-muted-foreground">{degree.institution}</p>
            </div>
          </div>
          <div className="z-10">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-primary-foreground" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default DegreesTimeline

