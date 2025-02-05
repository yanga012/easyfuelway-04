import { Button } from "@/components/ui/button";
import { PlusCircle, History, CreditCard } from "lucide-react";

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
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
        <span>Payments</span>
      </Button>
    </div>
  );
};