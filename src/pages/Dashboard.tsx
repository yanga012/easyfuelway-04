
import { Navigation } from "@/components/dashboard/Navigation";
import { PersonalizedCreditCard } from "@/components/dashboard/PersonalizedCreditCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { VehicleManagement } from "@/components/dashboard/VehicleManagement";
import { IDVerification } from "@/components/dashboard/IDVerification";
import { FuelTokenGenerator } from "@/components/dashboard/FuelTokenGenerator";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { ProfileProvider } from "@/hooks/useProfile";

const DashboardContent = () => {
  const { user } = useAuth();
  const { profile, loading } = useProfile();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center px-4">
        <div className="text-blue-600 text-lg text-center">Loading your personalized dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Navigation />
      <div className="max-w-7xl mx-auto p-3 sm:p-4 lg:p-8 space-y-4 sm:space-y-6">
        <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="min-w-0 flex-1">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight">
              {profile?.full_name ? `Welcome back, ${profile.full_name}!` : 'Welcome to EasyFuel!'}
            </h1>
            {user && (
              <p className="text-blue-600/80 mt-1 text-sm sm:text-base truncate">
                {user.email} • Fuel Purchase Account
              </p>
            )}
          </div>
          <div className="flex-shrink-0">
            <ProfileSection />
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6">
          <PersonalizedCreditCard />
          
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            <FuelTokenGenerator />
            <IDVerification />
          </div>
          
          <VehicleManagement />
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <ProfileProvider>
      <DashboardContent />
    </ProfileProvider>
  );
};

export default Dashboard;
