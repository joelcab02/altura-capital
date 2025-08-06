import React from 'react';
import { LegalPageHeader } from '../components/LegalPageHeader';
import { Scale, Shield, CheckCircle, FileText, Building, AlertCircle } from 'lucide-react';
export const Regulation = () => {
  return <div className="min-h-screen bg-white">
      <LegalPageHeader title="Legalidad y Regulación" subtitle="Operamos con total transparencia bajo el marco legal mexicano" icon={<Scale size={28} className="text-white" />} />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
          <p className="text-blue-800 font-medium">
            Última actualización: 15 de abril de 2023
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg px-8 py-4 flex items-center">
            <Shield className="text-blue-600 mr-3" size={24} />
            <span className="font-bold text-xl text-blue-800">
              Autorizado por la CNBV
            </span>
          </div>
        </div>
        <p className="text-gray-700 mb-8 text-lg text-center max-w-3xl mx-auto">
          Altura Capital opera bajo un marco regulatorio sólido que garantiza la
          seguridad y legalidad de todas nuestras operaciones con criptomonedas
          en México.
        </p>
        <div className="space-y-10">
          <section>
            <div className="flex items-center mb-4">
              <Building className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Estatus legal de Altura Capital
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-6">
                Altura Capital, S.A.P.I. de C.V. es una sociedad mercantil
                legalmente constituida en México que opera como:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-blue-600 mr-2" size={20} />
                    <h3 className="font-bold text-gray-800">
                      Entidad regulada
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Plataforma autorizada por la Comisión Nacional Bancaria y de
                    Valores (CNBV) para operar con activos virtuales.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-blue-600 mr-2" size={20} />
                    <h3 className="font-bold text-gray-800">Registro fiscal</h3>
                  </div>
                  <p className="text-gray-700">
                    Empresa registrada ante el Servicio de Administración
                    Tributaria (SAT) con cumplimiento de obligaciones fiscales.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <FileText className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Información legal de la empresa
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Razón social:</strong> Altura Capital, S.A.P.I. de
                      C.V.
                    </li>
                    <li>
                      <strong>RFC:</strong> ACA220415MX9
                    </li>
                    <li>
                      <strong>Domicilio fiscal:</strong> Av. Lázaro Cárdenas
                      2400, Col. Del Paseo Residencial, San Pedro Garza García,
                      Nuevo León, C.P. 66260, México
                    </li>
                    <li>
                      <strong>Número de autorización CNBV:</strong> 13285/2022
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <p className="text-gray-600 text-sm">
                  Puedes verificar nuestro estatus legal en el{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    Registro de Instituciones Fintech
                  </a>{' '}
                  de la CNBV y en el{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    Portal de Búsqueda de RFC
                  </a>{' '}
                  del SAT.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center mb-4">
              <Scale className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Marco regulatorio
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-6">
                Altura Capital opera en pleno cumplimiento con el marco legal
                mexicano para operaciones con activos virtuales:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Ley para Regular las Instituciones de Tecnología
                      Financiera (Ley Fintech)
                    </h3>
                    <p className="text-gray-700">
                      Cumplimos con todas las disposiciones establecidas en la
                      Ley Fintech mexicana, que regula las operaciones con
                      activos virtuales y establece los requisitos para las
                      plataformas de tecnología financiera.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Disposiciones de carácter general de la CNBV
                    </h3>
                    <p className="text-gray-700">
                      Operamos bajo las circulares y disposiciones emitidas por
                      la CNBV para regular las operaciones con activos
                      virtuales, incluyendo medidas de seguridad, gestión de
                      riesgos y protección al consumidor.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Ley Federal para la Prevención e Identificación de
                      Operaciones con Recursos de Procedencia Ilícita
                    </h3>
                    <p className="text-gray-700">
                      Implementamos rigurosos procesos de prevención de lavado
                      de dinero y financiamiento al terrorismo, incluyendo la
                      identificación de clientes y el monitoreo de operaciones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Ley Federal de Protección de Datos Personales en Posesión
                      de los Particulares
                    </h3>
                    <p className="text-gray-700">
                      Protegemos la información personal de nuestros usuarios de
                      acuerdo con la legislación mexicana de protección de
                      datos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex">
                  <AlertCircle className="text-yellow-500 mr-3 flex-shrink-0" size={20} />
                  <p className="text-yellow-700">
                    <strong>Nota importante:</strong> El marco regulatorio de
                    las criptomonedas en México continúa evolucionando. Nos
                    mantenemos actualizados y adaptamos nuestras operaciones
                    para cumplir con cualquier cambio regulatorio.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center mb-4">
              <Shield className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Jurisdicción y resolución de conflictos
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-4">
                Todas las operaciones de Altura Capital están sujetas a:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    <strong>Jurisdicción mexicana:</strong> Cualquier
                    controversia relacionada con nuestros servicios se resolverá
                    bajo las leyes de los Estados Unidos Mexicanos.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    <strong>Tribunales competentes:</strong> Los tribunales de
                    Monterrey, Nuevo León, serán competentes para resolver
                    cualquier disputa legal.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    <strong>Protección al consumidor:</strong> Los usuarios
                    tienen derecho a presentar reclamaciones ante la CONDUSEF en
                    caso de controversias relacionadas con nuestros servicios
                    financieros.
                  </span>
                </li>
              </ul>
              <div className="bg-gray-50 p-4 rounded border border-gray-200">
                <p className="text-gray-600">
                  Antes de iniciar cualquier acción legal, nos comprometemos a
                  buscar una solución amigable a través de nuestro proceso
                  interno de atención a reclamaciones. Contacta a nuestro equipo
                  de soporte en{' '}
                  <a href="mailto:legal@alturacapital.mx" className="text-blue-600 hover:underline">
                    legal@alturacapital.mx
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center mb-4">
              <FileText className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Cumplimiento fiscal
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-4">
                Altura Capital cumple con todas las obligaciones fiscales
                relacionadas con operaciones de activos virtuales:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Reportamos todas las operaciones requeridas a las
                    autoridades fiscales mexicanas.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Emitimos comprobantes fiscales por los rendimientos
                    generados en la plataforma.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Proporcionamos a nuestros usuarios la información necesaria
                    para el cumplimiento de sus obligaciones fiscales
                    personales.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                Recuerda que como usuario, eres responsable de declarar los
                rendimientos obtenidos en la plataforma de acuerdo con la
                legislación fiscal aplicable.
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
                En Altura Capital, la transparencia y el cumplimiento
                regulatorio son pilares fundamentales de nuestro modelo de
                negocio. Operamos con total apego a la ley, brindándote la
                seguridad de invertir en una plataforma autorizada y supervisada
                por las autoridades financieras mexicanas.
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
            Para cualquier consulta sobre nuestro estatus legal, contáctanos en{' '}
            <a href="mailto:legal@alturacapital.mx" className="text-blue-600 hover:underline">
              legal@alturacapital.mx
            </a>
          </p>
        </div>
      </div>
    </div>;
};