import { useEffect } from 'react';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'Abhay Kumar - UI/UX Designer & Frontend Developer Portfolio';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Passionate UI/UX Designer and Frontend Developer creating intuitive digital experiences. Specialized in Figma, React.js, and responsive design. View my portfolio and projects.');
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Abhay Kumar",
      "jobTitle": "UI/UX Designer & Frontend Developer",
      "description": "Passionate UI/UX Designer with hands-on experience designing intuitive, responsive, and visually appealing interfaces.",
      "email": "abhay.kumar.work42@gmail.com",
      "telephone": "+91-63925-16290",
      "url": window.location.href,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Punjab",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://linkedin.com/in/abhay-kumar-47357a250/",
        "https://github.com/Abhay2602-SA"
      ],
      "knowsAbout": [
        "UI/UX Design",
        "Frontend Development", 
        "Figma",
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Accessibility",
        "Design Systems"
      ]
    };

    // Add structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data script
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Animated Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Skills Section */}
        <Skills />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Experience Section */}
        <Experience />
        
        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
};

export default Index;
