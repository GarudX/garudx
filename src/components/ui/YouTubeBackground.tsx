import { useEffect, useState } from 'react';

interface YouTubeBackgroundProps {
  videoId: string;
  fallbackImage?: string; 
  overlayOpacity?: number;
  startTime?: number;
  className?: string;
}

/**
 * YouTubeBackground Component
 * 
 * Creates a responsive background using a YouTube video.
 */
export const YouTubeBackground = ({
  videoId,
  fallbackImage,
  overlayOpacity = 0.5,
  startTime = 0,
  className = '',
}: YouTubeBackgroundProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  
  // Build the YouTube embed URL with all parameters directly
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${videoId}&modestbranding=1&iv_load_policy=3&playsinline=1&start=${startTime}&enablejsapi=1`;

  useEffect(() => {
    // Set a timeout to mark video as loaded after 3 seconds, even if the event didn't fire
    const timer = setTimeout(() => {
      if (!isVideoLoaded) {
        console.log('Forcing video loaded state after timeout');
        setIsVideoLoaded(true);
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [isVideoLoaded]);

  const handleIframeLoad = () => {
    console.log('YouTube iframe loaded successfully');
    setIsVideoLoaded(true);
  };

  const handleIframeError = () => {
    console.error('YouTube iframe failed to load');
    setIsError(true);
  };

  return (
    <div 
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Direct iframe embed with z-index to ensure it's behind content but visible */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ zIndex: 1 }}
      >
        <iframe
          src={youtubeUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Background Video"
          className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            border: 'none',
            pointerEvents: 'none',
          }}
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      </div>

      {/* Fallback image for when video fails to load */}
      {(fallbackImage || isError) && (
        <img
          src={fallbackImage || '/images/fallback-background.jpg'}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
      )}
      
      {/* Overlay with adjustable opacity */}
      <div
        className="absolute inset-0 bg-midnight"
        style={{ opacity: overlayOpacity, zIndex: 2 }}
      />
      
      {/* Status indicator for debugging - Only visible in development */}
      {window.location.hostname === 'localhost' && (
        <div className="absolute top-0 left-0 m-2 p-2 bg-black/50 text-white text-xs z-50 pointer-events-none">
          Video: {isVideoLoaded ? 'Loaded' : 'Loading'} {isError ? '(Error)' : ''}
        </div>
      )}
    </div>
  );
}; 