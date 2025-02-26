
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PropertyTypeSelectProps {
  eventPropertyType: string;
  setEventPropertyType: (value: string) => void;
}

const PropertyTypeSelect = ({
  eventPropertyType,
  setEventPropertyType,
}: PropertyTypeSelectProps) => {
  return (
    <Select
      required
      value={eventPropertyType}
      onValueChange={setEventPropertyType}
    >
      <SelectTrigger className="bg-white/10 border-vegas-gold/30 text-white">
        <SelectValue placeholder="Que tipo de imóvel é? *" />
      </SelectTrigger>
      <SelectContent className="bg-vegas-black border-vegas-gold/30 text-white">
        <SelectItem value="espaco" className="text-white focus:bg-vegas-gold/20 focus:text-white">Espaço de eventos</SelectItem>
        <SelectItem value="chacara" className="text-white focus:bg-vegas-gold/20 focus:text-white">Chácara</SelectItem>
        <SelectItem value="casa" className="text-white focus:bg-vegas-gold/20 focus:text-white">Casa</SelectItem>
        <SelectItem value="cond-casa" className="text-white focus:bg-vegas-gold/20 focus:text-white">Condomínio de casa</SelectItem>
        <SelectItem value="cond-apt" className="text-white focus:bg-vegas-gold/20 focus:text-white">Condomínio de apartamento</SelectItem>
        <SelectItem value="cond-chacara" className="text-white focus:bg-vegas-gold/20 focus:text-white">Condomínio de chácara</SelectItem>
        <SelectItem value="publico" className="text-white focus:bg-vegas-gold/20 focus:text-white">Local Público</SelectItem>
        <SelectItem value="outros" className="text-white focus:bg-vegas-gold/20 focus:text-white">Outros</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default PropertyTypeSelect;
