// Type definitions for atom components

import { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

// Button component types
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'success';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

// Input component types
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'technical';
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

// Icon component types
export type IconName = 
  | 'ArrowRightIcon'
  | 'ArrowLeftIcon'
  | 'Bars3Icon'
  | 'XMarkIcon'
  | 'ArrowTopRightOnSquareIcon'
  | 'PlayIcon'
  | 'PauseIcon'
  | 'ArrowDownTrayIcon'
  | 'ArrowUpTrayIcon'
  | 'ShareIcon'
  | 'PlusIcon'
  | 'MinusIcon'
  | 'InformationCircleIcon'
  | 'ExclamationTriangleIcon'
  | 'ExclamationCircleIcon'
  | 'CheckCircleIcon'
  | 'LockClosedIcon'
  | 'LockOpenIcon'
  | 'ChatBubbleLeftRightIcon'
  | 'HashtagIcon'
  | 'CameraIcon'
  | 'FilmIcon'
  | 'UserGroupIcon'
  | 'RocketLaunchIcon'
  | 'SignalIcon'
  | 'GlobeAltIcon'
  | 'Cog6ToothIcon';

export interface IconProps {
  name: IconName;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'interactive' | 'subtle';
  solid?: boolean;
  className?: string;
}

// Form control types
export interface CheckboxProps {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export interface SwitchProps {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export interface RadioButtonProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
  disabled?: boolean;
  className?: string;
}

export interface RadioGroupProps {
  options: Array<{ label: string; value: string }>;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

// Select component types
export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  className?: string;
}

// TextArea component types
export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'technical';
  label?: string;
  error?: string;
  helperText?: string;
  rows?: number;
}

// NeonText component types
export interface NeonTextProps {
  children: ReactNode;
  color?: 'blue' | 'teal' | 'silver' | 'green' | 'red' | 'yellow';
  intensity?: 'low' | 'medium' | 'high';
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

// AerospaceButton component types
export interface AerospaceButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: ReactNode;
} 