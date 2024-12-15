import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AccomplishmentTimeline from '../components/AccomplishmentTimeline'
import AccomplishmentDetails from '../components/AccomplishmentDetails'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'

const DUMMY_IMAGE = "/placeholder.svg?height=400&width=300"

const accomplishments = [
  {
    title: "Bachelor of Commerce",
    year: "1991",
    institution: "University of Mumbai",
    image: DUMMY_IMAGE
  },
  {
    title: "Master of Commerce",
    year: "1994",
    institution: "University of Mumbai",
    image: DUMMY_IMAGE
  },
  {
    title: "Bachelor of Education",
    year: "1996",
    institution: "University of Mumbai",
    image: DUMMY_IMAGE
  },
  {
    title: "Master of Commerce (Cost & Works Accounting)",
    year: "1997",
    institution: "University of Pune",
    image: DUMMY_IMAGE
  },
  {
    title: "Master of Arts (Economics)",
    year: "2002",
    institution: "Madurai Kamaraj University",
    image: DUMMY_IMAGE
  },
  {
    title: "Master of Philosophy",
    year: "2009",
    institution: "The Global Open University",
    image: DUMMY_IMAGE
  },
  {
    title: "Diploma in Value & Spiritual Education",
    year: "2016",
    institution: "Yashwantrao Chavan Maharashtra Open University",
    image: DUMMY_IMAGE
  },
  {
    title: "Master of Business Administration (Finance)",
    year: "2017",
    institution: "Vinayaka Missions Sikkim University",
    image: DUMMY_IMAGE
  },
  {
    title: "Doctor of Philosophy (Commerce)",
    year: "2017",
    institution: "Dravidian University",
    image: DUMMY_IMAGE
  },
  {
    title: "Advanced Diploma in Value & Spiritual Education",
    year: "2018",
    institution: "Yashwantrao Chavan Maharashtra Open University",
    image: DUMMY_IMAGE
  },
  {
    title: "Doctor of Literature",
    year: "2018",
    institution: "Ballsbridge University",
    image: DUMMY_IMAGE
  },
  {
    title: "Doctor of Philosophy (Business Policy & Administration)",
    year: "2019",
    institution: "University of Mumbai",
    image: DUMMY_IMAGE
  },
  {
    title: "Doctor of Philosophy",
    year: "2021",
    institution: "The American University",
    image: DUMMY_IMAGE
  },
  {
    title: "Legum Baccalaureus (L. L. B.)",
    year: "2022",
    institution: "University of Mumbai",
    image: DUMMY_IMAGE
  }
]

const TimelinePage = () => {
  const [selectedAccomplishment, setSelectedAccomplishment] = useState(null)

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
        Academic Journey Timeline
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <AccomplishmentTimeline 
            accomplishments={accomplishments}
            onSelect={setSelectedAccomplishment}
            showImage={true}
          />
        </div>
        <div className="lg:w-1/2">
          {selectedAccomplishment ? (
            <AccomplishmentDetails accomplishment={selectedAccomplishment} />
          ) : (
            <div className="h-full flex items-center justify-center text-muted-foreground">
              Select an accomplishment to view details
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TimelinePage

