import { Link } from 'react-router-dom';

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'instant' });

const LOGO_URL =
  'https://storage.readdy-site.link/project_files/71bb764e-4fe9-4082-aa15-14fec6161f6f/b5c1356c-0adb-48bf-8921-b71ccdd0aa3d_Logo-only.png?v=6d610c3a88bf087c680cad722c27f4c1';

export default function Footer() {
  return (
    <footer className="bg-[#0f1117] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center">
                <img src={LOGO_URL} alt="BCG Logo" className="w-9 h-9 object-contain" />
              </div>
              <span className="text-white font-semibold text-sm tracking-wide">Brito Consulting Group</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              IT solutions for businesses that mean business. Enterprise-level support, SMB pricing.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="nofollow noopener noreferrer" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="nofollow noopener noreferrer" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors cursor-pointer">
                <i className="ri-twitter-x-fill text-lg"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="nofollow noopener noreferrer" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              <a href="#company">Company</a>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">Services</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              <a href="#services">Services</a>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">Managed IT</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">Cybersecurity</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">Cloud Solutions</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">IT Consulting</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">Help Desk Support</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              <a href="#support">Support</a>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contact" onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">Help Desk</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="hover:text-white transition-colors cursor-pointer">Get a Quote</Link></li>
              <li>
                <a href="mailto:info@britoconsulting.com" className="hover:text-white transition-colors cursor-pointer">
                  info@britoconsulting.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Brito Consulting Group. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[#e8b84b]">
            <i className="ri-translate-2 text-sm"></i>
            <span className="text-xs font-medium">Se Habla Español</span>
          </div>
          <p className="text-xs text-gray-600">
            IT for small and medium size businesses to feel Enterprise Level
          </p>
        </div>
      </div>
    </footer>
  );
}
