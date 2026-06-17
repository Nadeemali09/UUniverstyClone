/**
 * Utility function to merge/combine class names conditionally
 * Useful for dynamic Tailwind CSS classes
 */
export const cn = (...classes) => {
  return classes
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
};
