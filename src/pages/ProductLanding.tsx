
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductLanding = () => {
  return (
    <div className="min-h-screen bg-vegas-black">
      {/* Navbar simplificado */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/cb75d4d2-a4b3-4edb-957f-1a72e1a606f6.png" 
              alt="Vegas Letras" 
              className="h-10"
            />
            <span className="ml-2 text-vegas-gold font-bold text-xl">Vegas Letras</span>
          </Link>
          <Link to="/" className="text-white hover:text-vegas-gold transition-colors">
            Voltar ao site principal
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-vegas-black/80 to-vegas-black z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-6 animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                AMOR em <span className="text-vegas-gold">Letras Iluminadas</span>
              </h1>
              <p className="text-xl text-white/80 max-w-lg">
                Transforme seu casamento com nossas letras AMOR iluminadas. O destaque perfeito para seu dia especial.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button size="lg" className="bg-vegas-gold hover:bg-vegas-gold/80 text-vegas-black font-bold">
                  Reservar agora
                </Button>
                <Button size="lg" variant="outline" className="border-vegas-gold text-vegas-gold hover:bg-vegas-gold/20">
                  Ver galeria
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative">
                <img 
                  src="/lovable-uploads/cb75d4d2-a4b3-4edb-957f-1a72e1a606f6.png" 
                  alt="Letras AMOR" 
                  className="max-w-full rounded-lg shadow-2xl hover-glow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Por que escolher nossas letras AMOR</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-vegas-black/60 p-6 rounded-lg border border-vegas-gold/20 hover:border-vegas-gold/50 transition-all">
              <h3 className="text-vegas-gold text-xl font-bold mb-3">Design elegante</h3>
              <p className="text-white/70">Letras de alta qualidade com acabamento premium que se destacam em qualquer ambiente.</p>
            </div>
            <div className="bg-vegas-black/60 p-6 rounded-lg border border-vegas-gold/20 hover:border-vegas-gold/50 transition-all">
              <h3 className="text-vegas-gold text-xl font-bold mb-3">Iluminação perfeita</h3>
              <p className="text-white/70">LEDs de alta potência que criam o ambiente perfeito para momentos românticos.</p>
            </div>
            <div className="bg-vegas-black/60 p-6 rounded-lg border border-vegas-gold/20 hover:border-vegas-gold/50 transition-all">
              <h3 className="text-vegas-gold text-xl font-bold mb-3">Fácil instalação</h3>
              <p className="text-white/70">Nosso time cuida da montagem, instalação e retirada das letras no seu evento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada para ação */}
      <section className="py-20 bg-gradient-to-b from-vegas-black to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Pronto para reservar?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Não perca a oportunidade de ter as letras AMOR no seu casamento. Datas disponíveis estão se esgotando rapidamente.
          </p>
          <Button size="lg" className="bg-vegas-gold hover:bg-vegas-gold/80 text-vegas-black font-bold">
            Fazer reserva agora <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
      
      {/* Footer simplificado */}
      <footer className="py-8 border-t border-white/10 bg-vegas-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Vegas Letras. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/" className="text-white/60 hover:text-vegas-gold">
                Voltar ao site principal
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductLanding;
