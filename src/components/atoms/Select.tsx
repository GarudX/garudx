import { ReactNode } from 'react';
import { Select as HeroSelect, SelectItem } from '@heroui/react';
import { cn } from '../../utils/helpers/cn';
import { 
  SelectVariant, 
  SelectSize, 
  SelectColor, 
  SelectionMode, 
  FormFieldProps 
} from '../../types/design-system';

export interface SelectOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

// Extended Select props interface using design system types
export interface SelectProps extends FormFieldProps {
  placeholder?: string;
  options: SelectOption[];
  selectedKeys?: string[];
  defaultSelectedKeys?: string[];
  variant?: SelectVariant;
  size?: SelectSize;
  color?: SelectColor;
  startContent?: ReactNode;
  endContent?: ReactNode;
  labelClassName?: string;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  selectionMode?: SelectionMode;
  onSelectionChange?: (keys: any) => void;
  onChange?: (value: string) => void;
}

export const Select = ({
  label,
  placeholder,
  options,
  selectedKeys,
  defaultSelectedKeys,
  variant = 'bordered',
  size = 'md',
  color = 'primary',
  isRequired = false,
  isDisabled = false,
  isInvalid = false,
  errorMessage,
  description,
  startContent,
  endContent,
  fullWidth = false,
  className,
  labelClassName,
  radius = 'md',
  selectionMode = 'single',
  onSelectionChange,
  onChange,
}: SelectProps) => {
  const handleSelectionChange = (keys: any) => {
    if (onSelectionChange) {
      onSelectionChange(keys);
    }
    if (onChange && selectionMode === 'single') {
      const selectedKey = Array.from(keys)[0] as string;
      onChange(selectedKey);
    }
  };

  return (
    <HeroSelect
      label={label}
      placeholder={placeholder}
      selectedKeys={selectedKeys}
      defaultSelectedKeys={defaultSelectedKeys}
      variant={variant}
      size={size}
      color={color}
      isRequired={isRequired}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      description={description}
      startContent={startContent}
      endContent={endContent}
      radius={radius}
      selectionMode={selectionMode}
      onSelectionChange={handleSelectionChange}
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
        trigger: cn(
          'bg-white border border-gray-300 hover:border-gray-400 focus-within:border-blue-500',
          isInvalid && 'border-red-500',
          isDisabled && 'bg-gray-50 border-gray-200'
        ),
        value: 'text-gray-900',
        listbox: 'bg-white border border-gray-200 shadow-lg',
      }}
    >
      {options.map((option) => (
        <SelectItem
          key={option.value}
          textValue={option.label}
          isDisabled={option.disabled}
        >
          <div className="flex flex-col">
            <span>{option.label}</span>
            {option.description && (
              <span className="text-xs text-gray-500">{option.description}</span>
            )}
          </div>
        </SelectItem>
      ))}
    </HeroSelect>
  );
}; 
