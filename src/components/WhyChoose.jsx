const features = [
  {
    title: 'Counselling Before Shortlisting',
    desc: 'We start with your marks, interests, budget, preferred location, and career goals before suggesting options.',
  },
  {
    title: 'Compare Multiple Universities',
    desc: 'See how institutions differ across courses, eligibility, fees, campus location, and application timelines.',
  },
  {
    title: 'Career-Focused Guidance',
    desc: 'Understand the career path behind the course, not only the admission form.',
  },
  {
    title: 'Scholarship Direction',
    desc: 'Get help identifying merit, domicile, category, early-application, and institution-level scholarship routes.',
  },
  {
    title: 'Application Support',
    desc: 'Plan documents, deadlines, counselling calls, and the next steps needed to apply with confidence.',
  },
  {
    title: 'Clear Compliance',
    desc: 'We are transparent that UniversityConnect is an independent guidance service, not an official university website.',
  },
];

const WhyChoose = () => (
  <section className="bg-secondary px-5 py-16 text-white" id="about">
    <div className="mx-auto max-w-6xl">
      <div className="mb-3 text-xs font-bold uppercase tracking-[1.5px] text-accent">Why UniversityConnect?</div>
      <h2 className="mb-3 font-playfair text-3xl font-bold sm:text-4xl">
        Guidance Built Around the Student
      </h2>
      <p className="mb-10 max-w-xl text-sm leading-relaxed text-white/70">
        Admission decisions are expensive and emotional. We keep the process structured, practical, and easy to compare.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="rounded-xl border border-white/20 bg-white/10 p-6 transition-colors hover:bg-white/20"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-extrabold text-secondary">
              {String(index + 1).padStart(2, '0')}
            </div>
            <h4 className="mb-2 text-base font-bold">{feature.title}</h4>
            <p className="text-sm leading-relaxed text-white/65">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
