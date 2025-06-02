
import { useState } from "react";
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

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [platform, setPlatform] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!platform) {
      toast({
        title: "Platform Required",
        description: "Please select your e-hailing platform",
        variant: "destructive",
      });
      return;
    }

    // TODO: Implement actual login logic
    toast({
      title: "Login attempted",
      description: `Platform: ${platform}. This is a demo. Login functionality will be implemented soon.`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Select onValueChange={setPlatform} value={platform}>
          <SelectTrigger className="w-full bg-black/60 border-yellow-500/30 text-yellow-300 focus:border-yellow-400">
            <SelectValue placeholder="Select your e-hailing platform" className="placeholder:text-yellow-500/50" />
          </SelectTrigger>
          <SelectContent className="bg-black border-yellow-500/30">
            <SelectItem value="uber" className="text-yellow-300 focus:bg-yellow-500/20 focus:text-yellow-200">Uber</SelectItem>
            <SelectItem value="bolt" className="text-yellow-300 focus:bg-yellow-500/20 focus:text-yellow-200">Bolt</SelectItem>
            <SelectItem value="indidi" className="text-yellow-300 focus:bg-yellow-500/20 focus:text-yellow-200">InDidi</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Email or Phone Number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black/60 border-yellow-500/30 text-yellow-300 placeholder:text-yellow-500/50 focus:border-yellow-400"
        />
      </div>
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-black/60 border-yellow-500/30 text-yellow-300 placeholder:text-yellow-500/50 focus:border-yellow-400"
        />
      </div>
      <Button type="submit" className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-medium transition-all">
        Login
      </Button>
      <div className="text-center">
        <a href="#" className="text-yellow-400 hover:text-yellow-300 hover:underline text-sm transition-colors">
          Forgot Password?
        </a>
      </div>
    </form>
  );
};
