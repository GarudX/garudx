import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button as HeroButton } from '@heroui/react';
import { cn } from '../../lib/utils';

// Type for our button variants
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'technical' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Type for HeroUI button colors
type HeroUIColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
type HeroUIVariant = "solid" | "bordered" | "light" | "flat" | "faded" | "shadow";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isGlowing?: boolean;
  isLoading?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  isDisabled?: boolean;
  disableAnimation?: boolean;
  disableRipple?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isGlowing = false,
  isLoading = false,
  startContent,
  endContent,
  fullWidth = false,
  className,
  radius = 'md',
  isDisabled,
  disableAnimation,
  disableRipple,
  ...props
}: ButtonProps) => {
  // Use mapping objects to safely convert our variants to HeroUI props
  const colorMap: Record<ButtonVariant, HeroUIColor> = {
    primary: "primary",
    secondary: "default",
    tertiary: "default",
    technical: "primary",
    success: "success",
    warning: "warning",
    danger: "danger"
  };
  
  const variantMap: Record<ButtonVariant, HeroUIVariant> = {
    primary: "solid",
    secondary: "flat",
    tertiary: "light",
    technical: "bordered",
    success: "solid",
    warning: "solid",
    danger: "solid"
  };
  
  // Get the appropriate HeroUI props from our maps
  const heroColor = colorMap[variant];
  const heroVariant = variantMap[variant];
  
  // Convert children to uppercase for technical variant if it's a string
  const displayChildren = variant === 'technical' && typeof children === 'string' 
    ? children.toUpperCase() 
    : children;
  
  return (
    <HeroButton
      color={heroColor}
      variant={heroVariant}
      size={size}
      radius={radius}
      isDisabled={isDisabled}
      disableAnimation={disableAnimation}
      disableRipple={disableRipple}
      className={cn(
        // Base styles
        'transition-all duration-300 font-medium',
        
        // Variant-specific styles
        variant === 'technical' && [
          'font-mono tracking-wide text-electricBlue',
          'border-electricBlue/40 bg-deepIndigo/40',
          'hover:bg-deepIndigo/60 active:bg-deepIndigo/70',
          'before:content-[""] before:absolute before:left-0 before:top-0',
          'before:w-[2px] before:h-full before:bg-electricBlue/70'
        ],
        
        // Glowing effects based on variant
        {
          'shadow-[0_0_15px_rgba(58,134,255,0.4),_0_0_30px_rgba(58,134,255,0.2)]': isGlowing && variant === 'primary',
          'shadow-[0_0_10px_rgba(173,181,189,0.5),_0_0_20px_rgba(173,181,189,0.3)]': isGlowing && variant === 'secondary',
          'shadow-[0_0_15px_rgba(27,127,121,0.4),_0_0_30px_rgba(27,127,121,0.2)]': isGlowing && variant === 'technical',
          'shadow-[0_0_15px_rgba(139,43,43,0.4),_0_0_30px_rgba(139,43,43,0.2)]': isGlowing && variant === 'danger',
          'shadow-[0_0_15px_rgba(214,158,46,0.4),_0_0_30px_rgba(214,158,46,0.2)]': isGlowing && variant === 'warning',
          'shadow-[0_0_15px_rgba(56,161,105,0.4),_0_0_30px_rgba(56,161,105,0.2)]': isGlowing && variant === 'success',
        },
        
        // Loading state styling
        isLoading && 'opacity-80',
        
        // Full width option
        fullWidth && 'w-full',
        
        // Additional custom classes
        className
      )}
      isLoading={isLoading}
      startContent={startContent}
      endContent={endContent}
      {...props}
    >
      {displayChildren}
    </HeroButton>
  );
}; 