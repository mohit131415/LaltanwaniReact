'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, School, Heart, BookOpen, Briefcase, Building, Users, GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';

const positions = [
  { title: "Founder Trustee", organization: "BBRT International School", icon: School },
  { title: "Founder Trustee", organization: "N.C.T. Convent School, Ulhasnagar", icon: School },
  { title: "Founder", organization: "Jaywanti Notandas Tanwani Charitable Trust", icon: Heart },
  { title: "CEO", organization: "Padma Coaching Classes", icon: Briefcase },
  { title: "Director of Programs", organization: "Padma Institute of Knowledge & Research", icon: BookOpen },
  { title: "Director", organization: "The Nav – Jeevan Co-op Bank Ltd.", icon: Building },
  { title: "Past Educational Director", organization: "Jhulelal Trust School, Ulhasnagar", icon: School },
  { title: "Past President", organization: "Rotary Club of Ulhasnagar Midtown", icon: Users },
  { title: "Past President", organization: "Lion's Club, Ulhasnagar", icon: Users },
  { title: "Lecturer", organization: "Oriental Institute of Management, Vashi", icon: GraduationCap },
  { title: "Lecturer", organization: "Birla College, Kalyan", icon: GraduationCap },
];

const PositionsHeld = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Initial visible cards
  const [expanded, setExpanded] = useState(false); // State to track button toggle

  const handleToggle = () => {
    if (expanded) {
      setVisibleCount(window.innerWidth >= 1024 ? 8 : 4); // Set limit for PC/Mobile
    } else {
      setVisibleCount(positions.length); // Show all cards
    }
    setExpanded(!expanded);
  };

  // Dynamically set visibleCount based on screen width on initial render
  React.useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 8 : 4);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading title="Positions Held" />

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {positions.slice(0, visibleCount).map((position, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {React.createElement(position.icon, { className: "w-12 h-12 text-[#ff5622e0] mb-4" })}
              <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
                {position.title}
              </h3>
              <p className="text-md text-gray-600 text-center">
                {position.organization}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Toggle Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleToggle}
            className="px-6 py-2 bg-[#FF5722] text-white rounded-full hover:bg-[#FF5722] transition duration-300"
          >
            {expanded ? "Show Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PositionsHeld;
