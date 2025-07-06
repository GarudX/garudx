import { useRef } from 'react';
import { motion } from 'framer-motion';

interface ParticleSystemProps {
  count?: number;
  className?: string;
}

export const ParticleSystem = ({ count = 20, className = "" }: ParticleSystemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Create array of particles for rendering
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4,
    xOffset: Math.random() * 100 - 50,
    yOffset: -100 - Math.random() * 200
  }));

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-500/30 rounded-full pointer-events-none"
          style={{
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`
          }}
          animate={{
            y: particle.yOffset,
            x: particle.xOffset,
            opacity: [0.3, 0.8, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}; 