import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      className="relative overflow-hidden h-auto"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col-reverse lg:flex-row max-w-7xl mx-auto items-center px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <div className="relative z-10 w-full lg:w-1/2 pb-8 sm:pb-16 lg:pb-20 xl:pb-28">
          <main className="mt-10 sm:mt-16 lg:mt-20">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                <span className="block xl:inline">Dr. Lal Tanwani's</span>{" "}
                <span className="block text-primary xl:inline">Accomplishments</span>
              </h1>
              <p className="mt-4 text-base text-gray-500 sm:mt-5 sm:text-lg md:text-xl">
                Explore the journey of excellence, innovation, and leadership in education.
              </p>
              <p className="mt-6 text-gray-500 text-base sm:text-lg md:text-xl">
                My name is Dr. Lal N. Tanwani, but many know me as Lal Sir. I have dedicated my life
                to the pursuit of knowledge and academic excellence. Over the years, I have earned
                recognition for holding the most educational degrees by an individual, as recorded
                by the World Book of Records London, Asia Book of Records, International Book of
                World Records Bravo, and India Book of Records.
              </p>
            </div>
          </main>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2 flex justify-center mt-5 lg:mb-0">
          <img
            src="https://i.pinimg.com/564x/79/ac/30/79ac3089fabb4e02a86d84fe043a34b2.jpg"
            alt="Dr. Lal Tanwani"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
