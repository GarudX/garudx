import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiChevronRight, FiShield, FiTarget, FiGrid } from 'react-icons/fi';
import { cn } from '../../utils/helpers/cn';
import logoImage from '../../assets/logos/GarudX-Logo-Flat-Dark.webp';

// Navigation structure
const mainNav = [
  { 
    name: 'SERVICES', 
    href: '/services',
            icon: <FiTarget className="text-blue-500" />,
    children: [
      { name: 'Surveillance', description: 'Advanced aerial monitoring systems', href: '/services/surveillance' },
      { name: 'Defense', description: 'Military-grade drone technology', href: '/services/defense' },
      { name: 'Industrial', description: 'Drones for infrastructure inspection', href: '/services/industrial' },
    ]
  },
  { 
    name: 'PRODUCTS', 
    href: '/products',
            icon: <FiShield className="text-blue-500" />
  },
  { 
    name: 'TECH SPECS', 
    href: '/specifications',
    icon: <FiGrid className="text-blue-500" />
  },
  { 
    name: 'COMPONENTS', 
    href: '/components',
    icon: <FiGrid className="text-blue-500" />
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <motion.nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "mt-2" : "mt-6"
      )}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-5">
        <div className="relative overflow-hidden rounded-xl shadow-xl 
                       bg-gradient-to-br from-gray-800/70 to-gray-800/90
                       backdrop-filter backdrop-blur-xl">
          {/* Background with militaristic/tech look */}
          <div className="absolute inset-0 z-[-1]">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-white/5"></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-precision-grid bg-[length:30px_30px] opacity-10"></div>
            
            {/* Glass highlight effect */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {/* Border */}
            <div className="absolute inset-0 rounded-xl pointer-events-none border border-white/10" />
          </div>

          <div className="flex items-center justify-between px-5 py-4">
            {/* Logo Section */}
            <div className="flex items-center">
              <a href="/" className="relative">
                {/* Logo */}
                <img 
                  src={logoImage} 
                  alt="GarudX" 
                  className="h-10 w-auto filter brightness-0 invert" 
                />
              </a>
              
              {/* Militaristic status text */}
              <div className="ml-4 hidden md:block">
                <div className="text-xs font-mono tracking-wider text-gray-400">
                  <span className="text-blue-400">SYS</span>:<span className="text-green-400">ACTIVE</span>
                </div>
                <div className="text-[10px] font-mono tracking-wider text-gray-500">
                  VER 0.7.1 // ENCRYPTED
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {mainNav.map((item) => (
                <div key={item.name} className="relative group">
                  {/* Menu item with dropdown */}
                  {item.children ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center space-x-1.5 text-sm font-bold tracking-widest text-gray-300 hover:text-white focus:outline-none"
                      >
                        <span>{item.name}</span>
                        <FiChevronDown className={cn(
                          "transition-transform duration-200",
                          activeDropdown === item.name ? "rotate-180" : ""
                        )} />
                      </button>
                      
                      {/* Dropdown panel */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute mt-2 w-64 overflow-hidden z-20 
                                     rounded-md shadow-xl 
                                     bg-gradient-to-br from-gray-800/80 to-gray-800/95
                                     backdrop-filter backdrop-blur-xl 
                                     border border-white/10"
                          >
                            {/* Glass top highlight */}
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            
                            <div className="absolute inset-0 bg-precision-grid bg-[length:15px_15px] opacity-5 pointer-events-none"></div>
                            <div className="py-2">
                              {item.children.map((child) => (
                                <a
                                  key={child.name}
                                  href={child.href}
                                  className="block px-4 py-3 text-sm hover:bg-white/5 transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="flex items-start">
                                    <div className="mt-0.5 mr-2 text-blue-400">
                                      <FiChevronRight />
                                    </div>
                                    <div>
                                      <div className="font-medium text-white">{child.name}</div>
                                      <div className="text-xs text-gray-400 mt-0.5">{child.description}</div>
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm font-bold tracking-widest text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </a>
                  )}
                  
                  {/* Highlight bar */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-blue-500/70 via-blue-500 to-blue-500/70"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              ))}
              
              {/* Call to action button */}
              <a 
                href="/contact" 
                className="relative border border-blue-500/30 text-white focus:outline-none rounded-md px-5 py-2 text-sm font-bold tracking-wider transition-colors overflow-hidden group
                          bg-gradient-to-br from-blue-500/10 to-blue-600/20
                          backdrop-filter backdrop-blur-sm"
              >
                {/* Glass top highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                <span className="relative z-10">MAKE CONTACT</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/30"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md bg-gray-800/80 text-gray-300 hover:text-white md:hidden focus:outline-none backdrop-filter backdrop-blur-sm"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="container mx-auto px-5 md:hidden overflow-hidden"
          >
            <motion.div 
              className="mt-2 rounded-md overflow-hidden shadow-xl
                        bg-gradient-to-br from-gray-800/80 to-gray-800/95
                        backdrop-filter backdrop-blur-xl
                        border border-white/10"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
            >
              {/* Glass top highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <div className="px-4 py-3 space-y-3">
                {mainNav.map((item) => (
                  <div key={item.name} className="py-2">
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex justify-between items-center w-full text-left text-sm font-bold tracking-widest text-gray-200 focus:outline-none"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-blue-400">
                              {item.icon}
                            </span>
                            <span>{item.name}</span>
                          </div>
                          <FiChevronDown className={cn(
                            "transition-transform duration-200",
                            activeDropdown === item.name ? "rotate-180" : ""
                          )} />
                        </button>
                        
                        {/* Mobile dropdown */}
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-2 pl-8 border-l space-y-2 border-white/10"
                            >
                              {item.children.map((child) => (
                                <a
                                  key={child.name}
                                  href={child.href}
                                  className="block py-2 text-sm text-gray-300 hover:text-white"
                                >
                                  <div className="flex items-center space-x-2">
                                    <span className="text-blue-400">
                                      <FiChevronRight />
                                    </span>
                                    <span>{child.name}</span>
                                  </div>
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="flex items-center space-x-3 text-sm font-bold tracking-widest text-gray-200 hover:text-white"
                      >
                        <span className="text-blue-400">
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </a>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-white/10">
                  <a
                    href="/contact"
                    className="relative block text-center text-white font-bold py-3 rounded-md tracking-widest text-sm 
                               border border-blue-500/30
                               bg-gradient-to-br from-blue-500/10 to-blue-600/20
                               backdrop-filter backdrop-blur-sm"
                  >
                    {/* Glass top highlight */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    MAKE CONTACT
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}; 
