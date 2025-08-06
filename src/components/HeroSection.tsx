import React from 'react';
import { Shield, Zap, Clock, CreditCard, Store, ChevronRight } from 'lucide-react';
import { SignupForm } from './SignupForm';
export const HeroSection = () => {
  return <div className="relative pt-32 pb-32 md:pt-40 md:pb-28 overflow-hidden bg-blue-gradient">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-radial from-blue-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-radial from-blue-900/50 to-transparent"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 text-white">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-blue-100 text-sm font-medium mb-6 border border-white/20">
              <Shield size={14} className="mr-2" />
              Autorizado por la CNBV
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Invertir en cripto <br className="hidden md:block" />
              <span className="text-blue-200">nunca había sido tan seguro</span>
            </h1>
            <div className="space-y-6 md:space-y-8 mb-10">
              <p className="text-xl md:text-2xl font-medium text-blue-50">
                Altura Capital es la primera fintech mexicana autorizada para
                ofrecer rendimientos garantizados en criptomonedas.
              </p>
              <p className="text-lg md:text-xl text-blue-100">
                Por primera vez en México, puedes hacer crecer tu dinero con
                respaldo legal y sin la necesidad de bancos, tarjetas o
                conocimientos financieros.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#calculadora" className="btn-primary">
                Calcular mi rendimiento
                <ChevronRight size={18} className="ml-1" />
              </a>
              <a href="#como-funciona" className="btn-secondary">
                Cómo funciona
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <Shield className="text-blue-200 shrink-0" size={20} />
                <span className="font-medium">Invierte desde $1,000 MXN</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <Store className="text-blue-200 shrink-0" size={20} />
                <span className="font-medium">
                  Hasta 20% mensual garantizado
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <Clock className="text-blue-200 shrink-0" size={20} />
                <span className="font-medium">OXXO, SPEI o cripto</span>
              </div>
            </div>
          </div>
          {/* Formulario a la derecha en desktop */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <SignupForm />
          </div>
        </div>
      </div>
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>;
};