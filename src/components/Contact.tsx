import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Select } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";
import { SelectGroup } from "@radix-ui/react-select";
import { SubjectSelect } from "./SubjectSelect";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const sendMessage = () => {
    const { name, company, subject, message } = formData;
    if (!name || !subject || !message) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, preencha todos os campos obrigatórios.",
      });
      return;
    }

    const fullMessage = `Olá, meu nome é ${name}. ${company ? `Represento a empresa ${company}. ` : ""}\nGostaria de falar sobre: ${subject}. \nMensagem: ${message}`;
    // Logic to send message via WhatsApp or other means
    window.open(`https://api.whatsapp.com/send?phone=5573981999231&text=${fullMessage}`, '_blank');
    
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });

    // Reset form
    setFormData({
      name: "",
      company: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@consonantsolutions.com.br",
      description: "Resposta em até 24h"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (73) 98199-9231",
      description: "Seg-Sex: 9h às 18h"
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Vitória da Conquista, BA",
      description: "Atendimento presencial ou remoto"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "09:00 - 18:00",
      description: "Segunda a Sexta-feira"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <section id="contato" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Vamos conversar sobre seu projeto?
          </h2>
          <p className="text-xl text-muted-foreground">
            Entre em contato conosco e descubra como podemos acelerar a transformação digital da sua empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Solicitar Orçamento</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e nossa equipe entrará em contato em breve.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <SelectGroup>
                      <Label htmlFor="subject">Assunto *</Label>
                      <SubjectSelect
                        value={formData.subject}
                        onChange={(val) => handleSelectChange("subject", val)}
                      />
                    </SelectGroup>
                    
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva seu projeto ou necessidade..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    variant="hero"
                    className="w-full group"
                    onClick={sendMessage}
                  >
                    Enviar Mensagem
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-foreground">{info.value}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Nos siga nas redes</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5 text-primary" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;