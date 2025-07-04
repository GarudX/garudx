import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const useGsapScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up global GSAP defaults
    gsap.defaults({ ease: "power2.out" });
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return { containerRef };
};

// Animation presets for different elements
export const scrollAnimations = {
  // Fade in from bottom with stagger
  fadeInUp: (_elements: string, stagger = 0.1) => ({
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger,
    ease: "power2.out"
  }),

  // Scale in with bounce
  scaleIn: (_elements: string) => ({
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)"
  }),

  // Slide in from left/right
  slideInLeft: (_elements: string) => ({
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }),

  slideInRight: (_elements: string) => ({
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  }),

  // Parallax effect
  parallax: (_elements: string, speed = 0.5) => ({
    y: (_i: number, _target: any) => -ScrollTrigger.maxScroll(window) * speed,
    ease: "none"
  }),

  // Text reveal animation
  textReveal: (_elements: string) => ({
    duration: 1.2,
    ease: "power2.out",
    onStart: function(this: any) {
      gsap.set(this.targets(), { visibility: "visible" });
    }
  }),

  // Morphing background effect
  morphBackground: (_elements: string) => ({
    background: "radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 70%)",
    duration: 2,
    ease: "power2.inOut"
  }),

  // Floating animation
  float: (_elements: string) => ({
    y: -20,
    duration: 2,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
  }),

  // Glitch effect
  glitch: (_elements: string) => ({
    duration: 0.1,
    ease: "none",
    repeat: 3,
    yoyo: true,
    onRepeat: function(this: any) {
      gsap.set(this.targets(), { 
        x: gsap.utils.random(-5, 5),
        y: gsap.utils.random(-2, 2)
      });
    }
  }),

  // Particle explosion
  particleExplosion: (_elements: string) => ({
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.02
  })
};

// Create scroll-triggered animations
export const createScrollAnimation = (
  trigger: string,
  animation: any,
  options: any = {}
) => {
  return gsap.fromTo(trigger, 
    animation.from || animation,
    {
      ...animation.to || animation,
      scrollTrigger: {
        trigger,
        start: options.start || "top 80%",
        end: options.end || "bottom 20%",
        toggleActions: options.toggleActions || "play none none reverse",
        ...options
      }
    }
  );
};

// Advanced scroll effects
export const advancedScrollEffects = {
  // Parallax sections
  createParallaxSection: (section: string, speed = 0.5) => {
    gsap.to(section, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  },

  // Sticky sections with reveal
  createStickyReveal: (section: string, content: string) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1
      }
    });

    tl.fromTo(content, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 }
    );
  },

  // Magnetic effect
  createMagneticEffect: (element: string) => {
    const magnet = document.querySelector(element);
    if (!magnet) return;

    magnet.addEventListener('mousemove', (e) => {
      const mouseEvent = e as MouseEvent;
      const { clientX, clientY } = mouseEvent;
      const { left, top, width, height } = magnet.getBoundingClientRect();
      const x = clientX - left - width / 2;
      const y = clientY - top - height / 2;

      gsap.to(magnet, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    magnet.addEventListener('mouseleave', () => {
      gsap.to(magnet, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  },

  // Text scramble effect
  createTextScramble: (element: string, finalText: string) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let currentText = '';
    let currentIndex = 0;

    const scramble = () => {
      if (currentIndex < finalText.length) {
        currentText = finalText.slice(0, currentIndex) + 
                     chars[Math.floor(Math.random() * chars.length)];
        
        gsap.set(element, { textContent: currentText });
        currentIndex++;
        
        setTimeout(scramble, 50);
      } else {
        gsap.set(element, { textContent: finalText });
      }
    };

    scramble();
  },

  // Morphing shapes
  createMorphingShapes: (element: string) => {
    const shapes = [
      "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      "polygon(50% 0%, 0% 100%, 100% 100%)"
    ];

    gsap.to(element, {
      clipPath: shapes[1],
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    });
  }
}; 