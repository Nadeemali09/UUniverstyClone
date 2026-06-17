import { Card } from './Card';

/**
 * Premium Stats Card Component
 * Features: Large number display, icons, animations, comparison
 */
export const StatsCard = ({
  value,
  label,
  icon: Icon,
  trend,
  trendValue,
  suffix = '',
  prefix = '',
  className = '',
  ...props
}) => {
  const isTrendUp = trend === 'up';

  return (
    <Card variant="elevated" hover className={`flex flex-col gap-4 ${className}`} {...props}>
      <div className="flex justify-between items-start">
        {Icon && (
          <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        )}
        {trend && (
          <div className={`flex items-center gap-1 text-sm font-bold ${
            isTrendUp ? 'text-green-600' : 'text-red-600'
          }`}>
            {isTrendUp ? '↑' : '↓'}
            {trendValue}%
          </div>
        )}
      </div>
      <div>
        <p className="text-gray-600 text-sm font-medium mb-1">{label}</p>
        <p className="text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {prefix}{value}{suffix}
        </p>
      </div>
    </Card>
  );
};

export default StatsCard;
