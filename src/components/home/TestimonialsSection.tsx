import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Avatar, Pagination, AvatarProps } from '@heroui/react';
import { StarIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { GlassCard } from '../ui/GlassCard';
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
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-electricBlue/20">
      <UserCircleIcon className="w-10 h-10 text-electricBlue" />
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
      className="py-20 px-4 bg-darkSlate relative"
      id="testimonials"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 bg-precision-grid bg-[length:20px_20px]" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-midnight to-transparent" aria-hidden="true" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-3 py-1 bg-electricBlue/10 rounded-full"
          >
            <span className="text-sm md:text-base tracking-widest uppercase font-mono text-electricBlue flex items-center">
              <FiCrosshair className="mr-2" />
              Mission Reports
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 font-mono"
          >
            Field Operation Feedback
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-electricBlue rounded-full mb-6"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-titaniumSilver max-w-2xl text-center font-mono"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard variant="dark" design="technical" className="h-full">
                <div className="p-6 relative">
                  <div className="mb-2 text-xs font-mono text-electricBlue/70 flex justify-between">
                    <span>OPERATION-{testimonial.id.toString().padStart(4, '0')}</span>
                    <span>VERIFIED</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <AvatarWithFallback
                      radius="full"
                      size="md"
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="border-2 border-electricBlue/30"
                    />
                    <div className="flex flex-col gap-0">
                      <h4 className="text-electricBlue font-bold font-mono text-base">{testimonial.name}</h4>
                      <p className="text-titaniumSilver text-xs font-mono">{testimonial.role} <span className="opacity-50">|</span> {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 p-4 bg-darkSlate/30 border-l-2 border-electricBlue/50 font-mono text-sm text-titaniumSilver">
                    {testimonial.testimonial}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.rating ? 'text-electricBlue' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                    <div className="text-xs font-mono text-titaniumSilver/50">RATING: {testimonial.rating}/5</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center">
          <div className="inline-flex rounded overflow-hidden border border-electricBlue/30 bg-darkSlate/50">
            <Pagination
              showControls
              initialPage={1}
              page={activePage}
              onChange={setActivePage}
              color="primary"
              variant="bordered"
              total={totalPages}
              classNames={{
                cursor: "bg-electricBlue",
                item: "text-titaniumSilver hover:text-electricBlue font-mono text-sm",
                next: "text-electricBlue",
                prev: "text-electricBlue"
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Tactical dot pattern */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none overflow-hidden">
        <div className="w-full h-full bg-repeat-x bg-center" 
          style={{ backgroundImage: 'radial-gradient(circle, rgba(58,134,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
      </div>
    </section>
  );
}; 