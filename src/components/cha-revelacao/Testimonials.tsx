
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface TestimonialsProps {
  onWhatsAppClick: () => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onWhatsAppClick }) => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  
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

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-white">
          VEJA O QUE<br />
          NOSSOS<br />
          CLIENTES ESTÃO<br />
          DIZENDO
        </h2>
        
        <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md">
          <Carousel 
            className="mx-auto" 
            onSelect={(api) => {
              if (typeof api === 'number') {
                setActiveTestimonialIndex(api);
              }
            }}
          >
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
              onClick={() => setActiveTestimonialIndex(index)}
              aria-label={`Depoimento ${index + 1} de ${testimonials.length}`}
              aria-current={index === activeTestimonialIndex}
            />
          ))}
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

export default Testimonials;
