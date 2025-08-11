import React from 'react';

const AboutLocal: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Vegas Letras em Piracicaba
        </h2>
        <p className="text-white/80 text-sm md:text-base max-w-3xl mx-auto">
          Somos especialistas em locação de letreiros luminosos para chá revelação em Piracicaba e região. 
          Atendimento rápido, montagem segura e fotos deslumbrantes para transformar seu momento em uma lembrança inesquecível.
        </p>
        <div className="mt-6 text-white/90 text-sm md:text-base">
          Atendemos diferentes eventos:
          <ul className="mt-3 list-disc list-inside text-white/80 text-left max-w-2xl mx-auto">
            <li>Chá revelação</li>
            <li>Casamentos</li>
            <li>Aniversários</li>
            <li>Eventos corporativos</li>
          </ul>
        </div>
        <div className="mt-8">
          <a
            href="https://wa.me/5519996951746?text=Ol%C3%A1!%20Quero%20um%20or%C3%A7amento%20para%20letreiro%20luminoso%20em%20Piracicaba.%20Evento%3A%20___%20Data%3A%20___"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00BFFF] hover:bg-[#00BFFF]/80 text-white font-bold py-3 px-6 rounded-full text-base inline-flex items-center justify-center"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutLocal;
