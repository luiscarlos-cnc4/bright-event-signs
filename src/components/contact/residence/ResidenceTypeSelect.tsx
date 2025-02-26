
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
        <SelectItem value="casa" className="text-white focus:bg-vegas-gold/20 focus:text-white">Casa</SelectItem>
        <SelectItem value="cond-casa" className="text-white focus:bg-vegas-gold/20 focus:text-white">Condomínio de casa</SelectItem>
        <SelectItem value="cond-apt" className="text-white focus:bg-vegas-gold/20 focus:text-white">Condomínio de apartamento</SelectItem>
        <SelectItem value="cond-chacara" className="text-white focus:bg-vegas-gold/20 focus:text-white">Condomínio de chácara</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ResidenceTypeSelect;
