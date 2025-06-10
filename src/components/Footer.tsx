
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/558982d4-a1f0-4ab0-be7f-e05143fc18b7.png" 
              alt="YesuCan Consulting" 
              className="h-12 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              Transformamos organizaciones a través de consultoría estratégica personalizada 
              y metodologías comprobadas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/nosotros" className="text-gray-300 hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link to="/servicios" className="text-gray-300 hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/metodo" className="text-gray-300 hover:text-white transition-colors">Método</Link></li>
              <li><Link to="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-brand-secondary" />
                <span className="text-gray-300">info@yesucan.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-brand-secondary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-brand-secondary" />
                <span className="text-gray-300">Ciudad, País</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 YesuCan Consulting. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
