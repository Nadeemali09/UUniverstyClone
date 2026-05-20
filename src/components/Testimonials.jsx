const testimonials = [
  {
    stars: '★★★★★',
    text: 'The campus is beautiful and the faculty is very supportive. I got placed at a top IT company with a great package. UU gave me the skills and confidence to succeed.',
    initials: 'RK',
    name: 'Rohit Kumar',
    course: 'B.Tech CSE, 2024',
  },
  {
    stars: '★★★★★',
    text: 'The MBA program at UU is industry-focused. We had company visits, live projects and excellent mentorship. I landed my dream job before graduation!',
    initials: 'PS',
    name: 'Priya Sharma',
    course: 'MBA Marketing, 2025',
  },
  {
    stars: '★★★★☆',
    text: 'The pharmacy department is excellent. Our NIRF ranking speaks for itself. Great labs, experienced professors and strong alumni network. Highly recommend!',
    initials: 'AN',
    name: 'Anjali Negi',
    course: 'B.Pharma, 2024',
  },
];

const Testimonials = () => (
  <section className="py-16 px-5">
    <div className="max-w-6xl mx-auto">
      <div className="text-xs font-bold uppercase tracking-[1.5px] text-primary mb-3">
        Student Reviews
      </div>
      <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-secondary mb-3">
        What Our Students Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 relative">
            <div className="text-accent text-lg mb-3">{t.stars}</div>
            <p className="text-sm text-gray italic leading-relaxed mb-4">“{t.text}”</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-bold text-sm">
                {t.initials}
              </div>
              <div>
                <div className="text-[13px] font-bold text-secondary">{t.name}</div>
                <div className="text-[11px] text-gray">{t.course}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;