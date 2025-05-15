
import React from 'react';
import { MessageCircle } from 'lucide-react';
interface HeroProps {
  onWhatsAppClick: () => void;
}
const Hero: React.FC<HeroProps> = ({
  onWhatsAppClick
}) => {
  return <section className="min-h-screen bg-black text-white flex flex-col items-center py-0 px-0">
      <div className="max-w-4xl mx-auto text-center">
        <img src="/lovable-uploads/e119c6d9-e014-4421-a7b0-c842dcccb14f.png" alt="Vegas Letras" className="mx-auto h-12 md:h-16 mb-4" />
        
        <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
          Eternize o seu<br />
          momento especial<br />
          com a <span className="text-[#00BFFF]">VEGAS</span> <span className="text-[#FF00FF]">LETRAS</span>
        </h1>
        
        <p className="text-white/80 text-sm md:text-base max-w-3xl mx-auto mb-6 px-2">
          Na Vegas Letras fazemos mais que locação de letreiro, nós transformamos sonhos em realizações, 
          e agora é a sua vez! Você está prestes a vivenciar um dos momentos mais emocionantes da sua vida, 
          o chá revelação. E nós estamos aqui para torná-lo inesquecível assim:
        </p>
        
        <div className="mb-8 mx-auto max-w-md">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <img src="/lovable-uploads/3fa7bc2b-9a33-4f51-b430-30e809ef94af.png" alt="Casal se abraçando em chá revelação com fumaça rosa e letreiro BABY" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <button onClick={onWhatsAppClick} className="bg-[#e4257e] hover:bg-[#e4257e]/90 text-white font-bold py-3 px-8 rounded-full text-lg flex items-center justify-center gap-2 mx-auto" aria-label="Reservar agora pelo WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          RESERVAR AGORA
        </button>
      </div>
    </section>;
};
export default Hero;
