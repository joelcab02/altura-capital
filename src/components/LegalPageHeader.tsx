import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
interface LegalPageHeaderProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
}
export const LegalPageHeader: React.FC<LegalPageHeaderProps> = ({
  title,
  subtitle,
  icon
}) => {
  return <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Regresar al inicio
        </Link>
        <div className="flex items-center mb-4">
          <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
            {icon}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        </div>
        {subtitle && <p className="text-xl text-blue-100">{subtitle}</p>}
      </div>
    </div>;
};