import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LOGO_URL =
  'https://storage.readdy-site.link/project_files/71bb764e-4fe9-4082-aa15-14fec6161f6f/b5c1356c-0adb-48bf-8921-b71ccdd0aa3d_Logo-only.png?v=6d610c3a88bf087c680cad722c27f4c1';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f1117]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={LOGO_URL} alt="Brito Consulting Group Logo" className="w-10 h-10 object-contain" />
          </div>
          <span className="text-white font-semibold text-base tracking-wide whitespace-nowrap hidden sm:block">
            Brito Consulting Group
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-widest font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                location.pathname === link.path
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <span className="flex items-center gap-1.5 text-xs text-[#e8b84b] font-medium whitespace-nowrap">
            <i className="ri-translate-2 text-sm"></i>
            Se Habla Español
          </span>
          <Link
            to="/contact"
            className="ml-2 px-5 py-2 rounded-full bg-[#e8b84b] text-[#0f1117] text-sm font-semibold uppercase tracking-widest whitespace-nowrap cursor-pointer hover:bg-[#f0c96a] transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`text-xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f1117]/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 px-5 py-3 rounded-full bg-[#e8b84b] text-[#0f1117] text-sm font-semibold uppercase tracking-widest text-center whitespace-nowrap cursor-pointer"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
