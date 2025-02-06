
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

export const ProfileSection = () => {
  return (
    <div className="bg-black/95 rounded-lg p-6 shadow-sm border border-[#F97316]/20">
      <div className="flex items-center space-x-4">
        <Avatar className="h-16 w-16 border-2 border-[#F97316]">
          <AvatarImage src="/placeholder.svg" alt="Profile picture" />
          <AvatarFallback>
            <User className="h-8 w-8 text-[#F97316]" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold text-[#FBBF24]">John Doe</h3>
          <div className="text-sm text-[#F97316]/80 space-y-1">
            <p>Uber Driver</p>
            <p>ID: 123456789</p>
            <p>Active since: Jan 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};
