import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers/cn';

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  title?: string;
  footer?: string;
  variant?: 'default' | 'bordered' | 'shadow';
  isGlowing?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  onClick,
  title,
  footer,
  variant = 'default',
  isGlowing = false,
  ...props
}) => {
  const variantClasses = {
    default: 'border-white/10',
    bordered: 'border-blue-500/30 border-2',
    shadow: 'border-white/10 shadow-2xl',
  };

  const glowClasses = isGlowing ? 'shadow-[0_0_20px_rgba(59,130,246,0.3)]' : '';

  return (
    <motion.div
      onClick={onClick}
      className={cn(
        'relative overflow-hidden rounded-2xl',
        'bg-white/5 backdrop-blur-xl',
        'transition-all duration-300',
        variantClasses[variant],
        glowClasses,
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      {...props}
    >
      {title && (
        <div className="px-6 pt-6 pb-2 border-b border-white/10">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      )}
      
      <div className={cn('p-6', title && 'pt-4', footer && 'pb-4')}>
        {children}
      </div>
      
      {footer && (
        <div className="px-6 pb-6 pt-2 border-t border-white/10">
          <p className="text-sm text-gray-400 font-mono">{footer}</p>
        </div>
      )}
    </motion.div>
  );
}; 
