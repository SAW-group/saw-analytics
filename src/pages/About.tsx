
import { Card, CardContent } from "@/components/ui/card";
import { User, Users, BarChart } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      bio: "Former McKinsey consultant with 15+ years in data strategy and analytics transformation.",
      expertise: ["Strategic Planning", "Data Governance", "Executive Leadership"]
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Data Scientist",
      bio: "PhD in Statistics from MIT, former Google Analytics lead with expertise in ML and AI.",
      expertise: ["Machine Learning", "Statistical Modeling", "AI Implementation"]
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Operations",
      bio: "Operations optimization expert with track record at Fortune 500 companies.",
      expertise: ["Supply Chain", "Process Optimization", "Performance Analytics"]
    },
    {
      name: "David Park",
      role: "Head of Finance Analytics",
      bio: "Former Wall Street analyst specializing in financial modeling and risk assessment.",
      expertise: ["Financial Modeling", "Risk Analysis", "Investment Analytics"]
    },
    {
      name: "Lisa Thompson",
      role: "HR Analytics Director",
      bio: "People analytics pioneer with extensive experience in workforce optimization.",
      expertise: ["People Analytics", "Talent Management", "Organizational Psychology"]
    },
    {
      name: "Alex Johnson",
      role: "Customer Insights Lead",
      bio: "Consumer behavior expert with deep experience in market research and segmentation.",
      expertise: ["Customer Analytics", "Market Research", "Behavioral Economics"]
    }
  ];

  const values = [
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Data-Driven Excellence",
      description: "Every recommendation is backed by rigorous analysis and proven methodologies."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Partnership",
      description: "We work as an extension of your team, ensuring seamless collaboration and knowledge transfer."
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Continuously evolving our approaches with cutting-edge analytics techniques and technologies."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-saw-navy to-saw-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About SAW Analytics</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Founded on the principle that data should drive strategy, we've been helping 
              organizations unlock the power of their data since 2018.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-saw-navy mb-6">Our Mission</h2>
              <p className="text-lg text-saw-gray mb-6">
                To empower organizations with actionable insights that transform data into competitive 
                advantage. We believe that every business, regardless of size or industry, deserves 
                access to world-class analytics expertise.
              </p>
              <h2 className="text-3xl font-bold text-saw-navy mb-6">Our Vision</h2>
              <p className="text-lg text-saw-gray">
                To be the global leader in translating complex data into simple, strategic actions 
                that drive measurable business impact across all industries.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-saw-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-6">Our Story</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-saw-teal rounded-full flex items-center justify-center text-white font-bold">
                      2018
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-saw-navy mb-2">The Beginning</h3>
                      <p className="text-saw-gray">
                        Founded by Sarah Mitchell after recognizing the gap between data availability 
                        and strategic decision-making in mid-market companies. Started with a team of 
                        three analytics experts.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-saw-blue rounded-full flex items-center justify-center text-white font-bold">
                      2020
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-saw-navy mb-2">Rapid Growth</h3>
                      <p className="text-saw-gray">
                        Expanded to serve Fortune 500 clients and established specialized practice areas 
                        in finance, operations, and customer analytics. Team grew to 25 professionals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-saw-orange rounded-full flex items-center justify-center text-white font-bold">
                      2022
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-saw-navy mb-2">Industry Recognition</h3>
                      <p className="text-saw-gray">
                        Named "Analytics Consultancy of the Year" and launched AI-powered analytics 
                        platform. Opened second office and achieved $10M annual revenue.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-saw-teal rounded-full flex items-center justify-center text-white font-bold">
                      2024
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-saw-navy mb-2">Global Expansion</h3>
                      <p className="text-saw-gray">
                        Today, we serve clients across 15 industries with a team of 60+ analytics 
                        professionals, delivering insights that drive over $500M in client value annually.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-6">Our Values</h2>
            <p className="text-xl text-saw-gray max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-saw-teal mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-saw-navy mb-4">{value.title}</h3>
                  <p className="text-saw-gray">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-saw-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-saw-navy mb-6">Meet Our Team</h2>
            <p className="text-xl text-saw-gray max-w-3xl mx-auto">
              Industry experts dedicated to transforming your data into strategic advantage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-saw-light-blue rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-saw-teal transition-colors">
                    <User className="w-10 h-10 text-saw-teal group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-saw-navy text-center mb-2">{member.name}</h3>
                  <p className="text-saw-teal text-center font-medium mb-4">{member.role}</p>
                  <p className="text-saw-gray text-sm mb-4">{member.bio}</p>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-saw-navy">Expertise:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-saw-light-blue text-saw-navy px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
