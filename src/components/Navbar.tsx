
import { useState, useEffect } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAuthClick = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: "Início", href: "#", onClick: scrollToTop },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Galeria", href: "#gallery" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 cursor-pointer" onClick={scrollToTop}>
            <img
              src="/lovable-uploads/e119c6d9-e014-4421-a7b0-c842dcccb14f.png"
              alt="Vegas Letras"
              className="h-48 sm:h-60"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={item.onClick}
                  className="text-white hover:text-vegas-gold transition-colors duration-300 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Auth Button */}
            <Button
              onClick={handleAuthClick}
              variant="outline"
              className="border-vegas-gold text-vegas-gold hover:bg-vegas-gold hover:text-black"
            >
              <LogIn className="mr-2 h-4 w-4" />
              {user ? 'Área Restrita' : 'Acessar'}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              onClick={handleAuthClick}
              variant="outline"
              size="sm"
              className="mr-4 border-vegas-gold text-vegas-gold hover:bg-vegas-gold hover:text-black"
            >
              <LogIn className="h-4 w-4" />
            </Button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                  setMobileMenuOpen(false);
                }}
                className="text-white hover:text-vegas-gold block px-3 py-2 text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
