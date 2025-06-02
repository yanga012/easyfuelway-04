
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileCheck, Upload, CheckCircle, AlertCircle } from "lucide-react";
import { useProfile } from "@/hooks/useProfile";
import { toast } from "@/components/ui/use-toast";

export const IDVerification = () => {
  const { profile, updateProfile } = useProfile();
  const [formData, setFormData] = useState({
    full_name: profile?.full_name || '',
    id_number: profile?.id_number || '',
    phone_number: profile?.phone_number || '',
    address: profile?.address || '',
    driver_license: profile?.driver_license || '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await updateProfile(formData);
      toast({
        title: "Profile Updated",
        description: "Your information has been saved successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const validateIDNumber = (idNumber: string) => {
    // Basic South African ID number validation
    const idRegex = /^\d{13}$/;
    return idRegex.test(idNumber);
  };

  return (
    <Card className="bg-black/95 border-yellow-500/30 shadow-xl shadow-yellow-500/20">
      <CardHeader>
        <CardTitle className="text-yellow-400 flex items-center gap-2">
          <FileCheck className="h-5 w-5" />
          ID Verification
          {profile?.id_verified ? (
            <CheckCircle className="h-5 w-5 text-green-400" />
          ) : (
            <AlertCircle className="h-5 w-5 text-orange-400" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {profile?.id_verified ? (
          <div className="text-center py-6">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-400 mb-2">Verification Complete</h3>
            <p className="text-yellow-500/80">Your identity has been successfully verified</p>
            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-sm text-green-300">
                <strong>Verified Details:</strong><br />
                Name: {profile.full_name}<br />
                ID: {profile.id_number}<br />
                Platform: {profile.platform.toUpperCase()}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-yellow-300">Full Name</Label>
                <Input
                  id="fullName"
                  value={formData.full_name}
                  onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                  className="bg-black/60 border-yellow-500/30"
                  placeholder="Enter your full name as per ID"
                  required
                />
              </div>

              <div>
                <Label htmlFor="idNumber" className="text-yellow-300">ID Number</Label>
                <Input
                  id="idNumber"
                  value={formData.id_number}
                  onChange={(e) => setFormData(prev => ({ ...prev, id_number: e.target.value }))}
                  className="bg-black/60 border-yellow-500/30"
                  placeholder="13-digit ID number"
                  maxLength={13}
                  required
                />
                {formData.id_number && !validateIDNumber(formData.id_number) && (
                  <p className="text-red-400 text-xs mt-1">Please enter a valid 13-digit ID number</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-yellow-300">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone_number}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone_number: e.target.value }))}
                  className="bg-black/60 border-yellow-500/30"
                  placeholder="+27 xxx xxx xxxx"
                  type="tel"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-yellow-300">Physical Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  className="bg-black/60 border-yellow-500/30"
                  placeholder="Enter your full address"
                />
              </div>

              <div>
                <Label htmlFor="license" className="text-yellow-300">Driver's License Number</Label>
                <Input
                  id="license"
                  value={formData.driver_license}
                  onChange={(e) => setFormData(prev => ({ ...prev, driver_license: e.target.value }))}
                  className="bg-black/60 border-yellow-500/30"
                  placeholder="Enter your license number"
                />
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-yellow-500/30">
              <div className="text-center">
                <p className="text-sm text-yellow-500/80 mb-4">
                  Upload a clear photo of your ID document
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="border-yellow-500/50 text-yellow-400"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload ID Document
                </Button>
              </div>

              <Button
                type="submit"
                disabled={loading || !validateIDNumber(formData.id_number)}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                {loading ? "Saving..." : "Save & Submit for Verification"}
              </Button>
            </div>

            <div className="text-xs text-yellow-500/60 text-center">
              Your information is encrypted and secure. Verification typically takes 24-48 hours.
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
};
