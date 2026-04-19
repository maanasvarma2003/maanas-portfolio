import { Suspense } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionScene } from "./3D/SectionScene";
import { MagneticButton } from "./ui/magnetic-button";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "sh.maanasvarma@gmail.com", href: "mailto:sh.maanasvarma@gmail.com", color: "text-accent-blue", glow: "from-accent-blue/20 to-accent-cyan/5" },
    { icon: Phone, label: "Phone", value: "+91 6362847181", href: "tel:+916362847181", color: "text-accent-emerald", glow: "from-accent-emerald/20 to-accent-cyan/5" },
    { icon: MapPin, label: "Location", value: "Bengaluru, India", href: "https://maps.google.com/", color: "text-accent-orange", glow: "from-accent-orange/20 to-accent-pink/5" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", handle: "@maanasvarma2003", href: "https://github.com/maanasvarma2003", hoverColor: "hover:border-foreground-secondary", iconColor: "text-foreground" },
    { icon: Linkedin, label: "LinkedIn", handle: "Maanas Varma", href: "https://www.linkedin.com/in/maanas-varma-59429327b/", hoverColor: "hover:border-accent-blue", iconColor: "text-accent-blue" },
    { icon: Instagram, label: "Instagram", handle: "@maanas_varma", href: "https://www.instagram.com/maanas_varma/#", hoverColor: "hover:border-accent-pink", iconColor: "text-accent-pink" },
    { icon: MessageCircle, label: "WhatsApp", handle: "+91 6362847181", href: "https://wa.me/916362847181", hoverColor: "hover:border-accent-emerald", iconColor: "text-accent-emerald" },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <SectionScene variant="waves" color1="#ec4899" color2="#8b5cf6" />
      </Suspense>

      {/* Aurora glow layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-pink/10 rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[140px] animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="container-width relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-pink/20 bg-accent-pink/5 text-accent-pink text-sm font-grotesk mb-6">
            <Sparkles className="w-4 h-4" />
            Realm VII — The Portal
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-syne font-extrabold text-gradient tracking-tighter leading-[0.95]">
            Let's Connect
          </h2>
          <p className="text-foreground-muted font-grotesk text-lg max-w-2xl mx-auto mt-6">
            Open to opportunities, collaborations & meaningful conversations.
            Reach out through any channel below.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.href}
              target={info.label === "Location" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative block"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${info.glow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <Card className="card-glass p-8 rounded-2xl relative h-full border-card-border group-hover:border-accent-cyan/30 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${info.glow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-foreground-muted group-hover:text-accent-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <div className="text-foreground-muted text-xs font-grotesk uppercase tracking-[0.2em] mb-2">
                  {info.label}
                </div>
                <div className="text-foreground font-grotesk font-semibold text-base break-all group-hover:text-gradient transition-all duration-300">
                  {info.value}
                </div>
              </Card>
            </motion.a>
          ))}
        </div>

        {/* Social channels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <Card className="card-glass p-8 md:p-10 rounded-3xl relative overflow-hidden">
            {/* Animated gradient border accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent" />

            <h3 className="text-2xl md:text-3xl font-syne font-bold text-gradient-secondary mb-2 text-center">
              Find Me Across the Network
            </h3>
            <p className="text-foreground-muted font-grotesk text-center mb-8 text-sm">
              Connect on your preferred platform
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`group flex flex-col items-center gap-3 p-6 rounded-2xl border border-card-border ${social.hoverColor} hover:bg-card/40 transition-all duration-300 backdrop-blur-sm`}
                >
                  <div className="p-3 rounded-xl bg-background-tertiary/50 group-hover:scale-110 transition-transform duration-300">
                    <social.icon className={`w-6 h-6 ${social.iconColor}`} />
                  </div>
                  <div className="text-center">
                    <div className="font-grotesk font-semibold text-sm text-foreground">
                      {social.label}
                    </div>
                    <div className="font-mono text-xs text-foreground-muted mt-1 break-all">
                      {social.handle}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <Card className="card-glass p-10 md:p-14 rounded-3xl max-w-4xl mx-auto relative overflow-hidden">
            {/* Glow orb */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent-cyan/20 rounded-full blur-[100px]" />

            <div className="relative">
              <Sparkles className="w-10 h-10 text-accent-cyan mx-auto mb-4" />
              <h3 className="text-3xl md:text-5xl font-syne font-bold text-gradient mb-4 tracking-tight">
                Ready to Build Something Extraordinary?
              </h3>
              <p className="text-foreground-muted font-grotesk text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Whether it's a project, an opportunity, or just a chat about AI &
                data — I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button
                    onClick={() => window.open("mailto:sh.maanasvarma@gmail.com", "_blank")}
                    className="btn-primary px-8 py-6 rounded-2xl font-grotesk font-semibold text-base"
                  >
                    <Mail className="w-5 h-5 mr-2" /> Email Me
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button
                    onClick={() => window.open("https://wa.me/916362847181", "_blank")}
                    className="btn-ghost px-8 py-6 rounded-2xl font-grotesk font-semibold text-base"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
