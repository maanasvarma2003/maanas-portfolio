import { Award, Calendar, ExternalLink, BadgeCheck, ShieldCheck, Cpu, Database, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionScene } from "./3D/SectionScene";
import { Suspense } from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "MERN Full Stack Certification",
      issuer: "Six Phrase (a Veranda Enterprise)",
      date: "2024",
      type: "Training Course",
      icon: Code2,
      description:
        "Comprehensive MERN Full Stack Certification Training Course covering MongoDB, Express.js, React.js, and Node.js with hands-on project work and end-to-end application development.",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Full Stack Development"],
      gradient: "from-accent-emerald to-accent-cyan",
      verification: "Issued to Maanas Varma S H (22BCT0212) by Prabhu ND, CEO, Six Phrase",
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "Wells Fargo (via Forage)",
      date: "March 1, 2026",
      type: "Job Simulation",
      icon: Database,
      description:
        "Completed practical tasks in creating and implementing a data model for a financial portfolio management system, including ERD design and implementation in IntelliJ.",
      skills: ["Data Modeling", "ERD Design", "Java", "IntelliJ IDEA", "Git", "Financial Systems"],
      gradient: "from-accent-orange to-accent-pink",
      verification: "Enrolment Code: Mh5DLyjFR9wJjHhbG · Issued by Forage",
    },
    {
      title: "Software Engineering Job Simulation",
      issuer: "J.P. Morgan Chase & Co. (via Forage)",
      date: "April 19, 2026",
      type: "Job Simulation",
      icon: ShieldCheck,
      description:
        "Completed practical tasks in Project Setup, Kafka Integration, H2 Database Integration, REST API Integration, and REST API Controller development for a Spring Boot microservice.",
      skills: ["Java", "Spring Boot", "Apache Kafka", "Spring Data JPA", "H2 Database", "REST APIs"],
      gradient: "from-accent-blue to-accent-purple",
      verification: "Enrolment Code: HyK9C6uk7kbfffTZA · Issued by Forage",
    },
    {
      title: "GenAI Job Simulation",
      issuer: "BCG X (via Forage)",
      date: "May 5, 2026",
      type: "Job Simulation",
      icon: Cpu,
      description:
        "Completed practical tasks in data extraction and initial analysis, and developing an AI-powered financial chatbot using Generative AI techniques.",
      skills: ["Generative AI", "Python", "Data Analysis", "LLMs", "Financial Chatbot", "Prompt Engineering"],
      gradient: "from-accent-purple to-accent-pink",
      verification: "Enrolment Code: SHDMmceNLuooS793o · Issued by Forage",
    },
  ];

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <Suspense fallback={null}>
        <SectionScene variant="stars" color1="#a855f7" color2="#10b981" />
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
            <Award className="w-4 h-4" />
            Realm V — Vault of Honors
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-chromatic tracking-tight mb-4">
            Certifications
          </h2>
          <p className="text-foreground-muted font-grotesk max-w-2xl mx-auto">
            Verified credentials from industry-leading programs across full-stack engineering, data, and Generative AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="card-glass card-orbit rounded-2xl overflow-hidden h-full group hover:border-primary/20 transition-all duration-500">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className={`h-1.5 w-full bg-gradient-to-r ${cert.gradient}`} />

                    <div className="p-7 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-5">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.gradient} shadow-md`}>
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-grotesk font-semibold text-primary-foreground bg-gradient-to-r ${cert.gradient}`}>
                          <BadgeCheck className="w-3.5 h-3.5" />
                          {cert.type}
                        </span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-syne font-bold text-foreground mb-1.5 leading-tight">
                        {cert.title}
                      </h3>
                      <h4 className="text-base font-grotesk text-gradient-accent font-semibold mb-3">
                        {cert.issuer}
                      </h4>

                      <div className="flex items-center text-foreground-muted text-sm font-grotesk mb-4">
                        <Calendar className="w-4 h-4 mr-2" /> {cert.date}
                      </div>

                      <p className="text-foreground-secondary text-sm leading-relaxed font-grotesk mb-5 flex-1">
                        {cert.description}
                      </p>

                      <div className="mb-5">
                        <h5 className="font-syne font-semibold text-foreground text-xs uppercase tracking-wider mb-2.5">
                          Skills Covered
                        </h5>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.map((s, j) => (
                            <span
                              key={j}
                              className="px-2.5 py-1 rounded-lg text-[11px] font-grotesk font-medium text-foreground-secondary border border-card-border hover:border-primary/30 transition-all duration-300"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-card-border/60 flex items-start gap-2 text-[11px] text-foreground-muted font-grotesk">
                        <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent-emerald" />
                        <span className="leading-relaxed">{cert.verification}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
