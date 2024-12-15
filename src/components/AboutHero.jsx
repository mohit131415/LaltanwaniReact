import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Users, Clock, Award, ChevronDown } from "lucide-react";
import { Badge } from "./ui/badge";
import laltanwani from "@/assets/images/laltanwani/lal-tanwani.jpeg";

const AboutHero = () => {
  const { scrollY } = useScroll();

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-background overflow-hidden py-12 mt-8">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-repeat opacity-5"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#FF5722]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#FF9800]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF5722]/3 rounded-full blur-3xl"></div>

      {/* Content Wrapper */}
      <div className="container mx-auto px-6 sm:px-10 relative z-10 h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-16 lg:mt-0">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-2/5 order-1 lg:order-2"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#FF5722]/10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={laltanwani}
                  alt="Dr. Lal Tanwani"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-3/5 space-y-8 order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-black">
              Dr. Lal Tanwani
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-muted-foreground">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                {[
                  "Motivator",
                  "Academician",
                  "Educator",
                  "Career Coach",
                  "Mentor",
                ].map((role, index) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="inline-block"
                  >
                    {role}
                    {index < 4 && (
                      <span className="mx-2 text-muted-foreground/60">|</span>
                    )}
                  </motion.span>
                ))}
              </motion.span>
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                "Founder Trustee, Padma International School",
                "CMD, Padma Institute of Knowledge",
                "Advisory Council, Central Board of Film Certification",
              ].map((position, index) => (
                <motion.div
                  key={position}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-[#FF5722]/10 text-[#FF5722] hover:bg-[#FF5722]/20 text-sm py-2 px-3 rounded-md"
                  >
                    {position}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-4">
          <StatCard
            icon={GraduationCap}
            number="14+"
            text="Degrees"
            scrollY={scrollY}
          />
          <StatCard
            icon={Users}
            number="50,000+"
            text="Students Taught"
            scrollY={scrollY}
          />
          <StatCard
            icon={Clock}
            number="30+"
            text="Years Experience"
            scrollY={scrollY}
          />
          <StatCard
            icon={Award}
            number="20+"
            text="Awards Received"
            scrollY={scrollY}
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex items-center justify-center mb-10"
      >
        <ChevronDown
          className="w-10 h-10 text-[#FF5722] animate-bounce transition-transform duration-300 ease-in-out transform hover:scale-125"
        />
      </motion.div>
    </section>
  );
};

const StatCard = ({ icon: Icon, number, text, scrollY }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768; // Mobile detection
  const y = useTransform(scrollY, [0, 300], [0, isMobile ? 0 : -50]); // Static on mobile

  return (
    <motion.div
      style={!isMobile ? { y } : {}} // Disable y transform for mobile
      initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 50 }}
      animate={{ opacity: 1, y: isMobile ? 0 : 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center space-y-4 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-[#FF5722]/10 hover:border-[#FF5722]/30 transition-all duration-300 group"
    >
      <motion.div
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FF5722]/10 group-hover:bg-[#FF5722]/20 transition-colors duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <Icon className="h-8 w-8 text-[#FF5722]" />
      </motion.div>
      <motion.span
        className="text-3xl sm:text-4xl font-bold text-[#FF5722]"
        whileHover={{ scale: 1.1 }}
      >
        {number}
      </motion.span>
      <p className="text-lg text-muted-foreground">{text}</p>
    </motion.div>
  );
};

export default AboutHero;
