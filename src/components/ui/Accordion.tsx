import React from 'react';
import { Accordion as HeroAccordion, AccordionItem } from '@heroui/react';
import { cn } from '../../lib/utils';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  subtitle?: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  variant?: 'standard' | 'technical';
  defaultExpandedKeys?: string[];
  expandedKeys?: string[];
  selectionMode?: 'single' | 'multiple';
  onSelectionChange?: (keys: string[]) => void;
  className?: string;
  showDivider?: boolean;
  isDisabled?: boolean;
  isCompact?: boolean;
  fullWidth?: boolean;
  disableAnimation?: boolean;
  keepContentMounted?: boolean;
}

export const Accordion = ({
  items,
  variant = 'standard',
  defaultExpandedKeys,
  expandedKeys,
  selectionMode = 'single',
  onSelectionChange,
  className,
  showDivider = true,
  isDisabled,
  isCompact,
  fullWidth,
  disableAnimation,
  keepContentMounted,
  ...props
}: AccordionProps) => {
  const isTechnical = variant === 'technical';
  
  return (
    <HeroAccordion
      defaultExpandedKeys={defaultExpandedKeys}
      expandedKeys={expandedKeys}
      selectionMode={selectionMode}
      onSelectionChange={onSelectionChange}
      showDivider={showDivider}
      isDisabled={isDisabled}
      isCompact={isCompact}
      fullWidth={fullWidth}
      variant={isTechnical ? 'bordered' : 'light'}
      disableAnimation={disableAnimation}
      keepContentMounted={keepContentMounted}
      className={cn(
        isTechnical && [
          'border border-electricBlue/20 bg-deepIndigo/40 p-1',
          'font-mono'
        ],
        className
      )}
      classNames={{
        base: cn(
          isTechnical && 'rounded-md border border-electricBlue/10'
        ),
        heading: cn(
          isTechnical && 'font-mono text-titaniumSilver'
        ),
        trigger: cn(
          isTechnical && 'data-[hover=true]:bg-deepIndigo/50'
        ),
        content: cn(
          isTechnical && 'text-sm text-titaniumSilver/90'
        ),
      }}
      {...props}
    >
      {items.map((item) => (
        <AccordionItem 
          key={item.id} 
          aria-label={item.title}
          title={
            <div>
              <div>{item.title}</div>
              {item.subtitle && (
                <div className="text-xs opacity-70 mt-1">
                  {item.subtitle}
                </div>
              )}
            </div>
          }
          subtitle={item.subtitle}
          className={cn(
            isTechnical && "border border-electricBlue/10"
          )}
        >
          {item.content}
        </AccordionItem>
      ))}
    </HeroAccordion>
  );
}; 