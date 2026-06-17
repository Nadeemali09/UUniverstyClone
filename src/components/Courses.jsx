const courseTags = [
  'Agriculture',
  'Arts & Humanities',
  'Aviation',
  'Commerce',
  'Design',
  'Education',
  'Engineering',
  'Hotel Management',
  'Information Technology',
  'Law',
  'Management',
  'Media',
  'Medical',
  'Nursing',
  'Pharmacy',
  'Science',
];

const courseCards = [
  {
    badge: 'Engineering',
    title: 'BTech Admission 2026',
    desc: 'Eligibility, branch selection, fee comparison, entrance route, and application planning.',
  },
  {
    badge: 'Management',
    title: 'MBA Admission 2026',
    desc: 'Compare specializations, placement focus, budget, location, and selection process.',
  },
  {
    badge: 'Healthcare',
    title: 'BSc Nursing Admission',
    desc: 'Understand qualification rules, clinical exposure, documents, and state-wise timelines.',
  },
  {
    badge: 'Law',
    title: 'BA LLB and LLB Guidance',
    desc: 'Shortlist integrated and postgraduate law options with eligibility and fee clarity.',
  },
];

const Courses = ({ openPopup }) => (
  <section id="courses" className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
    <div className="mx-auto max-w-7xl">
      <div className="mb-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">List of top courses</p>
        <h2 className="mt-3 font-playfair text-3xl font-extrabold text-secondary sm:text-4xl">
          Browse course paths before you apply
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Pick a stream, compare the real admission requirements, and get help planning your next move.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {courseTags.map((tag) => (
          <button
            type="button"
            key={tag}
            onClick={openPopup}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm transition hover:border-primary hover:text-primary"
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-4">
        {courseCards.map((course) => (
          <article key={course.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-extrabold uppercase text-primary">
              {course.badge}
            </span>
            <h3 className="mt-4 text-lg font-extrabold leading-snug text-secondary">{course.title}</h3>
            <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600">{course.desc}</p>
            <button
              type="button"
              onClick={openPopup}
              className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-primary"
            >
              View course
              <span aria-hidden="true">-&gt;</span>
            </button>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Courses;
