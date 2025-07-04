import React from 'react';
import { cn } from '../../utils/helpers/cn';
import * as HeroIcons from '@heroicons/react/24/outline';
import * as HeroIconsSolid from '@heroicons/react/24/solid';

export interface IconProps {
  name: IconName;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'interactive' | 'subtle';
  solid?: boolean;
  className?: string;
}

// List of icon names - these map to Heroicons
export type IconName = 
  // Navigation Icons
  | 'ArrowRightIcon'
  | 'ArrowLeftIcon'
  | 'Bars3Icon'
  | 'XMarkIcon'
  | 'ArrowTopRightOnSquareIcon'
  
  // Action Icons
  | 'PlayIcon'
  | 'PauseIcon'
  | 'ArrowDownTrayIcon'
  | 'ArrowUpTrayIcon'
  | 'ShareIcon'
  | 'PlusIcon'
  | 'MinusIcon'
  
  // Status Icons
  | 'InformationCircleIcon'
  | 'ExclamationTriangleIcon'
  | 'ExclamationCircleIcon'
  | 'CheckCircleIcon'
  | 'LockClosedIcon'
  | 'LockOpenIcon'
  
  // Social Media
  | 'ChatBubbleLeftRightIcon'  // Facebook replacement
  | 'HashtagIcon'              // Twitter replacement
  | 'CameraIcon'               // Instagram replacement
  | 'FilmIcon'                 // YouTube replacement
  | 'UserGroupIcon'            // LinkedIn replacement
  
  // Technical Icons
  | 'RocketLaunchIcon'         // Drone replacement
  | 'CameraIcon'
  | 'SignalIcon'               // Radar replacement
  | 'GlobeAltIcon'             // Satellite replacement
  | 'Cog6ToothIcon';           // Settings

// Map our old icon names to Heroicons
const iconNameMap: Record<string, IconName> = {
  'arrow-right': 'ArrowRightIcon',
  'arrow-left': 'ArrowLeftIcon',
  'menu': 'Bars3Icon',
  'close': 'XMarkIcon',
  'external-link': 'ArrowTopRightOnSquareIcon',
  'play': 'PlayIcon',
  'pause': 'PauseIcon',
  'download': 'ArrowDownTrayIcon',
  'upload': 'ArrowUpTrayIcon',
  'share': 'ShareIcon',
  'plus': 'PlusIcon',
  'minus': 'MinusIcon',
  'info': 'InformationCircleIcon',
  'warning': 'ExclamationTriangleIcon',
  'error': 'ExclamationCircleIcon',
  'success': 'CheckCircleIcon',
  'lock': 'LockClosedIcon',
  'unlock': 'LockOpenIcon',
  'facebook': 'ChatBubbleLeftRightIcon',
  'twitter': 'HashtagIcon',
  'instagram': 'CameraIcon',
  'youtube': 'FilmIcon',
  'linkedin': 'UserGroupIcon',
  'drone': 'RocketLaunchIcon',
  'camera': 'CameraIcon',
  'radar': 'SignalIcon',
  'satellite': 'GlobeAltIcon',
  'settings': 'Cog6ToothIcon'
};

export const Icon: React.FC<IconProps> = ({ 
  name,
  size = 'md',
  variant = 'default',
  solid = false,
  className,
  ...props
}) => {
  const sizeClass = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };
  
  const variantClass = {
    default: 'text-titaniumSilver',
    interactive: 'text-electricBlue',
    subtle: 'text-titaniumSilver/50',
  };
  
  // Support both the new style "ArrowRightIcon" and legacy style "arrow-right"
  const iconName = (iconNameMap[name as string] || name) as IconName;
  
  // Get the appropriate icon from Heroicons
  const IconComponent = solid 
    ? (HeroIconsSolid as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>)[iconName]
    : (HeroIcons as Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>)[iconName];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    // Fallback to a generic icon
    const FallbackIcon = HeroIcons.QuestionMarkCircleIcon;
    return (
      <FallbackIcon
        className={cn(
          sizeClass[size],
          variantClass[variant],
          className
        )}
        aria-hidden="true"
        {...props}
      />
    );
  }
  
  return (
    <IconComponent
      className={cn(
        sizeClass[size],
        variantClass[variant],
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
};

export default Icon; 
