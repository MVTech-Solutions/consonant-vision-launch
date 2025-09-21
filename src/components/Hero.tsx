import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Consonant Solutions - Desenvolvimento de Software"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-blue-200 font-medium">
                Consonant Solutions
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Acelere seu negócio com{" "}
                <span className="text-primary">soluções sob medida</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-xl">
                Desenvolvemos softwares SaaS e soluções personalizadas que automatizam processos e aumentam a eficiência da sua empresa.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection("contato")}
                variant="hero"
                className="shadow-soft group"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline-white"
                onClick={() => scrollToSection("portfolio")}
              >
                <Play className="mr-2 h-5 w-5" />
                Conhecer Soluções
              </Button>
            </div>

          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-card border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                Desenvolvimento Ágil
              </h3>
              <p className="text-blue-100">
                Metodologias modernas para entregas rápidas e eficientes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-card border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                Automação Inteligente
              </h3>
              <p className="text-blue-100">
                Reduzimos custos operacionais através de automação estratégica.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-card border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                Suporte Contínuo
              </h3>
              <p className="text-blue-100">
                Acompanhamento técnico especializado pós-implementação.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;