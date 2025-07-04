// Design System Configuration
// Centralized design tokens and utilities for consistent styling

import { cn } from '../utils/helpers/cn';
import { 
  ColorTokens, 
  TypographyTokens, 
  SpacingTokens, 
  ShadowTokens, 
  AnimationTokens,
  ThemeConfig,
  HeroUIThemeConfig
} from '../types/design-system';

// ============================================================================
// COLOR SYSTEM - Using standard Tailwind colors
// ============================================================================

export const colorTokens: ColorTokens = {
  // Primary colors
  primary: {
    main: 'blue-500',
    light: 'blue-400',
    dark: 'blue-600',
    contrast: 'gray-50',
  },
  
  // Secondary colors
  secondary: {
    main: 'gray-500',
    light: 'gray-400',
    dark: 'gray-600',
    contrast: 'gray-50',
  },
  
  // Semantic colors
  success: 'emerald-500',
  warning: 'amber-500',
  danger: 'red-500',
  info: 'blue-500',
  
  // Neutral colors
  background: {
    primary: 'gray-50',
    secondary: 'gray-50',
    tertiary: 'gray-100',
  },
  
  surface: {
    primary: 'gray-50',
    secondary: 'gray-50',
    tertiary: 'gray-100',
  },
  
  text: {
    primary: 'gray-900',
    secondary: 'gray-700',
    tertiary: 'gray-500',
    inverse: 'gray-50',
  },
  
  border: {
    primary: 'gray-300',
    secondary: 'gray-200',
    tertiary: 'gray-100',
  },
};

// Legacy color system for backward compatibility
export const colors = {
  // Primary Brand Colors
  primary: {
    50: '#EBF4FF',
    100: '#D6E9FF',
    200: '#ADD3FF',
    300: '#84BDFF',
    400: '#5BA7FF',
    500: '#3A86FF', // electricBlue - Main brand color
    600: '#2E6BCC',
    700: '#235099',
    800: '#173566',
    900: '#0C1A33',
  },
  
  // Neutral Colors
  neutral: {
    50: '#F8F9FA',
    100: '#F1F3F4',
    200: '#E8EAED',
    300: '#DADCE0',
    400: '#BDC1C6',
    500: '#9AA0A6',
    600: '#80868B',
    700: '#5F6368',
    800: '#3C4043',
    900: '#202124',
  },
  
  // Background Colors
  background: {
    primary: '#121212',    // midnight
    secondary: '#1E1E24',  // darkSlate
    tertiary: '#0D1B2A',   // deepIndigo
    overlay: 'rgba(0, 0, 0, 0.6)',
  },
  
  // Text Colors
  text: {
    primary: '#FFFFFF',
    secondary: '#ADB5BD',  // titaniumSilver
    tertiary: '#9AA0A6',
    muted: '#80868B',
    inverse: '#121212',
  },
  
  // Status Colors
  status: {
    success: '#4D9078',    // signalGreen
    warning: '#FFB703',    // warningAmber
    error: '#E63946',      // alertRed
    info: '#1B7F79',       // mutedTeal
  },
  
  // Border Colors
  border: {
    primary: 'rgba(173, 181, 189, 0.2)',
    secondary: 'rgba(58, 134, 255, 0.2)',
    accent: 'rgba(58, 134, 255, 0.4)',
  }
} as const;

// ============================================================================
// TYPOGRAPHY SYSTEM
// ============================================================================

export const typographyTokens: TypographyTokens = {
  fontFamily: {
    heading: ['Inter', 'system-ui', 'sans-serif'],
    body: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
};

// Legacy typography system for backward compatibility
export const typography = {
  fontFamily: {
    heading: ['JetBrains Mono', 'Montserrat', 'sans-serif'],
    body: ['JetBrains Mono', 'Inter', 'Roboto', 'sans-serif'],
    mono: ['JetBrains Mono', 'Roboto Mono', 'monospace'],
  },
  
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
  },
  
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
} as const;

// ============================================================================
// SPACING SYSTEM
// ============================================================================

export const spacingTokens: SpacingTokens = {
  spacing: {
    '0': '0px',
    'px': '1px',
    '0.5': '0.125rem',
    '1': '0.25rem',
    '1.5': '0.375rem',
    '2': '0.5rem',
    '2.5': '0.625rem',
    '3': '0.75rem',
    '3.5': '0.875rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '28': '7rem',
    '32': '8rem',
    '36': '9rem',
    '40': '10rem',
    '44': '11rem',
    '48': '12rem',
    '52': '13rem',
    '56': '14rem',
    '60': '15rem',
    '64': '16rem',
    '72': '18rem',
    '80': '20rem',
    '96': '24rem',
  },
  borderRadius: {
    none: '0px',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
};

// Legacy spacing system for backward compatibility
export const spacing = {
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
  '4xl': '6rem',    // 96px
} as const;

// Legacy border radius system for backward compatibility
export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  full: '9999px',
} as const;

// ============================================================================
// SHADOW SYSTEM
// ============================================================================

export const shadowTokens: ShadowTokens = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: '0 0 #0000',
  glow: {
    primary: '0 0 15px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)',
    secondary: '0 0 15px rgba(107, 114, 128, 0.4), 0 0 30px rgba(107, 114, 128, 0.2)',
    success: '0 0 15px rgba(34, 197, 94, 0.4), 0 0 30px rgba(34, 197, 94, 0.2)',
    warning: '0 0 15px rgba(251, 191, 36, 0.4), 0 0 30px rgba(251, 191, 36, 0.2)',
    danger: '0 0 15px rgba(239, 68, 68, 0.4), 0 0 30px rgba(239, 68, 68, 0.2)',
  },
};

// Legacy shadow system for backward compatibility
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  
  // Technical shadows
  technical: '0 2px 8px rgba(0, 0, 0, 0.15)',
  glow: {
    primary: '0 0 15px rgba(58, 134, 255, 0.3), 0 0 30px rgba(58, 134, 255, 0.2)',
    success: '0 0 15px rgba(77, 144, 120, 0.3), 0 0 30px rgba(77, 144, 120, 0.2)',
    warning: '0 0 15px rgba(255, 183, 3, 0.3), 0 0 30px rgba(255, 183, 3, 0.2)',
    error: '0 0 15px rgba(230, 57, 70, 0.3), 0 0 30px rgba(230, 57, 70, 0.2)',
  },
} as const;

// ============================================================================
// ANIMATION SYSTEM
// ============================================================================

export const animationTokens: AnimationTokens = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  easing: {
    linear: 'linear',
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  delay: {
    none: '0ms',
    fast: '100ms',
    normal: '200ms',
    slow: '300ms',
  },
};

// ============================================================================
// THEME CONFIGURATION
// ============================================================================

export const themeConfig: ThemeConfig = {
  colors: colorTokens,
  typography: typographyTokens,
  spacing: spacingTokens,
  shadows: shadowTokens,
  animations: animationTokens,
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// ============================================================================
// HEROUI THEME CONFIGURATION
// ============================================================================

export const heroUIThemeConfig: HeroUIThemeConfig = {
  type: 'light',
  colors: {
    primary: {
      DEFAULT: '#3b82f6', // blue-500
      foreground: '#ffffff',
    },
    secondary: {
      DEFAULT: '#6b7280', // gray-500
      foreground: '#ffffff',
    },
    success: {
      DEFAULT: '#22c55e', // emerald-500
      foreground: '#ffffff',
    },
    warning: {
      DEFAULT: '#fbbf24', // amber-500
      foreground: '#000000',
    },
    danger: {
      DEFAULT: '#ef4444', // red-500
      foreground: '#ffffff',
    },
    background: {
      DEFAULT: '#ffffff',
      foreground: '#111827', // gray-900
    },
    focus: {
      DEFAULT: '#3b82f6', // blue-500
    },
  },
  layout: {
    disableBlur: false,
    borderWeight: 'normal',
  },
};

// ============================================================================
// COMPONENT VARIANTS
// ============================================================================

export const buttonVariants = {
  primary: {
    base: 'bg-blue-500 hover:bg-blue-600 text-white border border-blue-500',
    disabled: 'bg-gray-400 text-gray-600 border-gray-400 cursor-not-allowed',
    loading: 'opacity-80 cursor-wait',
  },
  secondary: {
    base: 'bg-transparent hover:bg-gray-100 text-gray-900 border border-gray-300',
    disabled: 'bg-transparent text-gray-400 border-gray-200 cursor-not-allowed',
    loading: 'opacity-80 cursor-wait',
  },
  tertiary: {
    base: 'bg-transparent hover:bg-gray-50 text-gray-700 border border-transparent',
    disabled: 'bg-transparent text-gray-400 border-transparent cursor-not-allowed',
    loading: 'opacity-80 cursor-wait',
  },
  technical: {
    base: 'bg-gray-800/40 hover:bg-gray-800/60 text-blue-500 border border-blue-500/40 font-mono tracking-wide',
    disabled: 'bg-gray-800/40 text-gray-500 border-gray-500/40 cursor-not-allowed',
    loading: 'opacity-80 cursor-wait',
  },
} as const;

export const cardVariants = {
  standard: {
    base: 'bg-white border border-gray-200 shadow-md',
    hover: 'hover:shadow-lg transition-shadow',
  },
  technical: {
    base: 'bg-gray-800/40 backdrop-blur-md border border-blue-500/20 shadow-md',
    hover: 'hover:border-blue-500/40 hover:shadow-lg transition-all',
  },
  glass: {
    base: 'bg-white/10 backdrop-blur-md border border-white/20',
    hover: 'hover:bg-white/20 hover:border-white/30 transition-all',
  },
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export const getButtonClasses = (
  variant: keyof typeof buttonVariants = 'primary',
  size: 'sm' | 'md' | 'lg' = 'md',
  isDisabled = false,
  isLoading = false,
  isGlowing = false,
  className = ''
) => {
  const variantClasses = buttonVariants[variant];
  const stateClasses = isDisabled ? variantClasses.disabled : variantClasses.base;
  const loadingClasses = isLoading ? variantClasses.loading : '';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const glowClasses = isGlowing ? shadowTokens.glow.primary : '';
  
  return cn(
    'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    sizeClasses[size],
    stateClasses,
    loadingClasses,
    glowClasses,
    className
  );
};

export const getCardClasses = (
  variant: keyof typeof cardVariants = 'standard',
  isHoverable = false,
  className = ''
) => {
  const variantClasses = cardVariants[variant];
  const hoverClasses = isHoverable ? variantClasses.hover : '';
  
  return cn(
    'rounded-lg transition-all duration-200',
    variantClasses.base,
    hoverClasses,
    className
  );
};

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================

export const animations = {
  fadeIn: 'animate-in fade-in duration-300',
  slideUp: 'animate-in slide-in-from-bottom-4 duration-300',
  slideDown: 'animate-in slide-in-from-top-4 duration-300',
  slideLeft: 'animate-in slide-in-from-right-4 duration-300',
  slideRight: 'animate-in slide-in-from-left-4 duration-300',
  scale: 'animate-in zoom-in-95 duration-300',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
} as const;

// ============================================================================
// LAYOUT UTILITIES
// ============================================================================

export const layout = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-16 lg:py-24',
  grid: {
    cols1: 'grid grid-cols-1',
    cols2: 'grid grid-cols-1 md:grid-cols-2',
    cols3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    cols4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  },
  flex: {
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    start: 'flex items-center justify-start',
    end: 'flex items-center justify-end',
  },
} as const;

// ============================================================================
// BACKGROUND PATTERNS
// ============================================================================

export const backgrounds = {
  grid: 'bg-precision-grid bg-[length:20px_20px]',
  gradient: {
    primary: 'bg-gradient-to-br from-background-primary to-background-secondary',
    technical: 'bg-gradient-to-br from-background-secondary to-background-tertiary',
  },
} as const; 