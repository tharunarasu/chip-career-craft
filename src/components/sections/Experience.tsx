import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Brimma Tech",
      position: "Software Development Engineer I",
      location: "Chennai, TN",
      duration: "Jan 2024 – May 2025",
      type: "Full-time",
      achievements: [
        "Developed and maintained backend services and RESTful APIs in C# and ASP.NET Core for multiple products, leveraging PostgreSQL for efficient data management and processing.",
        "Designed automation and rule-based systems for complex workflows, including Python scripts to process mortgage rule data, improving logic design, data validation, and reducing manual effort.",
        "Managed cloud deployments of Brimma products and services on Microsoft Azure, including API hosting, scaling, and monitoring, ensuring high availability and reliability of production systems."
      ],
      skills: ["C#", "ASP.NET Core", "PostgreSQL", "Python", "Microsoft Azure", "RESTful APIs", "Cloud Deployment"]
    },
    {
      company: "Tekion Corp",
      position: "Software Engineer Intern",
      location: "Chennai, TN", 
      duration: "Jan 2023 – July 2023",
      type: "Internship",
      achievements: [
        "Worked as a part of Performance Engineering team under TAP/IOT division developing and executing comprehensive load, scalability, and stress tests for cloud based SaaS applications.",
        "Analyzed performance results to identify root causes using tools such as Jmeter, Elasticsearch, Kibana, and Grafana.",
        "Generated detailed performance reports in JIRA, summarizing test findings and providing actionable insights for system performance optimization."
      ],
      skills: ["Performance Testing", "JMeter", "Elasticsearch", "Kibana", "Grafana", "JIRA", "Load Testing", "SaaS Applications"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Professional Experience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Industry
              <span className="block text-primary">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional experience in software development, performance engineering, and cloud technologies 
              that complements my semiconductor specialization.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2 bg-gradient-primary rounded-lg">
                        <Building2 className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground mb-1">
                          {exp.position}
                        </CardTitle>
                        <p className="text-lg font-semibold text-primary">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs font-mono">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;