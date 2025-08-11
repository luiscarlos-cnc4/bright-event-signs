import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[auto] bg-black text-white flex flex-col items-center py-0 px-0">
      <div className="max-w-4xl mx-auto text-center">
        <img 
          src="/lovable-uploads/e119c6d9-e014-4421-a7b0-c842dcccb14f.png" 
          alt="Vegas Letras logo branco" 
          className="mx-auto h-12 md:h-16 mb-4" 
        />
        
        <h1 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight">
          Transforme seu<br />
          casamento em uma<br />
          celebração <span className="text-accent">VEGAS</span> <span className="text-primary">LETRAS</span>
        </h1>
        
        <p className="text-white/80 text-sm md:text-base max-w-3xl mx-auto mb-6 px-2">
          Na Vegas Letras criamos mais que decoração, criamos memórias que durarão para sempre. 
          Seu casamento merece brilhar com o toque mágico que só nós sabemos proporcionar. 
          Transformamos seu grande dia em uma experiência inesquecível assim:
        </p>
        
        <div className="mb-8 mx-auto max-w-md">
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/163113a7-82f9-4d47-885a-1389ba056a4f.png" 
              alt="Casal em casamento com letras iluminadas Vegas Letras" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.onerror = null;
                img.src = "/lovable-uploads/5196f240-0585-46d2-a665-98805eea33f3.png";
              }}
            />
          </div>
        </div>
        
        <a
          href="https://wa.me/5519996951746?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20casamento..."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-full text-lg flex items-center justify-center gap-2 mx-auto inline-flex w-auto shadow-md hover:shadow-lg transition-shadow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          RESERVAR AGORA
        </a>
      </div>
    </section>
  );
};

export default Hero;