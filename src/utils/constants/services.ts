// Service-related constants and data

// Service interface
export interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name
  specs: string[];
  ctaText: string;
}

// Service data
export const SERVICES_DATA: ServiceType[] = [
  {
    id: 'fpv',
    title: '6K Cinematic FPV',
    description: 'High-end acrobatic drone cinematography with stunning visual quality for films, commercials, and events.',
    icon: 'FiFilm',
    specs: [
      'Ultra-HD 6K recording',
      'Dynamic flight patterns',
      'Precision stabilization'
    ],
    ctaText: 'DEPLOYMENT INFO'
  },
  {
    id: 'photography',
    title: 'Aerial Photography',
    description: 'Professional aerial imagery for commercial applications, real estate, and tourism promotions.',
    icon: 'FiCamera',
    specs: [
      'High-resolution sensors',
      'Remote position control',
      'Custom image processing'
    ],
    ctaText: 'VIEW CAPABILITIES'
  },
  {
    id: 'realestate',
    title: 'Real Estate Tours',
    description: 'Showcase properties with immersive aerial perspectives that highlight all features and surroundings.',
    icon: 'FiHome',
    specs: [
      '3D property modeling',
      'Interior/exterior mapping',
      'Virtual tour integration'
    ],
    ctaText: 'TACTICAL OVERVIEW'
  },
  {
    id: 'virtual',
    title: 'Virtual Tours',
    description: 'Create virtual experiences of locations, events, and tourist destinations with dynamic drone footage.',
    icon: 'FiGlobe',
    specs: [
      '360° capture system',
      'Immersive depth mapping',
      'Interactive navigation'
    ],
    ctaText: 'ACCESS DATA'
  },
  {
    id: 'search',
    title: 'Search & Rescue',
    description: 'Specialized services for emergency operations and humanitarian missions with thermal imaging capabilities.',
    icon: 'FiShield',
    specs: [
      'Thermal imaging system',
      'Night operations capability',
      'All-weather deployment'
    ],
    ctaText: 'MISSION DETAILS'
  },
  {
    id: 'commercial',
    title: 'Commercial Services',
    description: 'Tailored drone solutions for business applications, including inspections, surveys, and monitoring.',
    icon: 'FiBriefcase',
    specs: [
      'Industrial inspection tech',
      'Survey-grade accuracy',
      'Automated monitoring'
    ],
    ctaText: 'SYSTEM SPECS'
  },
];

// Hero section text lines
export const HERO_TEXT_LINES = [
  "Autonomous Surveillance",
  "Intelligent Defense Systems", 
  "Next-Gen Drone Technology"
];

// Service categories
export const SERVICE_CATEGORIES = {
  CINEMATOGRAPHY: 'cinematography',
  PHOTOGRAPHY: 'photography',
  REAL_ESTATE: 'real-estate',
  VIRTUAL_TOURS: 'virtual-tours',
  SEARCH_RESCUE: 'search-rescue',
  COMMERCIAL: 'commercial'
} as const; 