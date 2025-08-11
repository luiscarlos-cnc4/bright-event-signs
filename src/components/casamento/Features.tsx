import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Letreiros Luminosos Personalizados",
      description: "Criamos letreiros únicos com o nome dos noivos, data especial ou frases românticas que marquem para sempre seu grande dia.",
      image: "/lovable-uploads/3fa7bc2b-9a33-4f51-b430-30e809ef94af.png"
    },
    {
      title: "Iluminação de Sonho",
      description: "Nossas luzes criam uma atmosfera mágica e romântica, transformando qualquer ambiente no cenário perfeito para seu casamento.",
      image: "/lovable-uploads/3fa7bc2b-9a33-4f51-b430-30e809ef94af.png"
    },
    {
      title: "Montagem e Desmontagem Incluídas",
      description: "Nossa equipe cuida de tudo! Montamos e desmontamos toda a decoração para que vocês só se preocupem em ser felizes.",
      image: "/lovable-uploads/3fa7bc2b-9a33-4f51-b430-30e809ef94af.png"
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-center text-white mb-8 md:mb-12">
          Por que escolher a <span className="text-accent">VEGAS</span> <span className="text-primary">LETRAS</span> para seu casamento?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 mx-auto max-w-xs">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a
            href="https://wa.me/5519996951746?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20casamento..."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e4257e] hover:bg-[#e4257e]/90 text-white font-bold py-4 px-8 rounded-full text-lg flex items-center justify-center gap-2 mx-auto inline-flex w-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            RESERVAR AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;