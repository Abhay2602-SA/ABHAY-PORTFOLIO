import { useEffect, useRef, useState } from 'react';

export const About = () => {
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

  const stats = [
    { number: '2+', label: 'Years Experience', color: 'primary' },
    { number: '15+', label: 'UI Kits Created', color: 'accent' },
    { number: '5+', label: 'Projects Completed', color: 'primary' },
    { number: '1500+', label: 'Users Impacted', color: 'accent' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">About</span>{' '}
              <span className="accent-gradient">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-primary font-semibold">passionate UI/UX Designer</span> and 
                Frontend Developer with hands-on experience designing intuitive, responsive, and 
                visually appealing interfaces. Currently pursuing B.E. in Computer Science Engineering 
                at Chandigarh University.
              </p>
              
              <p>
                My expertise spans across <span className="text-accent font-semibold">Figma, wireframing, 
                and prototyping</span>, with a solid foundation in HTML, CSS, and responsive design principles. 
                I excel at collaborating with developers and stakeholders to create user-friendly dashboards 
                and design systems.
              </p>
              
              <p>
                I'm driven by <span className="text-primary font-semibold">curiosity and creativity</span>, 
                constantly exploring new design trends and technologies. My approach focuses on solving 
                user-centric problems within real-world business constraints while maintaining accessibility 
                and usability standards.
              </p>
              
              <p>
                When I'm not designing or coding, you'll find me exploring the latest in 3D animation, 
                contributing to open-source projects, or experimenting with new design tools and techniques.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                View My Work
              </button>
              
              <button
                onClick={() => {
                  window.open('mailto:abhay.kumar.work42@gmail.com?subject=Let\'s collaborate!', '_blank');
                }}
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Let's Collaborate
              </button>
            </div>
          </div>

          {/* Stats & Visual Elements */}
          <div
            className={`transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-${stat.color}/30 hover:shadow-xl hover:shadow-${stat.color}/10 transition-all duration-300 hover:scale-105`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`text-3xl font-bold mb-2 ${
                    stat.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Design Philosophy */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-4">Design Philosophy</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>User-centered design approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Accessibility and inclusivity first</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Data-driven design decisions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Continuous learning and iteration</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-20">
          <div className="w-20 h-20 bg-primary/30 rounded-full blur-2xl animate-floating"></div>
        </div>
        <div className="absolute bottom-10 right-10 opacity-20" style={{ animationDelay: '1.5s' }}>
          <div className="w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-floating"></div>
        </div>
      </div>
    </section>
  );
};