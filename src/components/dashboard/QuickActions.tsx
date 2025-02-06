
import { Button } from "@/components/ui/button";
import { PlusCircle, History, CreditCard, Banknote, Wallet, PiggyBank } from "lucide-react";

export const QuickActions = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg bg-gradient-to-r from-[#F97316] to-[#FBBF24] bg-clip-text text-transparent">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto bg-black/95 border-[#F97316]/20 text-[#F97316] hover:text-[#FBBF24] hover:border-[#FBBF24]/40"
        >
          <PlusCircle className="h-6 w-6 mb-2" />
          <span>Load Credits</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto bg-black/95 border-[#F97316]/20 text-[#F97316] hover:text-[#FBBF24] hover:border-[#FBBF24]/40"
        >
          <History className="h-6 w-6 mb-2" />
          <span>Transactions</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto bg-black/95 border-[#F97316]/20 text-[#F97316] hover:text-[#FBBF24] hover:border-[#FBBF24]/40"
        >
          <CreditCard className="h-6 w-6 mb-2" />
          <span>Card Payment</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto bg-black/95 border-[#F97316]/20 text-[#F97316] hover:text-[#FBBF24] hover:border-[#FBBF24]/40"
        >
          <Banknote className="h-6 w-6 mb-2" />
          <span>EFT Payment</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto bg-black/95 border-[#F97316]/20 text-[#F97316] hover:text-[#FBBF24] hover:border-[#FBBF24]/40"
        >
          <Wallet className="h-6 w-6 mb-2" />
          <span>Bank Deposit</span>
        </Button>
        <Button
          variant="outline"
          className="flex flex-col items-center p-4 h-auto bg-black/95 border-[#F97316]/20 text-[#F97316] hover:text-[#FBBF24] hover:border-[#FBBF24]/40"
        >
          <PiggyBank className="h-6 w-6 mb-2" />
          <span>Auto-Deduct</span>
        </Button>
      </div>
    </div>
  );
};
