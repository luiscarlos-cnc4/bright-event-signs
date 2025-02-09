
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import EventBookingForm from "@/components/forms/EventBookingForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logout realizado com sucesso",
        description: "Você foi desconectado da sua conta",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro ao fazer logout",
        description: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen bg-vegas-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Área Restrita</h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-vegas-gold text-vegas-gold hover:bg-vegas-gold hover:text-black"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-vegas-gold mb-6">
            Novo Agendamento
          </h2>
          <EventBookingForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
