import React, { useState } from 'react';
import { X as XIcon, AlertTriangle } from 'lucide-react';
export const RiskBanner = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return <div className="bg-gray-900 text-white py-3 px-4 text-center relative z-50">
      <div className="max-w-4xl mx-auto pr-8 flex items-center justify-center">
        <AlertTriangle size={16} className="mr-2 text-yellow-400 flex-shrink-0 hidden sm:block" />
        <p className="text-sm md:text-base">
          No invierta a menos que esté preparado para perder todo su dinero.
          Esta es una inversión de alto riesgo y no debe esperar estar protegido
          si algo sale mal.
        </p>
      </div>
      <button onClick={() => setVisible(false)} className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-800 rounded-full transition-colors" aria-label="Cerrar aviso">
        <XIcon size={18} />
      </button>
    </div>;
};