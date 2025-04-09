import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { NeonText } from '../ui/NeonText';
import { Button } from '../ui/Button';
import { Card } from '@heroui/react';
import logoImage from '../../assets/logos/GarudX-Logo-Flat-Dark.webp';

const navigation = {
  services: [
    { name: 'Aerial Cinematography', href: '/services#aerial-cinematography' },
    { name: 'Drone Design & R&D', href: '/services#drone-design' },
    { name: 'Anti-Drone Systems', href: '/anti-drone-systems' },
    { name: 'Training Programs', href: '/training' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

// Hexagon grid SVG component for the background
const HexagonGrid = () => (
  <svg 
    className="absolute w-full h-full top-0 left-0 opacity-5" 
    viewBox="0 0 1000 1000" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
        <g stroke="url(#hexGradient)" strokeWidth="1" fill="none">
          <path d="M25 0 L50 14.4 L50 38.6 L25 53 L0 38.6 L0 14.4 Z" />
        </g>
      </pattern>
      <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0088ff" />
        <stop offset="100%" stopColor="#b224ef" />
      </linearGradient>
      <radialGradient id="fadeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </radialGradient>
      <mask id="fadeMask">
        <rect width="100%" height="100%" fill="url(#fadeGradient)" />
      </mask>
    </defs>
    <rect width="100%" height="100%" fill="url(#hexagons)" mask="url(#fadeMask)" />
  </svg>
);

// Animated link component with hover effect
const AnimatedLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-base text-titaniumSilver hover:text-electricBlue relative group inline-block"
    whileHover={{ x: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
    <motion.span 
      className="absolute left-0 bottom-0 w-0 h-px bg-electricBlue"
      initial={{ width: 0 }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.3 }}
    />
  </motion.a>
);

// Animated section component
const FooterSection = ({ 
  title, 
  children,
  delay = 0 
}: { 
  title: string; 
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
        <NeonText color="teal" intensity="low">{title}</NeonText>
      </h3>
      {children}
    </motion.div>
  );
};

/**
 * FuturisticFooter Component
 * 
 * A high-tech, futuristic footer that includes:
 * - Hexagonal grid background with fading effect
 * - Glowing hover effects and animations
 * - Data pulse visual elements
 * - Responsive layout with animated sections
 */
export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  // Update year automatically
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="relative bg-gradient-to-b from-darkSlate to-midnight overflow-hidden" aria-labelledby="footer-heading">
      {/* Digital circuit lines - top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-electricBlue to-transparent opacity-30" />
      
      {/* Hexagon grid background */}
      <HexagonGrid />
      
      {/* Animated data pulses */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-electricBlue"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 5 + 5,
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and company info section */}
          <motion.div 
            className="space-y-8 xl:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div>
              <div className="flex justify-center">
                <motion.img 
                  src={logoImage}
                  alt="GarudX Logo"
                  className="h-12 w-auto"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
                />
              </div>
              <p className="text-white text-sm mt-3 text-center">
                Drone Experts from the Land of Himalayas
              </p>
              <Card className="mt-4 p-4 bg-darkSlate/30 backdrop-blur-md border-electricBlue/10 border">
                <p className="text-titaniumSilver text-sm">
                  GarudX Aerial Incorporation specializes in custom drone solutions, aerial cinematography, and anti-drone systems.
                </p>
                <motion.div
                  className="h-px w-full bg-gradient-to-r from-electricBlue/0 via-electricBlue/50 to-electricBlue/0 mt-3"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </Card>
            </div>
            
            {/* Social icons with animations */}
            <div className="flex space-x-5">
              {navigation.social.map((item) => (
                <motion.a 
                  key={item.name} 
                  href={item.href}
                  className="text-titaniumSilver hover:text-electricBlue"
                  whileHover={{ y: -5, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              ))}
              <motion.div
                className="absolute -z-10 w-full h-6 blur-md"
                style={{
                  background: "linear-gradient(90deg, rgba(0,136,255,0) 0%, rgba(0,136,255,0.3) 50%, rgba(0,136,255,0) 100%)",
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                  x: [-100, 400],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>
          
          {/* Navigation sections */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Services section */}
              <FooterSection title="Services" delay={0.1}>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <AnimatedLink href={item.href}>{item.name}</AnimatedLink>
                    </li>
                  ))}
                </ul>
              </FooterSection>
              
              {/* Company section */}
              <FooterSection title="Company" delay={0.2}>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <AnimatedLink href={item.href}>{item.name}</AnimatedLink>
                    </li>
                  ))}
                </ul>
              </FooterSection>
            </div>
            
            <div className="md:grid md:grid-cols-1 md:gap-8">
              {/* Legal section */}
              <FooterSection title="Legal" delay={0.3}>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <AnimatedLink href={item.href}>{item.name}</AnimatedLink>
                    </li>
                  ))}
                </ul>
              </FooterSection>
              
              {/* Contact section */}
              <FooterSection title="Contact" delay={0.4}>
                <div className="mt-4 space-y-4">
                  <p className="text-base text-titaniumSilver flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-electricBlue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Kathmandu, Nepal
                  </p>
                  <p className="text-base text-titaniumSilver flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-electricBlue" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    info@garudx.com
                  </p>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.location.href = '/contact'}
                    className="mt-2"
                  >
                    Send Message
                  </Button>
                </div>
              </FooterSection>
            </div>
          </div>
        </div>
        
        {/* Copyright bar */}
        <motion.div 
          className="mt-12 pt-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Digital line animation - improved */}
          <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
            <motion.div
              className="h-full w-[200%]"
              style={{
                background: "linear-gradient(90deg, rgba(58,134,255,0) 0%, rgba(58,134,255,0.7) 25%, rgba(58,134,255,0.7) 50%, rgba(58,134,255,0) 75%)",
              }}
              animate={{
                x: [0, -1000],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-2 h-2 rounded-full bg-electricBlue animate-pulse"></div>
              <p className="text-sm text-titaniumSilver font-technical">
                &copy; {currentYear} GarudX Aerial Incorporation. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-4 items-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-technical bg-electricBlue/10 text-electricBlue border border-electricBlue/20">
                <span className="w-2 h-2 rounded-full bg-electricBlue animate-pulse mr-2"></span>
                <span>System Online</span>
              </span>
              
              <motion.div
                className="px-3 py-1 rounded-full text-xs font-technical bg-black/30 text-titaniumSilver border border-titaniumSilver/20 flex items-center"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(58,134,255,0.1)" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Security Protocol Active</span>
              </motion.div>
            </div>
          </div>
          
          {/* Bottom border line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-electricBlue/30 to-transparent mt-8 opacity-30" />
        </motion.div>
      </div>
    </footer>
  );
}; 