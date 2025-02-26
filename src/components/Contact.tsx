
import ContactInfo from "./contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-vegas-black via-vegas-black/95 to-vegas-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <img
            src="/lovable-uploads/96c1e154-a9ee-4d84-b48b-69a6dca5ffbf.png"
            alt="Vegas Letras"
            className="h-16 mx-auto mb-8"
          />
          <h2 className="text-4xl font-bold mb-4">
            Entre em <span className="text-vegas-gold">Contato</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Estamos aqui para ajudar a tornar seu evento ainda mais especial.
            Entre em contato conosco!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
