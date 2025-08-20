import { Shield, Award, Cloud, Database } from "lucide-react";

const SummarySection = () => {
  const certifications = [
    { name: "Azure Data Engineer Associate", icon: Cloud, color: "text-blue-400" },
    { name: "Databricks Fundamentals", icon: Database, color: "text-red-400" },
    { name: "Snowflake SnowPro Core", icon: Award, color: "text-cyan-400" },
    // { name: "AWS Certified Solutions Architect", icon: Shield, color: "text-orange-400" },
  ];

  return (
    <section id="summary" className="py-20 scroll-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display">
              Professional <span className="text-primary">Summary</span>
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Experienced Data Engineer with 4+ years of expertise in designing and implementing 
                high-performance data pipelines that process terabytes of data daily across diverse 
                industries including finance, healthcare, and telecommunications.
              </p>
              
              <p>
                Specialized in cloud-native solutions using Azure and AWS ecosystems, with deep 
                experience in machine learning workflows, real-time streaming analytics, and 
                scalable data architecture that drives business intelligence and operational efficiency.
              </p>
              
              <p>
                Proven record of reducing data processing latency by up to 60%, improving 
                fraud detection accuracy by 18%, and implementing automated ML pipelines that 
                enhance decision-making across organizations.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-8 font-display">
              <span className="text-accent">Certifications</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <div 
                    key={cert.name}
                    className="glass-surface p-6 rounded-lg hover:glow-primary transition-all duration-300 group"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className="flex items-start gap-3">
                      <IconComponent className={`w-6 h-6 ${cert.color} group-hover:scale-110 transition-transform`} />
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {cert.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;