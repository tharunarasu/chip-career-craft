import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Zap, Target, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Digital Design Expertise",
      description: "MIPS processor design, cache controllers, and FIFO implementations"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Verification Mastery",
      description: "SystemVerilog, UVM, constrained-random testing, and protocol verification"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Industry Focus",
      description: "Semiconductor industry targeting with hands-on VLSI experience"
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Academic Excellence",
      description: "MS Computer Engineering at Texas A&M with specialized coursework"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Digital Design & Verification
              <span className="block text-primary">Engineer</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about semiconductor technologies with expertise in digital design and verification. 
              Currently pursuing MS in Computer Engineering at Texas A&M University while seeking opportunities 
              to contribute to cutting-edge VLSI projects.
            </p>
          </div>

          {/* Education & Objective */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-card hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">Current Education</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-primary">Master of Science in Computer Engineering</p>
                      <p className="text-muted-foreground">Texas A&M University • Aug 2025 – May 2027</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Coursework: Computer Architecture, Hardware Verification, Microprocessor System Design
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">Career Objective</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seeking <strong className="text-primary">Summer 2026 internship</strong> opportunities in Digital Design and Verification. 
                    Focused on contributing to semiconductor industry innovations through VLSI design, 
                    verification methodologies, and cutting-edge processor architectures.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary text-primary-foreground group-hover:scale-110 transition-smooth">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;