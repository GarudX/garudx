import { ReactNode } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from '@heroui/react';
import { cn } from '../../utils/helpers/cn';

interface TechnicalPanelProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  headingClassName?: string;
  badge?: string;
  badgeVariant?: 'info' | 'success' | 'warning' | 'error';
  gridLines?: boolean;
  bordered?: boolean;
  footer?: ReactNode;
}

export const TechnicalPanel = ({
  title,
  subtitle,
  children,
  className,
  headingClassName,
  badge,
  badgeVariant = 'info',
  gridLines = true,
  bordered = true,
  footer,
}: TechnicalPanelProps) => {
  // Badge colors using standard Tailwind colors
  const badgeColors = {
    info: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    success: 'bg-green-500/10 text-green-400 border-green-500/30',
    warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
    error: 'bg-red-500/10 text-red-400 border-red-500/30',
  };

  return (
    <Card 
      className={cn(
        'bg-gray-900 relative overflow-hidden',
        bordered && 'border border-gray-600/20',
        'shadow-lg',
        className
      )}
      radius="sm"
    >
      {/* Technical grid background */}
      {gridLines && (
        <div 
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[length:20px_20px] opacity-30"
          aria-hidden="true"
        />
      )}
      
      {/* Header */}
      <CardHeader className={cn(
        'flex items-center justify-between border-b border-gray-600/20 px-4 py-3',
        headingClassName
      )}>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-white font-mono tracking-wide font-medium">
              {title}
            </h3>
            
            {/* Technical specification badge */}
            {badge && (
              <span className={cn(
                'text-xs px-2 py-0.5 rounded border font-mono tracking-wider',
                badgeColors[badgeVariant]
              )}>
                {badge}
              </span>
            )}
          </div>
          
          {subtitle && (
            <p className="text-gray-300 text-sm mt-0.5 font-mono">
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Technical corner marker */}
        <div className="absolute top-0 right-0">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H12V12" fill="none" stroke="currentColor" strokeOpacity="0.2" />
          </svg>
        </div>
      </CardHeader>
      
      {/* Content */}
      <CardBody className="p-4 relative z-10">
        {children}
      </CardBody>
      
      {/* Footer if provided */}
      {footer && (
        <CardFooter className="px-4 py-3 border-t border-gray-600/20">
          {footer}
        </CardFooter>
      )}
      
      {/* Technical bottom line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </Card>
  );
};

// Technical data display component
interface TechnicalDataProps {
  label: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export const TechnicalData = ({
  label,
  value,
  unit,
  trend,
  className,
}: TechnicalDataProps) => {
  return (
    <div className={cn('mb-3', className)}>
      <div className="flex justify-between items-center">
        <span className="text-gray-300 text-xs font-mono uppercase tracking-wider">
          {label}
        </span>
        
        {trend && (
          <div className={cn(
            'flex items-center text-xs font-mono',
            trend === 'up' && 'text-green-400',
            trend === 'down' && 'text-red-400',
            trend === 'neutral' && 'text-gray-300'
          )}>
            {trend === 'up' && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {trend === 'down' && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {trend === 'neutral' && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        )}
      </div>
      
      <div className="mt-1 flex items-baseline">
        <span className="text-blue-400 text-xl font-mono font-medium tracking-wide">
          {value}
        </span>
        {unit && (
          <span className="ml-1 text-gray-300 text-sm font-mono">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
};

// Technical specifications list
interface TechnicalSpecsProps {
  specs: Array<{
    name: string;
    value: string;
  }>;
  className?: string;
}

export const TechnicalSpecs = ({
  specs,
  className,
}: TechnicalSpecsProps) => {
  return (
    <dl className={cn('grid gap-2', className)}>
      {specs.map((spec) => (
        <div 
          key={spec.name} 
          className="flex justify-between py-1 border-b border-gray-600/20 last:border-0"
        >
          <dt className="text-gray-300 font-mono text-sm">{spec.name}</dt>
          <dd className="text-white font-mono text-sm">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}; 
