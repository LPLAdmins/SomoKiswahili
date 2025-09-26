import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Star, Users, Trophy, Play, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CourseCatalog = () => {
  const { toast } = useToast();
  const courses = [
    {
      id: 1,
      title: "Kiswahili Level 1: Msingi wa Lugha",
      subtitle: "Complete Beginner to Basic Conversations",
      level: "Level 1",
      duration: "8 weeks",
      lessons: 24,
      students: 2847,
      rating: 4.9,
      price: "Free",
      description: "Start your Kiswahili journey with essential greetings, family terms, and basic grammar. Perfect for absolute beginners.",
      skills: ["Greetings", "Family Terms", "Numbers", "Basic Grammar"],
      color: "primary"
    },
    {
      id: 2,
      title: "Kiswahili Level 2: Mazungumzo ya Kila Siku",
      subtitle: "Daily Conversations & Travel Essentials",
      level: "Level 2", 
      duration: "10 weeks",
      lessons: 30,
      students: 1923,
      rating: 4.8,
      price: "KES 2,500",
      description: "Master everyday conversations, shopping, directions, and travel vocabulary. Build confidence in real-world situations.",
      skills: ["Shopping", "Directions", "Food", "Transportation"],
      color: "secondary"
    },
    {
      id: 3,
      title: "Kiswahili Level 3: Mazungumzo ya Kina", 
      subtitle: "Complex Conversations & Cultural Context",
      level: "Level 3",
      duration: "12 weeks", 
      lessons: 36,
      students: 1456,
      rating: 4.9,
      price: "KES 3,500",
      description: "Engage in deeper conversations about culture, current events, and personal experiences. Advanced grammar structures.",
      skills: ["Past Tense", "Future Tense", "Cultural Topics", "News Discussion"],
      color: "primary"
    },
    {
      id: 4,
      title: "Kiswahili for Business Professionals",
      subtitle: "Professional Communication & Workplace Skills",
      level: "Level 4-5",
      duration: "8 weeks",
      lessons: 20,
      students: 834,
      rating: 4.7,
      price: "KES 5,000",
      description: "Master business terminology, formal communication, presentations, and professional correspondence in Kiswahili.",
      skills: ["Business Terms", "Formal Writing", "Presentations", "Negotiations"],
      color: "accent",
      isPro: true
    },
    {
      id: 5,
      title: "Kiswahili Literature & Advanced Writing",
      subtitle: "Academic Level & Literary Analysis", 
      level: "Level 5-6",
      duration: "10 weeks",
      lessons: 25,
      students: 567,
      rating: 4.8,
      price: "KES 4,500",
      description: "Explore Kiswahili literature, poetry, and advanced writing techniques. Perfect for academic or professional writing.",
      skills: ["Literature Analysis", "Academic Writing", "Poetry", "Research Skills"],
      color: "secondary",
      isPro: true
    },
    {
      id: 6,
      title: "Kiswahili for Healthcare Workers",
      subtitle: "Medical Terminology & Patient Communication",
      level: "Level 3-4",
      duration: "6 weeks",
      lessons: 18,
      students: 423,
      rating: 4.9,
      price: "KES 4,000",
      description: "Essential medical vocabulary and patient communication skills for healthcare professionals working in East Africa.",
      skills: ["Medical Terms", "Patient Care", "Emergency Phrases", "Health Education"],
      color: "primary",
      isPro: true
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Self-Paced Courses
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Learning Path
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From complete beginner to professional fluency. Our structured courses are designed 
            by language experts and tested by thousands of successful learners.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {courses.map((course) => {
            const getColorClasses = (color: string) => {
              switch(color) {
                case 'primary': return 'bg-gradient-primary';
                case 'secondary': return 'bg-gradient-secondary';
                case 'accent': return 'bg-gradient-accent';
                default: return 'bg-gradient-primary';
              }
            };

            return (
              <Card key={course.id} className="overflow-hidden hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm group">
                {/* Course Header */}
                <div className={`p-6 text-white ${getColorClasses(course.color)}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                          {course.level}
                        </Badge>
                        {course.isPro && (
                          <Badge variant="secondary" className="bg-accent/80 text-accent-foreground border-0 text-xs font-semibold">
                            PRO
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                        {course.title}
                      </h3>
                      <p className="text-white/80 text-sm">{course.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{course.price}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                {/* Course Content */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'fill-accent text-accent' : 'text-muted-foreground/30'}`} />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">{course.rating}</span>
                    <span className="text-sm text-muted-foreground">({course.students.toLocaleString()} students)</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      What you'll learn:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="border-primary/30 text-primary text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-3">
                    {course.price === "Free" ? (
                      <Link to="/auth" className="flex-1">
                        <Button 
                          variant="hero"
                          size="sm"
                          className="w-full font-semibold"
                        >
                          <Play className="w-4 h-4" />
                          Start Free
                        </Button>
                      </Link>
                    ) : (
                      <Button 
                        variant="default"
                        size="sm"
                        className="flex-1 font-semibold"
                        onClick={() => {
                          toast({
                            title: "Course Enrollment",
                            description: `Ready to enroll in ${course.title}? Sign up to get started!`,
                          });
                        }}
                      >
                        <Play className="w-4 h-4" />
                        Enroll Now
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        toast({
                          title: "Course Details",
                          description: `View detailed curriculum for ${course.title}`,
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">New courses added monthly</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="h-12 px-8 font-semibold"
              onClick={() => {
                toast({
                  title: "Course Browser",
                  description: "Browse all available Kiswahili courses and find your perfect fit!",
                });
              }}
            >
              Browse All Courses
            </Button>
            <Button 
              variant="warm" 
              size="lg" 
              className="h-12 px-8 font-semibold"
              onClick={() => {
                toast({
                  title: "Level Assessment",
                  description: "Take our quick assessment to find the perfect starting level for you!",
                });
              }}
            >
              Take Level Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;