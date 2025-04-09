import React, { forwardRef } from 'react';
import { Select as HeroSelect, SelectItem } from '@heroui/react';
import { cn } from '../../lib/utils';

export interface SelectOption {
  value: string;
  label: string;
  description?: string;
}

export interface SelectProps {
  options: SelectOption[];
  label?: string;
  error?: string;
  helpText?: string;
  variant?: 'standard' | 'technical';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: (value: string) => void;
  value?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  disableSelectorIconRotation?: boolean;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  labelPlacement?: 'inside' | 'outside' | 'outside-left';
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      label,
      error,
      helpText,
      variant = 'standard',
      size = 'md',
      fullWidth = false,
      placeholder,
      className,
      onChange,
      value,
      isDisabled,
      isRequired,
      isInvalid,
      disableSelectorIconRotation,
      radius = 'md',
      labelPlacement = 'outside',
      ...props
    },
    ref
  ) => {
    // Convert our variant to HeroUI color
    const color = variant === 'technical' ? 'primary' : 'default';
    
    return (
      <HeroSelect
        ref={ref}
        aria-label={label}
        label={label}
        placeholder={placeholder || "Select an option"}
        size={size}
        fullWidth={fullWidth}
        isDisabled={isDisabled}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        isRequired={isRequired}
        isInvalid={!!error || isInvalid}
        errorMessage={error}
        description={helpText}
        color={color}
        radius={radius}
        disableSelectorIconRotation={disableSelectorIconRotation}
        labelPlacement={labelPlacement}
        classNames={{
          base: cn(
            variant === 'technical' && 'font-mono',
            className
          ),
          label: variant === 'technical' ? 'text-electricBlue/80 font-mono tracking-wide' : 'text-titaniumSilver',
          trigger: cn(
            variant === 'technical' && 'font-mono bg-deepIndigo/80',
          ),
        }}
        {...props}
      >
        {options.map((option) => (
          <SelectItem 
            key={option.value} 
            textValue={option.label}
          >
            <div className="flex flex-col">
              <span>{option.label}</span>
              {option.description && (
                <span className="text-xs text-default-400">{option.description}</span>
              )}
            </div>
          </SelectItem>
        ))}
      </HeroSelect>
    );
  }
);

Select.displayName = 'Select'; 