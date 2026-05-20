const stats = [
  { num: '29,000+', label: 'Students Enrolled' },
  { num: '200+', label: 'Placement Companies' },
  { num: '₹19.5 LPA', label: 'Highest Package' },
  { num: '153+', label: 'Courses Offered' },
];

const StatsBar = () => (
  <div className="bg-white shadow-lg px-5 py-6">
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-2xl font-extrabold text-primary">{stat.num}</div>
          <div className="text-[11px] text-gray font-medium mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
);

export default StatsBar;