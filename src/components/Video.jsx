import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play, X, Sparkles, Star, Trophy } from 'lucide-react'
import SectionHeading from './SectionHeading'

const Video = () => {
  const videoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen)
  }

  const features = [
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "Innovative Teaching",
      description: "Pioneering modern educational methodologies"
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "Expert Guidance",
      description: "Personalized mentoring for career growth"
    },
    {
      icon: <Trophy className="h-6 w-6 text-primary" />,
      title: "Proven Success",
      description: "Track record of transforming careers"
    }
  ]

  return (
    <motion.section
      ref={videoRef}
      className="relative overflow-hidden bg-gradient-to-br from-background to-secondary/20"
      style={{ opacity, scale }}
      >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      <div className="relative container mx-auto px-4 py-20">
      <SectionHeading title="Inspiring the Next Generation" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground">
                Through education, innovation, and leadership, we're shaping the future of learning and entrepreneurship.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-secondary/50 backdrop-blur-sm"
                >
                  <div className="p-2 rounded-lg bg-secondary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-2xl overflow-hidden bg-secondary/50 backdrop-blur-sm border border-border"
          >
            <iframe
              src="https://player.vimeo.com/video/1038249706?autoplay=1&loop=1&background=1"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleModalToggle}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl transition-all duration-500 group-hover:bg-primary/30" />
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white shadow-lg">
                  <Play className="h-8 w-8 ml-1" />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={handleModalToggle}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://player.vimeo.com/video/1038249706?autoplay=1"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  )
}

export default Video

