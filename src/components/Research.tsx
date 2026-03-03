import { FileText, ExternalLink, Calendar, MapPin, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const Research = () => {
  const publications = [
    {
      title: "Precision Parameter Control in Hydroponics Farming using Cloud-Connected IoT Framework",
      conference: "2nd International Conference on Computing and Data Science (ICCDS-2025)",
      date: "25th & 26th July 2025",
      organizer: "Department of Computer Science and Engineering",
      publisher: "IEEE",
      link: "https://ieeexplore.ieee.org/document/11209654",
      role: "Co-Author & Presenter",
      tags: ["IoT", "Cloud Computing", "Hydroponics", "Precision Agriculture"],
    },
  ];

  return (
    <section id="research" className="section-padding relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-emerald/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-emerald/20 bg-accent-emerald/5 text-accent-emerald text-sm font-grotesk mb-6">
            <FileText className="w-4 h-4" />
            Research & Publications
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-gradient-accent tracking-tight">
            Published Research
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto mt-4 font-grotesk">
            Peer-reviewed contributions at international conferences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-glass rounded-2xl p-8 md:p-10 hover:border-accent-emerald/20 transition-all duration-500"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-grotesk font-semibold">
                  <Award className="w-4 h-4" /> {pub.publisher}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-sm font-grotesk font-medium">
                  <Users className="w-4 h-4" /> {pub.role}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-syne font-bold text-foreground mb-6 leading-tight">
                {pub.title}
              </h3>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-start gap-3 text-foreground-secondary">
                  <MapPin className="w-4 h-4 mt-1 text-accent-emerald flex-shrink-0" />
                  <span className="text-sm font-grotesk">{pub.conference}</span>
                </div>
                <div className="flex items-center gap-3 text-foreground-secondary">
                  <Calendar className="w-4 h-4 text-accent-orange flex-shrink-0" />
                  <span className="text-sm font-grotesk">{pub.date}</span>
                </div>
                <div className="flex items-start gap-3 text-foreground-muted">
                  <FileText className="w-4 h-4 mt-1 text-accent-cyan flex-shrink-0" />
                  <span className="text-sm font-grotesk">Organized by {pub.organizer}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {pub.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-grotesk font-medium rounded-full bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-xl text-sm font-grotesk font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                View on IEEE Xplore
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
