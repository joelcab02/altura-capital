import React from 'react';
import { Link } from 'react-router-dom';
export const FinalCta = () => {
  return <div className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Comienza a invertir de forma segura y regulada
        </h2>
        <p className="text-xl mb-10 text-blue-100 max-w-3xl mx-auto">
          Únete a miles de mexicanos que ya están generando rendimientos
          garantizados con Altura Capital, la primera plataforma autorizada por
          la CNBV para invertir en criptomonedas de forma segura.
        </p>
        <div className="flex justify-center mb-10">
          <Link to="/registro" className="px-8 py-4 bg-white text-blue-800 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors">
            Probar Gratis Por 7 Días
          </Link>
        </div>
        <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg inline-block">
          <p className="text-lg font-medium">
            Sin comisiones | Sin bloqueos | Sin letra chica
          </p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/CONDUSEF.png/320px-CONDUSEF.png" alt="CONDUSEF" className="h-12 w-auto" />
          </div>
          <div className="flex items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/CNBV.png/320px-CNBV.png" alt="CNBV" className="h-12 w-auto" />
          </div>
          <div className="flex items-center">
            <div className="bg-white p-2 rounded">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Banco_de_M%C3%A9xico_logo.svg/320px-Banco_de_M%C3%A9xico_logo.svg.png" alt="Banco de México" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};