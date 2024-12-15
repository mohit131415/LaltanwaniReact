import React from 'react';
import { motion } from 'framer-motion';
import { Book, Award, Users, Lightbulb } from 'lucide-react';
import { StoryItems } from '@/constant/constant';

const StorySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
        >
          The Journey of Dr. Lal Tanwani
        </motion.h2>

        <div className="space-y-24">
          <StoryItem
            title="Early Years and Education"
            content="Dr. Lal Tanwani's journey began in a small town in India, where his passion for learning was ignited at a young age. Despite facing numerous challenges, he pursued education with unwavering determination, eventually earning multiple degrees across various disciplines."
            icon={<Book className="w-8 h-8 text-primary" />}
            image={StoryItems.trophee1}
          />

          <StoryItem
            title="Academic Excellence"
            content="Throughout his academic career, Dr. Tanwani consistently demonstrated exceptional prowess, earning accolades and recognition from peers and institutions alike. His thirst for knowledge led him to pursue and achieve an impressive array of 14 degrees, spanning diverse fields of study."
            icon={<Award className="w-8 h-8 text-primary" />}
            image={StoryItems.award}
            reverse
          />

          <StoryItem
            title="Impacting Lives Through Education"
            content="Dr. Tanwani's true calling emerged as he stepped into the role of an educator. His innovative teaching methods and ability to inspire have touched the lives of over 50,000 students, nurturing the next generation of thinkers and leaders."
            icon={<Users className="w-8 h-8 text-primary" />}
            image={StoryItems.trophee2}
          />

          <StoryItem
            title="Book Launch"
            content="Watch this video to learn more about Dr. Lal Tanwani's inspiring journey and contributions to education."
            icon={<Lightbulb className="w-8 h-8 text-primary" />}
            video={StoryItems.booklaunchvideo}
            reverse
          >
          </StoryItem>
        </div>
      </div>
    </section>
  );
};

const StoryItem = ({ title, content, icon, image, video, reverse = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}
    >
      <div className="w-full lg:w-1/2 space-y-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-primary/10 rounded-full">
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">{content}</p>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          {video ? (
            <video
              src={video}
              title={title}
              className="w-full h-full object-cover transition-transform duration-300"
              loop
              muted
              autoPlay
              controls={false}
              onEnded={(e) => {
                e.target.currentTime = 0;
                e.target.play();
              }}
            />
          ) : (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default StorySection;
