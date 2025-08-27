import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Award } from 'lucide-react';

const experiences = [
  {
    title: 'UI/UX Design Intern',
    company: 'Bites Xpress',
    period: 'Jan 2025 – Mar 2025',
    location: 'Remote',
    type: 'Internship',
    description: 'Focused on designing food-ordering dashboards and improving user experience through data-driven design decisions.',
    achievements: [
      'Designed food-ordering dashboards, improving usability and reducing clicks by 20%',
      'Conducted A/B testing and optimized layouts based on user interaction feedback',
      'Collaborated with developers to translate Figma designs into responsive web interfaces'
    ],
    technologies: ['Figma', 'HTML/CSS', 'A/B Testing', 'User Research'],
    color: 'primary'
  },
  {
    title: 'SQL Intern',
    company: 'Celebal Technologies',
    period: 'Jun 2025 – Aug 2025',
    location: 'Remote',
    type: 'Internship',
    description: 'Worked on backend development and database management, contributing to robust API development and documentation.',
    achievements: [
      'Built backend APIs using Node.js & MongoDB with robust validation and logging',
      'Designed integration documentation for clients and supported cross-functional collaboration',
      'Worked in an Agile-Scrum environment with JIRA and Confluence',
      'Awarded Best Intern for exceptional API contributions'
    ],
    technologies: ['Node.js', 'MongoDB', 'JIRA', 'Confluence', 'API Development'],
    color: 'accent'
  }
];

const achievements = [
  {
    title: 'University Hackathon Winner',
    year: '2024',
    description: 'Designed a food delivery UI used by 1,500+ students',
    icon: '🏆'
  },
  {
    title: 'Smart India Hackathon',
    year: '2024',
    description: 'Shortlisted at Institute Level for healthcare UX prototype',
    icon: '🚀'
  },
  {
    title: 'Best Intern Award',
    year: '2025',
    description: 'Celebal Technologies - Exceptional API contributions',
    icon: '⭐'
  },
  {
    title: 'UI Kit Creator',
    year: '2024-2025',
    description: 'Created 15+ reusable Figma UI Kits for various projects',
    icon: '🎨'
  }
];

const certifications = [
  {
    title: 'Google UX Design Specialization',
    issuer: 'Coursera',
    year: '2025',
    color: 'primary'
  },
  {
    title: 'Figma UI Design Mastery',
    issuer: 'Udemy',
    year: '2025',
    color: 'accent'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: '2024',
    color: 'primary'
  }
];

export const Experience = () => {
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
    <section id="experience" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Experience</span>{' '}
            <span className="accent-gradient">& Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey showcasing growth in UI/UX design, frontend development,
            and collaborative problem-solving in real-world environments.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`transition-all duration-800 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="project-card relative">
                  {/* Timeline Connector */}
                  <div className={`absolute -left-6 top-8 w-4 h-4 rounded-full ${
                    exp.color === 'primary' ? 'bg-primary' : 'bg-accent'
                  } border-4 border-background shadow-lg hidden md:block`}></div>
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-foreground">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-foreground mb-2">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                            exp.color === 'primary' ? 'bg-primary' : 'bg-accent'
                          }`}></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`text-xs ${
                            exp.color === 'primary' 
                              ? 'border-primary/30 text-primary' 
                              : 'border-accent/30 text-accent'
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Achievements & Recognition</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100 + 400}ms` }}
              >
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                <p className="text-xs text-primary font-medium mb-2">{achievement.year}</p>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-105 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150 + 600}ms` }}
              >
                <Award className={`w-8 h-8 mx-auto mb-3 ${
                  cert.color === 'primary' ? 'text-primary' : 'text-accent'
                }`} />
                <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className={`text-xs font-medium ${
                  cert.color === 'primary' ? 'text-primary' : 'text-accent'
                }`}>{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Education</h3>
          <div className="max-w-4xl mx-auto">
            <div className="project-card">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Bachelor of Engineering</h4>
                  <p className="text-primary font-semibold mb-1">Computer Science Engineering</p>
                  <p className="text-muted-foreground mb-2">Chandigarh University, Punjab</p>
                  <p className="text-sm text-muted-foreground">2022 – 2026 • CGPA: 7.29</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Intermediate Education</h4>
                  <p className="text-accent font-semibold mb-1">Science Stream</p>
                  <p className="text-muted-foreground mb-2">Sunbeam School, Mughalsarai</p>
                  <p className="text-sm text-muted-foreground">2021 • Score: 82%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};