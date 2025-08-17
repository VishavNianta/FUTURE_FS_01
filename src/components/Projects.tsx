import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with modern technologies for scalability and performance.",
      image: "🛒",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and advanced analytics dashboard.",
      image: "📋",
      tags: ["Vue.js", "Firebase", "TypeScript", "Chart.js"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI-Powered Analytics",
      description: "Machine learning dashboard that provides insights and predictions for business data with interactive visualizations.",
      image: "📊",
      tags: ["Python", "TensorFlow", "React", "D3.js", "Docker"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Social Media App",
      description: "Modern social platform with real-time messaging, media sharing, and advanced privacy controls.",
      image: "💬",
      tags: ["Next.js", "Prisma", "WebSockets", "Cloudinary"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "🌤️",
      tags: ["React", "OpenWeather API", "Mapbox", "PWA"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio site with smooth animations, contact forms, and CMS integration for easy content management.",
      image: "🎨",
      tags: ["Gatsby", "GraphQL", "Netlify CMS", "GSAP"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, demonstrating expertise in full-stack development, 
              UI/UX design, and modern web technologies.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="group hover:shadow-large transition-all duration-500 cursor-pointer overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative h-48 gradient-card flex items-center justify-center overflow-hidden">
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button size="sm" className="flex-1 group/btn">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">More Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group hover:shadow-medium transition-all duration-300 cursor-pointer animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{project.image}</span>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="p-2">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="p-2">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
