
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Fuel, CreditCard, Smartphone, Shield, Zap, Car } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            EasyFuel
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
            Smart fuel purchasing platform that makes buying fuel easier, faster, and more convenient for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Get Started
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Fuel className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-blue-900">AI Fuel Tokens</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-center">
                Generate secure, AI-powered fuel tokens instantly. No more cash transactions or waiting in lines.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-blue-900">Fuel Credit System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-center">
                Manage your fuel budget with our intelligent credit system. Set limits and track your spending.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-blue-900">Mobile Convenience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-center">
                Complete fuel purchases from your mobile device. Quick, secure, and always available.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <CardTitle className="text-blue-900">Secure Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-center">
                Bank-level security with ID verification ensures all your transactions are safe and protected.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <CardTitle className="text-blue-900">Instant Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-center">
                Lightning-fast token generation and verification. Get your fuel and get back on the road quickly.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Car className="h-8 w-8 text-red-600" />
              </div>
              <CardTitle className="text-blue-900">Multi-Vehicle Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-center">
                Manage fuel purchases for multiple vehicles. Perfect for families and fleet management.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">How EasyFuel Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Create Account</h3>
              <p className="text-blue-700">Sign up and verify your identity for secure access to our platform.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Add Vehicle & Credit</h3>
              <p className="text-blue-700">Register your vehicle and load credit to your EasyFuel account.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Generate & Use Tokens</h3>
              <p className="text-blue-700">Create fuel tokens instantly and use them at participating stations.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 border-0 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to revolutionize your fuel experience?</h3>
              <p className="text-blue-100 mb-6">
                Join thousands of users who have already made the switch to smarter fuel purchasing.
              </p>
              <Link to="/auth">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  Start Your Journey Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
