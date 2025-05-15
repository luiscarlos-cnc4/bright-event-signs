
import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface FeaturesProps {
  onWhatsAppClick: () => void;
}

const Features: React.FC<FeaturesProps> = ({ onWhatsAppClick }) => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-white">
          Por que escolher a<br />
          <span className="text-[#00BFFF]">VEGAS</span> <span className="text-[#FF00FF]">LETRAS?</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 mb-4">
              <Sparkles className="h-16 w-auto text-[#FF00FF]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#FF00FF]">EXCLUSIVIDADE<br />BRILHANTE</h3>
            <p className="text-white/80 text-sm md:text-base">
              Oferecemos letreiros luminosos exclusivos que irão adicionar um toque mágico ao seu chá revelação.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 mb-4">
              <Sparkles className="h-16 w-auto text-[#00BFFF]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#00BFFF]">MEMÓRIAS PARA<br />A VIDA</h3>
            <p className="text-white/80 text-sm md:text-base">
              Crie memórias incríveis com fotos deslumbrantes junto ao nosso letreiro luminoso.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 mb-4">
              <Sparkles className="h-16 w-auto text-[#FF00FF]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#FF00FF]">QUALIDADE<br />INIGUALÁVEL</h3>
            <p className="text-white/80 text-sm md:text-base">
              Garantimos a mais alta qualidade em todos os nossos produtos para garantir um momento deslumbrante.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 mb-4">
              <Sparkles className="h-16 w-auto text-[#00BFFF]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#00BFFF]">ENTREGA E<br />MONTAGEM</h3>
            <p className="text-white/80 text-sm md:text-base">
              Deixe o trabalho pesado para nós. Entregamos e instalamos com perfeição.
            </p>
          </div>
        </div>
        
        <div className="mt-10 md:mt-16">
          <Button onClick={onWhatsAppClick} className="bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-black font-bold py-4 md:py-6 px-6 md:px-8 rounded-full text-base md:text-xl">
            <MessageCircle className="mr-2" /> RESERVAR AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
