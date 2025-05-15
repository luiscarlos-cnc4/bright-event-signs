
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
          <Button onClick={onWhatsAppClick} className="bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-black font-bold py-4 md:py-6 px-6 md:px-8 rounded-full text-base md:text-xl flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.0172 4.9823C16.9457 2.91083 14.1548 1.75 11.2097 1.75C5.43776 1.75 0.728933 6.45883 0.728933 12.2307C0.728933 14.1437 1.21259 16.0132 2.13384 17.6748L0.645996 23.25L6.35093 21.7912C7.9447 22.629 9.7596 23.0687 11.2057 23.0687H11.2097C16.9777 23.0687 21.875 18.3598 21.875 12.5879C21.875 9.64281 20.9002 7.05377 19.0172 4.9823ZM11.2097 21.27C9.9355 21.27 8.68743 20.9607 7.58639 20.354L7.21043 20.1467L3.76445 21.0391L4.67002 17.6748L4.4291 17.2848C3.76049 16.142 3.39851 14.8183 3.39851 13.4539C3.39851 7.64342 6.9765 2.85437 11.2132 2.85437C13.6551 2.85437 15.9442 3.82489 17.6631 5.54377C19.382 7.26266 20.5686 9.55174 20.5686 12.0166C20.5651 16.8271 15.4427 21.27 11.2097 21.27ZM16.1711 14.5946C15.8984 14.4579 14.5393 13.7911 14.2892 13.697C14.0392 13.6069 13.8522 13.5579 13.6691 13.8305C13.486 14.1032 12.9614 14.728 12.8074 14.911C12.6533 15.0941 12.4953 15.1188 12.2226 14.9781C10.584 14.1739 9.47342 13.5462 8.35888 11.6867C8.06048 11.1862 8.58414 11.2216 9.07168 10.2471C9.16578 10.064 9.11629 9.90488 9.04161 9.76823C8.96693 9.63158 8.4529 8.27252 8.21596 7.72695C7.98701 7.19939 7.75409 7.27807 7.5905 7.26607C7.43639 7.25806 7.24939 7.25806 7.06636 7.25806C6.87936 7.25806 6.5793 7.33275 6.32929 7.60537C6.07928 7.878 5.36291 8.5448 5.36291 9.90388C5.36291 11.2629 6.35493 12.576 6.4961 12.7591C6.64224 12.9421 8.42006 15.6694 11.1319 16.8739C12.8768 17.5559 13.5606 17.6133 14.4213 17.4841C14.9349 17.4036 16.0359 16.8151 16.2768 16.1773C16.5178 15.5396 16.5178 14.9941 16.4431 14.8734C16.3684 14.7527 16.1853 14.686 15.9127 14.5493L16.1711 14.5946Z" fill="black"/>
            </svg>
            RESERVAR AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
