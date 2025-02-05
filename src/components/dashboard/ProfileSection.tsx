
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

export const ProfileSection = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center space-x-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder.svg" alt="Profile picture" />
          <AvatarFallback>
            <User className="h-8 w-8" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold">John Doe</h3>
          <div className="text-sm text-gray-500 space-y-1">
            <p>Uber Driver</p>
            <p>ID: 123456789</p>
            <p>Active since: Jan 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};
