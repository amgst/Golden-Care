import { Service, ServiceCategory, Testimonial, TeamMember, FAQItem } from './types';

export const COMPANY_NAME = "GoldenCare Senior Support Services";
export const TAGLINE = "Compassionate Care & Support for Seniors and NDIS Participants";
export const PHONE_NUMBER = "1300 000 000";
export const EMAIL_ADDRESS = "support@goldencare.dummy";
export const ADDRESS = "123 Wellness Way, Care City, VIC 3000";

export const SERVICES_DATA: Service[] = [
  {
    id: "personal-care",
    title: "Personal Care & Daily Living",
    category: ServiceCategory.PERSONAL_CARE,
    shortDescription: "Dignified assistance with daily routines, hygiene, and household tasks.",
    fullDescription: "Our Personal Care service is designed to support independence while ensuring safety and dignity. We assist with all aspects of daily living, from morning routines to evening settlement. Our support workers are trained to provide respectful, non-intrusive care tailored to your specific preferences.",
    features: [
      "Assistance with bathing, showering, and grooming",
      "Dressing and undressing support",
      "Meal preparation and feeding assistance",
      "Medication reminders",
      "Light domestic cleaning and laundry"
    ],
    benefits: [
      "Maintain personal hygiene with dignity",
      "Reduce risk of falls in the bathroom",
      "Enjoy nutritious home-cooked meals",
      "Live in a clean, safe environment"
    ],
    whoIsItFor: ["Seniors needing daily assistance", "NDIS participants with physical disabilities", "Post-surgery recovery patients"],
    imageUrl: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "mobility-transport",
    title: "Mobility & Transport Support",
    category: ServiceCategory.MOBILITY,
    shortDescription: "Safe transport to appointments, shopping, and social outings.",
    fullDescription: "Stay connected with your community through our Mobility and Transport services. Whether you need to get to a medical appointment, go grocery shopping, or visit friends, our reliable staff and accessible vehicles are here to help. We also offer travel training for those looking to build confidence using public transport.",
    features: [
      "Door-to-door transport service",
      "Wheelchair accessible vehicles",
      "Assistance attending medical appointments",
      "Shopping and errand runs",
      "Public transport training"
    ],
    benefits: [
      "Never miss an important appointment",
      "Maintain social connections",
      "Independence in running errands",
      "Safe travel with trained companions"
    ],
    whoIsItFor: ["Seniors who no longer drive", "NDIS participants requiring accessible transport"],
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "nursing-health",
    title: "Nursing & Health Support",
    category: ServiceCategory.HEALTH,
    shortDescription: "Professional community nursing and complex health care management.",
    fullDescription: "Our registered nurses and enrolled nurses provide high-quality clinical care in the comfort of your home. We work closely with your GP and specialists to manage chronic conditions, recover from illness, and ensure your overall health is monitored effectively.",
    features: [
      "Wound care and management",
      "Medication administration and management",
      "Chronic disease management (diabetes, heart disease)",
      "Palliative care support",
      "Continence assessment and management"
    ],
    benefits: [
      "Professional medical care at home",
      "Reduced hospital admissions",
      "Expert monitoring of health conditions",
      "Peace of mind for family members"
    ],
    whoIsItFor: ["Clients with high medical needs", "Post-hospital discharge patients", "Palliative care requirements"],
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "community-social",
    title: "Community & Social Participation",
    category: ServiceCategory.COMMUNITY,
    shortDescription: "Engaging activities to build social connections and life skills.",
    fullDescription: "Social isolation can be a major challenge for seniors and people with disabilities. Our Community Participation programs are designed to spark joy, foster friendships, and build new skills. From group outings to art classes and gentle exercise groups, there is something for everyone.",
    features: [
      "Group outings to local attractions",
      "Centre-based group activities (art, music, games)",
      "Innovative community participation programs",
      "Life-skills development workshops",
      "Companionship for hobbies"
    ],
    benefits: [
      "Combat social isolation and loneliness",
      "Build confidence and social skills",
      "Learn new hobbies and interests",
      "Be an active member of the community"
    ],
    whoIsItFor: ["Seniors seeking social connection", "NDIS participants looking for community engagement"],
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "accommodation",
    title: "Accommodation & Tenancy",
    category: ServiceCategory.ACCOMMODATION,
    shortDescription: "Assistance with housing, tenancy obligations, and accessible living.",
    fullDescription: "Finding and keeping appropriate housing can be stressful. Our team helps you navigate the housing market, understand tenancy agreements, and ensure your home environment is safe and accessible.",
    features: [
      "Assistance applying for rental properties",
      "Support with tenancy obligations",
      "Coordination of home modifications",
      "Short-term accommodation (respite)"
    ],
    benefits: [
      "Secure and stable housing",
      "Understanding of tenant rights",
      "Safe home environment tailored to needs"
    ],
    whoIsItFor: ["NDIS participants needing housing support", "Seniors requiring home modifications"],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "translation",
    title: "Interpreting & Translation",
    category: ServiceCategory.TRANSLATION,
    shortDescription: "Bridging language gaps with professional interpreting services.",
    fullDescription: "We believe language should never be a barrier to quality care. Our multicultural team and network of professional interpreters ensure that you can communicate your needs and understand your care plan clearly.",
    features: [
      "On-site interpreting for appointments",
      "Document translation services",
      "Multilingual support workers",
      "Cultural liaison support"
    ],
    benefits: [
      "Clear understanding of medical and legal matters",
      "Culturally appropriate care",
      "Empowerment through effective communication"
    ],
    whoIsItFor: ["Non-English speaking seniors", "CALD (Culturally and Linguistically Diverse) community members"],
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Margaret H.",
    role: "Senior Client",
    quote: "The team at GoldenCare has been a godsend. My support worker, Sarah, is so kind and patient. I look forward to her visits every week.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t2",
    name: "David L.",
    role: "Son of Client",
    quote: "Finding reliable care for my father was stressful until we found GoldenCare. Their communication is excellent, and Dad is much happier now.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "t3",
    name: "Anita R.",
    role: "NDIS Participant",
    quote: "They really listened to what I wanted to achieve. The community programs have helped me make new friends and get out of the house.",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "m1",
    name: "Dr. Elena Rossi",
    role: "Clinical Director",
    bio: "With over 20 years in geriatric medicine, Elena oversees all clinical care plans to ensure the highest medical standards.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "m2",
    name: "James Chen",
    role: "Senior Support Coordinator",
    bio: "James specializes in complex NDIS plans and helping participants maximize their funding for the best possible outcomes.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "m3",
    name: "Maria Gonzalez",
    role: "Head of Care Services",
    bio: "Maria manages our team of support workers, ensuring that kindness, respect, and punctuality are always prioritized.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Are your staff qualified and checked?",
    answer: "Yes, absolutely. All our staff undergo rigorous background checks (Police Check, Working with Children Check) and hold relevant qualifications in Aged Care, Disability Support, or Nursing."
  },
  {
    question: "Can I use my NDIS funding?",
    answer: "Yes, GoldenCare is a registered NDIS provider. We can support participants who are NDIA-managed, plan-managed, or self-managed."
  },
  {
    question: "Do you offer services on weekends?",
    answer: "Yes, we provide support 24 hours a day, 7 days a week, including public holidays, depending on your care plan requirements."
  },
  {
    question: "Can I choose my support worker?",
    answer: "We strive to match you with a support worker who suits your personality, language, and care needs. If you are not happy with a match, we will happily find someone else for you."
  }
];