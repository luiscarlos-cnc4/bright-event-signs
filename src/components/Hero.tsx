
import { useEffect, useState } from "react";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5519996951746?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20locação%20de%20letreiro%20luminoso",
      "_blank"
    );
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-vegas-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9))",
        }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Ilumine seus{" "}
          <span className="text-vegas-gold animate-glow">momentos</span>
          <br />
          especiais
        </h1>
        
        <p
          className={`text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl mx-auto transition-all delay-300 duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Letreiros luminosos personalizados para tornar seu evento inesquecível
        </p>
        
        <button
          onClick={handleWhatsAppClick}
          className={`bg-vegas-gold text-vegas-black px-8 py-4 rounded-full text-lg font-semibold 
          hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg 
          hover:shadow-vegas-gold/50 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Solicitar Orçamento
        </button>
      </div>
    </div>
  );
};

export default Hero;
