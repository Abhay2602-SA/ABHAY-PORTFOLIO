import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, MapPin, Send, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send form data to Formspree
    fetch("https://formspree.io/f/xgvlvvjz", {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      body: new FormData(e.target as HTMLFormElement)
    })
      .then(response => {
        if (response.ok) {
          toast({
            title: "Thank you for your message!",
            description: "I'll get back to you soon.",
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          toast({
            title: "Error",
            description: "There was a problem sending your message.",
          });
        }
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Network error. Please try again.",
        });
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abhay.kumar.work42@gmail.com',
      href: 'mailto:abhay.kumar.work42@gmail.com',
      color: 'primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 63925 16290',
      href: 'tel:+916392516290',
      color: 'accent'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://linkedin.com/in/abhay-kumar-47357a250/',
      color: 'primary'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my repositories',
      href: 'https://github.com/Abhay2602-SA',
      color: 'accent'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Punjab, India',
      href: '#',
      color: 'primary'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Let's</span>{' '}
            <span className="accent-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can create
            exceptional digital experiences together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div
            className={`transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to work on new projects and collaborate with passionate people. 
                  Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                  I'd love to hear from you!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-${contact.color}/30 hover:shadow-lg hover:shadow-${contact.color}/10 transition-all duration-300 hover:scale-105 group ${
                      contact.label === 'Location' ? 'cursor-default' : 'cursor-pointer'
                    }`}
                    onClick={contact.label === 'Location' ? (e) => e.preventDefault() : undefined}
                  >
                    <div className={`p-3 rounded-lg ${
                      contact.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                    }`}>
                      <contact.icon className={`w-5 h-5 ${
                        contact.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">{contact.label}</p>
                      <p className={`font-semibold ${
                        contact.color === 'primary' ? 'text-primary' : 'text-accent'
                      } group-hover:underline`}>
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <a
                  href="/resume.pdf"
                  download
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 group flex items-center justify-center"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </a>
                
                <Button
                  variant="outline"
                  onClick={() => {
                    window.open('https://linkedin.com/in/abhay-kumar-47357a250/', '_blank');
                  }}
                  className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group"
                >
                  <Linkedin className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="project-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/25"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/25"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project collaboration opportunity"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/25"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/25 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-border/30">
          <p className="text-muted-foreground">
            © 2025 Abhay Kumar. Crafted with ❤️ and lots of coffee.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/Abhay2602-SA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/abhay-kumar-47357a250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-default"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 opacity-20">
          <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-floating"></div>
        </div>
        <div className="absolute bottom-20 left-10 opacity-20" style={{ animationDelay: '2s' }}>
          <div className="w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-floating"></div>
        </div>
      </div>
    </section>
  );
};