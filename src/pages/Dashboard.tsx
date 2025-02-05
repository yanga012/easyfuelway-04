import { CreditCard } from "@/components/dashboard/CreditCard";
import { QuickActions } from "@/components/dashboard/QuickActions";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="grid gap-6">
          <CreditCard />
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;