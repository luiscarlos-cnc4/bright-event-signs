import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");

  useEffect(() => {
    if (!loading && user) {
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src="/lovable-uploads/e119c6d9-e014-4421-a7b0-c842dcccb14f.png"
            alt="Vegas Letras"
            className="h-12 mx-auto mb-6"
          />
          <h1 className="text-2xl font-bold text-white mb-2">Área Restrita</h1>
          <p className="text-gray-400">Acesso exclusivo para administradores</p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-vegas-gold/20">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/10">
              <TabsTrigger 
                value="login"
                className="data-[state=active]:bg-vegas-gold data-[state=active]:text-black"
              >
                Entrar
              </TabsTrigger>
              <TabsTrigger 
                value="register"
                className="data-[state=active]:bg-vegas-gold data-[state=active]:text-black"
              >
                Criar Conta
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          <a href="/" className="hover:text-vegas-gold transition-colors">
            ← Voltar ao site
          </a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
