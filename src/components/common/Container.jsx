/**
 * Container component for consistent max-width and padding
 */
export const Container = ({ children, className = '', ...props }) => (
  <div className={`mx-auto max-w-7xl px-5 ${className}`} {...props}>
    {children}
  </div>
);

export default Container;
