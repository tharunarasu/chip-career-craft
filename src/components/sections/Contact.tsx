import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroButton } from "@/components/ui/hero-button";
import { Mail, Linkedin, Github, MapPin, Phone, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "tharunarasu@tamu.edu",
      link: "mailto:tharunarasu@tamu.edu"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "(979) 321-2025",
      link: "tel:+19793212025"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "College Station, TX",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "#",
      color: "hover:text-[#0077B5]"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "View repositories",
      link: "#",
      color: "hover:text-foreground"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Let's
              <span className="block text-primary">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Interested in discussing semiconductor opportunities, digital design projects, 
              or potential collaborations? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-smooth">
                        <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          {contact.link ? (
                            <a 
                              href={contact.link} 
                              className="font-medium text-foreground hover:text-primary transition-smooth"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="font-medium text-foreground">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Professional Profiles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-smooth">
                        <div className="p-2 bg-gradient-accent rounded-lg text-accent-foreground">
                          {social.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{social.label}</p>
                          <a 
                            href={social.link} 
                            className={`font-medium text-foreground transition-smooth ${social.color}`}
                          >
                            {social.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <HeroButton 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.location.href = 'mailto:tharunarasu@tamu.edu'}
                  >
                    <Mail className="w-4 h-4" />
                    Send Email
                  </HeroButton>
                  
                  <HeroButton variant="outline" size="lg" className="w-full">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </HeroButton>
                  
                  <HeroButton variant="accent" size="lg" className="w-full">
                    <Linkedin className="w-4 h-4" />
                    View LinkedIn
                  </HeroButton>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-foreground">Available for Summer 2026 Internships</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-foreground">Open to Semiconductor Industry Roles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm font-medium text-foreground">Interested in Digital Design & Verification</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;