
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/c5c1438d-08c7-4654-8663-5153a7e6ad92.png",
      alt: "Casal em frente ao letreiro OH BABY com balões azuis e rosas"
    },
    {
      src: "/lovable-uploads/5b470d5c-f8fc-4d82-8521-f7ff5cda1621.png",
      alt: "Casal ao lado do letreiro OH BABY com balões coloridos"
    },
    {
      src: "/lovable-uploads/6a8acec0-9396-484f-b107-db3214be45c8.png",
      alt: "Casal abraçado em frente ao letreiro BABY"
    },
    {
      src: "/lovable-uploads/b3629dca-96b2-490d-bb51-d0cf486f4b1f.png",
      alt: "Casal se beijando com fumaça azul e letreiro OH BABY"
    },
    {
      src: "/lovable-uploads/2de9fa90-4ff3-48ca-9514-04ea2e26471f.png",
      alt: "Revelação com fumaça azul e letreiro OH BABY"
    },
    {
      src: "/lovable-uploads/346c130f-9231-4b14-9f4d-870966437f07.png",
      alt: "Casal em deck de madeira com letreiro BOY GIRL iluminado"
    },
    {
      src: "/lovable-uploads/b9da9970-a5be-4a45-bd5f-a9e85653522e.png",
      alt: "Gestante com letreiro BABY iluminado"
    },
    {
      src: "/lovable-uploads/3bf270f5-7599-48f9-b1fd-722d9c1fe570.png",
      alt: "Casal em cenário com pérgula e letreiro BABY"
    },
    {
      src: "/lovable-uploads/c3c9edea-3193-487c-973c-c12a038c9ccb.png",
      alt: "Casal se beijando à noite com letreiro BABY iluminado"
    },
    {
      src: "/lovable-uploads/30855321-c07d-4256-9aa2-dd128413460a.png",
      alt: "Casal com gestante e letreiro BABY iluminado à noite"
    },
    {
      src: "/lovable-uploads/87e78751-e38b-48a1-83af-438ad549a2a2.png",
      alt: "Casal se abraçando com fumaça rosa e letreiro BABY"
    },
    {
      src: "/lovable-uploads/1de206dd-21be-4bef-bda8-17a18535b4fb.png",
      alt: "Casal se abraçando em meio à fumaça rosa e letreiro BABY"
    },
    {
      src: "/lovable-uploads/3c2913f4-96f7-4de7-ab1f-29bc5db125ae.png",
      alt: "Casal segurando as mãos com fumaça rosa e letreiro BABY"
    },
    {
      src: "/lovable-uploads/5666b433-cf6b-485c-b49f-6959fc565093.png",
      alt: "Casal abraçado em frente à piscina com letreiro BOY GIRL e fumaça azul"
    },
    {
      src: "/lovable-uploads/54fd1967-0bf8-48e1-8775-9a11fcce756d.png",
      alt: "Casal ao lado de piscina com letreiro BOY GIRL"
    },
    {
      src: "/lovable-uploads/09875dc1-6482-436e-81d4-5dd9160181c7.png",
      alt: "Casal se abraçando com fumaça e confete azul e letreiro BOY GIRL"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-12 md:py-16 px-4 bg-vegas-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-white">GALERIA</h2>
        
        <div className="relative">
          <Carousel 
            className="w-full"
            onSelect={(api) => {
              if (typeof api === 'number') {
                handleSelect(api);
              }
            }}
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
                  <div className="p-1">
                    <AspectRatio ratio={1} className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onClick={() => openImage(image.src)}
                      />
                    </AspectRatio>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex left-1 bg-gray-800/50 text-white" />
            <CarouselNext className="hidden sm:flex right-1 bg-gray-800/50 text-white" />
          </Carousel>
        </div>
        
        <div className="flex justify-center mt-4 md:mt-6 space-x-1 md:space-x-2 overflow-x-auto py-2">
          {galleryImages.map((_, index) => (
            <div 
              key={index} 
              className={`h-1.5 md:h-2 w-1.5 md:w-2 rounded-full ${index === activeIndex ? "bg-[#FF00FF]" : "bg-[#00BFFF]"}`}
              onClick={() => setActiveIndex(index)}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveIndex(index);
                }
              }}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={closeImage}>
        <DialogContent className="max-w-4xl bg-vegas-black border-vegas-gold/30">
          <DialogTitle>
            <VisuallyHidden>Imagem ampliada do chá revelação</VisuallyHidden>
          </DialogTitle>
          {selectedImage && (
            <div aria-describedby="image-description">
              <img
                src={selectedImage}
                alt="Imagem ampliada do chá revelação"
                className="w-full h-auto"
              />
              <div id="image-description" className="sr-only">
                Visualização ampliada da foto de chá de revelação com letreiros iluminados
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;
