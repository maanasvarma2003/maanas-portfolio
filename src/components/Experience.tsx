import { Briefcase, Calendar, MapPin, TrendingUp, Users, Code2, Database, FileCode } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "./ui/animated-counter";
import { SectionScene } from "./3D/SectionScene";
import { Suspense } from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Job Simulation",
      company: "Wells Fargo (via Forage)",
      location: "Remote",
      period: "March 2026",
      type: "Job Simulation",
      description: "Completed Wells Fargo's Software Engineering Job Simulation on Forage, focusing on financial portfolio management systems, data modeling, and ERD implementation.",
      achievements: [
        "Understood relevant requirements for building a system to manage financial portfolios",
        "Figured out what data the system needed to keep track of",
        "Drafted a visual representation of the data as an entity relationship diagram (ERD)",
        "Used the IntelliJ developer application to implement the ERD and published it to GitHub"
      ],
      technologies: ["Java", "IntelliJ IDEA", "ERD Design", "Data Modeling", "Git", "GitHub", "Financial Systems"],
      responsibilities: [
        { icon: Database, title: "Data Modeling", description: "Designing ERDs for financial portfolio management" },
        { icon: FileCode, title: "System Implementation", description: "Implementing data models using IntelliJ and GitHub" },
        { icon: TrendingUp, title: "Requirements Analysis", description: "Translating business requirements for financial systems" }
      ],
      gradient: "from-accent-orange to-accent-pink"
    },
    {
      title: "Frontend Developer Intern",
      company: "Hexapro Technologies",
      location: "Bengaluru",
      period: "May 2024 - Jun 2024",
      type: "Internship",
      description: "Built and deployed responsive corporate website using modern frontend technologies. Collaborated with design and backend teams for end-to-end delivery.",
      achievements: [
        "Built and deployed a responsive corporate website",
        "Improved page load speed by 25% and reduced bundle size by 18%",
        "Ensured 95% device compatibility across platforms",
        "Delivered end-to-end company profile platform",
        "Collaborated effectively with design and backend teams"
      ],
      technologies: ["React.js", "HTML5", "CSS3", "Bootstrap", "JavaScript (ES6+)", "Git", "Responsive Design"],
      responsibilities: [
        { icon: Code2, title: "Frontend Development", description: "Building responsive apps with React.js" },
        { icon: Users, title: "Team Collaboration", description: "Working with design and backend teams" },
        { icon: TrendingUp, title: "Performance Optimization", description: "Improving website performance" }
      ],
      gradient: "from-accent-emerald to-accent-cyan"
    }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <SectionScene variant="stars" color1="#3b82f6" color2="#f97316" />
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-sm font-grotesk mb-6">
            <Briefcase className="w-4 h-4" />
            Realm IV — Forge
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-gradient tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: expIndex * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="card-glass rounded-2xl overflow-hidden group hover:border-primary/20 transition-all duration-500">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className={`lg:w-1.5 w-full h-1.5 lg:h-auto bg-gradient-to-r lg:bg-gradient-to-b ${exp.gradient}`}></div>
                    
                    <div className="flex-1 p-8 lg:p-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-syne font-bold text-foreground mb-2">{exp.title}</h3>
                          <h4 className="text-lg font-grotesk text-gradient-accent font-semibold">{exp.company}</h4>
                        </div>
                        
                        <div className="mt-4 lg:mt-0 lg:text-right flex flex-wrap gap-3 lg:flex-col">
                          <div className="flex items-center text-foreground-muted text-sm font-grotesk">
                            <Calendar className="w-4 h-4 mr-2" /> {exp.period}
                          </div>
                          <div className="flex items-center text-foreground-muted text-sm font-grotesk">
                            <MapPin className="w-4 h-4 mr-2" /> {exp.location}
                          </div>
                          <span className={`inline-flex px-4 py-1.5 rounded-full text-xs font-grotesk font-semibold text-primary-foreground bg-gradient-to-r ${exp.gradient}`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-foreground-muted leading-relaxed mb-8 font-grotesk">{exp.description}</p>

                      {/* Responsibilities */}
                      <div className="mb-8">
                        <h5 className="font-syne font-semibold text-foreground mb-4">Key Responsibilities</h5>
                        <div className="grid sm:grid-cols-3 gap-4">
                          {exp.responsibilities.map((resp, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="card-glass p-5 rounded-xl text-center group/card hover:border-primary/20 transition-all duration-300"
                            >
                              <div className={`p-2.5 rounded-lg bg-gradient-to-br ${exp.gradient} w-fit mx-auto mb-3 shadow-md`}>
                                <resp.icon className="w-5 h-5 text-primary-foreground" />
                              </div>
                              <h6 className="font-grotesk font-semibold text-foreground text-sm mb-1">{resp.title}</h6>
                              <p className="text-foreground-muted text-xs font-grotesk">{resp.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-8">
                        <h5 className="font-syne font-semibold text-foreground mb-4 flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2 text-accent-emerald" /> Key Achievements
                        </h5>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {exp.achievements.map((a, i) => (
                            <div key={i} className="flex items-start p-3 rounded-xl hover:bg-card/50 transition-all duration-300">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient} mr-3 mt-2 flex-shrink-0`}></div>
                              <span className="text-foreground-secondary text-sm font-grotesk">{a}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="font-syne font-semibold text-foreground mb-3">Technologies</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-grotesk font-medium text-foreground-secondary border border-card-border hover:border-primary/20 transition-all duration-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16">
          {[
            { value: 2, label: "Experiences" },
            { value: 20, suffix: "+", label: "Projects Completed" },
            { value: 25, suffix: "%", label: "Performance Boost" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="card-glass p-6 text-center rounded-2xl">
                <div className="text-3xl md:text-4xl font-syne font-bold text-gradient mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix || ""} />
                </div>
                <div className="text-foreground-muted text-sm font-grotesk">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
