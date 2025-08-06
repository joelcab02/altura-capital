import React from 'react';
import { Store, Clock, DollarSign, CreditCard, XCircle, CheckCircle } from 'lucide-react';
export const NoBankSection = () => {
  const steps = [{
    icon: <Store className="text-blue-600" size={36} />,
    title: 'Visita cualquier OXXO',
    description: 'Hay más de 20,000 tiendas OXXO en todo México. Seguro hay una cerca de ti.'
  }, {
    icon: <DollarSign className="text-blue-600" size={36} />,
    title: 'Paga en efectivo',
    description: 'Muestra el código de pago en tu teléfono al cajero y paga el monto que desees invertir (mínimo $1,000 MXN).'
  }, {
    icon: <Clock className="text-blue-600" size={36} />,
    title: 'Fondos instantáneos',
    description: 'Tu dinero se refleja inmediatamente en tu cuenta de Altura Capital y comienza a generar rendimientos.'
  }];
  return <div id="sin-banco" className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2">Accesible para todos</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Invierte sin cuenta bancaria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En Altura Capital creemos que todos merecen acceso a inversiones de
            alto rendimiento, tengan o no cuenta bancaria.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Sin bancos. Sin tarjetas. Sin excusas.
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <XCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={22} />
                  <p className="text-gray-600">
                    <span className="line-through">
                      Largas filas en sucursales bancarias
                    </span>
                  </p>
                </div>
                <div className="flex items-start">
                  <XCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={22} />
                  <p className="text-gray-600">
                    <span className="line-through">
                      Complicados trámites de apertura de cuenta
                    </span>
                  </p>
                </div>
                <div className="flex items-start">
                  <XCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={22} />
                  <p className="text-gray-600">
                    <span className="line-through">
                      Comisiones mensuales por manejo de cuenta
                    </span>
                  </p>
                </div>
                <div className="flex items-start">
                  <XCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={22} />
                  <p className="text-gray-600">
                    <span className="line-through">Saldo mínimo requerido</span>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={22} />
                  <p className="text-gray-800 font-medium">
                    Invierte desde $1,000 MXN en cualquier OXXO
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={22} />
                  <p className="text-gray-800 font-medium">
                    Tu dinero empieza a crecer desde el primer día
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={22} />
                  <p className="text-gray-800 font-medium">
                    Rendimientos de hasta 20% mensual
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={22} />
                  <p className="text-gray-800 font-medium">
                    Retira tus ganancias cuando quieras
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1621953803122-838ebee7ec55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Tienda OXXO" className="rounded-xl shadow-lg w-full h-auto" />
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-xl mt-6">
              <p className="text-lg font-medium">
                "Yo no tenía cuenta bancaria y pensé que nunca podría invertir.
                Con Altura Capital pude comenzar con $1,000 pesos en el OXXO de
                mi colonia. Ahora mi dinero trabaja para mí todos los días."
              </p>
              <p className="mt-2 text-blue-200 text-right">
                - Miguel R., Puebla
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">
            ¿Cómo funciona?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>}
              </div>)}
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full text-lg font-medium hover:from-blue-600 hover:to-blue-800 transition-colors">
            Comenzar ahora con $1,000 MXN
          </button>
          <p className="mt-4 text-gray-500">
            Sin necesidad de cuenta bancaria, invierte en efectivo
          </p>
        </div>
      </div>
    </div>;
};