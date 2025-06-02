
import { Button } from "@/components/ui/button";
import { PlusCircle, History, CreditCard, Banknote, Wallet, PiggyBank } from "lucide-react";

export const QuickActions = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto bg-black/95 border-yellow-500/30 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400/50 hover:bg-yellow-500/10 transition-all"
        >
          <PlusCircle className="h-6 w-6 mb-2" />
          <span>Load Credits</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto bg-black/95 border-yellow-500/30 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400/50 hover:bg-yellow-500/10 transition-all"
        >
          <History className="h-6 w-6 mb-2" />
          <span>Transactions</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto bg-black/95 border-yellow-500/30 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400/50 hover:bg-yellow-500/10 transition-all"
        >
          <CreditCard className="h-6 w-6 mb-2" />
          <span>Card Payment</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto bg-black/95 border-yellow-500/30 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400/50 hover:bg-yellow-500/10 transition-all"
        >
          <Banknote className="h-6 w-6 mb-2" />
          <span>EFT Payment</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto bg-black/95 border-yellow-500/30 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400/50 hover:bg-yellow-500/10 transition-all"
        >
          <Wallet className="h-6 w-6 mb-2" />
          <span>Bank Deposit</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto bg-black/95 border-yellow-500/30 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400/50 hover:bg-yellow-500/10 transition-all"
        >
          <PiggyBank className="h-6 w-6 mb-2" />
          <span>Auto-Deduct</span>
        </Button>
      </div>
    </div>
  );
};
