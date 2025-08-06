import React from 'react';
import { Smile, BarChart2, CheckCircle, Gauge, Play, Lock } from 'lucide-react';
export const FeaturesGrid = () => {
  const features = [{
    icon: <Smile className="text-green-500" size={36} />,
    title: 'User-friendly Interface',
    description: 'Our trading interface is so easy even a child can use it. A member of the platform will call you and guide you through the entire process to ensure maximum returns.'
  }, {
    icon: <BarChart2 className="text-blue-500" size={36} />,
    title: 'Automated Trading',
    description: 'Our automated trading bots can do all the work for you. No need to be an expert at trading. Earn while you sleep.'
  }, {
    icon: <CheckCircle className="text-green-500" size={36} />,
    title: 'Trusted Trading Platforms',
    description: 'Quantum AI is based in the UK, and we only work and partner with UK companies. Stringent and well-known platforms will be encouraged.'
  }, {
    icon: <Gauge className="text-blue-500" size={36} />,
    title: 'Quantum Volume (QV) Score',
    description: "Our quantum computing system has achieved a quantum volume (QV) 14,802. Achieving a high score on the industry-recognised QV benchmark, developed by IBM to test quantum computers' capability."
  }, {
    icon: <Play className="text-green-500" size={36} />,
    title: 'Minimum $250 Deposit',
    description: 'Try with with a small deposit of $250. We allow small risk demos so you can test our trading bot on the market before larger deposits.'
  }, {
    icon: <Lock className="text-blue-500" size={36} />,
    title: 'Uncompromised Security',
    description: 'Your data is safe with us. Trust us; we keep our quantum computing secret; emails are safe.'
  }];
  return <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => <div key={index} className="flex">
              <div className="mr-6 mt-1">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>)}
        </div>
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center">
            Sign up
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>;
};