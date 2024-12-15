import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Building } from 'lucide-react'

const AccomplishmentDetails = ({ accomplishment }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-card shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{accomplishment.title}</h2>
          <div className="flex flex-col items-center mb-6">
            <img
              src={accomplishment.image}
              alt={accomplishment.title}
              className="w-48 h-48 rounded-full object-cover mb-4"
            />
            <div className="flex items-center text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              <span className="mr-4">{accomplishment.year}</span>
              <Building className="mr-2 h-4 w-4" />
              <span>{accomplishment.institution}</span>
            </div>
          </div>
          <p className="text-muted-foreground">{accomplishment.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default AccomplishmentDetails

