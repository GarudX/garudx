import { ReactNode } from 'react';
import { Button as HeroButton } from '@heroui/react';
import { cn } from '../../utils/helpers/cn';
import { 
  ButtonVariant, 
  ButtonSize, 
  ButtonColor, 
  BaseComponentProps, 
  InteractiveProps 
} from '../../types/design-system';

// Extended Button props interface using design system types
interface ButtonProps extends BaseComponentProps, InteractiveProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  isGlowing?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  fullWidth?: boolean;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = ({
  children,
  variant = 'solid',
  size = 'md',
  color = 'primary',
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
  // Map our color to HeroUI color
  const getHeroUIColor = (): "primary" | "secondary" | "success" | "warning" | "danger" | "default" => {
    switch (color) {
      case 'primary': return 'primary';
      case 'secondary': return 'secondary';
      case 'success': return 'success';
      case 'warning': return 'warning';
      case 'danger': return 'danger';
      default: return 'primary';
    }
  };

  // Get glow effect based on color
  const getGlowClasses = (): string => {
    if (!isGlowing) return '';
    
    switch (color) {
      case 'primary': return 'shadow-[0_0_15px_rgba(59,130,246,0.4),_0_0_30px_rgba(59,130,246,0.2)]';
      case 'secondary': return 'shadow-[0_0_15px_rgba(107,114,128,0.4),_0_0_30px_rgba(107,114,128,0.2)]';
      case 'success': return 'shadow-[0_0_15px_rgba(34,197,94,0.4),_0_0_30px_rgba(34,197,94,0.2)]';
      case 'warning': return 'shadow-[0_0_15px_rgba(251,191,36,0.4),_0_0_30px_rgba(251,191,36,0.2)]';
      case 'danger': return 'shadow-[0_0_15px_rgba(239,68,68,0.4),_0_0_30px_rgba(239,68,68,0.2)]';
      default: return 'shadow-[0_0_15px_rgba(59,130,246,0.4),_0_0_30px_rgba(59,130,246,0.2)]';
    }
  };

  return (
    <HeroButton
      color={getHeroUIColor()}
      variant={variant}
      size={size}
      radius={radius}
      isDisabled={isDisabled}
      disableAnimation={disableAnimation}
      disableRipple={disableRipple}
      className={cn(
        // Base styles
        'transition-all duration-200 font-medium',
        
        // Glow effect
        getGlowClasses(),
        
        // Loading state
        isLoading && 'opacity-80 cursor-wait',
        
        // Full width
        fullWidth && 'w-full',
        
        // Custom classes
        className
      )}
      isLoading={isLoading}
      startContent={startContent}
      endContent={endContent}
      {...props}
    >
      {children}
    </HeroButton>
  );
}; 
