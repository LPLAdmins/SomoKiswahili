import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Star, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const LessonPreview = () => {
  const { toast } = useToast();
  const lessons = [
    {
      level: "Beginner",
      title: "Maamkizi - Greetings",
      description: "Learn essential Kiswahili greetings and polite expressions used in daily conversations.",
      duration: "15 min",
      rating: 4.9,
      vocabulary: ["Hujambo", "Karibu", "Asante", "Pole"],
      color: "primary"
    },
    {
      level: "Intermediate",
      title: "Chakula - Food & Culture",
      description: "Explore East African cuisine vocabulary while learning about food traditions.",
      duration: "25 min",
      rating: 4.8,
      vocabulary: ["Ugali", "Pilau", "Samosa", "Chai"],
      color: "accent"
    },
    {
      level: "Advanced",
      title: "Hadithi - Storytelling",
      description: "Master narrative techniques through traditional Swahili folklore and modern stories.",
      duration: "40 min",
      rating: 4.9,
      vocabulary: ["Hadithi", "Msimulizi", "Mfalme", "Uchawi"],
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Sample Lessons
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience Our{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Learning Method
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Try these interactive lessons to see how KiswahiliLab makes learning engaging and effective.
          </p>
        </div>
        
        {/* Lessons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {lessons.map((lesson, index) => {
            const isPrimary = lesson.color === "primary";
            
            return (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-accent transition-smooth group border-border/50 bg-card/80 backdrop-blur-sm"
              >
                {/* Card Header */}
                <div className={`p-6 ${isPrimary ? 'bg-gradient-hero' : 'bg-gradient-accent'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      {lesson.level}
                    </Badge>
                    <div className="flex items-center gap-1 text-white">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{lesson.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {lesson.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-white/80">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{lesson.duration}</span>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {lesson.description}
                  </p>
                  
                  {/* Vocabulary Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Key Vocabulary:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {lesson.vocabulary.map((word, idx) => (
                        <Badge 
                          key={idx}
                          variant="outline"
                          className="border-primary/30 text-primary"
                        >
                          {word}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link to="/auth" className="flex-1">
                      <Button 
                        variant={isPrimary ? "hero" : "accent"} 
                        size="sm"
                        className="w-full"
                      >
                        <Play className="w-4 h-4" />
                        Try Lesson
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        toast({
                          title: "Lesson Details",
                          description: `View full curriculum for ${lesson.title}`,
                        });
                      }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            variant="warm" 
            size="lg" 
            className="h-12 px-8"
            onClick={() => {
              toast({
                title: "Course Catalog",
                description: "Browse all 200+ interactive Kiswahili lessons and courses!",
              });
            }}
          >
            View All 200+ Lessons
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LessonPreview;