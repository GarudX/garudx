import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Spinner } from '@heroui/react';
import { cn } from '../../utils/helpers/cn';

interface VideoPlayerProps {
  url: string;
  posterImage?: string;
  title?: string;
  autoplay?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '21/9';
  className?: string;
  variant?: 'standard' | 'technical';
}

export const VideoPlayer = ({
  url,
  posterImage,
  title = 'Video Player',
  autoplay = true,
  controls = true,
  muted = false,
  loop = false,
  aspectRatio = '16/9',
  className = '',
  variant = 'standard',
}: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Determine video type
  const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');
  const isVimeo = url.includes('vimeo.com');
  const isEmbedded = isYouTube || isVimeo;

  // Extract YouTube or Vimeo ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const getVimeoId = (url: string) => {
    const regExp = /vimeo.com\/(?:video\/|channels\/\w+\/|groups\/[^\/]+\/videos\/|album\/\d+\/video\/|)(\d+)(?:$|\/|\?)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  // Convert URL to embed URL if needed
  const getEmbedUrl = () => {
    if (isYouTube) {
      const videoId = getYouTubeId(url);
      return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&mute=${muted ? 1 : 0}&controls=${controls ? 1 : 0}&loop=${loop ? 1 : 0}`;
    } else if (isVimeo) {
      const videoId = getVimeoId(url);
      return `https://player.vimeo.com/video/${videoId}?autoplay=${autoplay ? 1 : 0}&muted=${muted ? 1 : 0}&controls=${controls ? 1 : 0}&loop=${loop ? 1 : 0}`;
    }
    return url;
  };

  // Handle play/pause for self-hosted videos
  const togglePlay = () => {
    if (!isEmbedded && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play()
          .catch(err => {
            setError('Failed to play video: ' + err.message);
          });
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle video loading
  useEffect(() => {
    if (!isEmbedded && videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsLoading(false);
      });
      
      videoRef.current.addEventListener('error', () => {
        setError('Failed to load video');
        setIsLoading(false);
      });
      
      // Set up play/pause event listeners
      videoRef.current.addEventListener('play', () => setIsPlaying(true));
      videoRef.current.addEventListener('pause', () => setIsPlaying(false));
    }
  }, [isEmbedded]);

  // Handle iframe loading
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setError('Failed to load external media');
    setIsLoading(false);
  };

  return (
    <Card 
      className={cn(
        "overflow-hidden",
        variant === 'technical' && "border border-gray-400/10 shadow-technical",
        className
      )}
      style={{ aspectRatio }}
      radius={variant === 'technical' ? "none" : "lg"}
      shadow={variant === 'technical' ? "none" : "sm"}
      isBlurred={variant === 'technical'}
    >
      {/* Technical Grid Background */}
      {variant === 'technical' && (
        <div 
          className="absolute inset-0 z-0 opacity-5 bg-precision-grid bg-[length:20px_20px]" 
          aria-hidden="true"
        />
      )}
      
      {/* Technical Frame Elements */}
      {variant === 'technical' && (
        <>
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-blue-500/20 pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-blue-500/20 pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-blue-500/20 pointer-events-none z-10" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-blue-500/20 pointer-events-none z-10" />
          
          {title && (
            <div className="absolute top-2 left-2 bg-gray-800/80 px-2 py-1 text-xs font-mono text-gray-300 z-10">
              {title}
            </div>
          )}
        </>
      )}
      
      <CardBody className="p-0 overflow-hidden">
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm z-10">
            <Spinner 
              size="lg" 
              color="primary"
              className="w-12 h-12"
            />
          </div>
        )}
        
        {/* Error Message */}
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800/80 backdrop-blur-sm z-10 p-4 text-center">
            <svg className="w-12 h-12 text-red-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-white font-body">{error}</p>
            <button 
              onClick={() => setError(null)}
              className="mt-4 px-4 py-2 bg-gray-800 text-gray-300 border border-gray-400/20 rounded hover:bg-white/10 transition-colors text-sm"
            >
              Dismiss
            </button>
          </div>
        )}
        
        {/* Play/Pause Button for Self-Hosted Videos */}
        {!isEmbedded && !controls && !isLoading && !error && (
          <motion.button
            className="absolute inset-0 w-full h-full flex items-center justify-center z-10 bg-gray-800/40 opacity-0 hover:opacity-100 transition-opacity"
            onClick={togglePlay}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            <div className="rounded-full bg-gray-800/70 backdrop-blur-md p-4 border border-gray-400/20">
              {isPlaying ? (
                <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
          </motion.button>
        )}
        
        {/* Video Player */}
        <div className="w-full h-full relative z-0">
          {isEmbedded ? (
            <iframe
              src={getEmbedUrl()}
              title={title || "Video"}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          ) : (
            <video
              ref={videoRef}
              src={url}
              poster={posterImage}
              className="w-full h-full object-contain bg-gray-900"
              autoPlay={autoplay}
              controls={controls}
              muted={muted}
              loop={loop}
              playsInline
            />
          )}
        </div>
      </CardBody>
      
      {/* Technical bottom gradient line */}
      {variant === 'technical' && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-10" />
      )}
    </Card>
  );
}; 
