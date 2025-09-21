import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Github, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    services: [
      { name: "Desenvolvimento SaaS", href: "#servicos" },
      { name: "Automação de Processos", href: "#servicos" },
      { name: "Aplicações Web", href: "#servicos" },
      { name: "Consultoria", href: "#servicos" }
    ],
    company: [
      { name: "Sobre Nós", href: "#sobre" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contato", href: "#contato" }
    ],
    social: [
      { icon: Linkedin, href: "#", label: "LinkedIn" },
      { icon: Github, href: "#", label: "GitHub" },
      { icon: MessageSquare, href: "#", label: "WhatsApp" }
    ]
  };

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Consonant Solutions
              </h3>
              <p className="text-blue-200 text-lg leading-relaxed">
                Desenvolvemos soluções tecnológicas inovadoras que aceleram 
                a transformação digital das empresas, com foco em automação 
                e eficiência operacional.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-blue-200">contato@consonantsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-blue-200">+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-blue-200">São Paulo, SP - Brasil</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 text-blue-200 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("servicos")}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.replace("#", ""))}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-blue-200 text-sm">
            © {currentYear} Consonant Solutions. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;