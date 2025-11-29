import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Car, Home, Stethoscope, Users, Languages, ClipboardCheck, PlusCircle } from 'lucide-react';
import SafeImage from './SafeImage';
import { Service, ServiceCategory } from '../types';

interface ServiceCardProps {
  service: Service;
}

// Helper to map category to icon
const getIconForCategory = (category: ServiceCategory) => {
  switch (category) {
    case ServiceCategory.PERSONAL_CARE: return <User className="text-white" size={24} />;
    case ServiceCategory.MOBILITY: return <Car className="text-white" size={24} />;
    case ServiceCategory.ACCOMMODATION: return <Home className="text-white" size={24} />;
    case ServiceCategory.HEALTH: return <Stethoscope className="text-white" size={24} />;
    case ServiceCategory.COMMUNITY: return <Users className="text-white" size={24} />;
    case ServiceCategory.TRANSLATION: return <Languages className="text-white" size={24} />;
    case ServiceCategory.PLAN_MANAGEMENT: return <ClipboardCheck className="text-white" size={24} />;
    default: return <PlusCircle className="text-white" size={24} />;
  }
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10" />
        <SafeImage 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
          fallbackColor="bg-slate-300"
        />
        <div className="absolute top-4 left-4 bg-teal-500 p-2.5 rounded-lg shadow-lg z-20">
          {getIconForCategory(service.category)}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-bold text-teal-600 uppercase tracking-wide mb-2">{service.category}</div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
        <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
          {service.shortDescription}
        </p>
        
        <Link 
          to={`/services/${service.id}`} 
          className="inline-flex items-center text-teal-600 font-semibold text-sm hover:text-teal-800 transition-colors group/link"
        >
          <span>View Details</span>
          <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;