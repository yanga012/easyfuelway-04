
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center">
        <div className="text-blue-600 text-xl">Loading your personalized dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Navigation />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              {profile?.full_name ? `Welcome back, ${profile.full_name}!` : 'Welcome to QuickScan Fuel!'}
            </h1>
            {user && (
              <p className="text-blue-600/80 mt-1">
                {user.email} • {profile?.platform?.toUpperCase() || 'Platform'} Driver
              </p>
            )}
          </div>
          <ProfileSection />
        </div>

        <div className="grid gap-6">
          <PersonalizedCreditCard />
          
          <div className="grid lg:grid-cols-2 gap-6">
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
