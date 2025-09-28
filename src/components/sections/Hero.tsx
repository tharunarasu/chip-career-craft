import { HeroButton } from "@/components/ui/hero-button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            🎯 Seeking Summer 2026 Internship
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Tharun Arasu
            <br />
            <span className="text-4xl md:text-6xl">Sivakumar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Digital Design & Verification Engineer
          </p>

          {/* Specialization */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Specializing in VLSI design, SystemVerilog, UVM verification, and semiconductor technologies. 
            MS Computer Engineering at Texas A&M University.
          </p>

          {/* Key Skills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["SystemVerilog", "UVM", "VLSI Design", "Digital Verification", "AXI/APB", "MIPS", "FIFO"].map((skill) => (
              <Badge key={skill} variant="outline" className="px-3 py-1 font-mono text-xs">
                {skill}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <HeroButton 
              variant="primary" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="min-w-[200px]"
            >
              View Projects
            </HeroButton>
            <HeroButton 
              variant="outline" 
              size="lg"
              className="min-w-[200px]"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </HeroButton>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:tharunarasu@tamu.edu" 
              className="text-muted-foreground hover:text-primary transition-smooth p-2 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-smooth p-2 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-smooth p-2 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-smooth"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;