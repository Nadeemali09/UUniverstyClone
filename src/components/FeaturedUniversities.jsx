const universities = [
  {
    name: 'Uttaranchal University',
    city: 'Dehradun',
    course: 'BTech, Law, Management',
    fee: 'Fee guidance available',
  },
  {
    name: 'Graphic Era Deemed University',
    city: 'Dehradun',
    course: 'Engineering, CS, MBA',
    fee: 'Scholarship routes',
  },
  {
    name: 'UPES',
    city: 'Dehradun',
    course: 'Energy, Law, Design',
    fee: 'Eligibility support',
  },
  {
    name: 'DIT University',
    city: 'Dehradun',
    course: 'Engineering, Architecture',
    fee: 'Application planning',
  },
  {
    name: 'Amity University',
    city: 'Multiple campuses',
    course: 'Business, Law, Technology',
    fee: 'Campus comparison',
  },
  {
    name: 'Sharda University',
    city: 'Greater Noida',
    course: 'Medical, BTech, MBA',
    fee: 'Document checklist',
  },
];

const FeaturedUniversities = ({ openPopup }) => (
  <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20" id="universities">
    <div className="mx-auto max-w-7xl">
      <div className="mb-9 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Popular colleges</p>
          <h2 className="mt-3 font-playfair text-3xl font-extrabold text-secondary sm:text-4xl">
            Compare leading university options
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Shortlist institutions by stream, location, eligibility, fees, documents, and admission timeline before
            you speak with campuses.
          </p>
        </div>
        <button
          type="button"
          onClick={openPopup}
          className="w-full rounded-lg bg-secondary px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#0f1d4d] sm:w-auto"
        >
          Get shortlist help
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {universities.map((university, index) => (
          <article
            key={university.name}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-24 bg-[linear-gradient(135deg,#1a2a6c,#2563eb,#c8102e)] p-5 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/95 text-sm font-extrabold text-secondary">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-extrabold leading-snug text-secondary">{university.name}</h3>
              <p className="mt-1 text-sm font-bold text-primary">{university.city}</p>
              <dl className="mt-5 grid gap-3 text-sm">
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Popular courses</dt>
                  <dd className="mt-1 font-semibold text-slate-800">{university.course}</dd>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">Counselling support</dt>
                  <dd className="mt-1 font-semibold text-slate-800">{university.fee}</dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={openPopup}
                className="mt-5 w-full rounded-lg border border-primary px-4 py-3 text-sm font-extrabold text-primary transition hover:bg-primary hover:text-white"
              >
                View courses and fees
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedUniversities;
