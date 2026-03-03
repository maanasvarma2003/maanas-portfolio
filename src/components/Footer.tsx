import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
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

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToSection = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-card-border/50" style={{ background: 'hsl(var(--background-tertiary))' }}>
      <div className="container-width">
        <div className="py-16 px-4">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-11 h-11 bg-gradient-to-br from-accent-orange via-accent-pink to-accent-purple rounded-xl flex items-center justify-center shadow-glow overflow-hidden">
                  <img src={leoSymbol} alt="Leo Symbol" className="w-7 h-7 object-contain filter brightness-0 invert" />
                </div>
                <span className="text-xl font-syne font-bold text-gradient">Maanas Varma</span>
              </div>
              <p className="text-foreground-muted leading-relaxed mb-6 max-w-md font-grotesk text-sm">
                Data Scientist passionate about creating innovative AI/ML solutions 
                and transforming data into actionable insights.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-card-border rounded-xl flex items-center justify-center hover:border-primary/30 hover:bg-card/50 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-foreground-muted group-hover:text-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-foreground font-syne font-semibold mb-5">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-foreground-muted text-sm font-grotesk hover:text-accent-cyan transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-foreground font-syne font-semibold mb-5">Get In Touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-foreground-muted text-xs font-grotesk uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:sh.maanasvarma@gmail.com" className="text-foreground text-sm font-grotesk hover:text-accent-cyan transition-colors">
                    sh.maanasvarma@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-foreground-muted text-xs font-grotesk uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+916362847181" className="text-foreground text-sm font-grotesk hover:text-accent-emerald transition-colors">
                    +91 6362847181
                  </a>
                </div>
                <div>
                  <p className="text-foreground-muted text-xs font-grotesk uppercase tracking-wider mb-1">Location</p>
                  <p className="text-foreground text-sm font-grotesk">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-card-border/50 py-6 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-foreground-muted text-sm font-grotesk">
              <span>© {currentYear} Maanas Varma. Made with</span>
              <Heart className="w-3.5 h-3.5 text-accent-pink" />
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-foreground-muted text-xs font-grotesk">React • TypeScript • Tailwind</span>
              <Button variant="ghost" size="icon" onClick={scrollToTop} className="rounded-xl border border-card-border hover:border-primary/30 h-9 w-9" aria-label="Scroll to top">
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
