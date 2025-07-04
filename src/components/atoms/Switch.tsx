import React, { forwardRef } from 'react';
import { Switch as HeroSwitch } from '@heroui/react';
import { cn } from '../../utils/helpers/cn';
import { 
  SwitchVariant, 
  SwitchSize, 
  SwitchColor, 
  BaseComponentProps 
} from '../../types/design-system';

// Extended Switch props interface using design system types
export interface SwitchProps extends BaseComponentProps {
  label?: string;
  description?: string;
  size?: SwitchSize;
  color?: SwitchColor;
  variant?: SwitchVariant;
  isChecked?: boolean;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (isChecked: boolean) => void;
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
        thumbIcon={thumbIcon}
        startContent={startContent}
        endContent={endContent}
        className={cn(
          variant === 'technical' && 'font-mono',
          className
        )}
        classNames={{
          label: variant === 'technical' ? 'text-gray-300 font-mono tracking-wide' : 'text-gray-300',
        }}
        {...props}
      >
        {label}
      </HeroSwitch>
    );
  }
);

Switch.displayName = 'Switch'; 
