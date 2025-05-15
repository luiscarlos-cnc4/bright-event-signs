
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const GallerySection: React.FC = () => {
  return (
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
              className={`h-2 w-2 rounded-full ${index === 5 ? "bg-[#FF00FF]" : "bg-[#00BFFF]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
