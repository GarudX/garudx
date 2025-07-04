// Common global type definitions

// Generic utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Common form types
export interface FormField {
  name: string;
  value: string;
  error?: string;
  touched?: boolean;
}

export interface FormState {
  [key: string]: FormField;
}

// Common API types
export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Common animation types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  repeat?: number | boolean;
  repeatType?: 'loop' | 'reverse' | 'mirror';
}

// Common theme types (keep only if not in design-system.ts)
// (Removed ColorPalette, ThemeColors, Breakpoints, Spacing, BaseComponentProps) 