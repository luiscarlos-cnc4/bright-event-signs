
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5519996951746?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20locação%20de%20letreiro%20luminoso",
      "_blank"
    );
  };

  return (
    <footer className="bg-vegas-black border-t border-vegas-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/lovable-uploads/3de75a86-eca6-4b71-948e-cd1132d6fac2.png"
              alt="Vegas Letras"
              className="h-12 mb-4"
            />
            <p className="text-white/70">
              Transformando momentos especiais em memórias luminosas e inesquecíveis.
            </p>
          </div>

          <div>
            <h3 className="text-vegas-gold font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-vegas-gold transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-vegas-gold transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-vegas-gold transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-vegas-gold transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="text-vegas-gold hover:text-white transition-colors"
                >
                  Solicitar Orçamento
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-vegas-gold font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1ADsyc7efA/?mibextid=wwXIfr"
                className="bg-vegas-black hover:bg-vegas-gold/20 text-vegas-gold p-2 rounded-full transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/vegasletras?igsh=MTB5aXF6YWM1ejFoMw=="
                className="bg-vegas-black hover:bg-vegas-gold/20 text-vegas-gold p-2 rounded-full transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-vegas-gold/20 mt-8 pt-8 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Vegas Letras. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
