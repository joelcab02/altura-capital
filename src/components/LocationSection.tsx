import React, { lazy } from 'react';
import { MapPin, Shield, Building, Calendar } from 'lucide-react';
export const LocationSection = () => {
  return <div id="ubicacion" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2">
            Presencia física real
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            ¿Dónde estamos ubicados?
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Imagen y texto */}
          <div className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <img src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Distrito financiero de San Pedro Garza García" className="w-full h-80 object-cover" />
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="flex items-start mb-6">
                <MapPin className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    San Pedro Garza García, Nuevo León
                  </h3>
                  <p className="text-gray-600">
                    En el corazón financiero de Latinoamérica, nuestras oficinas
                    se encuentran en el distrito corporativo más prestigioso de
                    México.
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6 mt-6">
                <p className="text-lg font-medium text-gray-800 mb-4">
                  "Nuestro equipo opera desde el distrito financiero más
                  importante de México. Altura Capital es una empresa real, con
                  oficinas reales, y gente lista para ayudarte."
                </p>
              </div>
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center">
                  <Shield className="text-blue-600 mr-2" size={20} />
                  <span className="text-gray-700">Seguridad verificada</span>
                </div>
                <div className="flex items-center">
                  <Building className="text-blue-600 mr-2" size={20} />
                  <span className="text-gray-700">Oficinas corporativas</span>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button className="flex items-center mx-auto px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                <Calendar className="mr-2" size={20} />
                ¿Quieres visitarnos? Contáctanos para agendar una cita
              </button>
            </div>
          </div>
          {/* Mapa interactivo */}
          <div className="lg:w-1/2">
            <div className="h-full rounded-xl overflow-hidden shadow-lg relative">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28958.664751484287!2d-100.41290232089842!3d25.65007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be1236708957%3A0x2a01a8bd0b891475!2sSan%20Pedro%20Garza%20Garc%C3%ADa%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1649795431088!5m2!1ses-419!2smx" width="100%" height="100%" style={{
              border: 0,
              minHeight: '500px'
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación de Altura Capital" className="absolute inset-0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>;
};