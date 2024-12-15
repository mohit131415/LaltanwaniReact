import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

const degrees = [
  "Ph.D. in Commerce",
  "Ph.D. in Business Policy & Administration",
  "Ph.D. in Education & Social Services",
  "D.Litt. in Education",
  "LL.B.",
  "M.B.A. in Finance",
  "M.A. in Economics",
  "M.Phil. in Commerce",
  "M.Com. in Management",
  "M.Com. in Financial Accounting",
  "B.Ed.",
  "Diploma in Value Education",
  "Advance Diploma in Value Education",
  "B.Com."
]

const awards = [
  "Nelson Mandela Nobel Peace Award 2020",
  "Certificate of Excellence for Global Peace",
  "Best Teaching Award",
  "Indo Asia Award for Excellence in Education",
  "International Achievers Award for Education Excellence",
  "Dr. A. P. J. Abdul Kalam Life time Achievement Award",
  "Bharat Ratna Dr. Radhakrishan Goldmedal Award",
  "Shiksha Bharati Award",
  "Mahatma Gandhi Leadership Award",
  "International Brooklyn Award"
]

const AccomplishmentItem = ({ title, type }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="bg-card rounded-lg shadow-lg mb-4 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-2">
          {type === 'degree' ? (
            <GraduationCap className="mr-2 text-primary" />
          ) : (
            <Award className="mr-2 text-primary" />
          )}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          {type === 'degree'
            ? 'Educational Qualification'
            : 'Award & Recognition'}
        </p>
        <p className="mt-2">
          {type === 'degree'
            ? "This degree represents Dr. Lal Tanwani's commitment to continuous learning and academic excellence."
            : "This award recognizes Dr. Lal Tanwani's outstanding contributions to education and social service."}
        </p>
        <div className="mt-4">
          <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-semibold">
            {type === 'degree' ? 'Education' : 'Achievement'}
          </span>
        </div>
      </div>
    </div>
  </motion.div>
)

const AccomplishmentsContent = () => {
  const [showAll, setShowAll] = useState(false)
  const displayedDegrees = showAll ? degrees : degrees.slice(0, 5)
  const displayedAwards = showAll ? awards : awards.slice(0, 5)

  return (
    <div>
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Educational Qualifications</h2>
        {displayedDegrees.map((degree, index) => (
          <AccomplishmentItem key={index} title={degree} type="degree" />
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Awards and Recognitions</h2>
        {displayedAwards.map((award, index) => (
          <AccomplishmentItem key={index} title={award} type="award" />
        ))}
      </section>

      {!showAll && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Show All Accomplishments
          </button>
        </div>
      )}
    </div>
  )
}

export default AccomplishmentsContent

