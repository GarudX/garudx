import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Avatar, Pagination, AvatarProps } from '@heroui/react';
import { StarIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { GlassCard } from '../molecules/GlassCard';
import { FiCrosshair } from 'react-icons/fi';

/**
 * Testimonials Section Component
 * 
 * This component displays client testimonials with carousel-like functionality and tactical styling.
 * Features tactical design elements, autoplay with pause on hover, and military-themed visual details.
 */

// Import available images for testimonial avatars from assets
import avatar1 from '../../assets/images/IMG-20250408-WA0001.jpg';
import avatar2 from '../../assets/images/IMG-20250408-WA0002.jpg';
import avatar3 from '../../assets/images/IMG-20250408-WA0013.jpg';
import avatar4 from '../../assets/images/IMG-20250408-WA0016.jpg';
import avatar5 from '../../assets/images/IMG-20250408-WA0024.jpg';

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Raj Sharma',
    company: 'Himalayan Filmworks',
    role: 'Creative Director',
    avatar: avatar1,
    rating: 5,
    testimonial: "GarudX's aerial cinematography brought our documentary to life. Their technical expertise and understanding of storytelling through drone technology is unmatched in the region.",
  },
  {
    id: 2,
    name: 'Tenzin Norgay',
    company: 'Nepal Tourism Board',
    role: 'Marketing Director',
    avatar: avatar2,
    rating: 5,
    testimonial: "Working with GarudX on our tourism campaign was a game-changer. Their drone footage of the Himalayas captured angles that left our international audience speechless.",
  },
  {
    id: 3,
    name: 'Dr. Sarah Chen',
    company: 'International Rescue Initiative',
    role: 'Emergency Response Coordinator',
    avatar: avatar3,
    rating: 5,
    testimonial: "The thermal imaging capabilities of GarudX drones significantly improved our search and rescue operations in difficult terrain. Their team's rapid response and technical skill saved lives.",
  },
  {
    id: 4,
    name: 'David Miller',
    company: 'Global Earth Productions',
    role: 'Executive Producer',
    avatar: avatar4,
    rating: 5,
    testimonial: "I've worked with drone operators worldwide, but GarudX's knowledge of the Himalayan region combined with their cinematic skills delivered footage beyond our expectations.",
  },
  {
    id: 5,
    name: 'Anjali Patel',
    company: 'Everest Properties',
    role: 'CEO',
    avatar: avatar5,
    rating: 5,
    testimonial: "The aerial property tours created by GarudX have revolutionized how we showcase high-end real estate. Our clients love the comprehensive perspective of properties and surroundings.",
  },
];

/**
 * AvatarWithFallback Component
 * 
 * Provides an Avatar component with a fallback UI in case the image fails to load.
 * Falls back to a UserCircleIcon when the image source is invalid.
 */
interface AvatarWithFallbackProps extends Omit<AvatarProps, 'onError'> {
  src: string;
  alt: string;
}

const AvatarWithFallback = ({ src, alt, ...props }: AvatarWithFallbackProps) => {
  const [hasError, setHasError] = useState(false);
  
  return hasError ? (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20">
      <UserCircleIcon className="w-10 h-10 text-blue-500" />
    </div>
  ) : (
    <Avatar
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      {...props}
    />
  );
};

export const TestimonialsSection = () => {
  const [activePage, setActivePage] = useState(1);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
  const getVisibleTestimonials = () => {
    const startIndex = (activePage - 1) * testimonialsPerPage;
    return testimonials.slice(startIndex, startIndex + testimonialsPerPage);
  };
  
  // Start autoplay when component mounts
  useEffect(() => {
    startAutoplay();
    
    // Clean up interval on unmount
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);
  
  const startAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    autoplayRef.current = setInterval(() => {
      setActivePage((prevPage) => (prevPage % totalPages) + 1);
    }, 5000);
  };
  
  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };
  
  return (
    <section 
      className="py-20 px-4 relative overflow-hidden"
      id="testimonials"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {/* Enhanced Background System - Testimonials Variation */}
      <div className="absolute inset-0">
        {/* Base dark gradient - same as footer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f0f1f_0%,#030305_100%)]" />
        
        {/* Colored gradient overlays - matching footer style */}
        <div className="absolute inset-0">
          {/* Primary blue-purple gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-10%,#3b82f6_0%,transparent_45%)] opacity-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_150%,#8b5cf6_0%,transparent_45%)] opacity-10" />
          
          {/* Accent gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_80%,#1d4ed8_0%,transparent_30%)] opacity-5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_60%,#4f46e5_0%,transparent_30%)] opacity-5" />
          
          {/* Subtle cyan tint */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_90%,#06b6d4_0%,transparent_20%)] opacity-2" />
        </div>

        {/* Enhanced grid system with masks */}
        <div className="absolute inset-0">
          {/* Main grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Larger grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:96px_96px]" />

          {/* Grid fade effects - same as footer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#030305_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#030305]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent" style={{ top: '70%' }} />
        </div>

        {/* Noise texture - exactly like footer */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ci8+PC9zdmc+')] opacity-15" />

        {/* Animated highlights - very subtle like footer */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />
        </div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-3 py-1 bg-blue-500/10 rounded-full"
          >
            <span className="text-sm md:text-base tracking-widest uppercase font-mono text-blue-400 flex items-center">
              <FiCrosshair className="mr-2" />
              Mission Reports
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-header text-3xl md:text-5xl font-bold mb-4 font-mono text-white"
          >
            Field Operation Feedback
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-blue-500 rounded-full mb-6"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 max-w-2xl text-center font-mono"
          >
            Intelligence gathered from field operations showcase the tactical advantages 
            provided by GarudX drone deployment systems.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {getVisibleTestimonials().map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full bg-gray-800/50 border-gray-600">
                <div className="p-6 relative">
                  <div className="mb-2 text-xs font-mono text-blue-400/70 flex justify-between">
                    <span>OPERATION-{testimonial.id.toString().padStart(4, '0')}</span>
                    <span>VERIFIED</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <AvatarWithFallback
                      radius="full"
                      size="md"
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="border-2 border-blue-500/30"
                    />
                    <div className="flex flex-col gap-0">
                      <h4 className="text-blue-400 font-bold font-mono text-base">{testimonial.name}</h4>
                      <p className="text-gray-300 text-xs font-mono">{testimonial.role} <span className="opacity-50">|</span> {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 p-4 bg-gray-800/30 border-l-2 border-blue-500/50 font-mono text-sm text-gray-300">
                    {testimonial.testimonial}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-blue-500' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <div className="text-xs font-mono text-gray-400">RATING: {testimonial.rating}/5</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center">
          <div className="inline-flex rounded overflow-hidden border border-blue-500/30 bg-gray-800/50">
            <Pagination
              showControls
              initialPage={1}
              page={activePage}
              onChange={setActivePage}
              color="primary"
              variant="bordered"
              total={totalPages}
              classNames={{
                cursor: "bg-blue-500",
                item: "text-gray-300 hover:text-blue-400 font-mono text-sm",
                next: "text-blue-400",
                prev: "text-blue-400"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}; 
