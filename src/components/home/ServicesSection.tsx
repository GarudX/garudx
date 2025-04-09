import { motion } from 'framer-motion';
import { FiTarget, FiAlertTriangle, FiFilm, FiCamera, FiHome, FiGlobe, FiShield, FiBriefcase } from 'react-icons/fi';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';

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
    <section className="py-20 px-4 bg-darkSlate relative" id="services">
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
            className="h-1 bg-electricBlue rounded-full mb-6"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-titaniumSilver max-w-2xl text-center font-mono"
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
              <GlassCard variant="dark" design="technical" className="h-full">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="mr-3 p-2 rounded bg-electricBlue/10 text-electricBlue">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-electricBlue font-mono">{service.title}</h3>
                  </div>
                  
                  <div className="mb-2 text-xs font-mono text-electricBlue/70 flex justify-between">
                    <span>CAPABILITY-{service.id.toUpperCase()}</span>
                    <span>ACTIVE</span>
                  </div>
                  
                  <p className="text-titaniumSilver mb-6 font-mono text-sm">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 text-titaniumSilver mb-6 flex-grow">
                    {service.specs.map((spec, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-electricBlue rounded-full mr-2"></span>
                        <span className="font-mono text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="technical" 
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
            variant="primary" 
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