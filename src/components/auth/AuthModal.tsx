
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-black/80 backdrop-blur-sm p-6 rounded-lg w-full max-w-md">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-vegas-gold mb-2">
              {mode === "login" ? "Login" : "Criar Conta"}
            </h2>
          </div>

          {mode === "login" ? <LoginForm /> : <RegisterForm />}

          <div className="mt-4 text-center">
            <button
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="text-vegas-gold hover:underline"
            >
              {mode === "login"
                ? "Não tem uma conta? Registre-se"
                : "Já tem uma conta? Faça login"}
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AuthModal;
