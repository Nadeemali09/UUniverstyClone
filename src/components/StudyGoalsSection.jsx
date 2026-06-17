const studyGoals = [
  { name: 'Engineering', short: 'ENG', count: '250+ colleges' },
  { name: 'Commerce & Banking', short: 'COM', count: '180+ colleges' },
  { name: 'Management', short: 'MBA', count: '150+ colleges' },
  { name: 'Design', short: 'DES', count: '80+ colleges' },
  { name: 'Hotel Management', short: 'HM', count: '60+ colleges' },
  { name: 'Information Technology', short: 'IT', count: '200+ colleges' },
  { name: 'Media & Communication', short: 'MC', count: '75+ colleges' },
  { name: 'Medical', short: 'MED', count: '250+ colleges' },
  { name: 'Arts & Humanities', short: 'ART', count: '120+ colleges' },
  { name: 'Law', short: 'LAW', count: '90+ colleges' },
  { name: 'Science', short: 'SCI', count: '160+ colleges' },
  { name: 'Vocational', short: 'VOC', count: '70+ colleges' },
];

const StudyGoalsSection = ({ openPopup }) => (
  <section id="study-goals" className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Select your study goal</p>
          <h2 className="mt-3 font-playfair text-3xl font-extrabold text-secondary sm:text-4xl">
            Choose a stream and see the right options faster
          </h2>
        </div>
        <button
          type="button"
          onClick={openPopup}
          className="w-full rounded-lg border border-primary bg-white px-5 py-3 text-sm font-extrabold text-primary transition hover:bg-primary hover:text-white sm:w-auto"
        >
          Need help choosing?
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {studyGoals.map((goal) => (
          <button
            type="button"
            key={goal.name}
            onClick={openPopup}
            className="group min-h-32 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
          >
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-xs font-extrabold text-white transition group-hover:bg-primary">
              {goal.short}
            </span>
            <span className="block text-sm font-extrabold leading-snug text-secondary">{goal.name}</span>
            <span className="mt-1 block text-xs font-semibold text-slate-500">{goal.count}</span>
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default StudyGoalsSection;
