
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Plus, Users, FileText, LogOut } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card de Clientes */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Clientes</h2>
              <Users className="h-6 w-6 text-vegas-gold" />
            </div>
            <p className="text-gray-300 mb-4">
              Gerencie seus clientes e mantenha suas informações atualizadas.
            </p>
            <Button className="w-full bg-vegas-gold hover:bg-vegas-gold/80 text-black">
              <Plus className="mr-2 h-4 w-4" />
              Novo Cliente
            </Button>
          </div>

          {/* Card de Documentos */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Documentos</h2>
              <FileText className="h-6 w-6 text-vegas-gold" />
            </div>
            <p className="text-gray-300 mb-4">
              Acesse e gerencie documentos relacionados aos seus clientes.
            </p>
            <Button className="w-full bg-vegas-gold hover:bg-vegas-gold/80 text-black">
              <Plus className="mr-2 h-4 w-4" />
              Novo Documento
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
