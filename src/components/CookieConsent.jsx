import { useState } from 'react';

const STORAGE_KEY = 'universityconnect-cookie-consent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(STORAGE_KEY) !== 'accepted';
  });

  const acceptCookies = (event) => {
    event.stopPropagation();
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[1000] mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-4 shadow-2xl md:flex md:items-center md:justify-between md:gap-5">
      <p className="text-xs leading-relaxed text-gray">
        We use cookies and conversion tags to understand ad performance and improve counselling requests. By
        continuing, you agree to this limited use.
      </p>
      <button
        type="button"
        onClick={acceptCookies}
        className="mt-3 w-full rounded-md bg-secondary px-4 py-2 text-xs font-bold text-white md:mt-0 md:w-auto"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
