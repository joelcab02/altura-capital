import React from 'react';
import { LegalPageHeader } from '../components/LegalPageHeader';
import { Shield, Lock, FileText, CheckCircle, AlertCircle, Users, Database, Clock } from 'lucide-react';
export const PrivacyPolicy = () => {
  return <div className="min-h-screen bg-white">
      <LegalPageHeader title="Aviso de Privacidad" subtitle="Tu privacidad es parte de nuestra promesa de confianza" icon={<Lock size={28} className="text-white" />} />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
          <p className="text-blue-800 font-medium">
            Última actualización: 15 de abril de 2023
          </p>
        </div>
        <p className="text-gray-700 mb-8">
          En Altura Capital, S.A.P.I. de C.V. (en adelante "Altura Capital"),
          con domicilio en Av. Lázaro Cárdenas 2400, Col. Del Paseo Residencial,
          San Pedro Garza García, Nuevo León, C.P. 66260, México, valoramos y
          protegemos tu información personal. Este Aviso de Privacidad explica
          cómo recopilamos, utilizamos, compartimos y protegemos tu información
          personal cuando utilizas nuestra plataforma y servicios.
        </p>
        <div className="space-y-10">
          <section>
            <div className="flex items-center mb-4">
              <Database className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Información que recopilamos
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-4">
                Para brindarte nuestros servicios de inversión, podemos
                recopilar la siguiente información:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    <strong>Datos de identificación:</strong> Nombre completo,
                    fecha de nacimiento, domicilio, teléfono, correo
                    electrónico, identificación oficial.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    <strong>Datos financieros:</strong> Información bancaria,
                    historial de transacciones e inversiones realizadas en
                    nuestra plataforma.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    <strong>Datos fiscales:</strong> RFC, situación fiscal y
                    documentación relacionada para cumplir con obligaciones
                    fiscales.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    <strong>Datos de navegación:</strong> Información sobre cómo
                    interactúas con nuestra plataforma, dispositivos utilizados
                    e IP.
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div className="flex items-center mb-4">
              <FileText className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Finalidades del tratamiento de datos
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-4">
                Utilizamos tu información personal para:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Verificar tu identidad conforme a las regulaciones de la
                    CNBV y prevención de fraudes.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Procesar tus inversiones, depósitos y retiros en la
                    plataforma.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Brindarte atención personalizada y resolver dudas sobre
                    nuestros servicios.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Enviarte notificaciones importantes sobre tu cuenta,
                    rendimientos y operaciones.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Cumplir con obligaciones legales ante autoridades fiscales y
                    regulatorias.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Mejorar nuestros servicios y experiencia de usuario en la
                    plataforma.
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div className="flex items-center mb-4">
              <Shield className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Protección de tu información
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-4">
                Implementamos medidas de seguridad técnicas, administrativas y
                físicas para proteger tu información personal:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Encriptación de datos sensibles usando protocolos de
                    seguridad avanzados.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Acceso restringido a tu información solo al personal
                    autorizado.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Monitoreo continuo de nuestros sistemas para detectar
                    vulnerabilidades.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Cumplimiento con estándares de seguridad de la industria
                    financiera.
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div className="flex items-center mb-4">
              <Users className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Compartición de datos
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-4">
                Podemos compartir tu información personal con:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Autoridades financieras como la CNBV, para cumplir con
                    obligaciones regulatorias.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Proveedores de servicios que nos ayudan a operar la
                    plataforma (procesadores de pago, servicios de verificación
                    de identidad).
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Autoridades fiscales para cumplimiento de obligaciones
                    tributarias.
                  </span>
                </li>
              </ul>
              <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex">
                  <AlertCircle className="text-yellow-500 mr-3 flex-shrink-0" size={20} />
                  <p className="text-yellow-700">
                    <strong>Importante:</strong> No vendemos, alquilamos ni
                    comercializamos tu información personal a terceros con fines
                    publicitarios.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center mb-4">
              <Clock className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Tus derechos ARCO
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-4">
                Como titular de los datos personales, tienes derecho a:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    <strong>Acceder</strong> a tus datos personales que
                    poseemos.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    <strong>Rectificar</strong> tus datos cuando sean inexactos
                    o incompletos.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    <strong>Cancelar</strong> tus datos de nuestros registros
                    cuando consideres que no son necesarios.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    <strong>Oponerte</strong> al uso de tus datos para fines
                    específicos.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                Para ejercer estos derechos, envía un correo electrónico a{' '}
                <a href="mailto:privacidad@alturacapital.mx" className="text-blue-600 hover:underline">
                  privacidad@alturacapital.mx
                </a>{' '}
                con el asunto "Derechos ARCO" y adjuntando una identificación
                oficial.
              </p>
            </div>
          </section>
        </div>
        <div className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
          <div className="flex">
            <Shield className="text-blue-600 mr-4 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Invertir con legalidad es invertir con inteligencia
              </h3>
              <p className="text-gray-700">
                En Altura Capital nos comprometemos a proteger tu privacidad con
                el mismo rigor con el que protegemos tus inversiones. Operamos
                bajo estrictos estándares regulatorios y de seguridad para
                brindarte la mejor experiencia de inversión en criptomonedas.
              </p>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="bg-white border border-blue-200 rounded-lg px-4 py-2 flex items-center">
              <Shield className="text-blue-600 mr-2" size={20} />
              <span className="font-medium text-blue-800">
                Autorizado por la CNBV
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            Si tienes alguna pregunta sobre este Aviso de Privacidad,
            contáctanos en{' '}
            <a href="mailto:privacidad@alturacapital.mx" className="text-blue-600 hover:underline">
              privacidad@alturacapital.mx
            </a>
          </p>
        </div>
      </div>
    </div>;
};