import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "CSS/Tailwind", level: 92 },
        { name: "Vue.js", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "Tools & Services",
      skills: [
        { name: "AWS/Cloud", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Git/GitHub", level: 95 },
        { name: "Figma", level: 88 }
      ]
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Figma", "Tailwind CSS"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit built through years of hands-on experience 
              and continuous learning in modern web development.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.title} 
                className="shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                            style={{
                              '--progress-background': 'hsl(var(--muted))',
                              '--progress-foreground': 'var(--gradient-primary)'
                            } as React.CSSProperties}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Cloud */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card border rounded-full shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer hover:scale-105 animate-bounce-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;