
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black/90 via-black/80 to-black/70">
      <div className="w-full max-w-md px-4">
        <div className="bg-black/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-8 border border-[#F97316]/20">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent">
              EasyFuel
            </h1>
            <p className="text-[#F97316]/80 text-lg">
              Fuel credit management platform for e-hailing drivers
            </p>
            <p className="text-[#F97316]/60 text-sm">
              Get 3 tanks worth of fuel for the price of 1 tank deposit
            </p>
          </div>
          
          <div className="space-y-4">
            <Link to="/auth">
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-medium transition-all">
                Get Started
              </Button>
            </Link>
            
            <div className="text-center text-sm text-[#F97316]/80">
              Already have an account?{" "}
              <Link to="/auth" className="text-[#F97316] hover:text-[#FBBF24] hover:underline font-medium transition-colors">
                Sign in here
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-yellow-400">How it works:</h3>
            <div className="space-y-2 text-sm text-yellow-500/80">
              <p>• Deposit equivalent of 1 fuel tank</p>
              <p>• Get access to 3 tanks worth of fuel</p>
              <p>• Pay as you earn from driving</p>
              <p>• Use at partner fuel stations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
