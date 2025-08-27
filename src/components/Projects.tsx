import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Social Pulse',
    subtitle: 'Social Media App',
    description: 'Designed a clean, modern interface with reusable components and accessible layouts. Built real-time chat, notifications, and activity feeds to improve engagement.',
    technologies: ['MERN Stack', 'Chakra UI', 'React.js', 'MongoDB'],
    features: ['Real-time Chat', 'Activity Feeds', 'Responsive Design', 'Component Library'],
    color: 'primary',
    gradient: 'from-primary/20 to-transparent',
    githubLink: 'https://github.com/Abhay2602-SA/SOCIAL_PULSE',
    liveLink: null
  },
  {
    title: 'Face Recognition Attendance',
    subtitle: 'AI-Powered Attendance System',
    description: 'Developed dashboards for teachers and admins to track real-time attendance. Added CSV exports and implemented smooth, role-based navigation.',
    technologies: ['Python', 'Flask', 'SQL', 'OpenCV'],
    features: ['Face Recognition', 'Role-based Access', 'CSV Export', 'Real-time Tracking'],
    color: 'accent',
    gradient: 'from-accent/20 to-transparent',
    githubLink: 'https://github.com/Abhay2602-SA/finalyearproject',
    liveLink: null
  },
  {
    title: 'Web3 Identity Platform',
    subtitle: 'Decentralized Identity Management',
    description: 'Designed seamless flows for decentralized identity creation and management. Integrated MetaMask authentication with reusable React components.',
    technologies: ['React', 'Solidity', 'IPFS', 'Web3.js'],
    features: ['MetaMask Integration', 'IPFS Storage', 'Smart Contracts', 'Identity Verification'],
    color: 'primary',
    gradient: 'from-primary/20 to-transparent',
    githubLink: 'https://github.com/Abhay2602-SA/IDENTITY',
    liveLink: null
  },
  {
    title: '3D Animation Project',
    subtitle: 'Running Fox Animation',
    description: 'Modeled, textured, and animated a realistic fox with smooth transitions and lighting. Showcases 3D modeling and animation skills.',
    technologies: ['Blender', '3D Modeling', 'Animation', 'Lighting'],
    features: ['Character Modeling', 'Realistic Textures', 'Smooth Animation', 'Dynamic Lighting'],
    color: 'accent',
    gradient: 'from-accent/20 to-transparent',
    githubLink: 'https://github.com/Abhay2602-SA/3D_animation',
    liveLink: null
  },
  {
    title: 'Social Media Analytics',
    subtitle: 'Data Analytics Platform',
    description: 'Built comprehensive social media analytics tools for tracking engagement, reach, and user behavior patterns. Provides detailed insights and visualizations.',
    technologies: ['JavaScript', 'Data Visualization', 'Analytics', 'Chart.js'],
    features: ['Engagement Tracking', 'Data Visualization', 'Behavior Analysis', 'Custom Reports'],
    color: 'primary',
    gradient: 'from-primary/20 to-transparent',
    githubLink: 'https://github.com/Abhay2602-SA/SOCIAL-MEDIA-ANALYTICS',
    liveLink: null
  }
];

export const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Featured</span>{' '}
            <span className="accent-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my design and development work, demonstrating expertise in
            UI/UX design, frontend development, and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card transition-all duration-800 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Project Header */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} border border-border/30 flex items-center justify-center relative`}>
                  <div className="text-center">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      project.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-30">
                    <div className={`w-4 h-4 rounded-full ${
                      project.color === 'primary' ? 'bg-primary' : 'bg-accent'
                    } animate-pulse`}></div>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-20">
                    <div className={`w-6 h-6 rounded-full ${
                      project.color === 'primary' ? 'bg-primary' : 'bg-accent'
                    } animate-ping`}></div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`text-xs ${
                          project.color === 'primary' 
                            ? 'border-primary/30 text-primary' 
                            : 'border-accent/30 text-accent'
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                          project.color === 'primary' ? 'bg-primary' : 'bg-accent'
                        }`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.liveLink ? (
                    <Button
                      size="sm"
                      className={`${
                        project.color === 'primary' 
                          ? 'bg-primary hover:bg-primary/90' 
                          : 'bg-accent hover:bg-accent/90'
                      } text-primary-foreground group`}
                      onClick={() => {
                        window.open(project.liveLink, '_blank');
                      }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      View Live
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className={`${
                        project.color === 'primary' 
                          ? 'border-primary/50 text-primary hover:bg-primary/10' 
                          : 'border-accent/50 text-accent hover:bg-accent/10'
                      } group cursor-not-allowed opacity-70`}
                      disabled
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Coming Soon
                    </Button>
                  )}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className={`${
                      project.color === 'primary' 
                        ? 'border-primary/30 text-primary hover:bg-primary/10' 
                        : 'border-accent/30 text-accent hover:bg-accent/10'
                    } group`}
                    onClick={() => {
                      window.open(project.githubLink, '_blank');
                    }}
                  >
                    <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => {
              window.open('https://github.com/Abhay2602-SA', '_blank');
            }}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};