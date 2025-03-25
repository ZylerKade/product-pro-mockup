import React from 'react';
import { Feature } from '@/types';
import { 
  Zap, 
  Gauge, 
  Users, 
  Shield, 
  Flame, 
  Settings 
} from 'lucide-react';

const features: Feature[] = [
  {
    id: 1,
    title: 'Lightning Fast Delivery',
    description: 'Automated delivery systems get your digital products to customers instantly after purchase.',
    icon: <Zap className="h-6 w-6" />,
    bgColor: 'bg-blue-100',
    iconColor: 'text-primary'
  },
  {
    id: 2,
    title: 'Powerful Analytics',
    description: 'Track sales, customer behavior, and conversion rates with our comprehensive analytics dashboard.',
    icon: <Gauge className="h-6 w-6" />,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  {
    id: 3,
    title: 'Customer Management',
    description: 'Build stronger relationships with your audience through segmentation and personalized communication.',
    icon: <Users className="h-6 w-6" />,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600'
  },
  {
    id: 4,
    title: 'Secure Payments',
    description: 'Integrated with all major payment gateways for safe, reliable transactions with minimal fees.',
    icon: <Shield className="h-6 w-6" />,
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600'
  },
  {
    id: 5,
    title: 'Marketing Tools',
    description: 'Built-in email marketing, affiliate programs, and promotional capabilities to boost your sales.',
    icon: <Flame className="h-6 w-6" />,
    bgColor: 'bg-red-100',
    iconColor: 'text-red-600'
  },
  {
    id: 6,
    title: 'Customizable Storefronts',
    description: 'Design beautiful sales pages with our drag-and-drop builder - no coding skills required.',
    icon: <Settings className="h-6 w-6" />,
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
          <p className="text-lg text-gray-600">Our comprehensive platform provides all the tools you need to create, market, and sell your digital products with ease.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 feature-card border border-gray-100 hover:-translate-y-1"
            >
              <div className={`h-12 w-12 ${feature.bgColor} ${feature.iconColor} rounded-lg flex items-center justify-center mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
