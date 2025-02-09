
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactAddressFormProps {
  residenceType: string;
  setResidenceType: (value: string) => void;
  otherResidenceType: string;
  setOtherResidenceType: (value: string) => void;
}

const ContactAddressForm = ({
  residenceType,
  setResidenceType,
  otherResidenceType,
  setOtherResidenceType,
}: ContactAddressFormProps) => {
  return (
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
  );
};

export default ContactAddressForm;

