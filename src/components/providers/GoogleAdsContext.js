import { createContext, useContext } from 'react';

export const GoogleAdsContext = createContext({
  loaded: false,
  trackConversion: () => {},
  trackEvent: () => {},
});

export const useGoogleAds = () => {
  const context = useContext(GoogleAdsContext);
  if (!context) {
    console.warn('useGoogleAds must be used within GoogleAdsProvider');
    return { loaded: false, trackConversion: () => {}, trackEvent: () => {} };
  }
  return context;
};
