import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const menuItems = [{
    name: '¿Qué es?',
    href: '#que-es'
  }, {
    name: 'Cómo funciona',
    href: '#como-funciona'
  }, {
    name: 'Calculadora',
    href: '#calculadora'
  }, {
    name: 'Testimonios',
    href: '#testimonios'
  }, {
    name: 'FAQ',
    href: '#faq'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 bg-white ${scrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/ChatGPT_Image_Aug_4%2C_2025%2C_10_48_58_PM_%281%29.png" alt="Altura Capital Logo" className="h-10 md:h-12" />
          </Link>
          {/* Mobile menu button */}
          <button className="md:hidden flex items-center text-gray-800" onClick={toggleMenu} aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item, index) => <a key={index} href={item.href} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors">
                {item.name}
              </a>)}
          </nav>
          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors">
              Iniciar sesión
            </button>
            <Link to="/registro" className="btn-primary">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-30 max-h-[80vh] overflow-y-auto">
          <nav className="container-custom py-4">
            <div className="space-y-1">
              {menuItems.map((item, index) => <a key={index} href={item.href} className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-800" onClick={() => setMobileMenuOpen(false)}>
                  <span>{item.name}</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </a>)}
            </div>
            <div className="mt-6 space-y-3 pt-6 border-t border-gray-100">
              <button className="w-full py-3 px-4 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center">
                Iniciar sesión
              </button>
              <Link to="/registro" className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-colors flex items-center justify-center">
                Registrarse
              </Link>
            </div>
          </nav>
        </div>}
    </header>;
};