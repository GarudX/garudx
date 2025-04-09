import React, { forwardRef } from 'react';
import { Radio, RadioGroup as HeroRadioGroup } from '@heroui/react';
import { cn } from '../../utils/cn';

export interface RadioOption {
  id: string;
  label: string;
  value: string;
  description?: string;
}

export interface RadioButtonProps {
  name?: string;
  label?: string;
  description?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'standard' | 'technical';
  isChecked?: boolean;
  defaultChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  isInvalid?: boolean;
  ariaLabel?: string;
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
      ariaLabel,
      ...props
    },
    ref
  ) => {
    // Convert our variant to HeroUI color
    const color = propColor || (variant === 'technical' ? 'primary' : 'default');

    // Create props object to handle aria attributes correctly
    const additionalProps: Record<string, any> = {};
    if (!label && ariaLabel) {
      additionalProps['aria-label'] = ariaLabel;
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
          label: variant === 'technical' ? 'text-titaniumSilver font-mono tracking-wide' : 'text-titaniumSilver',
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

export interface RadioGroupProps {
  label?: string;
  description?: string;
  error?: string;
  name: string;
  options: RadioOption[];
  defaultValue?: string;
  value?: string;
  orientation?: 'horizontal' | 'vertical';
  onChange?: (value: string) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'standard' | 'technical';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  isDisabled?: boolean;
  isRequired?: boolean;
  ariaLabel?: string;
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
  ariaLabel,
  ...props
}) => {
  // Convert our variant to HeroUI color
  const color = propColor || (variant === 'technical' ? 'primary' : 'default');

  // Create props object to handle aria attributes correctly
  const additionalProps: Record<string, any> = {};
  if (!label && ariaLabel) {
    additionalProps['aria-label'] = ariaLabel;
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
        label: variant === 'technical' ? 'text-electricBlue/80 font-mono tracking-wide' : 'text-titaniumSilver',
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
            label: variant === 'technical' ? 'text-titaniumSilver font-mono tracking-wide' : 'text-titaniumSilver',
          }}
        >
          {option.label}
        </Radio>
      ))}
    </HeroRadioGroup>
  );
}; 