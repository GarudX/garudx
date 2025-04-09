import React, { ElementType } from 'react';
import { cn } from '../../lib/utils';

export type NeonColor = 'blue' | 'teal' | 'silver';
export type NeonIntensity = 'low' | 'medium' | 'high';

export interface NeonTextProps {
  children: React.ReactNode;
  as?: ElementType;
  color?: NeonColor;
  intensity?: NeonIntensity;
  gradient?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  [key: string]: any;
}

export const NeonText = ({
  as: Component = 'span',
  children,
  color = 'blue',
  intensity = 'medium',
  gradient = false,
  className,
  size,
  weight,
  align,
  ...props
}: NeonTextProps) => {
  // Map our colors to CSS variables
  const getGlowColor = () => {
    switch (color) {
      case 'blue': return 'var(--electricBlue, #3A86FF)';
      case 'teal': return 'var(--mutedTeal, #1B7F79)';
      case 'silver': return 'var(--titaniumSilver, #ADB5BD)';
      default: return 'var(--electricBlue, #3A86FF)';
    }
  };
  
  // Map intensity to glow strength
  const getGlowIntensity = () => {
    switch (intensity) {
      case 'low': return '0 0 2px';
      case 'medium': return '0 0 5px';
      case 'high': return '0 0 10px';
      default: return '0 0 5px';
    }
  };
  
  // Get color value for gradient (if enabled)
  const gradientFrom = () => {
    switch (color) {
      case 'blue': return 'from-electricBlue/90';
      case 'teal': return 'from-mutedTeal/90';
      case 'silver': return 'from-titaniumSilver/90';
      default: return 'from-electricBlue/90';
    }
  };
  
  const gradientTo = () => {
    switch (color) {
      case 'blue': return 'to-dataBlue/70';
      case 'teal': return 'to-signalGreen/70';
      case 'silver': return 'to-charcoal/70';
      default: return 'to-dataBlue/70';
    }
  };

  // Map size to text size class
  const sizeClass = size ? `text-${size}` : '';
  
  // Map weight to font weight class
  const weightClass = weight ? `font-${weight}` : '';
  
  // Map align to text alignment class
  const alignClass = align ? `text-${align}` : '';

  return (
    <Component
      className={cn(
        'transition-all duration-300',
        sizeClass,
        weightClass,
        alignClass,
        {
          'bg-gradient-to-r bg-clip-text text-transparent': gradient,
          [gradientFrom()]: gradient,
          [gradientTo()]: gradient,
        },
        className
      )}
      style={{
        color: !gradient ? getGlowColor() : undefined,
        textShadow: `${getGlowIntensity()} ${getGlowColor()}`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}; 