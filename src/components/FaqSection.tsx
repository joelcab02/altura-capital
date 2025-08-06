import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [{
    question: '¿Cómo funciona Altura Capital?',
    answer: 'Altura Capital utiliza algoritmos de inteligencia artificial para analizar el mercado de criptomonedas e identificar oportunidades de inversión. Nuestro sistema ejecuta operaciones automáticas para maximizar los rendimientos mientras gestiona los riesgos. Tú solo necesitas depositar y nosotros nos encargamos del resto.'
  }, {
    question: '¿Necesito tener cuenta bancaria para invertir?',
    answer: 'No, no necesitas cuenta bancaria. Puedes invertir fácilmente en efectivo a través de cualquier tienda OXXO en México. Solo necesitas registrarte en nuestra plataforma, obtener tu código de pago y acudir a la tienda OXXO más cercana para realizar tu depósito en efectivo desde $1,000 MXN.'
  }, {
    question: '¿Cuál es el rendimiento promedio?',
    answer: 'Nuestros inversionistas obtienen un rendimiento promedio mensual del 15% al 20%. Sin embargo, es importante mencionar que los rendimientos pueden variar según las condiciones del mercado. Todos los rendimientos históricos están disponibles en tu panel de control una vez que te registras.'
  }, {
    question: '¿Cómo puedo retirar mi dinero?',
    answer: 'Los retiros son procesados instantáneamente y transferidos directamente a tu cuenta bancaria mediante SPEI. No hay periodos de espera ni comisiones por retiro. Puedes solicitar un retiro en cualquier momento desde tu panel de control. Si no tienes cuenta bancaria, también ofrecemos opciones alternativas para recibir tus ganancias.'
  }, {
    question: '¿Es seguro invertir con Altura Capital?',
    answer: 'Sí, implementamos múltiples capas de seguridad para proteger tus fondos e información personal. Utilizamos encriptación de nivel bancario, autenticación de dos factores y monitoreo constante. Además, operamos en total cumplimiento con las regulaciones financieras mexicanas.'
  }, {
    question: '¿Cuál es la inversión mínima?',
    answer: 'Puedes comenzar con tan solo $1,000 MXN. Diseñamos nuestra plataforma para que sea accesible para todos los mexicanos, independientemente de su capacidad financiera. Este monto mínimo aplica tanto para depósitos por SPEI como para pagos en efectivo a través de OXXO.'
  }, {
    question: '¿Qué pasa si el mercado cae?',
    answer: 'Nuestros algoritmos están diseñados para detectar tendencias negativas y ajustar las estrategias para minimizar pérdidas. También mantenemos una parte de los fondos en activos estables como respaldo. Sin embargo, como toda inversión, existe un riesgo asociado que debes considerar.'
  }];
  return <div id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2">
            Respuestas a tus dudas
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Preguntas Frecuentes
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => <div key={index} className={`border rounded-lg overflow-hidden ${openIndex === index ? 'border-blue-500' : 'border-gray-200'}`}>
              <button className="flex justify-between items-center w-full p-6 text-left font-medium focus:outline-none" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
                <span className="text-lg">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-blue-500" size={20} /> : <ChevronDown className="text-gray-400" size={20} />}
              </button>
              {openIndex === index && <div className="p-6 pt-0 text-gray-600">
                  <p>{faq.answer}</p>
                </div>}
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-medium hover:from-blue-600 hover:to-blue-800 transition-colors">
            Contactar a Soporte
          </button>
        </div>
      </div>
    </div>;
};