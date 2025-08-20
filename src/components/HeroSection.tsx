import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-data-pipeline.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    const summarySection = document.getElementById('summary');
    summarySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative hero-gradient overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Data pipeline visualization" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        <div className="animate-float absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-60" style={{ animationDelay: '0s' }} />
        <div className="animate-float absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-accent rounded-full opacity-40" style={{ animationDelay: '1s' }} />
        <div className="animate-float absolute bottom-1/3 left-1/2 w-1 h-1 bg-primary rounded-full opacity-80" style={{ animationDelay: '2s' }} />
        <div className="animate-float absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-data-secondary rounded-full opacity-50" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
            <span className="bg-gradient-to-r from-primary via-accent to-data-secondary bg-clip-text text-transparent">
              Anudeep Kolluri
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
            Data Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Architecting scalable data pipelines and intelligent analytics solutions 
            that transform raw data into business intelligence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToNext}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 glow-primary hover:glow-accent"
            >
              Explore My Work
            </button>
            
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-lg border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default HeroSection;