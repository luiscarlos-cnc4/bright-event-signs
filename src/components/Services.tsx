
import { Heart, Star, PartyPopper, Briefcase } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }: { 
  icon: any, 
  title: string, 
  description: string 
}) => (
  <div className="glass-effect p-6 rounded-xl hover-glow transition-all duration-300 animate-fade-up">
    <div className="text-vegas-gold mb-4">
      <Icon className="w-10 h-10" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Casamentos",
      description: "Letreiros personalizados para tornar seu dia ainda mais especial e memorável."
    },
    {
      icon: PartyPopper,
      title: "Festas",
      description: "Debutantes, aniversários e comemorações com brilho e personalidade."
    },
    {
      icon: Briefcase,
      title: "Corporativo",
      description: "Eventos empresariais, feiras e convenções com elegância e profissionalismo."
    },
    {
      icon: Star,
      title: "Personalizados",
      description: "Projetos especiais desenvolvidos de acordo com sua necessidade."
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-vegas-black via-vegas-black/95 to-vegas-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Nossos <span className="text-vegas-gold">Serviços</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Oferecemos soluções personalizadas para cada tipo de evento, 
            garantindo que sua ocasião especial seja única e inesquecível.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
