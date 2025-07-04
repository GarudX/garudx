import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FiArrowRight, FiMaximize, FiMinimize, FiShield, FiCpu, FiWifi } from "react-icons/fi";
import { cn } from "../../utils/helpers/cn";
import { Button } from "../atoms/Button";
import { GlassCard as Card } from "../molecules/GlassCard";
import Spline from '@splinetool/react-spline';
import { BeatLoader } from "react-spinners";
import Icon from "../atoms/Icon";
import { ParticleSystem } from "../atoms/ParticleSystem";

// Text lines for animated typing effect
const heroTextLines = [
  "FPV Drone Innovation",
  "Aerial Cinematography",
  "Himalayan Adventures"
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



export const HeroSection = () => {
  // State for text animation
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  // State for 3D element
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasSplineError, setHasSplineError] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  // Cycle through text lines
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % heroTextLines.length);
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
      {/* Enhanced Background System - Hero Variation */}
      <div className="absolute inset-0">
        {/* Base dark gradient - same as footer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f0f1f_0%,#030305_100%)]" />
        
        {/* Grid system - exactly like footer */}
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] opacity-15" />

        {/* Animated highlights - same as footer */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]" />
        </div>
        
        {/* Animated particle field */}
        <ParticleField />
        <ParticleSystem count={15} className="z-10" />
      </div>

      {/* YouTube Video Overlay (reduced opacity to show background) */}
      <div className="absolute inset-0 z-10 opacity-30">
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
            {/* Badge - Smaller and more refined */}
            <motion.div
              className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white mr-2 animate-pulse"></span>
              <span className="text-xs font-technical tracking-wider text-white">KATHMANDU, NEPAL</span>
            </motion.div>
            
            {/* Headline - Smaller and more elegant */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    className="block text-white h-12 md:h-16 inline-block leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {heroTextLines[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </h1>
            </div>
            
            {/* Description - Smaller and more refined */}
            <motion.p 
              className="text-white/80 text-base md:text-lg max-w-lg mb-6 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              From massive cinelifters to precision FPV racing drones, we capture the impossible. 
              Based in the heart of the Himalayas, we bring cutting-edge drone technology to breathtaking locations.
            </motion.p>
            
            {/* CTA Buttons - Smaller and more elegant */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="md" 
                className="bg-white hover:bg-white/90 text-black group transition-all px-6 py-3"
              >
                <span className="text-sm font-medium">Start Your Mission</span>
                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
              </Button>
              <Button 
                variant="bordered" 
                size="md" 
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 px-6 py-3"
              >
                <span className="text-sm font-medium">View Our Fleet</span>
              </Button>
            </div>
            
            {/* Metrics with glass cards - Smaller and more refined */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 p-4">
                <div className="flex flex-col items-center text-center">
                  <FiShield className="text-white mb-2" size={18} />
                  <p className="text-white text-lg font-bold mb-1">50+</p>
                  <p className="text-gray-400 text-xs">FPV Drones</p>
                </div>
              </Card>
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 p-4">
                <div className="flex flex-col items-center text-center">
                  <FiWifi className="text-white mb-2" size={18} />
                  <p className="text-white text-lg font-bold mb-1">1000+</p>
                  <p className="text-gray-400 text-xs">Flight Hours</p>
                </div>
              </Card>
              <Card className="bg-white/5 backdrop-blur-lg border-white/10 p-4">
                <div className="flex flex-col items-center text-center">
                  <FiCpu className="text-white mb-2" size={18} />
                  <p className="text-white text-lg font-bold mb-1">24/7</p>
                  <p className="text-gray-400 text-xs">Support</p>
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
            className="floating-element absolute top-6 left-6 bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-white/10 z-20"
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
            className="floating-element absolute bottom-24 right-24 bg-black/30 backdrop-blur-sm p-3 rounded-lg border border-white/10 z-20"
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
