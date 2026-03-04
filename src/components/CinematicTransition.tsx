import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface CinematicTransitionProps {
  children: React.ReactNode;
  realm: "nebula" | "matrix" | "aurora" | "cosmos" | "forge" | "ocean" | "portal" | "void";
}

const realmConfigs = {
  nebula: {
    gradient: "radial-gradient(ellipse at 50% 0%, hsl(280 100% 70% / 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, hsl(220 100% 65% / 0.08) 0%, transparent 50%)",
    particles: "hsl(var(--accent-purple))",
    glow: "hsl(var(--accent-purple) / 0.15)",
  },
  matrix: {
    gradient: "radial-gradient(ellipse at 30% 20%, hsl(155 85% 55% / 0.1) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, hsl(185 100% 60% / 0.08) 0%, transparent 50%)",
    particles: "hsl(var(--accent-emerald))",
    glow: "hsl(var(--accent-emerald) / 0.12)",
  },
  aurora: {
    gradient: "radial-gradient(ellipse at 20% 50%, hsl(185 100% 60% / 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 30%, hsl(265 90% 65% / 0.08) 0%, transparent 50%)",
    particles: "hsl(var(--accent-cyan))",
    glow: "hsl(var(--accent-cyan) / 0.12)",
  },
  cosmos: {
    gradient: "radial-gradient(ellipse at 50% 50%, hsl(220 100% 65% / 0.1) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, hsl(25 100% 65% / 0.06) 0%, transparent 50%)",
    particles: "hsl(var(--accent-blue))",
    glow: "hsl(var(--accent-blue) / 0.12)",
  },
  forge: {
    gradient: "radial-gradient(ellipse at 60% 30%, hsl(25 100% 65% / 0.1) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, hsl(330 100% 70% / 0.08) 0%, transparent 50%)",
    particles: "hsl(var(--accent-orange))",
    glow: "hsl(var(--accent-orange) / 0.1)",
  },
  ocean: {
    gradient: "radial-gradient(ellipse at 40% 60%, hsl(185 100% 60% / 0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, hsl(220 100% 65% / 0.08) 0%, transparent 50%)",
    particles: "hsl(var(--accent-cyan))",
    glow: "hsl(var(--accent-cyan) / 0.15)",
  },
  portal: {
    gradient: "radial-gradient(ellipse at 50% 50%, hsl(330 100% 70% / 0.1) 0%, transparent 50%), radial-gradient(ellipse at 20% 20%, hsl(265 90% 65% / 0.08) 0%, transparent 50%)",
    particles: "hsl(var(--accent-pink))",
    glow: "hsl(var(--accent-pink) / 0.12)",
  },
  void: {
    gradient: "radial-gradient(ellipse at 50% 50%, hsl(155 85% 55% / 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, hsl(185 100% 60% / 0.06) 0%, transparent 50%)",
    particles: "hsl(var(--accent-emerald))",
    glow: "hsl(var(--accent-emerald) / 0.1)",
  },
};

const CinematicTransition = ({ children, realm }: CinematicTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const config = realmConfigs[realm];
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.1], [60, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative">
      {/* Realm background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: bgOpacity, backgroundImage: config.gradient }}
      />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-[10%] w-[300px] h-[300px] rounded-full blur-[150px] pointer-events-none"
        style={{ backgroundColor: config.glow, opacity: bgOpacity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[10%] w-[250px] h-[250px] rounded-full blur-[120px] pointer-events-none"
        style={{ backgroundColor: config.glow, opacity: bgOpacity }}
      />

      {/* Horizon line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          opacity: bgOpacity,
          background: `linear-gradient(90deg, transparent, ${config.particles}, transparent)`,
        }}
      />

      {/* Content with cinematic entrance */}
      <motion.div style={{ opacity, scale, y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default CinematicTransition;
