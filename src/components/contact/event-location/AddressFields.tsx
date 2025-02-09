
import { FormField } from "@/components/ui/form";
import { FormItem } from "@/components/ui/form";
import { FormLabel } from "@/components/ui/form";
import { FormControl } from "@/components/ui/form";
import { FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const AddressFields = () => {
  const form = useFormContext();

  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="eventStreet"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Logradouro *</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="eventNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Número *</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="eventNeighborhood"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Bairro *</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="eventComplement"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Complemento *</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="eventZipCode"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">CEP *</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="eventCity"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Cidade *</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default AddressFields;
