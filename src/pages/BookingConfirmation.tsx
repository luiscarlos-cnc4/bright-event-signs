import { CheckCircle } from "lucide-react";

const BookingConfirmation = () => {
  return (
    <div className="min-h-screen bg-vegas-black flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-20 w-20 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-vegas-gold mb-4">
          Dados Enviados com Sucesso!
        </h1>
        <p className="text-white/70 mb-8">
          Obrigado por preencher o formulário. Entraremos em contato em breve para confirmar todos os detalhes da sua reserva.
        </p>
        <div className="p-4 bg-vegas-gold/10 border border-vegas-gold/30 rounded-lg">
          <p className="text-white/60 text-sm">
            Em caso de dúvidas, entre em contato conosco através do WhatsApp ou e-mail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
