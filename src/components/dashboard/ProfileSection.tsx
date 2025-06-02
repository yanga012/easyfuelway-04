
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

export const ProfileSection = () => {
  return (
    <div className="bg-black/95 rounded-lg p-6 shadow-xl border border-yellow-500/30 shadow-yellow-500/20">
      <div className="flex items-center space-x-4">
        <Avatar className="h-16 w-16 border-2 border-yellow-500">
          <AvatarImage src="/placeholder.svg" alt="Profile picture" />
          <AvatarFallback className="bg-yellow-500/20">
            <User className="h-8 w-8 text-yellow-400" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">John Doe</h3>
          <div className="text-sm text-yellow-500/80 space-y-1">
            <p>Uber Driver</p>
            <p>ID: 123456789</p>
            <p>Active since: Jan 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};
