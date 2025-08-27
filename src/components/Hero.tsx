import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Greeting */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground mb-2 animate-fade-in">
              Hello, I am
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="text-foreground">Abhay</span>
              <span className="accent-gradient block">Kumar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6">
              UI/UX Designer & Frontend Developer
            </h2>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-slide-up">
              Currently crafting beautiful digital experiences with{' '}
              <span className="text-primary font-semibold">intuitive design</span> and{' '}
              <span className="text-accent font-semibold">modern development</span>. 
              Specialized in creating user-centered solutions that blend aesthetics with functionality.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 group"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 group"
            >
              <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Get In Touch
            </Button>
            
            <a
              href="/resume.pdf"
              download
              className="text-muted-foreground hover:text-primary px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 group flex items-center justify-center"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors duration-300"
            >
              <ArrowDown className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/4 animate-floating" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};