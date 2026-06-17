/**
 * Premium Checkbox Component
 * Features: Smooth animations, custom styling, accessibility
 */
export const Checkbox = ({
  label,
  checked = false,
  onChange,
  disabled = false,
  error = false,
  className = '',
  ...props
}) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only"
          {...props}
        />
        <div className={`
          w-5 h-5 rounded-lg border-2 transition-all duration-300 ease-out
          ${error ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'}
          group-hover:border-blue-500 group-hover:shadow-md
          ${checked ? 'border-blue-600 bg-blue-600' : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}>
          {checked && (
            <svg className="w-4 h-4 text-white absolute top-0.5 left-0.5 animate-scale-in" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
            </svg>
          )}
        </div>
      </div>
      {label && <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{label}</span>}
    </label>
  );
};

export default Checkbox;
