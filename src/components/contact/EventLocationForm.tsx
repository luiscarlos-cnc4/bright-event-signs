
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import AddressFields from "./event-location/AddressFields";
import PropertyTypeSelect from "./event-location/PropertyTypeSelect";

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
  const form = useForm();
  const isCondominium = eventPropertyType.startsWith('cond-');

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-vegas-gold">Dados do Evento</h3>
      <Form {...form}>
        <PropertyTypeSelect
          eventPropertyType={eventPropertyType}
          setEventPropertyType={setEventPropertyType}
        />
        {isCondominium && (
          <div className="space-y-4 mt-4">
            <Input
              required
              placeholder="Nome do condomínio *"
              className="bg-white/10 border-vegas-gold/30 text-white"
            />
            <Input
              placeholder="Número do bloco (se aplicável)"
              className="bg-white/10 border-vegas-gold/30 text-white"
            />
            <Input
              required
              placeholder="Número do imóvel *"
              className="bg-white/10 border-vegas-gold/30 text-white"
            />
          </div>
        )}
        {eventPropertyType === "outros" && (
          <Input
            required
            placeholder="Especifique o tipo de imóvel *"
            value={otherEventPropertyType}
            onChange={(e) => setOtherEventPropertyType(e.target.value)}
            className="bg-white/10 border-vegas-gold/30 text-white"
          />
        )}
        <AddressFields />
      </Form>
    </div>
  );
};

export default EventLocationForm;
