// App configuration constants
export const APP_CONFIG = {
  name: 'darkNEO BRUTALISM',
  version: '1.0.0',
  description: 'A brutalist-inspired todo application',
};

// Theme constants
export const THEME = {
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
    accent: '#ff0000',
    warning: '#ffff00',
    success: '#00ff00',
    error: '#ff0000',
    background: '#0a0a0a',
    surface: '#1a1a1a',
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
      muted: '#666666',
    },
    border: '#333333',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
    accent: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
    surface: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
  },
};

// Animation constants
export const ANIMATIONS = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
  },
  easing: {
    default: [0.25, 0.1, 0.25, 1],
    smooth: [0.4, 0, 0.2, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
  },
  variants: {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    },
    scale: {
      initial: { scale: 0.95, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.95, opacity: 0 },
    },
    brutalistPunch: {
      initial: { scale: 0.8, rotate: -2, opacity: 0 },
      animate: { scale: 1, rotate: 0, opacity: 1 },
      exit: { scale: 0.8, rotate: 2, opacity: 0 },
    },
  },
};

// Todo status constants
export const TODO_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  IN_PROGRESS: 'in_progress',
  CANCELLED: 'cancelled',
};

// Todo priority constants
export const TODO_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent',
};

// Local storage keys
export const STORAGE_KEYS = {
  TODOS: 'darkneo_todos',
  THEME: 'darkneo_theme',
  USER_PREFERENCES: 'darkneo_preferences',
};

// UI constants
export const UI = {
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    full: '9999px',
  },
  shadows: {
    brutal: '4px 4px 0px #000000',
    brutalLarge: '8px 8px 0px #000000',
    brutalAccent: '4px 4px 0px #ff0000',
    inner: 'inset 2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
};

// Form validation constants
export const VALIDATION = {
  todo: {
    title: {
      minLength: 1,
      maxLength: 100,
      required: true,
    },
    description: {
      maxLength: 500,
      required: false,
    },
  },
};

// Error messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Check your connection.',
  VALIDATION: 'Please check your input and try again.',
  TODO_NOT_FOUND: 'Todo item not found.',
  STORAGE_ERROR: 'Failed to save data. Please try again.',
};

// Success messages
export const SUCCESS_MESSAGES = {
  TODO_CREATED: 'Todo created successfully!',
  TODO_UPDATED: 'Todo updated successfully!',
  TODO_DELETED: 'Todo deleted successfully!',
  TODO_COMPLETED: 'Todo marked as completed!',
};

// Default values
export const DEFAULTS = {
  todo: {
    status: TODO_STATUS.PENDING,
    priority: TODO_PRIORITY.MEDIUM,
    createdAt: null,
    updatedAt: null,
  },
};

// Keyboard shortcuts
export const KEYBOARD_SHORTCUTS = {
  NEW_TODO: 'n',
  SEARCH: '/',
  ESCAPE: 'Escape',
  ENTER: 'Enter',
};

// Filter options
export const FILTER_OPTIONS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  HIGH_PRIORITY: 'high_priority',
};

// Sort options
export const SORT_OPTIONS = {
  CREATED_DESC: 'created_desc',
  CREATED_ASC: 'created_asc',
  PRIORITY_DESC: 'priority_desc',
  PRIORITY_ASC: 'priority_asc',
  ALPHABETICAL: 'alphabetical',
};