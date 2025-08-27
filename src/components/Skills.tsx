import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Design Tools',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'Auto Layout', 'Components', 'User Flows'],
    color: 'primary'
  },
  {
    title: 'UI/UX Concepts',
    skills: ['Responsive Design', 'Accessibility', 'Design Systems', 'Usability Testing'],
    color: 'accent'
  },
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'React.js', 'JavaScript', 'TypeScript'],
    color: 'primary'
  },
  {
    title: 'Backend & DB',
    skills: ['Node.js', 'Flask', 'MongoDB', 'MySQL'],
    color: 'accent'
  },
  {
    title: 'Other Tools',
    skills: ['Git', 'Firebase', 'Postman', 'Blender', 'JIRA', 'Confluence'],
    color: 'primary'
  },
  {
    title: 'Soft Skills',
    skills: ['Collaboration', 'Communication', 'Problem-Solving', 'Curiosity', 'Creativity'],
    color: 'accent'
  }
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Skills</span>{' '}
            <span className="accent-gradient">& Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences,
            from initial concept to final implementation.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-800 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-full hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <h3 className={`text-xl font-semibold mb-4 ${
                  category.color === 'primary' ? 'text-primary' : 'text-accent'
                }`}>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`skill-badge transition-all duration-300 hover:scale-105 ${
                        category.color === 'primary' 
                          ? 'hover:bg-primary/10 hover:border-primary/50' 
                          : 'hover:bg-accent/10 hover:border-accent/50'
                      }`}
                      style={{ 
                        animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms` 
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-20 right-10 opacity-30">
          <div className="text-6xl animate-floating text-primary">⚛️</div>
        </div>
        <div className="absolute bottom-20 left-10 opacity-30" style={{ animationDelay: '1.5s' }}>
          <div className="text-5xl animate-floating text-accent">🎨</div>
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-30" style={{ animationDelay: '2.5s' }}>
          <div className="text-4xl animate-floating text-primary">💻</div>
        </div>
      </div>
    </section>
  );
};