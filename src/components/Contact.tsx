import { useState, Suspense } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionScene } from "./3D/SectionScene";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const contactInfo = [
    { icon: Mail, label: "Email", value: "sh.maanasvarma@gmail.com", href: "mailto:sh.maanasvarma@gmail.com", color: "text-accent-blue" },
    { icon: Phone, label: "Phone", value: "+91 6362847181", href: "tel:+916362847181", color: "text-accent-emerald" },
    { icon: MapPin, label: "Location", value: "Bengaluru, India", href: "https://maps.google.com/", color: "text-accent-orange" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/maanasvarma2003", hoverColor: "hover:border-foreground-secondary" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/maanas-varma-59429327b/", hoverColor: "hover:border-accent-blue" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/maanas_varma/#", hoverColor: "hover:border-accent-pink" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/916362847181", hoverColor: "hover:border-accent-emerald" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <SectionScene variant="waves" color1="#ec4899" color2="#8b5cf6" />
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
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-pink/20 bg-accent-pink/5 text-accent-pink text-sm font-grotesk mb-6">
            <Mail className="w-4 h-4" />
            Realm VII — Portal
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-gradient tracking-tight">
            Let's Connect
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card className="card-glass p-8 rounded-2xl">
                <h3 className="text-xl font-syne font-bold text-gradient-secondary mb-6">Contact Info</h3>
                <div className="space-y-5">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent-blue/10 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <div className="text-foreground-muted text-xs font-grotesk uppercase tracking-wider">{info.label}</div>
                        <a href={info.href} className="text-foreground font-grotesk font-medium hover:text-accent-cyan transition-colors">{info.value}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="card-glass p-8 rounded-2xl">
                <h3 className="text-xl font-syne font-bold text-gradient-accent mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-xl border border-card-border ${social.hoverColor} hover:bg-card/50 transition-all duration-300 group`}
                    >
                      <social.icon className="w-5 h-5 text-foreground-muted group-hover:text-foreground transition-colors" />
                      <span className="font-grotesk font-medium text-sm text-foreground-secondary group-hover:text-foreground transition-colors">{social.label}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="card-glass p-6 rounded-2xl">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-syne font-bold text-gradient mb-1">24h</div>
                    <div className="text-foreground-muted text-xs font-grotesk">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-syne font-bold text-gradient mb-1">100%</div>
                    <div className="text-foreground-muted text-xs font-grotesk">Satisfaction</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="card-glass p-8 rounded-2xl">
              <h3 className="text-xl font-syne font-bold text-gradient mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-foreground font-grotesk text-sm font-medium mb-2">Name *</label>
                    <Input id="name" name="name" required value={formData.name} onChange={handleChange}
                      className="bg-background-tertiary/50 border-card-border rounded-xl font-grotesk focus:border-primary" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-foreground font-grotesk text-sm font-medium mb-2">Email *</label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
                      className="bg-background-tertiary/50 border-card-border rounded-xl font-grotesk focus:border-primary" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-foreground font-grotesk text-sm font-medium mb-2">Subject *</label>
                  <Input id="subject" name="subject" required value={formData.subject} onChange={handleChange}
                    className="bg-background-tertiary/50 border-card-border rounded-xl font-grotesk focus:border-primary" placeholder="Project Discussion / Collaboration" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-foreground font-grotesk text-sm font-medium mb-2">Message *</label>
                  <Textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                    className="bg-background-tertiary/50 border-card-border rounded-xl font-grotesk focus:border-primary resize-none" placeholder="Tell me about your project..." />
                </div>
                
                <Button type="submit" className="btn-glow w-full py-3 rounded-xl font-grotesk font-semibold">
                  <Send className="w-5 h-5 mr-2" /> Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="card-glass p-10 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-syne font-bold text-gradient-secondary mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-foreground-muted font-grotesk mb-6">
              Whether you have a project in mind or just want to connect, I'm excited to discuss new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => window.open("mailto:sh.maanasvarma@gmail.com", "_blank")} className="btn-primary px-8 py-3 rounded-xl font-grotesk">
                <Mail className="w-5 h-5 mr-2" /> Email Me
              </Button>
              <Button onClick={() => window.open("https://wa.me/916362847181", "_blank")} className="btn-ghost px-8 py-3 rounded-xl font-grotesk">
                📱 WhatsApp Me
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
