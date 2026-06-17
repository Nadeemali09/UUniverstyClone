import LeadForm from './LeadForm';

const InlineForm = () => (
  <section className="bg-gradient-to-br from-secondary to-[#274866] px-5 py-16 text-center text-white" id="lead-form">
    <div className="mx-auto max-w-6xl">
      <div className="mb-3 text-xs font-bold uppercase tracking-[1.5px] text-accent">Free Counselling</div>
      <h2 className="mb-3 font-playfair text-3xl font-bold sm:text-4xl">Start Your Admission Journey Today</h2>
      <p className="mx-auto mb-8 max-w-lg text-sm leading-relaxed text-white/75">
        Fill in your details and our counsellor will help you understand suitable courses, universities, and next steps.
      </p>
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6" onClick={(event) => event.stopPropagation()}>
        <LeadForm source="Inline Form" />
      </div>
    </div>
  </section>
);

export default InlineForm;
