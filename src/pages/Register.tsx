
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import RegisterForm from "@/components/auth/RegisterForm";
import { Button } from "@/components/ui/button";

const Register = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-vegas-black flex items-center justify-center px-4">
      <div className="bg-vegas-black border border-vegas-gold/30 p-8 rounded-lg w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-vegas-gold mb-2">Criar Conta</h2>
        </div>

        <RegisterForm />

        <div className="mt-4 text-center">
          <Button
            onClick={() => navigate("/login")}
            variant="link"
            className="text-vegas-gold hover:text-vegas-gold/80"
          >
            Já tem uma conta? Faça login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
