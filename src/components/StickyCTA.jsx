const StickyCTA = ({ openPopup }) => (
  <button
    onClick={(e) => { e.stopPropagation(); openPopup(); }}
    className="fixed bottom-5 right-5 z-[98] bg-primary text-white px-5 py-3.5 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl flex items-center gap-2 animate-pulse"
  >
    📋 Apply Now — Free
  </button>
);

export default StickyCTA;