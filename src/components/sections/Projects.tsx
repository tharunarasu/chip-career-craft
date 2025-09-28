import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroButton } from "@/components/ui/hero-button";
import { Cpu, Zap, Database, ShieldCheck, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MIPS 5 Stage Pipelined Processor RTL Design",
      icon: <Cpu className="w-6 h-6" />,
      description: "Complete MIPS processor implementation with pipeline optimization and hazard handling.",
      highlights: [
        "Developed CPU elements: ALU, Register File, ALU Control Unit, Data Memory Unit in Xilinx Vivado",
        "Implemented and integrated Forwarding and Hazard Units to overcome pipeline hazards",
        "Achieved full 5-stage pipeline with data forwarding and branch prediction"
      ],
      technologies: ["Verilog", "Xilinx Vivado", "MIPS Architecture", "Pipeline Design", "RTL Design"],
      category: "Digital Design"
    },
    {
      title: "AXI4-Lite to APB Bridge Design & Verification",
      icon: <Zap className="w-6 h-6" />,
      description: "Complete bridge design with comprehensive UVM verification environment.",
      highlights: [
        "Designed and implemented AXI4-Lite to APB bridge with memory-mapped GPIO peripheral in Verilog",
        "Built UVM environment with assertions and coverage for robust verification",
        "Achieved 100% functional coverage with 95% code coverage using constrained-random testing"
      ],
      technologies: ["SystemVerilog", "UVM", "AXI4-Lite", "APB", "Cadence Xcelium", "Coverage Analysis"],
      category: "Verification"
    },
    {
      title: "Asynchronous FIFO Design & Verification",
      icon: <Database className="w-6 h-6" />,
      description: "Cross-clock domain FIFO with metastability-safe synchronizers and comprehensive verification.",
      highlights: [
        "Designed asynchronous FIFO with separate clock domains (CDC) and gray code counters",
        "Incorporated metastability-safe synchronizers for robust data transfer",
        "Developed self-checking testbenches verifying full/empty flag logic and corner cases"
      ],
      technologies: ["SystemVerilog", "CDC Design", "Gray Code", "Metastability", "Self-Checking Testbench"],
      category: "Digital Design"
    },
    {
      title: "Cache Controller Verification using cocotb",
      icon: <ShieldCheck className="w-6 h-6" />,
      description: "Python-based verification environment for cache controller validation.",
      highlights: [
        "Designed Verilog-based direct-mapped cache controller with Python reference model",
        "Developed randomized and directed cocotb test scenarios",
        "Verified hit/miss handling, evictions, and reliable data returns with comprehensive coverage"
      ],
      technologies: ["Verilog", "Python", "cocotb", "Cache Architecture", "Reference Model", "Randomized Testing"],
      category: "Verification"
    }
  ];

  const getCategoryColor = (category: string) => {
    return category === "Digital Design" ? "bg-gradient-primary" : "bg-gradient-accent";
  };

  const getCategoryIcon = (category: string) => {
    return category === "Digital Design" ? <Cpu className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />;
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Featured Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Digital Design &
              <span className="block text-primary">Verification Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive portfolio of VLSI projects showcasing expertise in digital design, 
              verification methodologies, and semiconductor technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth group h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`p-3 ${getCategoryColor(project.category)} rounded-lg text-primary-foreground group-hover:scale-110 transition-smooth`}>
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${getCategoryColor(project.category)} text-white border-0`}
                          >
                            {getCategoryIcon(project.category)}
                            <span className="ml-1">{project.category}</span>
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-foreground leading-tight">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent>
                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <HeroButton variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4" />
                      Source Code
                    </HeroButton>
                    <HeroButton variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                      Details
                    </HeroButton>
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

export default Projects;