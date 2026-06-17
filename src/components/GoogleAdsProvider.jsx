import { useCallback, useEffect, useMemo, useRef } from 'react';
import { GoogleAdsContext } from './GoogleAdsContext';

const GoogleAdsProvider = ({ children }) => {
  const gtagRef = useRef(null);
  const conversionId = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID;
  const conversionLabel = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL;

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.gtag && conversionId) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${conversionId}`;
      script.async = true;
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', conversionId);
        gtagRef.current = gtag;
      };
      document.head.appendChild(script);
    } else if (typeof window !== 'undefined' && window.gtag) {
      gtagRef.current = window.gtag;
    }

    return undefined;
  }, [conversionId]);

  const trackConversion = useCallback(() => {
    if (gtagRef.current && conversionLabel) {
      gtagRef.current('event', 'conversion', {
        send_to: `${conversionId}/${conversionLabel}`,
      });
    }
  }, [conversionId, conversionLabel]);

  const value = useMemo(
    () => ({
      loaded: false,
      trackConversion,
    }),
    [trackConversion],
  );

  return (
    <GoogleAdsContext.Provider value={value}>
      {children}
    </GoogleAdsContext.Provider>
  );
};

export default GoogleAdsProvider;
