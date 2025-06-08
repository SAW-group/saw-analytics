
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BarChart, Users, Briefcase, User, Phone, FileText } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Finance Analytics",
      description: "Financial modeling, risk assessment, and forecasting to drive profitable decisions.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Operations Analytics",
      description: "Supply chain optimization and efficiency analysis for operational excellence.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Business Strategy",
      description: "KPI tracking and decision intelligence for strategic growth.",
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "People & HR Analytics",
      description: "Employee performance analysis and attrition prediction.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Insights",
      description: "Behavior analysis and segmentation for better customer relationships.",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Market Research",
      description: "Data-driven insights for product launch and market optimization.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "15+", label: "Industries Served" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  const testimonials = [
    {
      quote: "SAW Analytics transformed our data into actionable insights that increased our revenue by 35%.",
      author: "Sarah Johnson",
      title: "CEO, TechCorp",
      company: "TechCorp"
    },
    {
      quote: "Their financial modeling helped us secure $50M in funding. Exceptional analytical expertise.",
      author: "Michael Chen",
      title: "CFO, StartupX",
      company: "StartupX"
    },
    {
      quote: "The operational insights saved us 20% in costs while improving efficiency across all departments.",
      author: "Emily Rodriguez",
      title: "COO, Manufacturing Plus",
      company: "Manufacturing Plus"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-saw-navy via-saw-blue to-saw-teal text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Translating Data into Strategy
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in">
              Comprehensive analytics and insights services that transform your business data 
              into competitive advantages across every industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="bg-saw-orange hover:bg-saw-orange/90 text-white px-8 py-4 text-lg">
                Request a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-saw-navy px-8 py-4 text-lg">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-saw-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-saw-gray font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-saw-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-4">
              Comprehensive Analytics Services
            </h2>
            <p className="text-xl text-saw-gray max-w-3xl mx-auto">
              From financial modeling to customer insights, we provide end-to-end analytics 
              solutions that drive measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-saw-teal mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-saw-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-saw-gray">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="saw-gradient text-white hover:opacity-90">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-saw-gray max-w-3xl mx-auto">
              Our analytics expertise spans across multiple industries, delivering 
              tailored solutions for unique business challenges.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {["Healthcare", "Finance", "Retail", "Technology", "Manufacturing", "Logistics", "Education", "Real Estate", "Energy", "Government"].map((industry, index) => (
              <Card key={index} className="group hover:shadow-md transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-saw-light-blue rounded-full flex items-center justify-center group-hover:bg-saw-teal transition-colors">
                    <div className="w-6 h-6 bg-saw-teal rounded group-hover:bg-white transition-colors"></div>
                  </div>
                  <h3 className="font-semibold text-saw-navy group-hover:text-saw-teal transition-colors">
                    {industry}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/industries">
              <Button size="lg" variant="outline" className="border-saw-teal text-saw-teal hover:bg-saw-teal hover:text-white">
                View All Industries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-saw-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-saw-gray">
              Real results from real partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <blockquote className="text-saw-gray mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-saw-light-blue rounded-full flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-saw-teal" />
                    </div>
                    <div>
                      <div className="font-semibold text-saw-navy">{testimonial.author}</div>
                      <div className="text-sm text-saw-gray">{testimonial.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 saw-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's discuss how our analytics expertise can drive your business forward. 
            Schedule a consultation with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-saw-teal hover:bg-gray-100 px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-saw-teal px-8 py-4 text-lg">
                <FileText className="w-5 h-5 mr-2" />
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
