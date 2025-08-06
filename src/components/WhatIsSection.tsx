import React from 'react';
export const WhatIsSection = () => {
  return <div id="que-es" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2874&auto=format&fit=crop" alt="Persona invirtiendo en Altura Capital" className="w-full h-auto rounded-lg shadow-lg" />
          <div className="mt-4 p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg">
            <p className="text-lg">
              "Estamos regulados en México. No necesitas confiar: solo invertir
              y ver resultados. Por fin, una forma legal, segura y sencilla de
              ganar con cripto."
            </p>
            <p className="text-right mt-2 font-medium">
              - Fundadores de Altura Capital
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <p className="text-blue-600 font-medium mb-2">
            Inversión regulada y segura
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            ¿Qué es Altura Capital?
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Somos una fintech mexicana registrada y autorizada por la Comisión
              Nacional Bancaria y de Valores (CNBV), creada para que cualquier
              persona pueda invertir en criptomonedas de forma segura, regulada
              y con rendimientos fijos garantizados.
            </p>
            <p>
              Por primera vez en México, puedes hacer crecer tu dinero con
              respaldo legal y sin la necesidad de bancos, tarjetas o
              conocimientos financieros.
            </p>
            <p>
              Nuestra plataforma combina la seguridad regulatoria con la
              innovación tecnológica, permitiéndote acceder a rendimientos que
              tradicionalmente estaban fuera del alcance del inversionista
              promedio.
            </p>
            <p>
              Ya sea que estés comenzando o tengas experiencia en inversiones,
              nuestra plataforma te permite invertir con la tranquilidad de
              contar con una empresa regulada y supervisada por las autoridades
              financieras mexicanas.
            </p>
          </div>
        </div>
      </div>
    </div>;
};