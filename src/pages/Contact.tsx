
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Contáctenos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a transformar tu organización. 
            Ponte en contacto con nosotros para una consulta personalizada.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-8">
                Información de Contacto
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-primary mb-2">
                      Oficina Central
                    </h3>
                    <p className="text-gray-600">
                      Alicia Moreau de Justo 1150 P2<br />
                      Puerto Madero - CABA<br />
                      Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center">
                      <Phone className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-primary mb-2">
                      Teléfono
                    </h3>
                    <p className="text-gray-600">
                      +54 11 5217-7537
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center">
                      <Mail className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-primary mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600">
                      info@yesucan.com<br />
                      contacto@yesucan.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center">
                      <Clock className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-primary mb-2">
                      Horarios de Atención
                    </h3>
                    <p className="text-gray-600">
                      Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                      Sábados: 9:00 AM - 1:00 PM<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="mt-12 p-6 bg-brand-light rounded-lg">
                <h3 className="text-lg font-semibold text-brand-primary mb-4">
                  ¿Por qué elegirnos?
                </h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-brand-secondary">24h</div>
                    <div className="text-sm text-gray-600">Tiempo de respuesta</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-secondary">98%</div>
                    <div className="text-sm text-gray-600">Satisfacción del cliente</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-secondary">200+</div>
                    <div className="text-sm text-gray-600">Proyectos exitosos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-secondary">15+</div>
                    <div className="text-sm text-gray-600">Años de experiencia</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-brand-primary mb-6">
                Envíanos un Mensaje
              </h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
              </p>
              <ContactForm showServiceSelect={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-primary mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-xl text-gray-600">
              Visítanos en nuestras oficinas en Puerto Madero
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016344736293!2d-58.36380792477158!3d-34.60373595711847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d9fba0d0c5%3A0x6c22e5e0f38bb14b!2sAlicia%20Moreau%20de%20Justo%201150%2C%20C1107AAX%20CABA%2C%20Argentina!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de YesuCan Consulting - Puerto Madero, Buenos Aires"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
