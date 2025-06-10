
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Target, Users, Lightbulb, TrendingUp, Repeat, Award, Zap } from 'lucide-react';

const Method = () => {
  const methodSteps = [
    {
      letter: 'Y',
      title: 'Yield Analysis',
      subtitle: 'Análisis de Rendimiento',
      description: 'Evaluamos el estado actual de tu organización, identificando fortalezas, debilidades y oportunidades de mejora.',
      icon: Target,
      color: 'bg-blue-500'
    },
    {
      letter: 'E',
      title: 'Engage Stakeholders',
      subtitle: 'Involucrar Stakeholders',
      description: 'Creamos alineación y compromiso en todos los niveles organizacionales para asegurar el éxito del proyecto.',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      letter: 'S',
      title: 'Strategize Solutions',
      subtitle: 'Estrategizar Soluciones',
      description: 'Desarrollamos estrategias personalizadas y planes de acción detallados basados en mejores prácticas.',
      icon: Lightbulb,
      color: 'bg-yellow-500'
    },
    {
      letter: 'U',
      title: 'Unleash Potential',
      subtitle: 'Liberar Potencial',
      description: 'Implementamos las soluciones diseñadas, capacitando a los equipos y liberando el potencial organizacional.',
      icon: Zap,
      color: 'bg-purple-500'
    },
    {
      letter: 'C',
      title: 'Continuous Improvement',
      subtitle: 'Mejora Continua',
      description: 'Establecemos procesos de monitoreo y mejora continua para asegurar resultados sostenibles.',
      icon: Repeat,
      color: 'bg-red-500'
    },
    {
      letter: 'A',
      title: 'Achieve Excellence',
      subtitle: 'Alcanzar Excelencia',
      description: 'Consolidamos los cambios y celebramos los logros, estableciendo una nueva línea base de excelencia.',
      icon: Award,
      color: 'bg-indigo-500'
    },
    {
      letter: 'M',
      title: 'Measure Success',
      subtitle: 'Medir Éxito',
      description: 'Evaluamos los resultados obtenidos contra los objetivos establecidos y documentamos las lecciones aprendidas.',
      icon: TrendingUp,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Método YESUCAM
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Nuestra metodología propietaria de 7 pasos que ha transformado 
            cientos de organizaciones en todo el mundo.
          </p>
          <div className="inline-block bg-brand-secondary text-white px-8 py-4 rounded-lg text-2xl font-bold tracking-wide">
            Y · E · S · U · C · A · M
          </div>
        </div>
      </section>

      {/* Method Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Un Enfoque Sistemático para la Transformación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              YESUCAM es más que una metodología; es un framework integral que 
              asegura transformaciones exitosas y sostenibles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="flex items-center">
                  <CheckCircle className="text-brand-secondary mr-3" size={24} />
                  <span className="text-lg">Metodología probada en 200+ proyectos</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-brand-secondary mr-3" size={24} />
                  <span className="text-lg">98% de tasa de éxito documentada</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-brand-secondary mr-3" size={24} />
                  <span className="text-lg">Enfoque centrado en resultados medibles</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-brand-secondary mr-3" size={24} />
                  <span className="text-lg">Adaptable a cualquier industria</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Metodología YESUCAM en acción"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Method Steps */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Los 7 Pasos del Método YESUCAM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada paso está diseñado para construir sobre el anterior, 
              creando un momentum imparable hacia la transformación.
            </p>
          </div>

          <div className="space-y-12">
            {methodSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.letter} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  <div className="flex-1">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 ${step.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4`}>
                          {step.letter}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-brand-primary">
                            {step.title}
                          </h3>
                          <p className="text-lg text-brand-secondary font-medium">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <IconComponent size={64} className={step.color.replace('bg-', 'text-')} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Beneficios del Método YESUCAM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados tangibles que impulsan el crecimiento y la competitividad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Transformación Acelerada",
                description: "Reduce el tiempo de implementación en un 40% comparado con métodos tradicionales.",
                icon: Zap
              },
              {
                title: "ROI Comprobado",
                description: "Clientes reportan un promedio de 300% de retorno sobre la inversión en 18 meses.",
                icon: TrendingUp
              },
              {
                title: "Adopción Garantizada",
                description: "98% de tasa de adopción exitosa gracias a nuestro enfoque en stakeholders.",
                icon: Users
              },
              {
                title: "Resultados Sostenibles",
                description: "Los cambios perduran en el tiempo gracias a nuestro enfoque de mejora continua.",
                icon: Repeat
              },
              {
                title: "Reducción de Riesgos",
                description: "Metodología probada que minimiza los riesgos asociados con el cambio organizacional.",
                icon: Target
              },
              {
                title: "Cultura de Excelencia",
                description: "Creamos una cultura organizacional orientada a la excelencia y la innovación.",
                icon: Award
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <IconComponent className="mx-auto mb-4 text-brand-secondary" size={48} />
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Method;
