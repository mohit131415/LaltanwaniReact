import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Grid, List, Search } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import ResourceGrid from "./ResourceGrid";
import ResourceList from "./ResourceList";

const categories = [
  "All",
  "Articles",
  "Presentations",
  "Research Papers",
  "Worksheets",
];
const sortOptions = ["Newest", "Oldest", "Alphabetical"];

export default function ResourceSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [viewMode, setViewMode] = useState("grid");

  // Use useMediaQuery to detect screen size
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="space-y-6 mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-card shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            Search and Filter Resources
          </h2>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex space-x-2 items-center">
              <div className="relative w-full max-w-xs md:max-w-sm">
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 pr-10 border border-input rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 p-2 bg-primary text-white rounded-full hover:bg-primary/90 md:hidden"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
              <button
                type="submit"
                className="hidden md:flex px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 items-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </form>

          {/* Show toggle buttons only on larger screens */}
          {!isMobile && (
            <div className="flex justify-between mt-4">
              <div className="flex space-x-2">
                <button
                  className={`p-2 rounded-md ${
                    viewMode === "grid"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  className={`p-2 rounded-md ${
                    viewMode === "list"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors flex items-center">
                <Download className="inline-block mr-2 h-5 w-5" />
                Download All
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Always show grid on mobile */}
      {viewMode === "grid" || isMobile ? (
        <ResourceGrid
          searchTerm={searchTerm}
          category={category}
          sortBy={sortBy}
        />
      ) : (
        <ResourceList
          searchTerm={searchTerm}
          category={category}
          sortBy={sortBy}
        />
      )}
    </div>
  );
}
