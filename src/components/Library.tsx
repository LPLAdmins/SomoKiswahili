import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Volume2, Download, Clock, Star, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import VideoPlayer from "./VideoPlayer";
import ReaderViewer from "./ReaderViewer";

const Library = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'readers' | 'videos'>('readers');

  const readers = [
    {
      id: 1,
      title: "Harusi ya Pemba",
      subtitle: "A Wedding in Pemba",
      level: "Level 1",
      words: 1200,
      readTime: "15 min",
      rating: 4.8,
      reads: 3420,
      description: "Follow Amina as she prepares for her sister's traditional wedding in Pemba. Learn family vocabulary and cultural traditions.",
      topics: ["Family", "Traditions", "Food", "Celebrations"],
      hasAudio: true,
      difficulty: "Beginner",
      color: "primary"
    },
    {
      id: 2,
      title: "Safari ya Serengeti", 
      subtitle: "Journey to Serengeti",
      level: "Level 2",
      words: 2100,
      readTime: "25 min",
      rating: 4.9,
      reads: 2847,
      description: "Experience the magnificent wildlife of Serengeti through Juma's eyes. Learn animal names and travel vocabulary.",
      topics: ["Animals", "Nature", "Travel", "Adventure"],
      hasAudio: true,
      difficulty: "Elementary",
      color: "secondary"
    },
    {
      id: 3,
      title: "Biashara ya Sokoni",
      subtitle: "Business at the Market", 
      level: "Level 2",
      words: 1800,
      readTime: "20 min",
      rating: 4.7,
      reads: 2156,
      description: "Learn about entrepreneurship and market culture through Mama Neema's fruit vendor business in Dar es Salaam.",
      topics: ["Business", "Money", "Numbers", "Daily Life"],
      hasAudio: true,
      difficulty: "Elementary",
      color: "accent"
    },
    {
      id: 4,
      title: "Shule ya Kimbo",
      subtitle: "School in the Village",
      level: "Level 3",
      words: 2500,
      readTime: "30 min",
      rating: 4.6,
      reads: 1923,
      description: "A heartwarming story about education and community in rural Tanzania. Advanced vocabulary and cultural insights.",
      topics: ["Education", "Community", "Rural Life", "Social Issues"],
      hasAudio: true,
      difficulty: "Intermediate",
      color: "primary"
    },
    {
      id: 5,
      title: "Bahari ya Pwani",
      subtitle: "The Coastal Ocean",
      level: "Level 4",
      words: 3200,
      readTime: "40 min",
      rating: 4.8,
      reads: 1567,
      description: "Explore marine life and coastal communities along the East African coast. Rich vocabulary about ocean and fishing.",
      topics: ["Ocean", "Fishing", "Coast", "Marine Life"],
      hasAudio: true,
      difficulty: "Upper-Intermediate",
      color: "secondary"
    },
    {
      id: 6,
      title: "Hadithi za Bibi",
      subtitle: "Grandmother's Stories",
      level: "Level 5",
      words: 3800,
      readTime: "45 min",
      rating: 4.9,
      reads: 1234,
      description: "Traditional folktales and wisdom passed down through generations. Complex language and cultural depth.",
      topics: ["Folktales", "Wisdom", "History", "Culture"],
      hasAudio: true,
      difficulty: "Advanced",
      color: "accent"
    }
  ];

  const videos = [
    {
      id: 1,
      title: "Learn Swahili: 10 Beginner Videos You Must Watch",
      duration: "45:20",
      views: 125000,
      rating: 4.8,
      thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=225&fit=crop",
      teacher: "SwahiliPod101",
      level: "Beginner",
      description: "Comprehensive beginner course covering essential Swahili words and phrases for newcomers to the language.",
      type: "lesson"
    },
    {
      id: 2,
      title: "Swahili Alphabet and Pronunciation Guide",
      duration: "15:30",
      views: 162440,
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=225&fit=crop",
      teacher: "Swahili Speaker",
      level: "Beginner",
      description: "Learn the Swahili alphabet and proper pronunciation to articulate Swahili words comfortably.",
      type: "lesson"
    },
    {
      id: 3,
      title: "60 Minutes of Swahili Listening Comprehension",
      duration: "60:00",
      views: 89500,
      rating: 4.7,
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
      teacher: "SwahiliPod101",
      level: "Intermediate",
      description: "Practice your listening skills with this comprehensive intermediate Swahili listening comprehension video.",
      type: "listening"
    },
    {
      id: 4,
      title: "Swahili Slang: Niaje and Mambo Vipi",
      duration: "12:45",
      views: 34500,
      rating: 4.6,
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop",
      teacher: "East Africa Slang Guide",
      level: "Intermediate",
      description: "Learn popular Swahili slang phrases like 'Niaje' and 'Mambo vipi?' to sound like a local speaker.",
      type: "conversation"
    },
    {
      id: 5,
      title: "Swahili for Beginners: Essential Phrases",
      duration: "18:22",
      views: 28550,
      rating: 4.5,
      thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=225&fit=crop",
      teacher: "Learn Swahili Today",
      level: "Beginner",
      description: "Master the most important Swahili phrases every beginner needs to know for daily communication.",
      type: "lesson"
    },
    {
      id: 6,
      title: "ALL Swahili for Intermediate Learners",
      duration: "120:00",
      views: 67800,
      rating: 4.8,
      thumbnail: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=225&fit=crop",
      teacher: "SwahiliPod101",
      level: "Intermediate",
      description: "Comprehensive intermediate course to advance your Swahili speaking skills with native-like fluency.",
      type: "lesson"
    },
    {
      id: 7,
      title: "Swahili Travel Phrases for East Africa",
      duration: "25:15",
      views: 45200,
      rating: 4.7,
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop",
      teacher: "Travel Swahili Guide",
      level: "Beginner",
      description: "Essential travel phrases for visiting Kenya, Tanzania, and other Swahili-speaking regions.",
      type: "travel"
    },
    {
      id: 8,
      title: "Business Swahili: Professional Communication",
      duration: "35:40",
      views: 23100,
      rating: 4.6,
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
      teacher: "Prof. Business Swahili",
      level: "Advanced",
      description: "Professional Swahili for business meetings, presentations, and formal communications in East Africa.",
      type: "professional"
    }
  ];

  return (
    <section id="library" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
            Learning Library
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Graded Readers &{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Video Content
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in carefully graded Kiswahili content. From simple stories 
            to complex literature, with audio support and cultural context.
          </p>
        </div>

        {/* Content Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 p-1 bg-muted rounded-lg">
            <Button 
              variant={activeTab === 'readers' ? "default" : "ghost"} 
              size="sm" 
              className="font-semibold"
              onClick={() => setActiveTab('readers')}
            >
              <BookOpen className="w-4 h-4" />
              Graded Readers
            </Button>
            <Button 
              variant={activeTab === 'videos' ? "default" : "ghost"} 
              size="sm" 
              className="font-semibold"
              onClick={() => setActiveTab('videos')}
            >
              <Eye className="w-4 h-4" />
              Video Library
            </Button>
          </div>
        </div>

        {/* Graded Readers Content */}
        {activeTab === 'readers' && (
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {readers.map((reader) => {
                const getColorClasses = (color: string) => {
                  switch(color) {
                    case 'primary': return 'bg-gradient-primary';
                    case 'secondary': return 'bg-gradient-secondary';
                    case 'accent': return 'bg-gradient-accent';
                    default: return 'bg-gradient-primary';
                  }
                };

                return (
                  <ReaderViewer key={reader.id} reader={reader}>
                    <Card className="overflow-hidden hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm group cursor-pointer">
                      {/* Reader Header */}
                      <div className={`p-6 text-white ${getColorClasses(reader.color)}`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                                {reader.level}
                              </Badge>
                              <Badge variant="secondary" className="bg-white/20 text-white border-0 text-xs">
                                {reader.difficulty}
                              </Badge>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                              {reader.title}
                            </h3>
                            <p className="text-white/80 text-sm italic">{reader.subtitle}</p>
                          </div>
                          {reader.hasAudio && (
                            <div className="ml-4">
                              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <Volume2 className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-4 text-white/80 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{reader.readTime}</span>
                          </div>
                          <div>
                            <span>{reader.words} words</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Reader Content */}
                      <div className="p-6">
                        {/* Rating & Stats */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-accent text-accent" />
                              <span className="font-medium text-sm">{reader.rating}</span>
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {reader.reads.toLocaleString()} reads
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                          {reader.description}
                        </p>
                        
                        {/* Topics */}
                        <div className="mb-6">
                          <h4 className="text-xs font-semibold text-foreground mb-2">Topics covered:</h4>
                          <div className="flex flex-wrap gap-1">
                            {reader.topics.map((topic, idx) => (
                              <Badge key={idx} variant="outline" className="border-primary/20 text-primary text-xs px-2 py-0.5">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        {/* Preview Text */}
                        <div className="text-center py-4 text-muted-foreground text-sm">
                          Click to read the full story →
                        </div>
                      </div>
                    </Card>
                  </ReaderViewer>
                );
              })}
            </div>
          </div>
        )}

        {/* Video Content */}
        {activeTab === 'videos' && (
          <div className="space-y-16">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Video Learning Content
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                High-quality instructional videos and curated cultural content from across East Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
                <VideoPlayer key={video.id} video={video}>
                  <Card className="overflow-hidden hover:shadow-medium transition-smooth border-border/50 bg-card/80 backdrop-blur-sm group cursor-pointer">
                    {/* Video Thumbnail */}
                    <div className="relative">
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-smooth" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
                          <Eye className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                      <Badge variant="secondary" className="absolute top-2 left-2 bg-primary text-primary-foreground border-0 text-xs">
                        {video.level}
                      </Badge>
                    </div>
                    
                    {/* Video Info */}
                    <div className="p-4">
                      <h4 className="font-semibold text-foreground text-sm mb-2 leading-tight">
                        {video.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {video.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-accent text-accent" />
                          <span>{video.rating}</span>
                        </div>
                        <span>{video.views.toLocaleString()} views</span>
                      </div>
                    </div>
                  </Card>
                </VideoPlayer>
              ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">New content added weekly</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button variant="hero" size="lg" className="h-12 px-8 font-semibold">
                Explore Full Library
              </Button>
            </Link>
            <Button 
              variant="warm" 
              size="lg" 
              className="h-12 px-8 font-semibold"
              onClick={() => {
                toast({
                  title: "Reading App",
                  description: "Download our mobile app to read Kiswahili content offline!",
                });
              }}
            >
              Download Reading App
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Library;