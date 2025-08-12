import React from 'react';
import { UserPlus, CreditCard, TrendingUp, Store, RefreshCw, DollarSign } from 'lucide-react';
export const HowItWorksSection = () => {
  const steps = [{
    icon: <UserPlus className="text-blue-500" size={48} />,
    title: '1. Crea tu cuenta verificada',
    description: 'Regístrate en menos de 1 minuto y completa tu verificación de identidad para cumplir con las regulaciones de la CNBV.'
  }, {
    icon: <Store className="text-blue-500" size={48} />,
    title: '2. Genera tu referencia de depósito',
    description: 'Elige entre OXXO, SPEI o criptomonedas para fondear tu cuenta desde $1,000 MXN sin comisiones ni cargos ocultos.'
  }, {
    icon: <RefreshCw className="text-blue-500" size={48} />,
    title: '3. Tu inversión entra al fondo regulado',
    description: 'Tu capital es asignado a un fondo cripto regulado que opera bajo supervisión de la CNBV para maximizar rendimientos con riesgo controlado.'
  }, {
    icon: <DollarSign className="text-blue-500" size={48} />,
    title: '4. Recibe rendimientos garantizados',
    description: 'Disfruta de rendimientos fijos mes a mes y retira tu capital e intereses cuando lo desees, sin penalizaciones ni periodos de espera.'
  }];
  return <div id="como-funciona" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2">
            Proceso regulado y transparente
          </p>
          <h2 className="text-4xl font-bold text-gray-800">Cómo funciona</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Invertir nunca había sido tan sencillo y seguro. Nuestra plataforma
            autorizada por la CNBV está diseñada para que cualquier mexicano
            pueda comenzar a generar rendimientos garantizados.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <button 
            onClick={() => window.scrollTo({ top: document.querySelector('#signup-form')?.offsetTop || 0, behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full text-lg font-medium hover:from-blue-600 hover:to-blue-800 transition-colors"
          >
            Comenzar ahora
          </button>
          <p className="mt-4 text-gray-500">
            Sin compromiso a largo plazo, cancela cuando quieras
          </p>
        </div>
      </div>
    </div>;
};