const placementStats = [
  { num: '₹1.5 Cr', label: 'Highest Package' },
  { num: '₹4.9 LPA', label: 'Average Package' },
  { num: '200+', label: 'Companies Visited' },
  { num: '₹11 LPA', label: 'Top Law Package' },
];

const recruiters = [
  'Amazon', 'Google', 'Deloitte', 'Cognizant', 'Asian Paints',
  'TCS', 'Infosys', 'Wipro', 'HDFC Bank', 'Accenture',
  'HCL Technologies', 'Capgemini',
];

const Placements = () => (
  <section className="py-16 px-5">
    <div className="max-w-6xl mx-auto">
      <div className="text-xs font-bold uppercase tracking-[1.5px] text-primary mb-3">Placements 2025</div>
      <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-secondary mb-3">
        Career-Ready from Day One
      </h2>
      <p className="text-gray text-sm max-w-lg leading-relaxed mb-10">
        Our Corporate Resource Centre actively connects students with top employers. Strong placement track record across all programs.
      </p>
      <div className="flex flex-wrap gap-8 mb-8">
        {placementStats.map((s, i) => (
          <div key={i}>
            <div className="text-3xl font-extrabold text-primary">{s.num}</div>
            <div className="text-xs text-gray font-medium">{s.label}</div>
          </div>
        ))}
      </div>
      <h3 className="text-[15px] font-bold text-secondary mb-4">Top Recruiters</h3>
      <div className="flex flex-wrap gap-3">
        {recruiters.map((r, i) => (
          <div
            key={i}
            className="bg-light border border-gray-200 px-4 py-2.5 rounded-lg text-sm font-semibold text-secondary hover:bg-gray-200 transition-colors"
          >
            {r}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Placements;