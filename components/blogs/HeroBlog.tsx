// File: components/HeroBlog.tsx

import type { FC, ReactElement } from 'react';
// Make sure you have react-icons installed: npm install react-icons
import { 
  FiZap, 
  FiBarChart2, 
  FiLayers, 
  FiArrowRight,
  FiShield,
  FiCode
} from 'react-icons/fi';

// Data for the feature cards, making them easy to update
const features: { icon: ReactElement; title: string; description: string }[] = [
  {
    icon: <FiZap size={24} />,
    title: 'Boost Your Visibility',
    description: 'Enhance your website’s presence and drive targeted traffic with Higher’s advanced SEO capabilities.',
  },
  {
    icon: <FiBarChart2 size={24} />,
    title: 'Data-Driven Insights',
    description: 'Unlock the power of analytics to gain actionable insights and make informed business decisions.',
  },
  {
    icon: <FiLayers size={24} />,
    title: 'Seamless Integration',
    description: 'Higher is more than just a template—it’s a complete digital solution that integrates with your workflow.',
  },
];

// The main component
const HeroBlog: FC = () => {
  return (
    <div className="bg-white">
      {/* ===== Hero Section ===== */}
      <div className="container mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- Left Column: Content --- */}
          <div className="text-center lg:text-left">
            <p className="font-bold text-indigo-600 uppercase tracking-wider">Welcome to Higher</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 mb-5 text-gray-900 tracking-tight">
              Build Your Next Idea, Faster.
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
              An all-in-one platform designed to help you launch, manage, and scale your digital projects with unparalleled speed and efficiency.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#get-started" className="flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-transform hover:scale-105 w-full sm:w-auto">
                Get Started
                <FiArrowRight className="ml-2" />
              </a>
              <a href="#learn-more" className="px-8 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition w-full sm:w-auto">
                Learn More
              </a>
            </div>
          </div>

          {/* --- Right Column: Visual Element --- */}
          <div className="hidden lg:block">
            <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 transform rotate-3 transition hover:rotate-0 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                    </div>
                    <p className="text-sm font-mono text-gray-500">/components/ui.tsx</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-inner border border-gray-100">
                    <div className="flex items-center text-indigo-600">
                        <FiCode size={20} className="mr-3"/>
                        <p className="font-semibold">Clean, Reusable Code</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                        Build with components that are both powerful and easy to customize.
                    </p>
                </div>
                 <div className="flex items-center gap-4 mt-4">
                    <div className="flex-1 bg-white p-4 rounded-lg shadow-inner border border-gray-100">
                        <div className="flex items-center text-green-500">
                            <FiShield size={20} className="mr-3"/>
                            <p className="font-semibold">Secure</p>
                        </div>
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-lg shadow-inner border border-gray-100">
                         <div className="flex items-center text-blue-500">
                            <FiZap size={20} className="mr-3"/>
                            <p className="font-semibold">Fast</p>
                        </div>
                    </div>
                 </div>
            </div>
          </div>

        </div>
      </div>

      {/* ===== Features Section ===== */}
      <div className="bg-gray-50" id="learn-more">
        <div className="container mx-auto px-6 py-20 lg:py-28">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything You Need to Succeed</h2>
                <p className="mt-4 text-lg text-gray-600">
                    A powerful platform packed with features designed for growth, collaboration, and creating amazing user experiences.
                </p>
            </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all"
              >
                <div className="flex items-center justify-center w-14 h-14 mb-5 bg-indigo-100 text-indigo-600 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBlog;