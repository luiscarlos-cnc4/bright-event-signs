
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
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
            <p className="text-white/70">vegasletras@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="glass-effect p-6 rounded-xl animate-fade-up delay-200">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-vegas-gold" />
          <div>
            <h3 className="font-semibold mb-2 text-white">Endereço</h3>
            <p className="text-white/70">Piracicaba, SP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
