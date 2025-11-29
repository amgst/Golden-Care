import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartHandshake, Phone } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-teal-500 text-white p-2 rounded-lg group-hover:bg-teal-600 transition-colors">
              <HeartHandshake size={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800 leading-tight">GoldenCare</h1>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Senior Support</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded px-2 py-1 ${
                  isActive(link.path)
                    ? 'text-teal-600'
                    : 'text-slate-600 hover:text-teal-600'
                }`}
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label={`Call us at ${PHONE_NUMBER}`}
            >
              <Phone size={16} aria-hidden="true" />
              <span>{PHONE_NUMBER}</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-600 hover:text-teal-600 focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset rounded px-2 ${
                  isActive(link.path)
                    ? 'text-teal-600'
                    : 'text-slate-600'
                }`}
                aria-current={isActive(link.path) ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="flex justify-center items-center space-x-2 bg-teal-600 text-white py-3 rounded-lg font-medium"
            >
              <Phone size={18} />
              <span>Call Us: {PHONE_NUMBER}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;