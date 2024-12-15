import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SectionHeading from './SectionHeading'

const testimonials = [
  {
    name: "John Doe",
    role: "Former Student",
    content: "Dr. Lal Tanwani's guidance has been instrumental in shaping my career. His insights and mentorship are truly invaluable.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Jane Smith",
    role: "Colleague",
    content: "Working alongside Dr. Tanwani has been an inspiring experience. His dedication to education is unparalleled.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Alex Johnson",
    role: "Education Administrator",
    content: "Dr. Tanwani's contributions to the field of education have set new standards for excellence and innovation.",
    avatar: "/placeholder.svg?height=40&width=40"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="What People Say" />
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-card shadow-lg rounded-lg p-6 text-center">
                <p className="text-lg mb-6">"{testimonials[currentIndex].content}"</p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

