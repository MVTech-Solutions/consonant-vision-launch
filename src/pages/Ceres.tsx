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
  Sprout,
  Package,
  Users,
  TrendingUp,
  FileText,
  Truck,
  Receipt,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Warehouse,
  DollarSign,
  FileSpreadsheet,
  Calculator
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import ceres1 from "@/assets/ceres-1.png";
import ceres2 from "@/assets/ceres-2.png";
import ceres3 from "@/assets/ceres-3.png";

const Ceres = () => {
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
      title: "Dashboard de Produção",
      description: "Visão geral da produção, estoque e métricas em tempo real",
      image: ceres1,
      icon: BarChart3
    },
    {
      title: "Registro de Produção",
      description: "Acompanhamento de produção por funcionário e cálculo salarial",
      image: ceres2,
      icon: TrendingUp
    },
    {
      title: "Gestão de Produtos",
      description: "Controle completo de produtos e insumos agrícolas",
      image: ceres3,
      icon: Package
    }
  ];

  const features = [
    {
      icon: Package,
      title: "Gestão de Insumos e Produtos",
      description: "Cadastro completo de insumos agrícolas, produtos e matérias-primas com controle de fornecedores e custos.",
      highlights: ["Cadastro de insumos", "Gestão de produtos", "Controle de fornecedores"]
    },
    {
      icon: Warehouse,
      title: "Controle de Estoque",
      description: "Sistema robusto de gestão de estoque com entrada, saída, movimentação e alertas de níveis mínimos.",
      highlights: ["Entrada e saída", "Inventário automático", "Alertas de estoque baixo"]
    },
    {
      icon: TrendingUp,
      title: "Produção por Funcionário",
      description: "Acompanhe a produtividade individual, defina metas e meça resultados de cada colaborador.",
      highlights: ["Produtividade individual", "Metas de produção", "Relatórios detalhados"]
    },
    {
      icon: DollarSign,
      title: "Cálculo de Recebíveis",
      description: "Sistema automatizado para calcular valores a receber baseado na produtividade de cada funcionário.",
      highlights: ["Cálculo automático", "Base na produtividade", "Relatórios financeiros"]
    },
    {
      icon: FileText,
      title: "Orçamentos e Propostas",
      description: "Crie orçamentos profissionais para clientes com geração automática de PDF personalizado.",
      highlights: ["Geração de PDF", "Templates personalizáveis", "Histórico de orçamentos"]
    },
    {
      icon: Receipt,
      title: "Emissão de Notas Fiscais",
      description: "Módulo opcional integrado para emissão de notas fiscais eletrônicas (NF-e e NFC-e).",
      highlights: ["Módulo opcional", "NF-e e NFC-e", "Integração fiscal"]
    },
    {
      icon: Truck,
      title: "Gestão de Logística",
      description: "Módulo opcional para gerenciamento completo de logística própria, rotas e entregas.",
      highlights: ["Módulo opcional", "Controle de entregas", "Rastreamento de rotas"]
    },
    {
      icon: BarChart3,
      title: "Relatórios Gerenciais",
      description: "Dashboard completo com indicadores de desempenho, produção, vendas e lucratividade.",
      highlights: ["KPIs em tempo real", "Análise de lucratividade", "Exportação de dados"]
    }
  ];

  const benefits = [
    "Redução de até 60% no tempo de gestão administrativa",
    "Controle preciso de custos de produção e insumos",
    "Aumento da transparência na produtividade",
    "Automatização de processos manuais",
    "Tomada de decisão baseada em dados reais",
    "Escalabilidade para crescimento do negócio",
    "Integração com sistemas fiscais e contábeis"
  ];

  const optionalModules = [
    {
      icon: Receipt,
      title: "Módulo Fiscal",
      description: "Emissão de NF-e, NFC-e e integração com sistemas contábeis",
      features: ["Emissão automática", "Integração SEFAZ", "Relatórios fiscais"]
    },
    {
      icon: Truck,
      title: "Módulo Logístico",
      description: "Gestão completa de frota, rotas e entregas próprias",
      features: ["Controle de frota", "Otimização de rotas", "Rastreamento GPS"]
    }
  ];

  const targetAudience = [
    {
      title: "Produtores Agrícolas",
      description: "Controle de produção, insumos e vendas"
    },
    {
      title: "Cooperativas",
      description: "Gestão de múltiplos produtores e produtos"
    },
    {
      title: "Agroindústrias",
      description: "Controle de produção e processamento"
    },
    {
      title: "Distribuidores",
      description: "Gestão de estoque e logística de produtos agrícolas"
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
              <Sparkles className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">Sistema de Gestão para o Agronegócio</span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Sprout className="h-16 w-16 text-green-400" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Ceres
              </h1>
            </div>

            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Sistema completo de gerenciamento de produção agrícola com controle de estoque, produtividade e gestão financeira
            </p>

            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Do campo ao cliente: gerencie insumos, acompanhe a produção, calcule recebíveis e emita orçamentos profissionais em uma única plataforma
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
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl"></div>
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
              Tudo que você precisa para gerenciar sua produção agrícola de forma profissional
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
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-green-600" />
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
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
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
              Navegue pelas telas do Ceres e veja como é fácil gerenciar sua produção
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
                                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                                    <IconComponent className="h-5 w-5 text-green-600" />
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
                  className="w-2 h-2 rounded-full bg-green-600/30 hover:bg-green-600/50 transition-colors"
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
                Transforme a gestão da sua produção
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                O Ceres foi desenvolvido especificamente para o agronegócio, oferecendo controle total sobre produção, estoque e finanças em uma única plataforma intuitiva.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
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
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20">
                <Calculator className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Cálculo de Produtividade
                </h3>
                <p className="text-muted-foreground">
                  Sistema inteligente que calcula automaticamente os recebíveis de cada funcionário com base na produtividade, proporcionando transparência e motivação.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
                <FileSpreadsheet className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Orçamentos Profissionais
                </h3>
                <p className="text-muted-foreground">
                  Crie propostas comerciais profissionais com geração automática de PDF personalizado, incluindo logo, dados da empresa e detalhamento completo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Modules Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Módulos Opcionais
            </h2>
            <p className="text-xl text-muted-foreground">
              Expanda as funcionalidades do Ceres de acordo com suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {optionalModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-card-foreground">
                      {module.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {module.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-3 flex-shrink-0" />
                          {feature}
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

      {/* Target Audience Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ideal para seu negócio
            </h2>
            <p className="text-xl text-muted-foreground">
              Desenvolvido especialmente para empresas do agronegócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Sprout className="h-5 w-5 text-green-600" />
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
              Pronto para revolucionar sua gestão agrícola?
            </h2>
            <p className="text-xl text-blue-100">
              Solicite uma demonstração personalizada e descubra como o Ceres pode transformar a gestão da sua produção
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

        <div className="absolute top-10 right-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
      </section>

      <Footer />
    </div>
  );
};

export default Ceres;
