
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car, Plus, CheckCircle, Clock } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { toast } from "@/components/ui/use-toast";

export const VehicleManagement = () => {
  const { vehicles, addVehicle, loading } = useProfile();
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: new Date().getFullYear(),
    registration_number: '',
    fuel_tank_capacity: 0,
    fuel_type: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addVehicle(formData);
      setShowAddForm(false);
      setFormData({
        make: '',
        model: '',
        year: new Date().getFullYear(),
        registration_number: '',
        fuel_tank_capacity: 0,
        fuel_type: '',
      });
      toast({
        title: "Vehicle Added",
        description: "Your vehicle has been registered successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add vehicle. Please try again.",
        variant: "destructive",
      });
    }
  };

  // AI-powered tank capacity estimation based on make/model
  const estimateTankCapacity = (make: string, model: string) => {
    const estimates: Record<string, Record<string, number>> = {
      toyota: { corolla: 50, camry: 60, hilux: 80, quantum: 70 },
      volkswagen: { polo: 45, golf: 50, jetta: 55 },
      ford: { fiesta: 42, focus: 52, ranger: 80 },
      nissan: { micra: 41, almera: 52, navara: 80 },
      hyundai: { i10: 35, i20: 45, accent: 45 },
    };

    const makeKey = make.toLowerCase();
    const modelKey = model.toLowerCase();
    
    return estimates[makeKey]?.[modelKey] || 50; // Default 50L if not found
  };

  const handleMakeModelChange = () => {
    if (formData.make && formData.model) {
      const estimatedCapacity = estimateTankCapacity(formData.make, formData.model);
      setFormData(prev => ({ ...prev, fuel_tank_capacity: estimatedCapacity }));
    }
  };

  return (
    <Card className="bg-black/95 border-yellow-500/30 shadow-xl shadow-yellow-500/20">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-yellow-400 flex items-center gap-2">
          <Car className="h-5 w-5" />
          Vehicle Management
        </CardTitle>
        {!showAddForm && (
          <Button
            onClick={() => setShowAddForm(true)}
            size="sm"
            className="bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Vehicle
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {showAddForm && (
          <form onSubmit={handleSubmit} className="space-y-4 p-4 border border-yellow-500/30 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="make" className="text-yellow-300">Make</Label>
                <Input
                  id="make"
                  value={formData.make}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, make: e.target.value }));
                    handleMakeModelChange();
                  }}
                  className="bg-black/60 border-yellow-500/30"
                  placeholder="e.g., Toyota"
                  required
                />
              </div>
              <div>
                <Label htmlFor="model" className="text-yellow-300">Model</Label>
                <Input
                  id="model"
                  value={formData.model}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, model: e.target.value }));
                    handleMakeModelChange();
                  }}
                  className="bg-black/60 border-yellow-500/30"
                  placeholder="e.g., Corolla"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="year" className="text-yellow-300">Year</Label>
                <Input
                  id="year"
                  type="number"
                  value={formData.year}
                  onChange={(e) => setFormData(prev => ({ ...prev, year: parseInt(e.target.value) }))}
                  className="bg-black/60 border-yellow-500/30"
                  min="1990"
                  max={new Date().getFullYear()}
                  required
                />
              </div>
              <div>
                <Label htmlFor="registration" className="text-yellow-300">Registration</Label>
                <Input
                  id="registration"
                  value={formData.registration_number}
                  onChange={(e) => setFormData(prev => ({ ...prev, registration_number: e.target.value.toUpperCase() }))}
                  className="bg-black/60 border-yellow-500/30"
                  placeholder="e.g., ABC123GP"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fuelType" className="text-yellow-300">Fuel Type</Label>
                <Select
                  value={formData.fuel_type}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, fuel_type: value }))}
                >
                  <SelectTrigger className="bg-black/60 border-yellow-500/30">
                    <SelectValue placeholder="Select fuel type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="petrol">Petrol</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="tankCapacity" className="text-yellow-300">Tank Capacity (L)</Label>
                <Input
                  id="tankCapacity"
                  type="number"
                  value={formData.fuel_tank_capacity}
                  onChange={(e) => setFormData(prev => ({ ...prev, fuel_tank_capacity: parseFloat(e.target.value) }))}
                  className="bg-black/60 border-yellow-500/30"
                  min="20"
                  max="200"
                  step="0.1"
                  required
                />
                <p className="text-xs text-yellow-500/70 mt-1">AI estimated based on make/model</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button type="submit" disabled={loading} className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Add Vehicle
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowAddForm(false)}
                className="border-yellow-500/50"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}

        <div className="space-y-3">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="flex items-center justify-between p-3 border border-yellow-500/20 rounded-lg">
              <div className="flex items-center gap-3">
                <Car className="h-5 w-5 text-yellow-400" />
                <div>
                  <p className="font-medium text-yellow-300">
                    {vehicle.make} {vehicle.model} ({vehicle.year})
                  </p>
                  <p className="text-sm text-yellow-500/80">
                    {vehicle.registration_number} • {vehicle.fuel_tank_capacity}L {vehicle.fuel_type}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {vehicle.verified ? (
                  <div className="flex items-center gap-1 text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-xs">Verified</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-orange-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-xs">Pending</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {vehicles.length === 0 && !showAddForm && (
            <div className="text-center py-8 text-yellow-500/60">
              <Car className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No vehicles registered yet</p>
              <p className="text-sm">Add your first vehicle to get started</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
