
import { Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-vegas-black via-vegas-black/95 to-vegas-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Sobre a <span className="text-vegas-gold">Vegas Letras</span>
          </h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-vegas-gold animate-glow" />
            <Star className="w-6 h-6 text-vegas-gold animate-glow" />
            <Star className="w-6 h-6 text-vegas-gold animate-glow" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <p className="text-lg text-white/80">
              Somos especialistas em tornar momentos especiais ainda mais memoráveis através 
              de letreiros luminosos personalizados. Nossa paixão é transformar suas ideias 
              em peças únicas que iluminam e encantam.
            </p>
            <p className="text-lg text-white/80">
              Com anos de experiência no mercado, combinamos criatividade, qualidade e 
              tecnologia para criar letreiros que se destacam e fazem a diferença em 
              casamentos, festas e eventos corporativos.
            </p>
          </div>
          
          <div className="glass-effect p-8 rounded-2xl animate-fade-up delay-200">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <h3 className="text-4xl font-bold text-vegas-gold mb-2">500+</h3>
                <p className="text-sm text-white/70">Eventos Realizados</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-4xl font-bold text-vegas-gold mb-2">100%</h3>
                <p className="text-sm text-white/70">Clientes Satisfeitos</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-4xl font-bold text-vegas-gold mb-2">50+</h3>
                <p className="text-sm text-white/70">Modelos Diferentes</p>
              </div>
              <div className="text-center p-4">
                <h3 className="text-4xl font-bold text-vegas-gold mb-2">5⭐</h3>
                <p className="text-sm text-white/70">Avaliação Média</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
