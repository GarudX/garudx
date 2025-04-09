import { ReactNode } from 'react';
import { Modal as HeroModal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';
import { cn } from '../../lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  variant?: 'standard' | 'technical';
  isDismissable?: boolean;
  placement?: 'center' | 'top' | 'bottom' | 'auto';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  scrollBehavior?: 'normal' | 'inside' | 'outside';
  backdrop?: 'blur' | 'transparent' | 'opaque';
  footer?: ReactNode;
  motionProps?: any;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  variant = 'standard',
  isDismissable = true,
  placement = 'center',
  radius = 'lg',
  scrollBehavior = 'normal',
  backdrop = 'blur',
  footer,
  motionProps,
  ...props
}: ModalProps) => {
  // Convert our size to HeroUI size
  const heroSize = size === 'full' ? '5xl' : size;
  
  // Convert our variant to HeroUI style props
  const isTechnical = variant === 'technical';
  
  return (
    <HeroModal
      isOpen={isOpen}
      onOpenChange={onClose}
      size={heroSize}
      hideCloseButton={!showCloseButton}
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={!closeOnOverlayClick}
      backdrop={backdrop}
      placement={placement}
      radius={radius}
      scrollBehavior={scrollBehavior}
      motionProps={motionProps}
      classNames={{
        backdrop: cn("bg-deepIndigo/90"),
        base: cn(
          isTechnical && "border border-electricBlue/20"
        ),
        body: cn("relative z-10"),
        header: cn(
          "p-4 flex items-center justify-between",
          isTechnical ? "border-b border-electricBlue/20" : "border-b border-titaniumSilver/10"
        ),
        footer: cn(
          isTechnical && "border-t border-electricBlue/20"
        ),
        closeButton: cn("text-titaniumSilver hover:text-electricBlue")
      }}
      {...props}
    >
      <ModalContent>
        {title && (
          <ModalHeader className={cn(
            isTechnical ? "text-electricBlue" : "text-white"
          )}>
            {title}
            {isTechnical && (
              <span className="ml-2 text-xs text-titaniumSilver/60 font-mono tracking-wider uppercase">
                DIALOG-01
              </span>
            )}
            
            {/* Technical corner marker for technical variant */}
            {isTechnical && (
              <div className="absolute top-0 right-0 pointer-events-none">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H24V24" fill="none" stroke="currentColor" strokeOpacity="0.2" />
                </svg>
              </div>
            )}
          </ModalHeader>
        )}
        
        <ModalBody>
          {/* Technical grid background for technical variant */}
          {isTechnical && (
            <div 
              className="absolute inset-0 z-0 opacity-5 bg-precision-grid bg-[length:20px_20px]" 
              aria-hidden="true"
            />
          )}
          
          {children}
        </ModalBody>
        
        {footer && (
          <ModalFooter>
            {footer}
          </ModalFooter>
        )}
        
        {/* Technical bottom line for technical variant */}
        {isTechnical && (
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-electricBlue/30 to-transparent" />
        )}
      </ModalContent>
    </HeroModal>
  );
}; 