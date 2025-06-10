
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, BookOpen, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
            Nosotros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos un equipo de consultores apasionados por transformar organizaciones 
            y crear un impacto positivo duradero.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Fundador de YesuCan Consulting"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                Nuestro Fundador
              </h2>
              <h3 className="text-2xl font-semibold text-brand-secondary mb-4">
                [Nombre del Fundador]
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Con más de 15 años de experiencia en consultoría estratégica y transformación 
                organizacional, [Nombre] fundó YesuCan Consulting con la visión de ayudar a 
                las organizaciones a alcanzar su máximo potencial.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Su enfoque único combina metodologías probadas con un entendimiento profundo 
                de las dinámicas organizacionales, resultando en transformaciones sostenibles 
                y resultados excepcionales para nuestros clientes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Award className="text-brand-secondary mr-3" size={20} />
                  <span className="text-sm">MBA en Estrategia</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="text-brand-secondary mr-3" size={20} />
                  <span className="text-sm">Certificado PMP</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-brand-secondary mr-3" size={20} />
                  <span className="text-sm">Coach Ejecutivo</span>
                </div>
                <div className="flex items-center">
                  <Target className="text-brand-secondary mr-3" size={20} />
                  <span className="text-sm">Six Sigma Black Belt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Target className="mx-auto mb-6 text-brand-secondary" size={64} />
              <h3 className="text-2xl font-bold text-brand-primary mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Transformar organizaciones a través de consultoría estratégica personalizada, 
                metodologías innovadoras y un compromiso inquebrantable con la excelencia, 
                creando valor sostenible para nuestros clientes y sus stakeholders.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Users className="mx-auto mb-6 text-brand-secondary" size={64} />
              <h3 className="text-2xl font-bold text-brand-primary mb-4">Nuestra Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconocidos como la firma de consultoría líder en transformación 
                organizacional, conocida por nuestra capacidad de generar cambios 
                positivos duraderos y por nuestro compromiso con el éxito de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada proyecto y cada interacción con nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excelencia",
                description: "Nos comprometemos a entregar resultados excepcionales en cada proyecto."
              },
              {
                title: "Integridad",
                description: "Actuamos con honestidad y transparencia en todas nuestras relaciones."
              },
              {
                title: "Innovación",
                description: "Buscamos constantemente nuevas formas de agregar valor a nuestros clientes."
              },
              {
                title: "Colaboración",
                description: "Trabajamos en estrecha colaboración con nuestros clientes para asegurar el éxito."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{value.title[0]}</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-primary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
