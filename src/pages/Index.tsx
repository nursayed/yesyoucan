
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Target, TrendingUp, MapPin, Phone, Mail, Clock, Lightbulb, Users2, BarChart3, Cog, Quote, Building2, User, Zap, Brain, Heart, DollarSign, Settings, Search, UserCheck, Gauge, UsersIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-brand-light to-white py-10 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-light/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full translate-y-16 -translate-x-16"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[480px]">
            {/* Left Column - Text Content */}
            <div className="animate-fade-in text-center lg:text-left">
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-bold text-brand-primary mb-8 leading-tight">
                  Ayudamos a emprendedores a 
                  <span className="text-brand-secondary block mt-2">crecer</span>
                </h1>
              </div>
              
              <div className="mb-6">
                <p className="text-1xl md:text-1xl font-bold text-gray-800 mb-2">
                  "Sí puedes Con estrategia y coraje"
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-brand-secondary hover:bg-brand-secondary/90 text-white px-8 py-3 text-lg">
                  Servicios
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8 py-3 text-lg"
                >
                  Contáctanos
                </Button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <img
                  src="/lovable-uploads/herop.png"
                  alt="Emprendedor saltando - Sí puedes con estrategia y coraje"
                  className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Floating contact button */}
              <div className="absolute -bottom-8 -right-8 hidden lg:block">
                <div className="bg-white/90 backdrop-blur-sm border-2 border-brand-primary/20 rounded-full px-6 py-3 shadow-lg">
                  <p className="text-brand-primary font-semibold text-sm">
                   <a href="">Contáctanos</a> 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <Users size={48} className="text-brand-secondary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">200+</h3>
              <p className="text-gray-300">Clientes Satisfechos</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Target size={48} className="text-brand-secondary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">98%</h3>
              <p className="text-gray-300">Tasa de Éxito</p>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <TrendingUp size={48} className="text-brand-secondary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <p className="text-gray-300">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-light/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full translate-y-16 -translate-x-16"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main About Section */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 relative">
                Sobre Nosotros
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary to-brand-primary rounded-full"></div>
              </h2>
              <p className="text-sm font-medium text-brand-secondary uppercase tracking-wider mt-6">Identidad</p>
            </div>
            <div className="max-w-4xl mx-auto mt-8">
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                En <span className="font-semibold text-brand-primary">Yesucan</span> somos una consultora creada por emprendedores que entienden lo que significa liderar un 
                negocio desde cero. Aportamos herramientas estratégicas y acompañamiento humano para ayudarte a 
                ordenar tu empresa, tomar mejores decisiones y liderar con claridad, foco y confianza.
              </p>
              <p className="text-lg text-gray-600 mt-6 font-light">
                Trabajamos tanto el negocio como al emprendedor, porque sabemos que uno impacta directamente en el otro.
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <img
                    src="/lovable-uploads/138422c1-47f2-4b71-835b-075b4604ccce.png"
                    alt="Gustavo Vodeb - Fundador de YesuCan"
                    className="relative w-full max-w-sm mx-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="lg:col-span-3">
                <div className="flex items-center mb-6">
                  <Quote className="text-brand-secondary mr-3 flex-shrink-0" size={32} />
                  <h3 className="text-2xl font-bold text-brand-primary">
                    Palabras del Founder
                  </h3>
                </div>
                
                <blockquote className="text-2xl md:text-3xl font-light italic text-gray-700 mb-8 leading-relaxed">
                  "Sé lo que es emprender. <br />
                  <span className="text-brand-secondary font-medium">Yo también estuve ahí.</span>"
                </blockquote>
                
                <div className="space-y-6 text-gray-700">
                  <div className="bg-gradient-to-r from-brand-light/30 to-transparent p-6 rounded-xl border-l-4 border-brand-secondary">
                    <p className="text-lg leading-relaxed">
                      Soy <span className="font-semibold text-brand-primary">Gustavo Vodeb</span>. Desde joven emprendí en el mundo de la tecnología y 
                      lideré una empresa innovadora para el sector jurídico. Me formé como 
                      Contador Público, obtuve un MBA, y realicé varios cursos de posgrados en 
                      desarrollo de Pymes.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-transparent to-brand-light/30 p-6 rounded-xl border-r-4 border-brand-primary">
                    <p className="text-lg leading-relaxed">
                      Hace un tiempo descubrí una nueva vocación que es ayudar a otros emprendedores a crecer. 
                      Hoy acompaño a quienes quieren mejorar sus decisiones, fortalecer su 
                      liderazgo y desarrollar su potencial con <span className="font-semibold text-brand-secondary">estrategia y coraje</span>.
                    </p>
                  </div>
                </div>

                {/* Achievement badges */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <div className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium">
                    Contador Público
                  </div>
                  <div className="bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full text-sm font-medium">
                    MBA
                  </div>
                  <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                    Especialista en Pymes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos acompañamiento personalizado para transformar tu negocio y desarrollar tu liderazgo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Diagnóstico Yesucan */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Search className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-2">
                    Diagnóstico Yesucan
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Una o dos sesiones iniciales para evaluar en profundidad tu negocio y tu perfil como emprendedor. Es el punto de partida ideal para trazar un plan.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                  >
                    Haz clic aquí
                  </Button>
                </div>
              </div>
            </div>

            {/* Mentoreo individual */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-2">
                    Mentoreo individual
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Acompañamiento mensual o quincenal, combinando lo estratégico con lo personal. Trabajamos juntos tus desafíos concretos y tus decisiones clave.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                  >
                    Haz clic aquí
                  </Button>
                </div>
              </div>
            </div>

            {/* Intensivo 1 a 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Gauge className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-2">
                    Intensivo 1 a 1
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Un proceso profundo y concentrado para transformar tu negocio en 2 semanas o 1 mes. Ideal para momentos de crisis o crecimiento.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                  >
                    Haz clic aquí
                  </Button>
                </div>
              </div>
            </div>

            {/* Talleres / Grupos */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <UsersIcon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-primary mb-2">
                    Talleres / Grupos
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Un proceso profundo y concentrado para transformar tu negocio en 2 semanas o 1 mes. Ideal para momentos de crisis o crecimiento.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                  >
                    Haz clic aquí
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-8 rounded-lg text-white inline-block">
              <p className="text-lg mb-4">
                Los botones te llevan al formulario donde debes identificar el servicio del cual proviene
              </p>
              <p className="text-sm opacity-90">
                Cada tarjeta incluye un ícono visual para fácil identificación
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="metodo" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-light/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full translate-y-16 -translate-x-16"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 relative">
                Método YesuCan
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary to-brand-primary rounded-full"></div>
              </h2>
              <p className="text-sm font-medium text-brand-secondary uppercase tracking-wider mt-6">Metodología</p>
            </div>
            <div className="max-w-4xl mx-auto mt-8">
              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Nuestro método se basa en <span className="font-semibold text-brand-primary">3 ejes de trabajo</span> fundamentales 
                que garantizan una transformación integral y sostenible de tu organización.
              </p>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Negocio Pillar */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-2">
                    1. Negocio
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-brand-light/30 to-transparent p-4 rounded-xl border-l-4 border-brand-primary">
                    <div className="flex items-start">
                      <DollarSign className="text-brand-primary mr-3 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">Herramientas y decisiones estratégicas</span> para que tu empresa crezca con foco y rentabilidad.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-transparent to-brand-light/30 p-4 rounded-xl border-r-4 border-brand-secondary">
                    <div className="flex items-start">
                      <BarChart3 className="text-brand-secondary mr-3 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700 leading-relaxed">
                        Análisis de <span className="font-semibold">modelo de negocio, finanzas, estrategia comercial, organización y procesos.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emprendedor Pillar */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <User className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-2">
                    2. Emprendedor
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-brand-secondary to-brand-primary rounded-full mx-auto"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-brand-light/30 to-transparent p-4 rounded-xl border-l-4 border-brand-secondary">
                    <div className="flex items-start">
                      <Heart className="text-brand-secondary mr-3 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">Acompañamiento personal</span> para liderar desde un lugar más sólido y auténtico.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-transparent to-brand-light/30 p-4 rounded-xl border-r-4 border-brand-primary">
                    <div className="flex items-start">
                      <Brain className="text-brand-primary mr-3 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">Claridad mental y emocional</span>, toma de decisiones difíciles, gestión del coraje y la confianza.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Acción Pillar */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-2">
                    3. Acción
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-brand-light/30 to-transparent p-4 rounded-xl border-l-4 border-brand-primary">
                    <div className="flex items-start">
                      <Target className="text-brand-primary mr-3 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">Aterrizamos todo en un plan concreto y ejecutable.</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-transparent to-brand-light/30 p-4 rounded-xl border-r-4 border-brand-secondary">
                    <div className="flex items-start">
                      <Settings className="text-brand-secondary mr-3 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700 leading-relaxed">
                        <span className="font-semibold">Priorización, estructura, seguimiento y hábitos.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Method Summary */}
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-8 md:p-12 rounded-3xl text-white shadow-2xl">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Por qué el Método YesuCan funciona?
              </h3>
              <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
                Porque trabajamos tanto el <span className="font-semibold">negocio</span> como al <span className="font-semibold">emprendedor</span>, 
                sabiendo que uno impacta directamente en el otro, y lo transformamos en <span className="font-semibold">acciones concretas</span>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                  <div className="text-lg opacity-90">Tasa de éxito en implementación</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">6 meses</div>
                  <div className="text-lg opacity-90">Tiempo promedio de transformación</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
                  <div className="text-lg opacity-90">Emprendedores acompañados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos aquí para ayudarte a transformar tu organización. 
              Ponte en contacto con nosotros para una consulta personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-brand-primary mb-8">
                Información de Contacto
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-brand-primary mb-2">
                      Oficina Central
                    </h4>
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
                    <h4 className="text-lg font-semibold text-brand-primary mb-2">
                      Teléfono
                    </h4>
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
                    <h4 className="text-lg font-semibold text-brand-primary mb-2">
                      Email
                    </h4>
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
                    <h4 className="text-lg font-semibold text-brand-primary mb-2">
                      Horarios de Atención
                    </h4>
                    <p className="text-gray-600">
                      Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                      Sábados: 9:00 AM - 1:00 PM<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-brand-primary mb-6">
                Solicita tu Consulta Gratuita
              </h3>
              <p className="text-gray-600 mb-8">
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
              </p>
              <ContactForm showServiceSelect={true} />
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016344736293!2d-58.36380792477158!3d-34.60373595711847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d9fba0d0c5%3A0x6c22e5e0f38bb14b!2sAlicia%20Moreau%20de%20Justo%201150%2C%20C1107AAX%20CABA%2C%20Argentina!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de YesuCan Consulting - Puerto Madero, Buenos Aires"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
