
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
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your e-hailing platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="uber">Uber</SelectItem>
            <SelectItem value="bolt">Bolt</SelectItem>
            <SelectItem value="indidi">InDidi</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Email or Phone Number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full"
        />
      </div>
      <Button type="submit" className="w-full bg-primary hover:bg-primary-700">
        Login
      </Button>
      <div className="text-center">
        <a href="#" className="text-primary hover:underline text-sm">
          Forgot Password?
        </a>
      </div>
    </form>
  );
};
