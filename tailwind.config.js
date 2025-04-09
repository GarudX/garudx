/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/react";

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './index.html',
    './node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        midnight: '#121212',
        darkSlate: '#1E1E24',
        
        // Accent colors
        electricBlue: '#3A86FF',
        titaniumSilver: '#ADB5BD',
        dataBlue: '#4361EE',
        
        // Extended palette
        deepIndigo: '#0D1B2A',
        mutedTeal: '#1B7F79',
        alertRed: '#E63946',
        signalGreen: '#4D9078',
        warningAmber: '#FFB703',
        
        // Neutrals
        charcoal: '#333333',
        silver: '#C0C0C0',
        platinum: '#E5E5E5',
        
        // Legacy colors (for backward compatibility)
        neonBlue: '#00F0FF',  // Being phased out
        electricPurple: '#BC13FE',  // Being phased out
        neonPink: '#FF36AB',  // Being phased out
        deepNavy: '#0D1117',  // Being phased out
        gunmetal: '#2A2A3C',  // Being phased out
      },
      fontFamily: {
        heading: ['JetBrains Mono', 'Montserrat', 'sans-serif'],
        body: ['JetBrains Mono', 'Inter', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'technical': '0 2px 8px rgba(0, 0, 0, 0.15)',
        'focus': '0 0 0 2px rgba(58, 134, 255, 0.3)',
        'glow-blue': '0 0 8px rgba(58, 134, 255, 0.3)',
        'glow-red': '0 0 8px rgba(230, 57, 70, 0.3)',
      },
      backgroundImage: {
        'precision-grid': 'linear-gradient(to right, rgba(173, 181, 189, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(173, 181, 189, 0.05) 1px, transparent 1px)',
        'tech-gradient': 'linear-gradient(135deg, #121212 0%, #1E1E24 100%)',
      },
      spacing: {
        // Technical precise spacing values
        '4.5': '1.125rem',
        '18': '4.5rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'data-pulse': 'dataPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        dataPulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [heroui()],
} 