const testimonials = [
  {
    text: 'The counselling call helped me compare MBA options without feeling pressured. I finally understood what documents and entrance scores I needed.',
    initials: 'PS',
    name: 'Priya Sharma',
    course: 'MBA aspirant',
  },
  {
    text: 'I was confused between BTech branches. The counsellor explained career paths and helped me shortlist colleges by budget and location.',
    initials: 'AK',
    name: 'Aman Kumar',
    course: 'BTech aspirant',
  },
  {
    text: 'The team explained the nursing admission process clearly and helped me prepare questions before speaking with colleges.',
    initials: 'NR',
    name: 'Neha Rawat',
    course: 'Nursing aspirant',
  },
];

const Testimonials = () => (
  <section className="px-5 py-16">
    <div className="mx-auto max-w-6xl">
      <div className="mb-3 text-xs font-bold uppercase tracking-[1.5px] text-primary">
        Student Feedback
      </div>
      <h2 className="mb-6 font-playfair text-3xl font-bold text-secondary sm:text-4xl">
        Guidance That Makes Decisions Easier
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-3 text-sm font-bold text-accent">5/5 rating</div>
            <p className="mb-4 text-sm italic leading-relaxed text-gray">"{testimonial.text}"</p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary text-sm font-bold text-white">
                {testimonial.initials}
              </div>
              <div>
                <div className="text-[13px] font-bold text-secondary">{testimonial.name}</div>
                <div className="text-[11px] text-gray">{testimonial.course}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
