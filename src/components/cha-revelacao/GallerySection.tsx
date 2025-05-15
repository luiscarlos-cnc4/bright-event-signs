
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const GallerySection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-vegas-black">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-white">GALERIA</h2>
        
        <div className="relative">
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 13 }).map((_, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3">
                  <div className="p-1">
                    <AspectRatio ratio={1} className="bg-gray-800 rounded-lg">
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-white/50 text-sm">Imagem de evento com letreiro {index + 1}</p>
                      </div>
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
          {Array.from({ length: 13 }).map((_, index) => (
            <div 
              key={index} 
              className={`h-1.5 md:h-2 w-1.5 md:w-2 rounded-full ${index === 5 ? "bg-[#FF00FF]" : "bg-[#00BFFF]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
