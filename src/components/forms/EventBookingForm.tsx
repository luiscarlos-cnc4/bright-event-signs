
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type EventBookingFormData = {
  full_name: string;
  cpf: string;
  email: string;
  city: string;
  street: string;
  zip_code: string;
  number: string;
  neighborhood: string;
  complement?: string;
  residence_type: string;
  resident_condo_name?: string;
  resident_block?: string;
  resident_apartment_number?: string;
  event_date: Date;
  start_time: string;
  end_time: string;
  observations?: string;
  sign_name: string;
  price: number;
  payment_method: string;
  payment_dates: string[];
  down_payment?: number;
  remaining_payment?: number;
};

const EventBookingForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const form = useForm<EventBookingFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventPropertyType, setEventPropertyType] = useState("");
  const [otherEventPropertyType, setOtherEventPropertyType] = useState("");
  const [residenceType, setResidenceType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const onSubmit = async (data: EventBookingFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("bookings").insert({
        full_name: data.full_name,
        cpf: data.cpf,
        email: data.email,
        city: data.city,
        street: data.street,
        zip_code: data.zip_code,
        number: data.number,
        neighborhood: data.neighborhood,
        complement: data.complement,
        event_date: format(data.event_date, 'yyyy-MM-dd'),
        start_time: data.start_time,
        end_time: data.end_time,
        observations: data.observations,
        sign_name: data.sign_name,
        price: data.price,
        payment_method: data.payment_method,
        residence_type: residenceType,
        resident_condo_name: data.resident_condo_name,
        resident_block: data.resident_block,
        resident_apartment_number: data.resident_apartment_number,
        event_address: data.event_address,
        payment_dates: [],
        user_id: "00000000-0000-0000-0000-000000000000",
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
            name="full_name"
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
          <Select value={residenceType} onValueChange={setResidenceType}>
            <SelectTrigger className="bg-white/10 border-vegas-gold/30 text-white">
              <SelectValue placeholder="Tipo de Residência *" />
            </SelectTrigger>
            <SelectContent className="bg-vegas-black border-vegas-gold/30 text-white">
              <SelectItem value="casa" className="text-white focus:bg-vegas-gold/20 focus:text-white">Casa</SelectItem>
              <SelectItem value="cond-casa" className="text-white focus:bg-vegas-gold/20 focus:text-white">Condomínio de casa</SelectItem>
              <SelectItem value="cond-apt" className="text-white focus:bg-vegas-gold/20 focus:text-white">Condomínio de apartamento</SelectItem>
              <SelectItem value="cond-chacara" className="text-white focus:bg-vegas-gold/20 focus:text-white">Condomínio de chácara</SelectItem>
            </SelectContent>
          </Select>

          {residenceType.startsWith('cond-') && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="resident_condo_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Nome do condomínio *</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resident_block"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Número do bloco (se aplicável)</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resident_apartment_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Número do imóvel *</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
          
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
              name="zip_code"
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
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-vegas-gold">Dados do Evento</h2>
          <FormField
            control={form.control}
            name="event_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-white">Data do Evento</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
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
          <FormField
            control={form.control}
            name="start_time"
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
            name="end_time"
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
          <FormField
            control={form.control}
            name="event_address"
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
          <Select value={eventPropertyType} onValueChange={setEventPropertyType}>
            <SelectTrigger className="bg-white/10 border-vegas-gold/30 text-white">
              <SelectValue placeholder="Tipo do Local do Evento *" />
            </SelectTrigger>
            <SelectContent className="bg-vegas-black border-vegas-gold/30 text-white">
              <SelectItem value="casa" className="text-white focus:bg-vegas-gold/20 focus:text-white">Casa</SelectItem>
              <SelectItem value="salao" className="text-white focus:bg-vegas-gold/20 focus:text-white">Salão de Festas</SelectItem>
              <SelectItem value="chacara" className="text-white focus:bg-vegas-gold/20 focus:text-white">Chácara</SelectItem>
              <SelectItem value="outro" className="text-white focus:bg-vegas-gold/20 focus:text-white">Outro</SelectItem>
            </SelectContent>
          </Select>

          {eventPropertyType === "outro" && (
            <FormField
              control={form.control}
              name="other_event_property_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Especifique o tipo do local</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>

        {/* Dados do Letreiro */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-vegas-gold">Dados do Letreiro</h2>
          <FormField
            control={form.control}
            name="sign_name"
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
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-white">R$</span>
                    <Input {...field} type="number" step="0.01" className="bg-white/10 border-vegas-gold/30 text-white pl-10" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="payment_method"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Forma de Pagamento</FormLabel>
                <Select onValueChange={(value) => {
                  field.onChange(value);
                  setPaymentMethod(value);
                }} value={field.value}>
                  <SelectTrigger className="bg-white/10 border-vegas-gold/30 text-white">
                    <SelectValue placeholder="Selecione a forma de pagamento *" />
                  </SelectTrigger>
                  <SelectContent className="bg-vegas-black border-vegas-gold/30 text-white">
                    <SelectItem value="a-vista" className="text-white focus:bg-vegas-gold/20 focus:text-white">À vista</SelectItem>
                    <SelectItem value="parcelado" className="text-white focus:bg-vegas-gold/20 focus:text-white">Entrada + 1 parcela</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {paymentMethod === "parcelado" && (
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="down_payment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Valor da Entrada</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-white">R$</span>
                        <Input {...field} type="number" step="0.01" className="bg-white/10 border-vegas-gold/30 text-white pl-10" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="remaining_payment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Valor da Parcela Restante</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-2.5 text-white">R$</span>
                        <Input {...field} type="number" step="0.01" className="bg-white/10 border-vegas-gold/30 text-white pl-10" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="payment_dates"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Data da Parcela Restante</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          <FormField
            control={form.control}
            name="observations"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Observações do Letreiro</FormLabel>
                <FormControl>
                  <Textarea {...field} className="bg-white/10 border-vegas-gold/30 text-white min-h-[100px]" />
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
