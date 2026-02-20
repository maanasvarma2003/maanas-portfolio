import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sh.maanasvarma@gmail.com",
      href: "mailto:sh.maanasvarma@gmail.com",
      color: "text-accent-blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6362847181",
      href: "tel:+916362847181",
      color: "text-accent-emerald"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: "https://maps.google.com/",
      color: "text-accent-orange"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/maanasvarma2003",
      color: "hover:text-foreground",
      bg: "hover:bg-card-hover"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/maanas-varma-59429327b/",
      color: "hover:text-accent-blue",
      bg: "hover:bg-accent-blue/10"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/maanas_varma/#",
      color: "hover:text-accent-pink",
      bg: "hover:bg-accent-pink/10"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/916362847181",
      color: "hover:text-accent-emerald",
      bg: "hover:bg-accent-emerald/10"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent! ✉️",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try emailing me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-background-secondary/50">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Mail className="w-8 h-8 text-accent-pink mr-3" />
            <h2 className="text-4xl font-bold text-gradient">Let's Connect</h2>
          </div>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="card-floating p-8">
              <h3 className="text-2xl font-bold text-gradient-secondary mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <info.icon className={`w-6 h-6 ${info.color} text-primary-foreground`} />
                    </div>
                    <div>
                      <div className="text-foreground-muted text-sm">{info.label}</div>
                      <a 
                        href={info.href}
                        className="text-foreground font-medium hover:text-gradient transition-all duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="card-floating p-8">
              <h3 className="text-2xl font-bold text-gradient-accent mb-6">
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 rounded-lg bg-card/50 border border-card-border ${social.color} ${social.bg} transition-all duration-300 hover:scale-105 hover:shadow-md`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="card-glass p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gradient mb-1">24h</div>
                  <div className="text-foreground-muted text-sm">Response Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient mb-1">100%</div>
                  <div className="text-foreground-muted text-sm">Satisfaction</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-floating p-8">
            <h3 className="text-2xl font-bold text-gradient mb-6">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-foreground font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background-tertiary border-card-border focus:border-primary focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-foreground font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background-tertiary border-card-border focus:border-primary focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-foreground font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background-tertiary border-card-border focus:border-primary focus:ring-primary"
                  placeholder="Project Discussion / Collaboration / etc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-foreground font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background-tertiary border-card-border focus:border-primary focus:ring-primary resize-none"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-glow w-full py-3 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</>
                ) : (
                  <><Send className="w-5 h-5 mr-2" /> Send Message</>
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <Card className="card-glass p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gradient-secondary mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-foreground-muted text-lg mb-6">
              Whether you have a project in mind, need technical consultation, or just want to connect, 
              I'm always excited to discuss new opportunities and ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open("mailto:sh.maanasvarma@gmail.com", "_blank")}
                className="btn-primary px-8 py-3"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
              <Button 
                onClick={() => window.open("https://wa.me/916362847181", "_blank")}
                className="btn-ghost px-8 py-3"
              >
                📱 WhatsApp Me
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;