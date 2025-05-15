import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
interface HeroProps {
  onWhatsAppClick: () => void;
}
const Hero: React.FC<HeroProps> = ({
  onWhatsAppClick
}) => {
  return <section className="pt-16 md:pt-20 pb-8 md:pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <img src="/lovable-uploads/e119c6d9-e014-4421-a7b0-c842dcccb14f.png" alt="Vegas Letras" className="mx-auto h-12 md:h-15 mb-4" />
        
        <h1 className="text-2xl md:text-3xl leading-tight font-bold">
          Eternize o seu momento especial<br className="hidden sm:block" />
          com a <span className="text-[#00BFFF]">VEGAS</span> <span className="text-[#FF00FF]">LETRAS</span>
        </h1>
        
        <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-6 px-2">
          Na Vegas Letras fazemos mais que locação de letreiro, nós transformamos sonhos em realizações, 
          e agora é a sua vez! Você está prestes a vivenciar um dos momentos mais emocionantes da sua vida, 
          o chá revelação. E nós estamos aqui para torná-lo inesquecível assim:
        </p>
        
        <div className="mb-6 md:mb-8 mx-auto max-w-sm md:max-w-md">
          <AspectRatio ratio={16 / 9} className="bg-gray-200 rounded-lg overflow-hidden">
            <img src="/lovable-uploads/3fa7bc2b-9a33-4f51-b430-30e809ef94af.png" alt="Casal se abraçando em chá revelação com fumaça rosa e letreiro BABY" className="w-full rounded-lg shadow-md object-cover" />
          </AspectRatio>
        </div>
        
        <Button onClick={onWhatsAppClick} className="bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-black font-bold py-4 md:py-6 px-6 md:px-8 rounded-full text-base md:text-xl">
          <MessageCircle className="mr-2" /> RESERVAR AGORA
        </Button>
      </div>
    </section>;
};
export default Hero;