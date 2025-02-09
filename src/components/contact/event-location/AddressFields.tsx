
import { Input } from "@/components/ui/input";

const AddressFields = () => {
  return (
    <>
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
    </>
  );
};

export default AddressFields;
