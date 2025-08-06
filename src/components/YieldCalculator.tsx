import React, { useEffect, useState } from 'react';
import { Calculator, TrendingUp, BarChart3, DollarSign, Calendar, RefreshCw, ArrowRight, Check } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
export const YieldCalculator = () => {
  const [investment, setInvestment] = useState(10000);
  const [months, setMonths] = useState(6);
  const [autoReinvest, setAutoReinvest] = useState(true);
  const [growthData, setGrowthData] = useState<any[]>([]);
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
    const data = [];
    let currentAmount = investment;
    let previousAmount = investment;
    // Agregar mes 0 (inversión inicial)
    data.push({
      month: 0,
      amount: currentAmount,
      yield: 0,
      growth: 0
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
  const CustomTooltip = ({
    active,
    payload,
    label
  }: any) => {
    if (active && payload && payload.length) {
      return <div className="bg-white p-4 shadow-md rounded-lg border border-gray-100">
          <p className="font-medium text-gray-900">{`Mes ${label}`}</p>
          <p className="text-blue-600 font-medium">{`Monto: ${formatCurrency(payload[0].value)}`}</p>
          {payload[1] && <p className="text-green-600 font-medium">{`Rendimiento: ${formatCurrency(payload[1].value)}`}</p>}
        </div>;
    }
    return null;
  };
  return <div id="calculadora" className="section-padding bg-gradient-to-b from-white to-gray-50">
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
                    <input type="number" value={investment} onChange={e => setInvestment(Number(e.target.value))} min="1000" className="w-full pl-8 pr-4 py-3.5 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent" placeholder="10,000" />
                  </div>
                  <div className="mt-2 text-sm text-blue-100">
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
                  <div className="mb-2">
                    <div className="text-2xl font-bold text-center mb-3">
                      {months} {months === 1 ? 'mes' : 'meses'}
                    </div>
                    <input type="range" min="1" max="12" value={months} onChange={e => setMonths(Number(e.target.value))} className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer" style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) ${months / 12 * 100}%, rgba(255,255,255,0.2) ${months / 12 * 100}%, rgba(255,255,255,0.2) 100%)`
                  }} />
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-blue-100">
                    <span>1 mes</span>
                    <span>12 meses</span>
                  </div>
                </div>
                <div>
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center">
                      <RefreshCw size={18} className="mr-2" />
                      <span className="font-medium">
                        Reinvertir ganancias automáticamente
                      </span>
                    </div>
                    <div className="relative">
                      <input type="checkbox" checked={autoReinvest} onChange={() => setAutoReinvest(!autoReinvest)} className="sr-only" />
                      <div className={`block w-14 h-8 rounded-full transition-colors ${autoReinvest ? 'bg-secondary-500' : 'bg-white/20'}`}></div>
                      <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${autoReinvest ? 'transform translate-x-6' : ''}`}></div>
                    </div>
                  </label>
                  <div className="mt-2 text-sm text-blue-100">
                    {autoReinvest ? 'Las ganancias se reinvierten para un crecimiento compuesto' : 'Recibes las ganancias mes a mes sin reinvertirlas'}
                  </div>
                </div>
                <div className="pt-4">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <div className="flex items-center mb-2">
                      <TrendingUp size={20} className="mr-2 text-secondary-400" />
                      <span className="font-medium">
                        Rendimiento mensual garantizado
                      </span>
                    </div>
                    <div className="text-4xl font-bold text-secondary-400">
                      20%
                    </div>
                    <div className="text-sm text-blue-100 mt-2">
                      Respaldado por contrato y regulado por la CNBV
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Resultados */}
            <div className="lg:w-3/5 p-8">
              {isCalculating ? <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">
                      Calculando tu rendimiento...
                    </p>
                  </div>
                </div> : <div className={`transition-opacity duration-500 ${showResults ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">
                    Resultados de tu inversión
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-blue-gradient text-white p-6 rounded-xl">
                      <div className="text-blue-100 mb-1 text-sm">
                        Total al final del periodo
                      </div>
                      <div className="text-3xl font-bold">
                        {formatCurrency(finalAmount)}
                      </div>
                      <div className="text-sm text-blue-100 mt-2">
                        {autoReinvest ? `Con reinversión automática durante ${months} meses` : `Después de ${months} meses de rendimientos`}
                      </div>
                    </div>
                    <div className="bg-green-gradient text-white p-6 rounded-xl">
                      <div className="text-green-100 mb-1 text-sm">
                        Rendimiento total ganado
                      </div>
                      <div className="text-3xl font-bold">
                        {formatCurrency(totalYield)}
                      </div>
                      <div className="text-sm text-green-100 mt-2">
                        {`Un ${(totalYield / investment * 100).toFixed(0)}% sobre tu inversión inicial`}
                      </div>
                    </div>
                  </div>
                  <div className="mb-10">
                    <h4 className="flex items-center text-lg font-medium text-gray-800 mb-6">
                      <BarChart3 size={20} className="mr-2 text-blue-600" />
                      Crecimiento de tu inversión mes a mes
                    </h4>
                    <div className="h-72 bg-white p-4 rounded-xl border border-gray-100">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={growthData} margin={{
                      top: 10,
                      right: 10,
                      left: 0,
                      bottom: 0
                    }}>
                          <defs>
                            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                            </linearGradient>
                            <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#1ec98b" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#1ec98b" stopOpacity={0.1} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="month" label={{
                        value: 'Mes',
                        position: 'insideBottomRight',
                        offset: -5
                      }} tick={{
                        fontSize: 12
                      }} />
                          <YAxis tickFormatter={value => `$${(value / 1000).toFixed(0)}k`} tick={{
                        fontSize: 12
                      }} />
                          <Tooltip content={<CustomTooltip />} />
                          <Area type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorAmount)" activeDot={{
                        r: 6
                      }} animationDuration={1500} />
                          <Area type="monotone" dataKey="yield" stroke="#1ec98b" strokeWidth={3} fillOpacity={1} fill="url(#colorYield)" activeDot={{
                        r: 6
                      }} animationDuration={1500} animationBegin={300} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="overflow-x-auto mb-10">
                    <h4 className="flex items-center text-lg font-medium text-gray-800 mb-6">
                      <TrendingUp size={20} className="mr-2 text-blue-600" />
                      Tabla de crecimiento detallada
                    </h4>
                    <div className="border border-gray-100 rounded-xl overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
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
                          {growthData.map((data, index) => <tr key={index} className={index === months ? 'bg-blue-50' : ''}>
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
                                {index === 0 ? '-' : <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                    +{data.growth}%
                                  </span>}
                              </td>
                            </tr>)}
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
                    <button className="btn-primary group">
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
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
};