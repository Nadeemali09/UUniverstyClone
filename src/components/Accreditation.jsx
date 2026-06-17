const points = [
  'Independent counselling platform',
  'Course and eligibility guidance',
  'Transparent university comparison',
  'No guaranteed admission claims',
  'Student consent before contact',
  'Privacy-first lead handling',
];

const Accreditation = () => (
  <section className="bg-light px-5 py-12">
    <div className="mx-auto max-w-6xl">
      <div className="mb-3 text-xs font-bold uppercase tracking-[1.5px] text-primary">
        Trust and Compliance
      </div>
      <div className="flex flex-wrap gap-3">
        {points.map((point) => (
          <div
            key={point}
            className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-secondary"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            {point}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Accreditation;
