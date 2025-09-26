import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Video, Star, Brain, Trophy, ArrowRight, Clock, Play } from "lucide-react";

const Features = () => {
  const { toast } = useToast();
  const features = [
    {
      icon: BookOpen,
      title: "Graded Readers",
      description: "Carefully curated Kiswahili texts from Level 1 (beginner) to Level 6 (advanced) with vocabulary support and audio narration.",
      highlights: ["6 Levels", "Audio Support", "Vocabulary Pop-ups"],
      color: "primary"
    },
    {
      icon: Video,
      title: "Video Library",
      description: "High-quality instructional videos plus curated samples from authentic Kiswahili content creators across East Africa.",
      highlights: ["HD Quality", "Cultural Context", "Expert Teachers"],
      color: "secondary"
    },
    {
      icon: Users,
      title: "Live Tutors", 
      description: "Connect with certified Kiswahili teachers for personalized 1-on-1 lessons. Book by time, day, or specific tutor expertise.",
      highlights: ["Certified Teachers", "Flexible Booking", "All Skill Levels"],
      color: "primary"
    },
    {
      icon: Star,
      title: "Self-Paced Courses",
      description: "Structured learning paths from complete beginner to business proficiency. Track progress and earn completion badges.",
      highlights: ["Progress Tracking", "Completion Badges", "Learn Anytime"],
      color: "secondary"
    },
    {
      icon: Brain,
      title: "Kiswahili for Pros",
      description: "Advanced content for professionals: academic writing, translation skills, business terminology, and specialized domains.",
      highlights: ["Business Terms", "Academic Writing", "Translation Skills"],
      color: "primary"
    },
    {
      icon: Trophy,
      title: "Gamified Learning",
      description: "Build learning streaks, earn XP points, unlock achievements, and join our vibrant community of Kiswahili learners.",
      highlights: ["Learning Streaks", "Achievement System", "Community Features"],
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Why Choose SomoKiswahili
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Learn{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              The Somo Way
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience comprehensive Kiswahili learning designed by language experts and cultural ambassadors. 
            From beginner greetings to professional fluency.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isPrimary = feature.color === "primary";
            
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm group hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  isPrimary ? 'bg-gradient-primary' : 'bg-gradient-secondary'
                }`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className={`w-2 h-2 rounded-full ${
                        isPrimary ? 'bg-primary' : 'bg-secondary'
                      }`} />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth w-full"
                  onClick={() => {
                    // Navigate to courses page for more details
                    window.location.href = '/courses';
                  }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Card>
            );
          })}
        </div>
        
        {/* Learning Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-primary text-primary-foreground border-0 hover:shadow-strong transition-smooth">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Self-Paced Learning</h3>
                <p className="text-primary-foreground/80">Learn at your own speed</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-6 leading-relaxed">
              Access our complete library of courses, readers, and videos. Perfect for busy professionals 
              and self-motivated learners who want flexibility.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Clock className="w-4 h-4" />
                <span>Learn anytime, anywhere</span>
              </div>
              <Button variant="accent" size="sm" className="font-semibold">
                Start Free
              </Button>
            </div>
          </Card>
          
          <Card className="p-8 bg-gradient-secondary text-secondary-foreground border-0 hover:shadow-strong transition-smooth">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Live with a Tutor</h3>
                <p className="text-secondary-foreground/80">Personalized guidance</p>
              </div>
            </div>
            <p className="text-secondary-foreground/90 mb-6 leading-relaxed">
              Book sessions with certified Kiswahili teachers. Get personalized feedback, 
              practice conversation, and accelerate your learning journey.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-secondary-foreground/80">
                <Clock className="w-4 h-4" />
                <span>Flexible scheduling</span>
              </div>
              <Button variant="accent" size="sm" className="font-semibold">
                Book Tutor
              </Button>
            </div>
          </Card>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">Ready to start your Kiswahili journey?</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button variant="hero" size="lg" className="h-12 px-8 font-semibold">
                <Play className="w-5 h-5" />
                Start Learning Now
              </Button>
            </Link>
            <Button 
              variant="warm" 
              size="lg" 
              className="h-12 px-8 font-semibold"
              onClick={() => {
                const librarySection = document.getElementById('library');
                librarySection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <BookOpen className="w-5 h-5" />
              Explore Content
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;