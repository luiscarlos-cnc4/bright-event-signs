
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
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
          VEJA O QUE<br />
          NOSSOS<br />
          CLIENTES ESTÃO<br />
          DIZENDO
        </h2>
        
        <div className="relative mx-auto max-w-md">
          <Carousel className="mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-0">
                  <Card className="bg-gray-100/10 backdrop-blur-lg border border-white/10 rounded-xl p-6 max-w-md mx-auto">
                    <div className="flex flex-col items-start space-y-4">
                      <p className="text-white text-left text-lg">{testimonial.text}</p>
                      <div className="text-gray-400 self-end">{testimonial.time}</div>
                      {testimonial.hearts && <div className="text-red-500 text-left text-2xl">❤️❤️❤️</div>}
                      {testimonial.emoji && <div className="text-left text-2xl">{testimonial.emoji}</div>}
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2 bg-gray-800/50 text-white" />
            <CarouselNext className="right-0 translate-x-1/2 bg-gray-800/50 text-white" />
          </Carousel>
        </div>
        
        <div className="flex justify-center mt-10 space-x-4">
          {testimonials.map((_, index) => (
            <div 
              key={index} 
              className={`h-3 w-3 rounded-full ${index === activeTestimonialIndex ? "bg-[#FF00FF]" : "bg-[#00BFFF]"} cursor-pointer`} 
              onClick={() => setActiveTestimonialIndex(index)}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <Button onClick={onWhatsAppClick} className="bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-black font-bold py-6 px-8 rounded-full text-xl">
            <MessageCircle className="mr-2" /> RESERVAR AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
