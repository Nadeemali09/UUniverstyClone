import { cn } from '../../utils';

/**
 * Premium Badge Component with Enhanced Styling
 * Features: Multiple variants, animations, gradient support, icons
 */
export const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  animated = false,
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200 hover:border-blue-300 hover:shadow-md',
    secondary: 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md',
    success: 'bg-gradient-to-r from-green-50 to-green-100 text-green-700 border border-green-200 hover:border-green-300 hover:shadow-md',
    warning: 'bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-700 border border-yellow-200 hover:border-yellow-300 hover:shadow-md',
    danger: 'bg-gradient-to-r from-red-50 to-red-100 text-red-700 border border-red-200 hover:border-red-300 hover:shadow-md',
    accent: 'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-700 border border-amber-200 hover:border-amber-300 hover:shadow-md',
    outline: 'bg-transparent border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50',
    dark: 'bg-gray-900 text-gray-100 border border-gray-700 hover:border-gray-600 hover:shadow-lg',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-1 text-xs font-semibold rounded-full',
    md: 'px-3.5 py-1.5 text-sm font-semibold rounded-full',
    lg: 'px-4 py-2 text-base font-semibold rounded-full',
  };

  const animationStyles = animated ? 'animate-pulse hover:animate-none transition-all duration-300' : '';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-medium transition-all duration-300 ease-out hover:scale-105 cursor-default',
        variantStyles[variant],
        sizeStyles[size],
        animationStyles,
        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </span>
  );
};

export default Badge;
