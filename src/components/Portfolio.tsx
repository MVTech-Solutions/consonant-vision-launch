import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Users, TrendingUp } from "lucide-react";
import portfolioImage from "@/assets/portfolio-saas.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Ceres - Sistema de Gestão Agroempresarial",
      description: "Plataforma completa para gestão de produção com módulos financeiro e recursos humanos.",
      image: portfolioImage,
      technologies: ["React", ".NET", "PostgreSQL", "AWS"],
      results: [
        "40% redução no tempo de processos",
        "Aumento de 60% na produtividade",
        "ROI de 300% em 12 meses"
      ],
      category: "SaaS"
    },
    {
      title: "Sistema de Automação Industrial",
      description: "Solução IoT para monitoramento e controle automatizado de processos industriais.",
      image: portfolioImage,
      technologies: ["React", "NestJs", "InfluxDB", "Docker"],
      results: [
        "80% redução de falhas",
        "25% economia de energia",
        "Monitoramento 24/7"
      ],
      category: "Automação"
    },
    {
      title: "E-commerce B2B Personalizado",
      description: "Plataforma de e-commerce B2B com funcionalidades avançadas de gestão de pedidos e clientes.",
      image: portfolioImage,
      technologies: ["Vue.js", "NestJs", "PostgreSQL", "Redis"],
      results: [
        "150% aumento nas vendas",
        "50% redução no tempo de pedidos",
        "Satisfação de 95% dos usuários"
      ],
      category: "E-commerce"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Nosso Portfolio
          </h2>
          <p className="text-xl text-blue-200">
            Conheça alguns dos projetos que desenvolvemos e os resultados alcançados para nossos clientes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-navy-light border-white/10 text-white overflow-hidden group hover:shadow-card transition-all duration-300">
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <Badge variant="outline" className="border-primary text-primary mb-4">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-blue-200 text-lg">{project.description}</p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Code className="h-4 w-4 mr-2" />
                        Tecnologias
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="bg-white/10 text-white border-white/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Resultados
                      </h4>
                      <ul className="space-y-2">
                         {project.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-blue-200">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {result}
                           </li>
                         ))}
                       </ul>
                    </div>

                    <Button 
                      variant="outline-white"
                      className="w-fit"
                    >
                      Ver Detalhes
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-blue-200">Projetos Entregues</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-blue-200">Taxa de Satisfação</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">5+</div>
              <div className="text-blue-200">Anos de Experiência</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="text-blue-200">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;