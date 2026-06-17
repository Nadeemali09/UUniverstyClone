import { useState } from 'react';
import { useGoogleAds } from './GoogleAdsContext';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  course: '',
  university: '',
  city: '',
  qualification: '',
  consent: false,
};

const courses = ['BTech', 'MBA', 'BBA', 'Law', 'Nursing', 'Pharmacy', 'BCA / MCA', 'Other'];
const universities = [
  'Uttaranchal University',
  'Graphic Era',
  'UPES',
  'DIT University',
  'Amity University',
  'Open to suggestions',
];

const LeadForm = ({ compact = false, source = 'Website Lead Form', onSuccess }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { trackConversion } = useGoogleAds() || {};

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please enter your name and mobile number.');
      return;
    }

    if (!formData.consent) {
      alert('Please provide consent so our counsellor can contact you.');
      return;
    }

    setIsSubmitting(true);

    try {
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            source,
            submittedAt: new Date().toISOString(),
          }),
        });
      }

      trackConversion?.();
      setSubmitted(true);
      setFormData(initialFormData);
      onSuccess?.();
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-7">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-700">
          OK
        </div>
        <h4 className="text-xl font-bold text-secondary">Thank you</h4>
        <p className="mt-2 text-sm leading-relaxed text-gray">
          Your request has been received. A counsellor will contact you soon with admission guidance.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} onClick={(event) => event.stopPropagation()}>
      <div className={`grid gap-3 ${compact ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <label className="text-left">
          <span className="mb-1.5 block text-xs font-semibold text-dark">Full Name *</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-dark outline-none focus:border-primary"
          />
        </label>

        <label className="text-left">
          <span className="mb-1.5 block text-xs font-semibold text-dark">Mobile Number *</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-dark outline-none focus:border-primary"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="text-left">
          <span className="mb-1.5 block text-xs font-semibold text-dark">Email Address</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@example.com"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-dark outline-none focus:border-primary"
          />
        </label>

        <label className="text-left">
          <span className="mb-1.5 block text-xs font-semibold text-dark">City</span>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Your city"
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-dark outline-none focus:border-primary"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="text-left">
          <span className="mb-1.5 block text-xs font-semibold text-dark">Course Interested In</span>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-dark outline-none focus:border-primary"
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course}>{course}</option>
            ))}
          </select>
        </label>

        <label className="text-left">
          <span className="mb-1.5 block text-xs font-semibold text-dark">Preferred University</span>
          <select
            name="university"
            value={formData.university}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-dark outline-none focus:border-primary"
          >
            <option value="">Select University</option>
            {universities.map((university) => (
              <option key={university}>{university}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="text-left">
        <span className="mb-1.5 block text-xs font-semibold text-dark">Current Qualification</span>
        <select
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-dark outline-none focus:border-primary"
        >
          <option value="">Select Qualification</option>
          <option>Currently in 12th</option>
          <option>Passed 12th</option>
          <option>Graduation</option>
          <option>Post Graduation</option>
          <option>Working Professional</option>
        </select>
      </label>

      <label className="flex items-start gap-2 text-left text-[11px] leading-relaxed text-gray">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary"
        />
        <span>
          I consent to receive calls, WhatsApp messages, or emails from UniversityConnect for admission
          counselling. I understand this is an independent guidance service and not an official university portal.
        </span>
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-primary px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Submitting...' : 'Get Free Counselling'}
      </button>
    </form>
  );
};

export default LeadForm;
