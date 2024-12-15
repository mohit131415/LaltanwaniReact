import React from 'react'
import { motion } from 'framer-motion'
import { Award, BadgeCheck, Newspaper } from 'lucide-react'

const DUMMY_IMAGE = "/placeholder.svg?height=200&width=300"

const awards = [
  { title: "Nelson Mandela Nobel Peace Award", year: "2020", image: DUMMY_IMAGE },
  { title: "Best Teaching Award", year: "2018", image: DUMMY_IMAGE },
  { title: "International Achievers Award", year: "2016", image: DUMMY_IMAGE },
]

const certifications = [
  { title: "Certified Educational Leader", year: "2019", image: DUMMY_IMAGE },
  { title: "Advanced Research Methodology", year: "2015", image: DUMMY_IMAGE },
  { title: "Digital Transformation in Education", year: "2020", image: DUMMY_IMAGE },
]

const newsCutouts = [
  { title: "Dr. Tanwani Revolutionizes Education", date: "June 15, 2021", image: DUMMY_IMAGE },
  { title: "Local Educator Receives Global Recognition", date: "August 3, 2020", image: DUMMY_IMAGE },
  { title: "Innovative Teaching Methods Praised", date: "March 22, 2019", image: DUMMY_IMAGE },
]

const MainAccomplishments = () => {
  return (
    <div className="space-y-12">
      <Section title="Awards" icon={<Award className="h-6 w-6" />} items={awards} />
      <Section title="Certifications" icon={<BadgeCheck className="h-6 w-6" />} items={certifications} />
      <Section title="In the News" icon={<Newspaper className="h-6 w-6" />} items={newsCutouts} />
    </div>
  )
}

const Section = ({ title, icon, items }) => (
  <div className="bg-card rounded-lg shadow-lg overflow-hidden">
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-6">
        {icon}
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative h-48 mb-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.year || item.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)

export default MainAccomplishments

