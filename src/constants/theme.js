// Premium Color Palette with Gradients
export const COLORS = {
  // Primary
  primary: '#2563eb',
  primaryDark: '#1e40af',
  primaryLight: '#3b82f6',
  primaryGradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',

  // Secondary
  secondary: '#1f2937',
  secondaryLight: '#374151',
  secondaryDark: '#111827',

  // Accent
  accent: '#fbbf24',
  accentDark: '#f59e0b',
  accentLight: '#fcd34d',
  accentGradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',

  // Neutrals
  white: '#ffffff',
  light: '#f9fafb',
  gray: '#6b7280',
  dark: '#111827',

  // Status
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

export const GRADIENTS = {
  heroOverlay: 'linear-gradient(to bottom right, #10243d/90, #21395a/80, #7f1d1d/75)',
  premiumGold: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
  modernBlue: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
  softGradient: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
  darkGradient: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
  neonGradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
};

export const SHADOWS = {
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  premium: '0 20px 40px -10px rgba(0, 0, 0, 0.15)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  glow: '0 0 20px rgba(37, 99, 235, 0.3)',
};

export const BLUR = {
  sm: 'blur(4px)',
  md: 'blur(8px)',
  lg: 'blur(12px)',
  xl: 'blur(16px)',
};

export const TRANSITIONS = {
  fast: 'all 0.2s ease-in-out',
  base: 'all 0.3s ease-in-out',
  slow: 'all 0.5s ease-in-out',
  slower: 'all 0.7s ease-in-out',
  smoothScroll: 'scroll-behavior 0.3s ease-in-out',
};

export const BREAKPOINTS = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const ANIMATION = {
  fadeIn: 'fadeIn 0.5s ease-in-out',
  slideIn: 'slideIn 0.5s ease-out',
  bounce: 'bounce 0.5s ease-in-out',
  pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  float: 'float 3s ease-in-out infinite',
  glow: 'glow 3s ease-in-out infinite',
};
