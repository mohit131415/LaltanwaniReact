import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X } from 'lucide-react'

const BlogSearch = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchTerm)
  }

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <AnimatePresence>
          {searchTerm && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <button
                type="button"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setSearchTerm("")}
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  )
}

export default BlogSearch

