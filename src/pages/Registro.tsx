import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RegistroForm } from '../components/RegistroForm';
import { RegistroTestimonio } from '../components/RegistroTestimonio';
import { Footer } from '../components/Footer';
export const Registro = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleFormSubmit = (formData: any) => {
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // En un caso real, aquí enviaríamos los datos a un servidor
    // y luego redirigir a una página de confirmación
  };
  return <>
      <div className="min-h-screen bg-white">
        <div className="h-8 bg-blue-600 w-full"></div>
        <div className="container-custom py-20">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Columna izquierda - Testimonio */}
            <div className="md:w-1/2">
              <RegistroTestimonio />
            </div>
            {/* Columna derecha - Formulario */}
            <div className="md:w-1/2">
              <RegistroForm onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </div>
    </>;
};