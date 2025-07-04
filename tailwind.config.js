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
      fontFamily: {
        heading: ['JetBrains Mono', 'Montserrat', 'sans-serif'],
        body: ['JetBrains Mono', 'Inter', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Roboto Mono', 'monospace'],
      },
      boxShadow: {
        'technical': '0 2px 8px rgba(0, 0, 0, 0.15)',
        'focus': '0 0 0 2px rgba(59, 130, 246, 0.3)',
        'glow-blue': '0 0 8px rgba(59, 130, 246, 0.3)',
        'glow-red': '0 0 8px rgba(239, 68, 68, 0.3)',
      },
      backgroundImage: {
        'precision-grid': 'linear-gradient(to right, rgba(107, 114, 128, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(107, 114, 128, 0.05) 1px, transparent 1px)',
        'tech-gradient': 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
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