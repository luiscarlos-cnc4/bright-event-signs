
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EventLocationFormProps {
  eventPropertyType: string;
  setEventPropertyType: (value: string) => void;
  otherEventPropertyType: string;
  setOtherEventPropertyType: (value: string) => void;
}

const EventLocationForm = ({
  eventPropertyType,
  setEventPropertyType,
  otherEventPropertyType,
  setOtherEventPropertyType,
}: EventLocationFormProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-vegas-gold">Dados do Evento</h3>
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
      {eventPropertyType === "outros" && (
        <Input
          required
          placeholder="Especifique o tipo de imóvel *"
          value={otherEventPropertyType}
          onChange={(e) => setOtherEventPropertyType(e.target.value)}
          className="bg-white/10 border-vegas-gold/30 text-white"
        />
      )}
    </div>
  );
};

export default EventLocationForm;

