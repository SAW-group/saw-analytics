
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Industries = () => {
  const industries = [
    {
      name: "Healthcare",
      description: "Patient outcomes analysis, operational efficiency, and cost optimization for healthcare providers.",
      solutions: ["Patient Flow Analytics", "Clinical Decision Support", "Revenue Cycle Optimization", "Population Health Management"],
      stats: "25% improvement in patient outcomes"
    },
    {
      name: "Financial Services",
      description: "Risk management, fraud detection, and customer analytics for banks and financial institutions.",
      solutions: ["Credit Risk Modeling", "Fraud Detection", "Customer Segmentation", "Regulatory Compliance"],
      stats: "40% reduction in fraud losses"
    },
    {
      name: "Retail & E-commerce",
      description: "Customer behavior insights, inventory optimization, and personalization strategies.",
      solutions: ["Demand Forecasting", "Price Optimization", "Customer Journey Analytics", "Inventory Management"],
      stats: "30% increase in conversion rates"
    },
    {
      name: "Technology",
      description: "Product analytics, user behavior analysis, and growth optimization for tech companies.",
      solutions: ["Product Analytics", "User Engagement Analysis", "A/B Testing", "Growth Strategy"],
      stats: "50% improvement in user retention"
    },
    {
      name: "Manufacturing",
      description: "Supply chain optimization, quality control, and predictive maintenance solutions.",
      solutions: ["Predictive Maintenance", "Quality Analytics", "Supply Chain Optimization", "Production Planning"],
      stats: "20% reduction in operational costs"
    },
    {
      name: "Logistics & Transportation",
      description: "Route optimization, fleet management, and delivery performance analytics.",
      solutions: ["Route Optimization", "Fleet Analytics", "Demand Planning", "Performance Monitoring"],
      stats: "35% improvement in delivery efficiency"
    },
    {
      name: "Energy & Utilities",
      description: "Demand forecasting, grid optimization, and sustainability analytics.",
      solutions: ["Energy Forecasting", "Grid Analytics", "Sustainability Metrics", "Asset Management"],
      stats: "15% reduction in energy waste"
    },
    {
      name: "Education",
      description: "Student performance analytics, institutional efficiency, and learning optimization.",
      solutions: ["Student Analytics", "Learning Outcomes", "Operational Efficiency", "Enrollment Optimization"],
      stats: "25% improvement in student outcomes"
    },
    {
      name: "Real Estate",
      description: "Property valuation, market analysis, and investment optimization strategies.",
      solutions: ["Property Valuation", "Market Analysis", "Investment Analytics", "Portfolio Optimization"],
      stats: "20% better investment returns"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-saw-navy to-saw-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Deep industry expertise combined with advanced analytics to solve 
              sector-specific challenges and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-saw-light-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-saw-teal transition-colors">
                    <div className="w-6 h-6 bg-saw-teal rounded group-hover:bg-white transition-colors"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-saw-navy mb-3 group-hover:text-saw-teal transition-colors">
                    {industry.name}
                  </h3>
                  
                  <p className="text-saw-gray mb-4 text-sm">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-semibold text-saw-navy">Key Solutions:</p>
                    <div className="grid grid-cols-2 gap-1">
                      {industry.solutions.map((solution, idx) => (
                        <span key={idx} className="text-xs bg-saw-light-gray text-saw-navy px-2 py-1 rounded">
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-saw-light-blue p-3 rounded-lg mb-4">
                    <p className="text-xs font-medium text-saw-navy">
                      <span className="text-saw-teal">Typical Impact:</span> {industry.stats}
                    </p>
                  </div>
                  
                  <Button size="sm" className="w-full group-hover:bg-saw-teal group-hover:text-white transition-colors" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-20 bg-saw-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-6">
              Why Industry Expertise Matters
            </h2>
            <p className="text-xl text-saw-gray max-w-3xl mx-auto">
              Generic analytics approaches miss the nuances that drive real business impact. 
              Our industry-specific expertise ensures relevant, actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-saw-teal rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-saw-navy mb-4">Domain Knowledge</h3>
                <p className="text-saw-gray">
                  Deep understanding of industry regulations, KPIs, and business models 
                  ensures our analytics address the right questions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-saw-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-saw-navy mb-4">Best Practices</h3>
                <p className="text-saw-gray">
                  Proven methodologies and benchmarks from similar organizations 
                  accelerate time-to-value and ensure implementation success.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-saw-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-saw-navy mb-4">Relevant Insights</h3>
                <p className="text-saw-gray">
                  Industry-specific data models and analytics frameworks deliver 
                  insights that directly impact your business objectives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 saw-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Connect with our industry experts to discuss how analytics can drive 
            competitive advantage in your specific market.
          </p>
          <Button size="lg" className="bg-white text-saw-teal hover:bg-gray-100 px-8 py-4 text-lg">
            Schedule Industry Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Industries;
