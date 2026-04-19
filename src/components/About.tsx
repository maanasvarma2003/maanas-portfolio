import { Download, Award, Target, Heart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "./ui/animated-counter";
import { SectionScene } from "./3D/SectionScene";
import maanasPhoto from "@/assets/maanas.jpg";
import { useRef, Suspense } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const skills = [
    { name: "Python", level: 95, icon: "🐍" },
    { name: "Machine Learning", level: 90, icon: "🤖" },
    { name: "Data Analysis", level: 95, icon: "📊" },
    { name: "SQL", level: 85, icon: "🗃️" },
    { name: "TensorFlow/PyTorch", level: 80, icon: "🧠" },
    { name: "Statistical Modeling", level: 88, icon: "📈" },
  ];

  const highlights = [
    { icon: Award, title: "Excellence Driven", description: "Committed to delivering high-quality solutions that exceed expectations", gradient: "from-accent-blue to-accent-cyan" },
    { icon: Target, title: "Problem Solver", description: "Analytical mindset focused on finding innovative solutions to complex challenges", gradient: "from-accent-purple to-accent-pink" },
    { icon: Heart, title: "User Focused", description: "Passionate about creating intuitive experiences that users love", gradient: "from-accent-orange to-accent-pink" },
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding relative overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <SectionScene variant="nebula" color1="#8b5cf6" color2="#06b6d4" />
      </Suspense>
      
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue text-sm font-grotesk mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            Realm I — Origin
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-gradient tracking-tight">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                <motion.div style={{ y: parallaxY }} className="relative w-52 h-52 rounded-3xl overflow-hidden border-2 border-card-border shadow-2xl">
                  <img 
                    src={maanasPhoto} 
                    alt="Maanas Varma - Data Scientist" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-syne font-bold text-gradient-secondary mb-4">My Story</h3>
              <p className="text-foreground-secondary leading-relaxed mb-4 font-grotesk">
                I'm a passionate data scientist and AI/ML engineer with expertise in extracting 
                meaningful insights from complex datasets and building intelligent systems.
              </p>
              <p className="text-foreground-secondary leading-relaxed mb-6 font-grotesk">
                My journey combines analytical thinking with technical expertise 
                to solve real-world problems. I specialize in predictive modeling, deep learning, 
                and creating data-driven solutions. Beyond technology, I'm deeply interested in 
                financial markets and algorithmic trading strategies.
              </p>
              
              <Button 
                onClick={() => window.open("https://drive.google.com/file/d/1Y1Iq3SDdKsapKTsyg4MLaMbu6YxuvVkv/view?usp=sharing", "_blank")}
                className="btn-glow px-6 py-3 rounded-xl font-grotesk"
              >
                <Download className="w-5 h-5 mr-2" />
                View Full Resume
              </Button>
            </motion.div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="card-glass hover:card-hover transition-all duration-500 group">
                    <CardContent className="p-5 flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${highlight.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <highlight.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-syne font-semibold text-foreground">{highlight.title}</h4>
                        <p className="text-foreground-muted text-sm font-grotesk">{highlight.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-glass p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-syne font-bold text-gradient-accent mb-8">
                Core Skills
              </h3>
              
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-grotesk font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-accent-cyan font-mono font-semibold text-sm">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 20, suffix: "+", label: "Projects Completed" },
                { value: 1, suffix: "+", label: "Years Experience" },
                { value: 15, suffix: "+", label: "Technologies" },
                { value: 100, suffix: "%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="card-glass p-6 text-center group hover:border-primary/30 transition-all duration-500">
                    <div className="text-3xl font-syne font-bold text-gradient mb-2">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-foreground-muted text-sm font-grotesk">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
