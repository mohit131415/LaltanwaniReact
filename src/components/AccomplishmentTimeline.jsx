import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const AccomplishmentTimeline = ({ accomplishments, onSelect, showImage = false }) => {
  const sortedAccomplishments = [...accomplishments].sort((a, b) => a.year - b.year)

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/20" />
      {sortedAccomplishments.map((accomplishment, index) => (
        <motion.div
          key={accomplishment.title}
          className="mb-8 flex"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex flex-col items-center mr-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-primary bg-background">
              <GraduationCap className="h-4 w-4 text-primary" />
            </div>
            <div className="w-0.5 h-full bg-primary/20" />
          </div>
          <div 
            className="bg-card rounded-lg shadow-md p-4 flex-1 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onSelect(accomplishment)}
          >
            <div className="flex items-center space-x-4">
              {showImage && (
                <div className="flex-shrink-0">
                  <img
                    src={accomplishment.image}
                    alt={accomplishment.title}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold mb-2">{accomplishment.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{accomplishment.year} - {accomplishment.institution}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default AccomplishmentTimeline

