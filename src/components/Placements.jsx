import { useState } from 'react';

const placementStats = [
  { num: '₹1.5 Cr', label: 'Highest Package' },
  { num: '₹4.9 LPA', label: 'Average Package' },
  { num: '200+', label: 'Companies Visited' },
  { num: '₹11 LPA', label: 'Top Law Package' },
];

const recruiters = [
  { name: 'Amazon',           domain: 'amazon.com' },
  { name: 'Google',           domain: 'google.com' },
  { name: 'Deloitte',         domain: 'deloitte.com' },
  { name: 'Cognizant',        domain: 'cognizant.com' },
  { name: 'Asian Paints',     domain: 'asianpaints.com' },
  { name: 'TCS',              domain: 'tcs.com' },
  { name: 'Infosys',          domain: 'infosys.com' },
  { name: 'Wipro',            domain: 'wipro.com' },
  { name: 'HDFC Bank',        domain: 'hdfcbank.com' },
  { name: 'Accenture',        domain: 'accenture.com' },
  { name: 'HCL Technologies', domain: 'hcltech.com' },
  { name: 'Capgemini',        domain: 'capgemini.com' },
];

const FALLBACK_COLORS = [
  '#0EA5E9', '#6366F1', '#F59E0B', '#10B981',
  '#EF4444', '#8B5CF6', '#EC4899', '#14B8A6',
  '#F97316', '#06B6D4', '#84CC16', '#A855F7',
];

const RecruiterCard = ({ name, domain, idx }) => {
  const [imgError, setImgError] = useState(false);

  // Google's favicon service — reliable, no CORS issues, no API key needed
  const logoSrc = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  const fallbackColor = FALLBACK_COLORS[idx % FALLBACK_COLORS.length];

  return (
    <div className="group bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all duration-300 hover:-translate-y-1 min-h-[90px]">
      {!imgError ? (
        <img
          src={logoSrc}
          alt={`${name} logo`}
          className="h-10 w-10 object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
          style={{ backgroundColor: fallbackColor }}
        >
          {name.charAt(0)}
        </div>
      )}
      <span className="text-[11px] font-semibold text-gray-600 text-center leading-tight">
        {name}
      </span>
    </div>
  );
};

const Placements = () => (
  <section className="py-16 px-5 bg-white">
    <div className="max-w-6xl mx-auto">

      <div className="text-xs font-bold uppercase tracking-[1.5px] text-primary mb-3">
        Placements 2025
      </div>

      <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-secondary mb-3">
        Career-Ready from Day One
      </h2>

      <p className="text-gray text-sm max-w-lg leading-relaxed mb-10">
        Our Corporate Resource Centre actively connects students with top employers.
        Strong placement track record across all programs.
      </p>

      {/* Stats */}
      <div className="flex flex-wrap gap-8 mb-10">
        {placementStats.map((s, i) => (
          <div key={i}>
            <div className="text-3xl font-extrabold text-primary">{s.num}</div>
            <div className="text-xs text-gray font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Recruiters Grid */}
      <h3 className="text-[15px] font-bold text-secondary mb-6">Top Recruiters</h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {recruiters.map(({ name, domain }, idx) => (
          <RecruiterCard key={name} name={name} domain={domain} idx={idx} />
        ))}
      </div>

    </div>
  </section>
);

export default Placements;