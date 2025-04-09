import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FiArrowRight, FiMaximize, FiMinimize, FiShield, FiCpu, FiWifi } from "react-icons/fi";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";
import { GlassCard as Card, CardBody } from "../ui/GlassCard";
import Spline from '@splinetool/react-spline';
import { BeatLoader } from "react-spinners";
import Icon from "../ui/Icon";

// Text animation variants
const titleVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

// Text lines for animated typing effect
const heroTextLines = [
  "Autonomous Surveillance",
  "Intelligent Defense Systems",
  "Next-Gen Drone Technology"
];

// Particle animation component
const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%", 
            opacity: Math.random() * 0.5 + 0.3 
          }}
          animate={{ 
            y: [null, Math.random() * 100 + "%"],
            opacity: [null, Math.random() > 0.5 ? 0.8 : 0.2]
          }}
          transition={{ 
            duration: Math.random() * 20 + 10, 
            repeat: Infinity, 
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  );
};

// Data visualization component
const DataViz = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative h-16", className)}>
      <div className="absolute inset-0 flex items-end space-x-1">
        {[...Array(20)].map((_, index) => {
          const height = Math.random() * 100;
          return (
            <motion.div
              key={index}
              className="bg-white/30 backdrop-blur-sm w-1 rounded-t-sm"
              initial={{ height: 0 }}
              animate={{ 
                height: [height * 0.3, height * 0.6, height * 0.4, height * 0.8, height * 0.5], 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.1
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export const HeroSection = () => {
  // State for text animation
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTextAnimating, setIsTextAnimating] = useState(false);
  
  // State for 3D element
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasSplineError, setHasSplineError] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Cycle through text lines
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % heroTextLines.length);
        setIsTextAnimating(false);
      }, 500); // Fade out time
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle Spline load events
  const onSplineLoad = () => {
    console.log('Spline model loaded successfully');
    setIsSplineLoaded(true);
  };

  const onSplineError = (e: any) => {
    console.error("Spline load error:", e);
    setHasSplineError(true);
    setIsSplineLoaded(true); // Set to true to hide loading animation
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <div className={cn(
          "absolute inset-0 bg-black transition-opacity duration-1000",
          videoLoaded ? "opacity-0" : "opacity-100"
        )}></div>
        
        {/* YouTube iframe with responsive container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <iframe 
              src="https://www.youtube.com/embed/EEXI6r08908?autoplay=1&mute=1&loop=1&playlist=EEXI6r08908&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1" 
              title="Drone Technology Background"
              className="absolute w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleVideoLoaded}
            ></iframe>
          </div>
        </div>
        
        {/* Overlay to darken video */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 bg-precision-grid bg-[length:40px_40px] opacity-5 z-10"></div>
        
        {/* Animated particle field */}
        <ParticleField />
      </div>

      {/* Fullscreen Spline View */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative w-[90vw] h-[80vh] max-w-[1200px]">
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <p className="text-xs text-white font-technical bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                Interactive 3D Model
              </p>
              <button 
                onClick={toggleFullScreen} 
                className="p-2 bg-black/60 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all"
              >
                <FiMinimize size={20} />
              </button>
            </div>
            
            <Spline 
              className="w-full h-full"
              scene="https://prod.spline.design/4YFCk9dSTTvJcfRm/scene.splinecode" 
            />
          </div>
        </div>
      )}

      {/* Main content layout with right side extending to edge */}
      <div className="relative z-20 h-screen flex flex-col md:flex-row items-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Left side: Text content */}
          <motion.div 
            className="w-full md:w-[55%] mb-12 md:mb-0 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-3 py-1 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
              <span className="text-xs font-technical tracking-wider">MILITARY GRADE TECHNOLOGY</span>
            </motion.div>
            
            {/* Headline with ScaleAI-style animation */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="block mb-2 text-white">GarudX</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentTextIndex}
                  className="block bg-clip-text text-white h-16 md:h-24 inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {heroTextLines[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>
            
            {/* Description with staggered letters */}
            <motion.p className="text-white/80 text-lg md:text-xl max-w-lg mb-8 font-light leading-relaxed">
              {Array.from("The next evolution in autonomous drone technology. Advanced AI for surveillance, defense, and rapid response applications.").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white hover:bg-white/90 text-black group transition-all"
              >
                <span>Request Demo</span>
                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10"
              >
                <span>View Technology</span>
              </Button>
            </div>
            
            {/* Data visualization */}
            <DataViz className="mt-12 mb-4" />
            
            {/* Metrics with glass cards */}
            <div className="grid grid-cols-3 gap-4 max-w-lg">
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 p-4">
                <div className="flex flex-col items-center text-center">
                  <FiShield className="text-white mb-2" size={20} />
                  <p className="text-white text-xl font-bold">99.7%</p>
                  <p className="text-gray-400 text-xs">Detection Rate</p>
                </div>
              </Card>
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 p-4">
                <div className="flex flex-col items-center text-center">
                  <FiWifi className="text-white mb-2" size={20} />
                  <p className="text-white text-xl font-bold">12km</p>
                  <p className="text-gray-400 text-xs">Range</p>
                </div>
              </Card>
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 p-4">
                <div className="flex flex-col items-center text-center">
                  <FiCpu className="text-white mb-2" size={20} />
                  <p className="text-white text-xl font-bold">30min</p>
                  <p className="text-gray-400 text-xs">Deployment</p>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
        
        {/* Right side: Positioned to extend to edge of screen */}
        <motion.div
          ref={containerRef}
          className="w-full md:w-[45%] md:absolute md:right-0 h-[400px] md:h-[700px] md:bottom-[-100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isSplineLoaded || hasSplineError ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          {/* Expand button */}
          {isSplineLoaded && !hasSplineError && (
            <button 
              onClick={toggleFullScreen} 
              className="absolute top-2 right-2 z-20 p-2 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all border border-white/20"
              aria-label="View in fullscreen"
            >
              <FiMaximize size={20} />
            </button>
          )}

          {/* 3D Model - Absolutely positioned to reach the right edge of the screen */}
          <div className="absolute bottom-0 right-0 w-full h-full overflow-visible">
            {!isSplineLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <BeatLoader color="#ffffff" />
              </div>
            )}
            
            {hasSplineError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Icon name="RocketLaunchIcon" size="lg" className="w-24 h-24 text-white mb-4" />
                <p className="text-center text-white font-technical">
                  3D model failed to load. <br />Please try again later.
                </p>
              </div>
            ) : (
              <div className="absolute bottom-[-60%] right-[-65%] w-[200%] h-[200%] transform-gpu">
                <Spline 
                  className="w-full h-full"
                  scene="https://prod.spline.design/4YFCk9dSTTvJcfRm/scene.splinecode" 
                  onLoad={onSplineLoad}
                  onError={onSplineError}
                />
              </div>
            )}
          </div>
          
          {/* Floating UI elements */}
          <motion.div 
            className="absolute top-6 left-6 bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-white/10 z-20"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 0.9 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-white mr-2 animate-pulse"></div>
              <span className="text-sm text-white font-technical">Systems Active</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-24 right-24 bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-white/10 z-20"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 0.9 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-white mr-2 animate-pulse"></div>
              <span className="text-sm text-white font-technical">AI Enhanced</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { delay: 1.5, duration: 2, repeat: Infinity, repeatType: "loop" }
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white z-20"
      >
        <span className="text-xs mb-2 text-gray-400 font-technical">EXPLORE</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

    </section>
  );
}; 