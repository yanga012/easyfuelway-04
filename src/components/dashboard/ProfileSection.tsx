
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { useAuth } from "@/hooks/useAuth";

export const ProfileSection = () => {
  const { profile } = useProfile();
  const { user } = useAuth();

  return (
    <div className="bg-white/95 rounded-lg p-3 sm:p-4 lg:p-6 shadow-xl border border-blue-200 shadow-blue-500/10 w-full">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <Avatar className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 border-2 border-blue-500 flex-shrink-0">
          <AvatarImage src="/placeholder.svg" alt="Profile picture" />
          <AvatarFallback className="bg-blue-100">
            <User className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-600" />
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <h3 className="text-base sm:text-lg font-semibold text-blue-900 truncate">
            {profile?.full_name || 'User'}
          </h3>
          <div className="text-xs sm:text-sm text-blue-700 space-y-0.5 sm:space-y-1">
            <p>Fuel Account Holder</p>
            {profile?.id_number && <p className="truncate">ID: {profile.id_number}</p>}
            <p className="text-blue-600 truncate">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
