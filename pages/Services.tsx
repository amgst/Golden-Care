import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We offer a comprehensive range of support services designed to enhance your quality of life. 
            All our services can be customized to your specific NDIS plan or private care requirements.
          </p>
        </div>
      </div>

      {/* Listings */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Info Box */}
      <div className="container mx-auto px-4 lg:px-8 pb-20">
        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8 lg:p-10">
          <h3 className="text-2xl font-bold text-teal-800 mb-4">Don't see what you need?</h3>
          <p className="text-teal-700 mb-6 max-w-3xl">
            We understand that everyone's needs are unique. If you require a specific service not listed here, 
            please reach out to us. We specialize in creating tailored care plans and flexible support arrangements.
          </p>
          <a href="/#/contact" className="text-teal-700 font-bold underline hover:text-teal-900">
            Contact us for a custom plan &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;