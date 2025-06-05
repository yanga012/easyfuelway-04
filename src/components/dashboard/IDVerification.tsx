
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
    <Card className="bg-white/95 border-blue-200 shadow-xl shadow-blue-500/10">
      <CardHeader className="pb-3 sm:pb-6">
        <CardTitle className="text-blue-900 flex items-center gap-2 text-lg sm:text-xl">
          <FileCheck className="h-5 w-5 flex-shrink-0" />
          <span>ID Verification</span>
          {profile?.id_verified ? (
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {profile?.id_verified ? (
          <div className="text-center py-4 sm:py-6">
            <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg font-semibold text-green-600 mb-2">Verification Complete</h3>
            <p className="text-blue-700/80 text-sm sm:text-base">Your identity has been successfully verified</p>
            <div className="mt-4 p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <p className="text-sm text-green-700 text-left">
                <strong>Verified Details:</strong><br />
                Name: {profile.full_name}<br />
                ID: {profile.id_number}<br />
                Platform: {profile.platform.toUpperCase()}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-blue-900 text-sm sm:text-base">Full Name</Label>
                <Input
                  id="fullName"
                  value={formData.full_name}
                  onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                  className="bg-white border-blue-300 text-sm sm:text-base"
                  placeholder="Enter your full name as per ID"
                  required
                />
              </div>

              <div>
                <Label htmlFor="idNumber" className="text-blue-900 text-sm sm:text-base">ID Number</Label>
                <Input
                  id="idNumber"
                  value={formData.id_number}
                  onChange={(e) => setFormData(prev => ({ ...prev, id_number: e.target.value }))}
                  className="bg-white border-blue-300 text-sm sm:text-base"
                  placeholder="13-digit ID number"
                  maxLength={13}
                  required
                />
                {formData.id_number && !validateIDNumber(formData.id_number) && (
                  <p className="text-red-500 text-xs mt-1">Please enter a valid 13-digit ID number</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-blue-900 text-sm sm:text-base">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone_number}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone_number: e.target.value }))}
                  className="bg-white border-blue-300 text-sm sm:text-base"
                  placeholder="+27 xxx xxx xxxx"
                  type="tel"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-blue-900 text-sm sm:text-base">Physical Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                  className="bg-white border-blue-300 text-sm sm:text-base"
                  placeholder="Enter your full address"
                />
              </div>

              <div>
                <Label htmlFor="license" className="text-blue-900 text-sm sm:text-base">Driver's License Number</Label>
                <Input
                  id="license"
                  value={formData.driver_license}
                  onChange={(e) => setFormData(prev => ({ ...prev, driver_license: e.target.value }))}
                  className="bg-white border-blue-300 text-sm sm:text-base"
                  placeholder="Enter your license number"
                />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-blue-200">
              <div className="text-center">
                <p className="text-sm text-blue-700/80 mb-3 sm:mb-4">
                  Upload a clear photo of your ID document
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="border-blue-300 text-blue-700 w-full sm:w-auto"
                  size="sm"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload ID Document
                </Button>
              </div>

              <Button
                type="submit"
                disabled={loading || !validateIDNumber(formData.id_number)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {loading ? "Saving..." : "Save & Submit for Verification"}
              </Button>
            </div>

            <div className="text-xs text-blue-600/60 text-center">
              Your information is encrypted and secure. Verification typically takes 24-48 hours.
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
};
