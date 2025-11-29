import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, ArrowLeft, Calendar, Phone } from 'lucide-react';
import { SERVICES_DATA, PHONE_NUMBER } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES_DATA.find(s => s.id === id);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Service Not Found</h2>
        <Link to="/services" className="text-teal-600 font-semibold hover:underline">
          &larr; Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Banner */}
      <div className="relative h-80 lg:h-96 bg-slate-900">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-12">
          <div className="container mx-auto">
            <Link to="/services" className="inline-flex items-center text-teal-300 hover:text-white mb-4 transition-colors">
              <ArrowLeft size={18} className="mr-2" /> Back to Services
            </Link>
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-2">{service.title}</h1>
            <p className="text-lg text-slate-300">{service.category}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                {service.fullDescription}
              </p>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 mt-8">What's Included</h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-slate-700">
                    <Check className="text-teal-500 mt-1 shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-slate-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Who is this for?</h3>
              <div className="flex flex-wrap gap-2">
                {service.whoIsItFor.map((item, idx) => (
                  <span key={idx} className="bg-teal-50 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24 border-t-4 border-teal-500">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Interested in this service?</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Contact our team to discuss how we can tailor this service to your specific needs and funding.
              </p>
              
              <div className="space-y-4">
                <Link 
                  to="/contact" 
                  className="flex items-center justify-center w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-xl transition-colors"
                >
                  <Calendar size={18} className="mr-2" />
                  Book Consultation
                </Link>
                <a 
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} 
                  className="flex items-center justify-center w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  Call {PHONE_NUMBER}
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="font-semibold text-sm text-slate-900 mb-2">Funding Options:</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• NDIS Managed</li>
                  <li>• Plan Managed</li>
                  <li>• Self Managed</li>
                  <li>• Private Paying</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;