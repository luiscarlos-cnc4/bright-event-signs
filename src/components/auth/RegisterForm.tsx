
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
        },
      });

      if (error) throw error;

      toast({
        title: "Registro realizado com sucesso!",
        description: "Verifique seu email para confirmar sua conta.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erro ao criar conta",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Seu nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-white/10 border-vegas-gold/30 text-white placeholder:text-gray-400"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/10 border-vegas-gold/30 text-white placeholder:text-gray-400"
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-white/10 border-vegas-gold/30 text-white placeholder:text-gray-400"
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-vegas-gold hover:bg-vegas-gold/80 text-black"
      >
        {loading ? "Criando conta..." : "Criar conta"}
      </Button>
    </form>
  );
};

export default RegisterForm;
