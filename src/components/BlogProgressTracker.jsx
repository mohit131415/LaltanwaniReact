import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const BlogProgressTracker = () => {
  const [readingProgress, setReadingProgress] = useState(0)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setReadingProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
      }
    }

    window.addEventListener('scroll', updateReadingProgress)
    return () => window.removeEventListener('scroll', updateReadingProgress)
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX, transformOrigin: '0%' }}
      />
      <div className="fixed bottom-8 left-8 bg-background border border-border rounded-full px-3 py-1 text-sm font-medium shadow-lg z-50">
        {readingProgress.toFixed(0)}% read
      </div>
    </>
  )
}

export default BlogProgressTracker

