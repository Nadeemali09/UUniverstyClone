import { useState, useEffect } from 'react';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const InlineForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.stopPropagation();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please fill required fields.');
      return;
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          course: formData.course,
          qualification: '',
        }),
      });
      setSubmitted(true);
    } catch (err) {
      alert('Something went wrong.');
      console.error(err);
    }
  };

  // ⏱️ Auto-reset after 3 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', email: '', course: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <section className="bg-gradient-to-br from-secondary to-[#1e3a9e] text-white py-16 px-5 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs font-bold uppercase tracking-[1.5px] text-accent mb-3">Free Counselling</div>
        <h2 className="font-playfair font-bold text-3xl sm:text-4xl mb-3">Start Your Admission Journey Today</h2>
        <p className="text-white/75 text-sm max-w-lg mx-auto leading-relaxed mb-8">
          Fill in your details and our admission counsellor will call you within 24 hours — absolutely free!
        </p>
        <div
          className="bg-white rounded-2xl p-6 max-w-lg mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {!submitted ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-left">
                  <label className="block text-xs font-semibold text-dark mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-dark focus:border-primary outline-none"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-xs font-semibold text-dark mb-1.5">Mobile Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-dark focus:border-primary outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-left">
                  <label className="block text-xs font-semibold text-dark mb-1.5">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-dark focus:border-primary outline-none"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-xs font-semibold text-dark mb-1.5">Course Interested In</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-dark focus:border-primary outline-none"
                  >
                    <option value="">Select Course</option>
                    <option>B.Tech</option>
                    <option>MBA</option>
                    <option>B.Pharma</option>
                    <option>BA LLB</option>
                    <option>B.Sc Nursing</option>
                    <option>BCA / MCA</option>
                  </select>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="mt-6 w-full py-3.5 rounded-lg text-sm font-bold text-white transition-colors bg-primary hover:bg-primary-dark"
              >
                Get Free Counselling Call →
              </button>
              <p className="text-[11px] text-gray text-center mt-3">
                🔒 Your data is 100% secure. We never share your information.
              </p>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="text-5xl mb-4">✅</div>
              <h4 className="text-xl font-bold text-secondary mb-2">Thank You!</h4>
              <p className="text-sm text-gray">
                Our counsellor will call you within 24 hours.
              </p>
              <p className="text-xs text-gray mt-2">Redirecting to form in 3 seconds...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InlineForm;