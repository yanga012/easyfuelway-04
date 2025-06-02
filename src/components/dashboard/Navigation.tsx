
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LogOut, Home, CreditCard, MessageSquare } from "lucide-react";

export const Navigation = () => {
  const { signOut } = useAuth();
  const location = useLocation();

  const handleSignOut = async () => {
    await signOut();
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black/95 border-b border-yellow-500/30 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            EasyFuel
          </h1>
          
          <div className="flex space-x-4">
            <Link to="/dashboard">
              <Button
                variant={isActive("/dashboard") ? "default" : "ghost"}
                className={`${
                  isActive("/dashboard")
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "text-yellow-500/80 hover:text-yellow-400 hover:bg-yellow-500/10"
                }`}
              >
                <Home className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            
            <Link to="/support">
              <Button
                variant={isActive("/support") ? "default" : "ghost"}
                className={`${
                  isActive("/support")
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "text-yellow-500/80 hover:text-yellow-400 hover:bg-yellow-500/10"
                }`}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Support
              </Button>
            </Link>
          </div>
        </div>

        <Button
          onClick={handleSignOut}
          variant="ghost"
          className="text-yellow-500/80 hover:text-yellow-400 hover:bg-yellow-500/10"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </nav>
  );
};
