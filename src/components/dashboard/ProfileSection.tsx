
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { useAuth } from "@/hooks/useAuth";

export const ProfileSection = () => {
  const { profile } = useProfile();
  const { user } = useAuth();

  return (
    <div className="bg-white/95 rounded-lg p-6 shadow-xl border border-blue-200 shadow-blue-500/10">
      <div className="flex items-center space-x-4">
        <Avatar className="h-16 w-16 border-2 border-blue-500">
          <AvatarImage src="/placeholder.svg" alt="Profile picture" />
          <AvatarFallback className="bg-blue-100">
            <User className="h-8 w-8 text-blue-600" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold text-blue-900">
            {profile?.full_name || 'User'}
          </h3>
          <div className="text-sm text-blue-700 space-y-1">
            <p>Fuel Account Holder</p>
            {profile?.id_number && <p>ID: {profile.id_number}</p>}
            <p className="text-blue-600">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
