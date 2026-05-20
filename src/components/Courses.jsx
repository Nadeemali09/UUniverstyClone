const courses = [
  {
    badge: 'Most Popular',
    icon: '💻',
    title: 'B.Tech (CSE / AI / Cyber Security)',
    desc: '4-year program with JEE / CUET admission. Specializations in AI&ML, Cloud Computing, Aerospace & more.',
    fee: '₹2.26 L/year onwards',
  },
  {
    badge: 'Top MBA',
    icon: '📊',
    title: 'MBA (All Specializations)',
    desc: '2-year full-time PG program with CAT/MAT/XAT/CMAT. Industry visits, case studies & live projects.',
    fee: '₹2.72 L/year',
  },
  {
    icon: '⚖️',
    title: 'BA LLB / BBA LLB (Hons)',
    desc: '5-year integrated law program. BCI approved with strong moot court & litigation training.',
    fee: '₹1.5 L/year onwards',
  },
  {
    badge: 'NIRF #75',
    icon: '💊',
    title: 'B.Pharma / M.Pharma',
    desc: 'PCI approved pharmacy programs. Ranked #75 nationally by NIRF 2025 in Pharmacy category.',
    fee: '₹1.77 L/year',
  },
  {
    icon: '🏥',
    title: 'B.Sc Nursing',
    desc: '4-year nursing program with clinical training at affiliated hospitals. Strong placement record.',
    fee: '₹2.55 L/year',
  },
  {
    icon: '🖥️',
    title: 'BCA / MCA',
    desc: '3-year BCA & 2-year MCA programs in Computer Applications with industry-relevant curriculum.',
    fee: '₹1.33 L/year onwards',
  },
];

const Courses = ({ openPopup }) => (
  <section id="courses" className="py-16 px-5">
    <div className="max-w-6xl mx-auto">
      <div className="text-xs font-bold uppercase tracking-[1.5px] text-primary mb-3">Our Programs</div>
      <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-secondary mb-3">
        Find Your Perfect Course
      </h2>
      <p className="text-gray text-sm max-w-lg leading-relaxed mb-10">
        Choose from 153+ UG, PG & Doctoral programs across Engineering, Management, Law, Pharmacy, Nursing and more.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((c, i) => (
          <div
            key={i}
            onClick={(e) => { e.stopPropagation(); openPopup(); }}
            className="relative border border-gray-200 rounded-xl p-6 cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Top colored bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-primary rounded-t-xl" />
            {c.badge && (
              <span className="inline-block text-[10px] bg-yellow-50 text-yellow-800 px-2 py-0.5 rounded-full font-semibold mb-3">
                {c.badge}
              </span>
            )}
            <div className="text-3xl mb-3">{c.icon}</div>
            <h3 className="text-base font-bold text-secondary mb-1.5">{c.title}</h3>
            <p className="text-xs text-gray leading-relaxed mb-4">{c.desc}</p>
            <div className="text-sm font-semibold text-primary">{c.fee}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Courses;