
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Plus, TrendingUp } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { Button } from "@/components/ui/button";

export const PersonalizedCreditCard = () => {
  const { fuelCredits, profile } = useProfile();

  const availableCredit = fuelCredits ? fuelCredits.credit_limit - fuelCredits.balance : 0;
  const usagePercentage = fuelCredits ? (fuelCredits.balance / fuelCredits.credit_limit) * 100 : 0;

  return (
    <Card className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 border-blue-500/30 shadow-xl shadow-blue-500/20">
      <CardHeader className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 pb-3 sm:pb-6">
        <CardTitle className="text-blue-400 flex items-center gap-2 text-base sm:text-lg">
          <CreditCard className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
          <span className="truncate">{profile?.full_name ? `${profile.full_name}'s Fuel Credit` : 'Fuel Credit'}</span>
        </CardTitle>
        <div className="text-left sm:text-right">
          <p className="text-xs text-blue-300/80">Available Credit</p>
          <p className="text-lg sm:text-xl font-bold text-blue-400">R{availableCredit.toFixed(2)}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-sm text-blue-300/80">Current Balance</p>
            <p className="text-xl sm:text-2xl font-bold text-blue-400">
              R{fuelCredits?.balance.toFixed(2) || '0.00'}
            </p>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-sm text-blue-300/80">Credit Limit</p>
            <p className="text-lg sm:text-xl font-semibold text-blue-300">
              R{fuelCredits?.credit_limit.toFixed(2) || '1000.00'}
            </p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs sm:text-sm">
            <span className="text-blue-300/80">Usage</span>
            <span className="text-blue-400">{usagePercentage.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-slate-800/50 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(usagePercentage, 100)}%` }}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <Button 
            size="sm" 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm"
          >
            <Plus className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            Load Credit
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 border-blue-500/50 text-blue-400 hover:bg-blue-600/10 text-sm"
          >
            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
            History
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
