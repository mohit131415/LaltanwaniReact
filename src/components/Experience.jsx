import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import { DEGREE_IMAGES } from "@/constant/constant";


const degrees = [
  {
    title: "Bachelor of Commerce",
    year: "1991",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.BachelorofCommerce
  },
  {
    title: "Master of Commerce",
    year: "1994",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.MastersofCommerce
  },
  {
    title: "Bachelor of Education",
    year: "1996",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.BachelorofEducaation
  },
  {
    title: "Master of Commerce (Cost & Works Accounting)",
    year: "1997",
    institution: "University of Pune",
    image: DEGREE_IMAGES.MastersofCommercecostandwork
  },
  {
    title: "Master of Arts (Economics)",
    year: "2002",
    institution: "Madurai Kamaraj University",
    image: DEGREE_IMAGES.MasterofArts
  },
  {
    title: "Master of Philosophy",
    year: "2009",
    institution: "The Global Open University",
    image: DEGREE_IMAGES.MasterofPhilosophy
  },
  {
    title: "Diploma in Value & Spiritual Education",
    year: "2016",
    institution: "Yashwantrao Chavan Maharashtra Open University",
    image: DEGREE_IMAGES.DiplomainValueSpiritualEducation
  },
  {
    title: "Master of Business Administration (Finance)",
    year: "2017",
    institution: "Vinayaka Missions Sikkim University",
    image: DEGREE_IMAGES.MasterofBusinessAdministration
  },
  {
    title: "Doctor of Philosophy (Commerce)",
    year: "2017",
    institution: "Dravidian University",
    image: DEGREE_IMAGES.DoctorofPhilosophy
  },
  {
    title: "Advanced Diploma in Value & Spiritual Education",
    year: "2018",
    institution: "Yashwantrao Chavan Maharashtra Open University",
    image: DEGREE_IMAGES.AdvancedDiplomainValue
  },
  {
    title: "Doctor of Literature",
    year: "2018",
    institution: "Ballsbridge University",
    image: DEGREE_IMAGES.DoctorofLiterature
  },
  {
    title: "Doctor of Philosophy (Business Policy & Administration)",
    year: "2019",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.DoctorofPhilosophyBusiness
  },
  {
    title: "Doctor of Philosophy",
    year: "2021",
    institution: "The American University",
    image: DEGREE_IMAGES.DoctorofPhilosophyAmerican
  },
  {
    title: "Legum Baccalaureus (L. L. B.)",
    year: "2022",
    institution: "University of Mumbai",
    image: DEGREE_IMAGES.LegumBaccalaureus
  }
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showAll, setShowAll] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)
  const [selectedDegree, setSelectedDegree] = useState(null)

  useEffect(() => {
    setIsLargeScreen(window.innerWidth >= 1024)
    
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const visibleDegrees = showAll ? degrees : (isLargeScreen ? degrees.slice(0, 8) : degrees.slice(0, 4))
  const shouldShowViewMore = isLargeScreen ? degrees.length > 8 : degrees.length > 4

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeading title="Academic Excellence" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            A journey of continuous learning and academic achievements spanning multiple disciplines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleDegrees.map((degree, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => setSelectedDegree(degree)}
            >
              <div className="relative aspect-[2/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full z-0" />
                
                <img
                  src={degree.image}
                  alt={degree.title}
                  className="w-full h-full object-contain bg-white p-4 relative z-10"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 z-30">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {degree.title}
                    </h3>
                    <div className="flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm text-white/90">{degree.institution}</p>
                      <span className="text-sm font-medium text-primary-foreground bg-primary/90 px-2 py-0.5 rounded-full w-fit">
                        {degree.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg z-30">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 space-x-4"
        >
          {shouldShowViewMore && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-8 py-3 text-base font-semibold text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition-colors mb-4 md:mb-0"
            >
              {showAll ? 'Show Less' : 'View More'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          )}
          <Link
            to="/accomplishments"
            className="inline-flex items-center px-8 py-3 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            View All Accomplishments
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>

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
              className="bg-card rounded-2xl overflow-hidden max-w-xl w-full shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                <img
                  src={selectedDegree.image}
                  alt={selectedDegree.title}
                  className="w-full h-[700px] object-contain p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-4">{selectedDegree.title}</h3>
                  <div className="space-y-3">
                    <p className="text-xl text-white/90">{selectedDegree.institution}</p>
                    <span className="inline-block text-lg font-medium bg-primary/90 px-4 py-1 rounded-full">
                      {selectedDegree.year}
                    </span>
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Experience

