
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
      images: []
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
