import { useState, Suspense } from "react";
import { Folder, ExternalLink, Github, Star, Calendar, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProjectCard3D } from "./3D/ProjectCard3D";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Hexapro Technologies Website",
      category: "Frontend",
      description: "Modern responsive website for Hexapro Technologies showcasing services, portfolio, and company information. Built with React and advanced animations.",
      image: "🌐",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Framer Motion"],
      features: ["Responsive Design", "Modern UI/UX", "Interactive Animations", "SEO Optimized"],
      github: "https://github.com/maanasvarma2003/Hexapro-Technologies",
      date: "2023",
      status: "Featured"
    },
    {
      id: 2,
      title: "Nubra Algo Trading App",
      category: "Frontend",
      description: "Advanced algorithmic trading application with real-time market data visualization and automated trading strategies.",
      image: "📊",
      technologies: ["React", "TypeScript", "TailwindCSS", "Chart.js", "WebSocket"],
      features: ["Real-time Data", "Algo Trading", "Market Analysis", "Portfolio Management"],
      github: "https://github.com/maanasvarma2003/algo-pilot-scribe",
      live: "https://algo-pilot-scribe.vercel.app/",
      date: "2025",
      status: "Featured"
    },
    {
      id: 3,
      title: "AI Movie Recommendations",
      category: "AI/ML",
      description: "Intelligent movie recommendation system using machine learning to provide personalized suggestions based on user preferences and viewing history.",
      image: "🎬",
      technologies: ["Python", "React", "TensorFlow", "Flask", "TMDB API"],
      features: ["Personalized Recommendations", "Content-Based Filtering", "User Ratings", "Movie Database"],
      github: "https://github.com/maanasvarma2003/AI-powered-movie-recommendations",
      live: "https://ai-powered-movie-recommendations.vercel.app/",
      date: "2025",
      status: "Trending"
    },
    {
      id: 4,
      title: "AI Personal Finance Tracker",
      category: "Full Stack",
      description: "Comprehensive personal finance management app with AI-powered insights, expense tracking, and budget recommendations.",
      image: "💰",
      technologies: ["React", "Node.js", "PostgreSQL", "OpenAI", "Chart.js"],
      features: ["Expense Tracking", "AI Insights", "Budget Planning", "Financial Analytics"],
      github: "https://github.com/maanasvarma2003/AI-powered-finance-tracker",
      live: "https://ai-powered-finance-tracker-beta.vercel.app/",
      date: "2025",
      status: "Popular"
    },
    {
      id: 5,
      title: "Workout Tracker App",
      category: "Full Stack",
      description: "Full-featured workout tracking application with exercise logs, progress visualization, and personalized workout plans.",
      image: "💪",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      features: ["Exercise Logging", "Progress Tracking", "Workout Plans", "Performance Analytics"],
      github: "https://github.com/maanasvarma2003/workout_tracker",
      live: "https://workout-tracker-nu-eight.vercel.app/",
      date: "2025",
      status: "New"
    },
    {
      id: 6,
      title: "AI Trading Bot",
      category: "AI/ML",
      description: "Intelligent trading bot using machine learning algorithms for market analysis and automated trading decisions with risk management.",
      image: "📈",
      technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "Alpha Vantage API"],
      features: ["ML Predictions", "Risk Management", "Real-time Analysis", "Automated Trading"],
      github: "https://github.com/maanasvarma2003/AI-Trading-Bot",
      date: "2025",
      status: "Trending"
    },
    {
      id: 7,
      title: "AI PDF Chatbot",
      category: "AI/ML",
      description: "Intelligent chatbot that can analyze PDF documents and answer questions about their content using natural language processing.",
      image: "💬",
      technologies: ["Python", "OpenAI", "Streamlit", "PyPDF2", "Langchain"],
      features: ["PDF Analysis", "Natural Language Q&A", "Context Understanding", "Multi-document Support"],
      github: "https://github.com/maanasvarma2003/AI-pdf-chatbot",
      date: "2025",
      status: "Innovative"
    },
    {
      id: 8,
      title: "Stock Market Predictor",
      category: "Data Science",
      description: "Advanced stock price prediction system using machine learning models, technical indicators, and sentiment analysis.",
      image: "📉",
      technologies: ["Python", "Scikit-learn", "LSTM", "Matplotlib", "Yahoo Finance API"],
      features: ["Price Prediction", "Technical Analysis", "Sentiment Analysis", "Risk Assessment"],
      github: "https://github.com/maanasvarma2003/stock-market-prediction",
      date: "2025",
      status: "Popular"
    },
    {
      id: 9,
      title: "Blockchain Voting System",
      category: "Blockchain",
      description: "Secure and transparent voting platform built on blockchain technology ensuring immutability and voter privacy.",
      image: "🗳️",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
      features: ["Blockchain Security", "Transparent Voting", "Smart Contracts", "Voter Privacy"],
      github: "https://github.com/maanasvarma2003/blockchain-based-voting-system",
      date: "2025",
      status: "Innovative"
    },
    {
      id: 10,
      title: "AI Rural Loan Lending App",
      category: "AI/ML",
      description: "AI-powered loan assessment platform for rural areas using alternative credit scoring and machine learning risk analysis.",
      image: "🏦",
      technologies: ["Python", "Django", "React Native", "TensorFlow", "PostgreSQL"],
      features: ["AI Credit Scoring", "Risk Assessment", "Mobile App", "Rural Focus"],
      github: "https://github.com/maanasvarma2003/AI-Loan-assistant",
      live: "https://ai-loan-assistant.vercel.app/",
      date: "2025",
      status: "Featured"
    },
    {
      id: 11,
      title: "Advanced Employee App Catalog",
      category: "Full Stack",
      description: "Comprehensive employee management system with advanced features for HR operations, performance tracking, and analytics.",
      image: "👥",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      features: ["Employee Management", "Performance Analytics", "HR Dashboard", "Real-time Updates"],
      github: "https://github.com/maanasvarma2003/team-app-haven",
      live: "https://vercel.com/maanas-varma-s-hs-projects/algo-pilot-scribe",
      date: "2025",
      status: "Popular"
    },
    {
      id: 12,
      title: "OPS Insight Detector",
      category: "AI/ML",
      description: "Advanced anomaly detection system for server performance metrics. AI pipeline that analyzes CPU, memory, network, and disk I/O patterns to flag potential incidents using multiple ML models.",
      image: "🔍",
      technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-learn"],
      features: ["Multi-Model Detection", "Real-time Monitoring", "Data Visualization", "Explainable AI"],
      github: "https://github.com/maanasvarma2003/ops-insight-detector",
      live: "https://ops-insight-detector.vercel.app/",
      date: "2025",
      status: "Innovative"
    },
    {
      id: 13,
      title: "Credit Card Fraud Detection",
      category: "AI/ML",
      description: "Machine learning system for detecting fraudulent credit card transactions using advanced classification algorithms and anomaly detection techniques.",
      image: "💳",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Streamlit"],
      features: ["Fraud Detection", "Real-time Analysis", "Model Comparison", "Data Imbalance Handling"],
      github: "https://github.com/maanasvarma2003/AI-Creditcard-fraud-detection",
      live: "https://ai-creditcard-fraud-detection.vercel.app/",
      date: "2025",
      status: "Featured"
    },
    {
      id: 14,
      title: "Smart Task Planner",
      category: "Data Science",
      description: "Intelligent task planning system using data science techniques to optimize task scheduling, prioritization, and resource allocation based on historical patterns and predictive analytics.",
      image: "📋",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
      features: ["Smart Scheduling", "Priority Optimization", "Resource Allocation", "Predictive Analytics"],
      github: "https://github.com/maanasvarma2003/smart-task-planner",
      live: "https://smart-tast-planner.vercel.app/",
      date: "2025",
      status: "New"
    }
  ];

  const categories = ["All", "Frontend", "AI/ML", "Data Science", "Blockchain", "Full Stack"];

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

  const getProjectColor = (category: string): string => {
    switch (category) {
      case "Frontend": return "#8b5cf6";
      case "AI/ML": return "#06b6d4";
      case "Data Science": return "#3b82f6";
      case "Blockchain": return "#ec4899";
      case "Fullstack": return "#10b981";
      default: return "#6366f1";
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
                {/* Project Header with 3D Background */}
                <div className="relative p-6 bg-gradient-to-br from-card to-card-hover overflow-hidden">
                  {/* 3D visualization background - only load for first 6 projects */}
                  {index < 6 && (
                    <div className="absolute inset-0 opacity-30">
                      <Suspense fallback={null}>
                        <ProjectCard3D 
                          title={project.title}
                          tech={project.technologies}
                          color={getProjectColor(project.category)}
                        />
                      </Suspense>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-6xl mb-4 animate-float">{project.image}</div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium text-primary-foreground bg-gradient-to-r ${getStatusColor(project.status)} animate-glow`}>
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
                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, "_blank")}
                      className="flex-1 hover:scale-105 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    {project.live && (
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => window.open(project.live, "_blank")}
                        className="flex-1 hover:scale-105 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
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
              onClick={() => window.open("https://github.com/maanasvarma2003", "_blank")}
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
