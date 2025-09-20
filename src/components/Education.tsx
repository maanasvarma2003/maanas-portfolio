import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology (IIT)",
      location: "Mumbai, India",
      period: "2020 - 2024",
      gpa: "8.5/10.0",
      description: "Specialized in Software Engineering, Data Structures, Algorithms, and Web Development. Active member of the coding club and hackathon participant.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Winner - Inter-College Hackathon 2023",
        "President of Web Development Society"
      ],
      color: "from-accent-blue to-accent-cyan"
    },
    {
      degree: "Full Stack Web Development Certification",
      institution: "freeCodeCamp",
      location: "Online",
      period: "2022 - 2023",
      gpa: "Certificate of Completion",
      description: "Comprehensive certification covering React, Node.js, MongoDB, and modern web development practices. Built 5+ full-stack projects.",
      achievements: [
        "300+ hours of hands-on coding",
        "Built portfolio of 5 full-stack applications",
        "Mastered responsive design principles"
      ],
      color: "from-accent-purple to-accent-pink"
    },
    {
      degree: "UI/UX Design Specialization",
      institution: "Google UX Design Professional Certificate",
      location: "Coursera",
      period: "2021 - 2022",
      gpa: "Professional Certificate",
      description: "Learned user experience design process, from user research to wireframing, prototyping, and testing. Created a portfolio of UX case studies.",
      achievements: [
        "Completed 7 courses in UX design",
        "Created 3 professional UX case studies",
        "Learned industry-standard design tools"
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
                "Object-Oriented Programming",
                "Database Management Systems",
                "Computer Networks",
                "Software Engineering",
                "Machine Learning",
                "Web Development",
                "Mobile App Development",
                "UI/UX Design Principles",
                "Human-Computer Interaction",
                "Responsive Web Design",
                "User Research Methods"
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