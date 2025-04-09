import React from 'react';
import { Button as HeroButton } from '@heroui/react';
import { cn } from '../../lib/utils';
import { Icon, IconName } from './Icon';

export interface AerospaceButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'technical';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  href?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
  form?: string;
  target?: string;
  rel?: string;
  disableRipple?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const AerospaceButton = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  className = '',
  leftIcon,
  rightIcon,
  href,
  ariaLabel,
  type = 'button',
  form,
  target,
  rel,
  disableRipple,
  startContent,
  endContent,
  ...props
}: AerospaceButtonProps) => {
  // Map our variants to HeroUI variants
  const variantMap: Record<string, "ghost" | "solid" | "flat" | "bordered" | "light" | "faded" | "shadow" | undefined> = {
    primary: 'solid',
    secondary: 'flat',
    outline: 'bordered',
    ghost: 'light',
    link: 'light',
    technical: 'bordered'
  };

  // Custom classes for the technical variant
  const isTechnical = variant === 'technical';
  
  // Prepare icon content
  const preparedStartContent = startContent || (leftIcon && <Icon name={leftIcon} size={size === 'sm' ? 'sm' : 'md'} />);
  const preparedEndContent = endContent || (rightIcon && <Icon name={rightIcon} size={size === 'sm' ? 'sm' : 'md'} />);

  return (
    <HeroButton
      href={href}
      onClick={onClick}
      size={size}
      fullWidth={fullWidth}
      isDisabled={disabled || loading}
      type={type}
      form={form}
      variant={variantMap[variant]}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      disableRipple={disableRipple}
      startContent={preparedStartContent}
      endContent={preparedEndContent}
      isLoading={loading}
      className={cn(
        isTechnical && [
          'font-mono tracking-wide border-electricBlue/40',
          'bg-deepIndigo/40 hover:bg-deepIndigo/60',
          'text-titaniumSilver hover:text-white',
          'before:content-[""] before:absolute before:left-0 before:top-0',
          'before:w-[2px] before:h-full before:bg-electricBlue/70'
        ],
        className
      )}
      {...props}
    >
      {children}
    </HeroButton>
  );
}; 