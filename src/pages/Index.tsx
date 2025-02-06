
import { LoginForm } from "@/components/auth/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300">
      <div className="w-full max-w-md px-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-8 border border-white/20">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              MoveEasy Mzantsi
            </h1>
            <p className="text-muted-foreground text-sm">
              Fuel credit management platform
            </p>
          </div>
          <LoginForm />
          <div className="text-center text-sm text-muted-foreground">
            No account?{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Register now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
