import { motion } from 'framer-motion';
import { GlassCard } from '../molecules/GlassCard';
import { Button } from '../atoms/Button';
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
    <section className="py-20 px-4 relative overflow-hidden" id="equipment">
      {/* Enhanced Background System - Equipment Variation */}
      <div className="absolute inset-0">
        {/* Base dark gradient - same as footer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f0f1f_0%,#030305_100%)]" />
        
        {/* Equipment-specific colored gradients - extremely subtle purple/magenta for power */}
        <div className="absolute inset-0">
          {/* Primary purple-magenta gradient for equipment/power - extremely subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#8b5cf6_0%,transparent_50%)] opacity-1" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,#a855f7_0%,transparent_50%)] opacity-0.5" />
          
          {/* Blue accents for harmony - extremely subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,#3b82f6_0%,transparent_45%)] opacity-0.5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#4f46e5_0%,transparent_40%)] opacity-0.3" />
          
          {/* Subtle pink for variety - extremely subtle */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,#be185d_0%,transparent_30%)] opacity-0.3" />
        </div>

        {/* Enhanced grid system - matching footer style with subtle pop */}
        <div className="absolute inset-0">
          {/* Fine grid pattern - more visible */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Medium grid overlay - more visible */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.06)_1px,transparent_1px)] bg-[size:96px_96px]" />

          {/* Grid fade effects - same as footer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,#030305_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#030305]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent" style={{ top: '70%' }} />
        </div>

        {/* Noise texture - exactly like footer */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ci8+PC9zdmc+')] opacity-15" />

        {/* Animated highlights - very subtle like footer */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />
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
              Tactical Equipment
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4 font-mono text-white"
          >
            Advanced Deployment Systems
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
              <GlassCard className="h-full group overflow-hidden bg-gray-800/50 border-gray-600">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Tactical overlay for images */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-xs text-blue-400 font-mono flex justify-between">
                    <span>UNIT-{item.id.toUpperCase()}</span>
                    <span>ACTIVE</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-400 font-mono">{item.title}</h3>
                  <p className="text-gray-300 mb-4 font-mono text-sm">
                    {item.description}
                  </p>
                  <ul className="space-y-2 text-gray-300 mb-6">
                    {item.specs.map((spec, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        <span className="font-mono text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="bordered" 
                    size="sm" 
                    className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
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
