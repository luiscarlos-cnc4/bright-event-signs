
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [eventPropertyType, setEventPropertyType] = useState<string>("");
  const [otherEventPropertyType, setOtherEventPropertyType] = useState<string>("");
  const [residenceType, setResidenceType] = useState<string>("");
  const [otherResidenceType, setOtherResidenceType] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Redirecionando para a página de agradecimento...",
    });
    setTimeout(() => {
      navigate("/thank-you");
    }, 1500);
  };

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
          <p className="text-vegas-gold mt-2">
            * Todos os campos são de preenchimento obrigatório
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass-effect p-6 rounded-xl animate-fade-up">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-vegas-gold" />
                <div>
                  <h3 className="font-semibold mb-2 text-white">Telefone</h3>
                  <p className="text-white/70">(19) 99695-1746</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl animate-fade-up delay-100">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-vegas-gold" />
                <div>
                  <h3 className="font-semibold mb-2 text-white">E-mail</h3>
                  <p className="text-white/70">contato@vegasletras.com</p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl animate-fade-up delay-200">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-vegas-gold" />
                <div>
                  <h3 className="font-semibold mb-2 text-white">Endereço</h3>
                  <p className="text-white/70">São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-vegas-gold">Dados do Evento</h3>
              <Input
                required
                placeholder="Logradouro *"
                className="bg-white/10 border-vegas-gold/30 text-white"
              />
              <Input
                required
                placeholder="Número *"
                className="bg-white/10 border-vegas-gold/30 text-white"
              />
              <Input
                required
                placeholder="Bairro *"
                className="bg-white/10 border-vegas-gold/30 text-white"
              />
              <Input
                required
                placeholder="Complemento *"
                className="bg-white/10 border-vegas-gold/30 text-white"
              />
              <Input
                required
                placeholder="CEP *"
                className="bg-white/10 border-vegas-gold/30 text-white"
              />
              <Input
                required
                placeholder="Cidade *"
                className="bg-white/10 border-vegas-gold/30 text-white"
              />
              <Select
                required
                value={eventPropertyType}
                onValueChange={setEventPropertyType}
              >
                <SelectTrigger className="bg-white/10 border-vegas-gold/30 text-white">
                  <SelectValue placeholder="Que tipo de imóvel é? *" />
                </SelectTrigger>
                <SelectContent className="bg-vegas-black border-vegas-gold/30">
                  <SelectItem value="espaco">Espaço de eventos</SelectItem>
                  <SelectItem value="chacara">Chácara</SelectItem>
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="publico">Local Público</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
              {eventPropertyType === "outros" && (
                <Input
                  required
                  placeholder="Especifique o tipo de imóvel *"
                  value={otherEventPropertyType}
                  onChange={(e) => setOtherEventPropertyType(e.target.value)}
                  className="bg-white/10 border-vegas-gold/30 text-white"
                />
              )}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-vegas-gold">Endereço do Responsável</h3>
              <Input
                required
                placeholder="Logradouro *"
                className="bg-white/10 border-vegas-gold/30 text-white"
              />
              <Input
                required
                placeholder="Número *"
                className="bg-white/10 border-vegas-gold/30 text-white"
              />
              <Input
                required
                placeholder="Bairro *"
                className="bg-white/10 border-vegas-gold/30 text-white"
              />
              <Input
                required
                placeholder="Complemento *"
                className="bg-white/10 border-vegas-gold/30 text-white"
              />
              <Input
                required
                placeholder="CEP *"
                className="bg-white/10 border-vegas-gold/30 text-white"
              />
              <Input
                required
                placeholder="Cidade *"
                className="bg-white/10 border-vegas-gold/30 text-white"
              />
              <Select
                required
                value={residenceType}
                onValueChange={setResidenceType}
              >
                <SelectTrigger className="bg-white/10 border-vegas-gold/30 text-white">
                  <SelectValue placeholder="Que tipo de imóvel é? *" />
                </SelectTrigger>
                <SelectContent className="bg-vegas-black border-vegas-gold/30">
                  <SelectItem value="casa">Casa</SelectItem>
                  <SelectItem value="apartamento">Apartamento</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
              {residenceType === "apartamento" && (
                <div className="space-y-4">
                  <Input
                    required
                    placeholder="Nome do Condomínio *"
                    className="bg-white/10 border-vegas-gold/30 text-white"
                  />
                  <Input
                    required
                    placeholder="Bloco *"
                    className="bg-white/10 border-vegas-gold/30 text-white"
                  />
                  <Input
                    required
                    placeholder="Número do Apartamento *"
                    className="bg-white/10 border-vegas-gold/30 text-white"
                  />
                </div>
              )}
              {residenceType === "outros" && (
                <Input
                  required
                  placeholder="Especifique o tipo de imóvel *"
                  value={otherResidenceType}
                  onChange={(e) => setOtherResidenceType(e.target.value)}
                  className="bg-white/10 border-vegas-gold/30 text-white"
                />
              )}
            </div>

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
