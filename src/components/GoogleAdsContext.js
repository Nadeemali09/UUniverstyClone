import { createContext, useContext } from 'react';

export const GoogleAdsContext = createContext({
  loaded: false,
  trackConversion: () => {},
});

export const useGoogleAds = () => useContext(GoogleAdsContext);
