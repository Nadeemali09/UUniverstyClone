const stats = [
  { num: '5+', label: 'University options' },
  { num: '2026', label: 'Admission guidance' },
  { num: '8+', label: 'Popular course streams' },
  { num: 'Free', label: 'Initial counselling' },
];

const StatsBar = () => (
  <div className="bg-white px-5 py-6 shadow-lg">
    <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-2xl font-extrabold text-primary">{stat.num}</div>
          <div className="mt-1 text-[11px] font-medium text-gray">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default StatsBar;
