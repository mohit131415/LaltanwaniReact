import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from './SectionHeading'

const Newsletter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading title="Stay Updated" />
        <motion.p
          className="text-xl mb-8 text-center max-w-2xl mx-auto text-secondary-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Subscribe to our newsletter for the latest insights, articles, and updates from Dr. Lal Tanwani.
        </motion.p>
        <motion.form
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded-full sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-primary text-foreground bg-background mb-2 sm:mb-0"
              required
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full sm:rounded-l-none hover:bg-primary/90 transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Newsletter

