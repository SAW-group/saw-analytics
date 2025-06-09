
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, TrendingUp, Users, Target, Lightbulb, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import ConsultationForm from "@/components/ConsultationForm";

const Index = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Financial Analytics",
      description: "Revenue forecasting, risk assessment, and financial modeling to drive profitability."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Operations Analytics", 
      description: "Supply chain optimization and operational efficiency analysis."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business Strategy",
      description: "KPI tracking and decision intelligence for strategic planning."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "People & HR Analytics",
      description: "Employee performance insights and retention analysis."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Customer Insights",
      description: "Behavior analysis and customer segmentation strategies."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Market Research",
      description: "Competitive analysis and market positioning insights."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "25+", label: "Industries Served" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  return (
    <div>
      {/* Hero Section - Orange and Warm White Theme */}
      <section className="py-20 bg-gradient-to-br from-saw-orange to-amber-400 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Translating Data into Strategy
            </h1>
            <p className="text-xl lg:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto animate-fade-in">
              Comprehensive analytics and insights services to help businesses make data-driven decisions 
              across finance, operations, strategy, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <ConsultationForm>
                <Button size="lg" className="bg-white text-saw-orange hover:bg-orange-50 text-lg px-8 py-3">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </ConsultationForm>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-saw-orange text-lg px-8 py-3">
                <Link to="/services" className="flex items-center">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Warm White */}
      <section className="py-16 bg-saw-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-4xl font-bold text-saw-orange">{stat.number}</div>
                <div className="text-amber-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-orange mb-6">Our Analytics Services</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              We provide end-to-end analytics solutions across key business functions to drive growth and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-saw-orange">
                <CardContent className="p-6">
                  <div className="text-saw-orange mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-amber-800 mb-3">{service.title}</h3>
                  <p className="text-amber-600 mb-4">{service.description}</p>
                  <Link to="/services" className="text-saw-orange hover:text-amber-600 font-medium inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <ConsultationForm>
              <Button size="lg" className="bg-saw-orange hover:bg-amber-500 text-white text-lg px-8 py-3">
                Request Custom Analytics Solution
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </ConsultationForm>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Warm White Background */}
      <section className="py-20 bg-saw-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-orange mb-6">What Our Clients Say</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Real stories from businesses that have transformed their operations with SAW Analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white group hover:shadow-lg transition-all duration-300 border border-orange-200">
              <CardContent className="p-6">
                <div className="text-amber-800 font-bold mb-2">
                  "SAW Analytics helped us unlock valuable insights from our data, leading to a 30% increase in revenue."
                </div>
                <p className="text-amber-600 mb-4">
                  - John Smith, CEO of Tech Innovations Inc.
                </p>
                <Link to="/case-studies" className="text-saw-orange hover:text-amber-600 font-medium inline-flex items-center">
                  Read Case Study <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white group hover:shadow-lg transition-all duration-300 border border-orange-200">
              <CardContent className="p-6">
                <div className="text-amber-800 font-bold mb-2">
                  "Their expertise in financial analytics transformed our risk management processes and improved our bottom line."
                </div>
                <p className="text-amber-600 mb-4">
                  - Emily Johnson, CFO of Global Finance Corp.
                </p>
                <Link to="/case-studies" className="text-saw-orange hover:text-amber-600 font-medium inline-flex items-center">
                  Read Case Study <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-saw-orange to-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business with Data?</h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Contact us today to schedule a consultation and discover how SAW Analytics can drive your success.
          </p>
          <ConsultationForm>
            <Button size="lg" className="bg-white text-saw-orange hover:bg-orange-50 text-lg px-8 py-3">
              Request a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </ConsultationForm>
        </div>
      </section>
    </div>
  );
};

export default Index;
