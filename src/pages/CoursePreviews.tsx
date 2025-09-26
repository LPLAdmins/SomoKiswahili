import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation, Footer } from "@/components/Layout";
import { 
  BookOpen, 
  Clock, 
  Star, 
  Users, 
  Play, 
  Download, 
  CheckCircle,
  Globe,
  Video,
  FileText,
  Headphones
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const CoursePreviews = () => {
  const { toast } = useToast();

  const coursesByLevel = {
    beginner: [
      {
        id: 1,
        title: "Kiswahili Basics: First Steps",
        description: "Essential greetings, introductions, and basic vocabulary for everyday situations.",
        duration: "4 weeks",
        lessons: 16,
        students: 3200,
        rating: 4.9,
        completionRate: 89,
        keyTopics: ["Greetings", "Family", "Numbers", "Colors", "Basic Grammar"],
        sampleLesson: "Lesson 1: Habari za asubuhi (Good Morning)",
        level: "A1",
        color: "primary"
      },
      {
        id: 2,
        title: "Daily Conversations",
        description: "Learn to navigate common daily situations with confidence and natural expressions.",
        duration: "6 weeks",
        lessons: 24,
        students: 2800,
        rating: 4.8,
        completionRate: 85,
        keyTopics: ["Shopping", "Directions", "Food", "Time", "Weather"],
        sampleLesson: "Lesson 3: Sokoni (At the Market)",
        level: "A2",
        color: "secondary"
      }
    ],
    intermediate: [
      {
        id: 3,
        title: "Cultural Conversations",
        description: "Dive deeper into East African culture while improving your conversational skills.",
        duration: "8 weeks",
        lessons: 32,
        students: 1900,
        rating: 4.9,
        completionRate: 82,
        keyTopics: ["Traditions", "History", "Music", "Literature", "Current Events"],
        sampleLesson: "Lesson 5: Utamaduni wa Kiafrika (African Culture)",
        level: "B1",
        color: "accent"
      },
      {
        id: 4,
        title: "Business Kiswahili",
        description: "Professional communication skills for workplace and business environments.",
        duration: "10 weeks",
        lessons: 40,
        students: 1200,
        rating: 4.7,
        completionRate: 78,
        keyTopics: ["Meetings", "Presentations", "Negotiations", "Email", "Reports"],
        sampleLesson: "Lesson 2: Mkutano wa Biashara (Business Meeting)",
        level: "B2",
        color: "primary"
      }
    ],
    advanced: [
      {
        id: 5,
        title: "Academic Kiswahili",
        description: "Advanced language skills for academic research, writing, and formal presentations.",
        duration: "12 weeks",
        lessons: 48,
        students: 800,
        rating: 4.8,
        completionRate: 75,
        keyTopics: ["Research", "Academic Writing", "Debate", "Literature Analysis", "Formal Speech"],
        sampleLesson: "Lesson 7: Uchambuzi wa Fasihi (Literature Analysis)",
        level: "C1",
        color: "secondary"
      },
      {
        id: 6,
        title: "Kiswahili Mastery",
        description: "Near-native fluency with complex grammar, idioms, and cultural nuances.",
        duration: "16 weeks",
        lessons: 64,
        students: 400,
        rating: 4.9,
        completionRate: 72,
        keyTopics: ["Advanced Grammar", "Idioms", "Poetry", "Proverbs", "Regional Dialects"],
        sampleLesson: "Lesson 10: Methali na Misemo (Proverbs and Sayings)",
        level: "C2",
        color: "accent"
      }
    ]
  };

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'primary': return 'bg-gradient-primary';
      case 'secondary': return 'bg-gradient-secondary';
      case 'accent': return 'bg-gradient-accent';
      default: return 'bg-gradient-primary';
    }
  };

  const renderCourseCard = (course: any) => (
    <Card key={course.id} className="overflow-hidden hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm">
      {/* Course Header */}
      <div className={`p-6 text-white ${getColorClasses(course.color)}`}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                {course.level}
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-0 text-xs">
                {course.completionRate}% completion rate
              </Badge>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
              {course.title}
            </h3>
            <p className="text-white/80 text-sm">{course.description}</p>
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
        
        {/* Sample Lesson */}
        <div className="mb-4 p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Sample Lesson Preview:</span>
          </div>
          <p className="text-sm text-muted-foreground">{course.sampleLesson}</p>
        </div>
        
        {/* Key Topics */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">
            What you'll learn:
          </h4>
          <div className="flex flex-wrap gap-2">
            {course.keyTopics.map((topic: string, idx: number) => (
              <Badge key={idx} variant="outline" className="border-primary/30 text-primary text-xs">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex gap-3">
          <Button 
            variant="hero"
            size="sm"
            className="flex-1 font-semibold"
            onClick={() => {
              toast({
                title: "Course Preview",
                description: `Starting preview of ${course.title}. Sign up to access full course!`,
              });
            }}
          >
            <Play className="w-4 h-4" />
            Preview Course
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => {
              toast({
                title: "Course Syllabus",
                description: `Download detailed syllabus for ${course.title}`,
              });
            }}
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                Course Previews
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Explore Our{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Kiswahili Courses
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get a detailed preview of our structured learning paths. From complete beginner to native-level fluency, 
                find the perfect course for your Kiswahili journey.
              </p>
            </div>
          </div>
        </section>

        {/* Course Statistics */}
        <section className="py-12 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">200+</div>
                <div className="text-muted-foreground font-medium">Total Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">6</div>
                <div className="text-muted-foreground font-medium">Course Levels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">10k+</div>
                <div className="text-muted-foreground font-medium">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">82%</div>
                <div className="text-muted-foreground font-medium">Avg. Completion</div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses by Level */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="beginner" className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Choose Your Learning Level
                </h2>
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                  <TabsTrigger value="beginner">Beginner</TabsTrigger>
                  <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="beginner" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Beginner Courses (A1-A2)</h3>
                  <p className="text-muted-foreground">Perfect for those just starting their Kiswahili journey</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {coursesByLevel.beginner.map(renderCourseCard)}
                </div>
              </TabsContent>

              <TabsContent value="intermediate" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Intermediate Courses (B1-B2)</h3>
                  <p className="text-muted-foreground">Build fluency and cultural understanding</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {coursesByLevel.intermediate.map(renderCourseCard)}
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Advanced Courses (C1-C2)</h3>
                  <p className="text-muted-foreground">Achieve near-native fluency and mastery</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {coursesByLevel.advanced.map(renderCourseCard)}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Course Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground text-center mb-12">
                What's Included in Every Course
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Video, title: "HD Video Lessons", description: "High-quality instructional videos" },
                  { icon: Headphones, title: "Audio Practice", description: "Native speaker pronunciation guides" },
                  { icon: FileText, title: "Reading Materials", description: "Graded readers and cultural texts" },
                  { icon: CheckCircle, title: "Progress Tracking", description: "Detailed analytics and certificates" }
                ].map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Start Learning?
              </h3>
              <p className="text-muted-foreground mb-8">
                Join thousands of students already learning Kiswahili with our comprehensive courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/auth">
                  <Button variant="hero" size="lg" className="h-12 px-8 font-semibold">
                    <Play className="w-5 h-5" />
                    Start Free Trial
                  </Button>
                </Link>
                <Button 
                  variant="warm" 
                  size="lg" 
                  className="h-12 px-8 font-semibold"
                  onClick={() => {
                    const tutorSection = document.getElementById('tutors');
                    if (tutorSection) {
                      tutorSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#tutors';
                    }
                  }}
                >
                  <Users className="w-5 h-5" />
                  Book a Tutor
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CoursePreviews;