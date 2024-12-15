import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Heart, Calendar, Clock } from 'lucide-react'
import { BLOG_IMAGES } from "../constant/constant";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Education: Blending Technology and Traditional Learning",
    excerpt: "Exploring how modern technology can enhance traditional educational methods to create more effective learning experiences.",
    date: "2023-07-15",
    readTime: "5 min read",
    category: "Education",
    image: BLOG_IMAGES.Blog1,
    slug: "future-of-education",
    likes: 124
  },
  {
    id: 2,
    title: "Leadership in the 21st Century: Adapting to a Changing World",
    excerpt: "Discussing the evolving nature of leadership and the skills required to lead effectively in today's fast-paced, globalized world.",
    date: "2023-07-10",
    readTime: "7 min read",
    category: "Leadership",
    image: BLOG_IMAGES.Blog2,
    likes: 98
  },
  {
    id: 3,
    title: "The Importance of Lifelong Learning in Personal Development",
    excerpt: "Examining why continuous learning is crucial for personal growth and success in both professional and personal life.",
    date: "2023-07-05",
    readTime: "6 min read",
    category: "Personal Development",
    image: BLOG_IMAGES.Blog3,
    likes: 156
  },
  {
    id: 4,
    title: "Innovative Teaching Methods for the Modern Classroom",
    excerpt: "Exploring creative and effective teaching strategies that engage students and improve learning outcomes.",
    date: "2023-06-30",
    readTime: "8 min read",
    category: "Education",
    image: BLOG_IMAGES.Blog4,
    likes: 87
  },
  {
    id: 5,
    title: "The Role of Emotional Intelligence in Effective Leadership",
    excerpt: "Understanding how emotional intelligence contributes to successful leadership and team management.",
    date: "2023-06-25",
    readTime: "6 min read",
    category: "Leadership",
    image: BLOG_IMAGES.Blog5,
    likes: 112
  },
]

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [likedPosts, setLikedPosts] = useState([])
  const postsPerPage = 3
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const handleLike = (postId) => {
    setLikedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    )
  }

  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  return (
    <div>
      <div className="grid gap-8">
        <AnimatePresence>
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-card overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-lg">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 flex flex-col">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                      <Link
                        to={`/blogpost/${post.slug}`}
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {post.category}
                    </span>
                    <div className="mt-auto flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <button
                        className={`flex items-center ${
                          likedPosts.includes(post.id)
                            ? "text-primary"
                            : "text-muted-foreground"
                        } hover:text-primary transition-colors`}
                        onClick={() => handleLike(post.id)}
                      >
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                      </button>
                      <Link
                        to={`/blogpost/${post.slug}`}
                        className="mt-4 sm:mt-0 px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors sm:w-auto w-full text-center"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-8 flex justify-center items-center space-x-4">
        <button
          className="px-2 py-1 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors disabled:opacity-50"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          aria-disabled={currentPage === 1}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="hidden sm:flex items-center space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => paginate(idx + 1)}
              className={`px-2 py-1 rounded ${
                idx + 1 === currentPage
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
        <div className="flex sm:hidden items-center space-x-2">
          <span className="text-sm">
            Page {currentPage} / {totalPages}
          </span>
        </div>
        <button
          className="px-2 py-1 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors disabled:opacity-50"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-disabled={currentPage === totalPages}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default BlogList
