import React, { useState } from 'react';
import { User, Mail, Phone, Check, ChevronRight } from 'lucide-react';
export const SignupForm = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    acceptTerms: false
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formState);
  };
  return <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform translate-y-0 hover:translate-y-[-5px] transition-all duration-300">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Comienza ahora
        </h2>
        <p className="text-gray-600">
          Inicia tu camino hacia la libertad financiera en menos de 30 segundos
        </p>
      </div>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="relative">
          <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input type="text" name="firstName" value={formState.firstName} onChange={handleChange} placeholder="Nombre" className="input-field pl-10" required />
        </div>
        <div className="relative">
          <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input type="text" name="lastName" value={formState.lastName} onChange={handleChange} placeholder="Apellido" className="input-field pl-10" required />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
          <input type="email" name="email" value={formState.email} onChange={handleChange} placeholder="Correo electrónico" className="input-field pl-10" required />
        </div>
        <div className="flex">
          <div className="w-1/4 bg-gray-50 border border-gray-300 rounded-l-lg flex items-center justify-center text-gray-600">
            <div className="flex items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" alt="Bandera de México" className="w-5 h-auto mr-1" />
              +52
            </div>
          </div>
          <div className="relative w-3/4">
            <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input type="tel" name="phone" value={formState.phone} onChange={handleChange} placeholder="Teléfono" className="w-full pl-10 pr-4 py-3 rounded-r-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input id="terms" name="acceptTerms" type="checkbox" checked={formState.acceptTerms} onChange={handleChange} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required />
          </div>
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            Acepto los{' '}
            <a href="/terminos" className="text-blue-600 hover:underline">
              Términos y Condiciones
            </a>{' '}
            y el{' '}
            <a href="/privacidad" className="text-blue-600 hover:underline">
              Aviso de Privacidad
            </a>
            .
          </label>
        </div>
        <button type="submit" className="w-full btn-primary py-4 justify-center group">
          <span>Probar Gratis Por 7 Días</span>
          <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center text-sm text-gray-500">
          <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
          <span>Sin comisiones ocultas. Cancela cuando quieras.</span>
        </div>
      </div>
    </div>;
};