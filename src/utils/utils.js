import React from 'react';

// Easing function for smooth animation
const easeInOutCubic = (t) => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

// Utility function for smooth scrolling to sections
export const scrollToSection = (sectionId) => {
  try {
    if (!sectionId) {
      console.warn('No sectionId provided to scrollToSection');
      return;
    }

    const element = document.getElementById(sectionId);
    if (!element) {
      console.warn(`Element with id '${sectionId}' not found`);
      return;
    }

    // Get the fixed header height
    const header = document.querySelector('.navigation');
    const headerHeight = header ? header.offsetHeight : 70;
    
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    
    // Use the browser's native smooth scrolling if available
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      return;
    }

    // Fallback for browsers that don't support smooth scrolling
    const startPosition = window.pageYOffset;
    const distance = offsetTop - startPosition;
    const duration = 800; // Animation duration in milliseconds
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const ease = easeInOutCubic(percentage);

      const currentPosition = startPosition + distance * ease;
      window.scrollTo(0, currentPosition);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  } catch (error) {
    console.error('Error in scrollToSection:', error);
    console.error('❌ Element not found for section:', sectionId);
    console.log('Available sections:', document.querySelectorAll('section[id]'));
  }
};

// Custom hook for scroll to section functionality
export const useScrollToSection = () => {
  return scrollToSection;
};
