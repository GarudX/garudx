import { useEffect } from 'react';

/**
 * Hook for scroll reveal animations
 * Adds 'active' class to elements with data-scroll attribute when they come into view
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-scroll]');
    
    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        } else {
          revealElements[i].classList.remove('active');
        }
      }
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);
}; 