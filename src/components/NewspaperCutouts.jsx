import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Newspaper, ChevronRight } from 'lucide-react';
import { NEWSPAPER_IMAGES } from "@/constant/constant";

const newspapers = [
  {
    image: NEWSPAPER_IMAGES.news1,
    headline: "Dr. Lal Tanwani Receives Prestigious Peace Award",
    date: "June 28, 2020"
  },
  {
    image: NEWSPAPER_IMAGES.news2,
    headline: "Local Educator Transforms Lives Through Innovation",
    date: "March 15, 2018"
  },
  {
    image: NEWSPAPER_IMAGES.news3,
    headline: "Dr. Tanwani's Vision Shapes Future of Education",
    date: "September 5, 2016"
  },
  {
    image: NEWSPAPER_IMAGES.news4,
    headline: "Groundbreaking Research by Dr. Tanwani Published",
    date: "November 20, 2019"
  },
  {
    image: NEWSPAPER_IMAGES.news5,
    headline: "Dr. Lal Tanwani Honored for Lifetime Achievement",
    date: "February 8, 2021"
  },
  {
    image: NEWSPAPER_IMAGES.news6,
    headline: "Educational Reform Spearheaded by Dr. Tanwani",
    date: "July 12, 2017"
  },
  {
    image: NEWSPAPER_IMAGES.news7,
    headline: "Dr. Tanwani's Vision Shapes Future of Education",
    date: "September 5, 2016"
  },
  {
    image: NEWSPAPER_IMAGES.news8,
    headline: "Groundbreaking Research by Dr. Tanwani Published",
    date: "November 20, 2019"
  },
  {
    image: NEWSPAPER_IMAGES.news9,
    headline: "Dr. Lal Tanwani Honored for Lifetime Achievement",
    date: "February 8, 2021"
  },
  {
    image: NEWSPAPER_IMAGES.news10,
    headline: "Educational Reform Spearheaded by Dr. Tanwani",
    date: "July 12, 2017"
  },
  {
    image: NEWSPAPER_IMAGES.news11,
    headline: "Dr. Tanwani's Vision Shapes Future of Education",
    date: "September 5, 2016"
  },
  {
    image: NEWSPAPER_IMAGES.news12,
    headline: "Groundbreaking Research by Dr. Tanwani Published",
    date: "November 20, 2019"
  },
  {
    image: NEWSPAPER_IMAGES.news13,
    headline: "Dr. Lal Tanwani Honored for Lifetime Achievement",
    date: "February 8, 2021"
  },
  {
    image: NEWSPAPER_IMAGES.news14,
    headline: "Educational Reform Spearheaded by Dr. Tanwani",
    date: "July 12, 2017"
  },
  {
    image: NEWSPAPER_IMAGES.news15,
    headline: "Dr. Tanwani's Vision Shapes Future of Education",
    date: "September 5, 2016"
  },
  {
    image: NEWSPAPER_IMAGES.news16,
    headline: "Groundbreaking Research by Dr. Tanwani Published",
    date: "November 20, 2019"
  },
  {
    image: NEWSPAPER_IMAGES.news17,
    headline: "Dr. Lal Tanwani Honored for Lifetime Achievement",
    date: "February 8, 2021"
  }
]

const NewspaperCutouts = () => {
  const [visibleNews, setVisibleNews] = useState(4)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPaper, setSelectedPaper] = useState(null)

  const handleOpen = (paper) => {
    setSelectedPaper(paper)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setSelectedPaper(null)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {newspapers.slice(0, visibleNews).map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: -20, rotate: 5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 relative"
                onClick={() => handleOpen(paper)}
              >
                <img
                  src={paper.image}
                  alt={paper.headline}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-[#FF5722] p-2 rounded-bl-lg">
                  <Newspaper className="text-white h-5 w-5" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <h3 className="text-lg font-bold mb-2">{paper.headline}</h3>
                  <p className="text-sm text-muted-foreground">{paper.date}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="text-center mt-12">
          {visibleNews < newspapers.length ? (
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleNews(visibleNews + 4)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              View More
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.button>
          ) : (
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleNews(4)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              View Less
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.button>
          )}
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleClose}
        >
          <div className="bg-white p-4 rounded-lg w-1/2 h-auto max-h-[70vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPaper.image} alt={selectedPaper.headline} className="w-full h-auto object-cover" />
            <h3 className="text-lg font-bold mb-2">{selectedPaper.headline}</h3>
            <p className="text-sm text-muted-foreground">{selectedPaper.date}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default NewspaperCutouts