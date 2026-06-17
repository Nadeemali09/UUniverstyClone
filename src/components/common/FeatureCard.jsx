import { Card } from './Card';

/**
 * Premium Feature Card Component
 * Features: Icon support, gradient backgrounds, hover animations
 */
export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  value,
  className = '',
  ...props
}) => {
  return (
    <Card variant="premium" hover className={`flex flex-col items-start gap-4 ${className}`} {...props}>
      {Icon && (
        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
      )}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      {value && <div className="text-2xl font-bold text-blue-600 mt-auto">{value}</div>}
    </Card>
  );
};

export default FeatureCard;
