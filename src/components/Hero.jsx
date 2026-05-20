import { useState } from 'react';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const Hero = ({ openPopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.stopPropagation();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please enter your name and mobile number.');
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
          email: '',               // Agar email field ho to yahan add karein
          course: formData.course,
          qualification: '',
        }),
      });
      setSubmitted(true);
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    }
  };

  return (
    <section className="relative min-h-150 flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df9010a7eec?auto=format&fit=crop&w=1200&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-br from-secondary/90 via-[#2d3f8f]/80 to-primary/85" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Text */}
        <div className="flex-1 text-white">
          <span className="inline-block bg-accent text-dark text-xs font-bold uppercase px-4 py-1.5 rounded-full mb-4 tracking-wider">
            🎓 Admissions 2026 Open — Limited Seats!
          </span>
          <h1 className="font-playfair font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
            Shape Your Future at<br />Uttaranchal University
          </h1>
          <p className="text-base text-white/80 max-w-xl leading-relaxed mb-7">
            NAAC A+ Accredited | 29,000+ Students | Ranked #75 Nationally in Pharmacy by NIRF 2025.
            Experience world-class education in the scenic Doon Valley, Dehradun.
          </p>
        </div>

        {/* Right: Form Card */}
        <div
          className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 lg:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {!submitted ? (
            <>
              <h3 className="text-xl font-bold text-secondary mb-1">Get Free Counselling</h3>
              <p className="text-sm text-gray mb-5">Fill the form, we’ll call you within 24 hours.</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-dark mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark mb-1">Course Interested In</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:border-primary outline-none"
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
                <button
                  onClick={handleSubmit}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-bold text-sm transition-colors"
                >
                  Submit & Get Call Back →
                </button>
              </div>
              <p className="text-[11px] text-gray text-center mt-4">
                🔒 Your data is 100% secure. No spam.
              </p>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="text-5xl mb-4">✅</div>
              <h4 className="text-xl font-bold text-secondary mb-2">Thank You, {formData.name}!</h4>
              <p className="text-sm text-gray">
                Our counsellor will call you on <strong>{formData.phone}</strong> within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;