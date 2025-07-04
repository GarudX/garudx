import { ReactNode } from 'react';
import { Input as HeroInput } from '@heroui/react';
import { cn } from '../../utils/helpers/cn';
import { 
  InputVariant, 
  InputSize, 
  InputColor, 
  FormFieldProps 
} from '../../types/design-system';

// Extended Input props interface using design system types
export interface InputProps extends FormFieldProps {
  id?: string;
  name?: string;
  placeholder?: string;
  variant?: InputVariant;
  size?: InputSize;
  color?: InputColor;
  isReadOnly?: boolean;
  isClearable?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  labelClassName?: string;
  inputClassName?: string;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = ({
  id,
  name,
  label,
  placeholder,
  variant = 'bordered',
  size = 'md',
  color = 'primary',
  isRequired = false,
  isDisabled = false,
  isReadOnly = false,
  isClearable = false,
  isInvalid = false,
  errorMessage,
  description,
  startContent,
  endContent,
  fullWidth = false,
  className,
  labelClassName,
  inputClassName,
  radius = 'md',
  value,
  onChange,
  ...props
}: InputProps) => {
  return (
    <HeroInput
      id={id}
      name={name}
      label={label}
      placeholder={placeholder}
      variant={variant}
      size={size}
      color={color}
      isRequired={isRequired}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isClearable={isClearable}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      description={description}
      startContent={startContent}
      endContent={endContent}
      radius={radius}
      value={value}
      onValueChange={onChange}
      className={cn(
        // Base styles
        'transition-all duration-200',
        
        // Full width
        fullWidth && 'w-full',
        
        // Custom classes
        className
      )}
      classNames={{
        label: cn(
          'text-sm font-medium text-gray-700',
          labelClassName
        ),
        input: cn(
          'text-gray-900 placeholder-gray-500',
          inputClassName
        ),
        inputWrapper: cn(
          'bg-white border border-gray-300 hover:border-gray-400 focus-within:border-blue-500',
          isInvalid && 'border-red-500',
          isDisabled && 'bg-gray-50 border-gray-200'
        )
      }}
      {...props}
    />
  );
}; 
