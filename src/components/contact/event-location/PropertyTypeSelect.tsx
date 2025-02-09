
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
      <SelectContent className="bg-vegas-black border-vegas-gold/30">
        <SelectItem value="espaco">Espaço de eventos</SelectItem>
        <SelectItem value="chacara">Chácara</SelectItem>
        <SelectItem value="casa">Casa</SelectItem>
        <SelectItem value="publico">Local Público</SelectItem>
        <SelectItem value="outros">Outros</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default PropertyTypeSelect;
