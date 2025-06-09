
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, BarChart3, Target } from "lucide-react";
import { Link } from "react-router-dom";
import ConsultationForm from "@/components/ConsultationForm";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Tech Startup Revenue Growth",
      client: "InnovateTech Solutions", 
      industry: "Technology",
      challenge: "50% revenue decline due to market changes",
      solution: "Comprehensive financial analytics and strategic pivot planning",
      results: ["35% revenue increase within 6 months", "Identified 3 new market opportunities", "Optimized pricing strategy resulting in 20% margin improvement"],
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Supply Chain Optimization",
      client: "Global Manufacturing Corp",
      industry: "Manufacturing", 
      challenge: "30% increase in operational costs and delivery delays",
      solution: "End-to-end supply chain analytics and process optimization",
      results: ["25% reduction in operational costs", "40% improvement in delivery times", "15% increase in customer satisfaction"],
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "HR Analytics Transformation",
      client: "Enterprise Services Ltd",
      industry: "Professional Services",
      challenge: "High employee turnover (35%) and declining productivity",
      solution: "People analytics implementation and performance optimization",
      results: ["50% reduction in turnover rate", "30% increase in employee engagement", "20% improvement in productivity metrics"],
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Customer Segmentation Strategy",
      client: "RetailMax Chain", 
      industry: "Retail",
      challenge: "Declining customer loyalty and unclear target segments",
      solution: "Advanced customer analytics and segmentation modeling",
      results: ["45% increase in customer retention", "25% boost in average transaction value", "Identified 5 high-value customer segments"],
      icon: <Target className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      quote: "SAW Analytics didn't just provide data - they gave us a roadmap to success. Their insights transformed our entire business strategy.",
      author: "Sarah Johnson",
      title: "CEO, InnovateTech Solutions",
      company: "Technology Startup"
    },
    {
      quote: "The supply chain optimization project exceeded all expectations. We're now operating more efficiently than ever before.",
      author: "Michael Chen", 
      title: "Operations Director, Global Manufacturing Corp",
      company: "Manufacturing"
    },
    {
      quote: "Their people analytics approach revolutionized how we think about our workforce. The ROI was immediate and substantial.",
      author: "Emily Rodriguez",
      title: "CHRO, Enterprise Services Ltd", 
      company: "Professional Services"
    }
  ];

  return (
    <div>
      {/* Hero Section - Deep Blue with Vibrant Teal */}
      <section className="py-20 bg-gradient-to-br from-saw-navy to-saw-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Real results from real clients. Discover how SAW Analytics has transformed 
              businesses across industries with data-driven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-6">Success Stories</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Each project represents our commitment to delivering measurable results 
              through strategic analytics and insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-saw-teal">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-saw-teal group-hover:scale-110 transition-transform">
                      {study.icon}
                    </div>
                    <span className="text-sm bg-blue-100 text-saw-navy px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-saw-navy mb-2">{study.title}</h3>
                  <p className="text-saw-teal font-semibold mb-4">{study.client}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Challenge:</h4>
                      <p className="text-blue-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Solution:</h4>
                      <p className="text-blue-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-blue-600 flex items-start">
                            <span className="text-saw-teal mr-2">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-blue-100">
                    <ConsultationForm>
                      <Button className="w-full bg-saw-teal hover:bg-cyan-600 text-white">
                        Discuss Similar Project
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </ConsultationForm>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Deep Blue Background */}
      <section className="py-20 bg-gradient-to-br from-saw-navy to-saw-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Client Testimonials</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Hear directly from our clients about their transformation journey with SAW Analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur border-saw-teal/30 text-white group hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl text-saw-teal mb-4">"</div>
                  <p className="text-blue-100 mb-6 italic text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-saw-teal/30 pt-6">
                    <p className="font-bold text-white mb-1">{testimonial.author}</p>
                    <p className="text-saw-teal text-sm mb-1">{testimonial.title}</p>
                    <p className="text-blue-200 text-sm">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Overview - White Background with Teal Accents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-6">Our Impact by the Numbers</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Aggregate results from our case studies demonstrate the measurable value we deliver.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-saw-teal mb-2">$500M+</div>
              <div className="text-blue-700">Client Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-saw-teal mb-2">35%</div>
              <div className="text-blue-700">Avg Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-saw-teal mb-2">40%</div>
              <div className="text-blue-700">Avg Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-saw-teal mb-2">98%</div>
              <div className="text-blue-700">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Deep Blue to Teal Gradient */}
      <section className="py-24 bg-gradient-to-r from-saw-navy via-saw-blue to-saw-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Let's discuss how SAW Analytics can help your organization achieve similar transformational results.
          </p>
          <ConsultationForm>
            <Button size="lg" className="bg-white text-saw-navy hover:bg-blue-50 text-lg px-8 py-3">
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </ConsultationForm>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
