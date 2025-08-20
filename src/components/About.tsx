import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Design Thinking",
      description: "Creating user-centered designs that are both beautiful and functional."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Staying ahead of the curve with the latest technologies and best practices."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to deliver exceptional results."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I am Student of DIT University in Dehradun and pursuing BCA. I have been learning coding form last 
              3 years and have a passion for creating beautiful and functional web applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Started as a self-taught developer, I quickly fell in love with the 
                endless possibilities of web development. My journey has taken me through 
                various technologies and frameworks, but my focus has always remained on 
                creating exceptional user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or hiking in the mountains. 
                I believe that diverse experiences make better developers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Problem Solver</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Creative Thinker</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Team Player</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-card rounded-2xl shadow-large flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-medium">
                <Code className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
          
          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="group hover:shadow-large transition-all duration-300 cursor-pointer animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;