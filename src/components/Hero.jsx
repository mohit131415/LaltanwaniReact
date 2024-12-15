import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, Sparkles } from 'lucide-react';
import { TypeAnimation } from "react-type-animation";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import laltanwani from "@/assets/images/laltanwani/dr-lal-tanwani.png";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <MouseParallaxContainer
      className="relative min-h-screen overflow-hidden bg-[#fff5f2] px-4 sm:px-6 lg:px-8 py-12 lg:py-0 flex items-center"
      containerStyles={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden"
      }}
      resetOnLeave
    >
      <MouseParallaxChild
        factorX={0.01}
        factorY={0.01}
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left mt-8 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display leading-tight"
              variants={itemVariants}
            >
              Transforming
              <br className="hidden sm:block" />
              <span className="text-[#ff6600e6]">
                the future
              </span> of
              <br className="hidden sm:block" />
              <TypeAnimation
                sequence={["Excellence", 2000, "Innovation", 2000, "Leadership", 2000, "Education", 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#ff6600e6]"
              />
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Dr. Lal Tanwani: Pioneering educator and visionary leader with 30 years of experience.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-[#ff6600e6] text-white hover:bg-[#ff6600e6]/90 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
              >
                Discover More
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn border-2 border-[#ff6600e6] text-[#ff6600e6] hover:bg-[#ff6600e6]/10 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
              >
                Watch Video
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image and Parallax Children */}
          <motion.div
            className="w-full lg:w-1/2 relative flex justify-center"
            variants={itemVariants}
          >
            <div className="relative aspect-[3/4] w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none lg:h-[calc(100vh-6rem)]">
              <div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fff5f2]" 
                style={{ 
                  background: 'linear-gradient(to bottom, rgba(255, 245, 242, 0) 0%, rgba(255, 245, 242, 0) 70%, rgba(255, 245, 242, 1) 100%)',
                  zIndex: 10
                }}
              ></div>
              <img
                src={laltanwani}
                alt="Dr. Lal Tanwani"
                className="w-full h-full object-contain object-center"
                onLoad={() => setIsLoaded(true)}
              />

              {isLoaded && (
                <>
                  <MouseParallaxChild
                    factorX={0.01}
                    factorY={0.01}
                    className="absolute top-24 sm:top-32 lg:top-40 right-0 sm:-right-4 lg:right-0 z-20 hidden lg:block"
                  >
                    <motion.div 
                      className="bg-white p-3 rounded-2xl shadow-lg w-40 sm:w-48 lg:w-56 transform transition-all duration-300 ease-in-out hover:scale-105"
                      animate={{ y: [0, -15, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-[#ff6600e6]/10 rounded-full">
                          <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-[#ff6600e6]" />
                        </div>
                        <div>
                          <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">11 Degrees</p>
                          <p className="text-xs sm:text-sm text-gray-600">Academic Excellence</p>
                        </div>
                      </div>
                    </motion.div>
                  </MouseParallaxChild>

                  <MouseParallaxChild
                    factorX={0.01}
                    factorY={0.01}
                    className="absolute top-1/3 sm:top-1/3 lg:top-1/2 right-0 sm:-right-4 lg:right-0 z-20"
                  >
                    <motion.div 
                      className="bg-white p-3 rounded-2xl shadow-lg w-40 sm:w-48 lg:w-56 transform transition-all duration-300 ease-in-out hover:scale-105"
                      animate={{ y: [0, -15, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-[#ff6600e6]/10 rounded-full">
                          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-[#ff6600e6]" />
                        </div>
                        <div>
                          <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">30+ Years</p>
                          <p className="text-xs sm:text-sm text-gray-600">of Excellence</p>
                        </div>
                      </div>
                    </motion.div>
                  </MouseParallaxChild>

                  <MouseParallaxChild
                    factorX={0.01}
                    factorY={0.01}
                    className="absolute bottom-24 sm:bottom-32 lg:bottom-24 left-0 sm:-left-4 lg:left-0 z-20"
                  >
                    <motion.div 
                      className="bg-white p-3 rounded-2xl shadow-lg w-40 sm:w-48 lg:w-56 transform transition-all duration-300 ease-in-out hover:scale-105"
                      animate={{ y: [0, -15, 0] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-[#ff6600e6]/10 rounded-full">
                          <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#ff6600e6]" />
                        </div>
                        <div>
                          <p className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">10,000+</p>
                          <p className="text-xs sm:text-sm text-gray-600">Students Mentored</p>
                        </div>
                      </div>
                    </motion.div>
                  </MouseParallaxChild>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </MouseParallaxContainer>
  );
};

export default Hero;
