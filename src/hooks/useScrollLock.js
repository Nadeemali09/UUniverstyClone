import { useEffect } from 'react';

/**
 * Custom hook to lock/unlock body scroll
 * Prevents scrolling when modals/popups are open
 */
export const useScrollLock = (isLocked) => {
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
};
