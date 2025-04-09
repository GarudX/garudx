import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

/**
 * A utility function to merge class names and resolve Tailwind CSS conflicts
 * @param inputs - Class values to merge
 * @returns Merged className string with Tailwind conflicts resolved
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
} 