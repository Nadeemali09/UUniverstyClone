import logo from "../assets/abc.png";

const Header = ({ openPopup }) => {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-white px-5 shadow-md">
      {/* Logo Section */}
      <a
        href="#home"
        className="flex items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={logo}
          alt="UniversityConnect Logo"
          className="h-12 w-12 object-contain"
          onError={(e) => {
            console.error("Logo failed to load");

            e.target.src =
              "https://placehold.co/48x48/1e40af/ffffff?text=UC";
          }}
        />

        <div className="leading-tight">
          <h1 className="text-[15px] font-bold text-secondary">
            UniversityConnect
          </h1>
          <p className="text-[11px] text-gray-500">
            Admissions & Career Counselling
          </p>
        </div>
      </a>

      {/* Navigation */}
      <nav className="hidden items-center gap-5 md:flex">
        <a href="#universities" className="text-sm font-medium text-gray-700 hover:text-primary">
          Universities
        </a>

        <a href="#courses" className="text-sm font-medium text-gray-700 hover:text-primary">
          Courses
        </a>

        <a href="#process" className="text-sm font-medium text-gray-700 hover:text-primary">
          Process
        </a>

        <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-primary">
          FAQ
        </a>

        <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-primary">
          Contact
        </a>
      </nav>

      {/* CTA Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          openPopup();
        }}
        className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
      >
        Apply Now
      </button>
    </header>
  );
};

export default Header;