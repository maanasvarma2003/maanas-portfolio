import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Base colors
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
          tertiary: "hsl(var(--background-tertiary))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          secondary: "hsl(var(--foreground-secondary))",
          muted: "hsl(var(--foreground-muted))",
        },
        
        // Brand colors
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        
        // Accent colors
        accent: {
          purple: "hsl(var(--accent-purple))",
          blue: "hsl(var(--accent-blue))",
          cyan: "hsl(var(--accent-cyan))",
          pink: "hsl(var(--accent-pink))",
          emerald: "hsl(var(--accent-emerald))",
          orange: "hsl(var(--accent-orange))",
        },
        
        // UI colors
        card: {
          DEFAULT: "hsl(var(--card))",
          hover: "hsl(var(--card-hover))",
          border: "hsl(var(--card-border))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        border: {
          DEFAULT: "hsl(var(--border))",
          light: "hsl(var(--border-light))",
        },
        
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
      },
      
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        'glow': 'var(--shadow-glow)',
        'card': 'var(--shadow-card)',
      },
      
      borderRadius: {
        DEFAULT: "var(--radius)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "morph": "morph 8s ease-in-out infinite",
        "rotate3d": "rotate3d 20s linear infinite",
        "levitate": "levitate 4s ease-in-out infinite",
        "particle-float": "particleFloat 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 4s ease infinite",
        "card-float": "cardFloat 6s ease-in-out infinite",
        "steam-rise": "steamRise 2s ease-out infinite",
        "magnetic-pull": "magneticPull 2s ease-in-out infinite",
        "hologram": "hologram 3s ease-in-out infinite",
      },
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { filter: "drop-shadow(0 0 20px hsl(var(--primary) / 0.3))" },
          to: { filter: "drop-shadow(0 0 30px hsl(var(--primary) / 0.5))" },
        },
        slideUp: {
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          to: { opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.6)" },
        },
        morph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        rotate3d: {
          "0%": { transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)" },
          "33%": { transform: "rotateX(360deg) rotateY(0deg) rotateZ(0deg)" },
          "66%": { transform: "rotateX(360deg) rotateY(360deg) rotateZ(0deg)" },
          "100%": { transform: "rotateX(360deg) rotateY(360deg) rotateZ(360deg)" },
        },
        levitate: {
          "0%, 100%": { transform: "translateY(0px) rotateX(0deg)" },
          "25%": { transform: "translateY(-10px) rotateX(5deg)" },
          "50%": { transform: "translateY(-20px) rotateX(0deg)" },
          "75%": { transform: "translateY(-10px) rotateX(-5deg)" },
        },
        particleFloat: {
          "0%": { transform: "translateY(0px) scale(0.8) rotate(0deg)", opacity: "0.6" },
          "50%": { transform: "translateY(-30px) scale(1.2) rotate(180deg)", opacity: "1" },
          "100%": { transform: "translateY(-60px) scale(0.8) rotate(360deg)", opacity: "0" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        cardFloat: {
          "0%, 100%": { transform: "translateY(0px) rotateY(0deg)" },
          "50%": { transform: "translateY(-15px) rotateY(2deg)" },
        },
        steamRise: {
          "0%": { transform: "translateY(0px) scale(1) rotate(0deg)", opacity: "0.7" },
          "100%": { transform: "translateY(-40px) scale(1.5) rotate(15deg)", opacity: "0" },
        },
        magneticPull: {
          "0%, 100%": { transform: "translateX(0px) scale(1)" },
          "50%": { transform: "translateX(-5px) scale(1.05)" },
        },
        hologram: {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsl(var(--primary) / 0.3), 0 0 40px hsl(var(--accent-cyan) / 0.2), inset 0 0 20px hsl(var(--primary) / 0.1)" 
          },
          "50%": { 
            boxShadow: "0 0 40px hsl(var(--accent-cyan) / 0.5), 0 0 80px hsl(var(--primary) / 0.3), inset 0 0 40px hsl(var(--accent-cyan) / 0.2)" 
          },
        },
      },
      
      transitionTimingFunction: {
        'smooth': 'var(--transition-smooth)',
        'bounce': 'var(--transition-bounce)',
        'slow': 'var(--transition-slow)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
