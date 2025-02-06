
import { Card } from "@/components/ui/card";

export const CreditCard = () => {
  return (
    <Card className="p-6 bg-gradient-to-br from-black via-[#F97316]/20 to-black border border-[#F97316]/20">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[#FBBF24]">Fuel Credit Balance</h3>
          <span className="text-sm text-[#F97316]/80">Available</span>
        </div>
        <div className="text-3xl font-bold text-[#F97316]">R 1,200.00</div>
        <div className="text-sm text-[#F97316]/80">
          Next payment due: 15 March 2024
        </div>
      </div>
    </Card>
  );
};
