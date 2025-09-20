import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Visvesvaraya Technological University",
      location: "Karnataka, India",
      period: "2020 - 2024",
      gpa: "8.7/10.0",
      description: "Specialized in Data Science, Machine Learning, and Software Engineering. Focus on statistical analysis, algorithms, and AI technologies. Active member of the Data Science club.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Winner - State Level Data Science Competition 2023",
        "Published research paper on ML algorithms"
      ],
      color: "from-accent-blue to-accent-cyan"
    },
    {
      degree: "Higher Secondary Certificate (12th Grade)",
      institution: "Sri Chaitanya Junior College",
      location: "Bangalore, India",
      period: "2018 - 2020",
      gpa: "95.2%",
      description: "Completed higher secondary education with focus on Mathematics, Physics, and Chemistry. Strong foundation in analytical thinking and problem-solving skills.",
      achievements: [
        "State Board Topper in Mathematics",
        "Merit Certificate in Science Stream",
        "Selected for National Mathematics Olympiad"
      ],
      color: "from-accent-purple to-accent-pink"
    },
    {
      degree: "Secondary School Certificate (10th Grade)",
      institution: "DAV Public School",
      location: "Bangalore, India",
      period: "2017 - 2018",
      gpa: "96.8%",
      description: "Completed secondary education with distinction. Developed strong foundation in core subjects and critical thinking abilities.",
      achievements: [
        "School Topper with 96.8% marks",
        "Best Student Award in Science",
        "Captain of School Debate Team"
      ],
      color: "from-accent-emerald to-accent-cyan"
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-8 h-8 text-accent-purple mr-3" />
            <h2 className="text-4xl font-bold text-gradient">Education</h2>
          </div>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            My academic journey and continuous learning path in technology and design
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="card-floating hover:scale-[1.02] transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Left Side - Gradient */}
                  <div className={`lg:w-2 w-full h-2 lg:h-auto bg-gradient-to-r lg:bg-gradient-to-b ${edu.color}`}></div>
                  
                  {/* Content */}
                  <div className="flex-1 p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <h4 className="text-xl text-gradient-secondary font-semibold mb-4">
                          {edu.institution}
                        </h4>
                      </div>
                      
                      <div className="lg:text-right space-y-2">
                        <div className="flex items-center text-foreground-secondary">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-mono">{edu.period}</span>
                        </div>
                        <div className="flex items-center text-foreground-secondary">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center text-accent-cyan font-semibold">
                          <Award className="w-4 h-4 mr-2" />
                          <span>{edu.gpa}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground-muted leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    <div className="space-y-3">
                      <h5 className="font-semibold text-foreground flex items-center">
                        <Award className="w-5 h-5 mr-2 text-accent-orange" />
                        Key Achievements
                      </h5>
                      <div className="grid sm:grid-cols-1 gap-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <div 
                            key={achIndex}
                            className="flex items-center p-3 bg-card/50 rounded-lg hover:bg-card-hover transition-all duration-300"
                          >
                            <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3"></div>
                            <span className="text-foreground-secondary text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Learned Section */}
        <div className="mt-16">
          <Card className="card-glass p-8">
            <h3 className="text-2xl font-bold text-gradient-accent mb-6 text-center">
              Core Subjects & Technologies Learned
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Data Structures & Algorithms",
                "Statistics & Probability",
                "Machine Learning",
                "Deep Learning",
                "Data Mining",
                "Statistical Analysis",
                "Python Programming",
                "Database Management",
                "Linear Algebra",
                "Calculus & Optimization",
                "Data Visualization",
                "Research Methodology"
              ].map((subject, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-card to-card-hover p-4 rounded-lg text-center hover:scale-105 transition-all duration-300 border border-card-border"
                >
                  <span className="text-foreground font-medium">{subject}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;