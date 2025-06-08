
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, BarChart, Briefcase } from "lucide-react";

const Careers = () => {
  const positions = [
    {
      title: "Senior Data Scientist",
      department: "Analytics",
      location: "New York, NY / Remote",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead advanced analytics projects and develop machine learning models to solve complex business problems.",
      requirements: [
        "PhD/MS in Statistics, Mathematics, or related field",
        "5+ years experience in data science",
        "Expertise in Python, R, SQL",
        "Experience with ML frameworks (TensorFlow, PyTorch)",
        "Strong business acumen"
      ]
    },
    {
      title: "Business Analytics Consultant",
      department: "Consulting",
      location: "Chicago, IL / Hybrid",
      type: "Full-time",
      experience: "3+ years",
      description: "Work directly with clients to understand business challenges and deliver actionable insights through data analysis.",
      requirements: [
        "MBA or equivalent experience",
        "3+ years in consulting or analytics",
        "Proficiency in SQL, Excel, PowerBI/Tableau",
        "Excellent communication skills",
        "Industry experience preferred"
      ]
    },
    {
      title: "Financial Analytics Specialist",
      department: "Finance Practice",
      location: "Boston, MA / On-site",
      type: "Full-time",
      experience: "4+ years",
      description: "Specialize in financial modeling, risk analysis, and investment analytics for financial services clients.",
      requirements: [
        "Bachelor's in Finance, Economics, or related field",
        "CFA or similar certification preferred",
        "4+ years in financial analytics",
        "Advanced Excel and modeling skills",
        "Financial industry experience"
      ]
    },
    {
      title: "Analytics Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain data infrastructure and analytics platforms that power our client solutions.",
      requirements: [
        "Bachelor's in Computer Science or Engineering",
        "3+ years in data engineering",
        "Expertise in Python, SQL, cloud platforms",
        "Experience with ETL/ELT processes",
        "Knowledge of data warehousing"
      ]
    },
    {
      title: "Junior Analytics Consultant",
      department: "Consulting",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "0-2 years",
      description: "Entry-level position for recent graduates to start their analytics consulting career with mentorship and training.",
      requirements: [
        "Bachelor's degree in relevant field",
        "Strong analytical and problem-solving skills",
        "Basic knowledge of Excel, SQL",
        "Excellent communication skills",
        "Eagerness to learn and grow"
      ]
    },
    {
      title: "Product Manager - Analytics Platform",
      department: "Product",
      location: "Seattle, WA / Hybrid",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead product strategy and development for our internal analytics platform and client-facing tools.",
      requirements: [
        "5+ years in product management",
        "Experience with analytics/data products",
        "Technical background preferred",
        "Strong leadership skills",
        "Customer-focused mindset"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Culture",
      description: "Work with brilliant minds in a supportive, team-oriented environment that values diverse perspectives."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Professional Growth",
      description: "Continuous learning opportunities, mentorship programs, and support for certifications and conferences."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Meaningful Impact",
      description: "Work on projects that drive real business outcomes for leading organizations across industries."
    }
  ];

  const perks = [
    "Competitive salary and equity packages",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development budget ($5,000 annually)",
    "Conference attendance and certification support",
    "Sabbatical program for long-term employees",
    "State-of-the-art technology and tools",
    "Catered lunches and team events",
    "Generous PTO and parental leave policies",
    "401(k) with company matching"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-saw-navy to-saw-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Build your career with a team of world-class analytics professionals who are 
              passionate about transforming businesses through data-driven insights.
            </p>
            <Button size="lg" className="bg-saw-orange hover:bg-saw-orange/90 text-white">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join SAW Analytics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-6">Why SAW Analytics?</h2>
            <p className="text-xl text-saw-gray max-w-3xl mx-auto">
              Join a company where your expertise creates real impact and your career growth is our priority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-saw-teal mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-saw-navy mb-4">{benefit.title}</h3>
                  <p className="text-saw-gray">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-saw-blue mb-2">60+</div>
              <div className="text-saw-gray">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-saw-teal mb-2">95%</div>
              <div className="text-saw-gray">Employee Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-saw-orange mb-2">15+</div>
              <div className="text-saw-gray">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-saw-blue mb-2">500+</div>
              <div className="text-saw-gray">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-saw-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-6">Open Positions</h2>
            <p className="text-xl text-saw-gray max-w-3xl mx-auto">
              Explore exciting opportunities to advance your career in analytics and consulting.
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-start gap-2 mb-4">
                        <h3 className="text-xl font-bold text-saw-navy">{position.title}</h3>
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-saw-gray mb-4">
                        <span>📍 {position.location}</span>
                        <span>💼 {position.experience}</span>
                      </div>
                      
                      <p className="text-saw-gray mb-4">{position.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-saw-navy mb-2">Key Requirements:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                          {position.requirements.slice(0, 4).map((req, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-saw-teal rounded-full mt-2"></div>
                              <span className="text-sm text-saw-gray">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-3">
                      <Button className="w-full saw-gradient text-white hover:opacity-90">
                        Apply Now
                      </Button>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-saw-gray mb-4">Don't see the right fit? We're always looking for exceptional talent.</p>
            <Button variant="outline" className="border-saw-teal text-saw-teal hover:bg-saw-teal hover:text-white">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-6">Benefits & Perks</h2>
            <p className="text-xl text-saw-gray max-w-3xl mx-auto">
              We invest in our people with comprehensive benefits and a supportive work environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-saw-light-gray rounded-lg">
                <div className="w-2 h-2 bg-saw-teal rounded-full"></div>
                <span className="text-saw-gray">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-saw-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-6">Our Hiring Process</h2>
            <p className="text-xl text-saw-gray max-w-3xl mx-auto">
              A transparent, efficient process designed to find the best mutual fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Application Review",
                description: "We review your application and portfolio within 3-5 business days."
              },
              {
                step: "02", 
                title: "Initial Screen",
                description: "30-minute conversation with our talent team to discuss your background and interests."
              },
              {
                step: "03",
                title: "Technical Interview",
                description: "Technical assessment and case study discussion with team members."
              },
              {
                step: "04",
                title: "Final Interview",
                description: "Meet with leadership team and discuss culture fit and career goals."
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-saw-teal text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-saw-navy mb-3">{item.title}</h3>
                  <p className="text-sm text-saw-gray">{item.description}</p>
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
            Ready to Shape the Future of Analytics?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join our team of passionate professionals and help organizations unlock 
            the power of their data. Your next career move starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-saw-teal hover:bg-gray-100 px-8 py-4 text-lg">
              Browse All Positions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-saw-teal px-8 py-4 text-lg">
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
