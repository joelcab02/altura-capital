import React from 'react';
import { Shield, Lock, FileText, Clock } from 'lucide-react';
export const RegistroConfianza = () => {
  return <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
      <p className="font-medium text-gray-700 mb-4">
        Invierte con total tranquilidad:
      </p>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-start">
          <Shield className="text-blue-600 mr-3 flex-shrink-0" size={20} />
          <span className="text-gray-600">Empresa autorizada por la CNBV</span>
        </div>
        <div className="flex items-start">
          <Lock className="text-blue-600 mr-3 flex-shrink-0" size={20} />
          <span className="text-gray-600">Tus datos están protegidos</span>
        </div>
        <div className="flex items-start">
          <FileText className="text-blue-600 mr-3 flex-shrink-0" size={20} />
          <span className="text-gray-600">
            Contrato digital con garantía por escrito
          </span>
        </div>
        <div className="flex items-start">
          <Clock className="text-blue-600 mr-3 flex-shrink-0" size={20} />
          <span className="text-gray-600">
            Retiros inmediatos, atención por WhatsApp 24/7
          </span>
        </div>
      </div>
    </div>;
};