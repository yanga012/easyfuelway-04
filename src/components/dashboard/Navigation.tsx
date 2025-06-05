
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { LogOut, Home, MessageSquare, Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const { signOut } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black/95 border-b border-blue-200/30 p-3 sm:p-4">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout */}
        <div className="flex items-center justify-between sm:hidden">
          <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
            EasyFuel
          </h1>
          
          <div className="flex items-center space-x-2">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="sm"
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-2"
            >
              <Menu className="w-5 h-5" />
            </Button>
            
            <Button
              onClick={handleSignOut}
              variant="ghost"
              size="sm"
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-2"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 border-t border-blue-200/20">
            <div className="flex flex-col space-y-2">
              <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant={isActive("/dashboard") ? "default" : "ghost"}
                  className={`w-full justify-start text-sm ${
                    isActive("/dashboard")
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-blue-400/80 hover:text-blue-300 hover:bg-blue-500/10"
                  }`}
                  size="sm"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              
              <Link to="/support" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant={isActive("/support") ? "default" : "ghost"}
                  className={`w-full justify-start text-sm ${
                    isActive("/support")
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-blue-400/80 hover:text-blue-300 hover:bg-blue-500/10"
                  }`}
                  size="sm"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Support
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between">
          <div className="flex items-center space-x-6 lg:space-x-8">
            <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              EasyFuel
            </h1>
            
            <div className="flex space-x-3 lg:space-x-4">
              <Link to="/dashboard">
                <Button
                  variant={isActive("/dashboard") ? "default" : "ghost"}
                  className={`text-sm lg:text-base ${
                    isActive("/dashboard")
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-blue-400/80 hover:text-blue-300 hover:bg-blue-500/10"
                  }`}
                  size="sm"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              
              <Link to="/support">
                <Button
                  variant={isActive("/support") ? "default" : "ghost"}
                  className={`text-sm lg:text-base ${
                    isActive("/support")
                      ? "bg-blue-500/20 text-blue-400"
                      : "text-blue-400/80 hover:text-blue-300 hover:bg-blue-500/10"
                  }`}
                  size="sm"
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
            className="text-blue-400/80 hover:text-blue-300 hover:bg-blue-500/10 text-sm lg:text-base"
            size="sm"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </nav>
  );
};
