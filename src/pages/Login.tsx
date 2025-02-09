
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginForm from "@/components/auth/LoginForm";
import { Button } from "@/components/ui/button";

const Login = () => {
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
          <h2 className="text-2xl font-bold text-vegas-gold mb-2">Login</h2>
        </div>

        <LoginForm />

        <div className="mt-4 text-center">
          <Button
            onClick={() => navigate("/register")}
            variant="link"
            className="text-vegas-gold hover:text-vegas-gold/80"
          >
            Não tem uma conta? Registre-se
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
