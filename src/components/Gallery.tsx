
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
          src: "/lovable-uploads/55344fea-61ef-4f6f-9527-4ab7563f144e.png",
          alt: "Foto do chá revelação"
        },
        {
          src: "/lovable-uploads/44811dbe-a263-41ae-8730-c0b38751f16d.png",
          alt: "Foto do chá revelação"
        },
        {
          src: "/lovable-uploads/2ffbbbeb-3ac3-41a7-92f2-f9515e60687f.png",
          alt: "Foto do chá revelação"
        },
        {
          src: "/lovable-uploads/7c70b920-a0c6-4835-96ab-e41d5c05a24a.png",
          alt: "Foto do chá revelação"
        },
        {
          src: "/lovable-uploads/0331a72a-4e6c-4d8c-8c2f-407b0754f651.png",
          alt: "Foto do chá revelação"
        },
        {
          src: "/lovable-uploads/a7353c08-24e2-47da-aea1-b23a27647165.png",
          alt: "Foto do chá revelação"
        },
        {
          src: "/lovable-uploads/b3666a72-0627-4437-b906-1eb968cc2e2b.png",
          alt: "Foto do chá revelação"
        },
        {
          src: "/lovable-uploads/281c7142-e4d8-4613-b8ea-d6ea337c6315.png",
          alt: "Foto do chá revelação"
        },
        {
          src: "/lovable-uploads/9c6e56ad-5e93-40d9-8bc2-6686cbf8157b.png",
          alt: "Foto do chá revelação"
        },
        {
          src: "/lovable-uploads/345e4999-e96f-4510-a427-716c6ea7a53b.png",
          alt: "Foto do chá revelação"
        },
        {
          src: "/lovable-uploads/5d56ecbe-19ea-40e6-b904-45c1c707ca4b.png",
          alt: "Foto do chá revelação"
        }
      ]
    },
    {
      icon: Heart,
      category: "Casamentos",
      images: []
    },
    {
      icon: PartyPopper,
      category: "Aniversários",
      images: []
    },
    {
      icon: Gift,
      category: "Debutantes",
      images: []
    },
    {
      icon: Briefcase,
      category: "Eventos corporativos",
      images: []
    },
    {
      icon: GraduationCap,
      category: "Formaturas",
      images: []
    },
    {
      icon: Music,
      category: "Shows",
      images: []
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
