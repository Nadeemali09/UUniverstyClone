/**
 * SectionTitle component for consistent heading styling
 */
export const SectionTitle = ({
  title,
  subtitle,
  description,
  className = '',
  align = 'center',
}) => (
  <div className={`mb-12 text-${align}`}>
    {subtitle && (
      <span className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
        {subtitle}
      </span>
    )}
    {title && (
      <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
        {title}
      </h2>
    )}
    {description && (
      <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
        {description}
      </p>
    )}
  </div>
);

export default SectionTitle;
