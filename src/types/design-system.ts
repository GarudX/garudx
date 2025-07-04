// Design System Type Definitions
// This file contains all the TypeScript types for our design system

// ============================================================================
// DESIGN TOKENS
// ============================================================================

// Color System - Using standard Tailwind colors
export type TailwindColor = 
  | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone'
  | 'red' | 'orange' | 'amber' | 'yellow' | 'lime'
  | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky'
  | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia'
  | 'pink' | 'rose';

export type ColorShade = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';

export type DesignColor = `${TailwindColor}-${ColorShade}`;

// Semantic Color Tokens
export interface ColorTokens {
  // Primary colors
  primary: {
    main: DesignColor;
    light: DesignColor;
    dark: DesignColor;
    contrast: DesignColor;
  };
  
  // Secondary colors
  secondary: {
    main: DesignColor;
    light: DesignColor;
    dark: DesignColor;
    contrast: DesignColor;
  };
  
  // Semantic colors
  success: DesignColor;
  warning: DesignColor;
  danger: DesignColor;
  info: DesignColor;
  
  // Neutral colors
  background: {
    primary: DesignColor;
    secondary: DesignColor;
    tertiary: DesignColor;
  };
  
  surface: {
    primary: DesignColor;
    secondary: DesignColor;
    tertiary: DesignColor;
  };
  
  text: {
    primary: DesignColor;
    secondary: DesignColor;
    tertiary: DesignColor;
    inverse: DesignColor;
  };
  
  border: {
    primary: DesignColor;
    secondary: DesignColor;
    tertiary: DesignColor;
  };
}

// Typography System
export type FontFamily = 'heading' | 'body' | 'mono';
export type FontWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
export type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
export type LineHeight = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';

export interface TypographyTokens {
  fontFamily: Record<FontFamily, string[]>;
  fontSize: Record<FontSize, string>;
  fontWeight: Record<FontWeight, string>;
  lineHeight: Record<LineHeight, string>;
}

// Spacing System
export type SpacingScale = '0' | 'px' | '0.5' | '1' | '1.5' | '2' | '2.5' | '3' | '3.5' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '14' | '16' | '20' | '24' | '28' | '32' | '36' | '40' | '44' | '48' | '52' | '56' | '60' | '64' | '72' | '80' | '96';

export interface SpacingTokens {
  spacing: Record<SpacingScale, string>;
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
}

// Shadow System
export interface ShadowTokens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
  none: string;
  glow: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
  };
}

// Animation System
export interface AnimationTokens {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  easing: {
    linear: string;
    ease: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
  };
  delay: {
    none: string;
    fast: string;
    normal: string;
    slow: string;
  };
}

// ============================================================================
// COMPONENT VARIANTS
// ============================================================================

// Button Variants
export type ButtonVariant = 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';

// Input Variants
export type InputVariant = 'bordered' | 'underlined' | 'flat' | 'faded';
export type InputSize = 'sm' | 'md' | 'lg';
export type InputColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

// Select Variants
export type SelectVariant = 'bordered' | 'underlined' | 'flat' | 'faded';
export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type SelectionMode = 'single' | 'multiple';

// TextArea Variants
export type TextAreaVariant = 'bordered' | 'underlined' | 'flat' | 'faded';
export type TextAreaSize = 'sm' | 'md' | 'lg';
export type TextAreaColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

// Modal Variants
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type ModalPlacement = 'center' | 'top' | 'bottom' | 'auto';
export type ModalBackdrop = 'blur' | 'transparent' | 'opaque';
export type ModalScrollBehavior = 'normal' | 'inside' | 'outside';

// Tabs Variants
export type TabsVariant = 'standard' | 'technical';
export type TabsSize = 'sm' | 'md' | 'lg';
export type TabsColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

// Switch Variants
export type SwitchVariant = 'standard' | 'technical';
export type SwitchSize = 'sm' | 'md' | 'lg';
export type SwitchColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

// Checkbox Variants
export type CheckboxVariant = 'standard' | 'technical';
export type CheckboxSize = 'sm' | 'md' | 'lg';
export type CheckboxColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

// Radio Variants
export type RadioVariant = 'standard' | 'technical';
export type RadioSize = 'sm' | 'md' | 'lg';
export type RadioColor = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

// ============================================================================
// THEME CONFIGURATION
// ============================================================================

export interface ThemeConfig {
  colors: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  shadows: ShadowTokens;
  animations: AnimationTokens;
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
}

export interface HeroUIThemeConfig {
  type: 'light' | 'dark';
  colors: {
    primary: {
      DEFAULT: string;
      foreground: string;
    };
    secondary: {
      DEFAULT: string;
      foreground: string;
    };
    success: {
      DEFAULT: string;
      foreground: string;
    };
    warning: {
      DEFAULT: string;
      foreground: string;
    };
    danger: {
      DEFAULT: string;
      foreground: string;
    };
    background: {
      DEFAULT: string;
      foreground: string;
    };
    focus: {
      DEFAULT: string;
    };
  };
  layout: {
    disableBlur: boolean;
    borderWeight: 'light' | 'normal' | 'bold';
  };
}

// ============================================================================
// COMPONENT PROPS INTERFACES
// ============================================================================

// Base component props that all components should extend
export interface BaseComponentProps {
  className?: string;
  id?: string;
  'data-testid'?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-labelledby'?: string;
}

// Form field base props
export interface FormFieldProps extends BaseComponentProps {
  label?: string;
  description?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  fullWidth?: boolean;
}

// Interactive component base props
export interface InteractiveProps extends BaseComponentProps {
  isDisabled?: boolean;
  isLoading?: boolean;
  disableAnimation?: boolean;
  disableRipple?: boolean;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

// Make specific properties required
export type RequiredProps<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Make specific properties optional
export type OptionalProps<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Component with specific variant
export type ComponentWithVariant<T, V> = T & { variant: V };

// Component with specific size
export type ComponentWithSize<T, S> = T & { size: S };

// Component with specific color
export type ComponentWithColor<T, C> = T & { color: C };

