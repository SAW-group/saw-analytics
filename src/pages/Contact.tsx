
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Phone, Mail, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: "",
    service: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      industry: "",
      message: "",
      service: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const offices = [
    {
      city: "New York",
      address: "125 Park Avenue, Suite 2500",
      zipCode: "New York, NY 10017",
      phone: "+1 (212) 555-0123",
      email: "ny@sawanalytics.com"
    },
    {
      city: "Chicago", 
      address: "233 S Wacker Drive, Suite 4400",
      zipCode: "Chicago, IL 60606",
      phone: "+1 (312) 555-0123",
      email: "chicago@sawanalytics.com"
    },
    {
      city: "San Francisco",
      address: "50 California Street, Suite 1500", 
      zipCode: "San Francisco, CA 94111",
      phone: "+1 (415) 555-0123",
      email: "sf@sawanalytics.com"
    }
  ];

  const contactReasons = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Schedule a Consultation",
      description: "Discuss your analytics needs with our experts and explore how we can help transform your business.",
      action: "Book Meeting"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership Opportunities",
      description: "Explore strategic partnerships, joint ventures, or collaboration opportunities with SAW Analytics.",
      action: "Learn More"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "General Inquiries",
      description: "Have questions about our services, pricing, or capabilities? We're here to help.",
      action: "Contact Us"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-saw-navy to-saw-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to transform your data into strategic advantage? Let's start the conversation 
              about how SAW Analytics can drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-6">How Can We Help?</h2>
            <p className="text-xl text-saw-gray max-w-3xl mx-auto">
              Whether you're looking to start an analytics project or explore partnership opportunities, 
              we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactReasons.map((reason, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-saw-teal mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-saw-navy mb-4">{reason.title}</h3>
                  <p className="text-saw-gray mb-6">{reason.description}</p>
                  <Button className="w-full saw-gradient text-white hover:opacity-90">
                    {reason.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-saw-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-saw-navy mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select onValueChange={(value) => handleInputChange("industry", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Financial Services</SelectItem>
                          <SelectItem value="retail">Retail & E-commerce</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="logistics">Logistics & Transportation</SelectItem>
                          <SelectItem value="energy">Energy & Utilities</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="realestate">Real Estate</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="What service are you interested in?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="finance">Finance Analytics</SelectItem>
                        <SelectItem value="operations">Operations Analytics</SelectItem>
                        <SelectItem value="strategy">Business Strategy</SelectItem>
                        <SelectItem value="hr">People & HR Analytics</SelectItem>
                        <SelectItem value="customer">Customer Insights</SelectItem>
                        <SelectItem value="competitor">Competitor Analysis</SelectItem>
                        <SelectItem value="market">Market Research</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your analytics needs, challenges, or questions..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full saw-gradient text-white hover:opacity-90 text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-saw-navy mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-saw-teal" />
                    <span className="text-saw-gray">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-saw-teal" />
                    <span className="text-saw-gray">contact@sawanalytics.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-saw-teal" />
                    <span className="text-saw-gray">Response within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div>
                <h4 className="text-xl font-semibold text-saw-navy mb-4">Our Offices</h4>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index} className="border-l-4 border-l-saw-teal">
                      <CardContent className="p-4">
                        <h5 className="font-semibold text-saw-navy mb-2">{office.city}</h5>
                        <div className="text-sm text-saw-gray space-y-1">
                          <p>{office.address}</p>
                          <p>{office.zipCode}</p>
                          <p>{office.phone}</p>
                          <p>{office.email}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-saw-navy mb-4">Business Hours</h4>
                  <div className="space-y-2 text-sm text-saw-gray">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-saw-navy mb-4">Find Us</h3>
            <p className="text-saw-gray">Visit our offices or schedule a virtual meeting</p>
          </div>
          
          <div className="bg-saw-light-gray rounded-lg p-12 text-center">
            <div className="w-16 h-16 bg-saw-teal rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-saw-navy mb-2">Interactive Map</h4>
            <p className="text-saw-gray mb-6">
              Detailed office locations and directions will be integrated here
            </p>
            <Button variant="outline" className="border-saw-teal text-saw-teal hover:bg-saw-teal hover:text-white">
              Get Directions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
