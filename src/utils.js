import React from 'react';

// Utility function for smooth scrolling to sections
export const scrollToSection = (sectionId) => {
  console.log('🔄 scrollToSection called with:', sectionId);

  const element = document.getElementById(sectionId);
  if (element) {
    console.log('✅ Element found:', element);
    const offsetTop = element.offsetTop - 70; // Account for fixed navigation
    console.log('📍 Target offset:', offsetTop);

    // Use a more reliable smooth scrolling approach
    const startPosition = window.pageYOffset;
    const distance = offsetTop - startPosition;
    const duration = 800; // Animation duration in milliseconds
    let start = null;

    console.log('🚀 Starting animation from', startPosition, 'to', offsetTop, 'distance:', distance);

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const ease = easeInOutCubic(percentage);

      const currentPosition = startPosition + distance * ease;
      window.scrollTo(0, currentPosition);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        console.log('✅ Animation completed');
        // Add visual feedback after scrolling is complete
        element.style.transform = 'scale(1.02)';
        setTimeout(() => {
          element.style.transform = 'scale(1)';
        }, 200);
      }
    };

    requestAnimationFrame(step);
  } else {
    console.error('❌ Element not found for section:', sectionId);
    console.log('Available sections:', document.querySelectorAll('section[id]'));
  }
};

// Easing function for smooth animation
const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

// Custom hook for scroll to section functionality
export const useScrollToSection = () => {
  return scrollToSection;
};
