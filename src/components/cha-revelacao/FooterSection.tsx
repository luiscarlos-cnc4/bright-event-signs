
import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="py-8 md:py-10 px-4 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <img 
          src="/lovable-uploads/e119c6d9-e014-4421-a7b0-c842dcccb14f.png" 
          alt="Vegas Letras" 
          className="mx-auto h-14 md:h-20 mb-4" 
        />
        <p className="text-white/70 text-sm md:text-base">
          Copyright © Vegas Letras – Crie Histórias Brilhantes Conosco
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
