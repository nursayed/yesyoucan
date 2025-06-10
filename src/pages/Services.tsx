
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Zap, 
  Repeat, 
  Settings, 
  Users, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [selectedService, setSelectedService] = useState('');

  const services = [
    {
      id: 'estrategia',
      title: 'Consultoría Estratégica',
      icon: TrendingUp,
      description: 'Desarrollamos estrategias personalizadas que alinean objetivos organizacionales con capacidades y recursos.',
      features: [
        'Análisis estratégico integral',
        'Planificación estratégica a 3-5 años',
        'Definición de KPIs y métricas',
        'Roadmap de implementación'
      ],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'transformacion',
      title: 'Transformación Digital',
      icon: Zap,
      description: 'Guiamos organizaciones en su journey digital, optimizando procesos y tecnologías para el futuro.',
      features: [
        'Diagnóstico de madurez digital',
        'Arquitectura tecnológica',
        'Gestión del cambio tecnológico',
        'Capacitación y adopción'
      ],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 'gestion',
      title: 'Gestión del Cambio',
      icon: Repeat,
      description: 'Facilitamos transiciones organizacionales exitosas con metodologías probadas de change management.',
      features: [
        'Evaluación de impacto del cambio',
        'Plan de comunicación estratégica',
        'Formación de agentes de cambio',
        'Monitoreo y ajustes continuos'
      ],
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'optimizacion',
      title: 'Optimización de Procesos',
      icon: Settings,
      description: 'Identificamos y eliminamos ineficiencias, creando procesos ágiles y orientados a resultados.',
      features: [
        'Mapeo y análisis de procesos',
        'Identificación de bottlenecks',
        'Rediseño de workflows',
        'Automatización inteligente'
      ],
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 'liderazgo',
      title: 'Desarrollo de Liderazgo',
      icon: Users,
      description: 'Fortalecemos capacidades de liderazgo en todos los niveles organizacionales.',
      features: [
        'Assessment de competencias',
        'Programas de coaching ejecutivo',
        'Planes de desarrollo personalizados',
        'Mentoring y seguimiento'
      ],
      color: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de consultoría diseñadas para impulsar 
            el crecimiento y la transformación de tu organización.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-6`}>
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle size={16} className="text-brand-secondary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => setSelectedService(service.id)}
                    className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white"
                  >
                    Solicitar Información
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un enfoque estructurado que garantiza resultados excepcionales en cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Diagnóstico',
                description: 'Análisis profundo de la situación actual y identificación de oportunidades.'
              },
              {
                step: '02',
                title: 'Estrategia',
                description: 'Desarrollo de soluciones personalizadas alineadas con tus objetivos.'
              },
              {
                step: '03',
                title: 'Implementación',
                description: 'Ejecución estructurada con monitoreo continuo y ajustes necesarios.'
              },
              {
                step: '04',
                title: 'Optimización',
                description: 'Refinamiento y mejora continua para maximizar los resultados.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-brand-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
                ¿Interesado en Nuestros Servicios?
              </h2>
              <p className="text-xl text-gray-600">
                Contáctanos para una consulta personalizada y descubre cómo podemos ayudarte.
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <ContactForm showServiceSelect={true} defaultService={selectedService} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
