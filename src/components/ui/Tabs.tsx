import React from 'react';
import { Tabs as HeroTabs, Tab as HeroTab } from '@heroui/react';
import { cn } from '../../utils/cn';

export interface TabsProps {
  defaultTab?: string;
  variant?: 'standard' | 'technical';
  children: React.ReactNode;
  className?: string;
  selectedKey?: string;
  onSelectionChange?: (key: string | number) => void;
  isDisabled?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  disableAnimation?: boolean;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  'aria-label'?: string;
}

export const Tabs = ({
  defaultTab,
  variant = 'standard',
  children,
  className,
  selectedKey,
  onSelectionChange,
  isDisabled,
  fullWidth,
  size = 'md',
  color: propColor,
  disableAnimation,
  radius = 'md',
  'aria-label': ariaLabel,
  ...props
}: TabsProps) => {
  // Convert our variant to HeroUI color and variant
  const color = propColor || (variant === 'technical' ? 'primary' : 'default');
  const heroVariant = variant === 'technical' ? 'bordered' : 'solid';

  // Process children to ensure correct structure
  const childrenArray = React.Children.toArray(children);
  
  // Get tab items
  const tabItems = childrenArray.filter(
    (child) => React.isValidElement(child) && child.type === Tab
  );

  return (
    <HeroTabs
      aria-label={ariaLabel || "Navigation Tabs"}
      selectedKey={selectedKey || defaultTab}
      onSelectionChange={onSelectionChange}
      variant={heroVariant}
      color={color}
      size={size}
      isDisabled={isDisabled}
      fullWidth={fullWidth}
      disableAnimation={disableAnimation}
      radius={radius}
      className={cn(
        variant === 'technical' && [
          'font-mono'
        ],
        className
      )}
      classNames={{
        base: cn(
          variant === 'technical' && 'border border-electricBlue/20 bg-deepIndigo/40 p-1'
        ),
        tabList: cn(
          variant === 'technical' && 'bg-deepIndigo/80 border-b border-electricBlue/20'
        ),
        tab: cn(
          variant === 'technical' && 'data-[selected=true]:border-electricBlue'
        ),
        panel: cn(
          variant === 'technical' && 'pt-4'
        ),
      }}
      {...props}
    >
      {tabItems}
    </HeroTabs>
  );
};

export interface TabProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
  isDisabled?: boolean;
}

export const Tab = ({
  id,
  children,
  className,
  title,
  isDisabled,
  ...props
}: TabProps) => {
  return (
    <HeroTab 
      key={id}
      id={id}
      title={title || id}
      isDisabled={isDisabled}
      className={className}
      {...props}
    >
      {children}
    </HeroTab>
  );
};

// These components are just for API compatibility - they are not actually used
export const TabList = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const TabPanel = ({ children }: { children: React.ReactNode; id?: string }) => {
  return <>{children}</>;
}; 