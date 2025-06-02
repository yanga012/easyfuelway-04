
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  const { signIn, signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [platform, setPlatform] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!platform) {
      toast({
        title: "Platform Required",
        description: "Please select your e-hailing platform",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    const { error } = await signIn(email, password);
    
    if (error) {
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Welcome back!",
        description: "Successfully logged in to EasyFuel",
      });
    }
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!platform) {
      toast({
        title: "Platform Required",
        description: "Please select your e-hailing platform",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    const { error } = await signUp(email, password);
    
    if (error) {
      toast({
        title: "Registration Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Registration Successful!",
        description: "Please check your email to verify your account",
      });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black/90 via-black/80 to-black/70">
      <div className="w-full max-w-md px-4">
        <div className="bg-black/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-8 border border-[#F97316]/20">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent">
              EasyFuel
            </h1>
            <p className="text-[#F97316]/80 text-sm">
              Fuel credit management platform
            </p>
          </div>

          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-black/60">
              <TabsTrigger value="signin" className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400">
                Sign In
              </TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-400">
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <Select onValueChange={setPlatform} value={platform}>
                  <SelectTrigger className="w-full bg-black/60 border-yellow-500/30 text-yellow-300 focus:border-yellow-400">
                    <SelectValue placeholder="Select your e-hailing platform" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-yellow-500/30">
                    <SelectItem value="uber">Uber</SelectItem>
                    <SelectItem value="bolt">Bolt</SelectItem>
                    <SelectItem value="indidi">InDidi</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/60 border-yellow-500/30 text-yellow-300 placeholder:text-yellow-500/50 focus:border-yellow-400"
                  required
                />

                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/60 border-yellow-500/30 text-yellow-300 placeholder:text-yellow-500/50 focus:border-yellow-400"
                  required
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-medium transition-all"
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <Select onValueChange={setPlatform} value={platform}>
                  <SelectTrigger className="w-full bg-black/60 border-yellow-500/30 text-yellow-300 focus:border-yellow-400">
                    <SelectValue placeholder="Select your e-hailing platform" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-yellow-500/30">
                    <SelectItem value="uber">Uber</SelectItem>
                    <SelectItem value="bolt">Bolt</SelectItem>
                    <SelectItem value="indidi">InDidi</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/60 border-yellow-500/30 text-yellow-300 placeholder:text-yellow-500/50 focus:border-yellow-400"
                  required
                />

                <Input
                  type="password"
                  placeholder="Password (min 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black/60 border-yellow-500/30 text-yellow-300 placeholder:text-yellow-500/50 focus:border-yellow-400"
                  required
                  minLength={6}
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-medium transition-all"
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
