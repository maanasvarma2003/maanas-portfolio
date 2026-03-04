import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionScene } from "./3D/SectionScene";
import { Suspense } from "react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering (IoT)",
      institution: "Vellore Institute of Technology (VIT), Vellore",
      board: "VIT University",
      period: "2022 - 2026",
      gpa: "7.59 CGPA",
      color: "from-accent-blue to-accent-cyan",
      dotColor: "bg-accent-cyan"
    },
    {
      degree: "Pre-University (PCMC)",
      institution: "Expert PU College, Mangalore",
      board: "Karnataka State Board",
      period: "2020 - 2022",
      gpa: "91.83%",
      color: "from-accent-purple to-accent-pink",
      dotColor: "bg-accent-purple"
    },
    {
      degree: "ICSE (Class X)",
      institution: "S.T. Francis School, Bengaluru",
      board: "ICSE Board",
      period: "2020",
      gpa: "92.5%",
      color: "from-accent-emerald to-accent-cyan",
      dotColor: "bg-accent-emerald"
    }
  ];

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <SectionScene variant="waves" color1="#06b6d4" color2="#8b5cf6" />
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-emerald/20 bg-accent-emerald/5 text-accent-emerald text-sm font-grotesk mb-6">
            <GraduationCap className="w-4 h-4" />
            Realm III — Knowledge
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-gradient tracking-tight">
            Education
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-emerald"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-start group"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-8 md:w-10 h-8 md:h-10 rounded-full ${edu.dotColor} border-4 border-background shadow-lg group-hover:scale-125 transition-all duration-500`}>
                    <div className={`absolute inset-0 rounded-full ${edu.dotColor} opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-500`}></div>
                  </div>
                </div>
                
                {/* Card */}
                <Card className="ml-8 md:ml-12 flex-1 card-glass rounded-2xl overflow-hidden group-hover:border-primary/20 transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="flex">
                      <div className={`w-1.5 bg-gradient-to-b ${edu.color} flex-shrink-0`}></div>
                      
                      <div className="flex-1 p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                          <div>
                            <h3 className="text-xl md:text-2xl font-syne font-bold text-foreground mb-2">
                              {edu.degree}
                            </h3>
                            <h4 className="text-base font-grotesk font-medium text-foreground-secondary mb-1">
                              {edu.institution}
                            </h4>
                            <p className="text-sm text-accent-cyan font-grotesk">{edu.board}</p>
                          </div>
                          
                          <div className="flex flex-row md:flex-col items-center md:items-end gap-3">
                            <div className="flex items-center text-foreground-muted text-sm font-grotesk">
                              <Calendar className="w-4 h-4 mr-2" />
                              {edu.period}
                            </div>
                            <span className={`px-4 py-1.5 rounded-full text-sm font-grotesk font-bold text-primary-foreground bg-gradient-to-r ${edu.color} shadow-md`}>
                              {edu.gpa}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subjects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <Card className="card-glass p-8 rounded-2xl">
            <h3 className="text-2xl font-syne font-bold text-gradient-accent mb-8 text-center">
              Core Subjects
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                "Data Structures & Algorithms", "Statistics & Probability", "Machine Learning", "Deep Learning",
                "Data Mining", "Statistical Analysis", "Python Programming", "Database Management",
                "Linear Algebra", "Calculus & Optimization", "Data Visualization", "Research Methodology"
              ].map((subject, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="px-4 py-3 rounded-xl text-center text-sm font-grotesk font-medium text-foreground-secondary border border-card-border hover:border-primary/20 hover:bg-card/50 transition-all duration-300"
                >
                  {subject}
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
