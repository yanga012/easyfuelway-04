
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Fuel, Zap, Clock, Copy } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

interface FuelToken {
  token_code: string;
  fuel_amount_liters: number;
  expires_at: string;
  estimated_cost: number;
}

export const FuelTokenGenerator = () => {
  const { profile, vehicles, fuelCredits } = useProfile();
  const [selectedVehicle, setSelectedVehicle] = useState<string>('');
  const [fuelAmount, setFuelAmount] = useState<number>(0);
  const [generatedToken, setGeneratedToken] = useState<FuelToken | null>(null);
  const [loading, setLoading] = useState(false);

  const currentFuelPrice = 22.50; // R22.50 per liter (current SA average)
  const selectedVehicleData = vehicles.find(v => v.id === selectedVehicle);
  const estimatedCost = fuelAmount * currentFuelPrice;
  const canGenerate = profile?.id_verified && vehicles.length > 0 && selectedVehicle && fuelAmount > 0;

  const generateAIToken = () => {
    // AI-powered token generation algorithm
    const prefix = 'EF'; // EasyFuel prefix
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substr(2, 6).toUpperCase();
    const checksum = (fuelAmount * 100).toString(36).toUpperCase();
    
    return `${prefix}${timestamp}${random}${checksum}`;
  };

  const handleGenerateToken = async () => {
    if (!canGenerate || !fuelCredits) return;

    if (estimatedCost > (fuelCredits.credit_limit - fuelCredits.balance)) {
      toast({
        title: "Insufficient Credit",
        description: "You don't have enough credit limit for this amount.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const tokenCode = generateAIToken();
      const expiresAt = new Date();
      expiresAt.setHours(expiresAt.getHours() + 24); // 24-hour expiry

      // Create fuel transaction
      const { data: transaction, error: transactionError } = await supabase
        .from('fuel_transactions')
        .insert({
          user_id: profile!.id,
          vehicle_id: selectedVehicle,
          transaction_type: 'purchase',
          amount: estimatedCost,
          fuel_liters: fuelAmount,
          fuel_price_per_liter: currentFuelPrice,
          token_code: tokenCode,
          status: 'completed',
          expires_at: expiresAt.toISOString(),
        })
        .select()
        .single();

      if (transactionError) throw transactionError;

      // Create fuel token
      const { error: tokenError } = await supabase
        .from('fuel_tokens')
        .insert({
          user_id: profile!.id,
          transaction_id: transaction.id,
          token_code: tokenCode,
          fuel_amount_liters: fuelAmount,
          expires_at: expiresAt.toISOString(),
          status: 'active',
        });

      if (tokenError) throw tokenError;

      setGeneratedToken({
        token_code: tokenCode,
        fuel_amount_liters: fuelAmount,
        expires_at: expiresAt.toISOString(),
        estimated_cost: estimatedCost,
      });

      toast({
        title: "Token Generated!",
        description: `Fuel token for ${fuelAmount}L generated successfully`,
      });

    } catch (error) {
      console.error('Error generating token:', error);
      toast({
        title: "Error",
        description: "Failed to generate fuel token. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Token copied to clipboard",
    });
  };

  const fillTank = () => {
    if (selectedVehicleData) {
      setFuelAmount(selectedVehicleData.fuel_tank_capacity);
    }
  };

  if (!profile?.id_verified) {
    return (
      <Card className="bg-white/95 border-red-300 shadow-xl shadow-red-500/20">
        <CardContent className="text-center py-8">
          <Fuel className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-600 mb-2">ID Verification Required</h3>
          <p className="text-red-500/80">Complete ID verification to generate fuel tokens</p>
        </CardContent>
      </Card>
    );
  }

  if (vehicles.length === 0) {
    return (
      <Card className="bg-white/95 border-orange-300 shadow-xl shadow-orange-500/20">
        <CardContent className="text-center py-8">
          <Fuel className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-orange-600 mb-2">Vehicle Required</h3>
          <p className="text-orange-500/80">Add a vehicle to generate fuel tokens</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/95 border-blue-200 shadow-xl shadow-blue-500/10">
      <CardHeader>
        <CardTitle className="text-blue-900 flex items-center gap-2">
          <Fuel className="h-5 w-5" />
          AI Fuel Token Generator
          <Zap className="h-4 w-4 text-green-500" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!generatedToken ? (
          <div className="space-y-4">
            <div>
              <Label className="text-blue-800">Select Vehicle</Label>
              <select
                value={selectedVehicle}
                onChange={(e) => setSelectedVehicle(e.target.value)}
                className="w-full p-2 bg-white border border-blue-300 rounded-md text-blue-900"
              >
                <option value="">Choose a vehicle...</option>
                {vehicles.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.make} {vehicle.model} ({vehicle.registration_number}) - {vehicle.fuel_tank_capacity}L
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label className="text-blue-800">Fuel Amount (Liters)</Label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  value={fuelAmount || ''}
                  onChange={(e) => setFuelAmount(parseFloat(e.target.value) || 0)}
                  className="bg-white border-blue-300"
                  placeholder="Enter liters"
                  min="1"
                  max={selectedVehicleData?.fuel_tank_capacity || 100}
                  step="0.1"
                />
                <Button
                  type="button"
                  onClick={fillTank}
                  disabled={!selectedVehicleData}
                  variant="outline"
                  className="border-blue-300 text-blue-700"
                >
                  Full Tank
                </Button>
              </div>
              {selectedVehicleData && (
                <p className="text-xs text-blue-600/70 mt-1">
                  Max: {selectedVehicleData.fuel_tank_capacity}L for {selectedVehicleData.make} {selectedVehicleData.model}
                </p>
              )}
            </div>

            {fuelAmount > 0 && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-blue-800">Estimated Cost:</span>
                  <span className="text-blue-900 font-bold">R{estimatedCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-600">Price per liter:</span>
                  <span className="text-blue-700">R{currentFuelPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-600">Available Credit:</span>
                  <span className="text-blue-700">
                    R{((fuelCredits?.credit_limit || 0) - (fuelCredits?.balance || 0)).toFixed(2)}
                  </span>
                </div>
              </div>
            )}

            <Button
              onClick={handleGenerateToken}
              disabled={!canGenerate || loading}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
            >
              {loading ? "Generating..." : "Generate AI Fuel Token"}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center">
              <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                <Fuel className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-green-700 mb-2">Token Generated Successfully!</h3>
                
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border">
                    <p className="text-xs text-blue-600 mb-1">Fuel Token Code</p>
                    <div className="flex items-center gap-2">
                      <code className="text-lg font-mono text-blue-900 flex-1">
                        {generatedToken.token_code}
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(generatedToken.token_code)}
                        className="border-blue-300"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-blue-600">Fuel Amount</p>
                      <p className="text-blue-900 font-semibold">{generatedToken.fuel_amount_liters}L</p>
                    </div>
                    <div>
                      <p className="text-blue-600">Cost</p>
                      <p className="text-blue-900 font-semibold">R{generatedToken.estimated_cost.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-orange-600">
                    <Clock className="h-4 w-4" />
                    <span>Expires: {new Date(generatedToken.expires_at).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-blue-900 font-semibold">How to use:</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <p>1. Present this token code at any participating fuel station</p>
                <p>2. Station attendant will verify and process your fuel request</p>
                <p>3. Amount will be deducted from your EasyFuel credit balance</p>
                <p>4. Token expires in 24 hours if unused</p>
              </div>
            </div>

            <Button
              onClick={() => setGeneratedToken(null)}
              variant="outline"
              className="w-full border-blue-300 text-blue-700"
            >
              Generate Another Token
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
