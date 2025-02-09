import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-vegas-black via-vegas-black/95 to-vegas-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Entre em <span className="text-vegas-gold">Contato</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Estamos aqui para ajudar a tornar seu evento ainda mais especial.
            Entre em contato conosco!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-effect p-6 rounded-xl animate-fade-up">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-vegas-gold" />
                <div>
                  <h3 className="font-semibold mb-2">Telefone</h3>
                  <p className="text-white/70">(19) 99695-1746</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl animate-fade-up delay-100">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-vegas-gold" />
                <div>
                  <h3 className="font-semibold mb-2">E-mail</h3>
                  <p className="text-white/70">contato@vegasletras.com</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl animate-fade-up delay-200">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-vegas-gold" />
                <div>
                  <h3 className="font-semibold mb-2">Endereço</h3>
                  <p className="text-white/70">São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
            <Input
              placeholder="Nome"
              className="bg-white/10 border-vegas-gold/30 text-white"
            />
            <Input
              type="email"
              placeholder="E-mail"
              className="bg-white/10 border-vegas-gold/30 text-white"
            />
            <Input
              placeholder="Assunto"
              className="bg-white/10 border-vegas-gold/30 text-white"
            />
            <Textarea
              placeholder="Mensagem"
              className="bg-white/10 border-vegas-gold/30 text-white min-h-[150px]"
            />
            <Button
              type="submit"
              className="w-full bg-vegas-gold hover:bg-vegas-gold/80 text-black"
            >
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
