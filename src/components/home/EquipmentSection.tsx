import { motion } from 'framer-motion';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { FiCrosshair } from 'react-icons/fi';

// Import equipment images
import fpvDroneImage from '../../assets/images/IMG-20250408-WA0037.jpg';
import djiMavicImage from '../../assets/images/IMG-20250408-WA0043.jpg';
import heavyLiftImage from '../../assets/images/IMG-20250408-WA0045.jpg';

/**
 * EquipmentSection Component
 * 
 * Displays the three main drone equipment options with images, descriptions, and specifications.
 * Includes animation effects using framer-motion for a dynamic presentation.
 */
export const EquipmentSection = () => {
  // Equipment data for easy maintenance
  const equipmentItems = [
    {
      id: 'fpv',
      title: '5" FPV Tactical Drone',
      image: fpvDroneImage,
      alt: 'Combat FPV Drone',
      description: 'High-speed tactical reconnaissance drone with advanced maneuverability for complex urban operations.',
      specs: [
        'GoPro 4K @ 60fps',
        '72 km/h max speed',
        'Stealth flight capability'
      ],
      animation: { initial: { opacity: 0, x: -20 } }
    },
    {
      id: 'mavic',
      title: 'DJI Mavic 3 Surveillance',
      image: djiMavicImage,
      alt: 'DJI Mavic 3 Surveillance Drone',
      description: 'Long-range surveillance platform with encrypted communication systems and thermal imaging capabilities.',
      specs: [
        '4/3 CMOS Hasselblad Camera',
        'Encrypted transmission',
        '46 minutes flight time'
      ],
      animation: { initial: { opacity: 0, y: 20 }, delay: 0.2 }
    },
    {
      id: 'heavylift',
      title: 'Heavy Payload Carrier',
      image: heavyLiftImage,
      alt: 'Heavy Payload Drone',
      description: 'Reinforced tactical platform designed for payload deployment and high-value target acquisition.',
      specs: [
        'Modular payload system',
        'Precision targeting system',
        'Military-grade stabilization'
      ],
      animation: { initial: { opacity: 0, x: 20 }, delay: 0.3 }
    }
  ];

  return (
    <section className="py-20 px-4 bg-darkSlate relative" id="equipment">
      {/* Background elements for tech/weapons feel */}
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
              Tactical Equipment
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 font-mono"
          >
            Advanced Deployment Systems
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
            Cutting-edge tactical equipment engineered for precision, stealth, and overwhelming
            effectiveness in any operating environment.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {equipmentItems.map((item) => (
            <motion.div
              key={item.id}
              initial={item.animation.initial}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: item.animation.delay || 0 }}
            >
              <GlassCard variant="dark" design="technical" className="h-full group overflow-hidden">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Tactical overlay for images */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darkSlate to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-xs text-electricBlue font-mono flex justify-between">
                    <span>UNIT-{item.id.toUpperCase()}</span>
                    <span>ACTIVE</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-electricBlue font-mono">{item.title}</h3>
                  <p className="text-titaniumSilver mb-4 font-mono text-sm">
                    {item.description}
                  </p>
                  <ul className="space-y-2 text-titaniumSilver mb-6">
                    {item.specs.map((spec, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-electricBlue rounded-full mr-2"></span>
                        <span className="font-mono text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="bg-electricBlue/20 border border-electricBlue/40 text-electricBlue hover:bg-electricBlue/30"
                  >
                    Technical Specs
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 