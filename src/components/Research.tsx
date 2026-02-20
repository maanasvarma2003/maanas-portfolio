import { useEffect, useRef, useState } from "react";
import { FileText, ExternalLink, Calendar, MapPin, Users, Award } from "lucide-react";

const Research = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section
      id="research"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent-emerald/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 mb-6">
            <FileText className="w-4 h-4 text-accent-emerald" />
            <span className="text-accent-emerald text-sm font-medium">
              Research & Publications
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-accent">Published Research</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Peer-reviewed research contributions presented at international conferences
          </p>
        </div>

        {/* Publications */}
        <div className="max-w-4xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`card-glass rounded-2xl p-8 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Publisher Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20">
                  <Award className="w-4 h-4 text-accent-blue" />
                  <span className="text-accent-blue text-sm font-semibold">
                    {pub.publisher}
                  </span>
                </div>
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20">
                  <Users className="w-4 h-4 text-accent-purple" />
                  <span className="text-accent-purple text-sm font-medium">
                    {pub.role}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight">
                {pub.title}
              </h3>

              {/* Conference Info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-start space-x-3 text-foreground-secondary">
                  <MapPin className="w-4 h-4 mt-1 text-accent-emerald flex-shrink-0" />
                  <span className="text-sm">{pub.conference}</span>
                </div>
                <div className="flex items-center space-x-3 text-foreground-secondary">
                  <Calendar className="w-4 h-4 text-accent-orange flex-shrink-0" />
                  <span className="text-sm">{pub.date}</span>
                </div>
                <div className="flex items-start space-x-3 text-foreground-muted">
                  <FileText className="w-4 h-4 mt-1 text-accent-cyan flex-shrink-0" />
                  <span className="text-sm">Organized by {pub.organizer}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 btn-primary px-6 py-3 rounded-lg text-sm font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View on IEEE Xplore</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
