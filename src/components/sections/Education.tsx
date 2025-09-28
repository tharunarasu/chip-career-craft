import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Engineering",
      school: "Texas A&M University",
      location: "College Station, TX",
      duration: "Aug 2025 – May 2027",
      status: "Current",
      coursework: [
        "Computer Architecture",
        "Hardware Verification", 
        "Microprocessor System Design"
      ],
      description: "Specialized graduate program focusing on advanced computer engineering concepts, VLSI design, and verification methodologies."
    },
    {
      degree: "Bachelor of Engineering in Electronics and Communication Engineering",
      school: "Sri Sivasubramaniya Nadar College of Engineering - Anna University",
      location: "Chennai, TN",
      duration: "Aug 2019 – June 2023",
      status: "Completed",
      gpa: "3.6/4.0",
      coursework: [
        "Digital System Design",
        "Microprocessor Architecture",
        "Object Oriented Programming"
      ],
      description: "Comprehensive undergraduate program covering electronics, communication systems, and digital design fundamentals."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Education
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Academic
              <span className="block text-primary">Background</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Strong academic foundation in computer engineering and electronics, 
              with specialized focus on digital design and verification technologies.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-3 bg-gradient-primary rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge 
                            variant={edu.status === "Current" ? "default" : "secondary"} 
                            className={edu.status === "Current" ? "bg-gradient-accent text-accent-foreground" : ""}
                          >
                            {edu.status}
                          </Badge>
                          {edu.gpa && (
                            <Badge variant="outline" className="font-mono text-xs">
                              CGPA: {edu.gpa}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-lg font-semibold text-primary mb-2">{edu.school}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  {/* Coursework */}
                  <div>
                    <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
                      <BookOpen className="w-4 h-4" />
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="outline" className="text-xs">
                          {course}
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

export default Education;