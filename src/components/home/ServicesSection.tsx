import { motion } from 'framer-motion';
import { FiTarget, FiFilm, FiCamera, FiHome, FiGlobe, FiShield, FiBriefcase } from 'react-icons/fi';
import { GlassCard } from '../molecules/GlassCard';
import { Button } from '../atoms/Button';

// Define service interface
interface ServiceType {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  specs: string[];
  ctaText: string;
}

// Service data
const services: ServiceType[] = [
  {
    id: 'fpv',
    title: '6K Cinematic FPV',
    description: 'High-end acrobatic drone cinematography with stunning visual quality for films, commercials, and events.',
    icon: FiFilm,
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
    icon: FiCamera,
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
    icon: FiHome,
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
    icon: FiGlobe,
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
    icon: FiShield,
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
    icon: FiBriefcase,
    specs: [
      'Industrial inspection tech',
      'Survey-grade accuracy',
      'Automated monitoring'
    ],
    ctaText: 'SYSTEM SPECS'
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="services">
      {/* Enhanced Background System - Services Variation */}
      <div className="absolute inset-0">
        {/* Base dark gradient - same as footer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f0f1f_0%,#030305_100%)]" />
        
        {/* Services-specific colored gradients - extremely subtle like footer */}
        <div className="absolute inset-0">
          {/* Primary green-cyan gradient for technical/strategic - extremely subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,#10b981_0%,transparent_50%)] opacity-1" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#06b6d4_0%,transparent_50%)] opacity-0.5" />
          
          {/* Blue accents for harmony - extremely subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,#3b82f6_0%,transparent_45%)] opacity-0.5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,#1d4ed8_0%,transparent_40%)] opacity-0.3" />
          
          {/* Subtle teal for variety - extremely subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,#0d9488_0%,transparent_30%)] opacity-0.3" />
        </div>

        {/* Enhanced grid system - matching footer style with subtle pop */}
        <div className="absolute inset-0">
          {/* Fine grid pattern - more visible */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Medium grid overlay - more visible */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.06)_1px,transparent_1px)] bg-[size:96px_96px]" />

          {/* Grid fade effects - same as footer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#030305_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#030305]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent" style={{ top: '70%' }} />
        </div>

        {/* Noise texture - exactly like footer */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ci8+PC9zdmc+')] opacity-15" />

        {/* Animated highlights - very subtle like footer */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />
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
            <span className="text-sm md:text-base tracking-widest uppercase font-mono text-blue-500 flex items-center">
              <FiTarget className="mr-2" />
              Strategic Capabilities
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 font-mono"
          >
            Specialized Drone Operations
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
            Tactical drone deployment for precision missions across multiple sectors.
            Our advanced systems are engineered for superior performance in any environment.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <GlassCard className="h-full">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 p-2 rounded bg-blue-500/10 text-blue-500">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-500 font-mono">{service.title}</h3>
                  </div>
                  
                  <div className="mb-2 text-xs font-mono text-blue-500/70 flex justify-between">
                    <span>CAPABILITY-{service.id.toUpperCase()}</span>
                    <span>ACTIVE</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 font-mono text-sm">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 text-gray-300 mb-6 flex-grow">
                    {service.specs.map((spec, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        <span className="font-mono text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="bordered" 
                    size="sm" 
                  >
                    {service.ctaText}
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button 
            variant="solid" 
            size="lg"
            isGlowing
            className="px-8"
          >
            REQUEST FULL CAPABILITIES BRIEF
          </Button>
        </motion.div>
      </div>
    </section>
  );
}; 
