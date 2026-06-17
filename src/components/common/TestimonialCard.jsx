import { Card } from './Card';

/**
 * Premium Testimonial Card Component
 * Features: Star rating, author info, hover effects, gradient styling
 */
export const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  rating = 5,
  avatar,
  className = '',
  ...props
}) => {
  return (
    <Card variant="gradient" hover className={`flex flex-col gap-4 ${className}`} {...props}>
      {/* Star Rating */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 transition-all duration-300 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-800 font-medium text-base italic leading-relaxed">"{quote}"</p>

      {/* Author Info */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-200 group-hover:border-blue-400 transition-all duration-300"
          />
        )}
        <div>
          <p className="font-bold text-gray-900">{author}</p>
          <p className="text-sm text-gray-600">
            {role} {company && `at ${company}`}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
