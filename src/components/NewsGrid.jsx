import React from 'react'
import { motion } from 'framer-motion'
import { Newspaper } from 'lucide-react'

const newsItems = [
  { title: "Dr. Tanwani Receives Prestigious Award", date: "June 15, 2021", image: "/placeholder.svg?height=200&width=300", source: "Education Today" },
  { title: "Innovative Teaching Methods Praised", date: "August 3, 2020", image: "/placeholder.svg?height=200&width=300", source: "The Daily Chronicle" },
  { title: "Local Educator Makes Global Impact", date: "March 22, 2019", image: "/placeholder.svg?height=200&width=300", source: "Global Education Review" },
  { title: "Dr. Lal Tanwani's Research Breakthrough", date: "November 10, 2018", image: "/placeholder.svg?height=200&width=300", source: "Science & Education Journal" },
  { title: "Transforming Education: A Success Story", date: "February 5, 2017", image: "/placeholder.svg?height=200&width=300", source: "Education Insider" },
  { title: "Interview: Dr. Tanwani on Future of Learning", date: "September 30, 2016", image: "/placeholder.svg?height=200&width=300", source: "Tech & Learn Magazine" },
]

const NewsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="bg-card shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-primary rounded-full p-2">
                <Newspaper className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{item.date}</p>
              <p className="text-sm text-muted-foreground">{item.source}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default NewsGrid

