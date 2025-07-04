// Application-level constants

// Navigation routes
export const ROUTES = {
  HOME: '/',
  COMPONENTS: '/components',
  AEROSPACE: '/aerospace',
  SERVICES: '/services',
  PORTFOLIO: '/portfolio',
  ABOUT: '/about',
  CONTACT: '/contact'
} as const;

// Application metadata
export const APP_CONFIG = {
  name: 'GarudX',
  description: 'Drone Experts from the Land of Himalayas',
  version: '1.0.0',
  author: 'GarudX Team',
  website: 'https://garudx.com'
} as const;

// Page titles
export const PAGE_TITLES = {
  HOME: 'GarudX | Drone Experts from the Land of Himalayas',
  COMPONENTS: 'Components Showcase | GarudX',
  AEROSPACE: 'Aerospace Design Showcase | GarudX',
  SERVICES: 'Services | GarudX',
  PORTFOLIO: 'Portfolio | GarudX',
  ABOUT: 'About | GarudX',
  CONTACT: 'Contact | GarudX'
} as const;

// Animation constants
export const ANIMATION_CONFIG = {
  durations: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    verySlow: 0.8
  },
  delays: {
    none: 0,
    small: 0.1,
    medium: 0.2,
    large: 0.3
  },
  easings: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out'
  }
} as const; 