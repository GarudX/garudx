import { forwardRef } from 'react';
import { Checkbox as HeroCheckbox } from '@heroui/react';
import { cn } from '../../utils/helpers/cn';
import { 
  CheckboxVariant, 
  CheckboxSize, 
  CheckboxColor, 
  BaseComponentProps 
} from '../../types/design-system';

// Extended Checkbox props interface using design system types
export interface CheckboxProps extends BaseComponentProps {
  label?: string;
  description?: string;
  error?: string;
  size?: CheckboxSize;
  variant?: CheckboxVariant;
  isChecked?: boolean;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  onChange?: (isChecked: boolean) => void;
  lineThrough?: boolean;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  color?: CheckboxColor;
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
        radius={radius}
        lineThrough={lineThrough}
        color={color}
        className={cn(
          variant === 'technical' && 'font-mono',
          className
        )}
        classNames={{
          label: variant === 'technical' ? 'text-gray-300 font-mono tracking-wide' : 'text-gray-300',
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
