
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  showServiceSelect?: boolean;
  defaultService?: string;
}

const ContactForm = ({ showServiceSelect = false, defaultService }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    country: '',
    email: '',
    service: defaultService || '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });

    // Reset form
    setFormData({
      name: '',
      company: '',
      phone: '',
      country: '',
      email: '',
      service: defaultService || '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          required
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Nombre"
          className="w-full"
        />
      </div>

      <div>
        <Input
          type="text"
          value={formData.company}
          onChange={(e) => handleChange('company', e.target.value)}
          placeholder="Empresa / Organización"
          className="w-full"
        />
      </div>

      <div>
        <Input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder="Teléfono"
          className="w-full"
        />
      </div>

      <div>
        <Input
          type="text"
          value={formData.country}
          onChange={(e) => handleChange('country', e.target.value)}
          placeholder="País"
          className="w-full"
        />
      </div>

      <div>
        <Input
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="Dirección de correo electrónico"
          className="w-full"
        />
      </div>

      {/* {showServiceSelect && (
        <div>
          <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Servicio de Interés" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="estrategia">Consultoría Estratégica</SelectItem>
              <SelectItem value="transformacion">Transformación Digital</SelectItem>
              <SelectItem value="gestion">Gestión del Cambio</SelectItem>
              <SelectItem value="optimizacion">Optimización de Procesos</SelectItem>
              <SelectItem value="liderazgo">Desarrollo de Liderazgo</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )} */}

      <div>
        <Textarea
          required
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Mensaje"
          rows={5}
          className="w-full resize-none"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-brand-secondary hover:bg-brand-secondary/90 text-white"
      >
        Enviar Mensaje
      </Button>
    </form>
  );
};

export default ContactForm;
