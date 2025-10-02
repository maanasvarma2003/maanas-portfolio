import { useState, useEffect } from "react";
import { Menu, X, Download, User, GraduationCap, Briefcase, Folder, Mail, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import leoSymbol from "@/assets/leo-symbol.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about", icon: User, color: "text-accent-blue" },
    { name: "Skills", href: "#skills", icon: Brain, color: "text-accent-purple" },
    { name: "Education", href: "#education", icon: GraduationCap, color: "text-accent-emerald" },
    { name: "Experience", href: "#experience", icon: Briefcase, color: "text-accent-cyan" },
    { name: "Projects", href: "#projects", icon: Folder, color: "text-accent-orange" },
    { name: "Contact", href: "#contact", icon: Mail, color: "text-accent-pink" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-xl border-b border-card-border shadow-lg" : "bg-transparent"
    }`}>
      <div className="container-width">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 bg-gradient-to-br from-accent-orange via-accent-pink to-accent-purple rounded-full flex items-center justify-center animate-pulse shadow-2xl overflow-hidden">
              <img 
                src={leoSymbol} 
                alt="Leo Symbol" 
                className="w-8 h-8 object-contain filter brightness-0 invert animate-bounce"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 via-accent-pink/20 to-accent-purple/20 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold text-gradient animate-pulse">Maanas Varma</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link text-sm font-medium flex items-center space-x-2 group hover:scale-105 transition-all duration-300"
                >
                  <Icon className={`w-4 h-4 ${item.color} group-hover:animate-pulse`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
            <Button
              onClick={() => window.open("https://drive.google.com/file/d/1-XNJXdngTo9SJkx4L3BMgl8bOht5xQYi/view?usp=sharing")}
              className="btn-primary px-4 py-2 rounded-lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-card-border shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center space-x-3 w-full text-left nav-link text-base font-medium py-2 hover:scale-105 transition-all duration-300"
                  >
                    <Icon className={`w-5 h-5 ${item.color}`} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
              <Button
                onClick={() => window.open("https://drive.google.com/file/d/1-XNJXdngTo9SJkx4L3BMgl8bOht5xQYi/view?usp=sharing")}
                className="btn-primary w-full mt-4"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
