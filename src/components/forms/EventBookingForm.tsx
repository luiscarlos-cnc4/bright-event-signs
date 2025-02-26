
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { ptBR } from "date-fns/locale";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import EventLocationForm from "@/components/contact/EventLocationForm";

type EventBookingFormData = {
  // Responsável
  fullName: string;
  cpf: string;
  email: string;
  // Endereço
  city: string;
  street: string;
  zipCode: string;
  number: string;
  neighborhood: string;
  complement: string;
  // Evento
  eventDate: Date;
  startTime: string;
  endTime: string;
  eventAddress: string;
  observations: string;
  // Letreiro
  signName: string;
  price: number;
  paymentMethod: string;
  paymentDates: Date[];
};

const EventBookingForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<EventBookingFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventPropertyType, setEventPropertyType] = useState("");
  const [otherEventPropertyType, setOtherEventPropertyType] = useState("");

  const onSubmit = async (data: EventBookingFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("bookings").insert({
        full_name: data.fullName,
        cpf: data.cpf,
        email: data.email,
        city: data.city,
        street: data.street,
        zip_code: data.zipCode,
        number: data.number,
        neighborhood: data.neighborhood,
        complement: data.complement,
        event_date: format(data.eventDate, 'yyyy-MM-dd'),
        start_time: data.startTime,
        end_time: data.endTime,
        event_address: data.eventAddress,
        observations: data.observations,
        sign_name: data.signName,
        price: data.price,
        payment_method: data.paymentMethod,
        payment_dates: data.paymentDates.map(date => format(date, 'yyyy-MM-dd')),
        residence_type: eventPropertyType === "outros" ? otherEventPropertyType : eventPropertyType,
        user_id: "00000000-0000-0000-0000-000000000000", // Temporary UUID, should be replaced with actual user ID
      });

      if (error) throw error;

      toast({
        title: "Formulário enviado!",
        description: "Seus dados foram salvos com sucesso.",
      });
      
      navigate("/thank-you");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar formulário",
        description: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Dados do Responsável */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-vegas-gold">Dados do Responsável</h2>
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Nome Completo</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">CPF</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">E-mail</FormLabel>
                <FormControl>
                  <Input type="email" {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Endereço Residencial */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-vegas-gold">Endereço Residencial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Cidade</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Rua/Avenida</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">CEP</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Número</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="neighborhood"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Bairro</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="complement"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Complemento</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" placeholder="Bloco, apartamento, etc." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Dados do Evento */}
        <EventLocationForm
          eventPropertyType={eventPropertyType}
          setEventPropertyType={setEventPropertyType}
          otherEventPropertyType={otherEventPropertyType}
          setOtherEventPropertyType={setOtherEventPropertyType}
        />

        <div className="space-y-4">
          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-white">Data do Evento</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="bg-white/10 border-vegas-gold/30 text-white"
                    >
                      {field.value ? (
                        format(field.value, "PPP", { locale: ptBR })
                      ) : (
                        <span>Selecione uma data</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      locale={ptBR}
                      className="bg-vegas-black border border-vegas-gold/30"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Horário de Início</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Horário de Término</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="eventAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Endereço do Evento</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="observations"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Observações</FormLabel>
                <FormControl>
                  <Textarea {...field} className="bg-white/10 border-vegas-gold/30 text-white min-h-[100px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Dados do Letreiro */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-vegas-gold">Dados do Letreiro</h2>
          <FormField
            control={form.control}
            name="signName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Nome do Letreiro</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Valor</FormLabel>
                <FormControl>
                  <Input type="number" {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Forma de Pagamento</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-vegas-gold hover:bg-vegas-gold/80 text-black"
        >
          {isSubmitting ? "Enviando..." : "Enviar Agendamento"}
        </Button>
      </form>
    </Form>
  );
};

export default EventBookingForm;
