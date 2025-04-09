import { ReactNode } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Divider } from '@heroui/react';
import { cn } from '../../lib/utils';

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
  // Badge colors
  const badgeColors = {
    info: 'bg-electricBlue/10 text-electricBlue border-electricBlue/30',
    success: 'bg-signalGreen/10 text-signalGreen border-signalGreen/30',
    warning: 'bg-warningAmber/10 text-warningAmber border-warningAmber/30',
    error: 'bg-alertRed/10 text-alertRed border-alertRed/30',
  };

  return (
    <Card 
      className={cn(
        'bg-darkSlate relative overflow-hidden',
        bordered && 'border border-titaniumSilver/10',
        'shadow-technical',
        className
      )}
      radius="sm"
    >
      {/* Technical grid background */}
      {gridLines && (
        <div 
          className="absolute inset-0 pointer-events-none bg-precision-grid bg-[length:20px_20px] opacity-30"
          aria-hidden="true"
        />
      )}
      
      {/* Header */}
      <CardHeader className={cn(
        'flex items-center justify-between border-b border-titaniumSilver/10 px-4 py-3',
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
            <p className="text-titaniumSilver text-sm mt-0.5 font-mono">
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
        <CardFooter className="px-4 py-3 border-t border-titaniumSilver/10">
          {footer}
        </CardFooter>
      )}
      
      {/* Technical bottom line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-electricBlue/30 to-transparent" />
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
        <span className="text-titaniumSilver text-xs font-mono uppercase tracking-wider">
          {label}
        </span>
        
        {trend && (
          <div className={cn(
            'flex items-center text-xs font-mono',
            trend === 'up' && 'text-signalGreen',
            trend === 'down' && 'text-alertRed',
            trend === 'neutral' && 'text-titaniumSilver'
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
        <span className="text-electricBlue text-xl font-mono font-medium tracking-wide">
          {value}
        </span>
        {unit && (
          <span className="ml-1 text-titaniumSilver text-sm font-mono">
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
      {specs.map((spec, index) => (
        <div 
          key={spec.name} 
          className="flex justify-between py-1 border-b border-titaniumSilver/10 last:border-0"
        >
          <dt className="text-titaniumSilver font-mono text-sm">{spec.name}</dt>
          <dd className="text-white font-mono text-sm">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}; 