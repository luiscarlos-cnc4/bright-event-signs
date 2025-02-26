
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
      images: [
        {
          src: "/lovable-uploads/7f05d47d-292e-4aca-9cf1-609054e5fe3e.png",
          alt: "Foto de aniversário"
        },
        {
          src: "/lovable-uploads/ae578501-a7e6-4fe7-b179-6adabee36755.png",
          alt: "Foto de aniversário"
        },
        {
          src: "/lovable-uploads/ed5c6e8c-ecef-435a-b048-159130856df4.png",
          alt: "Foto de aniversário"
        },
        {
          src: "/lovable-uploads/b5598257-ad65-4587-bcbd-b13801406523.png",
          alt: "Foto de aniversário"
        },
        {
          src: "/lovable-uploads/4144f56a-526f-483d-a132-98177028e08a.png",
          alt: "Foto de aniversário"
        },
        {
          src: "/lovable-uploads/098d6897-b260-48c3-8459-61744f9894d1.png",
          alt: "Foto de aniversário"
        },
        {
          src: "/lovable-uploads/4415e432-f55e-48b8-9d76-3d6f905c7cad.png",
          alt: "Foto de aniversário"
        },
        {
          src: "/lovable-uploads/af5bb830-76e5-477b-8c9f-7c46cce41796.png",
          alt: "Foto de aniversário"
        },
        {
          src: "/lovable-uploads/39458a55-0c3f-4e66-995c-7dfb03923afb.png",
          alt: "Foto de aniversário"
        },
        {
          src: "/lovable-uploads/f09182f1-fdf3-49f6-9966-c04a93582912.png",
          alt: "Foto de aniversário"
        }
      ]
    },
    {
      icon: Gift,
      category: "Debutantes",
      images: [
        {
          src: "/lovable-uploads/a87b91d5-e060-4e95-bbd7-0184d91fbb24.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/e2c6e9de-5008-43f7-80d8-47416444a58a.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/d04bdb8b-5ed0-480e-b2dd-62ea613af6fa.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/0bd6e9c1-9276-426a-99bf-ace119c20a59.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/f3c75a89-1d26-43df-8104-6ad2dae1c493.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/9194cd9a-7a27-410f-8d84-c759ab93f289.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/22c4dba3-c420-4c13-aa45-8120b56fb77e.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/423d3187-b217-4379-8f4b-273015f26ffb.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/0c29a4a6-5400-418a-a5b0-d491f0ec756c.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/a7bd7a20-eaaa-45a7-9da5-70e26ff04918.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/22a5898a-1d0e-44bf-8f9b-8778466d74c4.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/a0b57ef6-f088-4eb9-a929-61bb4724d576.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/95e7286e-321f-459c-bd11-26abbf6c8717.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/e3b48cd5-57a0-4429-ae18-9a460b5a744c.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/bad722be-6af3-4d6f-94eb-a6b8c7a967d7.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/23a02d7c-e217-4eed-b16a-aa1869d13d5e.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/b019dfcf-119e-4cb0-b613-d2bb478ce0e7.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/07a68290-0f18-49f6-9199-416ea69cc872.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/0aa559ad-65b8-4ed1-9846-18c3133f773c.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/1cc853e3-ee52-4424-ae70-620f4de98948.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/b760e554-51a0-4100-a0b4-4364a232c2a1.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/8c2c772c-b0db-4549-8282-8f2e656f55d1.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/3e6ab992-f8f3-4104-998c-3bbd0f76c371.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/d7d0a895-517e-4200-9592-53f58656f6f4.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/30eb710f-6f4d-4ea8-ad1b-3510fe293ced.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/8a933f99-215f-44ec-8911-a76857c61a5c.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/e8da986f-d809-4896-acc1-e93f5796b93f.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/aa83b133-a834-407c-a21c-45a5c2777f54.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/16dc2b11-1cfc-46c8-9390-dbe3e44c4039.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/0b097081-ecd1-4434-a3b9-048f64806e36.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/4b897924-77d6-4c21-a2d5-d1e6707254ba.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/29ffd84c-e817-4849-9198-8e149e2dd7cc.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/f3bc4d9a-f3a1-43c9-b283-d222125e1b6a.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/71abfa84-0a51-4d30-ab93-0b194e026979.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/4de483f2-00e8-4609-8713-13043438da34.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/6a9332a8-3dc0-437d-bca2-8c8b4ccdeffd.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/0482f997-8649-44d0-b866-b572d15c2012.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/477f7b65-9494-4d02-987d-f579c264f9db.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/4e78b581-56ce-48db-8cb5-e14b3ddb260e.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/59952097-6444-4904-b3ef-b5cbd625d91f.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/db6ae260-de27-4893-a3e2-2004885c9d94.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/c39b4955-a6b0-46be-bc08-a4e17bfb774a.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/e9955e33-c19c-430d-bc3c-8c0e26d4f33c.png",
          alt: "Foto de debutante"
        },
        {
          src: "/lovable-uploads/285f945c-8b57-4161-afba-9787811de5ef.png",
          alt: "Foto de debutante"
        }
      ]
    },
    {
      icon: Briefcase,
      category: "Eventos corporativos",
      images: [
        {
          src: "/lovable-uploads/4ece6171-443b-48ad-9084-66a660afd4bd.png",
          alt: "Foto de evento corporativo"
        },
        {
          src: "/lovable-uploads/e422b42c-d084-43e9-afdb-c9efef3be418.png",
          alt: "Foto de evento corporativo"
        },
        {
          src: "/lovable-uploads/ad9b6f41-1163-4594-a056-8d430376e2f7.png",
          alt: "Foto de evento corporativo"
        },
        {
          src: "/lovable-uploads/73a05cbf-6233-4751-b727-2e33074715e0.png",
          alt: "Foto de evento corporativo"
        },
        {
          src: "/lovable-uploads/9b836f68-af7f-4743-9db0-50e575d18ce5.png",
          alt: "Foto de evento corporativo"
        }
      ]
    },
    {
      icon: GraduationCap,
      category: "Formaturas",
      images: [
        {
          src: "/lovable-uploads/e7b901b5-2f5f-462a-bb5b-57a7c1e123f9.png",
          alt: "Foto de formatura"
        },
        {
          src: "/lovable-uploads/361b707d-408f-465f-8acd-6aecf2dc3ab6.png",
          alt: "Foto de formatura"
        }
      ]
    },
    {
      icon: Music,
      category: "Shows",
      images: [
        {
          src: "/lovable-uploads/d925eeba-0e54-44e8-a730-f8d96917c92b.png",
          alt: "Foto de show"
        },
        {
          src: "/lovable-uploads/dd685d09-d7dd-4280-a41a-faa8bbfff7c2.png",
          alt: "Foto de show"
        },
        {
          src: "/lovable-uploads/48a0c2c3-979f-4074-b5e4-d7ab530945c6.png",
          alt: "Foto de show"
        },
        {
          src: "/lovable-uploads/69b86785-00d7-4516-963b-822ce51019a3.png",
          alt: "Foto de show"
        },
        {
          src: "/lovable-uploads/e24aa3e9-0720-4741-9f98-c6efc54e88fa.png",
          alt: "Foto de show"
        },
        {
          src: "/lovable-uploads/919c2536-f688-4ce7-a01a-05b61c518a5f.png",
          alt: "Foto de show"
        },
        {
          src: "/lovable-uploads/8fb6c153-8be6-4b62-ac5f-2ecce983be7d.png",
          alt: "Foto de show"
        }
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
