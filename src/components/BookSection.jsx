import { motion } from 'framer-motion'; // Import motion from framer-motion
import { FaBookmark, FaArrowDown } from 'react-icons/fa'; // Import icons
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const chapters = [
  { title: "Introduction to Vedic Culture", content: "An unknown fact about India..." },
  { title: "Contributions to Mathematics", content: "Many people do not realize..." },
  { title: "Sanskrit Language", content: "Undoubtedly, the greatest contribution..." },
  { title: "Astronomy", content: "According to Cassini and Jean-Claude Bailly..." },
  { title: "Plastic Surgery", content: "Regarding surgery, known as plastic surgery..." },
  { title: "Textile", content: "The spread of cotton to England..." }
];

const BookSection = () => {
  // Define the animation for the icons
  const iconAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [0, 10, 0], // Animate up and down
      transition: { duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' },
    },
  };

  return (
    <section className="py-4 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Text and Book Summary */}
          <div>
            <h3 className="text-2xl font-bold text-[#FF5722] mb-4">Leading Yesterday, Leading Tomorrow</h3>
            <p className="mb-6 text-muted-foreground">
              This book is mainly based on Power of India and India's contribution to the world in the growth of all Generations. I have mainly focused on these topics in my book:
            </p>
            <ul className="list-disc list-inside mb-6 text-muted-foreground">
              <li>India's Contribution in Growing of All Fields</li>
              <li>Indian Culture and Vedic Religious</li>
              <li>Great Leaders of India who Ruled over the World</li>
              <li>Motive of Life in Indian Culture</li>
            </ul>
            <div className="bg-card shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-semibold text-[#FF5722] mb-4">Book Summary</h4>
              <Accordion type="single" collapsible className="w-full">
                {chapters.map((chapter, index) => (
                  <AccordionItem key={index} value={`chapter-${index + 1}`}>
                    <AccordionTrigger>Chapter {index + 1}: {chapter.title}</AccordionTrigger>
                    <AccordionContent>
                      {chapter.content}
                      <motion.div
                        className="absolute bottom-4 left-4 bg-white p-2 rounded-full shadow-md z-10"
                        variants={iconAnimation}
                        initial="hidden"
                        animate="visible"
                      >
                        <FaArrowDown size={24} className="text-[#FF5722]" />
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Right: Image with Fixed Icon */}
          <div className="relative group">
            {/* Image with fit and parallax */}
            <div
              className="relative w-full max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://www.drlaltanwani.com/public/imgs/book-cover.jpg"
                alt="Leading Yesterday, Leading Tomorrow Book Cover"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Parallax Effect for Icons */}
              <motion.div
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md z-10"
                variants={iconAnimation}
                initial="hidden"
                animate="visible"
              >
                <FaBookmark size={24} className="text-[#FF5722]" />
              </motion.div>
              {/* <motion.div
                className="absolute bottom-4 left-4 bg-white p-2 rounded-full shadow-md z-10"
                variants={iconAnimation}
                initial="hidden"
                animate="visible"
              >
                <FaArrowDown size={24} className="text-[#FF5722]" />
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
