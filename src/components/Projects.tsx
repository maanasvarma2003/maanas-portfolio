import { useState, Suspense } from "react";
import { Folder, ExternalLink, Github, Star, Calendar, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProjectCard3D } from "./3D/ProjectCard3D";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    { id: 1, title: "Hexapro Technologies Website", category: "Frontend", description: "Modern responsive website for Hexapro Technologies with React and advanced animations.", image: "🌐", technologies: ["React", "JavaScript", "CSS3", "HTML5", "Framer Motion"], features: ["Responsive Design", "Modern UI/UX", "Interactive Animations", "SEO Optimized"], github: "https://github.com/maanasvarma2003/Hexapro-Technologies", live: "https://hexapro-technologies.vercel.app/", date: "2023", status: "Featured" },
    { id: 2, title: "Nubra Algo Trading App", category: "Frontend", description: "Advanced algorithmic trading app with real-time market data visualization.", image: "📊", technologies: ["React", "TypeScript", "TailwindCSS", "Chart.js", "WebSocket"], features: ["Real-time Data", "Algo Trading", "Market Analysis", "Portfolio Management"], github: "https://github.com/maanasvarma2003/algo-pilot-scribe", live: "https://algo-pilot-scribe.vercel.app/", date: "2025", status: "Featured" },
    { id: 3, title: "AI Movie Recommendations", category: "AI/ML", description: "ML-powered movie recommendation system with personalized suggestions.", image: "🎬", technologies: ["Python", "React", "TensorFlow", "Flask", "TMDB API"], features: ["Personalized Recommendations", "Content-Based Filtering", "User Ratings", "Movie Database"], github: "https://github.com/maanasvarma2003/AI-powered-movie-recommendations", live: "https://ai-powered-movie-recommendations.vercel.app/", date: "2025", status: "Trending" },
    { id: 4, title: "AI Personal Finance Tracker", category: "Full Stack", description: "AI-powered personal finance management with expense tracking and insights.", image: "💰", technologies: ["React", "Node.js", "PostgreSQL", "OpenAI", "Chart.js"], features: ["Expense Tracking", "AI Insights", "Budget Planning", "Financial Analytics"], github: "https://github.com/maanasvarma2003/AI-powered-finance-tracker", live: "https://ai-powered-finance-tracker-beta.vercel.app/", date: "2025", status: "Popular" },
    { id: 5, title: "Workout Tracker App", category: "Full Stack", description: "Full-featured workout tracking with exercise logs and progress visualization.", image: "💪", technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js"], features: ["Exercise Logging", "Progress Tracking", "Workout Plans", "Performance Analytics"], github: "https://github.com/maanasvarma2003/workout_tracker", live: "https://workout-tracker-nu-eight.vercel.app/", date: "2025", status: "New" },
    { id: 6, title: "AI Trading Bot", category: "AI/ML", description: "ML-based trading bot for market analysis and automated decisions.", image: "📈", technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "Alpha Vantage API"], features: ["ML Predictions", "Risk Management", "Real-time Analysis", "Automated Trading"], github: "https://github.com/maanasvarma2003/AI-Trading-Bot", date: "2025", status: "Trending" },
    { id: 7, title: "AI PDF Chatbot", category: "AI/ML", description: "Intelligent chatbot that analyzes PDF documents using NLP.", image: "💬", technologies: ["Python", "OpenAI", "Streamlit", "PyPDF2", "Langchain"], features: ["PDF Analysis", "Natural Language Q&A", "Context Understanding", "Multi-document Support"], github: "https://github.com/maanasvarma2003/AI-pdf-chatbot", date: "2025", status: "Innovative" },
    { id: 8, title: "Stock Market Predictor", category: "Data Science", description: "Advanced stock prediction using ML and sentiment analysis.", image: "📉", technologies: ["Python", "Scikit-learn", "LSTM", "Matplotlib", "Yahoo Finance API"], features: ["Price Prediction", "Technical Analysis", "Sentiment Analysis", "Risk Assessment"], github: "https://github.com/maanasvarma2003/stock-market-prediction", date: "2025", status: "Popular" },
    { id: 9, title: "Blockchain Voting System", category: "Blockchain", description: "Secure voting platform on blockchain ensuring immutability.", image: "🗳️", technologies: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"], features: ["Blockchain Security", "Transparent Voting", "Smart Contracts", "Voter Privacy"], github: "https://github.com/maanasvarma2003/blockchain-based-voting-system", date: "2025", status: "Innovative" },
    { id: 10, title: "AI Rural Loan Lending App", category: "AI/ML", description: "AI credit scoring for rural areas using alternative data.", image: "🏦", technologies: ["Python", "Django", "React Native", "TensorFlow", "PostgreSQL"], features: ["AI Credit Scoring", "Risk Assessment", "Mobile App", "Rural Focus"], github: "https://github.com/maanasvarma2003/AI-Loan-assistant", live: "https://ai-loan-assistant.vercel.app/", date: "2025", status: "Featured" },
    { id: 11, title: "Advanced Employee App Catalog", category: "Full Stack", description: "Employee management system with HR analytics.", image: "👥", technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"], features: ["Employee Management", "Performance Analytics", "HR Dashboard", "Real-time Updates"], github: "https://github.com/maanasvarma2003/team-app-haven", live: "https://team-app-haven.vercel.app/", date: "2025", status: "Popular" },
    { id: 12, title: "OPS Insight Detector", category: "AI/ML", description: "Anomaly detection for server metrics using multiple ML models.", image: "🔍", technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-learn"], features: ["Multi-Model Detection", "Real-time Monitoring", "Data Visualization", "Explainable AI"], github: "https://github.com/maanasvarma2003/ops-insight-detector", live: "https://ops-insight-detector.vercel.app/", date: "2025", status: "Innovative" },
    { id: 13, title: "Credit Card Fraud Detection", category: "AI/ML", description: "ML system for detecting fraudulent transactions.", image: "💳", technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Streamlit"], features: ["Fraud Detection", "Real-time Analysis", "Model Comparison", "Data Imbalance Handling"], github: "https://github.com/maanasvarma2003/AI-Creditcard-fraud-detection", live: "https://ai-creditcard-fraud-detection.vercel.app/", date: "2025", status: "Featured" },
    { id: 14, title: "Smart Task Planner", category: "Data Science", description: "Intelligent task planning with predictive analytics.", image: "📋", technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"], features: ["Smart Scheduling", "Priority Optimization", "Resource Allocation", "Predictive Analytics"], github: "https://github.com/maanasvarma2003/smart-task-planner", live: "https://smart-tast-planner.vercel.app/", date: "2025", status: "New" },
    { id: 15, title: "Prompt-Driven Email Agent", category: "AI/ML", description: "LLM-powered email productivity agent with auto-drafting.", image: "📧", technologies: ["Python", "LLM", "Streamlit", "React", "RAG"], features: ["Email Categorization", "Action Extraction", "Auto-Reply Drafts", "Chat Interaction"], github: "https://github.com/maanasvarma2003/Prompt-Driven-Email-Productivity-Agent", live: "https://prompt-driven-email-productivity-ag-ten.vercel.app/", date: "2025", status: "Innovative" },
    { id: 16, title: "CrowdSafe Monitor", category: "AI/ML", description: "Real-time crowd risk detection using YOLOv8 and LSTM.", image: "👥", technologies: ["Python", "YOLOv8", "CSRNet", "LSTM", "OpenCV"], features: ["Real-Time Detection", "Crowd Density Analysis", "Risk Prediction", "Alert System"], github: "https://github.com/maanasvarma2003/stampede_risk_detection", live: "", date: "2025", status: "Featured" },
    { id: 17, title: "NeuroCast Digital Twin", category: "AI/ML", description: "AI digital twin of equity markets with diffusion models.", image: "🧠", technologies: ["Python", "PyTorch", "FastAPI", "React", "D3.js"], features: ["Regime Detection", "Diffusion Simulation", "Stress Testing", "Digital Twin Dashboard"], github: "https://github.com/maanasvarma2003/NeuroCast-DT", live: "", date: "2025", status: "Innovative" },
    { id: 18, title: "Autonomous Business Risk Brain", category: "AI/ML", description: "Unified AI predicting fraud, cyber attacks, and churn.", image: "🛡️", technologies: ["Python", "XGBoost", "PyTorch", "FastAPI", "NetworkX"], features: ["Multi-Domain Risk", "Bayesian Fusion", "Explainable AI", "Graph Risk Engine"], github: "https://github.com/maanasvarma2003/Autonomous-Business-Risk-Brain-ABRB-", live: "", date: "2025", status: "Featured" },
    { id: 19, title: "Self-Healing Cloud AI SRE", category: "AI/ML", description: "Autonomous self-healing cloud with RL remediation.", image: "☁️", technologies: ["Python", "PyTorch", "FastAPI", "Kubernetes", "React"], features: ["Anomaly Detection", "Causal RCA", "RL Remediation", "Secure Sandbox"], github: "https://github.com/maanasvarma2003/Self-Healing-Cloud-Infrastructure-Using-Autonomous-AI-SRE-Agents", live: "", date: "2025", status: "Innovative" },
    { id: 20, title: "Quantum-Resilient Market Engine", category: "AI/ML", description: "AI financial reasoning with post-quantum security.", image: "🔐", technologies: ["Python", "PyTorch", "FastAPI", "Neo4j", "Kafka"], features: ["RAG Financial Reasoning", "Knowledge Graph GNN", "Quantum-Resilient Security", "Multi-Agent RL Portfolio"], github: "https://github.com/maanasvarma2003/Quantum-Resilient-AI-Market-Intelligence-Engine-QRA-MIE-", live: "", date: "2025", status: "Featured" },
    { id: 21, title: "Store Provisioning Platform", category: "Cloud Native", description: "K8s-native multi-tenant store provisioning platform.", image: "🏪", technologies: ["Kubernetes", "Helm", "React", "Node.js", "Docker"], features: ["K8s-Native Provisioning", "Multi-Tenant Isolation", "Helm-Based Deployment", "End-to-End Store Lifecycle"], github: "https://github.com/maanasvarma2003/store-provisioning-platform", live: "", date: "2025", status: "Innovative" }
  ];

  const categories = ["All", "Frontend", "AI/ML", "Data Science", "Blockchain", "Full Stack", "Cloud Native"];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

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
      case "Full Stack": return "#10b981";
      default: return "#6366f1";
    }
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-orange/20 bg-accent-orange/5 text-accent-orange text-sm font-grotesk mb-6">
            <Folder className="w-4 h-4" />
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-gradient tracking-tight">
            Projects
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto mt-4 font-grotesk">
            A showcase of my work in AI/ML, full-stack development, and innovation
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-grotesk font-medium transition-all duration-300 ${
                filter === cat ? "text-foreground" : "text-foreground-muted hover:text-foreground-secondary"
              }`}
            >
              {filter === cat && (
                <motion.div
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.08 }}
              >
                <Card className="card-glass rounded-2xl overflow-hidden group h-full hover:border-primary/20 transition-all duration-500">
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Header */}
                    <div className="relative p-6 pb-4 overflow-hidden">
                      {index < 6 && (
                        <div className="absolute inset-0 opacity-20">
                          <Suspense fallback={null}>
                            <ProjectCard3D title={project.title} tech={project.technologies} color={getProjectColor(project.category)} />
                          </Suspense>
                        </div>
                      )}
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{project.image}</span>
                          <span className={`px-3 py-1 rounded-full text-[10px] font-grotesk font-semibold text-primary-foreground bg-gradient-to-r ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-syne font-bold text-foreground group-hover:text-gradient transition-all duration-300 mb-1">
                          {project.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-accent-cyan text-xs font-grotesk font-medium">{project.category}</span>
                          <span className="text-foreground-muted text-xs font-grotesk flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />{project.date}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="glow-line mx-6" />

                    {/* Content */}
                    <div className="p-6 pt-4 flex-1 flex flex-col">
                      <p className="text-foreground-muted text-sm leading-relaxed mb-5 flex-1 font-grotesk">{project.description}</p>

                      {/* Features */}
                      <div className="mb-4 space-y-1.5">
                        {project.features.slice(0, 2).map((f, i) => (
                          <div key={i} className="flex items-center text-xs font-grotesk">
                            <div className="w-1 h-1 rounded-full bg-accent-cyan mr-2"></div>
                            <span className="text-foreground-secondary">{f}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.slice(0, 3).map((t, i) => (
                          <span key={i} className="px-2 py-1 rounded-md text-[10px] font-grotesk font-medium text-foreground-muted border border-card-border">
                            {t}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-accent-cyan text-[10px] font-grotesk self-center">+{project.technologies.length - 3}</span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.github, "_blank")}
                          className="flex-1 rounded-xl text-xs font-grotesk hover:border-primary/30 transition-all duration-300"
                        >
                          <Github className="w-3.5 h-3.5 mr-1.5" /> Code
                        </Button>
                        {project.live && (
                          <Button
                            size="sm"
                            onClick={() => window.open(project.live, "_blank")}
                            className="flex-1 btn-primary rounded-xl text-xs font-grotesk"
                          >
                            <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Demo
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Card className="card-glass p-10 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-syne font-bold text-gradient-secondary mb-4">Explore More</h3>
            <p className="text-foreground-muted mb-6 font-grotesk">
              Check out my GitHub for more projects and open source contributions.
            </p>
            <Button 
              onClick={() => window.open("https://github.com/maanasvarma2003", "_blank")}
              className="btn-glow px-8 py-3 rounded-xl font-grotesk"
            >
              <Github className="w-5 h-5 mr-2" /> View GitHub Profile
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
