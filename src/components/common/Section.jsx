import { cn } from '../../utils';

/**
 * Premium Section Wrapper with Enhanced Styling
 * Features: Multiple gradient variants, smooth transitions, animations
 */
export const Section = ({
  children,
  className = '',
  id,
  variant = 'light',
  animated = false,
  ...props
}) => {
  const variantStyles = {
    light: 'bg-gray-50 hover:bg-gray-75 transition-colors duration-300',
    white: 'bg-white',
    dark: 'bg-gradient-to-b from-gray-900 to-gray-950 text-white',
    gradient: 'bg-gradient-to-b from-white via-blue-50 to-gray-50',
    premium: 'bg-gradient-to-br from-white to-blue-50/30 border-t border-gray-100',
    accent: 'bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm',
  };

  const animationStyles = animated ? 'animate-fade-in' : '';

  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 transition-all duration-500 ease-out',
        variantStyles[variant],
        animationStyles,
        className
      )}
      {...props}
    >
      {/* Animated background pattern on hover */}
      <div className="absolute inset-0 opacity-0 hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;
