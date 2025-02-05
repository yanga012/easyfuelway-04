
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { MessageSquare, PhoneCall, Mail, HelpCircle, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Support = () => {
  const { toast } = useToast();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Complaint Logged",
      description: "We'll get back to you within 24 hours.",
    });
    setSubject("");
    setMessage("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Customer Support</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <PhoneCall className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Helpline</h2>
          </div>
          <p className="text-muted-foreground mb-4">24/7 Support Available</p>
          <p className="font-semibold">+27 123 456 789</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Email Support</h2>
          </div>
          <p className="text-muted-foreground mb-4">Response within 24 hours</p>
          <p className="font-semibold">support@moveeasy.com</p>
        </Card>
      </div>

      <Card className="p-6 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <MessageSquare className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-semibold">Log a Complaint</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <Input
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="What's your complaint about?"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Please describe your issue in detail"
              className="min-h-[150px]"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Submit Complaint
          </Button>
        </form>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Info className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-semibold">FAQs</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">How do I top up my account?</h3>
            <p className="text-muted-foreground">You can top up your account through bank transfer, EFT, or automatic deduction from your e-hailing earnings.</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">When are the automatic deductions processed?</h3>
            <p className="text-muted-foreground">Automatic deductions are processed weekly, every Monday for the previous week's earnings.</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">How long does it take to process a refund?</h3>
            <p className="text-muted-foreground">Refunds are typically processed within 3-5 business days after approval.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Support;
