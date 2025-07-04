import React from 'react';
import { Tabs as HeroUITabs, Tab as HeroUITab } from '@heroui/react';
import { cn } from '../../utils/helpers/cn';
import { 
  TabsVariant, 
  TabsSize, 
  TabsColor, 
  BaseComponentProps 
} from '../../types/design-system';

// Extended Tabs props interface using design system types
export interface TabsProps extends BaseComponentProps {
  defaultTab?: string;
  variant?: TabsVariant;
  children: React.ReactNode;
  selectedKey?: string;
  onSelectionChange?: (key: string | number) => void;
  isDisabled?: boolean;
  fullWidth?: boolean;
  size?: TabsSize;
  color?: TabsColor;
  disableAnimation?: boolean;
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
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
    (child) => React.isValidElement(child) && child.type === TabItem
  );

  return (
    <HeroUITabs
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
          variant === 'technical' && 'border border-blue-500/20 bg-gray-800/40 p-1'
        ),
        tabList: cn(
          variant === 'technical' && 'bg-gray-800/80 border-b border-blue-500/20'
        ),
        tab: cn(
          variant === 'technical' && 'data-[selected=true]:border-blue-500'
        ),
        panel: cn(
          variant === 'technical' && 'pt-4'
        ),
      }}
      {...props}
    >
      {tabItems}
    </HeroUITabs>
  );
};

// Tab Item component
export interface TabItemProps extends BaseComponentProps {
  key: string;
  title: string;
  children: React.ReactNode;
  isDisabled?: boolean;
}

export const TabItem = ({
  key,
  title,
  children,
  isDisabled,
  ...props
}: TabItemProps) => {
  return (
    <HeroUITab
      key={key}
      title={title}
      isDisabled={isDisabled}
      {...props}
    >
      {children}
    </HeroUITab>
  );
};

// These components are just for API compatibility - they are not actually used
export const TabList = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const TabPanel = ({ children }: { children: React.ReactNode; id?: string }) => {
  return <>{children}</>;
}; 
