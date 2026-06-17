import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useScrollLock } from './hooks';
import { NAV_LINKS, META } from './constants';
import { generateSchemaMarkup } from './utils';

// Layouts
import { HeaderLayout, FooterLayout } from './components/layouts';

// Providers
import { GoogleAdsProvider } from './components/providers';

// Sections
import { AccreditationSection } from './components/sections';

// Original Components (to be migrated gradually)
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import FeaturedUniversities from './components/FeaturedUniversities';
import Courses from './components/Courses';
import WhyChoose from './components/WhyChoose';
import AdmissionProcess from './components/AdmissionProcess';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import InlineForm from './components/InlineForm';
import LegalSections from './components/LegalSections';
import Popup from './components/Popup';
import StickyCTA from './components/StickyCTA';
import CookieConsent from './components/CookieConsent';
import FeatureCards from './components/FeatureCards';
import StudyGoalsSection from './components/StudyGoalsSection';

/**
 * App Component - Main application wrapper
 * Follows SOLID principles with clear separation of concerns
 * SEO optimized with proper meta tags and structured data
 */
const App = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  
  // Lock scroll when modal is open
  useScrollLock(popupOpen);

  const closePopup = () => setPopupOpen(false);
  const openPopup = () => setPopupOpen(true);

  // Generate structured data for SEO
  const organizationSchema = generateSchemaMarkup('organization', {
    name: META.siteName,
    url: META.url,
    description: META.description,
    phone: META.phone,
    email: META.email,
    sameAs: [
      `https://twitter.com/${META.social.twitter}`,
      `https://facebook.com/${META.social.facebook}`,
      `https://linkedin.com/company/${META.social.linkedin}`,
    ],
  });

  return (
    <GoogleAdsProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <meta name="title" content="UniversityConnect | Admission Guidance 2026" />
        <meta name="description" content={META.description} />
        <meta name="keywords" content={META.keywords} />
        <meta name="author" content={META.author} />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Canonical URL */}
        <link rel="canonical" href={META.url} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={META.url} />
        <meta property="og:title" content="UniversityConnect | Admission Guidance 2026" />
        <meta property="og:description" content={META.description} />
        <meta property="og:site_name" content={META.siteName} />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UniversityConnect | Admission Guidance 2026" />
        <meta name="twitter:description" content={META.description} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <HeaderLayout openPopup={openPopup} navLinks={NAV_LINKS} />

      <main>
        <Hero openPopup={openPopup} />
        <StatsBar />
        <FeatureCards openPopup={openPopup} />
        <StudyGoalsSection openPopup={openPopup} />
        <FeaturedUniversities openPopup={openPopup} />
        <Courses openPopup={openPopup} />
        <AccreditationSection />
        <WhyChoose />
        <AdmissionProcess />
        <Testimonials />
        <FAQ />
        <InlineForm />
        <LegalSections />
      </main>

      <FooterLayout />
      <StickyCTA openPopup={openPopup} />
      <CookieConsent />

      {/* Modal Portal */}
      {popupOpen && <Popup closePopup={closePopup} />}
    </GoogleAdsProvider>
  );
};

export default App;
