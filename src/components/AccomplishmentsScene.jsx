import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {
  DEGREE_IMAGES,
  AWARD_IMAGES,
  CERTIFICATE_IMAGES,
} from "@/constant/constant";
import { Award, BookOpen, CheckCircle, GraduationCap } from "lucide-react";
import ItemModal from "./ItemModal";
import HeroSection from "./HeroSection";

const categories = [
  {
    title: "Awards",
    description: "Recognitions and honors received",
    link: "/awards",
    icon: <Award className="h-8 w-8 mr-2" />,
    items: [
      {
        title: "Ph.D. in Commerce",
        year: "2005",
        description: "University of Mumbai",
        image: AWARD_IMAGES.Award1,
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        title: "Ph.D. in Business Policy",
        year: "2007",
        description: "Dravidian University",
        image: AWARD_IMAGES.Award2,
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        title: "Ph.D. in Education",
        year: "2009",
        description: "The American University",
        image: AWARD_IMAGES.Award3,
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        title: "D.Litt. in Education",
        year: "2012",
        description: "Ballsbridge University",
        image: AWARD_IMAGES.Award4,
        icon: <GraduationCap className="h-5 w-5" />,
      },
    ],
  },
  {
    title: "Degrees",
    description: "Academic qualifications and degrees",
    link: "/degrees",
    icon: <BookOpen className="h-8 w-8 mr-2" />,
    items: [
      {
        title: "Bachelor of Commerce",
        year: "1991",
        institution: "University of Mumbai",
        image: DEGREE_IMAGES.BachelorofCommerce,
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        title: "Master of Commerce",
        year: "1994",
        institution: "University of Mumbai",
        image: DEGREE_IMAGES.MastersofCommerce,
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        title: "Bachelor of Education",
        year: "1996",
        institution: "University of Mumbai",
        image: DEGREE_IMAGES.BachelorofEducaation,
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        title: "Master of Commerce (Cost & Works Accounting)",
        year: "1997",
        institution: "University of Pune",
        image: DEGREE_IMAGES.MastersofCommercecostandwork,
        icon: <GraduationCap className="h-5 w-5" />,
      },
    ],
  },

  {
    title: "Certificates",
    description: "Professional qualifications and certifications",
    link: "/certifications",
    icon: <CheckCircle className="h-8 w-8 mr-2" />,
    items: [
      {
        title: "Certified Educational Leader",
        year: "2019",
        description: "Advanced Leadership Program",
        image: CERTIFICATE_IMAGES.Certificate1,
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        title: "Advanced Research Methodology",
        year: "2015",
        description: "Research Excellence Certificate",
        image: CERTIFICATE_IMAGES.Certificate2,
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        title: "Digital Transformation in Education",
        year: "2020",
        description: "EdTech Innovation Program",
        image: CERTIFICATE_IMAGES.Certificate3,
        icon: <GraduationCap className="h-5 w-5" />,
      },
      {
        title: "Educational Policy and Reform",
        year: "2018",
        description: "Policy Leadership Certificate",   
        image: CERTIFICATE_IMAGES.Certificate4,
        icon: <GraduationCap className="h-5 w-5" />,
      },
    ],
  },
];

const AccomplishmentsScene = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <HeroSection />
      {categories.map((category, index) => (
        <CategorySection key={index} category={category} index={index} setSelectedItem={setSelectedItem} />
      ))}
      <ItemModal item={selectedItem} onClose={closeModal} />
    </div>
  );
};

const CategorySection = ({ category, index, setSelectedItem }) => {
  const getIconForItem = (item) => {
    switch (category.title) {
      case "Awards":
        return <Award className="h-5 w-5" />;
      case "Degrees":
        return <BookOpen className="h-5 w-5" />;
      case "Certificates":
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <GraduationCap className="h-5 w-5" />; // Default icon
    }
  };

  return (
    <div id={category.title.toLowerCase()} className="mb-16">
      <motion.h2
        className="text-3xl font-bold mb-6 flex items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {category.icon}
        {category.title}
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {category.items.map((item, itemIndex) => (
          <motion.div
            key={itemIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + itemIndex * 0.1 }}
            className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative aspect-[2/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full z-0" />

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain bg-white p-4 relative z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300 z-30">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </h3>
                  <div className="flex flex-col space-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-white/90">{item.year}</p>
                    <span className="text-sm font-medium text-primary-foreground bg-primary/90 px-2 py-0.5 rounded-full w-fit">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-2.5 shadow-lg z-30">
                {getIconForItem(item)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        className="flex justify-center"
      >
        <Link
          to={`/accomplishments${category.link}`}
          className="mt-8 inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary hover:bg-primary/90"
        >
          View All {category.title}
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  );
};

export default AccomplishmentsScene;
