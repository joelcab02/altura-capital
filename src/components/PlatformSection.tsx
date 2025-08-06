import React from 'react';
export const PlatformSection = () => {
  return <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <p className="text-blue-600 font-medium mb-2">
              Our Trading Platform
            </p>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Easy to use interface
            </h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Dive into quantum trading with an interface that makes
                complexity feel surprisingly simple.
              </p>
              <p>
                Embrace the future of trading with our user-friendly interface,
                meticulously designed to simplify the complexities of quantum
                algorithms. Our platform provides an immersive experience,
                guiding you with ease through the intricacies of quantum
                mechanics and market analysis.
              </p>
              <p>
                Detailed yet digestible information is at your fingertips,
                enabling informed automated decisions without the hassle. This
                is more than a trading platform; it's a gateway to mastering the
                markets with confidence, automation and clarity.
              </p>
              <p>
                Quantum AI is the future of artificial intelligence, merging the
                power of quantum computing with advanced machine learning
                algorithms to unlock unprecedented capabilities in data
                analysis, problem solving, and decision making.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/Screen_Shot_2025-08-04_at_16.37.42.png" alt="Quantum AI Trading Dashboard" className="w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </div>;
};