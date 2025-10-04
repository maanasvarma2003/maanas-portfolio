import { useState, useEffect, Suspense } from "react";
import { ArrowDown, Code, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroScene3D } from "./3D/HeroScene3D";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Data Scientist & AI/ML Engineer";
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > fullText.length) {
        currentIndex = 0;
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Background Scene */}
      <Suspense fallback={null}>
        <HeroScene3D />
      </Suspense>
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        
        {/* Additional 3D-like gradient orbs */}
        <div className="absolute top-32 right-20 w-40 h-40 bg-gradient-radial from-accent-pink/20 via-accent-orange/10 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-60 h-60 bg-gradient-radial from-accent-emerald/15 via-accent-cyan/8 to-transparent rounded-full animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container-width section-padding text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Greeting */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-accent-cyan text-lg font-medium">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="animate-fade-in text-5xl md:text-7xl font-bold text-gradient leading-tight" style={{ animationDelay: "0.4s" }}>
            Maanas Varma
          </h1>

          {/* Typing Animation */}
          <div className="animate-fade-in h-16 flex items-center justify-center" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-xl md:text-2xl text-foreground-secondary font-mono">
              {text}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          {/* Description */}
          <p className="animate-fade-in text-lg text-foreground-muted max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: "0.8s" }}>
            Passionate about extracting insights from data, building intelligent systems, and 
            driving business decisions through advanced analytics and machine learning.
          </p>

          {/* Skills Icons */}
          <div className="animate-fade-in flex justify-center space-x-8 py-8" style={{ animationDelay: "1s" }}>
            <div className="card-glass p-4 rounded-xl hover:scale-110 transition-all duration-300">
              <Code className="w-8 h-8 text-accent-blue" />
            </div>
            <div className="card-glass p-4 rounded-xl hover:scale-110 transition-all duration-300" style={{ animationDelay: "0.1s" }}>
              <Palette className="w-8 h-8 text-accent-purple" />
            </div>
            <div className="card-glass p-4 rounded-xl hover:scale-110 transition-all duration-300" style={{ animationDelay: "0.2s" }}>
              <Zap className="w-8 h-8 text-accent-cyan" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: "1.2s" }}>
            <Button 
              onClick={scrollToAbout}
              className="btn-primary px-8 py-4 text-lg rounded-xl"
            >
              Explore My Work
            </Button>
            <Button 
              onClick={() => window.open("https://drive.google.com/file/d/1WpjG_1LbMhbsG-SOSXpNT-sj9-X6zSuO/view?usp=sharing", "_blank")}
              className="btn-ghost px-8 py-4 text-lg rounded-xl"
            >
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in absolute bottom-8 left-1/2 transform -translate-x-1/2" style={{ animationDelay: "1.4s" }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToAbout}
              className="animate-bounce hover:scale-110 transition-all duration-300"
            >
              <ArrowDown className="w-6 h-6 text-accent-cyan" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;