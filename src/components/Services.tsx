
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarHeart, Camera, PartyPopper, Building } from "lucide-react";
import { Link } from "react-router-dom";

const serviceItems = [
  {
    icon: CalendarHeart,
    title: "Casamentos",
    description: "Crie memórias inesquecíveis com nossos letreiros personalizados para casamentos.",
    link: "/produto-amor",
    isSpecial: true
  },
  {
    icon: PartyPopper,
    title: "Aniversários",
    description: "Comemore em grande estilo com letreiros personalizados para sua festa de aniversário.",
    link: "#"
  },
  {
    icon: Camera,
    title: "Eventos Sociais",
    description: "Tenha um backdrop perfeito para fotos com nossos letreiros iluminados em eventos sociais.",
    link: "#"
  },
  {
    icon: Building,
    title: "Corporativo",
    description: "Destaque o nome da sua empresa ou slogan com nossos letreiros profissionais.",
    link: "#"
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-vegas-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">Nossos Serviços</h2>
        <p className="text-vegas-gold/80 text-center mb-12 max-w-2xl mx-auto">
          Oferecemos letreiros luminosos personalizados para diversos tipos de eventos.
          Escolha o serviço ideal para a sua ocasião.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((item, index) => (
            <Card key={index} className={`glass-effect overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${item.isSpecial ? 'border-vegas-gold' : 'border-white/10'}`}>
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${item.isSpecial ? 'bg-vegas-gold text-vegas-black' : 'bg-white/10 text-vegas-gold'}`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 mb-4">{item.description}</p>
                {item.isSpecial ? (
                  <Link to={item.link}>
                    <Button className="w-full bg-vegas-gold hover:bg-vegas-gold/80 text-vegas-black">
                      Ver detalhes
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" className="w-full border-white/20 hover:border-vegas-gold/50">
                    Saiba mais
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
