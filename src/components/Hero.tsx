import { useState, useEffect, Suspense } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroScene3D } from "./3D/HeroScene3D";
import { MagneticButton } from "./ui/magnetic-button";

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
      {/* 3D Background */}
      <Suspense fallback={null}>
        <HeroScene3D />
      </Suspense>
      
      {/* Mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-accent-purple/8 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-accent-blue/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container-width section-padding text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
              <span className="text-accent-cyan text-sm font-grotesk font-medium tracking-wide">Available for opportunities</span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-syne font-extrabold tracking-tighter leading-[0.9]"
          >
            <span className="text-foreground">Maanas</span>
            <br />
            <span className="text-gradient inline-flex items-center gap-4">
              Varma
              <motion.span 
                className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-accent-orange via-accent-pink to-accent-purple rounded-2xl shadow-glow"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-7 h-7 md:w-10 md:h-10 text-primary-foreground" />
              </motion.span>
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="h-12 flex items-center justify-center"
          >
            <h2 className="text-xl md:text-2xl text-foreground-secondary font-mono tracking-wide">
              <span className="text-accent-cyan">&lt;</span>
              {text}
              <span className="animate-pulse text-accent-cyan">|</span>
              <span className="text-accent-cyan">/&gt;</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed font-grotesk"
          >
            Crafting intelligent systems that transform raw data into 
            <span className="text-accent-cyan"> actionable insights</span> and 
            <span className="text-accent-purple"> business value</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <MagneticButton>
              <Button 
                onClick={scrollToAbout}
                className="btn-primary px-10 py-6 text-lg rounded-2xl font-grotesk font-semibold"
              >
                Explore My Work
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button 
                onClick={() => window.open("https://drive.google.com/file/d/1QyVcV9hfj-MbGhXhG_UDZEu3VlD_v0C8/view?usp=sharing", "_blank")}
                className="btn-ghost px-10 py-6 text-lg rounded-2xl font-grotesk font-semibold"
              >
                Download Resume
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToAbout}
                className="hover:scale-110 transition-all duration-300 rounded-full border border-card-border"
              >
                <ArrowDown className="w-5 h-5 text-accent-cyan" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
