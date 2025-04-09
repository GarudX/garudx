import React, { InputHTMLAttributes, forwardRef } from 'react';
import { Input as HeroInput } from '@heroui/react';
import { cn } from '../../lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helpText?: string;
  inputSize?: 'sm' | 'md' | 'lg';
  variant?: 'standard' | 'technical';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  description?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  labelPlacement?: 'inside' | 'outside' | 'outside-left';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      helpText,
      inputSize = 'md',
      variant = 'standard',
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      description,
      isRequired,
      isDisabled,
      isInvalid,
      radius = 'md',
      startContent = leftIcon,
      endContent = rightIcon,
      labelPlacement = 'outside',
      id,
      ...props
    },
    ref
  ) => {
    // Generate a random ID if one is not provided
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

    // Convert our variant to HeroUI color
    const color = variant === 'technical' ? 'primary' : 'default';

    return (
      <HeroInput
        id={inputId}
        ref={ref}
        label={label}
        size={inputSize}
        isDisabled={disabled || isDisabled}
        isInvalid={!!error || isInvalid}
        errorMessage={error}
        description={helpText || description}
        fullWidth={fullWidth}
        startContent={startContent}
        endContent={endContent}
        color={color}
        radius={radius}
        isRequired={isRequired}
        labelPlacement={labelPlacement}
        classNames={{
          base: cn(
            variant === 'technical' && 'font-mono',
            className
          ),
          label: variant === 'technical' ? 'text-electricBlue/80 font-mono tracking-wide' : 'text-titaniumSilver',
          input: cn(
            variant === 'technical' && 'font-mono bg-deepIndigo/80',
          ),
        }}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input'; 