import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Star, MapPin, Clock, Languages, Video, Calendar, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const TutorDirectory = () => {
  const [tutors, setTutors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const { data, error } = await supabase
          .from('tutor_profiles')
          .select('*');
        
        if (error) {
          console.error('Error fetching tutors:', error);
          // Fallback to hardcoded data if database fails
          setTutors(fallbackTutors);
        } else {
          // Map database data to component format
          const mappedTutors = data.map((tutor, index) => ({
            id: tutor.id,
            name: tutor.full_name,
            title: `${tutor.specialization} Specialist`,
            location: "East Africa", 
            languages: tutor.languages || ["Kiswahili", "English"],
            rating: tutor.rating || 4.8,
            reviews: 50 + (index * 20),
            hourlyRate: tutor.hourly_rate || 1500,
            experience: `${tutor.experience_years || 5} years`,
            specialties: [tutor.specialization, "Conversation", "Grammar"],
            availability: "Mon-Fri 9AM-5PM EAT",
            bio: tutor.bio || "Experienced Kiswahili teacher dedicated to helping students achieve fluency.",
            avatar: tutor.avatar_url || "https://images.unsplash.com/photo-1494790108755-2616b68bb6af?w=150&h=150&fit=crop&crop=face",
            responseTime: "< 2 hours",
            completedLessons: 100 + (index * 200),
            color: ["primary", "secondary", "accent"][index % 3]
          }));
          setTutors(mappedTutors);
        }
      } catch (error) {
        console.error('Error:', error);
        setTutors(fallbackTutors);
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  // Fallback data if database is not available
  const fallbackTutors = [
    {
      id: 1,
      name: "Dr. Amina Hassan",
      title: "Certified Kiswahili Linguist",
      location: "Nairobi, Kenya", 
      languages: ["Kiswahili (Native)", "English", "Arabic"],
      rating: 4.9,
      reviews: 234,
      hourlyRate: 1500,
      experience: "8 years",
      specialties: ["Business Kiswahili", "Academic Writing", "Literature"],
      availability: "Mon-Fri 9AM-5PM EAT",
      bio: "PhD in Kiswahili Linguistics from University of Nairobi. Specializes in business communication and academic writing. Published author of 3 Kiswahili textbooks.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face",
      responseTime: "< 2 hours",
      completedLessons: 1847,
      color: "primary"
    },
    {
      id: 2,
      name: "Mwalimu Joseph Mwangi",
      title: "Traditional Kiswahili Master",
      location: "Mombasa, Kenya",
      languages: ["Kiswahili (Native)", "English", "Kikuyu"],
      rating: 4.8,
      reviews: 189,
      hourlyRate: 1200,
      experience: "12 years",
      specialties: ["Coastal Kiswahili", "Poetry", "Cultural Context"],
      availability: "Tue-Sat 8AM-6PM EAT", 
      bio: "Master teacher from the Kenyan coast with deep knowledge of traditional Kiswahili poetry and cultural practices. Teaches authentic coastal dialect.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      responseTime: "< 4 hours",
      completedLessons: 2156,
      color: "secondary"
    },
    {
      id: 3,
      name: "Dada Grace Mushi",
      title: "Kiswahili for Beginners Specialist",
      location: "Dar es Salaam, Tanzania",
      languages: ["Kiswahili (Native)", "English", "Sukuma"],
      rating: 4.9,
      reviews: 312,
      hourlyRate: 1000,
      experience: "6 years",
      specialties: ["Complete Beginners", "Pronunciation", "Basic Grammar"],
      availability: "Mon-Thu 10AM-8PM EAT",
      bio: "Patient and encouraging teacher who excels at helping absolute beginners gain confidence. Developed unique pronunciation techniques.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      responseTime: "< 1 hour",
      completedLessons: 923,
      color: "primary"
    },
    {
      id: 4,
      name: "Prof. Samuel Kiggundu",
      title: "Advanced Kiswahili & Translation",
      location: "Kampala, Uganda",
      languages: ["Kiswahili (Fluent)", "English (Native)", "Luganda"],
      rating: 4.7,
      reviews: 156,
      hourlyRate: 1800,
      experience: "15 years",
      specialties: ["Translation", "Advanced Grammar", "Academic Research"],
      availability: "Wed-Sun 2PM-10PM EAT",
      bio: "University professor and certified translator. Expert in advanced Kiswahili grammar and professional translation between English and Kiswahili.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      responseTime: "< 6 hours",
      completedLessons: 1234,
      color: "accent"
    },
    {
      id: 5,
      name: "Bi. Fatuma Ally",
      title: "Conversational Kiswahili Expert",
      location: "Stone Town, Zanzibar",
      languages: ["Kiswahili (Native)", "Arabic", "English"],
      rating: 4.8,
      reviews: 267,
      hourlyRate: 1300,
      experience: "9 years",
      specialties: ["Conversation Practice", "Zanzibar Dialect", "Cultural Stories"],
      availability: "Daily 6AM-2PM EAT",
      bio: "Born and raised in Zanzibar, brings authentic island culture and stories to lessons. Excellent for conversation practice and cultural understanding.",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      responseTime: "< 3 hours",
      completedLessons: 1567,
      color: "secondary"
    },
    {
      id: 6,
      name: "Mwalimu David Temba",
      title: "Medical Kiswahili Specialist",
      location: "Arusha, Tanzania",
      languages: ["Kiswahili (Native)", "English", "Maasai"],
      rating: 4.9,
      reviews: 98,
      hourlyRate: 2000,
      experience: "10 years",
      specialties: ["Medical Terminology", "Healthcare Communication", "Professional Kiswahili"],
      availability: "Mon-Fri 7PM-11PM EAT",
      bio: "Former medical interpreter with expertise in healthcare terminology. Perfect for medical professionals and healthcare workers in East Africa.",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      responseTime: "< 4 hours", 
      completedLessons: 567,
      color: "primary"
    }
  ];

  if (loading) {
    return (
      <section id="tutors" className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-primary/20 rounded w-64 mx-auto"></div>
              <div className="h-4 bg-muted/40 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="tutors" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-secondary/30 text-secondary">
            Expert Tutors
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Learn from{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Certified Experts
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with native speakers and certified teachers across East Africa. 
            Book flexible sessions that fit your schedule and learning goals.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button variant="warm" size="sm">All Tutors</Button>
          <Button variant="outline" size="sm">Beginners</Button>
          <Button variant="outline" size="sm">Business</Button>
          <Button variant="outline" size="sm">Conversation</Button>
          <Button variant="outline" size="sm">Academic</Button>
          <Button variant="outline" size="sm">Under KES 1,500/hr</Button>
        </div>

        {/* Tutor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tutors.map((tutor) => {
            const getColorClasses = (color: string) => {
              switch(color) {
                case 'primary': return 'border-primary/30 hover:border-primary/50';
                case 'secondary': return 'border-secondary/30 hover:border-secondary/50';
                case 'accent': return 'border-accent/30 hover:border-accent/50';
                default: return 'border-primary/30 hover:border-primary/50';
              }
            };

            return (
              <Card key={tutor.id} className={`overflow-hidden hover:shadow-medium transition-smooth bg-card/80 backdrop-blur-sm group ${getColorClasses(tutor.color)}`}>
                {/* Tutor Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <img 
                        src={tutor.avatar}
                        alt={`${tutor.name} - Kiswahili Tutor`}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-glow" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg leading-tight">{tutor.name}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{tutor.title}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{tutor.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-foreground">KES {tutor.hourlyRate.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">per hour</div>
                    </div>
                  </div>

                  {/* Rating & Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="font-medium text-sm">{tutor.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">({tutor.reviews} reviews)</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {tutor.completedLessons.toLocaleString()} lessons
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {tutor.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tutor.specialties.slice(0, 3).map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="border-primary/20 text-primary text-xs px-2 py-0.5">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>Response time: {tutor.responseTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Languages className="w-3 h-3" />
                      <span>{tutor.languages.length} languages</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{tutor.availability}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Link to="/auth" className="flex-1">
                      <Button variant="default" size="sm" className="w-full font-semibold">
                        <Calendar className="w-4 h-4" />
                        Book Lesson
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        toast({
                          title: "Video Profile",
                          description: `View ${tutor.name}'s introduction video and teaching style.`,
                        });
                      }}
                    >
                      <Video className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">All tutors are certified and verified</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button variant="hero" size="lg" className="h-12 px-8 font-semibold">
                <Calendar className="w-5 h-5" />
                Book Free Trial Lesson
              </Button>
            </Link>
            <Button 
              variant="warm" 
              size="lg" 
              className="h-12 px-8 font-semibold"
              onClick={() => {
                toast({
                  title: "Tutor Directory",
                  description: "Browse all available tutors and find your perfect match!",
                });
              }}
            >
              View All Tutors
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorDirectory;