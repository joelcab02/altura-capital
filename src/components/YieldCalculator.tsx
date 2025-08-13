import React, { useEffect, useState } from 'react';
import { Calculator, TrendingUp, BarChart3, DollarSign, Calendar, RefreshCw, ArrowRight, Check } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

interface GrowthData {
  month: number;
  amount: number;
  yield: number;
  growth: string;
}

export const YieldCalculator = () => {
  const [investment, setInvestment] = useState(10000);
  const [months, setMonths] = useState(6);
  const [autoReinvest, setAutoReinvest] = useState(true);
  const [growthData, setGrowthData] = useState<GrowthData[]>([]);
  const [finalAmount, setFinalAmount] = useState(0);
  const [totalYield, setTotalYield] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const monthlyRate = 0.2; // 20% mensual

  useEffect(() => {
    calculateGrowth();
  }, [investment, months, autoReinvest]);

  const calculateGrowth = () => {
    setIsCalculating(true);
    const data: GrowthData[] = [];
    let currentAmount = investment;
    let previousAmount = investment;

    // Agregar mes 0 (inversión inicial)
    data.push({
      month: 0,
      amount: currentAmount,
      yield: 0,
      growth: '0'
    });

    for (let i = 1; i <= months; i++) {
      const monthlyYield = currentAmount * monthlyRate;
      if (autoReinvest) {
        currentAmount += monthlyYield;
      } else {
        currentAmount = investment + monthlyYield;
      }

      const monthlyGrowth = (currentAmount - previousAmount) / previousAmount * 100;
      data.push({
        month: i,
        amount: currentAmount,
        yield: autoReinvest ? currentAmount - investment : monthlyYield * i,
        growth: monthlyGrowth.toFixed(2)
      });

      if (autoReinvest) {
        previousAmount = currentAmount;
      }
    }

    setGrowthData(data);
    setFinalAmount(data[months].amount);
    setTotalYield(data[months].yield);

    // Simular un pequeño retraso para mostrar la animación de cálculo
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
    }, 500);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      maximumFractionDigits: 0
    }).format(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-md rounded-lg border border-gray-100">
          <p className="font-medium text-gray-900">{`Mes ${label}`}</p>
          <p className="text-blue-600 font-medium">{`Monto: ${formatCurrency(payload[0].value)}`}</p>
          {payload[1] && (
            <p className="text-green-600 font-medium">{`Rendimiento: ${formatCurrency(payload[1].value)}`}</p>
          )}
        </div>
      );
    }
    return null;
  };

  const handleScrollToSignup = () => {
    const element = document.querySelector('#signup-form');
    if (element) {
      const top = (element as HTMLElement).offsetTop;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div id="calculadora" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-full mb-4">
            <Calculator className="text-blue-600" size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Calcula tu rendimiento garantizado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cuánto puede crecer tu dinero con nuestro rendimiento
            mensual garantizado del 20%
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            {/* Formulario de cálculo */}
            <div className="lg:w-2/5 p-8 bg-blue-gradient text-white">
              <h3 className="text-2xl font-bold mb-8">
                Personaliza tu inversión
              </h3>
              
              <div className="space-y-8">
                <div>
                  <label className="block mb-3 font-medium">
                    <div className="flex items-center">
                      <DollarSign size={18} className="mr-2" />
                      ¿Cuánto quieres invertir?
                    </div>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70">
                      $
                    </span>
                    <input
                      type="number"
                      value={investment}
                      onChange={(e) => setInvestment(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="10,000"
                      min="1000"
                      step="1000"
                    />
                  </div>
                  <div className="mt-2 text-sm text-white/70">
                    Mínimo: $1,000 MXN
                  </div>
                </div>

                <div>
                  <label className="block mb-3 font-medium">
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-2" />
                      ¿Por cuántos meses?
                    </div>
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min="1"
                      max="12"
                      value={months}
                      onChange={(e) => setMonths(Number(e.target.value))}
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-white/70 mt-2">
                      <span>1 mes</span>
                      <span className="font-bold text-white">{months} meses</span>
                      <span>12 meses</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-3 font-medium">
                    <div className="flex items-center">
                      <RefreshCw size={18} className="mr-2" />
                      Estrategia de reinversión
                    </div>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="reinvest"
                        checked={autoReinvest}
                        onChange={() => setAutoReinvest(true)}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">Reinvertir automáticamente</div>
                        <div className="text-sm text-white/70">
                          Maximiza tu crecimiento compuesto
                        </div>
                      </div>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="reinvest"
                        checked={!autoReinvest}
                        onChange={() => setAutoReinvest(false)}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">Retirar rendimientos</div>
                        <div className="text-sm text-white/70">
                          Recibe pagos mensuales constantes
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80">Rendimiento mensual:</span>
                    <span className="font-bold text-xl">20%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Rendimiento anual:</span>
                    <span className="font-bold text-xl">892%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resultados */}
            <div className="lg:w-3/5 p-8">
              {isCalculating ? (
                <div className="flex items-center justify-center h-full min-h-[400px]">
                  <div className="text-center">
                    <RefreshCw className="animate-spin text-blue-600 mx-auto mb-4" size={48} />
                    <p className="text-gray-600">Calculando tu rendimiento...</p>
                  </div>
                </div>
              ) : showResults ? (
                <div className="space-y-8">
                  {/* Resumen de resultados */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-xl text-center">
                      <DollarSign className="text-blue-600 mx-auto mb-2" size={24} />
                      <div className="text-2xl font-bold text-blue-800">
                        {formatCurrency(investment)}
                      </div>
                      <div className="text-sm text-blue-600">Inversión inicial</div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl text-center">
                      <TrendingUp className="text-green-600 mx-auto mb-2" size={24} />
                      <div className="text-2xl font-bold text-green-800">
                        {formatCurrency(totalYield)}
                      </div>
                      <div className="text-sm text-green-600">Rendimiento total</div>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl text-center">
                      <BarChart3 className="text-purple-600 mx-auto mb-2" size={24} />
                      <div className="text-2xl font-bold text-purple-800">
                        {formatCurrency(finalAmount)}
                      </div>
                      <div className="text-sm text-purple-600">Monto final</div>
                    </div>
                  </div>

                  {/* Gráfico */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold mb-4">Crecimiento de tu inversión</h4>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={growthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis tickFormatter={(value) => formatCurrency(value)} />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                          type="monotone"
                          dataKey="amount"
                          stroke="#3B82F6"
                          fill="#3B82F6"
                          fillOpacity={0.1}
                        />
                        <Area
                          type="monotone"
                          dataKey="yield"
                          stroke="#10B981"
                          fill="#10B981"
                          fillOpacity={0.1}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Tabla detallada */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold mb-4">Detalle mes a mes</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Mes
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Monto total
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Rendimiento
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Crecimiento
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {growthData.map((data, index) => (
                            <tr key={index} className={index === months ? 'bg-blue-50' : ''}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {index === 0 ? 'Inicial' : `Mes ${index}`}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                                {formatCurrency(data.amount)}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {index === 0 ? '-' : formatCurrency(data.yield)}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {index === 0 ? '-' : (
                                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                    +{data.growth}%
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
                    <p className="text-lg text-blue-800 font-medium">
                      Con solo {formatCurrency(investment)}, en {months} meses
                      podrías tener {formatCurrency(finalAmount)}.
                    </p>
                    <p className="text-blue-600 mt-1">
                      Así crece tu dinero mes a mes sin bancos ni comisiones.
                    </p>
                  </div>

                  <div className="text-center">
                    <h4 className="text-xl font-bold mb-6">
                      ¿Listo para hacerlo real?
                    </h4>
                    <button 
                      onClick={handleScrollToSignup}
                      className="btn-primary group"
                    >
                      <span>Invertir ahora</span>
                      <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                    </button>
                    <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
                      <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      <span>
                        Puedes empezar desde $1,000 MXN. Retiros disponibles en
                        todo momento.
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
