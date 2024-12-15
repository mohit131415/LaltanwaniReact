import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Ensure you have lucide-react installed

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 300 && currentScrollPos < lastScrollPos) {
      setIsVisible(true); // Show when scrolling up
    } else {
      setIsVisible(false); // Hide when scrolling down or at the top
    }

    setLastScrollPos(currentScrollPos);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  return (
    <button
      onClick={handleScrollToTop}
      className={`fixed bottom-8 right-8 bg-[#ff6600] text-white rounded-full p-3 md:p-4 shadow-lg flex items-center justify-center
      transition-all duration-300 bg-opacity-80 hover:bg-opacity-90 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      style={{
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6 md:h-7 md:w-7" />
    </button>
  );
};

export default ScrollToTop;
