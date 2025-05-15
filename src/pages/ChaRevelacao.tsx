
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Sparkles } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const ChaRevelacao = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5519996951746?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20locação%20de%20letreiro%20luminoso%20para%20chá%20revelação",
      "_blank"
    );
  };

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

  const faqs = [
    {
      question: "Qual o tamanho das letras?",
      answer: "As letras possuem 1 metro de altura, já a largura varia de acordo com cada letra, mas na média fica em torno de 1 metro também."
    },
    {
      question: "Como faço para reservar o letreiro?",
      answer: "Para reservar o letreiro, basta entrar em contato conosco pelo WhatsApp e fazer sua reserva."
    },
    {
      question: "Quanto tempo antes devo reservar?",
      answer: "Recomendamos que você faça sua reserva com pelo menos 2 semanas de antecedência para garantir a disponibilidade."
    },
    {
      question: "Quanto tempo dura a locação?",
      answer: "A locação padrão é de 24 horas, mas podemos ajustar de acordo com sua necessidade."
    },
    {
      question: "Vocês entregam em qualquer lugar?",
      answer: "Entregamos em Campinas e região. Para locais mais distantes, entre em contato para verificar a disponibilidade."
    }
  ];

  const toggleFAQ = (index: number) => {
    if (activeFAQIndex === index) {
      setActiveFAQIndex(null);
    } else {
      setActiveFAQIndex(index);
    }
  };

  return (
    <div className="bg-vegas-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="/lovable-uploads/e119c6d9-e014-4421-a7b0-c842dcccb14f.png" 
            alt="Vegas Letras" 
            className="mx-auto h-15 mb-4" // Increased size by 25% from h-12 to h-15
          />
          
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Eternize o seu momento especial<br />
            com a <span className="text-[#00BFFF]">VEGAS</span> <span className="text-[#FF00FF]">LETRAS</span>
          </h1>
          
          <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto mb-6">
            Na Vegas Letras fazemos mais que locação de letreiro, nós transformamos sonhos em realizações, 
            e agora é a sua vez! Você está prestes a vivenciar um dos momentos mais emocionantes da sua vida, 
            o chá revelação. E nós estamos aqui para torná-lo inesquecível assim:
          </p>
          
          <div className="mb-8 mx-auto max-w-md">
            <AspectRatio ratio={16/9} className="bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/3fa7bc2b-9a33-4f51-b430-30e809ef94af.png" 
                alt="Casal se abraçando em chá revelação com fumaça rosa e letreiro BABY" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-black font-bold py-6 px-8 rounded-full text-xl"
          >
            <MessageCircle className="mr-2" /> RESERVAR AGORA
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-white">
            Por que escolher a<br />
            <span className="text-[#00BFFF]">VEGAS</span> <span className="text-[#FF00FF]">LETRAS?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 mb-4">
                <Sparkles 
                  className="h-20 w-auto text-[#FF00FF]"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#FF00FF]">EXCLUSIVIDADE<br />BRILHANTE</h3>
              <p className="text-white/80">
                Oferecemos letreiros luminosos exclusivos que irão adicionar um toque mágico ao seu chá revelação.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 mb-4">
                <Sparkles 
                  className="h-20 w-auto text-[#00BFFF]"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#00BFFF]">MEMÓRIAS PARA<br />A VIDA</h3>
              <p className="text-white/80">
                Crie memórias incríveis com fotos deslumbrantes junto ao nosso letreiro luminoso.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 mb-4">
                <Sparkles 
                  className="h-20 w-auto text-[#FF00FF]"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#FF00FF]">QUALIDADE<br />INIGUALÁVEL</h3>
              <p className="text-white/80">
                Garantimos a mais alta qualidade em todos os nossos produtos para garantir um momento deslumbrante.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 mb-4">
                <Sparkles 
                  className="h-20 w-auto text-[#00BFFF]"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#00BFFF]">ENTREGA E<br />MONTAGEM</h3>
              <p className="text-white/80">
                Deixe o trabalho pesado para nós. Entregamos e instalamos com perfeição.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-[#FF00FF] hover:bg-[#FF00FF]/80 text-white font-bold py-6 px-8 rounded-full text-xl"
            >
              <MessageCircle className="mr-2" /> RESERVAR AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-vegas-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-white">GALERIA</h2>
          
          <div className="relative">
            <Carousel>
              <CarouselContent>
                {Array.from({ length: 13 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <AspectRatio ratio={1} className="bg-gray-800 rounded-lg">
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-white/50">Imagem de evento com letreiro {index + 1}</p>
                        </div>
                      </AspectRatio>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-1 bg-gray-800/50 text-white" />
              <CarouselNext className="right-1 bg-gray-800/50 text-white" />
            </Carousel>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: 13 }).map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === 5 ? "bg-[#FF00FF]" : "bg-[#00BFFF]"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                        {testimonial.hearts && (
                          <div className="text-red-500 text-left text-2xl">❤️❤️❤️</div>
                        )}
                        {testimonial.emoji && (
                          <div className="text-left text-2xl">{testimonial.emoji}</div>
                        )}
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
                className={`h-3 w-3 rounded-full ${
                  index === activeTestimonialIndex ? "bg-[#FF00FF]" : "bg-[#00BFFF]"
                } cursor-pointer`}
                onClick={() => setActiveTestimonialIndex(index)}
              ></div>
            ))}
          </div>
          
          <div className="mt-16">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-black font-bold py-6 px-8 rounded-full text-xl"
            >
              <MessageCircle className="mr-2" /> RESERVAR AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-white">
            COMO<br />
            FUNCIONA?
          </h2>
          
          <div className="space-y-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 mb-6">
                <Sparkles 
                  className="h-20 w-auto text-[#FF00FF]"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#FF00FF]">1 - ESCOLHA DO<br />LETREIRO</h3>
              <p className="text-white/80 max-w-md mx-auto">
                Oferecemos letreiros luminosos exclusivos que irão adicionar um toque mágico ao seu chá revelação.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 mb-6">
                <Sparkles 
                  className="h-20 w-auto text-[#00BFFF]"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#00BFFF]">2 - FAÇA A<br />RESERVA</h3>
              <p className="text-white/80 max-w-md mx-auto">
                Faça sua reserva através do nosso whatsapp, não corra o risco de deixar para depois.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 mb-6">
                <Sparkles 
                  className="h-20 w-auto text-[#FF00FF]"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#FF00FF]">3 - ENTREGA E<br />INSTALAÇÃO</h3>
              <p className="text-white/80 max-w-md mx-auto">
                Deixe o trabalho pesado para nós. Entregamos e instalamos com perfeição.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-4 mb-6">
                <Sparkles 
                  className="h-20 w-auto text-[#00BFFF]"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-[#00BFFF]">4 - SURPREENDA-SE</h3>
              <p className="text-white/80 max-w-md mx-auto">
                Deixe a magia acontecer quando revelar o segredo do seu bebê sob a luz brilhante do nosso letreiro.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-[#FF00FF] hover:bg-[#FF00FF]/80 text-white font-bold py-6 px-8 rounded-full text-xl"
            >
              <MessageCircle className="mr-2" /> RESERVAR AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center text-white">
            DÚVIDAS<br />
            FREQUENTES
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-white/10 rounded overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={`text-xl font-medium ${index % 2 === 0 ? "text-[#FF00FF]" : "text-[#00BFFF]"}`}>
                    {faq.question}
                  </span>
                  <span className={`text-2xl ${index % 2 === 0 ? "text-[#FF00FF]" : "text-[#00BFFF]"}`}>
                    {activeFAQIndex === index ? "▼" : "▲"}
                  </span>
                </button>
                {activeFAQIndex === index && (
                  <div className="px-6 py-4 bg-gray-800/30">
                    <p className="text-white">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="/lovable-uploads/e119c6d9-e014-4421-a7b0-c842dcccb14f.png" 
            alt="Vegas Letras" 
            className="mx-auto h-20 mb-4"
          />
          <p className="text-white/70">
            Copyright © Vegas Letras – Crie Histórias Brilhantes Conosco
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ChaRevelacao;
