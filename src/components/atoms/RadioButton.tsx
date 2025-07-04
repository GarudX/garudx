import React, { forwardRef } from 'react';
import { Radio, RadioGroup as HeroRadioGroup } from '@heroui/react';
import { cn } from '../../utils/helpers/cn';
import { 
  RadioVariant, 
  RadioSize, 
  RadioColor, 
  BaseComponentProps 
} from '../../types/design-system';

export interface RadioOption {
  id: string;
  label: string;
  value: string;
  description?: string;
}

// Extended RadioButton props interface using design system types
export interface RadioButtonProps extends BaseComponentProps {
  name?: string;
  label?: string;
  description?: string;
  error?: string;
  size?: RadioSize;
  variant?: RadioVariant;
  isChecked?: boolean;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  color?: RadioColor;
  isInvalid?: boolean;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      name,
      label,
      description,
      error,
      size = 'md',
      variant = 'standard',
      isChecked,
      defaultChecked,
      isDisabled,
      onChange,
      value,
      className,
      color: propColor,
      isInvalid,
      ...props
    },
    ref
  ) => {
    // Convert our variant to HeroUI color
    const color = propColor || (variant === 'technical' ? 'primary' : 'default');

    // Create props object to handle aria attributes correctly
    const additionalProps: Record<string, any> = {};
    if (!label && props['aria-label']) {
      additionalProps['aria-label'] = props['aria-label'];
    }

    return (
      <Radio
        ref={ref}
        name={name}
        value={value}
        checked={isChecked}
        defaultChecked={defaultChecked}
        isDisabled={isDisabled}
        onChange={onChange}
        size={size}
        description={description}
        color={color}
        isInvalid={!!error || isInvalid}
        className={cn(
          variant === 'technical' && 'font-mono',
          className
        )}
        classNames={{
          label: variant === 'technical' ? 'text-gray-300 font-mono tracking-wide' : 'text-gray-300',
        }}
        {...additionalProps}
        {...props}
      >
        {label}
      </Radio>
    );
  }
);

RadioButton.displayName = 'RadioButton';

// Extended RadioGroup props interface using design system types
export interface RadioGroupProps extends BaseComponentProps {
  label?: string;
  description?: string;
  error?: string;
  name: string;
  options: RadioOption[];
  defaultValue?: string;
  value?: string;
  orientation?: 'horizontal' | 'vertical';
  onChange?: (value: string) => void;
  size?: RadioSize;
  variant?: RadioVariant;
  color?: RadioColor;
  isDisabled?: boolean;
  isRequired?: boolean;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  description,
  error,
  name,
  options,
  defaultValue,
  value,
  orientation = 'vertical',
  onChange,
  className,
  size = 'md',
  variant = 'standard',
  color: propColor,
  isDisabled,
  isRequired,
  ...props
}) => {
  // Convert our variant to HeroUI color
  const color = propColor || (variant === 'technical' ? 'primary' : 'default');

  // Create props object to handle aria attributes correctly
  const additionalProps: Record<string, any> = {};
  if (!label && props['aria-label']) {
    additionalProps['aria-label'] = props['aria-label'];
  }

  return (
    <HeroRadioGroup
      label={label}
      description={description}
      errorMessage={error}
      name={name}
      defaultValue={defaultValue}
      value={value}
      orientation={orientation}
      onValueChange={onChange}
      size={size}
      color={color}
      isDisabled={isDisabled}
      isRequired={isRequired}
      className={cn(
        'flex flex-col gap-2',
        variant === 'technical' && 'font-mono',
        className
      )}
      classNames={{
        label: variant === 'technical' ? 'text-blue-500/80 font-mono tracking-wide' : 'text-gray-300',
      }}
      {...additionalProps}
      {...props}
    >
      {options.map((option) => (
        <Radio
          key={option.id}
          value={option.value}
          description={option.description}
          className={cn(
            variant === 'technical' && 'font-mono',
          )}
          classNames={{
            label: variant === 'technical' ? 'text-gray-300 font-mono tracking-wide' : 'text-gray-300',
          }}
        >
          {option.label}
        </Radio>
      ))}
    </HeroRadioGroup>
  );
}; 
