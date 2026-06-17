import { cn } from '../../utils';

/**
 * Premium Button Component with Enhanced Animations
 * Features: Multiple variants, sizes, gradients, icons, loading states
 * Smooth micro-interactions and accessibility support
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  onClick,
  type = 'button',
  ariaLabel,
  icon: Icon,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden group';

  const variantStyles = {
    primary: 'bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-2xl focus:ring-blue-500 hover:scale-105 active:scale-95',
    secondary: 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300 shadow-md hover:shadow-lg focus:ring-gray-400 active:scale-95',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 active:scale-95 focus:ring-blue-500',
    ghost: 'text-gray-700 hover:bg-gray-100 active:scale-95 focus:ring-gray-400 hover:text-gray-900',
    danger: 'bg-gradient-to-br from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-2xl focus:ring-red-500 active:scale-95',
    success: 'bg-gradient-to-br from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-2xl focus:ring-green-500 active:scale-95',
    accent: 'bg-gradient-to-br from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg hover:shadow-2xl focus:ring-amber-500 active:scale-95',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
  };

  const disabledStyles = disabled || loading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';

  // Animated gradient overlay on hover
  const gradientOverlay = 'before:absolute before:inset-0 before:bg-white before:opacity-0 group-hover:before:opacity-10 before:transition-opacity before:duration-300';

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        baseStyles,
        'flex items-center justify-center',
        variantStyles[variant],
        sizeStyles[size],
        disabledStyles,
        gradientOverlay,
        className
      )}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      )}

      {/* Button content */}
      <span className={loading ? 'invisible' : 'visible flex items-center gap-2'}>
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </span>
    </button>
  );
};

export default Button;
