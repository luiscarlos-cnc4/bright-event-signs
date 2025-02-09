
import { Input } from "@/components/ui/input";

const ApartmentFields = () => {
  return (
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
  );
};

export default ApartmentFields;

