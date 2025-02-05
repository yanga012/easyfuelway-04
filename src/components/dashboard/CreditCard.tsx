import { Card } from "@/components/ui/card";

export const CreditCard = () => {
  return (
    <Card className="p-6 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Fuel Credit Balance</h3>
          <span className="text-sm opacity-80">Available</span>
        </div>
        <div className="text-3xl font-bold">R 1,200.00</div>
        <div className="text-sm opacity-80">
          Next payment due: 15 March 2024
        </div>
      </div>
    </Card>
  );
};