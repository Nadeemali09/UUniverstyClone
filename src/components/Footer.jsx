const Footer = () => (
  <footer className="bg-[#0f172a] text-white/70 py-8 px-5">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      {/* Column 1: University Info */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white font-bold">
            UU
          </div>
          <div>
            <strong className="block text-white text-[15px]">Uttaranchal University</strong>
            <span className="text-[11px] text-white/50">UIT, Dehradun</span>
          </div>
        </div>
        <p className="text-[13px] leading-relaxed">
          NAAC A+ Accredited private university established in 2013. Serving 29,000+ students with 153+ programs.
        </p>
      </div>

      {/* Column 2: Quick Links */}
      <div>
        <h4 className="text-white text-sm font-bold mb-3">Quick Links</h4>
        <ul className="space-y-2">
          {['About University', 'Courses & Programs', 'Admissions 2026', 'Scholarships', 'Campus Life'].map((item, i) => (
            <li key={i}><a href="#" className="text-white/60 text-[13px] hover:text-white">{item}</a></li>
          ))}
        </ul>
      </div>

      {/* Column 3: Programs */}
      <div>
        <h4 className="text-white text-sm font-bold mb-3">Programs</h4>
        <ul className="space-y-2">
          {['B.Tech Engineering', 'MBA Management', 'B.Pharma / M.Pharma', 'BA LLB / Law', 'B.Sc Nursing'].map((item, i) => (
            <li key={i}><a href="#" className="text-white/60 text-[13px] hover:text-white">{item}</a></li>
          ))}
        </ul>
      </div>

      {/* Column 4: Contact Us (added back) */}
      <div>
        <h4 className="text-white text-sm font-bold mb-3">Contact Us</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-white/60 text-[13px] hover:text-white">📍 Arcadia Grant, Premnagar, Dehradun</a></li>
          <li><a href="#" className="text-white/60 text-[13px] hover:text-white"></a></li>
          <li><a href="#" className="text-white/60 text-[13px] hover:text-white"></a></li>
          <li><a href="#" className="text-white/60 text-[13px] hover:text-white"></a></li>
        </ul>
      </div>
    </div>

    {/* Centered copyright text */}
    <div className="border-t border-white/10 pt-5 text-center text-xs text-white/60">
      © 2026 Uttaranchal University, Dehradun. All rights reserved. | NAAC A+ | UGC Approved
    </div>
  </footer>
);

export default Footer;