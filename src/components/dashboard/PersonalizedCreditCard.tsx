
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Plus, TrendingUp } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { Button } from "@/components/ui/button";

export const PersonalizedCreditCard = () => {
  const { fuelCredits, profile } = useProfile();

  const availableCredit = fuelCredits ? fuelCredits.credit_limit - fuelCredits.balance : 0;
  const usagePercentage = fuelCredits ? (fuelCredits.balance / fuelCredits.credit_limit) * 100 : 0;

  return (
    <Card className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 shadow-xl shadow-yellow-500/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-yellow-400 flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          {profile?.full_name ? `${profile.full_name}'s Fuel Credit` : 'Fuel Credit'}
        </CardTitle>
        <div className="text-right">
          <p className="text-xs text-yellow-500/80">Available Credit</p>
          <p className="text-lg font-bold text-yellow-400">R{availableCredit.toFixed(2)}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-yellow-500/80">Current Balance</p>
            <p className="text-2xl font-bold text-yellow-400">
              R{fuelCredits?.balance.toFixed(2) || '0.00'}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-yellow-500/80">Credit Limit</p>
            <p className="text-xl font-semibold text-yellow-300">
              R{fuelCredits?.credit_limit.toFixed(2) || '1000.00'}
            </p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-yellow-500/80">Usage</span>
            <span className="text-yellow-400">{usagePercentage.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-black/50 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(usagePercentage, 100)}%` }}
            />
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            size="sm" 
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            <Plus className="h-4 w-4 mr-2" />
            Load Credit
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10"
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            History
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
