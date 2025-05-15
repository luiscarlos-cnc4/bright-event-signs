
import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HowItWorksProps {
  onWhatsAppClick: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onWhatsAppClick }) => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-white">
          COMO<br />
          FUNCIONA?
        </h2>
        
        <div className="space-y-12 md:space-y-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 mb-4 md:mb-6">
              <Sparkles className="h-16 md:h-20 w-auto text-[#FF00FF]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-[#FF00FF]">1 - ESCOLHA DO<br />LETREIRO</h3>
            <p className="text-white/80 text-sm md:text-base max-w-md mx-auto">
              Oferecemos letreiros luminosos exclusivos que irão adicionar um toque mágico ao seu chá revelação.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 mb-4 md:mb-6">
              <Sparkles className="h-16 md:h-20 w-auto text-[#00BFFF]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-[#00BFFF]">2 - FAÇA A<br />RESERVA</h3>
            <p className="text-white/80 text-sm md:text-base max-w-md mx-auto">
              Faça sua reserva através do nosso whatsapp, não corra o risco de deixar para depois.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 mb-4 md:mb-6">
              <Sparkles className="h-16 md:h-20 w-auto text-[#FF00FF]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-[#FF00FF]">3 - ENTREGA E<br />INSTALAÇÃO</h3>
            <p className="text-white/80 text-sm md:text-base max-w-md mx-auto">
              Deixe o trabalho pesado para nós. Entregamos e instalamos com perfeição.
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-4 mb-4 md:mb-6">
              <Sparkles className="h-16 md:h-20 w-auto text-[#00BFFF]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-[#00BFFF]">4 - SURPREENDA-SE</h3>
            <p className="text-white/80 text-sm md:text-base max-w-md mx-auto">
              Deixe a magia acontecer quando revelar o segredo do seu bebê sob a luz brilhante do nosso letreiro.
            </p>
          </div>
        </div>
        
        <div className="mt-10 md:mt-16">
          <Button onClick={onWhatsAppClick} className="bg-[#FF00FF] hover:bg-[#FF00FF]/80 text-white font-bold py-4 md:py-6 px-6 md:px-8 rounded-full text-base md:text-xl">
            <MessageCircle className="mr-2" /> RESERVAR AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
