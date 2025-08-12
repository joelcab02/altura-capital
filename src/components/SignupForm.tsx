import React, { useState } from 'react';
import { User, Mail, Phone, Check, ChevronRight, Loader2 } from 'lucide-react';
import { submitLead } from '../services/leadService';

export const SignupForm = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    acceptTerms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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
    
    // Clear any previous messages when user starts typing
    if (submitMessage) {
      setSubmitMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const result = await submitLead({
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        phone: formState.phone
      });

      if (result.success) {
        setSubmitMessage({
          type: 'success',
          text: '¡Gracias! Te contactaremos pronto para comenzar tu prueba gratuita.'
        });
        
        // Reset form after successful submission
        setFormState({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          acceptTerms: false
        });
      } else {
        setSubmitMessage({
          type: 'error',
          text: result.message || 'Error al enviar la información. Por favor, inténtalo de nuevo.'
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Error al enviar la información. Por favor, inténtalo de nuevo.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
        {submitMessage && (
          <div className={`p-4 rounded-lg mb-4 ${
            submitMessage.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitMessage.text}
          </div>
        )}
        
        <button 
          type="submit" 
          disabled={isSubmitting || !formState.acceptTerms}
          className="w-full btn-primary py-4 justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="mr-2 animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <span>Probar Gratis Por 7 Días</span>
              <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
            </>
          )}
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