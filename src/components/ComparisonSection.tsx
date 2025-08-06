import React from 'react';
import { Check, X } from 'lucide-react';
export const ComparisonSection = () => {
  return <div id="rendimientos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2">Comparativa real</p>
          <h2 className="text-4xl font-bold text-gray-800">
            Rendimientos Garantizados vs. Bancos
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre por qué miles de mexicanos están cambiando sus instrumentos
            de inversión tradicionales por Altura Capital, la primera plataforma
            autorizada por la CNBV.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-4 px-6 text-left text-gray-600"></th>
                <th className="py-4 px-6 text-center text-gray-600">
                  Bancos tradicionales
                </th>
                <th className="py-4 px-6 text-center text-gray-600">CETES</th>
                <th className="py-4 px-6 text-center bg-blue-50 text-blue-800 font-bold">
                  Altura Capital
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="py-4 px-6 text-left font-medium">
                  Rendimiento anual
                </td>
                <td className="py-4 px-6 text-center">0.5% - 2%</td>
                <td className="py-4 px-6 text-center">8% - 11%</td>
                <td className="py-4 px-6 text-center bg-blue-50 font-bold text-blue-800">
                  Hasta 240% garantizado
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-4 px-6 text-left font-medium">
                  Monto mínimo
                </td>
                <td className="py-4 px-6 text-center">$5,000 - $50,000</td>
                <td className="py-4 px-6 text-center">$100</td>
                <td className="py-4 px-6 text-center bg-blue-50 font-bold text-blue-800">
                  $1,000
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-4 px-6 text-left font-medium">
                  Requiere cuenta bancaria
                </td>
                <td className="py-4 px-6 text-center">
                  <Check className="mx-auto text-red-500" size={24} />
                </td>
                <td className="py-4 px-6 text-center">
                  <Check className="mx-auto text-red-500" size={24} />
                </td>
                <td className="py-4 px-6 text-center bg-blue-50">
                  <X className="mx-auto text-green-500" size={24} />
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-4 px-6 text-left font-medium">
                  Pago en efectivo (OXXO)
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="mx-auto text-red-500" size={24} />
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="mx-auto text-red-500" size={24} />
                </td>
                <td className="py-4 px-6 text-center bg-blue-50">
                  <Check className="mx-auto text-green-500" size={24} />
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-4 px-6 text-left font-medium">Retiros</td>
                <td className="py-4 px-6 text-center">Con penalizaciones</td>
                <td className="py-4 px-6 text-center">Al vencimiento</td>
                <td className="py-4 px-6 text-center bg-blue-50 font-bold text-blue-800">
                  Instantáneos 24/7
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-4 px-6 text-left font-medium">Comisiones</td>
                <td className="py-4 px-6 text-center">Múltiples</td>
                <td className="py-4 px-6 text-center">Mínimas</td>
                <td className="py-4 px-6 text-center bg-blue-50 font-bold text-blue-800">
                  Ninguna
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-4 px-6 text-left font-medium">
                  Regulación CNBV
                </td>
                <td className="py-4 px-6 text-center">
                  <Check className="mx-auto text-green-500" size={24} />
                </td>
                <td className="py-4 px-6 text-center">
                  <Check className="mx-auto text-green-500" size={24} />
                </td>
                <td className="py-4 px-6 text-center bg-blue-50">
                  <Check className="mx-auto text-green-500" size={24} />
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-4 px-6 text-left font-medium">
                  Soporte 24/7
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="mx-auto text-red-500" size={24} />
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="mx-auto text-red-500" size={24} />
                </td>
                <td className="py-4 px-6 text-center bg-blue-50">
                  <Check className="mx-auto text-green-500" size={24} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          * Altura Capital opera bajo autorización de la CNBV como plataforma de
          inversión en activos digitales con rendimientos garantizados.
        </div>
      </div>
    </div>;
};