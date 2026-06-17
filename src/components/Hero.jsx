import bgImage from '../assets/bgimage.png';
import LeadForm from './LeadForm';

const quickSearches = ['BTech', 'MBA', 'BBA', 'BA LLB', 'BSc Nursing', 'BCA'];

const Hero = ({ openPopup }) => (
  <section className="relative overflow-hidden bg-secondary" id="home">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
    <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,25,56,0.98),rgba(20,48,86,0.9),rgba(200,16,46,0.72))]" />

    <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-16">
      <div className="text-white">
        <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white/90 backdrop-blur">
          Admission guidance 2026
        </div>

        <h1 className="max-w-3xl font-playfair text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
          Great futures start with the right college choice
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
          Compare colleges, courses, fees, eligibility, and career pathways with counsellor-led guidance for
          Indian university admissions.
        </p>

        <div className="mt-8 max-w-2xl rounded-xl border border-white/20 bg-white p-2 shadow-2xl">
          <div className="flex flex-col gap-2 sm:flex-row">
            <label className="sr-only" htmlFor="hero-search">Search courses or colleges</label>
            <input
              id="hero-search"
              type="text"
              placeholder="Search courses, colleges, or specializations"
              className="min-h-12 flex-1 rounded-lg border border-transparent px-4 text-sm font-medium text-slate-700 outline-none focus:border-primary"
            />
            <button
              type="button"
              onClick={openPopup}
              className="min-h-12 rounded-lg bg-primary px-6 text-sm font-extrabold text-white transition hover:bg-primary-dark"
            >
              Get Guidance
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {quickSearches.map((item) => (
            <button
              type="button"
              key={item}
              onClick={openPopup}
              className="rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-bold text-white transition hover:bg-white hover:text-secondary"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-9 grid max-w-2xl grid-cols-3 gap-3">
          {[
            ['1000+', 'college options'],
            ['40+', 'course streams'],
            ['Free', 'first counselling'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl border border-white/16 bg-white/10 p-4 backdrop-blur">
              <div className="text-2xl font-extrabold text-accent">{value}</div>
              <div className="mt-1 text-xs font-semibold text-white/75">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <aside className="rounded-2xl border border-white/25 bg-white p-5 shadow-2xl sm:p-6 lg:p-7" onClick={(event) => event.stopPropagation()}>
        <div className="mb-5">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">Register now</p>
          <h2 className="mt-2 text-2xl font-extrabold text-secondary">Consult a counsellor</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Share your preferences and get a practical shortlist with eligibility, fee, and timeline guidance.
          </p>
        </div>
        <LeadForm compact source="Hero Counselling Form" />
      </aside>
    </div>
  </section>
);

export default Hero;
