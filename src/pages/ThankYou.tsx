
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-vegas-black flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl text-center space-y-8">
        <img
          src="/lovable-uploads/96c1e154-a9ee-4d84-b48b-69a6dca5ffbf.png"
          alt="Vegas Letras"
          className="h-24 mx-auto"
        />
        
        <div className="glass-effect p-8 rounded-xl space-y-6">
          <h1 className="text-3xl font-bold text-vegas-gold">
            Agradecemos seu contato!
          </h1>
          <p className="text-white/90 text-lg">
            Em breve entraremos em contato para finalizar o contrato e tornar seu evento ainda mais especial.
          </p>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="border-vegas-gold text-vegas-gold hover:bg-vegas-gold hover:text-black"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a página inicial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
