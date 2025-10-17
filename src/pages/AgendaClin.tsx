import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Calendar,
  MessageSquare,
  Users,
  BarChart3,
  Bot,
  Clock,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import agendaClin1 from "@/assets/agenda-clin-1.png";
import agendaClin2 from "@/assets/agenda-clin-2.png";
import agendaClin3 from "@/assets/agenda-clin-3.png";

const AgendaClin = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate("/");
    // Aguarda a navegação e então rola para o contato
    setTimeout(() => {
      const element = document.getElementById("contato");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const screenshots = [
    {
      title: "Dashboard Principal",
      description: "Visão geral de agendamentos, solicitações e profissionais ativos",
      image: agendaClin1,
      icon: BarChart3
    },
    {
      title: "Agendamento via WhatsApp",
      description: "Interface de conversação com IA para agendamentos automáticos",
      image: agendaClin2,
      icon: MessageSquare
    },
    {
      title: "Gestão de Profissionais",
      description: "Cadastro e gerenciamento de agendas dos profissionais",
      image: agendaClin3,
      icon: Users
    }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Agendamento via WhatsApp",
      description: "Sistema automatizado com IA para receber e processar solicitações de agendamento diretamente pelo WhatsApp.",
      highlights: ["Resposta 24/7", "IA integrada", "Confirmação automática"]
    },
    {
      icon: BarChart3,
      title: "Dashboard Inteligente",
      description: "Visualize em tempo real todas as solicitações de agendamento, agendamentos do dia e status dos profissionais.",
      highlights: ["Visão em tempo real", "Relatórios personalizados", "Métricas de performance"]
    },
    {
      icon: Users,
      title: "Gestão de Profissionais",
      description: "Cadastre profissionais, configure suas agendas, horários de atendimento e especialidades de forma simples.",
      highlights: ["Múltiplos profissionais", "Agendas personalizadas", "Controle de disponibilidade"]
    },
    {
      icon: Monitor,
      title: "Monitor de Chamadas",
      description: "Sistema de chamada de pacientes para salas de atendimento com display em tempo real.",
      highlights: ["Display digital", "Ordem automática", "Notificações sonoras"]
    },
    {
      icon: Calendar,
      title: "Gestão de Agendas",
      description: "Controle completo de horários, bloqueios, férias e disponibilidade de cada profissional.",
      highlights: ["Bloqueio de horários", "Gestão de férias", "Recorrência de eventos"]
    },
    {
      icon: Clock,
      title: "Lembretes Automáticos",
      description: "Envio automático de lembretes por WhatsApp para reduzir faltas e otimizar a agenda.",
      highlights: ["WhatsApp automático", "Confirmação de presença", "Redução de no-show"]
    }
  ];

  const benefits = [
    "Redução de até 70% no tempo gasto com agendamentos",
    "Diminuição de faltas com lembretes automáticos",
    "Atendimento 24/7 sem necessidade de recepcionista",
    "Organização completa da rotina da clínica",
    "Relatórios gerenciais para tomada de decisão",
    "Integração com WhatsApp Business"
  ];

  const targetAudience = [
    {
      title: "Clínicas de Fisioterapia",
      description: "Gestão eficiente de múltiplos fisioterapeutas e especialidades"
    },
    {
      title: "Consultórios de Psicologia",
      description: "Controle de sessões e agendamento simplificado"
    },
    {
      title: "Clínicas Odontológicas",
      description: "Organização de procedimentos e agenda de dentistas"
    },
    {
      title: "Clínicas Multidisciplinares",
      description: "Gestão centralizada de diversos profissionais de saúde"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Solução SaaS Completa</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              AgendaClin
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Sistema completo de gestão de agendas para clínicas e instituições de saúde de pequeno e médio porte
            </p>

            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Automatize seus agendamentos com IA via WhatsApp, gerencie profissionais e otimize o fluxo de atendimento da sua clínica
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                variant="hero"
                className="shadow-soft group"
              >
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline-white"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer Funcionalidades
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Funcionalidades Principais
            </h2>
            <p className="text-xl text-muted-foreground">
              Tudo que você precisa para gerenciar sua clínica de forma profissional e eficiente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
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
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screenshots Carousel Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Conheça o Sistema
            </h2>
            <p className="text-xl text-muted-foreground">
              Navegue pelas telas do AgendaClin e veja como é fácil gerenciar sua clínica
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {screenshots.map((screenshot, index) => {
                  const IconComponent = screenshot.icon;
                  return (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="border-2">
                          <CardContent className="p-0">
                            {/* Screenshot real do sistema */}
                            <div className="relative aspect-video rounded-t-lg overflow-hidden bg-gray-100">
                              <img
                                src={screenshot.image}
                                alt={screenshot.title}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                            <div className="p-6 bg-card">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <IconComponent className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-card-foreground">
                                      {screenshot.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                      {screenshot.description}
                                    </p>
                                  </div>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {index + 1} / {screenshots.length}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2 mt-8">
              {screenshots.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-primary/30 hover:bg-primary/50 transition-colors"
                  aria-label={`Ir para tela ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Transforme a gestão da sua clínica
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                O AgendaClin foi desenvolvido especificamente para clínicas de pequeno e médio porte que buscam profissionalizar seus processos sem complicação.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="group"
                >
                  Quero conhecer melhor
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl p-8 border border-primary/20">
                <Bot className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Agendamento com IA
                </h3>
                <p className="text-muted-foreground">
                  Nossa inteligência artificial interpreta mensagens dos pacientes, identifica intenções e agenda automaticamente, conversando de forma natural via WhatsApp.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
                <Monitor className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Sistema de Chamada
                </h3>
                <p className="text-muted-foreground">
                  Display profissional para chamada de pacientes, melhorando a organização da recepção e a experiência dos pacientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ideal para sua clínica
            </h2>
            <p className="text-xl text-muted-foreground">
              Desenvolvido especialmente para instituições de saúde de pequeno e médio porte
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Pronto para modernizar sua clínica?
            </h2>
            <p className="text-xl text-blue-100">
              Solicite uma demonstração personalizada e descubra como o AgendaClin pode transformar a gestão da sua clínica
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={scrollToContact}
                variant="hero"
                className="shadow-soft group"
              >
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
      </section>

      <Footer />
    </div>
  );
};

export default AgendaClin;
