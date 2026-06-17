/**
 * Premium Input Field Component
 * Features: Smooth focus effects, validation states, icons, tooltips
 */
export const InputField = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
  success,
  disabled = false,
  required = false,
  icon: Icon,
  className = '',
  ...props
}) => {
  const borderColor = error ? 'border-red-500' : success ? 'border-green-500' : 'border-gray-200';
  const focusBorder = error ? 'focus:border-red-600' : success ? 'focus:border-green-600' : 'focus:border-blue-600';
  const focusRing = error ? 'focus:ring-red-500/10' : success ? 'focus:ring-green-500/10' : 'focus:ring-blue-500/10';

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative group">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full py-3 px-4 rounded-xl transition-all duration-300 ease-out
            bg-white/50 backdrop-blur-sm border-2 ${borderColor} ${focusBorder}
            focus:outline-none focus:ring-4 ${focusRing}
            placeholder:text-gray-400 text-gray-900
            disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50
            hover:border-gray-300 focus:hover:border-blue-600
            ${Icon ? 'pl-10' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <p className="text-red-600 text-sm mt-2 flex items-center gap-1">✕ {error}</p>}
      {success && <p className="text-green-600 text-sm mt-2 flex items-center gap-1">✓ {success}</p>}
    </div>
  );
};

export default InputField;
