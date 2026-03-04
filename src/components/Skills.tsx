import { useState, Suspense } from "react";
import { Brain, Code, Database, BarChart3, Server, Wrench, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionScene } from "./3D/SectionScene";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Programming Languages");

  const skillCategories = {
    "Programming Languages": {
      icon: Code, color: "from-accent-blue to-accent-cyan",
      skills: [
        { name: "Python", level: 95, icon: "🐍" }, { name: "R", level: 90, icon: "📊" },
        { name: "SQL", level: 85, icon: "🗃️" }, { name: "JavaScript", level: 80, icon: "🟨" },
        { name: "Java", level: 75, icon: "☕" }, { name: "C++", level: 70, icon: "⚡" }
      ]
    },
    "Frontend": {
      icon: Brain, color: "from-accent-purple to-accent-pink",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" }, { name: "Next.js", level: 85, icon: "🔺" },
        { name: "HTML/CSS", level: 95, icon: "🎨" }, { name: "Tailwind CSS", level: 90, icon: "💨" },
        { name: "TypeScript", level: 80, icon: "📘" }, { name: "Vue.js", level: 70, icon: "💚" }
      ]
    },
    "Database Systems": {
      icon: Database, color: "from-accent-emerald to-accent-cyan",
      skills: [
        { name: "PostgreSQL", level: 85, icon: "🐘" }, { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "MySQL", level: 85, icon: "🐬" }, { name: "Redis", level: 75, icon: "🔴" },
        { name: "SQLite", level: 80, icon: "📱" }, { name: "Firebase", level: 75, icon: "🔥" }
      ]
    },
    "Data Science & ML": {
      icon: BarChart3, color: "from-accent-orange to-accent-pink",
      skills: [
        { name: "Pandas", level: 95, icon: "🐼" }, { name: "NumPy", level: 90, icon: "🔢" },
        { name: "Scikit-learn", level: 85, icon: "🤖" }, { name: "TensorFlow", level: 80, icon: "🧠" },
        { name: "Matplotlib", level: 85, icon: "📈" }, { name: "Jupyter", level: 90, icon: "📓" }
      ]
    },
    "Backend": {
      icon: Server, color: "from-accent-cyan to-accent-blue",
      skills: [
        { name: "Node.js", level: 80, icon: "🟢" }, { name: "Express.js", level: 75, icon: "🚂" },
        { name: "Django", level: 85, icon: "🎸" }, { name: "Flask", level: 80, icon: "🌶️" },
        { name: "FastAPI", level: 75, icon: "⚡" }, { name: "REST APIs", level: 85, icon: "🔗" }
      ]
    },
    "Tools": {
      icon: Wrench, color: "from-accent-purple to-accent-emerald",
      skills: [
        { name: "Git", level: 90, icon: "🔧" }, { name: "Docker", level: 80, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" }, { name: "Jupyter Notebook", level: 95, icon: "📔" },
        { name: "VS Code", level: 95, icon: "💻" }, { name: "Postman", level: 85, icon: "📮" }
      ]
    },
    "Soft Skills": {
      icon: Heart, color: "from-accent-pink to-accent-orange",
      skills: [
        { name: "Problem Solving", level: 95, icon: "🧩" }, { name: "Team Leadership", level: 85, icon: "👥" },
        { name: "Communication", level: 90, icon: "💬" }, { name: "Project Management", level: 80, icon: "📋" },
        { name: "Critical Thinking", level: 90, icon: "🤔" }, { name: "Adaptability", level: 95, icon: "🌟" }
      ]
    }
  };

  const categories = Object.keys(skillCategories);
  const currentSkills = skillCategories[activeCategory as keyof typeof skillCategories];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <SectionScene variant="grid" color1="#10b981" color2="#06b6d4" />
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-purple/20 bg-accent-purple/5 text-accent-purple text-sm font-grotesk mb-6">
            <Brain className="w-4 h-4" />
            Realm II — Arsenal
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-gradient tracking-tight">
            Skills & Expertise
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {categories.map((category) => {
            const categoryData = skillCategories[category as keyof typeof skillCategories];
            const Icon = categoryData.icon;
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2.5 rounded-xl text-sm font-grotesk font-medium flex items-center gap-2 transition-all duration-300 ${
                  isActive 
                    ? "text-foreground" 
                    : "text-foreground-muted hover:text-foreground-secondary"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className={`absolute inset-0 bg-gradient-to-r ${categoryData.color} opacity-15 rounded-xl border border-current/20`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10 hidden sm:inline">{category}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Display */}
        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="card-glass p-8 rounded-2xl">
                <div className="flex items-center mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${currentSkills.color} mr-4 shadow-lg`}>
                    <currentSkills.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-syne font-bold text-foreground">{activeCategory}</h3>
                </div>
                
                <div className="space-y-5">
                  {currentSkills.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="font-grotesk font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-accent-cyan font-mono text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${currentSkills.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: index * 0.08 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Visualization */}
          <div className="space-y-6">
            <Card className="card-glass p-8 rounded-2xl">
              <h3 className="text-xl font-syne font-bold text-gradient-accent mb-8 text-center">
                Proficiency Map
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {currentSkills.skills.slice(0, 4).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="42" stroke="hsl(var(--card-border))" strokeWidth="6" fill="transparent" />
                        <motion.circle
                          cx="50" cy="50" r="42"
                          stroke={`url(#skillGrad${index})`}
                          strokeWidth="6"
                          fill="transparent"
                          strokeLinecap="round"
                          initial={{ strokeDasharray: "0 264" }}
                          whileInView={{ strokeDasharray: `${skill.level * 2.64} 264` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: index * 0.15 }}
                        />
                        <defs>
                          <linearGradient id={`skillGrad${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="hsl(var(--accent-cyan))" />
                            <stop offset="100%" stopColor="hsl(var(--accent-purple))" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                      </div>
                    </div>
                    <div className="text-sm font-grotesk font-medium text-foreground">{skill.name}</div>
                    <div className="text-xs text-accent-cyan font-mono">{skill.level}%</div>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="card-glass p-6 rounded-2xl">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-syne font-bold text-gradient mb-1">
                    {currentSkills.skills.length}
                  </div>
                  <div className="text-xs text-foreground-muted font-grotesk">Technologies</div>
                </div>
                <div>
                  <div className="text-2xl font-syne font-bold text-gradient mb-1">
                    {Math.round(currentSkills.skills.reduce((acc, s) => acc + s.level, 0) / currentSkills.skills.length)}%
                  </div>
                  <div className="text-xs text-foreground-muted font-grotesk">Avg Proficiency</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <Card className="card-glass p-8 rounded-2xl">
            <h3 className="text-2xl font-syne font-bold text-gradient-accent mb-8 text-center">
              Technical Expertise
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Code, label: "15+ Languages & Frameworks", color: "text-accent-blue", bg: "from-accent-blue/10 to-accent-cyan/5" },
                { icon: Database, label: "8+ Database Technologies", color: "text-accent-purple", bg: "from-accent-purple/10 to-accent-pink/5" },
                { icon: BarChart3, label: "10+ Data Science Tools", color: "text-accent-emerald", bg: "from-accent-emerald/10 to-accent-cyan/5" },
                { icon: Wrench, label: "12+ Dev Tools", color: "text-accent-orange", bg: "from-accent-orange/10 to-accent-pink/5" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-5 bg-gradient-to-br ${item.bg} rounded-xl text-center group hover:scale-105 transition-all duration-300`}
                >
                  <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                  <div className="text-sm font-grotesk font-medium text-foreground-secondary">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
