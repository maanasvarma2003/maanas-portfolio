import { Briefcase, Calendar, MapPin, TrendingUp, Users, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experience = {
    title: "Data Scientist",
    company: "DataTech Analytics",
    location: "Bangalore, India",
    period: "Jan 2023 - Present",
    type: "Full-time",
    description: "Leading data science initiatives and developing machine learning models to drive business insights. Responsible for end-to-end data science projects from data collection to model deployment and monitoring.",
    achievements: [
      "Developed ML models that improved business efficiency by 35%",
      "Built predictive analytics systems serving 50K+ daily predictions",
      "Reduced model training time by 60% through pipeline optimization",
      "Created automated reporting dashboards for executive decision making",
      "Led data science team of 4 in delivering 8 major projects",
      "Implemented A/B testing framework increasing conversion by 25%"
    ],
    technologies: [
      "Python", "R", "TensorFlow", "PyTorch", "Pandas", "NumPy", 
      "Scikit-learn", "SQL", "MongoDB", "AWS", "Docker", "Jupyter"
    ],
    responsibilities: [
      {
        icon: Code2,
        title: "Model Development",
        description: "Building and deploying machine learning models for business solutions"
      },
      {
        icon: Users,
        title: "Cross-functional Collaboration",
        description: "Working with business teams to identify data-driven opportunities"
      },
      {
        icon: TrendingUp,
        title: "Analytics Leadership",
        description: "Driving insights and recommendations from complex datasets"
      }
    ]
  };

  return (
    <section id="experience" className="section-padding bg-background-secondary/50">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Briefcase className="w-8 h-8 text-accent-emerald mr-3" />
            <h2 className="text-4xl font-bold text-gradient">Experience</h2>
          </div>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            My professional journey and the impact I've made in the tech industry
          </p>
        </div>

        {/* Main Experience Card */}
        <Card className="card-floating hover:scale-[1.02] transition-all duration-500 overflow-hidden mb-12">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Gradient */}
              <div className="lg:w-2 w-full h-2 lg:h-auto bg-gradient-to-r lg:bg-gradient-to-b from-accent-emerald to-accent-cyan"></div>
              
              {/* Content */}
              <div className="flex-1 p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-foreground mb-2">
                      {experience.title}
                    </h3>
                    <h4 className="text-xl text-gradient-accent font-semibold mb-4">
                      {experience.company}
                    </h4>
                  </div>
                  
                  <div className="lg:text-right space-y-2">
                    <div className="flex items-center lg:justify-end text-foreground-secondary">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-mono">{experience.period}</span>
                    </div>
                    <div className="flex items-center lg:justify-end text-foreground-secondary">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="inline-block bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {experience.type}
                    </div>
                  </div>
                </div>

                <p className="text-foreground-muted leading-relaxed mb-8 text-lg">
                  {experience.description}
                </p>

                {/* Key Responsibilities */}
                <div className="mb-8">
                  <h5 className="font-semibold text-foreground text-lg mb-4">Key Responsibilities</h5>
                  <div className="grid md:grid-cols-3 gap-6">
                    {experience.responsibilities.map((resp, index) => (
                      <Card key={index} className="card-glass p-6 hover:card-hover transition-all duration-300">
                        <div className="text-center">
                          <div className="bg-gradient-accent p-3 rounded-full w-fit mx-auto mb-4">
                            <resp.icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <h6 className="font-semibold text-foreground mb-2">{resp.title}</h6>
                          <p className="text-foreground-muted text-sm">{resp.description}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h5 className="font-semibold text-foreground text-lg mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-accent-emerald" />
                    Key Achievements
                  </h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    {experience.achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className="flex items-start p-4 bg-card/50 rounded-lg hover:bg-card-hover transition-all duration-300 hover:scale-105"
                      >
                        <div className="w-3 h-3 bg-gradient-primary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span className="text-foreground-secondary">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h5 className="font-semibold text-foreground text-lg mb-4">Technologies & Tools</h5>
                  <div className="flex flex-wrap gap-3">
                    {experience.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gradient-to-r from-card to-card-hover px-4 py-2 rounded-full text-foreground font-medium border border-card-border hover:scale-105 transition-all duration-300 hover:shadow-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="card-glass p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-gradient mb-2">2+</div>
            <div className="text-foreground-muted">Years of Experience</div>
          </Card>
          <Card className="card-glass p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-gradient mb-2">15+</div>
            <div className="text-foreground-muted">Projects Delivered</div>
          </Card>
          <Card className="card-glass p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-gradient mb-2">8</div>
            <div className="text-foreground-muted">Developers Mentored</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;