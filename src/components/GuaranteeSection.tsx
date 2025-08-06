import React from 'react';
import { Shield, Clock, FileText, RefreshCw, CheckCircle, DollarSign } from 'lucide-react';
export const GuaranteeSection = () => {
  const guarantees = [{
    icon: <Clock className="text-blue-200" size={48} />,
    title: 'Tu dinero, siempre disponible',
    description: 'Retiro inmediato del capital en cualquier momento. Sin periodos de bloqueo ni procesos complicados. Es tu dinero, tú decides cuándo usarlo.'
  }, {
    icon: <FileText className="text-blue-200" size={48} />,
    title: 'Rendimiento garantizado por contrato',
    description: 'Si no ganas hasta 20% mensual, nosotros lo cubrimos. Está por escrito en nuestro contrato y es una obligación legal que cumplimos con orgullo.'
  }, {
    icon: <RefreshCw className="text-blue-200" size={48} />,
    title: 'Sin rendimientos, te devolvemos tu dinero',
    description: 'Garantía de devolución de inversión inicial en los primeros 30 días. Si no estás satisfecho con los resultados, recuperas el 100% de tu capital.'
  }, {
    icon: <CheckCircle className="text-blue-200" size={48} />,
    title: 'Todo por escrito. Sin letra chica.',
    description: 'Contrato digital transparente que puedes revisar antes de invertir. Sin cláusulas ocultas, sin condiciones sorpresa. Total transparencia.'
  }];
  return <div className="py-20 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center bg-blue-700 bg-opacity-30 p-4 rounded-full">
              <Shield className="text-blue-200" size={48} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestra Garantía Altura
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-medium">
            La única fintech mexicana que garantiza tu dinero, tus rendimientos…
            y tu tranquilidad.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {guarantees.map((guarantee, index) => <div key={index} className="bg-blue-800 bg-opacity-30 p-8 rounded-xl backdrop-filter backdrop-blur-sm border border-blue-700 border-opacity-50 hover:bg-opacity-40 transition-all">
              <div className="flex items-start">
                <div className="mr-6 mt-1">{guarantee.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{guarantee.title}</h3>
                  <p className="text-blue-100">{guarantee.description}</p>
                </div>
              </div>
            </div>)}
        </div>
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 bg-opacity-20 rounded-full blur-xl"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 p-1 rounded-full">
              <div className="bg-blue-900 rounded-full p-6 flex items-center justify-center">
                <div className="text-center">
                  <DollarSign className="mx-auto text-blue-200 mb-2" size={36} />
                  <p className="text-lg font-bold uppercase tracking-wider">
                    Garantía Altura
                  </p>
                  <p className="text-sm text-blue-200">
                    Retiros y rendimiento por contrato
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <p className="text-xl text-blue-100 mb-8">
            "Somos la primera fintech mexicana autorizada por la CNBV para
            operar con cripto y ofrecer rendimientos fijos. La confianza no se
            pide, se respalda."
          </p>
          <p className="text-lg text-blue-200 italic">
            Si otras fintechs no se atreven a ofrecerte esta garantía… es porque
            no pueden.
          </p>
        </div>
        <div className="text-center">
          <button className="px-10 py-4 bg-white text-blue-900 rounded-full text-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
            Invertir con garantía escrita
          </button>
        </div>
      </div>
    </div>;
};