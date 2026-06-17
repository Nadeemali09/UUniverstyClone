import LeadForm from './LeadForm';

const Popup = ({ closePopup }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) closePopup();
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-5 animate-fadeIn"
      onClick={handleOverlayClick}
    >
      <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white animate-slideUp">
        <div className="relative bg-gradient-to-br from-secondary to-primary px-7 py-7 text-white">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              closePopup();
            }}
            className="absolute right-4 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm text-white transition-colors hover:bg-white/40"
            aria-label="Close form"
          >
            X
          </button>
          <h3 className="mb-1 text-xl font-extrabold leading-tight">Get Free Admission Counselling</h3>
          <p className="text-[13px] leading-relaxed opacity-85">
            Compare courses, universities, scholarships, and admission steps with a counsellor.
          </p>
        </div>

        <div className="px-7 py-6">
          <LeadForm source="Popup Form" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
