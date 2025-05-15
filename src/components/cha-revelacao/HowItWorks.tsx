
import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HowItWorksProps {
  onWhatsAppClick: () => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onWhatsAppClick }) => {
  return (
    <section className="py-12 md:py-16 px-4 bg-black">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            RESERVAR AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
