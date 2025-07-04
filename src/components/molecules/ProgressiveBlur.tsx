import React from 'react';

type ProgressiveBlurProps = {
  position?: 'top' | 'bottom' | 'left' | 'right';
  intensity?: 'light' | 'medium' | 'strong';
  className?: string;
  children?: React.ReactNode;
};

/**
 * ProgressiveBlur Component
 * 
 * A reusable component that creates a progressive blur effect in the specified direction.
 * Can be used to create smooth transitions between sections.
 * 
 * @param position - Direction of the blur gradient (default: 'bottom')
 * @param intensity - Strength of the blur effect (default: 'medium')
 * @param className - Additional classes
 * @param children - Optional content to render inside the blur container
 */
export const ProgressiveBlur: React.FC<ProgressiveBlurProps> = ({
  position = 'bottom',
  intensity = 'medium',
  className = '',
  children
}) => {
  // Configure gradient based on position
  const getGradient = () => {
    const intensityMap = {
      light: { start: 'rgba(0,0,0,0)', end: 'rgba(0,0,0,0.7)' },
      medium: { start: 'rgba(0,0,0,0)', end: 'rgba(0,0,0,0.85)' },
      strong: { start: 'rgba(0,0,0,0)', end: 'rgba(0,0,0,0.95)' },
    };

    const { start, end } = intensityMap[intensity];
    
    switch (position) {
      case 'top':
        return `linear-gradient(to top, ${start}, ${end})`;
      case 'left':
        return `linear-gradient(to left, ${start}, ${end})`;
      case 'right':
        return `linear-gradient(to right, ${start}, ${end})`;
      case 'bottom':
      default:
        return `linear-gradient(to bottom, ${start}, ${end})`;
    }
  };

  return (
    <div 
      className={`absolute w-full h-full ${className}`}
      style={{ 
        background: getGradient(),
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        pointerEvents: 'none'
      }}
    >
      {children}
    </div>
  );
}; 
