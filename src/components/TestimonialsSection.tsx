import React from 'react';
import { Star } from 'lucide-react';
export const TestimonialsSection = () => {
  const testimonials = [{
    name: 'Carlos Méndez',
    location: 'Ciudad de México',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Comencé con $5,000 y en 3 meses ya tenía más de $8,000. Lo mejor es la transparencia y que puedo retirar cuando quiero sin problemas.',
    stars: 5
  }, {
    name: 'María González',
    location: 'Guadalajara',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Después de perder dinero con otras plataformas, encontré Altura Capital. El soporte es 100% mexicano y siempre están disponibles para resolver mis dudas.',
    stars: 5
  }, {
    name: 'Roberto Juárez',
    location: 'Monterrey',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    text: 'Nunca había invertido en criptomonedas por miedo a perder mi dinero. Con Altura Capital el proceso es sencillo y los rendimientos son reales.',
    stars: 4
  }];
  return <div id="testimonios" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2">
            Lo que dicen nuestros inversionistas
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Testimonios Reales
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Miles de mexicanos ya están generando rendimientos con Altura
            Capital. Conoce sus experiencias.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" size={20} />)}
                {[...Array(5 - testimonial.stars)].map((_, i) => <Star key={i} className="text-gray-300" size={20} />)}
              </div>
              <p className="text-gray-600">"{testimonial.text}"</p>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Ver más testimonios →
          </a>
        </div>
      </div>
    </div>;
};