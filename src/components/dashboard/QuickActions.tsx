
import { Button } from "@/components/ui/button";
import { PlusCircle, History, CreditCard, Banknote, Wallet, PiggyBank } from "lucide-react";

export const QuickActions = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto"
        >
          <PlusCircle className="h-6 w-6 mb-2" />
          <span>Load Credits</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto"
        >
          <History className="h-6 w-6 mb-2" />
          <span>Transactions</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto"
        >
          <CreditCard className="h-6 w-6 mb-2" />
          <span>Card Payment</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto"
        >
          <Banknote className="h-6 w-6 mb-2" />
          <span>EFT Payment</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto"
        >
          <Wallet className="h-6 w-6 mb-2" />
          <span>Bank Deposit</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto"
        >
          <PiggyBank className="h-6 w-6 mb-2" />
          <span>Auto-Deduct</span>
        </Button>
      </div>
    </div>
  );
};
