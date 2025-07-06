// Route definitions for the application

export const ROUTES = {
  HOME: '/',
  AEROSPACE: '/aerospace',
  SERVICES: '/services',
  PORTFOLIO: '/portfolio',
  ABOUT: '/about',
  CONTACT: '/contact'
} as const;

// Route metadata
export const ROUTE_METADATA = {
  [ROUTES.HOME]: {
    title: 'GarudX | Drone Experts from the Land of Himalayas',
    description: 'Professional drone services and aerospace solutions',
    requiresAuth: false
  },

  [ROUTES.AEROSPACE]: {
    title: 'Aerospace Design Showcase | GarudX',
    description: 'Aerospace professional UI implementation',
    requiresAuth: false
  },
  [ROUTES.SERVICES]: {
    title: 'Services | GarudX',
    description: 'Our drone services and capabilities',
    requiresAuth: false
  },
  [ROUTES.PORTFOLIO]: {
    title: 'Portfolio | GarudX',
    description: 'Our work and projects',
    requiresAuth: false
  },
  [ROUTES.ABOUT]: {
    title: 'About | GarudX',
    description: 'Learn more about GarudX',
    requiresAuth: false
  },
  [ROUTES.CONTACT]: {
    title: 'Contact | GarudX',
    description: 'Get in touch with us',
    requiresAuth: false
  }
} as const; 