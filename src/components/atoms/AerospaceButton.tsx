import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers/cn';

interface AerospaceButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const variantClasses = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]',
  secondary: 'bg-gray-800 hover:bg-gray-700 text-white border-gray-600',
  outline: 'bg-transparent hover:bg-blue-500/10 text-blue-400 border-blue-500',
};

export const AerospaceButton: React.FC<AerospaceButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading,
  leftIcon,
  rightIcon,
  className,
  onClick,
  disabled,
  type = 'button',
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        // Base styles
        'relative inline-flex items-center justify-center',
        'rounded-lg border transition-all duration-200',
        'font-medium tracking-wide',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        
        // Size variations
        sizeClasses[size],
        
        // Variant styles
        variantClasses[variant],
        
        // Custom classes
        className
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-lg">
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      <span className={cn('flex items-center', isLoading && 'opacity-0')}>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </span>
    </motion.button>
  );
}; 
