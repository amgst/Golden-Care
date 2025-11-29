import React from 'react';
import SafeImage from '../components/SafeImage';
import { TEAM } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Compassion. Respect. Excellence.</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Founded with a vision to redefine senior care, GoldenCare is built on the belief that every individual deserves to be treated with the utmost dignity and respect, regardless of their age or ability.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Our mission is to empower seniors and NDIS participants to live fulfilling, independent lives within their own communities. We strive to deliver care that is not just functional, but emotional and relational.
              </p>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <span className="font-bold text-teal-700 text-lg">Person-Centered Care</span>
                  <span className="text-slate-600">We listen to you. Your goals, preferences, and routine drive our support.</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-teal-700 text-lg">Inclusivity</span>
                  <span className="text-slate-600">We celebrate diversity and provide culturally sensitive support to all backgrounds.</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-teal-700 text-lg">Integrity</span>
                  <span className="text-slate-600">We are transparent, honest, and accountable in everything we do.</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <SafeImage 
                src="https://images.unsplash.com/photo-1516307315259-22a89a039d91?auto=format&fit=crop&q=80&w=800" 
                alt="Care workers and seniors laughing together" 
                className="rounded-2xl shadow-xl w-full object-cover h-[500px]" 
                fallbackColor="bg-slate-200"
              />
              <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="text-slate-800 font-medium italic">"We treat every client as if they were our own family member."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-slate-600">Experienced professionals dedicated to your well-being.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map(member => (
              <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <SafeImage src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" fallbackColor="bg-slate-200" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;