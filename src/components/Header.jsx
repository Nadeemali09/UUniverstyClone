const Header = ({ openPopup }) => (
  <header className="sticky top-0 z-50 bg-white shadow-md h-16 px-5 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-extrabold text-lg tracking-tight">
        UU
      </div>
      <div className="leading-tight">
        <strong className="block text-[15px] text-secondary font-bold">
          Uttaranchal University
        </strong>
        <span className="text-[11px] text-gray">UIT Dehradun</span>
      </div>
    </div>
    <nav className="hidden md:flex items-center gap-5">
      <a href="#" className="text-sm font-medium text-dark">Courses</a>
      <a href="#" className="text-sm font-medium text-dark">Admissions</a>
      <a href="#" className="text-sm font-medium text-dark">Placements</a>
      <a href="#" className="text-sm font-medium text-dark">Campus</a>
    </nav>
    <button
      onClick={(e) => { e.stopPropagation(); openPopup(); }}
      className="bg-primary text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-primary-dark transition-colors"
    >
      Apply Now →
    </button>
  </header>
);

export default Header;