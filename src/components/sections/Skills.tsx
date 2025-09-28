import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code2, Wrench, Zap, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Hardware Description Languages",
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: "Verilog", level: 90 },
        { name: "SystemVerilog", level: 85 },
      ]
    },
    {
      title: "Programming Languages & Frameworks",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "C#", level: 75 },
        { name: "ASP.NET", level: 70 },
        { name: "CUDA", level: 65 },
      ]
    },
    {
      title: "Verification & Protocols",
      icon: <Zap className="w-5 h-5" />,
      skills: [
        { name: "UVM", level: 85 },
        { name: "AXI Protocol", level: 80 },
        { name: "AHB Protocol", level: 75 },
        { name: "APB Protocol", level: 80 },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        { name: "Cadence Xcelium", level: 85 },
        { name: "Xilinx Vivado", level: 90 },
        { name: "VitisIDE", level: 75 },
        { name: "Linux", level: 80 },
        { name: "Git", level: 85 },
        { name: "Visual Studio", level: 80 },
      ]
    }
  ];

  const certifications = [
    "Digital System Design",
    "Microprocessor Architecture", 
    "Computer Architecture",
    "Hardware Verification",
    "Microprocessor System Design",
    "Object Oriented Programming"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Technical Skills
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Technical
              <span className="block text-primary">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive skill set spanning digital design, verification methodologies, 
              and modern development tools essential for semiconductor industry success.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg font-bold text-foreground">
                    <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coursework & Certifications */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl font-bold text-foreground">
                <div className="p-2 bg-gradient-accent rounded-lg text-accent-foreground">
                  <Database className="w-5 h-5" />
                </div>
                Relevant Coursework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Comprehensive academic foundation in computer engineering and electronics, 
                covering both theoretical concepts and practical applications.
              </p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((course, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {course}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;