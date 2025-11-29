import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import SafeImage from '../components/SafeImage';
import { SERVICES_DATA, TAGLINE, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  // Take first 3 services for preview
  const featuredServices = SERVICES_DATA.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SafeImage 
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=1920" 
            alt="Compassionate caregiver providing warm, family-like care to senior person" 
            className="w-full h-full object-cover opacity-30" 
            loading="eager"
            fallbackColor="bg-slate-800"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block bg-teal-600/20 border border-teal-500/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
              <span className="text-teal-300 font-medium text-sm tracking-wide">NDIS Registered Provider</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Care that feels like <span className="text-teal-400">family.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed">
              {TAGLINE}. We are dedicated to providing personalized support that empowers you to live with dignity and independence.
            </p>
            <nav className="flex flex-col sm:flex-row gap-4" aria-label="Main call-to-action navigation">
              <Link 
                to="/services" 
                className="inline-flex justify-center items-center bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-teal-500/30 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Explore our services"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex justify-center items-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-3.5 rounded-lg transition-all backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Contact us for more information"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </section>

      {/* Intro / Mission */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-50 rounded-full z-0"></div>
              <SafeImage 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800" 
                alt="Senior person living independently and actively, empowered to live their best life" 
                className="relative z-10 rounded-2xl shadow-xl w-full" 
                loading="lazy"
                fallbackColor="bg-slate-200"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Empowering You to Live Your Best Life</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                At GoldenCare, we believe that age or disability should never define your limits. Our mission is simple: to provide compassionate, respectful, and tailored support that fits your unique lifestyle.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Whether you need a helping hand around the house, clinical nursing care, or someone to accompany you to social events, our diverse and professional team is here for you.
              </p>
              <ul className="space-y-4">
                {[
                  "Registered NDIS Provider",
                  "Qualified & Screened Staff",
                  "24/7 On-Call Support",
                  "Multilingual Team"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-teal-500 shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-slate-600">Comprehensive support tailored to your individual needs and goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center text-teal-700 font-bold hover:text-teal-800 text-lg group"
            >
              View All Services
              <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-teal-800 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Client Stories</h2>
            <p className="text-teal-100 opacity-90">Don't just take our word for it. Hear from those we support.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(testimonial => (
              <div key={testimonial.id} className="bg-teal-900/50 p-8 rounded-2xl border border-teal-700/50 backdrop-blur-sm">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg italic text-teal-50 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <SafeImage 
                    src={testimonial.imageUrl} 
                    alt={`${testimonial.name}, ${testimonial.role}`} 
                    className="w-12 h-12 rounded-full border-2 border-teal-500 object-cover" 
                    loading="lazy"
                    fallbackColor="bg-teal-600"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <span className="text-xs text-teal-300 uppercase tracking-wide">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-slate-100 rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Ready to discuss your care needs?</h2>
              <p className="text-slate-600 text-lg">Our friendly team is available 24/7 to answer your questions.</p>
            </div>
            <Link 
              to="/contact" 
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-colors whitespace-nowrap"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;