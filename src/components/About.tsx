import { User, Download, Award, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import maanasPhoto from "@/assets/maanas.jpg";

const About = () => {
  const skills = [
    { name: "Python", level: 95, icon: "🐍" },
    { name: "Machine Learning", level: 90, icon: "🤖" },
    { name: "Data Analysis", level: 95, icon: "📊" },
    { name: "SQL", level: 85, icon: "🗃️" },
    { name: "TensorFlow/PyTorch", level: 80, icon: "🧠" },
    { name: "Statistical Modeling", level: 88, icon: "📈" },
  ];

  const highlights = [
    {
      icon: Award,
      title: "Excellence Driven",
      description: "Committed to delivering high-quality solutions that exceed expectations"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Analytical mindset focused on finding innovative solutions to complex challenges"
    },
    {
      icon: Heart,
      title: "User Focused",
      description: "Passionate about creating intuitive experiences that users love"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background-secondary/50">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <User className="w-8 h-8 text-accent-blue mr-3" />
            <h2 className="text-4xl font-bold text-gradient">About Me</h2>
          </div>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Discover my journey, skills, and passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse"></div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gradient-primary shadow-2xl">
                  <img 
                    src={maanasPhoto} 
                    alt="Maanas Varma - Data Scientist" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="card-floating p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gradient-secondary mb-4">
                My Story
              </h3>
              <p className="text-foreground-secondary leading-relaxed mb-6">
                I'm a passionate data scientist and AI/ML engineer with expertise in extracting 
                meaningful insights from complex datasets and building intelligent systems. With 
                a strong foundation in statistics, machine learning, and data visualization, 
                I transform raw data into actionable business intelligence.
              </p>
              <p className="text-foreground-secondary leading-relaxed mb-6">
                My journey in data science combines analytical thinking with technical expertise 
                to solve real-world problems. I specialize in predictive modeling, deep learning, 
                and creating data-driven solutions that drive business growth and innovation. 
                Beyond technology, I'm deeply interested in financial markets and stock trading, 
                applying data science techniques to market analysis and algorithmic trading strategies.
              </p>
              
              <Button 
                onClick={() => window.open("https://drive.google.com/file/d/16qygz2pmr2N2XD1vsJ-thf1DCzgBPfeY/view?usp=sharing")}
                className="btn-glow px-6 py-3 rounded-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                View Full Resume
              </Button>
            </div>

            {/* Highlights */}
            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="card-glass hover:card-hover transition-all duration-300">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <highlight.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                      <p className="text-foreground-muted text-sm">{highlight.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-8">
            <div className="card-floating p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gradient-accent mb-8">
                Skills & Expertise
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-accent-cyan font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="card-glass p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-gradient mb-2">7+</div>
                <div className="text-foreground-muted text-sm">Projects Completed</div>
              </Card>
              <Card className="card-glass p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-gradient mb-2">1+</div>
                <div className="text-foreground-muted text-sm">Years Experience</div>
              </Card>
              <Card className="card-glass p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                <div className="text-foreground-muted text-sm">Technologies</div>
              </Card>
              <Card className="card-glass p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                <div className="text-foreground-muted text-sm">Satisfaction</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
