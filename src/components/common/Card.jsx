import { cn } from '../../utils';

/**
 * Premium Card Component with Enhanced Styling
 * Features: Multiple variants, hover effects, gradient borders, smooth animations
 */
export const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
  border = false,
  gradient = false,
  ...props
}) => {
  const variantStyles = {
    default: 'bg-white border border-gray-200 hover:border-gray-300',
    elevated: 'bg-white shadow-xl hover:shadow-2xl',
    ghost: 'bg-transparent border-0',
    premium: 'bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl hover:shadow-3xl',
    gradient: 'bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg hover:shadow-2xl',
    dark: 'bg-gray-900 border border-gray-800 text-white shadow-2xl',
  };

  const hoverStyles = hover ? 'transition-all duration-500 ease-out hover:translate-y-[-4px] hover:scale-[1.02] cursor-pointer group' : 'transition-all duration-500 ease-out';

  const borderGradient = border ? 'relative' : '';

  const gradientBorder = gradient ? 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:rounded-3xl before:p-[1px] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500' : '';

  return (
    <div
      className={cn(
        'rounded-3xl p-6 overflow-hidden',
        variantStyles[variant],
        hoverStyles,
        borderGradient,
        className
      )}
      {...props}
    >
      {/* Gradient background animation on hover */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;
