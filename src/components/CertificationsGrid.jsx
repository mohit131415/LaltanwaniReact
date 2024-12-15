import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge, X } from "lucide-react";
import { CERTIFICATE_IMAGES } from "@/constant/constant";

const certifications = [
  {
    title: "Certified Educational Leader",
    year: "2019",
    description: "Advanced Leadership Program",
    image: CERTIFICATE_IMAGES.Certificate1,
  },
  {
    title: "Advanced Research Methodology",
    year: "2015",
    description: "Research Excellence Certificate",
    image: CERTIFICATE_IMAGES.Certificate2,
  },
  {
    title: "Digital Transformation in Education",
    year: "2020",
    description: "EdTech Innovation Program",
    image: CERTIFICATE_IMAGES.Certificate3,
  },
  {
    title: "Educational Policy and Reform",
    year: "2018",
    description: "Policy Leadership Certificate",
    image: CERTIFICATE_IMAGES.Certificate4,
  },
  {
    title: "International Book of World Records Bravo",
    year: "2023",
    description: "Maximum Educational Degrees Achieved by An Individual",
    image: CERTIFICATE_IMAGES.Certificate5,
  },
  {
    title: "Grandmaster Certification",
    year: "2021",
    description: "Asia Book of Records",
    image: CERTIFICATE_IMAGES.Certificate6,
  },
  {
    title: "Maximum Educational Degrees Held by an Individual",
    year: "2021",
    description: "World Book of Records, London",
    image: CERTIFICATE_IMAGES.Certificate7,
  },
  {
    title: "Nelson Mandela Nobel Peace Award",
    year: "2020",
    description: "For Education & Social Activist",
    image: CERTIFICATE_IMAGES.Certificate8,
  },
  {
    title: "Certificate of Excellence",
    year: "2020",
    description: "Global Peace For Making India Sustainable Developed & Strong",
    image: CERTIFICATE_IMAGES.Certificate9,
  },
  {
    title: "Indo Asia Award for Excellence in Education",
    year: "2019",
    description: "Dubai (U.A.E.)",
    image: CERTIFICATE_IMAGES.Certificate10,
  },
  {
    title: "International Achievers Award for Education Excellence",
    year: "2018",
    description: "Thailand",
    image: CERTIFICATE_IMAGES.Certificate11,
  },
  {
    title: "Award for Outstanding Research Paper",
    year: "2018",
    description: "University of Mumbai",
    image: CERTIFICATE_IMAGES.Certificate12,
  },
  {
    title: "Dr. A. P. J. Abdul Kalam Lifetime Achievement Award",
    year: "2018",
    description:
      "International Institute for Social & Economic Reforms, Bengaluru",
    image: CERTIFICATE_IMAGES.Certificate13,
  },
  {
    title: "ET Business Icons",
    year: "2020",
    description: "By Neil Nitin Mukesh",
    image: CERTIFICATE_IMAGES.Certificate14,
  },
  {
    title: "Citation Award for Best Teacher",
    year: "2018",
    description: "From University of Mumbai",
    image: CERTIFICATE_IMAGES.Certificate15,
  },
  {
    title: "Bharat Ratna Dr. Radhakrishan Gold Medal Award",
    year: "2018",
    description: "Chennai",
    image: CERTIFICATE_IMAGES.Certificate16,
  },
  {
    title: "Shiksha Bharati Award",
    year: "2017",
    description: "New Delhi",
    image: CERTIFICATE_IMAGES.Certificate17,
  },
  {
    title: "Best Teaching Award",
    year: "2017",
    description: "By Indian Education Awards, Delhi",
    image: CERTIFICATE_IMAGES.Certificate18,
  },
  {
    title: "Certified Educational Leader",
    year: "2019",
    description: "Advanced Leadership Program",
    image: CERTIFICATE_IMAGES.Certificate19,
  },
  {
    title: "Advanced Research Methodology",
    year: "2015",
    description: "Research Excellence Certificate",
    image: CERTIFICATE_IMAGES.Certificate20,
  },
  {
    title: "Digital Transformation in Education",
    year: "2020",
    description: "EdTech Innovation Program",
    image: CERTIFICATE_IMAGES.Certificate21,
  },
  {
    title: "Educational Policy and Reform",
    year: "2018",
    description: "Policy Leadership Certificate",
    image: CERTIFICATE_IMAGES.Certificate22,
  },
  {
    title: "International Book of World Records Bravo",
    year: "2023",
    description: "Maximum Educational Degrees Achieved by An Individual",
    image: CERTIFICATE_IMAGES.Certificate23,
  },
  {
    title: "Grandmaster Certification",
    year: "2021",
    description: "Asia Book of Records",
    image: CERTIFICATE_IMAGES.Certificate24,
  },
  {
    title: "Maximum Educational Degrees Held by an Individual",
    year: "2021",
    description: "World Book of Records, London",
    image: CERTIFICATE_IMAGES.Certificate25,
  },
  {
    title: "Nelson Mandela Nobel Peace Award",
    year: "2020",
    description: "For Education & Social Activist",
    image: CERTIFICATE_IMAGES.Certificate26,
  },
  {
    title: "Certificate of Excellence",
    year: "2020",
    description: "Global Peace For Making India Sustainable Developed & Strong",
    image: CERTIFICATE_IMAGES.Certificate27,
  },
  {
    title: "Indo Asia Award for Excellence in Education",
    year: "2019",
    description: "Dubai (U.A.E.)",
    image: CERTIFICATE_IMAGES.Certificate28,
  },
  {
    title: "International Achievers Award for Education Excellence",
    year: "2018",
    description: "Thailand",
    image: CERTIFICATE_IMAGES.Certificate29,
  },
  {
    title: "Award for Outstanding Research Paper",
    year: "2018",
    description: "University of Mumbai",
    image: CERTIFICATE_IMAGES.Certificate30,
  },
  {
    title: "Dr. A. P. J. Abdul Kalam Lifetime Achievement Award",
    year: "2018",
    description:
      "International Institute for Social & Economic Reforms, Bengaluru",
    image: CERTIFICATE_IMAGES.Certificate31,
  },
  {
    title: "ET Business Icons",
    year: "2020",
    description: "By Neil Nitin Mukesh",
    image: CERTIFICATE_IMAGES.Certificate32,
  },
  {
    title: "Citation Award for Best Teacher",
    year: "2018",
    description: "From University of Mumbai",
    image: CERTIFICATE_IMAGES.Certificate33,
  },
  {
    title: "Bharat Ratna Dr. Radhakrishan Gold Medal Award",
    year: "2018",
    description: "Chennai",
    image: CERTIFICATE_IMAGES.Certificate34,
  },
  {
    title: "Shiksha Bharati Award",
    year: "2017",
    description: "New Delhi",
    image: CERTIFICATE_IMAGES.Certificate35,
  },
  {
    title: "Best Teaching Award",
    year: "2017",
    description: "By Indian Education Awards, Delhi",
    image: CERTIFICATE_IMAGES.Certificate36,
  },
  {
    title: "Certified Educational Leader",
    year: "2019",
    description: "Advanced Leadership Program",
    image: CERTIFICATE_IMAGES.Certificate37,
  },
  {
    title: "Advanced Research Methodology",
    year: "2015",
    description: "Research Excellence Certificate",
    image: CERTIFICATE_IMAGES.Certificate38,
  },
  {
    title: "Digital Transformation in Education",
    year: "2020",
    description: "EdTech Innovation Program",
    image: CERTIFICATE_IMAGES.Certificate39,
  },
  {
    title: "Educational Policy and Reform",
    year: "2018",
    description: "Policy Leadership Certificate",
    image: CERTIFICATE_IMAGES.Certificate40,
  },
  {
    title: "International Book of World Records Bravo",
    year: "2023",
    description: "Maximum Educational Degrees Achieved by An Individual",
    image: CERTIFICATE_IMAGES.Certificate41,
  },
  {
    title: "Grandmaster Certification",
    year: "2021",
    description: "Asia Book of Records",
    image: CERTIFICATE_IMAGES.Certificate42,
  },
  {
    title: "Maximum Educational Degrees Held by an Individual",
    year: "2021",
    description: "World Book of Records, London",
    image: CERTIFICATE_IMAGES.Certificate43,
  },
  {
    title: "Nelson Mandela Nobel Peace Award",
    year: "2020",
    description: "For Education & Social Activist",
    image: CERTIFICATE_IMAGES.Certificate44,
  },
  {
    title: "Certificate of Excellence",
    year: "2020",
    description: "Global Peace For Making India Sustainable Developed & Strong",
    image: CERTIFICATE_IMAGES.Certificate45,
  },
  {
    title: "Indo Asia Award for Excellence in Education",
    year: "2019",
    description: "Dubai (U.A.E.)",
    image: CERTIFICATE_IMAGES.Certificate46,
  },
];

const CertificationsGrid = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className="bg-card shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedCertification(cert)}
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-[482px] object-contain"
                />
                <div className="absolute top-2 right-2 bg-primary rounded-full p-2">
                  <Badge className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="p-4 h-[155px]">
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.year}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCertification && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCertification(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="bg-card rounded-lg shadow-lg max-w-2xl w-full overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-6">
                <button
                  className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setSelectedCertification(null)}
                >
                  <X className="h-6 w-6" />
                </button>
                <img
                  src={selectedCertification.image}
                  alt={selectedCertification.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">
                  {selectedCertification.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {selectedCertification.year}
                </p>
                <p>{selectedCertification.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CertificationsGrid;
