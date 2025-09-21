import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import leoSymbol from "@/assets/leo-symbol.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/maanasvarma2003", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/maanas-varma-59429327b/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/maanas_varma/#", label: "Instagram" },
    { icon: Mail, href: "mailto:sh.maanasvarma@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background-tertiary border-t border-card-border">
      <div className="container-width">
        {/* Main Footer Content */}
        <div className="py-16 px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 bg-gradient-to-br from-accent-orange via-accent-pink to-accent-purple rounded-xl flex items-center justify-center animate-glow shadow-2xl overflow-hidden">
                  <img 
                    src={leoSymbol} 
                    alt="Leo Symbol" 
                    className="w-8 h-8 object-contain filter brightness-0 invert animate-pulse"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 via-accent-pink/20 to-accent-purple/20 rounded-xl animate-pulse"></div>
                </div>
                <span className="text-2xl font-bold text-gradient">Maanas Varma</span>
              </div>
              <p className="text-foreground-muted leading-relaxed mb-6 max-w-md">
                Data Scientist passionate about creating innovative AI/ML solutions 
                and transforming data into actionable insights that drive business growth.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card/50 hover:bg-card-hover border border-card-border rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-md group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-foreground-secondary group-hover:text-accent-blue transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-foreground font-semibold text-lg mb-6">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-foreground-muted hover:text-accent-blue transition-colors duration-300 hover:translate-x-1"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-foreground font-semibold text-lg mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-foreground-muted text-sm mb-1">Email</p>
                  <a 
                    href="mailto:sh.maanasvarma@gmail.com"
                    className="text-foreground hover:text-accent-cyan transition-colors duration-300"
                  >
                    sh.maanasvarma@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-foreground-muted text-sm mb-1">Phone</p>
                  <a 
                    href="tel:+916362847181"
                    className="text-foreground hover:text-accent-emerald transition-colors duration-300"
                  >
                    +91 6362847181
                  </a>
                </div>
                <div>
                  <p className="text-foreground-muted text-sm mb-1">Location</p>
                  <p className="text-foreground">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-card-border py-8 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-foreground-muted mb-4 md:mb-0">
              <span>© {currentYear} Maanas Varma. Made with</span>
              <Heart className="w-4 h-4 text-accent-pink animate-pulse" />
              <span>and ☕</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-foreground-muted text-sm">
                <span>Built with React, TypeScript & Tailwind CSS</span>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="hover:scale-110 transition-all duration-300 hover:bg-card-hover"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-purple/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent-blue/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;