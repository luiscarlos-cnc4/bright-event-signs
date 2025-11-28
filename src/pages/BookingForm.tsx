import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Loader2 } from "lucide-react";

type BookingFormData = {
  full_name: string;
  cpf: string;
  email: string;
  residence_type: string;
  residence_condo_name?: string;
  residence_block?: string;
  residence_unit?: string;
  address_street: string;
  address_number: string;
  address_zip: string;
  address_neighborhood: string;
  address_city: string;
  event_venue_name: string;
  event_street: string;
  event_number: string;
  event_zip: string;
  event_neighborhood: string;
  event_city: string;
  event_date: Date;
  event_start_time: string;
  event_end_time: string;
};

type BookingData = {
  id: string;
  sign_name: string;
  price: number;
  payment_method: string;
  rental_period: string;
  status: string;
};

const BookingForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [booking, setBooking] = useState<BookingData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [residenceType, setResidenceType] = useState("");

  const form = useForm<BookingFormData>();

  useEffect(() => {
    const fetchBooking = async () => {
      if (!id) return;

      const { data, error } = await supabase
        .from("bookings")
        .select("id, sign_name, price, payment_method, rental_period, status")
        .eq("id", id)
        .maybeSingle();

      if (error || !data) {
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Reserva não encontrada.",
        });
        navigate("/");
        return;
      }

      if (data.status === "completed") {
        toast({
          title: "Formulário já preenchido",
          description: "Este formulário já foi preenchido anteriormente.",
        });
        navigate("/reserva/confirmacao");
        return;
      }

      setBooking(data);
      setIsLoading(false);
    };

    fetchBooking();
  }, [id, navigate, toast]);

  const onSubmit = async (data: BookingFormData) => {
    if (!id) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("bookings")
        .update({
          full_name: data.full_name,
          cpf: data.cpf,
          email: data.email,
          residence_type: residenceType,
          residence_condo_name: data.residence_condo_name,
          residence_block: data.residence_block,
          residence_unit: data.residence_unit,
          address_street: data.address_street,
          address_number: data.address_number,
          address_zip: data.address_zip,
          address_neighborhood: data.address_neighborhood,
          address_city: data.address_city,
          event_venue_name: data.event_venue_name,
          event_street: data.event_street,
          event_number: data.event_number,
          event_zip: data.event_zip,
          event_neighborhood: data.event_neighborhood,
          event_city: data.event_city,
          event_date: format(data.event_date, "yyyy-MM-dd"),
          event_start_time: data.event_start_time,
          event_end_time: data.event_end_time,
          status: "completed",
        })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Dados enviados com sucesso!",
        description: "Obrigado por preencher o formulário.",
      });
      navigate("/reserva/confirmacao");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro ao enviar dados",
        description: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const formatPaymentMethod = (method: string) => {
    const methods: Record<string, string> = {
      pix: "PIX",
      cartao: "Cartão",
      dinheiro: "Dinheiro",
      transferencia: "Transferência",
    };
    return methods[method] || method;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-vegas-black flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-vegas-gold" />
      </div>
    );
  }

  if (!booking) return null;

  return (
    <div className="min-h-screen bg-vegas-black py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-vegas-gold mb-2">
            Formulário de Reserva
          </h1>
          <p className="text-white/70">
            Preencha seus dados para confirmar a reserva
          </p>
        </div>

        {/* Sign Details (Read-only) */}
        <div className="bg-vegas-gold/10 border border-vegas-gold/30 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-vegas-gold mb-4">
            Dados do Letreiro
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-white/60 text-sm">Letreiro</p>
              <p className="text-white font-medium">{booking.sign_name}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Valor</p>
              <p className="text-white font-medium">{formatCurrency(booking.price)}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Forma de Pagamento</p>
              <p className="text-white font-medium">{formatPaymentMethod(booking.payment_method)}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Período de Locação</p>
              <p className="text-white font-medium">{booking.rental_period}</p>
            </div>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Data */}
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-vegas-gold mb-4">
                Dados Pessoais
              </h2>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="full_name"
                  rules={{ required: "Nome completo é obrigatório" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Nome Completo do Responsável *</FormLabel>
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
                  rules={{ required: "CPF é obrigatório" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">CPF *</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="000.000.000-00" className="bg-white/10 border-vegas-gold/30 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  rules={{ required: "E-mail é obrigatório" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">E-mail *</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Address Data */}
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-vegas-gold mb-4">
                Endereço do Responsável
              </h2>
              <div className="space-y-4">
                <div>
                  <FormLabel className="text-white">Tipo de Residência *</FormLabel>
                  <Select value={residenceType} onValueChange={setResidenceType}>
                    <SelectTrigger className="bg-white/10 border-vegas-gold/30 text-white mt-2">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="bg-vegas-black border-vegas-gold/30">
                      <SelectItem value="casa" className="text-white focus:bg-vegas-gold/20 focus:text-white">Casa</SelectItem>
                      <SelectItem value="condominio" className="text-white focus:bg-vegas-gold/20 focus:text-white">Condomínio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {residenceType === "condominio" && (
                  <div className="space-y-4 p-4 bg-vegas-gold/5 rounded-lg">
                    <FormField
                      control={form.control}
                      name="residence_condo_name"
                      rules={{ required: residenceType === "condominio" ? "Nome do condomínio é obrigatório" : false }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nome do Condomínio *</FormLabel>
                          <FormControl>
                            <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="residence_block"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Número do Bloco</FormLabel>
                          <FormControl>
                            <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="residence_unit"
                      rules={{ required: residenceType === "condominio" ? "Número da unidade é obrigatório" : false }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Número da Unidade *</FormLabel>
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
                    name="address_street"
                    rules={{ required: "Endereço é obrigatório" }}
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel className="text-white">Endereço *</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Rua, Avenida..." className="bg-white/10 border-vegas-gold/30 text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address_number"
                    rules={{ required: "Número é obrigatório" }}
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
                    name="address_zip"
                    rules={{ required: "CEP é obrigatório" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">CEP *</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="00000-000" className="bg-white/10 border-vegas-gold/30 text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address_neighborhood"
                    rules={{ required: "Bairro é obrigatório" }}
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
                    name="address_city"
                    rules={{ required: "Cidade é obrigatória" }}
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
              </div>
            </div>

            {/* Event Data */}
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold text-vegas-gold mb-4">
                Dados do Evento
              </h2>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="event_venue_name"
                  rules={{ required: "Nome do local é obrigatório" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Nome do Local *</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Ex: Salão de Festas, Chácara..." className="bg-white/10 border-vegas-gold/30 text-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="event_street"
                    rules={{ required: "Endereço é obrigatório" }}
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel className="text-white">Endereço *</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="event_number"
                    rules={{ required: "Número é obrigatório" }}
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
                    name="event_zip"
                    rules={{ required: "CEP é obrigatório" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">CEP *</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="00000-000" className="bg-white/10 border-vegas-gold/30 text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="event_neighborhood"
                    rules={{ required: "Bairro é obrigatório" }}
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
                    name="event_city"
                    rules={{ required: "Cidade é obrigatória" }}
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

                <FormField
                  control={form.control}
                  name="event_date"
                  rules={{ required: "Data é obrigatória" }}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className="text-white">Data do Evento *</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="bg-white/10 border-vegas-gold/30 text-white justify-start"
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

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="event_start_time"
                    rules={{ required: "Horário de início é obrigatório" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Horário de Início *</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="event_end_time"
                    rules={{ required: "Horário de término é obrigatório" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Horário de Término *</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} className="bg-white/10 border-vegas-gold/30 text-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-vegas-gold text-black hover:bg-vegas-gold/80 py-6 text-lg font-semibold"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar Dados"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;
