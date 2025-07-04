import React, { ReactNode } from 'react';
import { Card, CardBody } from '@heroui/react';
import { cn } from '../../utils/helpers/cn';

// Type definitions
export interface TimelineItemProps {
  title: React.ReactNode;
  content: React.ReactNode;
  date?: string;
  icon?: ReactNode;
  status?: 'complete' | 'current' | 'upcoming';
  isLast?: boolean;
}

export interface TimelineProps {
  items: TimelineItemProps[];
  variant?: 'standard' | 'technical';
  orientation?: 'vertical' | 'horizontal';
  showDates?: boolean;
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  items,
  variant = 'standard',
  orientation = 'vertical',
  showDates = true,
  className,
}) => {
  return (
    <div 
      className={cn(
        'relative',
        orientation === 'horizontal' ? 'flex flex-row' : 'flex flex-col',
        className
      )}
    >
      {/* Line connecting timeline items */}
      {orientation === 'vertical' && (
        <div 
          className={cn(
            'absolute left-4 top-0 bottom-0 w-px z-0',
            variant === 'standard' ? 'bg-gray-400/20' : 'bg-blue-500/20'
          )}
          aria-hidden="true"
        />
      )}
      
      {orientation === 'horizontal' && (
        <div 
          className={cn(
            'absolute left-0 right-0 top-4 h-px z-0',
            variant === 'standard' ? 'bg-gray-400/20' : 'bg-blue-500/20'
          )}
          aria-hidden="true"
        />
      )}
      
      {/* Timeline items */}
      {items.map((item, index) => (
        <TimelineItem 
          key={index}
          {...item}
          isLast={index === items.length - 1}
          orientation={orientation}
          variant={variant}
          showDate={showDates}
        />
      ))}
    </div>
  );
};

interface TimelineItemFullProps extends TimelineItemProps {
  orientation: 'vertical' | 'horizontal';
  variant: 'standard' | 'technical';
  showDate: boolean;
}

const TimelineItem: React.FC<TimelineItemFullProps> = ({
  title,
  content,
  date,
  icon,
  status = 'complete',
  isLast = false,
  orientation,
  variant,
  showDate,
}) => {
  // Status colors
  const statusColors = {
    complete: {
      dot: variant === 'standard' 
        ? 'bg-emerald-500 border-emerald-500 text-white' 
        : 'bg-gray-800 border-blue-500/70 text-blue-500',
      title: variant === 'standard'
        ? 'text-white opacity-90'
        : 'text-blue-500',
      content: variant === 'standard'
        ? 'text-gray-300'
        : 'text-gray-300',
    },
    current: {
      dot: variant === 'standard'
        ? 'bg-blue-500 border-blue-500 text-white shadow-glow-blue'
        : 'bg-gray-800 border-blue-500 text-blue-500 shadow-glow-blue',
      title: variant === 'standard'
        ? 'text-white'
        : 'text-blue-500',
      content: variant === 'standard'
        ? 'text-white'
        : 'text-gray-300',
    },
    upcoming: {
      dot: variant === 'standard'
        ? 'bg-gray-800 border-gray-400/30 text-gray-400/50'
        : 'bg-gray-800 border-gray-400/20 text-gray-400/30',
      title: variant === 'standard'
        ? 'text-gray-400/70'
        : 'text-gray-400/50',
      content: variant === 'standard'
        ? 'text-gray-400/50'
        : 'text-gray-400/30',
    },
  };
  
  // Layout based on orientation
  if (orientation === 'vertical') {
    return (
      <div className={cn(
        'relative pl-10 pb-6',
        isLast && 'pb-0'
      )}>
        {/* Timeline node */}
        <div 
          className={cn(
            'absolute left-0 z-10 flex items-center justify-center w-8 h-8 rounded-full border-2',
            statusColors[status].dot
          )}
        >
          {icon || (
            status === 'complete' ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <span className="w-3 h-3 bg-current rounded-full opacity-80" />
            )
          )}
        </div>
        
        <Card 
          className={cn(
            "border-none bg-transparent",
            status === 'upcoming' && 'opacity-60'
          )}
          shadow={status === 'current' ? 'sm' : 'none'}
          radius="sm"
        >
          <CardBody className="p-0">
            {/* Date label */}
            {showDate && date && (
              <div className={cn(
                'text-xs mb-1',
                variant === 'technical' && 'font-mono tracking-wide',
                statusColors[status].title
              )}>
                {date}
              </div>
            )}
            
            {/* Title */}
            <h3 className={cn(
              'text-base font-medium mb-1',
              variant === 'technical' && 'font-mono text-sm tracking-wide',
              statusColors[status].title
            )}>
              {title}
            </h3>
            
            {/* Content */}
            <div className={cn(
              'text-sm',
              variant === 'technical' && 'text-xs',
              statusColors[status].content
            )}>
              {content}
            </div>
          </CardBody>
          
          {/* Technical variant corner accent */}
          {variant === 'technical' && status === 'current' && (
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500/50" />
          )}
        </Card>
      </div>
    );
  } else {
    // Horizontal layout
    return (
      <div className={cn(
        'relative pt-10 px-4 flex-1',
        isLast && 'pr-0'
      )}>
        {/* Timeline node */}
        <div 
          className={cn(
            'absolute top-0 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full border-2',
            statusColors[status].dot
          )}
        >
          {icon || (
            status === 'complete' ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <span className="w-3 h-3 bg-current rounded-full opacity-80" />
            )
          )}
        </div>
        
        <Card 
          className={cn(
            "border-none bg-transparent text-center",
            status === 'upcoming' && 'opacity-60'
          )}
          shadow={status === 'current' ? 'sm' : 'none'}
          radius="sm"
        >
          <CardBody className="p-0">
            {/* Date label */}
            {showDate && date && (
              <div className={cn(
                'text-xs mb-1',
                variant === 'technical' && 'font-mono tracking-wide',
                statusColors[status].title
              )}>
                {date}
              </div>
            )}
            
            {/* Title */}
            <h3 className={cn(
              'text-base font-medium mb-1',
              variant === 'technical' && 'font-mono text-sm tracking-wide',
              statusColors[status].title
            )}>
              {title}
            </h3>
            
            {/* Content */}
            <div className={cn(
              'text-sm',
              variant === 'technical' && 'text-xs',
              statusColors[status].content
            )}>
              {content}
            </div>
          </CardBody>
          
          {/* Technical variant corner accent */}
          {variant === 'technical' && status === 'current' && (
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500/50" />
          )}
        </Card>
      </div>
    );
  }
}; 
