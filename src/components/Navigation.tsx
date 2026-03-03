import { useState, useEffect } from "react";
import { Menu, X, Download, User, GraduationCap, Briefcase, Folder, Mail, Brain, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import leoSymbol from "@/assets/leo-symbol.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = ["about", "skills", "education", "experience", "projects", "research", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
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
    { name: "Research", href: "#research", icon: FileText, color: "text-accent-emerald" },
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/60 backdrop-blur-2xl border-b border-card-border/50 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 bg-gradient-to-br from-accent-orange via-accent-pink to-accent-purple rounded-xl flex items-center justify-center shadow-glow overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <img 
                src={leoSymbol} 
                alt="Leo Symbol" 
                className="w-7 h-7 object-contain filter brightness-0 invert"
              />
            </div>
            <span className="text-xl font-syne font-bold text-gradient hidden sm:block">MV</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-grotesk font-medium flex items-center space-x-2 transition-all duration-300 ${
                    isActive 
                      ? "text-foreground" 
                      : "text-foreground-muted hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-card/80 border border-card-border rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 ${item.color} relative z-10`} />
                  <span className="relative z-10">{item.name}</span>
                </button>
              );
            })}
            <Button
              onClick={() => window.open("https://drive.google.com/file/d/1QyVcV9hfj-MbGhXhG_UDZEu3VlD_v0C8/view?usp=sharing", "_blank")}
              className="btn-primary px-5 py-2.5 rounded-xl ml-4 font-grotesk text-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-xl border border-card-border"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-2xl border-b border-card-border"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center space-x-3 w-full text-left text-base font-grotesk font-medium py-3 px-4 rounded-xl hover:bg-card/50 transition-all duration-300"
                    >
                      <Icon className={`w-5 h-5 ${item.color}`} />
                      <span className="text-foreground-secondary">{item.name}</span>
                    </motion.button>
                  );
                })}
                <Button
                  onClick={() => window.open("https://drive.google.com/file/d/1QyVcV9hfj-MbGhXhG_UDZEu3VlD_v0C8/view?usp=sharing", "_blank")}
                  className="btn-primary w-full mt-4 rounded-xl font-grotesk"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
