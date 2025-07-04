// Theme configuration for the application

export const THEME_CONFIG = {
  colors: {
    // Primary colors
    primary: '#3A86FF', // electricBlue
    secondary: '#1B7F79', // mutedTeal
    accent: '#FFB703', // warningAmber
    
    // Background colors
    background: {
      primary: '#121212', // midnight
      secondary: '#1E1E24', // darkSlate
      tertiary: '#0D1B2A', // deepIndigo
    },
    
    // Text colors
    text: {
      primary: '#FFFFFF', // white
      secondary: '#ADB5BD', // titaniumSilver
      muted: '#6C757D',
    },
    
    // Status colors
    status: {
      success: '#4D9078', // signalGreen
      warning: '#FFB703', // warningAmber
      error: '#E63946', // alertRed
      info: '#3A86FF', // electricBlue
    },
    
    // Border colors
    border: {
      primary: 'rgba(173, 181, 189, 0.2)',
      secondary: 'rgba(58, 134, 255, 0.3)',
    }
  },
  
  fonts: {
    primary: 'JetBrains Mono, monospace',
    secondary: 'Inter, sans-serif',
    display: 'Orbitron, sans-serif',
    technical: 'JetBrains Mono, monospace',
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  
  animations: {
    durations: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      verySlow: '800ms',
    },
    easings: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
} as const;

// Theme type
export type ThemeConfig = typeof THEME_CONFIG; 