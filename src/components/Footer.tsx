import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Altura Capital
            </h3>
            <p className="mb-4">
              La primera fintech del pueblo para el pueblo. Inversión
              automatizada en criptomonedas con inteligencia artificial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#que-es" className="hover:text-blue-400 transition-colors">
                  ¿Qué es Altura Capital?
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-blue-400 transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#rendimientos" className="hover:text-blue-400 transition-colors">
                  Rendimientos
                </a>
              </li>
              <li>
                <a href="#seguridad" className="hover:text-blue-400 transition-colors">
                  Seguridad
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-blue-400 transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-blue-400 transition-colors">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacidad" className="hover:text-blue-400 transition-colors">
                  Aviso de Privacidad
                </a>
              </li>
              <li>
                <a href="/terminos" className="hover:text-blue-400 transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="/reembolsos" className="hover:text-blue-400 transition-colors">
                  Política de Reembolsos y Garantía
                </a>
              </li>
              <li>
                <a href="/regulacion" className="hover:text-blue-400 transition-colors">
                  Legalidad y Regulación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Prevención de Fraudes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:contacto@alturacapital.mx" className="hover:text-blue-400 transition-colors">
                  contacto@alturacapital.mx
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="tel:+525512345678" className="hover:text-blue-400 transition-colors">
                  55 1234 5678
                </a>
              </li>
              <li className="flex items-start mt-2">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <div>
                  <a href="#ubicacion" className="hover:text-blue-400 transition-colors">
                    San Pedro Garza García,
                    <br />
                    Nuevo León, México
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <a href="#ubicacion" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm rounded-lg hover:from-blue-700 hover:to-blue-900 transition-colors inline-flex items-center">
                <MapPin size={14} className="mr-1" />
                Ver ubicación
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 Altura Capital. Todos los derechos reservados.</p>
          <p className="mt-4 md:mt-0">
            Altura Capital no está regulada por la CNBV. Los rendimientos
            pasados no garantizan resultados futuros.
          </p>
        </div>
      </div>
    </footer>;
};