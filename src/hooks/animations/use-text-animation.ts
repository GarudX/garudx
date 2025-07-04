import { useState, useEffect } from 'react';

/**
 * Hook for cycling through text lines with animation
 * @param textLines Array of text lines to cycle through
 * @param intervalMs Interval between text changes in milliseconds
 * @returns Current text index and animation state
 */
export const useTextAnimation = (
  textLines: string[], 
  intervalMs: number = 4000
) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTextAnimating, setIsTextAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % textLines.length);
        setIsTextAnimating(false);
      }, 500); // Fade out time
    }, intervalMs);

    return () => clearInterval(interval);
  }, [textLines.length, intervalMs]);

  return {
    currentTextIndex,
    isTextAnimating,
    currentText: textLines[currentTextIndex]
  };
}; 