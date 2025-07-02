// File: components/FeatureBlog.tsx

import type { FC, ReactElement } from 'react';
// Make sure you have react-icons installed: npm install react-icons
import { FiZap, FiBarChart, FiUsers } from 'react-icons/fi';

// Define the structure for a feature item
interface Feature {
  icon: ReactElement;
  title: string;
  description: string;
}

// Data array with new, improved copywriting
const features: Feature[] = [
  {
    icon: <FiZap size={28} />,
    title: 'Blazing-Fast Performance',
    description: 'Optimize your site with our cutting-edge SEO tools to outrank competitors and attract organic traffic effortlessly.',
  },
  {
    icon: <FiBarChart size={28} />,
    title: 'Actionable Analytics',
    description: 'Go beyond simple metrics. Understand your audience on a deeper level and make strategic decisions that truly fuel growth.',
  },
  {
    icon: <FiUsers size={28} />,
    title: 'Built for Collaboration',
    description: 'Empower your entire team with a shared workspace and intuitive tools designed for seamless and productive teamwork.',
  },
];

// The main component
const FeatureBlog: FC = () => {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <div className="flex items-center justify-center w-20 h-20 mb-6 bg-indigo-100 text-indigo-600 rounded-full">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlog;