
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

interface ConsultationFormProps {
  children: React.ReactNode;
}

const ConsultationForm = ({ children }: ConsultationFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { toast } = useToast();
  const location = useLocation();

  // Get button style based on current page
  const getButtonStyle = () => {
    const path = location.pathname;
    
    if (path === "/" || path === "/contact") {
      // Orange theme for home and contact pages
      return "saw-gradient text-white hover:opacity-90";
    } else if (path === "/case-studies") {
      // Teal theme for case studies page
      return "bg-saw-teal hover:bg-cyan-600 text-white";
    } else if (path === "/services") {
      // Forest green theme for services page
      return "bg-saw-accent-green hover:bg-green-600 text-white";
    } else if (path === "/about") {
      // Blue theme for about page
      return "bg-saw-blue hover:bg-blue-700 text-white";
    } else {
      // Default gradient
      return "saw-gradient text-white hover:opacity-90";
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email content
      const emailContent = `
        New Consultation Request from SAW Analytics Website
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        
        Message/Request:
        ${formData.message}
        
        Submitted at: ${new Date().toLocaleString()}
      `;

      console.log("Consultation request submitted:", {
        formData,
        emailContent
      });

      // For now, we'll simulate email sending
      // In a real implementation, this would call a Supabase Edge Function
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Request Submitted!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });

      // Reset form and close dialog
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setOpen(false);

    } catch (error) {
      console.error("Error submitting consultation request:", error);
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-saw-navy">Request Consultation</AlertDialogTitle>
        </AlertDialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="your.email@company.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Your phone number"
              required
            />
          </div>

          <div>
            <Label htmlFor="message">Message/Request *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us about your analytics needs or questions..."
              className="min-h-[100px]"
              required
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 ${getButtonStyle()}`}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </div>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConsultationForm;
