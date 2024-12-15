import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target, Users, ArrowRight } from "lucide-react";

const visionData = {
  vision: {
    icon: <Lightbulb className="h-8 w-8 text-[#ff6600e6]" />,
    title: "Vision",
    mainText:
      "To set excellent academic standards and deliver educational leadership for all students of our esteemed Nation.",
    points: [
      "Foster a culture of innovation and continuous learning",
      "Develop future leaders who can tackle global challenges",
      "Create an inclusive educational environment that celebrates diversity",
      "Promote interdisciplinary approaches to solve complex problems",
    ],
  },
  mission: {
    icon: <Target className="h-8 w-8 text-[#ff6600e6]" />,
    title: "Mission",
    mainText:
      "To address diurnal activities with supremacy, bringing out proficient achievements from the capability of students while bringing notoriety for the institution.",
    points: [
      "Implement cutting-edge teaching methodologies",
      "Provide personalized mentoring and guidance to each student",
      "Collaborate with industry leaders to ensure practical, relevant education",
      "Encourage research and innovation across all academic disciplines",
    ],
  },
  approach: {
    icon: <Users className="h-8 w-8 text-[#ff6600e6]" />,
    title: "Approach",
    mainText:
      "Dedicated to the Education Fraternity for more than Three Decades, aiming to continue benefiting the Growth of Students.",
    points: [
      "Employ a student-centric approach to education",
      "Integrate technology seamlessly into the learning process",
      "Foster a supportive community that nurtures personal and professional growth",
      "Continuously adapt to the evolving needs of the global job market",
    ],
  },
};

const Vision = () => {
  return (
    <section className="py-4 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {Object.entries(visionData).map(([key, data], index) => (
            <VisionCard key={key} {...data} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const VisionCard = ({ icon, title, mainText, points, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      duration: 0.6,
      delay: index * 0.2,
      type: "spring",
      stiffness: 100,
    }}
    whileHover={{
      scale: 1.05,
      rotate: 1,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
    }}
    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
  >
    <motion.div
      className="flex flex-col items-center mb-6"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 150,
        delay: index * 0.3,
      }}
    >
      {/* Parallax Motion Effect for the Icon */}
      <motion.div
        animate={{
          y: [0, -10, 0], // Up and down movement
        }}
        transition={{
          duration: 2, // Total time for one cycle
          repeat: Infinity, // Infinite loop
          repeatType: "loop", // Smooth looping
        }}
        className="mb-4"
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </motion.div>

    <p className="text-gray-600 text-center mb-8">{mainText}</p>

    <ul className="space-y-4">
      {points.map((point, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.3 + i * 0.1,
          }}
          className="flex items-start gap-3"
        >
          <ArrowRight className="h-5 w-5 text-[#ff6600e6] shrink-0 mt-0.5" />
          <span className="text-gray-600">{point}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default Vision;
