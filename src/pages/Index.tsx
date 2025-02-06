
import { LoginForm } from "@/components/auth/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black/90 via-black/80 to-black/70">
      <div className="w-full max-w-md px-4">
        <div className="bg-black/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-8 border border-[#F97316]/20">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent">
              MoveEasy Mzantsi
            </h1>
            <p className="text-[#F97316]/80 text-sm">
              Fuel credit management platform
            </p>
          </div>
          <LoginForm />
          <div className="text-center text-sm text-[#F97316]/80">
            No account?{" "}
            <a href="#" className="text-[#F97316] hover:text-[#FBBF24] hover:underline font-medium transition-colors">
              Register now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

