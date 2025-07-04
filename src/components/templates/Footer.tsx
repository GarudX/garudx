import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiFacebook, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { cn } from '../../utils/helpers/cn';
import logoImage from '../../assets/logos/GarudX-Logo-Flat-Dark.webp';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/garudx', icon: FiLinkedin },
  { name: 'Twitter', href: 'https://twitter.com/garudx', icon: FiTwitter },
  { name: 'Facebook', href: 'https://facebook.com/garudx', icon: FiFacebook },
];

const navigationLinks = {
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
  ],
  Solutions: [
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Benefits', href: '/benefits' },
    { name: 'Features', href: '/features' },
    { name: 'Case Studies', href: '/case-studies' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ]
};

const contactInfo = [
  { 
    icon: FiMapPin,
    label: 'Visit Us',
    primary: 'Kathmandu, Nepal',
    secondary: 'Thamel, Kathmandu 44600'
  },
  {
    icon: FiPhone,
    label: 'Call Us',
    primary: '+977 (1) 234-5678',
    secondary: 'Mon-Fri 9:00-18:00'
  },
  {
    icon: FiMail,
    label: 'Email Us',
    primary: 'contact@garudx.com',
    secondary: 'support@garudx.com'
  }
];

// Animation variants
const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const hoverVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

export const Footer = () => {
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const [isNewsletterFocused, setIsNewsletterFocused] = useState(false);

  return (
    <footer className="relative min-h-[600px] overflow-hidden bg-[#0A0A0F]">
      {/* Enhanced background system */}
      <div className="absolute inset-0">
        {/* Base dark gradient - made darker for better star visibility */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f0f1f_0%,#030305_100%)]" />
        
        {/* Colored gradient overlays */}
        <div className="absolute inset-0">
          {/* Primary blue-purple gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-10%,#3b82f6_0%,transparent_45%)] opacity-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_150%,#8b5cf6_0%,transparent_45%)] opacity-10" />
          
          {/* Accent gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_80%,#1d4ed8_0%,transparent_30%)] opacity-5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_60%,#4f46e5_0%,transparent_30%)] opacity-5" />
          
          {/* Subtle rose tint */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_100%,#be185d_0%,transparent_25%)] opacity-3" />
        </div>

        {/* Enhanced grid system with masks */}
        <div className="absolute inset-0">
          {/* Main grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Larger grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:96px_96px]" />

          {/* Grid fade effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#030305_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#030305]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent" style={{ top: '70%' }} />
        </div>

        {/* Noise texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-15" />

        {/* Animated highlights */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-24">
        {/* Top Section with Logo and Newsletter */}
        <motion.div 
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20 blur-3xl scale-150" />
            <img 
              src={logoImage} 
              alt="GarudX" 
              className="h-32 md:h-40 relative filter brightness-0 invert opacity-[0.95] drop-shadow-2xl" 
            />
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <h2 className="text-lg md:text-xl font-light text-white mb-4">
              Epic Aerial Cinematography & FPV Innovation
            </h2>
            <p className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed">
              From massive cinelifters to precision FPV racing drones, we capture the impossible. 
              Based in the heart of the Himalayas, we bring cutting-edge drone technology to breathtaking locations.
            </p>
            
            <motion.div 
              className={cn(
                "relative flex gap-2 p-1 rounded-full transition-all duration-300",
                isNewsletterFocused ? "bg-white/10" : "bg-white/5"
              )}
            >
              <input
                type="email"
                placeholder="Get updates on our latest drone builds & adventures"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none"
                onFocus={() => setIsNewsletterFocused(true)}
                onBlur={() => setIsNewsletterFocused(false)}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div 
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-12 gap-x-8 gap-y-16 mb-16"
        >
          {/* Contact Information */}
          <motion.div className="col-span-12 lg:col-span-4">
            <h3 className="text-base font-medium text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  variants={hoverVariants}
                  initial="rest"
                  whileHover="hover"
                  className="flex items-start space-x-3"
                  onHoverStart={() => setHoveredContact(index)}
                  onHoverEnd={() => setHoveredContact(null)}
                >
                  <div className={cn(
                    "p-2.5 rounded-full transition-colors",
                    hoveredContact === index ? "bg-blue-500/20" : "bg-white/5"
                  )}>
                    <info.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400">{info.label}</p>
                    <p className="text-white text-sm mt-1">{info.primary}</p>
                    <p className="text-gray-400 text-xs">{info.secondary}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          {Object.entries(navigationLinks).map(([category, links]) => (
            <motion.div 
              key={category}
              className="col-span-12 lg:col-span-2"
              variants={contentVariants}
            >
              <h3 className="text-base font-medium text-white mb-6">{category}</h3>
              <nav className="space-y-3">
                {links.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div className="col-span-12 lg:col-span-2">
            <h3 className="text-base font-medium text-white mb-6">Follow Us</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.2)" 
                  }}
                  className="p-2.5 rounded-full bg-white/10 text-white hover:text-blue-400 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          variants={contentVariants}
          className="relative pt-8 mt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} GarudX Incorporation Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <motion.a
                href="/sitemap"
                whileHover={{ x: 2 }}
                className="text-sm text-gray-400 hover:text-white"
              >
                Sitemap
              </motion.a>
              <span className="text-gray-700">•</span>
              <motion.button
                whileHover={{ x: 2 }}
                className="text-sm text-gray-400 hover:text-white"
              >
                Cookie Preferences
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}; 
