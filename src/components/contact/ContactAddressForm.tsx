
import { Input } from "@/components/ui/input";
import AddressFields from "./event-location/AddressFields";
import ResidenceTypeSelect from "./residence/ResidenceTypeSelect";
import ApartmentFields from "./residence/ApartmentFields";

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
      <AddressFields />
      <ResidenceTypeSelect
        residenceType={residenceType}
        setResidenceType={setResidenceType}
      />
      {residenceType === "apartamento" && <ApartmentFields />}
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

