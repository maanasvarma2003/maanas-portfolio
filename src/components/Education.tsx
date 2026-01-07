import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering (IoT)",
      institution: "Vellore Institute of Technology (VIT), Vellore",
      board: "VIT University",
      period: "2022 - 2026",
      
      color: "from-accent-blue to-accent-cyan"
    },
    {
      degree: "Pre-University (PCMC)",
      institution: "Expert PU College, Mangalore",
      board: "Karnataka State Board",
      period: "2020 - 2022",
      gpa: "91.83%",
      color: "from-accent-purple to-accent-pink"
    },
    {
      degree: "ICSE (Class X)",
      institution: "S.T. Francis School, Bengaluru",
      board: "ICSE Board",
      period: "2020",
      gpa: "92.5%",
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

        {/* Train-themed Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Enhanced Train Track with Sleepers */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-emerald rounded-full shadow-lg"></div>
          {/* Railway Sleepers */}
          <div className="absolute left-6 top-0 bottom-0">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-5 h-1 bg-gradient-to-r from-card-border to-foreground-muted rounded-full opacity-30"
                style={{ 
                  top: `${8 + i * 8}%`,
                  left: '-10px',
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
          
          <div className="space-y-16">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="relative flex items-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                {/* Enhanced Train Station (Circle) with Steam Effect */}
                <div className="relative left-6">
                  <div className={`w-8 h-8 bg-gradient-to-r ${edu.color} rounded-full border-4 border-background shadow-xl z-10 group-hover:scale-150 transition-all duration-700 animate-pulse`}>
                    <div className="absolute inset-0 rounded-full animate-ping bg-gradient-to-r opacity-30" style={{ animationDuration: '2s' }}></div>
                  </div>
                  {/* Steam effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-1 h-1 bg-accent-cyan/40 rounded-full animate-bounce opacity-0 group-hover:opacity-100"
                        style={{ 
                          animationDelay: `${i * 0.2}s`,
                          left: `${i * 2}px`,
                          top: `-${i * 3}px`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Enhanced Train Car (Education Card) with 3D effects */}
                <Card className="ml-16 card-3d hover:scale-105 transition-all duration-700 overflow-hidden group-hover:shadow-2xl transform hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="flex">
                      {/* Enhanced Colorful Side Bar with pattern */}
                      <div className={`w-3 bg-gradient-to-b ${edu.color} flex-shrink-0 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse"></div>
                      </div>
                      
                      {/* Enhanced Content with floating elements */}
                      <div className="flex-1 p-8 relative">
                        <div className="flex justify-between items-start mb-6">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gradient mb-3 group-hover:scale-105 transition-transform duration-500">
                              {edu.degree}
                            </h3>
                            <h4 className="text-xl font-semibold text-foreground-secondary mb-2 group-hover:text-gradient transition-all duration-500">
                              {edu.institution}
                            </h4>
                            <p className="text-sm text-accent-cyan font-medium flex items-center">
                              <span className="w-2 h-2 bg-accent-cyan rounded-full mr-2 animate-pulse"></span>
                              {edu.board}
                            </p>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center text-foreground-muted text-sm mb-3">
                              <Calendar className="w-4 h-4 mr-2 animate-pulse" />
                              {edu.period}
                            </div>
                            <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-primary-foreground bg-gradient-to-r ${edu.color} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110`}>
                              {edu.gpa}
                            </div>
                          </div>
                        </div>
                        
                        {/* Floating achievement badge */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className={`w-4 h-4 bg-gradient-to-r ${edu.color} rounded-full animate-bounce`}></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
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
