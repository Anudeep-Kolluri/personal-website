import { ExternalLink, Github, Database, Activity, Shield } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real-time Fraud Analytics Pipeline",
      company: "Barclays",
      description: "A comprehensive system to ingest and analyze banking transactions in real-time, built with Azure Data Factory, Databricks, and Kafka. Enabled near-instant fraud detection by processing 15TB+ data daily and integrating with ML models, helping proactively safeguard customer assets.",
      technologies: ["Azure Data Factory", "Databricks", "Apache Kafka", "Azure ML", "Python", "Spark"],
      icon: Shield,
      metrics: ["15TB+ daily processing", "Real-time detection", "99.9% uptime"],
      color: "text-red-400"
    },
    {
      title: "Telecom Network Anomaly Dashboard",
      company: "AT&T",
      description: "An interactive dashboard and data pipeline for telecom network monitoring. Utilized AWS EMR (Spark) for big data processing and Redshift + Power BI for visualization. Provided live insights into network performance and anomalies, improving uptime and capacity planning through cloud-scale data processing.",
      technologies: ["AWS EMR", "Apache Spark", "Redshift", "Power BI", "Kafka", "TensorFlow"],
      icon: Activity,
      metrics: ["22% reduction in over-provisioning", "Real-time monitoring", "Interactive dashboards"],
      color: "text-blue-400"
    },
    {
      title: "Healthcare Risk Prediction Engine",
      company: "Doceree",  
      description: "A machine learning-driven platform predicting patient risk and optimizing care management. Implemented with TensorFlow for modeling and Azure Synapse + Stream Analytics for data processing. Improved prediction accuracy by 18% and delivered insights via Tableau dashboards, demonstrating the power of data engineering in healthcare.",
      technologies: ["TensorFlow", "Azure Synapse", "Stream Analytics", "Tableau", "Python", "Scikit-learn"],
      icon: Database,
      metrics: ["18% accuracy improvement", "60% faster queries", "Real-time insights"],
      color: "text-green-400"
    }
  ];

  return (
    <section id="projects" className="py-20 scroll-section bg-surface-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Key projects showcasing expertise in data engineering and machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.title}
                className="glass-surface p-6 rounded-lg hover:glow-primary transition-all duration-300 group animate-slide-up flex flex-col"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${project.color.replace('text-', 'bg-').replace('400', '400/20')} flex-shrink-0`}>
                    <IconComponent className={`w-6 h-6 ${project.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-accent font-medium">
                      {project.company}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Metrics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <span 
                        key={metricIndex}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                    View Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;