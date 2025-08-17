import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Alex Johnson</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
            Full-Stack Developer & UI/UX Designer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            I create beautiful, functional, and user-centered digital experiences. 
            With expertise in modern web technologies and design principles, 
            I bring ideas to life through code and creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="gradient-primary hover:shadow-glow transition-all duration-300 group px-8 py-3"
              onClick={() => scrollToSection('projects')}
            >
              <span className="text-lg">View My Work</span>
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              <span className="text-lg">Get In Touch</span>
            </Button>
          </div>
          
          {/* Skills preview */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Figma'].map((skill, index) => (
              <span 
                key={skill} 
                className="px-4 py-2 bg-card border rounded-full shadow-soft animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;