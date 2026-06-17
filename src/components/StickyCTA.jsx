const StickyCTA = ({ openPopup }) => (
  <button
    type="button"
    onClick={(event) => {
      event.stopPropagation();
      openPopup();
    }}
    className="fixed bottom-5 right-5 z-[98] rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-white shadow-xl transition-shadow hover:shadow-2xl"
  >
    Free Counselling
  </button>
);

export default StickyCTA;
