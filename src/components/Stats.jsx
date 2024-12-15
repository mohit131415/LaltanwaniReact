import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Clock, BookOpen, Award } from 'lucide-react'
import SectionHeading from './SectionHeading'

const stats = [
  { 
    label: 'Degrees', 
    value: 14,
    icon: <GraduationCap className="h-8 w-8" />,
    description: 'Academic qualifications across multiple disciplines'
  },
  { 
    label: 'Years of Experience', 
    value: 30,
    icon: <Clock className="h-8 w-8" />,
    description: 'Dedicated years in education and leadership'
  },
  { 
    label: 'Publications', 
    value: 50,
    icon: <BookOpen className="h-8 w-8" />,
    description: 'Research papers and educational publications'
  },
  { 
    label: 'Awards', 
    value: 30,
    icon: <Award className="h-8 w-8" />,
    description: 'Recognitions for excellence in education'
  },
]

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let currentValue = 0;
        const increment = Math.ceil(stat.value / 100);
        const interval = setInterval(() => {
          currentValue += increment;
          if (currentValue >= stat.value) {
            currentValue = stat.value;
            clearInterval(interval);
          }
          const element = document.getElementById(`stat-${index}`);
          if (element) {
            element.innerText = currentValue.toString();
          }
        }, 30);
      });
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-20 from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <SectionHeading title="Achievements at a Glance" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent to-transparent rounded-xl blur-xl transition-all duration-500 group-hover:from-primary/5 group-hover:to-primary/0 group-hover:bg-primary/10" />
              <div className="relative p-8 rounded-xl bg-card border border-border">
                <div className="text-primary mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2 text-foreground">
                  <span id={`stat-${index}`}>0</span>+
                </h3>
                <p className="text-xl font-medium text-foreground mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

