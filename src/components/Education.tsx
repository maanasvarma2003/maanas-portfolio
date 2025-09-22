import { GraduationCap, Calendar, Star, Award, Sparkles, Atom } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering (IoT)",
      institution: "Vellore Institute of Technology (VIT), Vellore",
      board: "VIT University",
      period: "2022 - 2026",
      gpa: "7.56/10",
      color: "from-accent-blue to-accent-cyan",
      icon: <Atom className="w-6 h-6" />,
      particles: 8,
      achievements: ["IoT Specialization", "Data Science Focus", "ML Research"]
    },
    {
      degree: "Pre-University (PCMC)",
      institution: "Expert PU College, Mangalore",
      board: "Karnataka State Board",
      period: "2020 - 2022",
      gpa: "91.83%",
      color: "from-accent-purple to-accent-pink",
      icon: <Star className="w-6 h-6" />,
      particles: 6,
      achievements: ["Physics, Chemistry, Mathematics", "Computer Science", "Statistics"]
    },
    {
      degree: "ICSE (Class X)",
      institution: "S.T. Francis School, Bengaluru",
      board: "ICSE Board",
      period: "2020",
      gpa: "92.5%",
      color: "from-accent-emerald to-accent-cyan",
      icon: <Award className="w-6 h-6" />,
      particles: 5,
      achievements: ["Academic Excellence", "All-round Development", "Foundation Skills"]
    }
  ];

  const ParticleSystem = ({ count, delay }: { count: number; delay: number }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-accent-cyan rounded-full animate-particle-float opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${delay + i * 0.3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );

  const HolographicElement = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 via-accent-blue/5 to-accent-purple/10 animate-hologram rounded-xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );

  return (
    <section id="education" className="section-padding overflow-hidden" ref={sectionRef}>
      <div className="container-width">
        {/* Enhanced Header with 3D Effects */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-accent-purple/5 to-accent-cyan/5 animate-gradient-shift opacity-50" 
               style={{ backgroundSize: '400% 400%' }} />
          
          <HolographicElement className="relative inline-block">
            <div className="flex items-center justify-center mb-8 relative">
              <div className="relative">
                <GraduationCap className="w-12 h-12 text-accent-purple animate-levitate" />
                <div className="absolute inset-0 animate-rotate3d opacity-30">
                  <Sparkles className="w-12 h-12 text-accent-cyan" />
                </div>
              </div>
              <h2 className="text-5xl font-bold text-gradient ml-4 animate-magnetic-pull">
                Education Journey
              </h2>
            </div>
          </HolographicElement>
          
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed animate-fade-in" 
             style={{ animationDelay: '0.3s' }}>
            Crafting knowledge through academic excellence and continuous learning in data science and technology
          </p>

          {/* Floating Decorative Elements */}
          <div className="absolute top-0 left-1/4 w-20 h-20 bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 rounded-full animate-morph blur-xl" />
          <div className="absolute bottom-0 right-1/4 w-16 h-16 bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 rounded-full animate-morph blur-xl" 
               style={{ animationDelay: '2s' }} />
        </div>

        {/* Advanced Train Timeline with 3D Effects */}
        <div className="relative max-w-6xl mx-auto perspective-1000">
          {/* Quantum Train Track */}
          <div className="absolute left-12 top-0 bottom-0 w-2 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-emerald rounded-full shadow-2xl animate-glow">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20 animate-gradient-shift rounded-full" />
          </div>

          {/* Enhanced Railway Infrastructure */}
          <div className="absolute left-8 top-0 bottom-0 pointer-events-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="absolute flex items-center">
                <div 
                  className="w-8 h-2 bg-gradient-to-r from-card-border/50 to-foreground-muted/30 rounded-full animate-pulse"
                  style={{ 
                    top: `${5 + i * 6.5}%`,
                    left: '-16px',
                    animationDelay: `${i * 0.1}s`,
                    transform: 'perspective(100px) rotateX(45deg)'
                  }}
                />
                {/* Quantum Energy Pulses */}
                <div 
                  className="absolute w-1 h-1 bg-accent-cyan rounded-full animate-particle-float"
                  style={{ 
                    left: `${-12 + Math.sin(i) * 4}px`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '2s'
                  }}
                />
              </div>
            ))}
          </div>
          
          <div className="space-y-24 relative">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="relative flex items-center group"
                style={{ 
                  animation: `fadeIn 1s ease-out forwards, cardFloat 8s ease-in-out infinite`,
                  animationDelay: `${index * 0.6}s, ${index * 2}s`
                }}
              >
                {/* Quantum Station Hub */}
                <div className="relative left-10 z-20">
                  <HolographicElement>
                    <div className={`w-12 h-12 bg-gradient-to-r ${edu.color} rounded-xl border-4 border-background shadow-2xl 
                                   group-hover:scale-125 transition-all duration-700 animate-pulse relative overflow-hidden
                                   transform-gpu perspective-1000`}
                         style={{ 
                           transformStyle: 'preserve-3d',
                           animation: `pulse 2s infinite, levitate 4s ease-in-out infinite`
                         }}>
                      
                      {/* Icon with 3D rotation */}
                      <div className="absolute inset-0 flex items-center justify-center text-primary-foreground animate-rotate3d"
                           style={{ animationDuration: '12s' }}>
                        {edu.icon}
                      </div>

                      {/* Quantum Ripple Effects */}
                      <div className="absolute inset-0 rounded-xl animate-ping opacity-30 bg-gradient-to-r from-accent-cyan/50 to-accent-blue/50" 
                           style={{ animationDuration: '3s' }} />
                      <div className="absolute inset-0 rounded-xl animate-ping opacity-20 bg-gradient-to-r from-accent-purple/50 to-accent-pink/50" 
                           style={{ animationDuration: '4s', animationDelay: '1s' }} />

                      {/* Energy Particles */}
                      <ParticleSystem count={edu.particles} delay={index * 0.5} />
                    </div>
                  </HolographicElement>

                  {/* Advanced Steam/Energy Effect */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 pointer-events-none">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-accent-cyan/60 to-accent-blue/40 rounded-full 
                                 animate-steam-rise opacity-0 group-hover:opacity-100"
                        style={{ 
                          animationDelay: `${i * 0.3}s`,
                          left: `${-4 + i * 2}px`,
                          top: `-${i * 2}px`,
                          animationDuration: `${2 + Math.random()}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Ultra-Advanced Education Card */}
                <Card className="ml-20 relative group-hover:scale-105 transition-all duration-1000 overflow-hidden 
                               shadow-2xl hover:shadow-glow transform-gpu perspective-1000"
                      style={{ 
                        transformStyle: 'preserve-3d',
                        background: 'linear-gradient(135deg, hsl(var(--card) / 0.8) 0%, hsl(var(--card-hover) / 0.9) 100%)',
                        backdropFilter: 'blur(20px)',
                        animation: 'cardFloat 8s ease-in-out infinite'
                      }}>
                  
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-purple/5 
                                animate-hologram pointer-events-none" />
                  
                  <CardContent className="p-0 relative">
                    <div className="flex">
                      {/* Dynamic Side Panel */}
                      <div className={`w-4 bg-gradient-to-b ${edu.color} flex-shrink-0 relative overflow-hidden`}
                           style={{ 
                             background: `linear-gradient(45deg, ${edu.color.split(' ')[1]}, ${edu.color.split(' ')[3]})`,
                             backgroundSize: '200% 200%',
                             animation: 'gradientShift 4s ease infinite'
                           }}>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" />
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent animate-pulse" 
                             style={{ animationDelay: '1s' }} />
                      </div>
                      
                      {/* Enhanced Content Section */}
                      <div className="flex-1 p-10 relative">
                        <ParticleSystem count={4} delay={index} />
                        
                        <div className="flex justify-between items-start mb-8">
                          <div className="flex-1 relative">
                            <HolographicElement>
                              <h3 className="text-3xl font-bold text-gradient mb-4 
                                           group-hover:scale-105 transition-transform duration-700 animate-magnetic-pull">
                                {edu.degree}
                              </h3>
                            </HolographicElement>
                            
                            <h4 className="text-2xl font-semibold text-foreground-secondary mb-3 
                                         group-hover:text-gradient-secondary transition-all duration-700">
                              {edu.institution}
                            </h4>
                            
                            <div className="flex items-center mb-6">
                              <span className="w-3 h-3 bg-accent-cyan rounded-full mr-3 animate-pulse" />
                              <span className="text-accent-cyan font-semibold text-lg">{edu.board}</span>
                            </div>

                            {/* Achievements Showcase */}
                            <div className="grid grid-cols-1 gap-2 mt-4">
                              {edu.achievements.map((achievement, i) => (
                                <div key={i} 
                                     className="flex items-center text-foreground-muted text-sm 
                                              hover:text-accent-cyan transition-colors duration-300">
                                  <Sparkles className="w-3 h-3 mr-2 animate-pulse" 
                                           style={{ animationDelay: `${i * 0.2}s` }} />
                                  <span>{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="text-right relative">
                            <div className="flex items-center text-foreground-muted text-lg mb-4 justify-end">
                              <Calendar className="w-5 h-5 mr-3 animate-pulse" />
                              <span className="font-medium">{edu.period}</span>
                            </div>
                            
                            <HolographicElement>
                              <div className={`inline-block px-6 py-3 rounded-2xl text-lg font-bold text-primary-foreground 
                                             bg-gradient-to-r ${edu.color} shadow-xl hover:shadow-glow 
                                             transition-all duration-500 transform hover:scale-110 animate-levitate`}
                                   style={{ animationDelay: `${index * 0.5}s` }}>
                                {edu.gpa}
                              </div>
                            </HolographicElement>
                          </div>
                        </div>
                        
                        {/* Floating Achievement Constellation */}
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          <div className="relative w-8 h-8">
                            {Array.from({ length: 3 }).map((_, i) => (
                              <div 
                                key={i}
                                className={`absolute w-2 h-2 bg-gradient-to-r ${edu.color} rounded-full animate-particle-float`}
                                style={{ 
                                  animationDelay: `${i * 0.4}s`,
                                  left: `${i * 6}px`,
                                  top: `${i * 3}px`
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Quantum Destination Portal */}
          <div className="absolute -bottom-12 left-8 transform perspective-1000">
            <HolographicElement>
              <div className="bg-gradient-to-r from-accent-emerald via-accent-cyan to-accent-blue 
                            px-8 py-4 rounded-2xl shadow-2xl animate-hologram">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                  <span className="text-primary-foreground font-bold text-lg">
                    🎓 Destination: Data Science Mastery
                  </span>
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
              </div>
            </HolographicElement>
          </div>
        </div>

        {/* Enhanced Skills Matrix */}
        <div className="mt-24 relative">
          <HolographicElement>
            <Card className="card-glass p-12 relative overflow-hidden animate-card-float">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-accent-purple/5 to-accent-cyan/5 
                            animate-gradient-shift opacity-50 pointer-events-none" 
                   style={{ backgroundSize: '400% 400%' }} />
              
              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-gradient-accent mb-10 text-center animate-magnetic-pull">
                  Academic Arsenal & Technologies
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "Data Structures & Algorithms", "Statistics & Probability", "Machine Learning",
                    "Deep Learning", "Data Mining", "Statistical Analysis", "Python Programming",
                    "Database Management", "Linear Algebra", "Calculus & Optimization",
                    "Data Visualization", "Research Methodology"
                  ].map((subject, index) => (
                    <HolographicElement key={index}>
                      <div className="bg-gradient-to-r from-card to-card-hover p-6 rounded-xl text-center 
                                    hover:scale-110 transition-all duration-500 border border-card-border 
                                    relative overflow-hidden group animate-levitate"
                           style={{ animationDelay: `${index * 0.1}s` }}>
                        
                        <ParticleSystem count={2} delay={index * 0.2} />
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <span className="text-foreground font-semibold text-lg relative z-10 group-hover:text-gradient-accent transition-all duration-300">
                          {subject}
                        </span>
                        
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <Sparkles className="w-4 h-4 text-accent-cyan animate-pulse" />
                        </div>
                      </div>
                    </HolographicElement>
                  ))}
                </div>
              </div>
            </Card>
          </HolographicElement>
        </div>
      </div>
    </section>
  );
};

export default Education;