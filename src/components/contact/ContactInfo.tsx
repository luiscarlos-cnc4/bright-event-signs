
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="glass-effect p-8 rounded-xl animate-fade-up hover:border-vegas-gold/30 transition-colors duration-300">
        <div className="flex items-start space-x-6">
          <Phone className="w-8 h-8 text-vegas-gold" />
          <div>
            <h3 className="font-semibold mb-2 text-white text-lg">Telefone</h3>
            <a href="tel:+5519996951746" className="text-white/70 hover:text-vegas-gold transition-colors">
              (19) 99695-1746
            </a>
          </div>
        </div>
      </div>

      <div className="glass-effect p-8 rounded-xl animate-fade-up delay-100 hover:border-vegas-gold/30 transition-colors duration-300">
        <div className="flex items-start space-x-6">
          <Mail className="w-8 h-8 text-vegas-gold" />
          <div>
            <h3 className="font-semibold mb-2 text-white text-lg">E-mail</h3>
            <a href="mailto:vegasletras@gmail.com" className="text-white/70 hover:text-vegas-gold transition-colors">
              vegasletras@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="glass-effect p-8 rounded-xl animate-fade-up delay-200 hover:border-vegas-gold/30 transition-colors duration-300">
        <div className="flex items-start space-x-6">
          <MapPin className="w-8 h-8 text-vegas-gold" />
          <div>
            <h3 className="font-semibold mb-2 text-white text-lg">Endereço</h3>
            <p className="text-white/70">Piracicaba, SP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
