import React from 'react';
import { Shield, Lock, AlertCircle, CheckCircle, FileText } from 'lucide-react';
export const SecuritySection = () => {
  const securityFeatures = [{
    icon: <Shield className="text-blue-500" size={36} />,
    title: 'Autorizada por la CNBV',
    description: 'Operamos bajo la supervisión y autorización de la Comisión Nacional Bancaria y de Valores como plataforma de inversión en activos digitales.'
  }, {
    icon: <Lock className="text-blue-500" size={36} />,
    title: 'Rendimientos Garantizados',
    description: 'Ofrecemos rendimientos fijos mes a mes, respaldados por nuestra operación regulada y transparente en el mercado de criptomonedas.'
  }, {
    icon: <AlertCircle className="text-blue-500" size={36} />,
    title: 'Retiros Inmediatos 24/7',
    description: 'Accede a tu capital e intereses en cualquier momento, sin comisiones, bloqueos o letra pequeña. Tu dinero siempre disponible.'
  }, {
    icon: <CheckCircle className="text-blue-500" size={36} />,
    title: 'Atención Humana 24/7',
    description: 'Nuestro equipo de soporte está disponible todos los días por WhatsApp para resolver cualquier duda o asistirte en tu proceso de inversión.'
  }];
  return <div id="seguridad" className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-200 font-medium mb-2">
            Transparencia y legalidad en cada paso
          </p>
          <h2 className="text-4xl font-bold mb-4">Regulación y Seguridad</h2>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-blue-100">
            Altura Capital es una entidad supervisada por la Comisión Nacional
            Bancaria y de Valores (CNBV) bajo la figura de Plataforma de Gestión
            Digital de Activos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {securityFeatures.map((feature, index) => <div key={index} className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-filter backdrop-blur-sm">
              <div className="flex items-start">
                <div className="mr-6 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-16 bg-white bg-opacity-10 p-8 rounded-xl backdrop-filter backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Cumplimiento Regulatorio
          </h3>
          <p className="text-center text-blue-100 mb-6">
            Cumplimos con los más altos estándares de seguridad, transparencia y
            protección al inversionista. Puedes consultar nuestra autorización
            en el portal de la CNBV.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-white text-blue-800 rounded-full font-medium hover:bg-blue-50 transition-colors flex items-center">
              <FileText className="mr-2" size={20} />
              Ver nuestra autorización CNBV
            </button>
          </div>
        </div>
      </div>
    </div>;
};