import { useState, Suspense } from "react";
import { Brain, Code, Database, BarChart3, Server, Wrench, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SkillsScene3D } from "./3D/SkillsScene3D";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Programming Languages");

  const skillCategories = {
    "Programming Languages": {
      icon: Code,
      color: "from-accent-blue to-accent-cyan",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "R", level: 90, icon: "📊" },
        { name: "SQL", level: 85, icon: "🗃️" },
        { name: "JavaScript", level: 80, icon: "🟨" },
        { name: "Java", level: 75, icon: "☕" },
        { name: "C++", level: 70, icon: "⚡" }
      ]
    },
    "Frontend": {
      icon: Brain,
      color: "from-accent-purple to-accent-pink",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "🔺" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 90, icon: "💨" },
        { name: "TypeScript", level: 80, icon: "📘" },
        { name: "Vue.js", level: 70, icon: "💚" }
      ]
    },
    "Database Systems": {
      icon: Database,
      color: "from-accent-emerald to-accent-cyan",
      skills: [
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "MySQL", level: 85, icon: "🐬" },
        { name: "Redis", level: 75, icon: "🔴" },
        { name: "SQLite", level: 80, icon: "📱" },
        { name: "Firebase", level: 75, icon: "🔥" }
      ]
    },
    "Data Science & Machine Learning": {
      icon: BarChart3,
      color: "from-accent-orange to-accent-pink",
      skills: [
        { name: "Pandas", level: 95, icon: "🐼" },
        { name: "NumPy", level: 90, icon: "🔢" },
        { name: "Scikit-learn", level: 85, icon: "🤖" },
        { name: "TensorFlow", level: 80, icon: "🧠" },
        { name: "Matplotlib", level: 85, icon: "📈" },
        { name: "Jupyter", level: 90, icon: "📓" }
      ]
    },
    "Backend": {
      icon: Server,
      color: "from-accent-cyan to-accent-blue",
      skills: [
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Express.js", level: 75, icon: "🚂" },
        { name: "Django", level: 85, icon: "🎸" },
        { name: "Flask", level: 80, icon: "🌶️" },
        { name: "FastAPI", level: 75, icon: "⚡" },
        { name: "REST APIs", level: 85, icon: "🔗" }
      ]
    },
    "Tools": {
      icon: Wrench,
      color: "from-accent-purple to-accent-emerald",
      skills: [
        { name: "Git", level: 90, icon: "🔧" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "Jupyter Notebook", level: 95, icon: "📔" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "Postman", level: 85, icon: "📮" }
      ]
    },
    "Soft Skills": {
      icon: Heart,
      color: "from-accent-pink to-accent-orange",
      skills: [
        { name: "Problem Solving", level: 95, icon: "🧩" },
        { name: "Team Leadership", level: 85, icon: "👥" },
        { name: "Communication", level: 90, icon: "💬" },
        { name: "Project Management", level: 80, icon: "📋" },
        { name: "Critical Thinking", level: 90, icon: "🤔" },
        { name: "Adaptability", level: 95, icon: "🌟" }
      ]
    }
  };

  const categories = Object.keys(skillCategories);
  const currentSkills = skillCategories[activeCategory as keyof typeof skillCategories];

  return (
    <section id="skills" className="section-padding bg-background-secondary/30 relative overflow-hidden">
      <Suspense fallback={null}>
        <SkillsScene3D />
      </Suspense>
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-8 h-8 text-accent-purple mr-3 animate-pulse" />
            <h2 className="text-4xl font-bold text-gradient">Skills & Expertise</h2>
          </div>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Comprehensive technical skills and expertise in data science, development, and analytics
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const categoryData = skillCategories[category as keyof typeof skillCategories];
            const Icon = categoryData.icon;
            return (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category 
                    ? "btn-primary scale-105" 
                    : "btn-ghost hover:scale-105"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{category}</span>
              </Button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Skills List */}
          <div className="space-y-6">
            <Card className="card-floating p-8">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${currentSkills.color} mr-4`}>
                  <currentSkills.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-gradient-secondary">
                  {activeCategory}
                </h3>
              </div>
              
              <div className="space-y-4">
                {currentSkills.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-accent-cyan font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress bg-gradient-to-r ${currentSkills.color}`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Skills Visualization */}
          <div className="space-y-6">
            <Card className="card-floating p-8">
              <h3 className="text-xl font-bold text-gradient-accent mb-6 text-center">
                Skill Distribution
              </h3>
              
              {/* Circular Progress Indicators */}
              <div className="grid grid-cols-2 gap-6">
                {currentSkills.skills.slice(0, 4).map((skill, index) => (
                  <div key={index} className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-3">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="transparent"
                          className="text-card-border"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          stroke="url(#gradient)"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray={`${skill.level * 2.83} 283`}
                          className="transition-all duration-1000 ease-out"
                          style={{ animationDelay: `${index * 0.2}s` }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="hsl(var(--accent-blue))" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl">{skill.icon}</span>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-foreground">{skill.name}</div>
                    <div className="text-xs text-accent-cyan">{skill.level}%</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Category Stats */}
            <Card className="card-glass p-6">
              <h4 className="font-semibold text-foreground mb-4 text-center">
                {activeCategory} Stats
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {currentSkills.skills.length}
                  </div>
                  <div className="text-xs text-foreground-muted">Technologies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {Math.round(currentSkills.skills.reduce((acc, skill) => acc + skill.level, 0) / currentSkills.skills.length)}%
                  </div>
                  <div className="text-xs text-foreground-muted">Avg Proficiency</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Overall Skills Summary */}
        <Card className="card-glass p-8">
          <h3 className="text-2xl font-bold text-gradient-accent mb-6 text-center">
            Technical Expertise Overview
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-gradient-to-r from-accent-blue/10 to-accent-cyan/10 rounded-xl">
              <Code className="w-8 h-8 text-accent-blue mx-auto mb-2" />
              <div className="text-lg font-bold text-foreground">15+</div>
              <div className="text-sm text-foreground-muted">Programming Languages & Frameworks</div>
            </div>
            <div className="p-4 bg-gradient-to-r from-accent-purple/10 to-accent-pink/10 rounded-xl">
              <Database className="w-8 h-8 text-accent-purple mx-auto mb-2" />
              <div className="text-lg font-bold text-foreground">8+</div>
              <div className="text-sm text-foreground-muted">Database Technologies</div>
            </div>
            <div className="p-4 bg-gradient-to-r from-accent-emerald/10 to-accent-cyan/10 rounded-xl">
              <BarChart3 className="w-8 h-8 text-accent-emerald mx-auto mb-2" />
              <div className="text-lg font-bold text-foreground">10+</div>
              <div className="text-sm text-foreground-muted">Data Science Tools</div>
            </div>
            <div className="p-4 bg-gradient-to-r from-accent-orange/10 to-accent-pink/10 rounded-xl">
              <Wrench className="w-8 h-8 text-accent-orange mx-auto mb-2" />
              <div className="text-lg font-bold text-foreground">12+</div>
              <div className="text-sm text-foreground-muted">Development Tools</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;