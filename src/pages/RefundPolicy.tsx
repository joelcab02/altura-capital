import React from 'react';
import { LegalPageHeader } from '../components/LegalPageHeader';
import { RefreshCw, CheckCircle, Clock, DollarSign, AlertTriangle, Shield } from 'lucide-react';
export const RefundPolicy = () => {
  return <div className="min-h-screen bg-white">
      <LegalPageHeader title="Política de Reembolsos y Garantía" subtitle="Te devolvemos tu inversión si no cumplimos. Así de simple." icon={<RefreshCw size={28} className="text-white" />} />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
          <p className="text-blue-800 font-medium">
            Última actualización: 15 de abril de 2023
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg px-8 py-4 flex items-center">
            <Shield className="text-green-600 mr-3" size={24} />
            <span className="font-bold text-xl text-green-800">
              Garantía Altura Capital
            </span>
          </div>
        </div>
        <p className="text-gray-700 mb-8 text-lg text-center max-w-3xl mx-auto">
          En Altura Capital respaldamos nuestros rendimientos con una garantía
          clara y transparente. Si no cumplimos con lo prometido, te devolvemos
          tu dinero.
        </p>
        <div className="space-y-10">
          <section>
            <div className="flex items-center mb-4">
              <Shield className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Nuestra garantía de rendimiento
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-6">
                Altura Capital garantiza los rendimientos mensuales establecidos
                en tu contrato de inversión. Esta garantía está respaldada por:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-blue-600 mr-2" size={20} />
                    <h3 className="font-bold text-gray-800">
                      Compromiso contractual
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Tu contrato de inversión especifica claramente los
                    rendimientos garantizados, que pueden variar según el plan
                    seleccionado.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-blue-600 mr-2" size={20} />
                    <h3 className="font-bold text-gray-800">
                      Respaldo financiero
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Contamos con reservas financieras suficientes para
                    garantizar el cumplimiento de nuestras obligaciones con los
                    inversionistas.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-blue-600 mr-2" size={20} />
                    <h3 className="font-bold text-gray-800">
                      Supervisión regulatoria
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Operamos bajo la supervisión de la CNBV, lo que asegura que
                    cumplamos con nuestros compromisos financieros.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="text-blue-600 mr-2" size={20} />
                    <h3 className="font-bold text-gray-800">
                      Transparencia total
                    </h3>
                  </div>
                  <p className="text-gray-700">
                    Puedes verificar tus rendimientos en tiempo real a través de
                    nuestra plataforma, con reportes detallados.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center mb-4">
              <RefreshCw className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Política de reembolso
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6 rounded">
                <div className="flex">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                  <p className="text-green-800 font-medium">
                    Si no recibes el rendimiento prometido en tu contrato
                    durante los primeros 30 días, tienes derecho a solicitar la
                    devolución del 100% de tu capital invertido.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Nuestra política de reembolso incluye:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Devolución completa del capital invertido si no cumplimos
                    con el rendimiento garantizado en los primeros 30 días.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Proceso de reembolso simplificado, sin preguntas ni trámites
                    complicados.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Transferencia de los fondos a tu cuenta bancaria o método de
                    pago original en un plazo máximo de 5 días hábiles.
                  </span>
                </li>
              </ul>
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex">
                  <AlertTriangle className="text-yellow-500 mr-3 flex-shrink-0" size={20} />
                  <p className="text-yellow-700">
                    <strong>Nota:</strong> Para inversiones con plazos
                    superiores a 30 días, la garantía de rendimiento se mantiene
                    durante todo el periodo contratado. Si en cualquier mes no
                    recibes el rendimiento prometido, puedes solicitar la
                    devolución de tu capital remanente sin penalizaciones.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center mb-4">
              <Clock className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Proceso de solicitud de reembolso
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-6">
                Si necesitas solicitar un reembolso, sigue estos sencillos
                pasos:
              </p>
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Inicia sesión en tu cuenta
                    </h3>
                    <p className="text-gray-700">
                      Accede a tu cuenta en la plataforma de Altura Capital con
                      tus credenciales.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Ve a la sección "Mis Inversiones"
                    </h3>
                    <p className="text-gray-700">
                      Selecciona la inversión específica para la que deseas
                      solicitar el reembolso.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Selecciona "Solicitar Reembolso"
                    </h3>
                    <p className="text-gray-700">
                      Indica el motivo de tu solicitud en el formulario
                      proporcionado.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Confirmación y procesamiento
                    </h3>
                    <p className="text-gray-700">
                      Recibirás una confirmación inmediata y tu solicitud será
                      procesada en un máximo de 5 días hábiles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-200">
                <p className="text-gray-600 text-sm">
                  También puedes solicitar un reembolso contactando directamente
                  a nuestro equipo de atención al cliente a través de WhatsApp
                  al{' '}
                  <a href="tel:+525512345678" className="text-blue-600 hover:underline">
                    55 1234 5678
                  </a>{' '}
                  o por correo electrónico a{' '}
                  <a href="mailto:soporte@alturacapital.mx" className="text-blue-600 hover:underline">
                    soporte@alturacapital.mx
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center mb-4">
              <DollarSign className="text-blue-600 mr-3" size={24} />
              <h2 className="text-2xl font-bold text-gray-800">
                Retiros regulares
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-700 mb-4">
                Además de nuestra política de reembolso, ofrecemos flexibilidad
                total para retiros regulares:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Retira tus rendimientos mensualmente sin afectar tu capital
                    invertido.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Retira parcial o totalmente tu capital en cualquier momento
                    sin penalizaciones.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Procesamiento de retiros en un plazo máximo de 24 horas.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                  <span>
                    Sin comisiones por retiro, independientemente del monto o
                    frecuencia.
                  </span>
                </li>
              </ul>
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
                En Altura Capital respaldamos nuestras promesas con garantías
                reales. Nuestra política de reembolso es una muestra de nuestro
                compromiso con la transparencia y la satisfacción de nuestros
                inversionistas.
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
            Para cualquier duda sobre nuestra política de reembolsos,
            contáctanos en{' '}
            <a href="mailto:garantia@alturacapital.mx" className="text-blue-600 hover:underline">
              garantia@alturacapital.mx
            </a>
          </p>
        </div>
      </div>
    </div>;
};