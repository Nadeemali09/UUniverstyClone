// Import the logo image from assets folder
import logo from '../assets/UttrachalUniversityLogo.png'; // extension .png/.svg/.jpg accordingly

const Header = ({ openPopup }) => (
  <header className="sticky top-0 z-50 bg-white shadow-md h-16 px-5 flex items-center justify-between">
    {/* Left: Logo + University Name */}
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="Uttaranchal University Logo"
        className="w-12 h-12 object-contain rounded-full" // adjust sizing & shape as needed
      />
      <div className="leading-tight">
        <strong className="block text-[15px] text-secondary font-bold">
          Uttaranchal University
        </strong>
        <span className="text-[11px] text-gray">UIT Dehradun</span>
      </div>
    </div>

    {/* Center: Navigation (hidden on mobile) */}
    <nav className="hidden md:flex items-center gap-5">
      <a href="#" className="text-sm font-medium text-dark">Courses</a>
      <a href="#" className="text-sm font-medium text-dark">Admissions</a>
      <a href="#" className="text-sm font-medium text-dark">Placements</a>
      <a href="#" className="text-sm font-medium text-dark">Campus</a>
    </nav>

    {/* Right: Search Button + Apply Now Button */}
    <div className="flex items-center gap-3">
      {/* Search Button */}
      <button
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          // Add search functionality here later (open search modal, etc.)
        }}
        title="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
      </button>

      {/* Apply Now Button */}
      <button
        onClick={(e) => { e.stopPropagation(); openPopup(); }}
        className="bg-primary text-white px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-primary-dark transition-colors"
      >
        Apply Now →
      </button>
    </div>
  </header>
);

export default Header;