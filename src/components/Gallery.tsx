
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Camera, PartyPopper, Heart, Gift, Briefcase, GraduationCap, Music, Baby } from "lucide-react";

type GalleryItem = {
  icon: any;
  category: string;
  images: {
    src: string;
    alt: string;
  }[];
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      icon: Baby,
      category: "Chá Revelação",
      images: [
        { 
          src: "/lovable-uploads/7b8a217f-8093-4fa5-8f45-1f1ebc06dda5.png", 
          alt: "Chá Revelação com fumaça rosa" 
        },
        { 
          src: "/lovable-uploads/6689edc8-7645-4c35-a1ce-104f97dd80ff.png", 
          alt: "Casal abraçado com fumaça rosa" 
        },
        { 
          src: "/lovable-uploads/f3e977f2-1c15-4dfe-bcec-b332f09cc8f3.png", 
          alt: "Casal em cenário romântico" 
        },
        { 
          src: "/lovable-uploads/377f045f-827a-40e7-b66a-8a7d05512a4c.png", 
          alt: "Chá Revelação com iluminação noturna" 
        },
        { 
          src: "/lovable-uploads/57b9a793-b61d-4ec3-b97c-ad24639626d0.png", 
          alt: "Decoração com letreiro iluminado" 
        },
        { 
          src: "/lovable-uploads/6a82a23d-bda8-437a-bf32-7ef5d435da0e.png", 
          alt: "Fogos de artifício no chá revelação" 
        },
        { 
          src: "/lovable-uploads/47d3e618-838d-4905-b9f0-1a4953e9d023.png", 
          alt: "Casal em cenário com vista panorâmica" 
        },
        { 
          src: "/lovable-uploads/cc6b5a53-8e55-4660-af35-2bb2d8beb76b.png", 
          alt: "Momento romântico do casal" 
        }
      ]
    },
    {
      icon: Heart,
      category: "Casamentos",
      images: [
        { src: "/gallery/image3.jpg", alt: "Casamento" },
        { src: "/gallery/image4.jpg", alt: "Casamento" }
      ]
    },
    {
      icon: PartyPopper,
      category: "Aniversários",
      images: [
        { src: "/gallery/image5.jpg", alt: "Aniversário" },
        { src: "/gallery/image6.jpg", alt: "Aniversário" }
      ]
    },
    {
      icon: Gift,
      category: "Debutantes",
      images: [
        { src: "/gallery/image1.jpg", alt: "Debutante" },
        { src: "/gallery/image2.jpg", alt: "Debutante" }
      ]
    },
    {
      icon: Briefcase,
      category: "Eventos corporativos",
      images: [
        { src: "/gallery/image3.jpg", alt: "Evento Corporativo" },
        { src: "/gallery/image4.jpg", alt: "Evento Corporativo" }
      ]
    },
    {
      icon: GraduationCap,
      category: "Formaturas",
      images: [
        { src: "/gallery/image5.jpg", alt: "Formatura" },
        { src: "/gallery/image6.jpg", alt: "Formatura" }
      ]
    },
    {
      icon: Music,
      category: "Shows",
      images: [
        { src: "/gallery/image1.jpg", alt: "Show" },
        { src: "/gallery/image2.jpg", alt: "Show" }
      ]
    }
  ];

  const filteredImages = selectedCategory
    ? galleryItems.find(item => item.category === selectedCategory)?.images
    : galleryItems.flatMap(item => item.images);

  return (
    <section id="gallery" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-vegas-black via-vegas-black/95 to-vegas-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nossa <span className="text-vegas-gold">Galeria</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Explore alguns dos nossos trabalhos mais marcantes e 
            deixe-se inspirar para o seu próximo evento.
          </p>

          {/* Categoria buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-vegas-gold text-white"
                  : "bg-white/10 hover:bg-vegas-gold/20"
              }`}
            >
              Todos
            </button>
            {galleryItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(item.category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === item.category
                    ? "bg-vegas-gold text-white"
                    : "bg-white/10 hover:bg-vegas-gold/20"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages?.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  onClick={() => setSelectedImage(image.src)}
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-vegas-black border-vegas-gold/30">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
