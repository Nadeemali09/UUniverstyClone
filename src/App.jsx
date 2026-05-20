import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Accreditation from './components/Accreditation';
import Courses from './components/Courses';
import WhyChoose from './components/WhyChoose';
import Placements from './components/Placements';
import Rankings from './components/Rankings';
import Testimonials from './components/Testimonials';
import InlineForm from './components/InlineForm';
import Footer from './components/Footer';
import Popup from './components/Popup';
import StickyCTA from './components/StickyCTA';

const App = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [scrollPopupShown, setScrollPopupShown] = useState(false);
  const [timePopupShown, setTimePopupShown] = useState(false);

  // Click anywhere on the page (except interactive elements) opens popup
  const handlePageClick = (e) => {
    if (popupOpen) return;
    // If the click is on a button, link, input, select – ignore
    if (
      e.target.closest('button') ||
      e.target.closest('a') ||
      e.target.closest('input') ||
      e.target.closest('select') ||
      e.target.closest('textarea')
    ) {
      return;
    }
    setPopupOpen(true);
  };

  // Scroll trigger – after user scrolls 40% of the page
  useEffect(() => {
    const handleScroll = () => {
      if (scrollPopupShown || popupOpen) return;
      const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPercentage > 0.4) {
        setScrollPopupShown(true);
        setTimeout(() => setPopupOpen(true), 800);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPopupShown, popupOpen]);

  // Time trigger – open after 8 seconds if not already shown
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!scrollPopupShown && !popupOpen) {
        setTimePopupShown(true);
        setPopupOpen(true);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [scrollPopupShown, popupOpen]);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (popupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [popupOpen]);

  const closePopup = () => setPopupOpen(false);
  const openPopup = () => setPopupOpen(true);

  return (
    <div onClick={handlePageClick}>
      <Header openPopup={openPopup} />
      <Hero openPopup={openPopup} />
      <StatsBar />
      <Accreditation />
      <Courses openPopup={openPopup} />
      <WhyChoose />
      <Placements />
      <Rankings />
      <Testimonials />
      <InlineForm />
      <Footer />
      <StickyCTA openPopup={openPopup} />
      {popupOpen && <Popup closePopup={closePopup} />}
    </div>
  );
};

export default App;