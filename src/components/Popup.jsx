import { useState } from 'react';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const Popup = ({ closePopup }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [qualification, setQualification] = useState('');

  const handleSubmit = async (e) => {
    e.stopPropagation();
    if (!name.trim() || !phone.trim()) {
      alert('Please enter your name and mobile number.');
      return;
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          course,
          qualification,
        }),
      });
      setSubmitted(true);
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closePopup();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-5 animate-fadeIn"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-2xl max-w-md w-full relative overflow-hidden animate-slideUp">
        <div className="bg-gradient-to-br from-secondary to-primary text-white px-7 py-7 relative">
          <button
            onClick={(e) => { e.stopPropagation(); closePopup(); }}
            className="absolute top-3 right-4 bg-white/20 hover:bg-white/40 w-8 h-8 rounded-full text-white flex items-center justify-center text-sm transition-colors"
          >
            ✕
          </button>
          <h3 className="text-xl font-extrabold leading-tight mb-1">🎓 Get Free Admission Counselling</h3>
          <p className="text-[13px] opacity-85">Our expert will guide you through the admission process — completely FREE!</p>
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-6xl opacity-20">🎓</div>
        </div>

        <div className="px-7 py-6">
          {!submitted ? (
            <>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="block text-[12px] font-semibold text-dark mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-dark mb-1.5">Mobile No. *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:border-primary outline-none"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[12px] font-semibold text-dark mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:border-primary outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="block text-[12px] font-semibold text-dark mb-1.5">Course Interested</label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:border-primary outline-none"
                  >
                    <option value="">Select Course</option>
                    <option>B.Tech</option>
                    <option>MBA</option>
                    <option>B.Pharma</option>
                    <option>BA LLB</option>
                    <option>B.Sc Nursing</option>
                    <option>BCA / MCA</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-dark mb-1.5">Current Qualification</label>
                  <select
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:border-primary outline-none"
                  >
                    <option value="">Select</option>
                    <option>Currently in 12th</option>
                    <option>Passed 12th</option>
                    <option>Graduation</option>
                    <option>Post Graduation</option>
                  </select>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-primary hover:bg-primary-dark text-white py-3.5 rounded-lg font-bold text-sm transition-colors"
              >
                Submit & Get Call Back →
              </button>
              <p className="text-[11px] text-gray text-center mt-3">
                By submitting, you agree to our privacy policy. We will contact you shortly.
              </p>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="text-5xl mb-3">✅</div>
              <h4 className="text-xl font-bold text-secondary mb-2">Thank You, {name}!</h4>
              <p className="text-[13px] text-gray leading-relaxed">
                Your request has been received. Our admission counsellor will call you on <strong>{phone}</strong> within 24 hours.<br /><br />
                Check your email for confirmation and brochure download link.
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); closePopup(); }}
                className="mt-5 bg-primary text-white px-7 py-3 rounded-md font-bold text-sm hover:bg-primary-dark"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;