import React from 'react';
import { LegalPageHeader } from '../components/LegalPageHeader';
import { FileText, AlertTriangle, CheckCircle, Shield, AlertCircle, Scale, PenTool } from 'lucide-react';
export const TermsAndConditions = () => {
  return <div className="min-h-screen bg-white">
      <LegalPageHeader title="Términos y Condiciones" subtitle="Bases legales para el uso de nuestra plataforma" icon={<FileText size={28} className="text-white" />} />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
          <p className="text-blue-800 font-medium">
            Última actualización: 15 de abril de 2023
          </p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <div className="flex">
            <AlertTriangle className="text-yellow-500 mr-3 flex-shrink-0 mt-1" size={24} />
            <p className="text-yellow-700 font-medium">
              Si no estás de acuerdo con estos términos y condiciones, por favor
              no uses esta plataforma. El uso continuado de nuestros servicios
              implica la aceptación de estos términos.
            </p>
          </div>
        </div>
        <p className="text-gray-700 mb-8">
          Estos Términos y Condiciones establecen las reglas y regulaciones para
          el uso de la plataforma Altura Capital, operada por Altura Capital,
          S.A.P.I. de C.V., una empresa legalmente constituida en México y
          autorizada por la Comisión Nacional Bancaria y de Valores (CNBV) para
          operar como plataforma de inversión en activos digitales.
        </p>
        <div className="space-y-10">
          <section>
            <div className="flex items-center mb-4">
              <PenTool className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Aceptación de los términos
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-4">
                Al registrarte y utilizar nuestra plataforma, aceptas:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Cumplir con estos Términos y Condiciones en su totalidad.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Proporcionar información veraz y actualizada durante el
                    proceso de registro.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Mantener la confidencialidad de tus credenciales de acceso.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Ser mayor de 18 años y tener capacidad legal para contratar.
                  </span>
                </li>
              </ul>
              <div className="mt-4 bg-gray-50 p-4 rounded border border-gray-200">
                <p className="text-gray-600 text-sm">
                  Nos reservamos el derecho de modificar estos términos en
                  cualquier momento. Los cambios entrarán en vigor
                  inmediatamente después de su publicación en la plataforma. Es
                  tu responsabilidad revisar periódicamente estos términos.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center mb-4">
              <Scale className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Regulación y cumplimiento legal
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 flex items-center">
                  <Shield className="text-blue-600 mr-2" size={20} />
                  <span className="font-medium text-blue-800">
                    Autorizado por la CNBV
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Altura Capital opera bajo la autorización y supervisión de la
                Comisión Nacional Bancaria y de Valores (CNBV) como plataforma
                de inversión en activos digitales. Cumplimos con:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Ley para Regular las Instituciones de Tecnología Financiera
                    (Ley Fintech).
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Disposiciones de carácter general aplicables a las
                    Instituciones de Tecnología Financiera.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Normativas de prevención de lavado de dinero y
                    financiamiento al terrorismo.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Regulaciones fiscales aplicables a operaciones con activos
                    virtuales.
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Riesgos de inversión
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded">
                <div className="flex">
                  <AlertCircle className="text-red-500 mr-3 flex-shrink-0" size={20} />
                  <p className="text-red-700">
                    <strong>Advertencia:</strong> Toda inversión implica
                    riesgos. Aunque ofrecemos rendimientos garantizados, es
                    importante que comprendas los riesgos inherentes a las
                    inversiones en criptomonedas.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Al utilizar nuestra plataforma, reconoces y aceptas que:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Las criptomonedas son activos volátiles cuyo valor puede
                    fluctuar significativamente.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Aunque garantizamos rendimientos, existen riesgos operativos
                    y tecnológicos inherentes.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    El marco regulatorio de las criptomonedas en México puede
                    cambiar y afectar nuestras operaciones.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Has evaluado tu perfil de riesgo y comprendes las
                    implicaciones de invertir en activos digitales.
                  </span>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <div className="flex items-center mb-4">
              <Shield className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Uso de la plataforma
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-4">
                Al utilizar nuestra plataforma, te comprometes a:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    No utilizar la plataforma para actividades ilegales o
                    fraudulentas.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    No intentar acceder a áreas restringidas de la plataforma o
                    eludir medidas de seguridad.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    No compartir tus credenciales de acceso con terceros.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    No realizar operaciones que puedan perjudicar el
                    funcionamiento de la plataforma.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Utilizar la plataforma de acuerdo con las leyes aplicables y
                    estos términos.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                Nos reservamos el derecho de suspender o cancelar cuentas que
                violen estos términos o que sean utilizadas para actividades
                sospechosas.
              </p>
            </div>
          </section>
          <section>
            <div className="flex items-center mb-4">
              <FileText className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Propiedad intelectual
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-4">
                Todo el contenido de la plataforma, incluyendo pero no limitado
                a logotipos, textos, gráficos, imágenes, software y código, es
                propiedad de Altura Capital o de terceros con licencia, y está
                protegido por las leyes de propiedad intelectual.
              </p>
              <p className="text-gray-700">
                No está permitido copiar, modificar, distribuir, vender o
                arrendar ninguna parte de la plataforma sin nuestro
                consentimiento expreso por escrito.
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
                En Altura Capital, operamos bajo el marco legal establecido por
                las autoridades financieras mexicanas. Nuestra plataforma está
                diseñada para brindarte una experiencia de inversión segura,
                transparente y apegada a la normativa vigente.
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
            Para cualquier duda relacionada con estos Términos y Condiciones,
            contáctanos en{' '}
            <a href="mailto:legal@alturacapital.mx" className="text-blue-600 hover:underline">
              legal@alturacapital.mx
            </a>
          </p>
        </div>
      </div>
    </div>;
};