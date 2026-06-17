const steps = [
  {
    title: 'Submit Form',
    desc: 'Tell us your course, city, preferred university, and current qualification.',
  },
  {
    title: 'Get Counselling',
    desc: 'A counsellor helps you understand eligibility, documents, budget, and application timing.',
  },
  {
    title: 'Compare Universities',
    desc: 'Review options by course fit, location, fee range, admission route, and career path.',
  },
  {
    title: 'Apply With Clarity',
    desc: 'Move ahead through the university process with a clearer shortlist and next-step plan.',
  },
];

const AdmissionProcess = () => (
  <section className="bg-light px-5 py-16" id="process">
    <div className="mx-auto max-w-6xl">
      <div className="mb-3 text-xs font-bold uppercase tracking-[1.5px] text-primary">Admission Process</div>
      <h2 className="mb-10 font-playfair text-3xl font-bold text-secondary sm:text-4xl">
        A Simple Four-Step Flow
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-5 text-4xl font-extrabold text-primary">{index + 1}</div>
            <h3 className="mb-2 text-base font-bold text-secondary">{step.title}</h3>
            <p className="text-sm leading-relaxed text-gray">{step.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default AdmissionProcess;
