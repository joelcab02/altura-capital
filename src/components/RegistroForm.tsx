import React, { useState } from 'react';
import { User, Mail, Phone } from 'lucide-react';
export const RegistroForm = ({
  onSubmit
}: {
  onSubmit: (data: any) => void;
}) => {
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    acceptTerms: false,
    recibirContrato: true
  });
  const [errors, setErrors] = useState({
    nombre: '',
    email: '',
    whatsapp: '',
    acceptTerms: ''
  });
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'nombre':
        return value.trim() === '' ? 'El nombre es requerido' : '';
      case 'email':
        return !/^\S+@\S+\.\S+$/.test(value) ? 'Email inválido' : '';
      case 'whatsapp':
        return !/^\d{10}$/.test(value) ? 'Número a 10 dígitos' : '';
      default:
        return '';
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormState(prev => ({
      ...prev,
      [name]: newValue
    }));
    if (type !== 'checkbox') {
      const errorMessage = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: errorMessage
      }));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validar todos los campos
    const newErrors = {
      nombre: validateField('nombre', formState.nombre),
      email: validateField('email', formState.email),
      whatsapp: validateField('whatsapp', formState.whatsapp),
      acceptTerms: !formState.acceptTerms ? 'Debes aceptar los términos' : ''
    };
    setErrors(newErrors);
    // Verificar si hay errores
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }
    // Track lead conversion with Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Registration Form',
        content_category: 'User Registration',
        value: 0.00,
        currency: 'MXN'
      });
    }

    // Enviar el formulario
    onSubmit(formState);
  };

  return (
    <div id="registro-form" className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Comienza ahora</h2>
      <p className="text-gray-600 mb-8">
        Inicia tu camino hacia la libertad financiera en menos de 60 segundos
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <div className="relative">
            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" name="nombre" value={formState.nombre} onChange={handleChange} placeholder="Nombre completo" className="w-full px-12 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
        </div>
        <div>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input type="email" name="email" value={formState.email} onChange={handleChange} placeholder="Correo electrónico" className="w-full px-12 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <div className="flex">
            <div className="w-1/6 bg-gray-50 border border-gray-200 rounded-l-lg flex items-center justify-center text-gray-600 font-medium">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" alt="Bandera de México" className="w-5 h-auto mr-1" />
              +52
            </div>
            <div className="relative w-5/6">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input type="tel" name="whatsapp" value={formState.whatsapp} onChange={handleChange} placeholder="WhatsApp (10 dígitos)" className="w-full pl-12 pr-4 py-4 rounded-r-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
          </div>
          {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
        </div>
        <div className="flex items-center">
          <input id="recibirContrato" name="recibirContrato" type="checkbox" checked={formState.recibirContrato} onChange={handleChange} className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
          <label htmlFor="recibirContrato" className="ml-3 text-gray-600">
            Quiero recibir mi contrato digital por correo
          </label>
        </div>
        <div className="flex items-center">
          <input id="acceptTerms" name="acceptTerms" type="checkbox" checked={formState.acceptTerms} onChange={handleChange} className={`w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${errors.acceptTerms ? 'border-red-500' : ''}`} required />
          <label htmlFor="acceptTerms" className="ml-3 text-gray-600">
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
        {errors.acceptTerms && <p className="text-red-500 text-sm mt-1">{errors.acceptTerms}</p>}
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-full flex items-center justify-center">
          <span>Crear mi cuenta y generar referencia</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  );
};