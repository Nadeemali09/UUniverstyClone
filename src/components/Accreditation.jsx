const pills = [
  'NAAC A+ Grade', 'UGC Approved', 'AICTE', 'BCI (Law)',
  'PCI (Pharmacy)', 'QS World Rankings', 'NIRF Ranked'
];

const Accreditation = () => (
  <section className="bg-light py-12 px-5">
    <div className="max-w-6xl mx-auto">
      <div className="text-xs font-bold uppercase tracking-[1.5px] text-primary mb-3">
        Recognised & Accredited By
      </div>
      <div className="flex flex-wrap gap-3">
        {pills.map((p, i) => (
          <div key={i} className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-full text-sm font-semibold text-secondary">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            {p}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Accreditation;