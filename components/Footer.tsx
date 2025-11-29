import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_NAME, ADDRESS, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <HeartHandshake size={32} className="text-teal-400" />
              <span className="text-xl font-bold">GoldenCare</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Providing compassionate, high-quality support services for seniors and NDIS participants. Promoting dignity, independence, and well-being.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-teal-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-teal-400 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Support</Link></li>
              <li><Link to="#" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/personal-care" className="hover:text-teal-400 transition-colors">Personal Care</Link></li>
              <li><Link to="/services/mobility-transport" className="hover:text-teal-400 transition-colors">Mobility & Transport</Link></li>
              <li><Link to="/services/nursing-health" className="hover:text-teal-400 transition-colors">Nursing Support</Link></li>
              <li><Link to="/services/community-social" className="hover:text-teal-400 transition-colors">Social Participation</Link></li>
              <li><Link to="/services/accommodation" className="hover:text-teal-400 transition-colors">Accommodation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-teal-400 mt-0.5 shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-teal-400 shrink-0" />
                <span>{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-teal-400 shrink-0" />
                <span>{EMAIL_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;