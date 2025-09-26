import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, FileText, Briefcase, Scale, Stethoscope, Globe, Download, Play, BookOpen, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const KiswahiliForPros = () => {
  const { toast } = useToast();
  const domains = [
    {
      icon: Building,
      title: "Business & Commerce",
      description: "Master professional communication, negotiations, and business terminology",
      modules: [
        "Corporate Communication",
        "Financial Terms & Banking", 
        "Marketing & Sales Vocabulary",
        "Meeting Management",
        "Contract Language"
      ],
      level: "Level 4-6",
      duration: "6 weeks",
      color: "primary"
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Medicine",
      description: "Essential medical vocabulary and patient communication for healthcare workers",
      modules: [
        "Medical Terminology",
        "Patient Consultation",
        "Emergency Procedures",
        "Health Education",
        "Clinical Documentation"
      ],
      level: "Level 3-5",
      duration: "8 weeks", 
      color: "secondary"
    },
    {
      icon: Scale,
      title: "Legal & Government",
      description: "Legal terminology, government processes, and formal documentation",
      modules: [
        "Legal Terminology",
        "Court Procedures",
        "Government Services",
        "Document Translation",
        "Constitutional Language"
      ],
      level: "Level 5-6",
      duration: "10 weeks",
      color: "accent"
    },
    {
      icon: Globe,
      title: "Tourism & Hospitality",
      description: "Service industry language for hotels, restaurants, and tourism",
      modules: [
        "Guest Services",
        "Food & Beverage",
        "Tour Guiding",
        "Cultural Interpretation",
        "Emergency Assistance"
      ],
      level: "Level 2-4",
      duration: "5 weeks",
      color: "primary"
    },
    {
      icon: FileText,
      title: "Academic & Research",
      description: "Scholarly writing, research terminology, and academic presentations",
      modules: [
        "Academic Writing",
        "Research Methodology",
        "Thesis Defense",
        "Conference Presentations",
        "Scholarly Citations"
      ],
      level: "Level 5-6",
      duration: "12 weeks",
      color: "secondary"
    },
    {
      icon: Briefcase,
      title: "Technical & Engineering",
      description: "Technical documentation, engineering terms, and project management",
      modules: [
        "Technical Documentation",
        "Engineering Terms",
        "Project Management",
        "Safety Protocols",
        "Quality Control"
      ],
      level: "Level 4-6",
      duration: "8 weeks",
      color: "accent"
    }
  ];

  const resources = [
    {
      type: "Advanced Readings",
      count: "200+",
      description: "Professional texts from newspapers, journals, and industry publications",
      icon: BookOpen
    },
    {
      type: "Industry Glossaries",
      count: "15+",
      description: "Comprehensive terminology databases for each professional domain",
      icon: FileText
    },
    {
      type: "Case Studies",
      count: "50+",
      description: "Real-world scenarios and professional communication examples",
      icon: Briefcase
    },
    {
      type: "Certification Prep",
      count: "6 Tracks",
      description: "Prepare for official Kiswahili proficiency certifications",
      icon: Trophy
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Kimani",
      role: "Medical Director, Nairobi Hospital",
      text: "The medical Kiswahili module transformed how our international staff communicate with patients. Essential for any healthcare professional in East Africa.",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "James Mwangi",
      role: "Legal Counsel, East Africa Development Bank",
      text: "The legal terminology course gave me confidence in court proceedings and contract negotiations in Kiswahili. Highly recommended for legal professionals.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Grace Nyong'o",
      role: "Tourism Manager, Kenya Wildlife Service",
      text: "Our tourism team's Kiswahili skills improved dramatically. Guests now experience authentic cultural connections during their safaris.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section id="pros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
            Professional Development
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Kiswahili for Pros
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced Kiswahili training for professionals across industries. 
            Master domain-specific vocabulary, formal communication, and cultural nuances essential for career success in East Africa.
          </p>
        </div>

        {/* Professional Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            const getColorClasses = (color: string) => {
              switch(color) {
                case 'primary': return 'bg-gradient-primary';
                case 'secondary': return 'bg-gradient-secondary';
                case 'accent': return 'bg-gradient-accent';
                default: return 'bg-gradient-primary';
              }
            };

            return (
              <Card key={index} className="overflow-hidden hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm group">
                {/* Domain Header */}
                <div className={`p-6 text-white ${getColorClasses(domain.color)}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{domain.title}</h3>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                          {domain.level}
                        </Badge>
                        <span>{domain.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm">{domain.description}</p>
                </div>

                {/* Domain Content */}
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Course Modules:</h4>
                  <ul className="space-y-2 mb-6">
                    {domain.modules.map((module, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full ${
                          domain.color === 'primary' ? 'bg-primary' :
                          domain.color === 'secondary' ? 'bg-secondary' :
                          'bg-accent'
                        }`} />
                        {module}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1 font-semibold"
                      onClick={() => {
                        toast({
                          title: "Course Preview",
                          description: "Starting professional Kiswahili course preview. Sign up to access full content!",
                        });
                      }}
                    >
                      <Play className="w-4 h-4" />
                      Preview Course
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Professional Resources */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Professional Resources
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive materials designed for working professionals who need Kiswahili fluency in their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="p-6 text-center border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-soft transition-smooth">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-2">{resource.count}</div>
                  <h4 className="font-semibold text-foreground mb-2">{resource.type}</h4>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Professional Success Stories
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of professionals who've advanced their careers with SomoKiswahili.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-6 py-3 mb-6">
            <Trophy className="w-5 h-5" />
            <span className="font-medium">Professional certification available upon completion</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button variant="accent" size="lg" className="h-12 px-8 font-semibold">
                <Briefcase className="w-5 h-5" />
                Explore Pro Courses
              </Button>
            </Link>
            <Button 
              variant="warm" 
              size="lg" 
              className="h-12 px-8 font-semibold"
              onClick={() => {
                // Create a downloadable brochure
                const brochureContent = `
SomoKiswahili Professional Programs

📋 COURSE CATALOG:
• Business Kiswahili (8 weeks) - Professional communication
• Healthcare Kiswahili (6 weeks) - Medical terminology  
• Legal Kiswahili (10 weeks) - Legal document preparation
• Tourism Kiswahili (6 weeks) - Hospitality & customer service
• Government Kiswahili (8 weeks) - Public sector communication

💼 BENEFITS:
✓ Industry-specific vocabulary
✓ Real-world case studies
✓ Professional certification
✓ Flexible corporate training
✓ Custom curriculum options

📞 CONTACT:
Email: corporate@somokirwahili.com
Phone: +254-700-123-456
Website: somokirwahili.com/corporate

Transform your career with professional Kiswahili skills!
                `;
                
                const blob = new Blob([brochureContent], { type: 'text/plain' });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'SomoKiswahili-Professional-Programs-Brochure.txt';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
                
                toast({
                  title: "Brochure Downloaded!",
                  description: "Professional programs brochure has been downloaded to your device.",
                });
              }}
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KiswahiliForPros;