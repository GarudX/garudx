import { ReactNode } from 'react';
import { Textarea as HeroTextarea } from '@heroui/react';
import { cn } from '../../utils/helpers/cn';
import { 
  TextAreaVariant, 
  TextAreaSize, 
  TextAreaColor, 
  FormFieldProps 
} from '../../types/design-system';

// Extended TextArea props interface using design system types
export interface TextAreaProps extends FormFieldProps {
  placeholder?: string;
  variant?: TextAreaVariant;
  size?: TextAreaSize;
  color?: TextAreaColor;
  isReadOnly?: boolean;
  startContent?: ReactNode;
  endContent?: ReactNode;
  labelClassName?: string;
  inputClassName?: string;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  minRows?: number;
  maxRows?: number;
  rows?: number;
  value?: string;
  onChange?: (value: string) => void;
}

export const TextArea = ({
  label,
  placeholder,
  variant = 'bordered',
  size = 'md',
  color = 'primary',
  isRequired = false,
  isDisabled = false,
  isReadOnly = false,
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
  minRows,
  maxRows,
  rows,
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <HeroTextarea
      label={label}
      placeholder={placeholder}
      variant={variant}
      size={size}
      color={color}
      isRequired={isRequired}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      description={description}
      startContent={startContent}
      endContent={endContent}
      radius={radius}
      minRows={minRows}
      maxRows={maxRows}
      rows={rows}
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
    />
  );
}; 
