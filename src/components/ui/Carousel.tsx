import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Button } from '@heroui/react';
import { cn } from '../../lib/utils';
import { Icon } from './Icon';

interface CarouselProps {
  items: ReactNode[];
  variant?: 'standard' | 'technical';
  autoplay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  variant = 'standard',
  autoplay = false,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayTimerRef = useRef<number | null>(null);

  const totalItems = items.length;

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    
    // Reset the transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    
    // Reset the transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    
    // Reset the transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  // Set up autoplay
  useEffect(() => {
    if (autoplay && !autoplayTimerRef.current) {
      autoplayTimerRef.current = window.setInterval(nextSlide, interval);
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        window.clearInterval(autoplayTimerRef.current);
        autoplayTimerRef.current = null;
      }
    };
  }, [autoplay, interval]);

  // Pause autoplay on hover
  const pauseAutoplay = () => {
    if (autoplayTimerRef.current) {
      window.clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  };

  // Resume autoplay
  const resumeAutoplay = () => {
    if (autoplay && !autoplayTimerRef.current) {
      autoplayTimerRef.current = window.setInterval(nextSlide, interval);
    }
  };

  // HeroUI color mapping based on variant
  const getButtonColor = () => {
    return variant === 'technical' ? 'primary' : 'default';
  };

  return (
    <div 
      className={cn(
        'relative overflow-hidden rounded-md',
        className
      )}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      {/* Technical grid background (for technical variant) */}
      {variant === 'technical' && (
        <div className="absolute inset-0 pointer-events-none bg-precision-grid opacity-20" aria-hidden="true" />
      )}
      
      {/* Carousel track */}
      <div 
        className={cn(
          'flex transition-transform duration-400 ease-in-out',
          'relative w-full h-full'
        )}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div 
            key={index}
            className="min-w-full w-full flex-shrink-0"
            aria-hidden={index !== currentIndex}
          >
            {item}
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      {showArrows && totalItems > 1 && (
        <>
          <Button
            isIconOnly
            size="sm"
            variant={variant === 'technical' ? 'bordered' : 'flat'}
            color={getButtonColor()}
            onClick={prevSlide}
            isDisabled={isTransitioning}
            className={cn(
              'absolute top-1/2 left-4 transform -translate-y-1/2 z-10',
              'p-2 rounded-full transition-all',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-electricBlue/30',
              
              // Variant styles
              variant === 'standard' && [
                'bg-darkSlate/80 hover:bg-darkSlate/95',
                'text-titaniumSilver hover:text-white',
              ],
              
              variant === 'technical' && [
                'bg-deepIndigo/70 hover:bg-deepIndigo/90',
                'border border-electricBlue/30',
                'text-electricBlue',
              ],
              
              isTransitioning && 'opacity-50 cursor-not-allowed'
            )}
            aria-label="Previous slide"
          >
            <Icon name="ArrowLeftIcon" />
          </Button>
          
          <Button
            isIconOnly
            size="sm"
            variant={variant === 'technical' ? 'bordered' : 'flat'}
            color={getButtonColor()}
            onClick={nextSlide}
            isDisabled={isTransitioning}
            className={cn(
              'absolute top-1/2 right-4 transform -translate-y-1/2 z-10',
              'p-2 rounded-full transition-all',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-electricBlue/30',
              
              // Variant styles
              variant === 'standard' && [
                'bg-darkSlate/80 hover:bg-darkSlate/95',
                'text-titaniumSilver hover:text-white',
              ],
              
              variant === 'technical' && [
                'bg-deepIndigo/70 hover:bg-deepIndigo/90',
                'border border-electricBlue/30',
                'text-electricBlue',
              ],
              
              isTransitioning && 'opacity-50 cursor-not-allowed'
            )}
            aria-label="Next slide"
          >
            <Icon name="ArrowRightIcon" />
          </Button>
        </>
      )}
      
      {/* Dot indicators */}
      {showDots && totalItems > 1 && (
        <div className={cn(
          'absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10',
        )}>
          {items.map((_, index) => (
            <Button
              key={index}
              isIconOnly
              size="sm"
              variant={variant === 'technical' ? 'bordered' : 'flat'}
              color={getButtonColor()}
              onClick={() => goToSlide(index)}
              isDisabled={isTransitioning}
              className={cn(
                'w-2 h-2 min-w-0 min-h-0 p-0 rounded-full transition-all',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-electricBlue/30',
                
                // Variant styles - standard
                variant === 'standard' && [
                  'bg-titaniumSilver/40',
                  index === currentIndex ? 'bg-white w-4' : 'hover:bg-titaniumSilver/60'
                ],
                
                // Variant styles - technical
                variant === 'technical' && [
                  'border border-electricBlue/40',
                  index === currentIndex 
                    ? 'bg-electricBlue/80 w-6 border-electricBlue' 
                    : 'bg-deepIndigo/60 hover:bg-electricBlue/30'
                ],
                
                isTransitioning && 'opacity-50 cursor-not-allowed'
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </div>
  );
}; 