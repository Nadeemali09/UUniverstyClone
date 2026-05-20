const rankings = [
  { num: '#5', label: 'In Uttarakhand', org: 'NIRF Engineering 2025' },
  { num: '#75', label: 'In India', org: 'NIRF Pharmacy 2025' },
  { num: 'A+', label: 'Accreditation Grade', org: 'NAAC' },
  { num: 'QS', label: 'Asia Rankings 2026', org: 'QS World Rankings' },
];

const Rankings = () => (
  <section className="bg-light py-16 px-5">
    <div className="max-w-6xl mx-auto">
      <div className="text-xs font-bold uppercase tracking-[1.5px] text-primary mb-3">
        Rankings & Recognition
      </div>
      <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-secondary mb-3">
        Nationally Recognised Excellence
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        {rankings.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 text-center shadow-sm"
          >
            <div className="text-4xl font-extrabold text-primary">{r.num}</div>
            <div className="text-[11px] text-gray font-medium mt-1">{r.label}</div>
            <div className="text-xs text-secondary font-bold mt-1.5">{r.org}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Rankings;