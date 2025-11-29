export interface Service {
  id: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  whoIsItFor: string[];
  imageUrl: string;
}

export enum ServiceCategory {
  PERSONAL_CARE = "Personal Care & Daily Living",
  MOBILITY = "Mobility & Transport",
  ACCOMMODATION = "Accommodation & Tenancy",
  HEALTH = "Nursing & Health Support",
  COMMUNITY = "Community & Social Participation",
  TRANSLATION = "Interpreting & Translation",
  PLAN_MANAGEMENT = "Plan Management",
  CUSTOM = "Custom & Add-on Services"
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  imageUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}