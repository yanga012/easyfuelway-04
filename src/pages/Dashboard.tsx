
import { CreditCard } from "@/components/dashboard/CreditCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ProfileSection } from "@/components/dashboard/ProfileSection";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <ProfileSection />
        </div>
        <div className="grid gap-6">
          <CreditCard />
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
