import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Users, Briefcase } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Global Retailer Increases Revenue by $50M Through Customer Analytics",
      industry: "Retail",
      challenge: "A Fortune 500 retailer was struggling with declining customer retention and couldn't identify which customers were most valuable or likely to churn.",
      solution: "Implemented advanced customer segmentation and predictive analytics to identify high-value customers and personalize marketing campaigns.",
      results: [
        "35% increase in customer retention",
        "$50M revenue increase in 12 months",
        "40% improvement in marketing ROI",
        "25% reduction in customer acquisition costs"
      ],
      technologies: ["Machine Learning", "Customer Segmentation", "Predictive Analytics"],
      timeline: "6 months",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Manufacturing Company Reduces Costs by 30% with Operations Analytics",
      industry: "Manufacturing",
      challenge: "A mid-size manufacturer faced rising operational costs and frequent equipment failures that were impacting productivity and profit margins.",
      solution: "Developed predictive maintenance models and supply chain optimization analytics to reduce downtime and operational inefficiencies.",
      results: [
        "30% reduction in operational costs",
        "50% decrease in unplanned downtime",
        "25% improvement in equipment efficiency",
        "$15M annual cost savings"
      ],
      technologies: ["Predictive Maintenance", "Supply Chain Analytics", "IoT Data Analysis"],
      timeline: "8 months",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: "Financial Services Firm Prevents $20M in Fraud Losses",
      industry: "Financial Services",
      challenge: "A regional bank was experiencing increasing fraud losses and needed to improve detection while minimizing false positives that frustrated customers.",
      solution: "Built advanced fraud detection models using machine learning and real-time transaction analytics to identify suspicious patterns.",
      results: [
        "80% improvement in fraud detection",
        "$20M prevented fraud losses annually",
        "60% reduction in false positives",
        "Improved customer satisfaction scores"
      ],
      technologies: ["Machine Learning", "Real-time Analytics", "Pattern Recognition"],
      timeline: "4 months",
      icon: <BarChart className="w-8 h-8" />
    },
    {
      title: "Healthcare System Improves Patient Outcomes by 40%",
      industry: "Healthcare",
      challenge: "A large healthcare network needed to improve patient outcomes while reducing costs and optimizing resource allocation across multiple facilities.",
      solution: "Implemented patient risk stratification models and operational analytics to improve care delivery and resource utilization.",
      results: [
        "40% improvement in patient outcomes",
        "25% reduction in readmission rates",
        "$30M reduction in operational costs",
        "20% improvement in staff efficiency"
      ],
      technologies: ["Predictive Modeling", "Patient Analytics", "Resource Optimization"],
      timeline: "10 months",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Tech Startup Achieves 300% User Growth with Product Analytics",
      industry: "Technology",
      challenge: "A fast-growing SaaS startup needed to understand user behavior patterns to improve product features and reduce churn in a competitive market.",
      solution: "Developed comprehensive user analytics platform with behavior tracking, cohort analysis, and feature usage optimization.",
      results: [
        "300% increase in user growth",
        "50% improvement in user retention",
        "65% increase in feature adoption",
        "40% reduction in churn rate"
      ],
      technologies: ["User Analytics", "Cohort Analysis", "A/B Testing"],
      timeline: "5 months",
      icon: <BarChart className="w-8 h-8" />
    },
    {
      title: "Energy Company Optimizes Grid Performance Saving $25M",
      industry: "Energy",
      challenge: "A utility company faced increasing energy demand and grid inefficiencies that were leading to outages and high operational costs.",
      solution: "Implemented smart grid analytics and demand forecasting models to optimize energy distribution and predict maintenance needs.",
      results: [
        "25% improvement in grid efficiency",
        "$25M annual cost savings",
        "40% reduction in outages",
        "30% better demand forecasting"
      ],
      technologies: ["Grid Analytics", "Demand Forecasting", "Smart Sensors"],
      timeline: "12 months",
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  const insights = [
    {
      title: "The Future of Retail Analytics",
      type: "Whitepaper",
      description: "How AI and machine learning are transforming customer experience and operational efficiency in retail.",
      downloadCount: "2.5K downloads"
    },
    {
      title: "5 Key Metrics Every Finance Team Should Track",
      type: "Blog Post",
      description: "Essential KPIs that drive financial performance and how to implement tracking systems.",
      downloadCount: "1.8K reads"
    },
    {
      title: "Manufacturing 4.0: Analytics Implementation Guide",
      type: "Guide",
      description: "Step-by-step approach to implementing analytics in modern manufacturing environments.",
      downloadCount: "3.2K downloads"
    }
  ];

  return (
    <div>
      {/* Hero Section - Deep Blue Theme */}
      <section className="py-20 bg-gradient-to-br from-saw-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Case Studies & Insights</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Real-world success stories and expert insights that demonstrate the transformative 
              power of data-driven decision making.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-6">Success Stories</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Discover how organizations across industries have achieved remarkable results 
              through strategic analytics implementation.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-teal-200">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Content */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="text-saw-teal">{study.icon}</div>
                        <div>
                          <Badge variant="secondary" className="mb-2 bg-teal-100 text-teal-800">{study.industry}</Badge>
                          <h3 className="text-2xl font-bold text-saw-navy mb-4">{study.title}</h3>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-saw-navy mb-2">Challenge</h4>
                          <p className="text-blue-700">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-saw-navy mb-2">Solution</h4>
                          <p className="text-blue-700">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-saw-navy mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="border-saw-teal text-saw-teal">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-teal-50 p-8 border-l-4 border-l-saw-teal">
                      <h4 className="font-semibold text-saw-navy mb-4">Key Results</h4>
                      <div className="space-y-3 mb-6">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-saw-teal rounded-full mt-2"></div>
                            <span className="text-sm text-blue-700">{result}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t border-teal-200 pt-4">
                        <p className="text-sm text-blue-700">
                          <span className="font-medium">Timeline:</span> {study.timeline}
                        </p>
                      </div>

                      <Button className="w-full mt-6 bg-saw-teal hover:bg-teal-600 text-white">
                        Read Full Case Study
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insights & Resources */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-6">Insights & Resources</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Expert insights, industry reports, and practical guides to help you navigate 
              your analytics journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-teal-200">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-saw-teal text-white">{insight.type}</Badge>
                  <h3 className="text-xl font-semibold text-saw-navy mb-3 group-hover:text-saw-teal transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-blue-700 mb-4 text-sm">{insight.description}</p>
                  <p className="text-xs text-saw-teal font-medium mb-4">{insight.downloadCount}</p>
                  <Button size="sm" className="w-full" variant="outline" className="border-saw-teal text-saw-teal hover:bg-saw-teal hover:text-white">
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-saw-teal hover:bg-teal-600 text-white">
              View All Resources
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-saw-navy to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
            Join these successful organizations and transform your business with data-driven insights. 
            Let's discuss your analytics opportunity.
          </p>
          <Button size="lg" className="bg-saw-teal hover:bg-teal-600 text-white px-8 py-4 text-lg">
            Start Your Analytics Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
