import { useCallback, useEffect, useMemo, useRef } from 'react';
import { GoogleAdsContext } from './GoogleAdsContext';

/**
 * Google Ads Provider Component
 * Manages Google Analytics and conversion tracking
 * Follows SOLID: Single Responsibility - only handles GA setup
 */
const GoogleAdsProvider = ({ children }) => {
  const gtagRef = useRef(null);
  const conversionId = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID;
  const conversionLabel = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL;

  // Initialize Google Tag Manager script
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.gtag && conversionId) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${conversionId}`;
      script.async = true;
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { 
          window.dataLayer.push(arguments); 
        }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', conversionId, {
          'send_page_view': true,
          'anonymize_ip': true,
        });
        gtagRef.current = gtag;
      };
      document.head.appendChild(script);
    } else if (typeof window !== 'undefined' && window.gtag) {
      gtagRef.current = window.gtag;
    }

    return undefined;
  }, [conversionId]);

  // Track conversion event
  const trackConversion = useCallback((eventData = {}) => {
    if (gtagRef.current && conversionLabel) {
      gtagRef.current('event', 'conversion', {
        send_to: `${conversionId}/${conversionLabel}`,
        ...eventData,
      });
    }
  }, [conversionId, conversionLabel]);

  // Track custom event
  const trackEvent = useCallback((eventName, eventData = {}) => {
    if (gtagRef.current) {
      gtagRef.current('event', eventName, eventData);
    }
  }, []);

  const value = useMemo(
    () => ({
      loaded: !!gtagRef.current,
      trackConversion,
      trackEvent,
    }),
    [trackConversion, trackEvent],
  );

  return (
    <GoogleAdsContext.Provider value={value}>
      {children}
    </GoogleAdsContext.Provider>
  );
};

export default GoogleAdsProvider;
