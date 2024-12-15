import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import {DEGREE_IMAGES} from "@/constant/constant";

const degrees = [
  {
    title: "Bachelor of Commerce",
    year: "1991",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.BachelorofCommerce,
  },
  {
    title: "Master of Commerce",
    year: "1994",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.MastersofCommerce,
  },
  {
    title: "Bachelor of Education",
    year: "1996",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.BachelorofEducaation,
  },
  {
    title: "Master of Commerce (Cost & Works Accounting)",
    year: "1997",
    institution: "University of Pune",
    image: DEGREE_IMAGES.MastersofCommercecostandwork,
  },
  {
    title: "Master of Arts (Economics)",
    year: "2002",
    institution: "Madurai Kamaraj University",
    image: DEGREE_IMAGES.MasterofArts,
  },
  {
    title: "Master of Philosophy",
    year: "2009",
    institution: "The Global Open University",
    image: DEGREE_IMAGES.MasterofPhilosophy,
  },
  {
    title: "Diploma in Value & Spiritual Education",
    year: "2016",
    institution: "Yashwantrao Chavan Maharashtra Open University",
    image: DEGREE_IMAGES.DiplomainValueSpiritualEducation,
  },
  {
    title: "Master of Business Administration (Finance)",
    year: "2017",
    institution: "Vinayaka Missions Sikkim University",
    image: DEGREE_IMAGES.MasterofBusinessAdministration,
  },
  {
    title: "Doctor of Philosophy (Commerce)",
    year: "2017",
    institution: "Dravidian University",
    image: DEGREE_IMAGES.DoctorofPhilosophy,
  },
  {
    title: "Advanced Diploma in Value & Spiritual Education",
    year: "2018",
    institution: "Yashwantrao Chavan Maharashtra Open University",
    image: DEGREE_IMAGES.AdvancedDiplomainValue,
  },
  {
    title: "Doctor of Literature",
    year: "2018",
    institution: "Ballsbridge University",
    image: DEGREE_IMAGES.DoctorofLiterature,
  },
  {
    title: "Doctor of Philosophy (Business Policy & Administration)",
    year: "2019",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.DoctorofPhilosophyBusiness,
  },
  {
    title: "Doctor of Philosophy",
    year: "2021",
    institution: "The American University",
    image: DEGREE_IMAGES.DoctorofPhilosophyAmerican,
  },
  {
    title: "Legum Baccalaureus (L. L. B.)",
    year: "2022",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.LegumBaccalaureus,
  },
];

const DegreesGrid = () => {
  const [selectedDegree, setSelectedDegree] = useState(null);

  return (
    <div>
      {/* Degrees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {degrees.map((degree, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className="relative bg-card shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedDegree(degree)}
            >
              {/* Card Image with Overlay */}
              <div className="relative h-[60vh]">
                <img
                  src={degree.image}
                  alt={degree.title}
                  className="w-full h-full object-contain"
                />
                {/* Transparent Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10"></div>
                {/* New Blur Overlay */}
                <div className="absolute inset-0 backdrop-blur-md z-0 h-24"></div>
                {/* Degree Info Overlay */}
                <div className="absolute top-0 left-0 p-4 z-20">
                  <h3 className="text-lg font-bold" style={{ color: '#FF5722' }}>
                    {degree.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'black' }}>{degree.year}</p>
                  <p className="text-sm" style={{ color: 'black' }}>{degree.institution}</p>
                </div>
                {/* Icon on Top Right */}
                <div className="absolute top-4 right-4 bg-primary rounded-full p-3 z-20">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Selected Degree */}
      {selectedDegree && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedDegree(null)}
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
                src={selectedDegree.image}
                alt={selectedDegree.title}
                className="w-full h-[60vh] object-contain p-4"
              />
              <div className="absolute top-4 right-4 bg-primary rounded-full p-3 shadow-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">
                {selectedDegree.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-2">
                {selectedDegree.year}
              </p>
              <p className="text-sm text-muted-foreground">
                {selectedDegree.institution}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default DegreesGrid;