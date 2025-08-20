import { Button } from "@/components/ui/button";
import { ChevronDown, Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-card to-muted"
      aria-label="Hero Section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10 pointer-events-none" aria-hidden="true"></div>

      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" aria-hidden="true"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          {/* Avatar and tagline */}
          <div className="flex flex-col items-center justify-center mb-6">
            <Avatar className="w-24 h-24 mb-4 shadow-lg border-4 border-primary">
              <AvatarImage src="/placeholder.svg" alt="Badmosh Bhai Avatar" />
              <AvatarFallback>BB</AvatarFallback>
            </Avatar>
            <span className="text-base md:text-lg text-muted-foreground font-semibold tracking-wide mb-2">Crafting code & pixels with passion</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight focus:outline-none" tabIndex={0}>
            Hi, I'm <span className="text-gradient">Badmosh Bhai</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-primary font-medium mb-6" tabIndex={0}>
            Full-Stack Developer & UI/UX Designer
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto" tabIndex={0}>
            I create beautiful, functional, and user-centered digital experiences.<br className="hidden md:inline" />
            With expertise in modern web technologies and design principles, I bring ideas to life through code and creativity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <Button
              size="lg"
              className="gradient-primary hover:shadow-glow transition-all duration-300 group px-8 py-3 focus:ring-2 focus:ring-primary"
              onClick={() => scrollToSection('projects')}
              aria-label="View My Work"
            >
              <span className="text-lg font-semibold">View My Work</span>
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth px-8 py-3 focus:ring-2 focus:ring-primary"
              onClick={() => scrollToSection('contact')}
              aria-label="Get In Touch"
            >
              <Mail className="mr-2 h-5 w-5" />
              <span className="text-lg font-semibold">Get In Touch</span>
            </Button>
          </div>

          {/* Interactive Skills preview */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground" aria-label="Skills">
            {[
              { name: 'React', desc: 'Frontend library for building UIs' },
              { name: 'TypeScript', desc: 'Typed superset of JavaScript' },
              { name: 'Node.js', desc: 'Backend runtime for JS' },
              { name: 'Python', desc: 'Versatile programming language' },
              { name: 'AWS', desc: 'Cloud platform' },
              { name: 'Figma', desc: 'Design tool' }
            ].map((skill, index) => (
              <span
                key={skill.name}
                className="px-4 py-2 bg-card border rounded-full shadow-soft animate-bounce-in cursor-pointer hover:bg-primary/10 focus:bg-primary/20 transition-colors duration-200 outline-none"
                style={{ animationDelay: `${index * 0.1}s` }}
                tabIndex={0}
                title={skill.desc}
                aria-label={skill.name}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator with accessibility */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
        <span className="sr-only">Scroll down</span>
      </div>
    </section>
  );
};

export default Hero;