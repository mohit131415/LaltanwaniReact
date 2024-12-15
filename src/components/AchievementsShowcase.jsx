import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Award, ChevronLeft, ChevronRight } from 'lucide-react'

const achievements = [
  { type: 'degree', title: "Ph.D. in Commerce", description: "University of Mumbai" },
  { type: 'degree', title: "Ph.D. in Business Policy & Administration", description: "Dravidian University" },
  { type: 'degree', title: "Ph.D. in Education & Social Services", description: "The American University" },
  { type: 'award', title: "Nelson Mandela Nobel Peace Award 2020", description: "For Education & Social Activism" },
  { type: 'award', title: "Certificate of Excellence", description: "For Global Peace Contribution" },
  { type: 'award', title: "Best Teaching Award", description: "Indian Education Awards" },
  { type: 'degree', title: "D.Litt. in Education", description: "Ballsbridge University" },
  { type: 'degree', title: "LL.B.", description: "University of Mumbai" },
  { type: 'award', title: "Indo Asia Award", description: "For Excellence in Education" },
]

const AchievementCard = ({ achievement, index, direction }) => (
  <motion.div
    initial={{ opacity: 0, rotateY: direction === 'left' ? -90 : 90, z: -300 }}
    animate={{ opacity: 1, rotateY: 0, z: 0 }}
    exit={{ opacity: 0, rotateY: direction === 'left' ? 90 : -90, z: -300 }}
    transition={{ duration: 0.5 }}
    style={{ perspective: 1000 }}
    className="bg-card rounded-lg shadow-lg h-full"
  >
    <div className="p-6">
      <div className="flex items-center mb-4">
        {achievement.type === 'degree' ? (
          <GraduationCap className="mr-2 text-primary" />
        ) : (
          <Award className="mr-2 text-primary" />
        )}
        <h3 className="text-2xl font-semibold">{achievement.title}</h3>
      </div>
      <p className="text-muted-foreground">{achievement.description}</p>
      <div className="mt-4">
        <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-semibold">
          {achievement.type === 'degree' ? 'Education' : 'Achievement'}
        </span>
      </div>
    </div>
  </motion.div>
)

const AchievementsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('left')

  const nextAchievement = () => {
    setDirection('left')
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length)
  }

  const prevAchievement = () => {
    setDirection('right')
    setCurrentIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length)
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <AchievementCard 
            key={currentIndex} 
            achievement={achievements[currentIndex]} 
            index={currentIndex}
            direction={direction}
          />
        </AnimatePresence>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-16">
        <button
          onClick={prevAchievement}
          className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-16">
        <button
          onClick={nextAchievement}
          className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="text-center mt-8">
        <p className="text-muted-foreground">
          Achievement {currentIndex + 1} of {achievements.length}
        </p>
      </div>
    </div>
  )
}

export default AchievementsShowcase

