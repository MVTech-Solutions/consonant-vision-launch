import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Trophy, Target } from "lucide-react";
import teamImage from "@/assets/team-image.jpg";

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const values = [
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalhamos em parceria próxima com nossos clientes"
    },
    {
      icon: Trophy,
      title: "Excelência",
      description: "Buscamos sempre a melhor qualidade em tudo que fazemos"
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Focamos em gerar valor real para o negócio dos clientes"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit border-primary text-primary">
                Sobre a Consonant Solutions
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Transformando ideias em soluções tecnológicas inovadoras
              </h2>
              <p className="text-lg text-muted-foreground">
                Somos uma empresa especializada em desenvolvimento de software, com foco em 
                soluções SaaS e automação empresarial. Nossa missão é acelerar a transformação 
                digital das empresas através de tecnologia de ponta.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expertise Técnica</h4>
                  <p className="text-muted-foreground">
                    Domínio completo das tecnologias mais modernas do mercado, incluindo 
                    React, Node.js, Python, AWS e muito mais.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Abordagem Consultiva</h4>
                  <p className="text-muted-foreground">
                    Não apenas desenvolvemos software, mas atuamos como consultores 
                    estratégicos na jornada de transformação digital.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Resultados Mensuráveis</h4>
                  <p className="text-muted-foreground">
                    Focamos em entregar soluções que geram valor mensurável 
                    e impacto positivo nos negócios dos nossos clientes.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                onClick={() => scrollToSection("portfolio")}
                className="bg-primary hover:bg-primary-dark text-primary-foreground group"
              >
                Ver Nosso Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-card">
              <img 
                src={teamImage} 
                alt="Equipe Consonant Solutions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-6 shadow-card">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Projetos entregues no prazo</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-12">
            Nossos Valores
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;