import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code2, 
  Settings, 
  Smartphone, 
  Cloud,
  ShieldCheck,
  Headphones
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento SaaS",
      description: "Criamos plataformas SaaS escaláveis e robustas que crescem junto com seu negócio.",
      features: ["Arquitetura escalável", "Multi-tenancy", "API REST/GraphQL", "Integração com terceiros"]
    },
    {
      icon: Settings,
      title: "Automação de Processos",
      description: "Automatizamos workflows empresariais para aumentar produtividade e reduzir erros.",
      features: ["Workflows customizados", "Integrações", "RPA", "Business Intelligence"]
    },
    {
      icon: Smartphone,
      title: "Aplicações Web Personalizadas",
      description: "Desenvolvemos sistemas sob medida alinhados às necessidades específicas da sua empresa.",
      features: ["React/Vue.js", "Progressive Web Apps", "Design responsivo", "UX/UI otimizada"]
    },
    {
      icon: Cloud,
      title: "Consultoria SaaS",
      description: "Orientamos sua transformação digital com estratégias tecnológicas eficazes.",
      features: ["Análise de requisitos", "Arquitetura de soluções", "Cloud strategy", "Digital transformation"]
    },
    {
      icon: ShieldCheck,
      title: "Auditoria e Segurança",
      description: "Garantimos a segurança e conformidade dos seus sistemas e dados.",
      features: ["Code review", "Testes de segurança", "LGPD compliance", "Backup e recovery"]
    },
    {
      icon: Headphones,
      title: "Suporte e Manutenção",
      description: "Oferecemos suporte técnico especializado e manutenção contínua dos sistemas.",
      features: ["Suporte 24/7", "Monitoramento", "Updates automáticos", "Treinamento de equipes"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground">
            Oferecemos soluções completas em desenvolvimento de software, desde a concepção até a implementação e suporte contínuo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border bg-card"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Por que escolher a Consonant Solutions?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Experiência Comprovada</h4>
              <p className="text-muted-foreground">
                Mais de 5 anos desenvolvendo soluções inovadoras para empresas de diversos segmentos.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Tecnologia Avançada</h4>
              <p className="text-muted-foreground">
                Utilizamos as melhores práticas e tecnologias mais modernas do mercado.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground">Suporte Dedicado</h4>
              <p className="text-muted-foreground">
                Acompanhamento completo desde o desenvolvimento até a manutenção dos sistemas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;