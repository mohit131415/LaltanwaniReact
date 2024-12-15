import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });

    setActiveLink(location.pathname);
    window.scrollTo(0, 0);

    return () => unsubscribe();
  }, [scrollY, location]);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Accomplishments', href: '/accomplishments' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  // Update this URL with the actual link to your PDF
  const pdfUrl = 'https://publuu.com/flip-book/750433/1663870';

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-lg shadow-md'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-2">
              <div>
                <p
                  className="mb-0 fw-600 font-bold"
                  style={{
                    lineHeight: 1.2,
                    fontSize: '40px',
                    marginBottom: '-10px',
                    marginLeft: '-2px',
                    color: '#FF5722',
                  }}
                >
                  DR. LAL
                </p>
                <p
                  className="mb-0"
                  style={{
                    fontSize: '0.8rem',
                    letterSpacing: '0.78rem',
                    color: '#FF5722',
                  }}
                >
                  TANWANI
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    activeLink === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <motion.button
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPDFOpen(true)}
              >
                Open CV
              </motion.button>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <motion.button
                  className="lg:hidden text-foreground hover:text-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </motion.button>
              </SheetTrigger>
              <SheetContent className="bg-background/95 backdrop-blur-md">
                <nav className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-lg font-medium transition-colors ${
                        activeLink === item.href
                          ? 'text-primary'
                          : 'text-foreground hover:text-primary'
                      }`}
                      onClick={() => {
                        setIsSheetOpen(false);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <motion.button
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsPDFOpen(true);
                      setIsSheetOpen(false);
                    }}
                  >
                    Open CV
                  </motion.button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {isPDFOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={() => setIsPDFOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl h-[90vh] bg-white rounded-lg shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-2 right-2 flex gap-2 z-10">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-gray-700 bg-gray-100 rounded-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="h-6 w-6" />
                  <span className="sr-only">Open CV in new tab</span>
                </a>
                <button
                  onClick={() => setIsPDFOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 bg-gray-100 rounded-full"
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close PDF viewer</span>
                </button>
              </div>
              <iframe
                src={pdfUrl}
                title="Dr. Lal Tanwani's CV"
                className="w-full h-full border-none"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

