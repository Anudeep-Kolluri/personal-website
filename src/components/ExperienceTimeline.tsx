import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      type: "work",
      title: "Data Engineer",
      company: "Barclays",
      location: "California, USA",
      duration: "Feb 2025 – Present",
      achievements: [
        "Developed a large-scale Azure data pipeline processing 15+ TB of transactions daily, significantly reducing manual preprocessing for fraud models",
        "Implemented automated ML workflow for fraud detection using Azure ML, Databricks, and Airflow",
        "Integrated real-time streaming via Kafka & Event Hubs to enable instant fraud analytics, improving detection latency"
      ],
      technologies: "Azure, Databricks, Kafka, Event Hubs, Azure ML, Airflow"
    },
    {
      type: "work", 
      title: "Data Engineer",
      company: "AT&T",
      location: "Dallas, TX",
      duration: "Apr 2024 – Dec 2024",
      achievements: [
        "Built AWS SageMaker forecasting pipeline with TensorFlow, improving network capacity planning and reducing over-provisioning by ~22%",
        "Designed real-time anomaly detection for telecom networks using Kafka and Spark (EMR) pipelines",
        "Created interactive Power BI dashboards on Redshift for live network metrics and performance monitoring"
      ],
      technologies: "AWS SageMaker, TensorFlow, EMR, Redshift, Kafka, Power BI, Step Functions"
    },
    {
      type: "education",
      title: "Master of Science in Data Science",
      company: "University of Texas at Arlington",
      location: "Arlington, TX",
      duration: "2022 – 2024",
      achievements: [
        "Specialized in Machine Learning and Big Data Analytics",
        "Thesis: 'Scalable Real-time Anomaly Detection in Healthcare Data Streams'",
        "GPA: 3.9/4.0"
      ],
      technologies: "Python, R, Spark, TensorFlow, Statistical Analysis"
    },
    {
      type: "work",
      title: "Data Engineer",
      company: "Doceree",
      location: "Noida, India",
      duration: "Mar 2021 – Dec 2022",
      achievements: [
        "Developed predictive models on healthcare data using TensorFlow & Scikit-learn, achieving 18% improvement in risk prediction accuracy",
        "Automated ETL workflows with Azure Data Factory and optimized SQL queries in Azure Synapse, reducing dashboard load times by ~60%",
        "Built real-time data ingestion with Stream Analytics & Event Hubs, deployed Tableau dashboards for health metrics visualization"
      ],
      technologies: "Azure Data Factory, Synapse, Stream Analytics, Tableau, TensorFlow, Scikit-learn"
    },
    {
      type: "education",
      title: "Bachelor of Technology in Computer Science",
      company: "Bharath Institute of Higher Education & Research",
      location: "Chennai, India", 
      duration: "2018 – 2022",
      achievements: [
        "Specialized in Data Structures, Algorithms, and Database Systems",
        "Final Project: 'Distributed Data Processing System using Apache Spark'",
        "GPA: 3.7/4.0"
      ],
      technologies: "Java, Python, SQL, Apache Spark, Hadoop"
    }
  ];

  return (
    <section id="experience" className="py-20 scroll-section">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Experience <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional journey and educational background
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 timeline-line"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative flex items-start gap-8 animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Timeline Node */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center glass-surface glow-primary ${
                    exp.type === 'work' ? 'bg-primary/20' : 'bg-accent/20'
                  }`}>
                    {exp.type === 'work' ? (
                      <Briefcase className="w-6 h-6 text-primary" />
                    ) : (
                      <GraduationCap className="w-6 h-6 text-accent" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass-surface p-6 rounded-lg hover:glow-primary transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-accent mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-foreground/80 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Technologies:</span> {exp.technologies}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;