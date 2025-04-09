import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from '@heroui/react'
import App from './App.tsx'
import './index.css'
import './App.css'

// Define the theme types we'll use with HeroUI
const darkTheme = {
  type: "dark",
  colors: {
    primary: {
      DEFAULT: "#3A86FF", // electricBlue
      foreground: "#FFFFFF"
    },
    secondary: {
      DEFAULT: "#1B7F79", // mutedTeal 
      foreground: "#FFFFFF"
    },
    success: {
      DEFAULT: "#4D9078", // signalGreen
      foreground: "#FFFFFF"
    },
    warning: {
      DEFAULT: "#FFB703", // warningAmber
      foreground: "#000000"
    },
    danger: {
      DEFAULT: "#E63946", // alertRed
      foreground: "#FFFFFF"
    },
    background: {
      DEFAULT: "#121212", // midnight
      foreground: "#FFFFFF"
    },
    focus: {
      DEFAULT: "#3A86FF", // electricBlue
    },
  },
  layout: {
    disableBlur: false,
    borderWeight: "normal",
  },
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider theme={darkTheme}>
      <App />
    </HeroUIProvider>
  </StrictMode>,
)
