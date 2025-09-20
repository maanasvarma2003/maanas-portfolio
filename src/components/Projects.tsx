import { useState } from "react";
import { Folder, ExternalLink, Github, Star, Calendar, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack",
      description: "Complete e-commerce solution with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      features: ["User Authentication", "Payment Gateway", "Admin Dashboard", "Real-time Inventory"],
      github: "https://github.com/maanas/ecommerce",
      live: "https://ecommerce-demo.com",
      date: "2024",
      status: "Featured"
    },
    {
      id: 2,
      title: "3D Portfolio Website",
      category: "Frontend",
      description: "Interactive 3D portfolio website with Three.js animations, smooth scrolling, and responsive design. Showcases modern web development skills.",
      image: "🎨",
      technologies: ["React", "Three.js", "GSAP", "Tailwind", "TypeScript"],
      features: ["3D Animations", "Smooth Scrolling", "Interactive Elements", "Mobile Responsive"],
      github: "https://github.com/maanas/3d-portfolio",
      live: "https://maanas-3d.com",
      date: "2024",
      status: "New"
    },
    {
      id: 3,
      title: "Task Management App",
      category: "Full Stack",
      description: "Collaborative task management application with real-time updates, team collaboration, and productivity analytics.",
      image: "📋",
      technologies: ["Next.js", "PostgreSQL", "Socket.io", "Prisma", "Redis"],
      features: ["Real-time Collaboration", "Analytics Dashboard", "Team Management", "Notifications"],
      github: "https://github.com/maanas/taskmanager",
      live: "https://taskmanager-pro.com",
      date: "2023",
      status: "Popular"
    },
    {
      id: 4,
      title: "AI Chat Interface",
      category: "AI/ML",
      description: "Modern chat interface powered by AI with context awareness, file uploads, and customizable personalities.",
      image: "🤖",
      technologies: ["React", "Python", "FastAPI", "OpenAI", "WebSocket"],
      features: ["AI Integration", "File Processing", "Context Memory", "Custom Personalities"],
      github: "https://github.com/maanas/ai-chat",
      live: "https://ai-chat-demo.com",
      date: "2024",
      status: "Trending"
    },
    {
      id: 5,
      title: "Weather Analytics Dashboard",
      category: "Data Visualization",
      description: "Comprehensive weather analytics dashboard with interactive charts, forecasting, and historical data analysis.",
      image: "🌤️",
      technologies: ["React", "D3.js", "Chart.js", "Weather API", "Material-UI"],
      features: ["Interactive Charts", "Weather Forecasting", "Historical Analysis", "Location Search"],
      github: "https://github.com/maanas/weather-dashboard",
      live: "https://weather-analytics.com",
      date: "2023",
      status: "Featured"
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      category: "Blockchain",
      description: "Secure voting system built on blockchain technology ensuring transparency, immutability, and voter privacy.",
      image: "🗳️",
      technologies: ["Solidity", "Web3.js", "React", "MetaMask", "IPFS"],
      features: ["Blockchain Security", "Voter Privacy", "Transparent Results", "Smart Contracts"],
      github: "https://github.com/maanas/blockchain-voting",
      live: "https://voting-blockchain.com",
      date: "2023",
      status: "Innovative"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "AI/ML", "Data Visualization", "Blockchain"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Featured": return "from-accent-emerald to-accent-cyan";
      case "New": return "from-accent-blue to-accent-purple";
      case "Popular": return "from-accent-orange to-accent-pink";
      case "Trending": return "from-accent-purple to-accent-pink";
      case "Innovative": return "from-accent-cyan to-accent-blue";
      default: return "from-primary to-accent-blue";
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Folder className="w-8 h-8 text-accent-orange mr-3" />
            <h2 className="text-4xl font-bold text-gradient">Projects</h2>
          </div>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            A showcase of my recent work, experiments, and contributions to the tech community
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category 
                  ? "btn-primary" 
                  : "btn-ghost hover:scale-105"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-3d hover:scale-105 transition-all duration-500 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0 h-full">
                {/* Project Header */}
                <div className="relative p-6 bg-gradient-to-br from-card to-card-hover">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-6xl mb-4">{project.image}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium text-primary-foreground bg-gradient-to-r ${getStatusColor(project.status)}`}>
                      {project.status}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-foreground-muted text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <div className="text-accent-cyan text-sm font-medium mb-4">
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-foreground-muted text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-foreground font-medium mb-3 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-accent-orange" />
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-2"></div>
                          <span className="text-foreground-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-foreground font-medium mb-3 flex items-center">
                      <Code className="w-4 h-4 mr-2 text-accent-purple" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="bg-card/50 text-foreground-secondary px-2 py-1 rounded text-xs border border-card-border"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-accent-cyan text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, "_blank")}
                      className="flex-1 hover:scale-105 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => window.open(project.live, "_blank")}
                      className="flex-1 btn-primary hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <Card className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient-secondary mb-4">
              Explore More Projects
            </h3>
            <p className="text-foreground-muted mb-6">
              Check out my GitHub profile for more projects, open source contributions, and code samples.
            </p>
            <Button 
              onClick={() => window.open("https://github.com/maanas", "_blank")}
              className="btn-glow px-8 py-3"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub Profile
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;