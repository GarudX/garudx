import React, { forwardRef } from 'react';
import { Textarea as HeroTextarea } from '@heroui/react';
import { cn } from '../../lib/utils';

export interface TextAreaProps {
  label?: string;
  error?: string;
  helpText?: string;
  variant?: 'standard' | 'technical';
  inputSize?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  rows?: number;
  maxRows?: number;
  minRows?: number;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  className?: string;
  placeholder?: string;
  description?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  labelPlacement?: 'inside' | 'outside' | 'outside-left';
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      error,
      helpText,
      variant = 'standard',
      inputSize = 'md',
      fullWidth = false,
      rows = 4,
      maxRows,
      minRows,
      isDisabled,
      isInvalid,
      isRequired,
      className,
      placeholder,
      description,
      value,
      defaultValue,
      onChange,
      radius = 'md',
      labelPlacement = 'outside',
      ...props
    },
    ref
  ) => {
    // Convert our variant to HeroUI color
    const color = variant === 'technical' ? 'primary' : 'default';

    return (
      <HeroTextarea
        ref={ref}
        label={label}
        errorMessage={error}
        description={helpText || description}
        variant={variant === 'technical' ? 'bordered' : 'flat'}
        size={inputSize}
        fullWidth={fullWidth}
        rows={rows}
        maxRows={maxRows}
        minRows={minRows}
        isDisabled={isDisabled}
        isInvalid={!!error || isInvalid}
        isRequired={isRequired}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        radius={radius}
        color={color}
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

TextArea.displayName = 'TextArea'; 