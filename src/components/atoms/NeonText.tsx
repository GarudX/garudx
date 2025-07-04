import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers/cn';

interface NeonTextProps {
  children: React.ReactNode;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
  color?: 'blue' | 'purple' | 'green' | 'red' | 'cyan' | 'gray';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const colorMap = {
  blue: {
    low: 'text-blue-400 shadow-[0_0_3px_#60A5FA]',
    medium: 'text-blue-400 shadow-[0_0_7px_#60A5FA,0_0_10px_#3B82F6]',
    high: 'text-blue-400 shadow-[0_0_7px_#60A5FA,0_0_10px_#3B82F6,0_0_21px_#2563EB]',
  },
  purple: {
    low: 'text-purple-400 shadow-[0_0_3px_#A78BFA]',
    medium: 'text-purple-400 shadow-[0_0_7px_#A78BFA,0_0_10px_#8B5CF6]',
    high: 'text-purple-400 shadow-[0_0_7px_#A78BFA,0_0_10px_#8B5CF6,0_0_21px_#7C3AED]',
  },
  green: {
    low: 'text-green-400 shadow-[0_0_3px_#34D399]',
    medium: 'text-green-400 shadow-[0_0_7px_#34D399,0_0_10px_#10B981]',
    high: 'text-green-400 shadow-[0_0_7px_#34D399,0_0_10px_#10B981,0_0_21px_#059669]',
  },
  red: {
    low: 'text-red-400 shadow-[0_0_3px_#F87171]',
    medium: 'text-red-400 shadow-[0_0_7px_#F87171,0_0_10px_#EF4444]',
    high: 'text-red-400 shadow-[0_0_7px_#F87171,0_0_10px_#EF4444,0_0_21px_#DC2626]',
  },
  cyan: {
    low: 'text-cyan-400 shadow-[0_0_3px_#22D3EE]',
    medium: 'text-cyan-400 shadow-[0_0_7px_#22D3EE,0_0_10px_#06B6D4]',
    high: 'text-cyan-400 shadow-[0_0_7px_#22D3EE,0_0_10px_#06B6D4,0_0_21px_#0891B2]',
  },
  gray: {
    low: 'text-gray-400 shadow-[0_0_3px_#9CA3AF]',
    medium: 'text-gray-400 shadow-[0_0_7px_#9CA3AF,0_0_10px_#6B7280]',
    high: 'text-gray-400 shadow-[0_0_7px_#9CA3AF,0_0_10px_#6B7280,0_0_21px_#4B5563]',
  },
};

export const NeonText: React.FC<NeonTextProps> = ({
  children,
  as = 'span',
  color = 'blue',
  intensity = 'medium',
  className,
}) => {
  const neonClasses = colorMap[color][intensity];
  
  const commonProps = {
    className: cn('inline-block', neonClasses, className),
    initial: { opacity: 0.8 },
    animate: { opacity: 1 },
    transition: {
      opacity: {
        duration: 0.2,
        repeat: Infinity,
        repeatType: 'reverse' as const,
      },
    },
  };

  switch (as) {
    case 'h1':
      return <motion.h1 {...commonProps}>{children}</motion.h1>;
    case 'h2':
      return <motion.h2 {...commonProps}>{children}</motion.h2>;
    case 'h3':
      return <motion.h3 {...commonProps}>{children}</motion.h3>;
    case 'h4':
      return <motion.h4 {...commonProps}>{children}</motion.h4>;
    case 'h5':
      return <motion.h5 {...commonProps}>{children}</motion.h5>;
    case 'h6':
      return <motion.h6 {...commonProps}>{children}</motion.h6>;
    case 'p':
      return <motion.p {...commonProps}>{children}</motion.p>;
    case 'div':
      return <motion.div {...commonProps}>{children}</motion.div>;
    default:
      return <motion.span {...commonProps}>{children}</motion.span>;
  }
}; 
