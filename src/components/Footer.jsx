import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#fff5f2] text-foreground py-12 mt-12 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-cover opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="">
              <p className="mb-0 fw-600 font-bold" style={{ lineHeight: 1.2, fontSize: '40px', marginBottom: '-10px', marginLeft: '-2px' }}>
                DR. LAL
              </p>
              <p className="mb-0" style={{ fontSize: '0.8rem', letterSpacing: '0.78rem' }}>
                TANWANI
              </p>
            </a>
            <p className="mb-4 mt-4">
              Empowering minds, inspiring innovation, and shaping the future of
              education and entrepreneurship.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/accomplishments"
                  className="hover:text-primary transition-colors"
                >
                  Accomplishments
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Latest Publications</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  The Future of EdTech
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Innovation in Higher Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Entrepreneurship and Education
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-full md:w-auto">
              <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
              <p className="mb-4">
                Stay updated with our latest news and events.
              </p>
              <form className="flex flex-col items-center gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {currentYear} Dr. Lal Tanwani. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
