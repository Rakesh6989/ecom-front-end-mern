import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StraightIcon from '@mui/icons-material/Straight';
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 cursor-pointer">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-sm p-3 shadow-lg transition-all duration-300 focus:outline-none active:scale-95 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <StraightIcon className="text-2xl sm:text-3xl" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
