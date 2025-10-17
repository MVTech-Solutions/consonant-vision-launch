import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/consonant-blue-logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Verifica se está em uma página de produto
  const isProductPage = location.pathname === "/ceres" || location.pathname === "/agenda-clin";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    if (isProductPage) {
      navigate("/");
    } else {
      scrollToSection("inicio");
    }
  };

  const handleContactClick = () => {
    if (isProductPage) {
      // Scroll para o footer na página de produto
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      setIsMenuOpen(false);
    } else {
      scrollToSection("contato");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={handleLogoClick} className="flex items-center">
              <h1 className="text-2xl font-bold text-primary flex items-center hover:opacity-80 transition-opacity">
                <img src={logo} width={30} className="mr-4"/>
                Consonant Solutions
              </h1>
            </button>
          </div>

          {/* Desktop Navigation - Oculto em páginas de produto */}
          {!isProductPage && (
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
            </nav>
          )}

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleContactClick}
              variant="hero"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile menu button - Oculto em páginas de produto */}
          {!isProductPage && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Navigation - Oculto em páginas de produto */}
        {isMenuOpen && !isProductPage && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block text-foreground hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block text-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block text-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
              <Button
                onClick={handleContactClick}
                variant="hero"
                className="w-full mt-4"
              >
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;