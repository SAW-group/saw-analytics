
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Users, Briefcase, User, Phone, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "Finance Analytics",
      subtitle: "Transform financial data into strategic insights",
      description: "Comprehensive financial analysis and modeling to optimize performance, assess risks, and drive profitable growth.",
      features: [
        "Financial Modeling & Forecasting",
        "Risk Assessment & Management",
        "Investment Analysis",
        "Budget Optimization",
        "Performance Benchmarking",
        "Regulatory Compliance Analytics"
      ],
      benefits: "Average 25% improvement in financial decision accuracy"
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Operations Analytics",
      subtitle: "Optimize processes for maximum efficiency",
      description: "Data-driven approaches to streamline operations, reduce costs, and improve productivity across your entire value chain.",
      features: [
        "Supply Chain Optimization",
        "Process Efficiency Analysis",
        "Quality Control Analytics",
        "Inventory Management",
        "Resource Allocation",
        "Performance Monitoring"
      ],
      benefits: "Typical 20-30% reduction in operational costs"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Business Strategy Analytics",
      subtitle: "KPI tracking and strategic decision intelligence",
      description: "Strategic insights that align your business objectives with data-driven execution plans for sustainable growth.",
      features: [
        "KPI Development & Tracking",
        "Market Positioning Analysis",
        "Competitive Intelligence",
        "Growth Strategy Analytics",
        "Performance Dashboards",
        "Strategic Planning Support"
      ],
      benefits: "Enhanced strategic planning leading to 40% faster goal achievement"
    },
    {
      icon: <User className="w-12 h-12" />,
      title: "People & HR Analytics",
      subtitle: "Workforce optimization and talent management",
      description: "Human capital analytics that improve employee engagement, reduce turnover, and optimize organizational performance.",
      features: [
        "Employee Performance Analysis",
        "Attrition Prediction & Prevention",
        "Talent Acquisition Analytics",
        "Compensation Benchmarking",
        "Training Effectiveness",
        "Organizational Network Analysis"
      ],
      benefits: "Average 35% reduction in employee turnover"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Customer Insights",
      subtitle: "Deep customer behavior analysis and segmentation",
      description: "Advanced customer analytics that drive personalization, improve retention, and maximize lifetime value.",
      features: [
        "Customer Segmentation",
        "Behavior Pattern Analysis",
        "Churn Prediction",
        "Lifetime Value Modeling",
        "Personalization Analytics",
        "Customer Journey Mapping"
      ],
      benefits: "Typical 25% increase in customer retention rates"
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "Competitor Analysis",
      subtitle: "Market positioning and competitive intelligence",
      description: "Comprehensive competitive analysis that identifies opportunities and threats in your market landscape.",
      features: [
        "Market Share Analysis",
        "Competitive Benchmarking",
        "Pricing Strategy Analytics",
        "Product Positioning",
        "SWOT Analysis",
        "Market Trend Identification"
      ],
      benefits: "Better market positioning leading to 20% market share growth"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Market Research",
      subtitle: "Data-driven insights for product and market strategies",
      description: "Comprehensive market research and analysis for product launches, market entry, and optimization strategies.",
      features: [
        "Market Size & Opportunity Analysis",
        "Product-Market Fit Assessment",
        "Launch Strategy Analytics",
        "Consumer Demand Forecasting",
        "Market Entry Analysis",
        "Product Optimization"
      ],
      benefits: "60% higher success rate for new product launches"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We start by understanding your business objectives, current data landscape, and analytical maturity."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Design a comprehensive analytics strategy aligned with your business goals and priorities."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the strategy using cutting-edge analytical tools and methodologies."
    },
    {
      step: "04",
      title: "Insights & Recommendations",
      description: "Deliver actionable insights with clear recommendations and implementation roadmaps."
    },
    {
      step: "05",
      title: "Ongoing Support",
      description: "Provide continuous monitoring, optimization, and strategic guidance for sustained success."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-saw-navy to-saw-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Comprehensive analytics solutions that transform your data into competitive advantage 
              across every aspect of your business.
            </p>
            <Button size="lg" className="bg-saw-orange hover:bg-saw-orange/90 text-white">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-saw-teal mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-saw-navy mb-4">{service.title}</h2>
                  <p className="text-lg text-saw-teal font-medium mb-4">{service.subtitle}</p>
                  <p className="text-saw-gray mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-saw-teal rounded-full"></div>
                        <span className="text-sm text-saw-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-saw-light-gray p-4 rounded-lg mb-6">
                    <p className="text-sm font-medium text-saw-navy">
                      <span className="text-saw-teal">Impact:</span> {service.benefits}
                    </p>
                  </div>
                  
                  <Button className="saw-gradient text-white hover:opacity-90">
                    Learn More
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="bg-saw-light-gray border-none">
                    <CardContent className="p-8">
                      <div className="aspect-video bg-gradient-to-br from-saw-blue to-saw-teal rounded-lg flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-6xl mb-4">{service.icon}</div>
                          <p className="text-xl font-medium">{service.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-saw-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-6">Our Process</h2>
            <p className="text-xl text-saw-gray max-w-3xl mx-auto">
              A proven methodology that ensures successful analytics transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-saw-teal text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-saw-navy mb-3">{item.title}</h3>
                  <p className="text-sm text-saw-gray">{item.description}</p>
                  
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-saw-teal transform -translate-y-1/2"></div>
                  )}
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Let's discuss which analytics services can drive the most impact for your business. 
            Our experts are ready to help you unlock the value in your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-saw-teal hover:bg-gray-100 px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-saw-teal px-8 py-4 text-lg">
              <FileText className="w-5 h-5 mr-2" />
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
