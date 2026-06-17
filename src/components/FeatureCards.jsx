const features = [
  {
    mark: '01',
    title: 'Find Best Colleges',
    description: 'Compare colleges by stream, location, course fit, fee range, recognition, and admission route.',
    accent: 'bg-primary',
  },
  {
    mark: '02',
    title: 'Find Top Courses',
    description: 'Explore popular programs across engineering, management, law, healthcare, design, IT, and more.',
    accent: 'bg-accent',
  },
  {
    mark: '03',
    title: 'Get Admissions',
    description: 'Move from confusion to a shortlist, document checklist, deadline plan, and next-step counselling.',
    accent: 'bg-teal-600',
  },
];

const FeatureCards = ({ openPopup }) => (
  <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="features-title">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Great futures start here</p>
        <h2 id="features-title" className="mt-3 font-playfair text-3xl font-extrabold text-secondary sm:text-4xl">
          One place to discover, compare, and apply with clarity
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${feature.accent} text-sm font-extrabold text-white shadow-lg`}>
              {feature.mark}
            </div>
            <h3 className="text-xl font-extrabold text-secondary">{feature.title}</h3>
            <p className="mt-3 min-h-20 text-sm leading-7 text-slate-600">{feature.description}</p>
            <button
              type="button"
              onClick={openPopup}
              className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-primary transition hover:text-primary-dark"
            >
              Start now
              <span aria-hidden="true">-&gt;</span>
            </button>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCards;
