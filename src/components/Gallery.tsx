
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
      images: [
        {
          src: "/lovable-uploads/5196f240-0585-46d2-a665-98805eea33f3.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/0bd45d6c-2112-4694-b2b0-9de2f615ef77.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/8166f45c-cd9b-413a-9793-00cc6305dc07.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/6dba2568-29d7-412b-ab1b-48b270ada891.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/284b240a-71fa-44aa-81ed-96372288e430.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/ac541c2b-456c-41af-968c-b94643a605fd.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/5f706823-ca6a-4d5d-a514-4ebcedc37f7e.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/c02a2821-137d-41b6-a82d-1cde66429e61.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/869e6a85-16e8-4a50-b3de-42aedbabe974.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/f89e48a4-5773-4a35-ad3e-3fd8833ca75a.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/ad96821b-4386-40a8-8cd1-3422d6a7d675.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/dd03a7ce-01ca-4746-ac41-c88a0e04ee6e.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/992e2ca3-e472-47f9-a739-6582b259bce0.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/3faba2a0-0209-4dd8-9800-4d04b364054f.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/806ab05c-6874-4283-b7d7-174eb81330f7.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/ca61a741-cd8e-4356-bc42-9ca1bb56943e.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/5cb395c9-f081-4be1-a703-01906fe095c6.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/9367eec4-e0f4-458c-b82e-7b20bbfee9e6.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/21d3f944-de1d-4b95-92cb-706a8bf295ed.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/8d924ab0-cc18-47c5-8813-9b29e46dc41c.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/3975849e-2c36-45b0-972b-f7514438c2a9.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/a6caead3-cf4f-4210-94e8-82c7c7c19045.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/bf78e0e9-76d6-4646-adef-c1f7de94e830.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/c7571842-ed08-41de-949f-09a470c13163.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/1fe57e6b-f3a2-4460-8c67-e34d8bd1ff62.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/51b42fb2-f3e4-407a-b006-1361fa16b73b.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/7e7fa7cc-a67c-47a9-a7a6-a153c03d43f8.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/1a7df0c8-6e06-4174-9171-66caff66ee88.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/c83545b1-aac5-48bd-a98b-9b6f31d16a5f.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/5aa16d67-5f0d-43ac-8e6e-311ef9cf76f5.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/d551d236-4c05-4fc5-9426-c139bd7331a9.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/d47b08af-6c33-42cb-9fa6-34168818f1d2.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/e44a501e-a634-46a1-afd4-5fb4e816489a.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/1f114041-ac7d-457a-a2a9-1f3c3dd3fa93.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/2a1c0c86-fef7-4b3e-bd0c-4de780103787.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/4cdca709-00b9-4a38-a0a1-941b3783feed.png",
          alt: "Foto de casamento"
        },
        {
          src: "/lovable-uploads/c4653e2f-6f33-4194-8277-d294f7674862.png",
          alt: "Foto de casamento"
        }
      ]
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
