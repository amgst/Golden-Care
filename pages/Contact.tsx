import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ADDRESS, EMAIL_ADDRESS, PHONE_NUMBER, FAQS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log(formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      <div className="bg-slate-900 py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-slate-300">We are here to help you navigate your care journey.</p>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form Side */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl text-center">
                <h3 className="text-xl font-bold mb-2">Thank you!</h3>
                <p>Your message has been received. A member of our team will be in touch with you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-green-700 font-semibold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow"
                      placeholder="0400 000 000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-1">Interested Service</label>
                  <select 
                    id="serviceType" 
                    name="serviceType" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow bg-white"
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    <option>General Inquiry</option>
                    <option>Personal Care</option>
                    <option>Mobility & Transport</option>
                    <option>Nursing Support</option>
                    <option>Accommodation</option>
                    <option>Plan Management</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-shadow"
                    placeholder="Tell us a bit about your needs..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-colors flex justify-center items-center shadow-md"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-12">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wide">Phone</p>
                    <p className="text-lg text-slate-600">{PHONE_NUMBER}</p>
                    <p className="text-sm text-slate-500">Available 24/7</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wide">Email</p>
                    <p className="text-lg text-slate-600">{EMAIL_ADDRESS}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-wide">Head Office</p>
                    <p className="text-lg text-slate-600">{ADDRESS}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {FAQS.map((faq, index) => (
                  <div key={index} className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.question}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;