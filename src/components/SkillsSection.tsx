import { Cloud, Code, Database, BarChart3, Settings, Shield } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["Azure (Data Factory, Databricks, Azure ML)", "AWS (Glue, Lambda, Redshift, EMR)", "Google Cloud Platform", "Snowflake"],
      color: "text-blue-400"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "SQL", "Scala", "Java", "Shell Scripting", "R"],
      color: "text-green-400"
    },
    {
      title: "Big Data & Streaming",
      icon: Database,
      skills: ["Apache Spark", "PySpark", "Apache Hive", "Apache Kafka", "Apache Airflow", "BigQuery"],
      color: "text-purple-400"
    },
    {
      title: "ML & Analytics",
      icon: BarChart3,
      skills: ["TensorFlow", "Scikit-learn", "PyTorch", "MLflow", "Pandas", "NumPy"],
      color: "text-cyan-400"
    },
    {
      title: "BI & Reporting",
      icon: BarChart3,
      skills: ["Power BI", "Tableau", "Grafana", "Looker", "Excel", "Apache Superset"],
      color: "text-orange-400"
    },
    {
      title: "DevOps & Infrastructure",
      icon: Settings,
      skills: ["Jenkins", "Docker", "Kubernetes", "Terraform", "Git", "Azure DevOps"],
      color: "text-red-400"
    },
    {
      title: "Security & Governance",
      icon: Shield,
      skills: ["IAM", "Unity Catalog", "OAuth 2.0", "Apache Ranger", "Azure AD", "Data Encryption"],
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="skills" className="py-20 scroll-section bg-surface-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the modern data engineering stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="glass-surface p-6 rounded-lg hover:glow-primary transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.color.replace('text-', 'bg-').replace('400', '400/20')}`}>
                    <IconComponent className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded border border-transparent hover:border-border/50"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;