import { useState } from 'react';

const courseLinks = ['Engineering', 'Management', 'Law', 'Medical', 'Design', 'IT'];

const HeaderLayout = ({ openPopup, navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLeadClick = (event) => {
    event.stopPropagation();
    setMenuOpen(false);
    openPopup();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur" role="banner">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-3"
          aria-label="UniversityConnect Home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-sm font-extrabold text-white shadow-md">
            UC
          </span>
          <span className="min-w-0 leading-tight">
            <strong className="block truncate text-[15px] font-extrabold text-secondary">UniversityConnect</strong>
            <span className="hidden text-[11px] font-medium text-slate-500 sm:block">
              College discovery and admission guidance
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <div className="group relative">
            <button className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-secondary">
              Colleges
            </button>
            <div className="invisible absolute left-0 top-full w-[520px] translate-y-2 rounded-xl border border-slate-200 bg-white p-5 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-3">
                {courseLinks.map((link) => (
                  <a
                    key={link}
                    href="#study-goals"
                    className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                  >
                    {link}
                    <span className="mt-1 block text-xs font-normal text-slate-500">Explore colleges and courses</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-secondary"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleLeadClick}
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
          >
            Apply Now
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-secondary lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="text-xl font-bold">{menuOpen ? 'X' : '='}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {[{ label: 'Colleges', href: '#study-goals' }, ...navLinks].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderLayout;
