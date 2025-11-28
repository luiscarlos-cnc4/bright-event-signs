import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Link, ArrowLeft } from "lucide-react";

type NewBookingFormData = {
  sign_name: string;
  price: number;
  payment_method: string;
  rental_period: string;
};

const AdminNewBooking = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);

  const form = useForm<NewBookingFormData>({
    defaultValues: {
      rental_period: "5 horas",
    },
  });

  const onSubmit = async (data: NewBookingFormData) => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Você precisa estar logado para criar uma reserva.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const { data: booking, error } = await supabase
        .from("bookings")
        .insert({
          sign_name: data.sign_name,
          price: data.price,
          payment_method: data.payment_method,
          rental_period: data.rental_period,
          created_by: user.id,
          status: "pending",
        })
        .select()
        .single();

      if (error) throw error;

      const link = `${window.location.origin}/reserva/${booking.id}`;
      setGeneratedLink(link);

      toast({
        title: "Link gerado com sucesso!",
        description: "Copie o link e envie para o cliente.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro ao criar reserva",
        description: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = () => {
    if (generatedLink) {
      navigator.clipboard.writeText(generatedLink);
      toast({
        title: "Link copiado!",
        description: "O link foi copiado para a área de transferência.",
      });
    }
  };

  const createNewBooking = () => {
    setGeneratedLink(null);
    form.reset({
      sign_name: "",
      price: 0,
      payment_method: "",
      rental_period: "5 horas",
    });
  };

  return (
    <div className="min-h-screen bg-vegas-black">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="text-vegas-gold hover:text-white mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao Dashboard
        </Button>

        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
          <h1 className="text-2xl font-bold text-vegas-gold mb-6">
            Nova Reserva - Gerar Link
          </h1>

          {generatedLink ? (
            <div className="space-y-6">
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 font-medium mb-2">Link gerado com sucesso!</p>
                <p className="text-white/70 text-sm mb-4">
                  Envie este link para o cliente preencher os dados:
                </p>
                <div className="flex gap-2">
                  <Input
                    value={generatedLink}
                    readOnly
                    className="bg-white/10 border-vegas-gold/30 text-white text-sm"
                  />
                  <Button
                    onClick={copyToClipboard}
                    className="bg-vegas-gold text-black hover:bg-vegas-gold/80"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button
                onClick={createNewBooking}
                className="w-full bg-vegas-gold text-black hover:bg-vegas-gold/80"
              >
                <Link className="mr-2 h-4 w-4" />
                Criar Novo Link
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="sign_name"
                  rules={{ required: "Nome do letreiro é obrigatório" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Nome do Letreiro *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Ex: PARABÉNS ANA"
                          className="bg-white/10 border-vegas-gold/30 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  rules={{ required: "Valor é obrigatório" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Valor (R$) *</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="0.01"
                          {...field}
                          onChange={(e) => field.onChange(parseFloat(e.target.value))}
                          placeholder="0.00"
                          className="bg-white/10 border-vegas-gold/30 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="payment_method"
                  rules={{ required: "Forma de pagamento é obrigatória" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Forma de Pagamento *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/10 border-vegas-gold/30 text-white">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-vegas-black border-vegas-gold/30">
                          <SelectItem value="pix" className="text-white focus:bg-vegas-gold/20 focus:text-white">PIX</SelectItem>
                          <SelectItem value="cartao" className="text-white focus:bg-vegas-gold/20 focus:text-white">Cartão</SelectItem>
                          <SelectItem value="dinheiro" className="text-white focus:bg-vegas-gold/20 focus:text-white">Dinheiro</SelectItem>
                          <SelectItem value="transferencia" className="text-white focus:bg-vegas-gold/20 focus:text-white">Transferência</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rental_period"
                  rules={{ required: "Período de locação é obrigatório" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Período de Locação *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Ex: 5 horas"
                          className="bg-white/10 border-vegas-gold/30 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-vegas-gold text-black hover:bg-vegas-gold/80"
                >
                  {isSubmitting ? "Gerando..." : "Gerar Link para Cliente"}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminNewBooking;
