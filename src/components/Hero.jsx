import { useState } from 'react';
import bgImage from '../assets/bgimage.png';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const Hero = ({ openPopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    qualification: '',
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
          email: formData.email,
          course: formData.course,
          qualification: formData.qualification,
        }),
      });
      setSubmitted(true);
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Slight dark overlay to ensure text readability, but reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 via-[#2d3f8f]/60 to-primary/65" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 py-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Text */}
        <div className="flex-1 text-white">
          <span className="inline-block bg-accent text-dark text-xs font-bold uppercase px-4 py-1.5 rounded-full mb-4 tracking-wider">
            🎓 Admissions 2026 Open — Limited Seats!
          </span>
          <h1 className="font-playfair font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4">
            Shape Your Future at<br />Uttaranchal University
          </h1>
          <p className="text-base text-white/90 max-w-xl leading-relaxed mb-7">
            NAAC A+ Accredited | 29,000+ Students | Ranked #75 Nationally in Pharmacy by NIRF 2025.
            Experience world-class education in the scenic Doon Valley, Dehradun.
          </p>
        </div>

        {/* Right: Transparent Froste Glass Form */}
        <div
          className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 lg:p-8 border border-white/30"
          onClick={(e) => e.stopPropagation()}
        >
          {!submitted ? (
            <>
              <h3 className="text-xl font-bold text-secondary mb-1">Get Free Counselling</h3>
              <p className="text-sm text-gray mb-5">Fill the form, we’ll call you within 24 hours.</p>

              <div className="space-y-4">
                {/* Row 1: Name + Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-dark focus:border-primary outline-none bg-white/90"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1">Mobile No. *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-dark focus:border-primary outline-none bg-white/90"
                    />
                  </div>
                </div>

                {/* Row 2: Email + Course */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-dark focus:border-primary outline-none bg-white/90"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1">Course Interested</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-dark focus:border-primary outline-none bg-white/90"
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

                {/* Row 3: Qualification */}
                <div>
                  <label className="block text-xs font-semibold text-dark mb-1">Current Qualification</label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-dark focus:border-primary outline-none bg-white/90"
                  >
                    <option value="">Select</option>
                    <option>Currently in 12th</option>
                    <option>Passed 12th</option>
                    <option>Graduation</option>
                    <option>Post Graduation</option>
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