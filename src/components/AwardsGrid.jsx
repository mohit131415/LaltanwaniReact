import React from 'react'
import { useState } from "react";
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import {AWARD_IMAGES} from "@/constant/constant";

const awards = [
  {
    title: "Ph.D. in Commerce",
    year: "2005",
    description: "University of Mumbai",
    image: AWARD_IMAGES.Award1,
  },
  {
    title: "Ph.D. in Business Policy",
    year: "2007",
    description: "Dravidian University",
    image: AWARD_IMAGES.Award2,
  },
  {
    title: "Ph.D. in Education",
    year: "2009",
    description: "The American University",
    image: AWARD_IMAGES.Award3,
  },
  {
    title: "D.Litt. in Education",
    year: "2012",
    description: "Ballsbridge University",
    image: AWARD_IMAGES.Award4,
  },
  {
    title: "Ph.D. in Commerce",
    year: "2005",
    description: "University of Mumbai",
    image: AWARD_IMAGES.Award5,
  },
  {
    title: "Ph.D. in Business Policy",
    year: "2007",
    description: "Dravidian University",
    image: AWARD_IMAGES.Award6,
  },
  {
    title: "Ph.D. in Education",
    year: "2009",
    description: "The American University",
    image: AWARD_IMAGES.Award7,
  },
  {
    title: "D.Litt. in Education",
    year: "2012",
    description: "Ballsbridge University",
    image: AWARD_IMAGES.Award8,
  },
  {
    title: "D.Litt. in Education",
    year: "2012",
    description: "Ballsbridge University",
    image: AWARD_IMAGES.Award9,
  },
]

const AwardsGrid = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  return (
    <div>
      {/* Awards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className="relative bg-card shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedAward(award)}
            >
              {/* Card Image */}
              <div className="relative h-[60vh]">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-contain"
                />
                {/* Transparent Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>
                {/* Title and Year */}
                <div className="absolute top-0 left-0 p-4 z-20">
                  <h3 className="text-lg font-bold" style={{ color: '#FF5722' }}>
                    {award.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'black' }}>{award.year}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Selected Award */}
      {selectedAward && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedAward(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-card rounded-lg overflow-hidden max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedAward.image}
                alt={selectedAward.title}
                className="w-full h-[60vh] object-contain"
              />
              <div className="absolute top-4 right-4 bg-primary rounded-full p-3 shadow-lg">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#FF5722' }}>
                {selectedAward.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-2" style={{ color: 'black' }}>
                {selectedAward.year}
              </p>
              <p className="text-sm text-muted-foreground">
                {selectedAward.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default AwardsGrid;