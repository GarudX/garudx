import React, { forwardRef } from 'react';
import { Checkbox as HeroCheckbox } from '@heroui/react';
import { cn } from '../../lib/utils';

export interface CheckboxProps {
  label?: string;
  description?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'standard' | 'technical';
  isChecked?: boolean;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  onChange?: (isChecked: boolean) => void;
  className?: string;
  lineThrough?: boolean;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      error,
      size = 'md',
      variant = 'standard',
      isChecked,
      defaultChecked,
      isDisabled,
      isInvalid,
      isRequired,
      onChange,
      className,
      lineThrough,
      radius = 'sm',
      color: propColor,
      ...props
    },
    ref
  ) => {
    // Convert our variant to HeroUI color
    const color = propColor || (variant === 'technical' ? 'primary' : 'default');
    
    return (
      <HeroCheckbox
        ref={ref}
        size={size}
        isSelected={isChecked}
        defaultSelected={defaultChecked}
        isDisabled={isDisabled}
        isInvalid={!!error || isInvalid}
        isRequired={isRequired}
        onValueChange={onChange}
        description={description}
        errorMessage={error}
        radius={radius}
        lineThrough={lineThrough}
        color={color}
        className={cn(
          variant === 'technical' && 'font-mono',
          className
        )}
        classNames={{
          label: variant === 'technical' ? 'text-titaniumSilver font-mono tracking-wide' : 'text-titaniumSilver',
          base: cn("group"),
        }}
        {...props}
      >
        {label}
      </HeroCheckbox>
    );
  }
);

Checkbox.displayName = 'Checkbox'; 