import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { name: "Education", count: 15 },
  { name: "Leadership", count: 12 },
  { name: "Personal Development", count: 8 },
  { name: "Technology", count: 6 },
  { name: "Research", count: 4 },
];

const BlogCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
    // Implement category filtering logic here
    console.log("Selected category:", category);
  };

  return (
    <div className="bg-card p-4 md:p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-lg md:text-xl font-bold mb-4 text-center">
        Categories
      </h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <motion.div
            key={category.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium text-center ${
                selectedCategory === category.name
                  ? "bg-primary text-white shadow-md"
                  : "bg-secondary text-gray-700 hover:bg-primary/10"
              } transition-all duration-300`}
              onClick={() => handleCategoryClick(category.name)}
            >
              {category.name} ({category.count})
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;
