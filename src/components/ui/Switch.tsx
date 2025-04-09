import React, { forwardRef } from 'react';
import { Switch as HeroSwitch } from '@heroui/react';
import { cn } from '../../lib/utils';

export interface SwitchProps {
  label?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  variant?: 'standard' | 'technical';
  isChecked?: boolean;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (isChecked: boolean) => void;
  className?: string;
  thumbIcon?: React.ReactNode;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      description,
      size = 'md',
      color: propColor,
      variant = 'standard',
      isChecked,
      defaultChecked,
      isDisabled,
      onChange,
      className,
      thumbIcon,
      startContent,
      endContent,
      ...props
    },
    ref
  ) => {
    // Convert our variant to HeroUI color
    const color = propColor || (variant === 'technical' ? 'primary' : 'default');

    return (
      <HeroSwitch
        ref={ref}
        size={size}
        color={color}
        isSelected={isChecked}
        defaultSelected={defaultChecked}
        isDisabled={isDisabled}
        onValueChange={onChange}
        description={description}
        thumbIcon={thumbIcon}
        startContent={startContent}
        endContent={endContent}
        className={cn(
          variant === 'technical' && 'font-mono',
          className
        )}
        classNames={{
          label: variant === 'technical' ? 'text-titaniumSilver font-mono tracking-wide' : 'text-titaniumSilver',
        }}
        {...props}
      >
        {label}
      </HeroSwitch>
    );
  }
);

Switch.displayName = 'Switch'; 