import { Container } from '../common';

/**
 * Footer Component - Enhanced with accessibility
 * Organized footer links and company info
 */
const FooterLayout = ({ companyName = 'UniversityConnect', year = new Date().getFullYear() }) => {
  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Universities', href: '#universities' },
    { label: 'Courses', href: '#courses' },
    { label: 'Admission Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  const complianceLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms & Conditions', href: '#terms' },
    { label: 'Disclaimer', href: '#disclaimer' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer 
      className="bg-gradient-to-b from-gray-900 to-black px-5 py-12 text-white/70"
      role="contentinfo"
    >
      <Container className="mb-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-sm font-extrabold text-gray-900">
                UC
              </div>
              <div>
                <strong className="block text-base text-white">{companyName}</strong>
                <span className="text-xs text-white/50">Admission guidance platform</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Independent admission guidance and career counselling for students comparing universities and courses
              across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-base font-bold text-white">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <a 
                  key={href}
                  href={href} 
                  className="block text-sm text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="mb-4 text-base font-bold text-white">Compliance</h4>
            <nav className="space-y-2">
              {complianceLinks.map(({ label, href }) => (
                <a 
                  key={href}
                  href={href} 
                  className="block text-sm text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-base font-bold text-white">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hello@universityconnect.in" className="text-white/60 hover:text-white transition-colors">
                  hello@universityconnect.in
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-white/60 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/50 sm:flex-row">
            <p>&copy; {year} {companyName}. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default FooterLayout;
