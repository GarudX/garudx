import React, { ReactNode } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/react';
import { cn } from '../../lib/utils';

// Re-export Card components
export { CardBody, CardHeader, CardFooter };

export interface GlassCardProps {
  children: ReactNode;
  variant?: 'light' | 'dark';
  design?: 'standard' | 'technical';
  isGlowing?: boolean;
  title?: string;
  footer?: ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  fullWidth?: boolean;
  radius?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  isPressable?: boolean;
  isHoverable?: boolean;
  disableAnimation?: boolean;
  onPress?: () => void;
}

export const GlassCard = ({
  children,
  variant = 'dark',
  design = 'standard',
  isGlowing = false,
  title,
  footer,
  className,
  headerClassName,
  bodyClassName,
  footerClassName,
  fullWidth,
  radius = 'lg',
  shadow = 'md',
  isPressable,
  isHoverable,
  disableAnimation,
  onPress,
  ...props
}: GlassCardProps) => {
  // Determine if we need separate header/body/footer or just body
  const hasHeader = !!title;
  const hasFooter = !!footer;
  const isTechnical = design === 'technical';
  
  // Set up base card styling
  const cardStyles = cn(
    // Core glass effect styles
    'backdrop-blur-md overflow-hidden',
    variant === 'light' ? 'bg-white/10' : 'bg-darkSlate/40',
    
    // Design variants
    isTechnical && [
      'border border-electricBlue/20',
      'relative',
    ],
    
    // Glowing effect
    isGlowing && (
      isTechnical 
        ? 'shadow-[0_0_15px_rgba(58,134,255,0.15),_0_0_30px_rgba(58,134,255,0.1)]' 
        : 'shadow-[0_0_20px_rgba(255,255,255,0.1)]'
    ),
    
    // Standard sizing
    !fullWidth && 'max-w-md',
    
    className
  );

  return (
    <Card
      className={cardStyles}
      radius={radius}
      shadow={shadow}
      fullWidth={fullWidth}
      isPressable={isPressable}
      isHoverable={isHoverable}
      disableAnimation={disableAnimation}
      onPress={onPress}
      {...props}
    >
      {/* Technical corner marker for technical variant */}
      {isTechnical && (
        <div className="absolute top-0 right-0 pointer-events-none">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H24V24" fill="none" stroke="currentColor" strokeOpacity="0.2" />
          </svg>
        </div>
      )}
      
      {/* Technical grid background for technical variant */}
      {isTechnical && (
        <div 
          className="absolute inset-0 z-0 opacity-5 bg-precision-grid bg-[length:20px_20px]" 
          aria-hidden="true"
        />
      )}
      
      {hasHeader && (
        <CardHeader 
          className={cn(
            isTechnical ? "border-b border-electricBlue/20" : "border-b border-titaniumSilver/10",
            headerClassName
          )}
        >
          <h3 className={cn(
            "text-lg font-medium",
            isTechnical ? "text-electricBlue font-mono" : "text-white font-heading"
          )}>
            {title}
            {isTechnical && (
              <span className="ml-2 text-xs text-titaniumSilver/60 font-mono tracking-wider uppercase">
                SECTION-01
              </span>
            )}
          </h3>
        </CardHeader>
      )}
      
      <CardBody className={cn("z-10 relative", bodyClassName)}>
        {children}
      </CardBody>
      
      {hasFooter && (
        <CardFooter 
          className={cn(
            isTechnical && "border-t border-electricBlue/20",
            footerClassName
          )}
        >
          {footer}
        </CardFooter>
      )}
      
      {/* Technical bottom line for technical variant */}
      {isTechnical && (
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-electricBlue/30 to-transparent" />
      )}
    </Card>
  );
}; 