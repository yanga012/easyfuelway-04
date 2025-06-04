
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, CreditCard, FileCheck, Fuel, Smartphone, Wallet } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";

export const QuickActions = () => {
  const { profile, vehicles } = useProfile();

  const actions = [
    {
      icon: Fuel,
      title: "Generate Fuel Token",
      description: "AI-powered fuel access token",
      color: "bg-green-500/20 border-green-500/30 hover:bg-green-500/30",
      disabled: !profile?.id_verified || vehicles.length === 0,
      badge: profile?.id_verified && vehicles.length > 0 ? null : "Setup Required"
    },
    {
      icon: Car,
      title: "Add Vehicle",
      description: "Register your vehicle details",
      color: "bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30",
      disabled: false,
    },
    {
      icon: FileCheck,
      title: "ID Verification",
      description: "Verify your identity",
      color: "bg-purple-500/20 border-purple-500/30 hover:bg-purple-500/30",
      disabled: false,
      badge: profile?.id_verified ? "Verified" : "Required"
    },
    {
      icon: CreditCard,
      title: "Load Credit",
      description: "Add funds to your account",
      color: "bg-orange-500/20 border-orange-500/30 hover:bg-orange-500/30",
      disabled: !profile?.id_verified,
    },
    {
      icon: Smartphone,
      title: "Mobile Wallet",
      description: "Link mobile payment",
      color: "bg-pink-500/20 border-pink-500/30 hover:bg-pink-500/30",
      disabled: false,
    },
    {
      icon: Wallet,
      title: "Transaction History",
      description: "View your fuel purchases",
      color: "bg-indigo-500/20 border-indigo-500/30 hover:bg-indigo-500/30",
      disabled: false,
    },
  ];

  return (
    <Card className="bg-white/95 border-blue-200 shadow-xl shadow-blue-500/10">
      <CardHeader>
        <CardTitle className="text-blue-900">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-auto p-4 flex flex-col items-center gap-3 ${action.color} ${
                action.disabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={action.disabled}
            >
              <div className="relative">
                <action.icon className="h-8 w-8" />
                {action.badge && (
                  <span className={`absolute -top-2 -right-2 px-1 py-0.5 text-xs rounded-full ${
                    action.badge === "Verified" ? "bg-green-500 text-white" : 
                    action.badge === "Required" ? "bg-red-500 text-white" : 
                    "bg-orange-500 text-white"
                  }`}>
                    {action.badge}
                  </span>
                )}
              </div>
              <div className="text-center">
                <p className="font-medium text-sm">{action.title}</p>
                <p className="text-xs opacity-80">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
