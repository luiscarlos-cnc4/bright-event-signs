
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel/carousel-context";

const Testimonials: React.FC = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  
  const testimonials = [
    {
      text: "Todo mundo amou o letreiro, nós amamos o letreiro e virou atração",
      time: "20:44",
      hearts: true
    }, 
    {
      text: "Ficou incrível! Todos os convidados ficaram impressionados com o letreiro luminoso!",
      time: "18:23",
      emoji: "🤩🤩🤩"
    }, 
    {
      text: "Vocês foram super profissionais! Entrega pontual e montagem perfeita.",
      time: "14:52"
    }, 
    {
      text: "Com certeza vou recomendar para todos os meus amigos!",
      time: "14:53"
    }
  ];

  React.useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setActiveTestimonialIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-white">
          VEJA O QUE<br />
          NOSSOS<br />
          CLIENTES ESTÃO<br />
          DIZENDO
        </h2>
        
        <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md">
          <Carousel className="mx-auto" setApi={setApi}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-0">
                  <Card className="bg-gray-100/10 backdrop-blur-lg border border-white/10 rounded-xl p-4 md:p-6 mx-auto">
                    <div className="flex flex-col items-start space-y-3 md:space-y-4">
                      <p className="text-white text-left text-base md:text-lg">{testimonial.text}</p>
                      <div className="text-gray-400 self-end text-sm">{testimonial.time}</div>
                      {testimonial.hearts && <div className="text-red-500 text-left text-xl md:text-2xl">❤️❤️❤️</div>}
                      {testimonial.emoji && <div className="text-left text-xl md:text-2xl">{testimonial.emoji}</div>}
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex left-0 -translate-x-1/2 bg-gray-800/50 text-white" />
            <CarouselNext className="hidden sm:flex right-0 translate-x-1/2 bg-gray-800/50 text-white" />
          </Carousel>
        </div>
        
        <div className="flex justify-center mt-6 md:mt-10 space-x-2 md:space-x-4">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`h-2 md:h-3 w-2 md:w-3 rounded-full ${index === activeTestimonialIndex ? "bg-[#FF00FF]" : "bg-[#00BFFF]"}`} 
              onClick={() => handleDotClick(index)}
              aria-label={`Depoimento ${index + 1} de ${testimonials.length}`}
              aria-current={index === activeTestimonialIndex}
            />
          ))}
        </div>
        
        <div className="mt-10 md:mt-16">
          <a
            href="https://wa.me/5519996951746?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento..."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-white font-bold py-4 px-8 rounded-full text-lg flex items-center justify-center gap-2 mx-auto inline-flex w-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            RESERVAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
