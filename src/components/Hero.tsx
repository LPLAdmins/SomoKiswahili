import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/somo-kiswahili-hero.jpg";
import { Play, BookOpen, Users, ArrowRight, Star, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-warm overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="SomoKiswahili - Learn Kiswahili with expert tutors"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-2 mb-8 animate-slide-up">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            <span className="text-sm font-medium">Karibu - Welcome to SomoKiswahili</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-slide-up leading-tight">
            <span className="block mb-2">Jifunze Kiswahili.</span>
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Learn Kiswahili
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mt-4">
              spoken by 100+ million people
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Master Kiswahili the Somo way with expert tutors, graded reading materials, 
            interactive courses, and authentic cultural immersion. Join thousands learning East Africa's most beautiful language.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up">
            <Link to="/auth" className="inline-block">
              <Button 
                variant="hero" 
                size="lg"
                className="h-14 px-8 text-lg min-w-52 font-semibold"
              >
                <Play className="w-5 h-5" />
                Start Learning Free
              </Button>
            </Link>
            <Button 
              variant="accent" 
              size="lg"
              className="h-14 px-8 text-lg min-w-52 font-semibold"
              onClick={() => {
                // Scroll to tutors section on home page or navigate there
                const tutorSection = document.getElementById('tutors');
                if (tutorSection) {
                  tutorSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  // If not on home page, navigate to home and then scroll
                  window.location.href = '/#tutors';
                }
              }}
            >
              <Users className="w-5 h-5" />
              Book a Tutor
            </Button>
          </div>
          
          {/* Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16 animate-slide-up">
            {[
              { icon: BookOpen, title: "Graded Readers", subtitle: "Level 1-6" },
              { icon: Play, title: "Video Lessons", subtitle: "HD Quality" },
              { icon: Users, title: "Live Tutors", subtitle: "Expert Teachers" },
              { icon: Star, title: "Self-Paced", subtitle: "Learn Anytime" },
              { icon: Globe, title: "Pro Content", subtitle: "Advanced Skills" }
            ].map((item, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:shadow-soft transition-smooth">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
              </div>
            ))}
          </div>
          
          {/* Stats Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">10k+</div>
              <div className="text-muted-foreground font-medium">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">50k+</div>
              <div className="text-muted-foreground font-medium">Hours Learned</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">15 Days</div>
              <div className="text-muted-foreground font-medium">Average Streak</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust Badge */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Badge variant="outline" className="border-primary/30 text-primary bg-background/80 backdrop-blur-sm px-4 py-2">
          <span className="text-sm font-medium">Owned by Longhorn Publishers Plc</span>
        </Badge>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-48 right-16 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}} />
    </section>
  );
};

export default Hero;