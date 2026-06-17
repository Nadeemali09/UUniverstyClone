const faqs = [
  {
    question: 'Is UniversityConnect an official university website?',
    answer:
      'No. UniversityConnect is an independent admission guidance and career counselling platform. We are not an official admission portal for any university.',
  },
  {
    question: 'Do you guarantee admission?',
    answer:
      'No. Admission depends on eligibility, documents, seat availability, entrance criteria, and each university approval process.',
  },
  {
    question: 'Which courses can I get guidance for?',
    answer:
      'Students commonly ask us about BTech, MBA, BBA, law, nursing, pharmacy, BCA, MCA, and allied programs.',
  },
  {
    question: 'Is the first counselling call free?',
    answer:
      'Yes. The initial counselling call is free so you can understand available options before deciding your next step.',
  },
  {
    question: 'How is my data used?',
    answer:
      'Your details are used to contact you about admission counselling and related course options. We do not present your inquiry as an official university application.',
  },
];

const FAQ = () => (
  <section className="bg-light px-5 py-16" id="faq">
    <div className="mx-auto max-w-6xl">
      <div className="mb-3 text-xs font-bold uppercase tracking-[1.5px] text-primary">FAQ</div>
      <h2 className="mb-8 font-playfair text-3xl font-bold text-secondary sm:text-4xl">
        Common Questions
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-xl border border-gray-200 bg-white p-5">
            <summary className="cursor-pointer text-sm font-bold text-secondary">{faq.question}</summary>
            <p className="mt-3 text-sm leading-relaxed text-gray">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
