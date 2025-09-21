import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering (IoT)",
      institution: "Vellore Institute of Technology (VIT), Vellore",
      board: "VIT University",
      period: "2022 - 2026",
      gpa: "7.56/10",
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
        <div className="relative">
          {/* Train Track */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-emerald rounded-full shadow-lg"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className="relative flex items-center group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Train Station (Circle) */}
                <div className={`absolute left-6 w-6 h-6 bg-gradient-to-r ${edu.color} rounded-full border-4 border-background shadow-xl z-10 group-hover:scale-125 transition-all duration-500`}>
                  <div className="absolute inset-0 rounded-full animate-ping bg-gradient-to-r opacity-20"></div>
                </div>
                
                {/* Train Car (Education Card) */}
                <Card className="ml-20 card-3d hover:scale-105 transition-all duration-500 overflow-hidden group-hover:shadow-2xl">
                  <CardContent className="p-0">
                    <div className="flex">
                      {/* Colorful Side Bar */}
                      <div className={`w-2 bg-gradient-to-b ${edu.color} flex-shrink-0`}></div>
                      
                      {/* Content */}
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gradient mb-2">
                              {edu.degree}
                            </h3>
                            <h4 className="text-lg font-semibold text-foreground-secondary mb-1">
                              {edu.institution}
                            </h4>
                            <p className="text-sm text-accent-cyan font-medium">
                              {edu.board}
                            </p>
                          </div>
                          
                          <div className="text-right">
                            <div className="flex items-center text-foreground-muted text-sm mb-2">
                              <Calendar className="w-4 h-4 mr-1" />
                              {edu.period}
                            </div>
                            <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold text-primary-foreground bg-gradient-to-r ${edu.color}`}>
                              {edu.gpa}
                            </div>
                          </div>
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