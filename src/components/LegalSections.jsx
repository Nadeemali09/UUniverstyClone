const legalItems = [
  {
    id: 'privacy',
    title: 'Privacy Policy',
    body:
      'We collect details submitted through our forms, including name, phone, email, city, course preference, university preference, and qualification. This information is used to contact you for counselling and admission guidance. You may request removal of your data by contacting our business email.',
  },
  {
    id: 'terms',
    title: 'Terms',
    body:
      'Information on this website is for counselling and comparison support only. Fees, eligibility, scholarships, admission rules, and deadlines can change and should be verified with the respective university before applying.',
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    body:
      'UniversityConnect is not an official university website or official admission portal. We do not guarantee admission, scholarships, seat confirmation, or placement outcomes.',
  },
];

const seoPages = [
  'BTech Admission 2026',
  'MBA Admission 2026',
  'Law Admission 2026',
  'Nursing Admission 2026',
  'Uttaranchal University Admission Guidance',
  'Graphic Era Admission Guidance',
  'UPES Admission Guidance',
];

const LegalSections = () => (
  <section className="px-5 py-16" id="compliance">
    <div className="mx-auto max-w-6xl">
      <div className="mb-3 text-xs font-bold uppercase tracking-[1.5px] text-primary">
        Compliance Pages
      </div>
      <h2 className="mb-8 font-playfair text-3xl font-bold text-secondary sm:text-4xl">
        Clear Policies Before You Submit
      </h2>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {legalItems.map((item) => (
          <article key={item.id} id={item.id} className="rounded-xl border border-gray-200 bg-white p-6">
            <h3 className="mb-3 text-base font-bold text-secondary">{item.title}</h3>
            <p className="text-sm leading-relaxed text-gray">{item.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-gray-200 bg-light p-6">
        <h3 className="mb-4 text-base font-bold text-secondary">Recommended SEO Landing Pages</h3>
        <div className="flex flex-wrap gap-3">
          {seoPages.map((page) => (
            <span key={page} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray">
              {page}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LegalSections;
