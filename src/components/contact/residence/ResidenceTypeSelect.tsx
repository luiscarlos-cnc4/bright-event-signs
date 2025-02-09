
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ResidenceTypeSelectProps {
  residenceType: string;
  setResidenceType: (value: string) => void;
}

const ResidenceTypeSelect = ({
  residenceType,
  setResidenceType,
}: ResidenceTypeSelectProps) => {
  return (
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
  );
};

export default ResidenceTypeSelect;

