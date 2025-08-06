import React from 'react';
export const RegistroTestimonio = () => {
  return <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
      <div className="flex items-center mb-4">
        <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="David G." className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h3 className="font-bold text-lg">David G.</h3>
          <p className="text-gray-500">Puebla, México</p>
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>)}
      </div>
      <p className="text-gray-700 text-lg italic">
        "Invertí $1,000 y en 30 días ya tenía $1,200. Todo desde mi celular y
        sin cuenta de banco."
      </p>
      <div className="mt-4 flex items-center">
        <div className="h-1 w-1 bg-blue-500 rounded-full"></div>
        <div className="h-1 w-1 bg-blue-500 rounded-full mx-1"></div>
        <div className="h-1 w-10 bg-blue-500 rounded-full"></div>
      </div>
    </div>;
};