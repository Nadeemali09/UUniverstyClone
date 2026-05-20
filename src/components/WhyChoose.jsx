const features = [
  {
    icon: '🏆',
    title: 'NAAC A+ Accredited',
    desc: 'First university in Uttarakhand to receive NAAC A+ grade in the very first assessment cycle.',
  },
  {
    icon: '🌍',
    title: 'Global Recognition',
    desc: 'Featured in QS World University Rankings — Asia 2026 & QS Sustainability Rankings 2025.',
  },
  {
    icon: '🏭',
    title: '200+ Recruiters',
    desc: 'Top MNCs like Amazon, Google, Deloitte, Cognizant, Asian Paints visit campus every year.',
  },
  {
    icon: '📚',
    title: 'NEP 2020 Aligned',
    desc: 'Multidisciplinary curriculum designed for the future, offering flexibility and industry relevance.',
  },
  {
    icon: '💰',
    title: 'Generous Scholarships',
    desc: 'Up to 30% scholarship for meritorious students. Special scholarships for girls & Uttarakhand domicile.',
  },
  {
    icon: '🌿',
    title: 'Beautiful Campus',
    desc: 'Sprawling green campus in the scenic Doon Valley with world-class labs, library & sports facilities.',
  },
];

const WhyChoose = () => (
  <section className="bg-secondary text-white py-16 px-5">
    <div className="max-w-6xl mx-auto">
      <div className="text-xs font-bold uppercase tracking-[1.5px] text-accent mb-3">Why Choose UU?</div>
      <h2 className="font-playfair font-bold text-3xl sm:text-4xl mb-3">
        Your Success is Our Mission
      </h2>
      <p className="text-white/70 text-sm max-w-lg leading-relaxed mb-10">
        More than a university — a launchpad for your career with world-class infrastructure and industry connections.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors"
          >
            <div className="text-4xl mb-3">{f.icon}</div>
            <h4 className="text-base font-bold mb-2">{f.title}</h4>
            <p className="text-sm text-white/65 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;