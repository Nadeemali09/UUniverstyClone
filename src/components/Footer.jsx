const Footer = () => (
  <footer className="bg-[#0f172a] px-5 py-8 text-white/70" id="contact">
    <div className="mx-auto mb-8 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-extrabold text-secondary">
            UC
          </div>
          <div>
            <strong className="block text-[15px] text-white">UniversityConnect</strong>
            <span className="text-[11px] text-white/50">Admission guidance platform</span>
          </div>
        </div>
        <p className="text-[13px] leading-relaxed">
          Independent admission guidance and career counselling for students comparing universities and courses
          across India.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-bold text-white">Quick Links</h4>
        <ul className="space-y-2">
          {[
            ['About Us', '#about'],
            ['Universities', '#universities'],
            ['Courses', '#courses'],
            ['Admission Process', '#process'],
            ['FAQ', '#faq'],
          ].map(([item, href]) => (
            <li key={item}>
              <a href={href} className="text-[13px] text-white/60 hover:text-white">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-bold text-white">Compliance</h4>
        <ul className="space-y-2">
          {[
            ['Privacy Policy', '#privacy'],
            ['Terms', '#terms'],
            ['Disclaimer', '#disclaimer'],
            ['Lead Form', '#lead-form'],
          ].map(([item, href]) => (
            <li key={item}>
              <a href={href} className="text-[13px] text-white/60 hover:text-white">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-bold text-white">Contact Us</h4>
        <ul className="space-y-2 text-[13px] text-white/60">
          <li>Business email: hello@universityconnect.in</li>
          <li>Address: Update with your registered office address</li>
          <li>Phone: Add your verified business number</li>
          <li>Hours: Monday to Saturday, 10 AM to 6 PM</li>
        </ul>
      </div>
    </div>

    <div className="mx-auto max-w-6xl border-t border-white/10 pt-5 text-center text-xs text-white/60">
      Copyright 2026 UniversityConnect. Independent counselling platform. Not an official university website.
    </div>
  </footer>
);

export default Footer;
