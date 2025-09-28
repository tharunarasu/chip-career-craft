import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-secondary/20 to-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Description */}
            <div className="md:col-span-1">
              <h3 className="font-bold text-xl text-foreground mb-4">
                Tharun Arasu Sivakumar
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Digital Design & Verification Engineer specializing in VLSI technologies, 
                SystemVerilog, and UVM verification methodologies.
              </p>
              <Badge variant="secondary" className="px-3 py-1">
                🎯 Available Summer 2026
              </Badge>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Projects", "Experience", "Skills", "Education", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:tharunarasu@tamu.edu"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  <Mail className="w-4 h-4" />
                  tharunarasu@tamu.edu
                </a>
                <a 
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
                <a 
                  href="#"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth text-sm"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repositories
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Tharun Arasu Sivakumar. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Built with</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>for the semiconductor industry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;