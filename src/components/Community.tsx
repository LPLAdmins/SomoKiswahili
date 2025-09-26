import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, Users, Trophy, Calendar, MapPin, Bookmark } from "lucide-react";

const Community = () => {
  const { toast } = useToast();
  const posts = [
    {
      id: 1,
      author: {
        name: "Amina Hassan",
        username: "@amina_kiswahili",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=80&h=80&fit=crop&crop=face",
        level: "Advanced",
        streak: 45
      },
      content: "Just completed my 45-day learning streak! 🔥 Today I learned the phrase 'Haba na haba, hujaza kibaba' - little by little fills the measure. Perfect motivation for consistent learning!",
      timestamp: "2 hours ago",
      likes: 23,
      comments: 8,
      shares: 3,
      tags: ["#LearningStreak", "#KiswahiliWisdom", "#Motivation"],
      hasImage: false
    },
    {
      id: 2,
      author: {
        name: "Joseph Mwangi",
        username: "@mwalimu_joseph",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
        level: "Native",
        isVerified: true
      },
      content: "Weekly cultural tip: In Zanzibar, when greeting elders, it's respectful to use 'Shikamoo' instead of the regular 'Hujambo'. The response is 'Marahaba'. This shows deep respect for age and wisdom. 🙏",
      timestamp: "5 hours ago", 
      likes: 67,
      comments: 15,
      shares: 12,
      tags: ["#CulturalTip", "#Zanzibar", "#Respect"],
      hasImage: true,
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      author: {
        name: "Grace Mushi",
        username: "@grace_tz",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
        level: "Intermediate",
        streak: 28
      },
      content: "Question for the community: What's the best way to practice rolling 'R's in Kiswahili? I'm struggling with words like 'radi' and 'haraka'. Any tips from fellow learners or teachers?",
      timestamp: "1 day ago",
      likes: 34,
      comments: 22,
      shares: 5,
      tags: ["#Pronunciation", "#Help", "#Question"],
      hasImage: false
    },
    {
      id: 4,
      author: {
        name: "Samuel Kiggundu",
        username: "@prof_samuel",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
        level: "Expert",
        isVerified: true
      },
      content: "Fascinating etymology lesson: The word 'safari' comes from the Arabic verb 'safara' meaning 'to travel'. It entered Kiswahili through centuries of trade along the East African coast. Language is living history! 📚",
      timestamp: "2 days ago",
      likes: 89,
      comments: 28,
      shares: 34,
      tags: ["#Etymology", "#History", "#Safari"],
      hasImage: false
    }
  ];

  const trendingTopics = [
    { tag: "#LearningStreak", posts: 234 },
    { tag: "#CulturalTip", posts: 156 },
    { tag: "#Pronunciation", posts: 89 },
    { tag: "#BusinessKiswahili", posts: 67 },
    { tag: "#KiswahiliPoetry", posts: 45 }
  ];

  const upcomingEvents = [
    {
      title: "Virtual Kiswahili Poetry Night",
      date: "Tomorrow, 7:00 PM EAT",
      attendees: 45,
      host: "Bi. Fatuma Ally"
    },
    {
      title: "Business Kiswahili Workshop",
      date: "Friday, 2:00 PM EAT", 
      attendees: 23,
      host: "Dr. Amina Hassan"
    },
    {
      title: "Cultural Exchange: Zanzibar",
      date: "Saturday, 10:00 AM EAT",
      attendees: 67,
      host: "Mwalimu Joseph"
    }
  ];

  const achievements = [
    { title: "7-Day Streak", icon: "🔥", achieved: true },
    { title: "First Post", icon: "✍️", achieved: true },
    { title: "Community Helper", icon: "🤝", achieved: true },
    { title: "30-Day Streak", icon: "⚡", achieved: false },
    { title: "Poetry Master", icon: "📖", achieved: false }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-secondary/30 text-secondary">
            Learning Community
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Connect with{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Fellow Learners
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our vibrant community of Kiswahili learners and native speakers. 
            Share progress, ask questions, and celebrate cultural discoveries together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">You</span>
                </div>
                <div className="flex-1">
                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <p className="text-muted-foreground">Share your Kiswahili learning journey...</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="default">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Post
                    </Button>
                    <Button size="sm" variant="outline">
                      Add Photo
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Community Posts */}
            {posts.map((post) => (
              <Card key={post.id} className="p-6 border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-soft transition-smooth">
                {/* Post Header */}
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{post.author.name}</h4>
                      {post.author.isVerified && (
                        <Badge variant="secondary" className="bg-primary text-primary-foreground text-xs px-2 py-0.5">
                          ✓ Verified
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs px-2 py-0.5">
                        {post.author.level}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{post.author.username}</span>
                      <span>•</span>
                      <span>{post.timestamp}</span>
                      {post.author.streak && (
                        <>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <span>🔥</span>
                            <span>{post.author.streak} day streak</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="mb-4">
                  <p className="text-foreground leading-relaxed mb-3">{post.content}</p>
                  
                  {post.hasImage && post.imageUrl && (
                    <img 
                      src={post.imageUrl}
                      alt="Post image"
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                  )}

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-primary border-primary/30 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth">
                      <Share2 className="w-5 h-5" />
                      <span className="text-sm">{post.shares}</span>
                    </button>
                  </div>
                  <button className="text-muted-foreground hover:text-primary transition-smooth">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Community Stats */}
            <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Community Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10.2k</div>
                  <div className="text-sm text-muted-foreground">Active Learners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">4.8k</div>
                  <div className="text-sm text-muted-foreground">Posts This Week</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">156</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">92%</div>
                  <div className="text-sm text-muted-foreground">Helpful Responses</div>
                </div>
              </div>
            </Card>

            {/* Trending Topics */}
            <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
              <h3 className="font-bold text-foreground mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-primary font-medium">{topic.tag}</span>
                    <span className="text-sm text-muted-foreground">{topic.posts} posts</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Upcoming Events */}
            <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-foreground text-sm">{event.title}</h4>
                    <p className="text-xs text-muted-foreground mb-1">{event.date}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{event.attendees} attending</span>
                      <span>by {event.host}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Events
              </Button>
            </Card>

            {/* Your Achievements */}
            <Card className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Your Achievements
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg text-center ${
                      achievement.achieved 
                        ? 'bg-primary/10 border border-primary/20' 
                        : 'bg-muted border border-border'
                    }`}
                  >
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className={`text-xs font-medium ${
                      achievement.achieved ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {achievement.title}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary border border-secondary/20 rounded-full px-6 py-3 mb-6">
            <Users className="w-5 h-5" />
            <span className="font-medium">Join 10,000+ learners in our community</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button variant="hero" size="lg" className="h-12 px-8 font-semibold">
                <Users className="w-5 h-5" />
                Join Community
              </Button>
            </Link>
            <Button 
              variant="warm" 
              size="lg" 
              className="h-12 px-8 font-semibold"
              onClick={() => {
                // Create downloadable community guidelines
                const guidelinesContent = `
SomoKiswahili Community Guidelines

🌟 WELCOME TO OUR COMMUNITY!
Join 10,000+ learners in our supportive Kiswahili learning environment.

📋 COMMUNITY RULES:
1. Be respectful and supportive of all learners
2. Use English or Kiswahili in posts and comments
3. Share helpful resources and learning tips
4. Ask questions - no question is too basic!
5. Celebrate others' progress and achievements
6. No spam, advertising, or off-topic content
7. Respect cultural differences and learning styles

✅ ENCOURAGED ACTIVITIES:
• Share your learning progress and milestones
• Ask grammar and vocabulary questions
• Post cultural insights and experiences
• Share useful learning resources
• Practice conversations with fellow learners
• Help translate phrases and expressions
• Celebrate language learning achievements

❌ NOT ALLOWED:
• Disrespectful or offensive language
• Commercial promotions without permission
• Sharing copyrighted materials
• Personal information or contact details
• Political or controversial discussions
• Criticism of learning pace or methods

🏆 COMMUNITY FEATURES:
• Daily vocabulary challenges
• Weekly conversation practice groups
• Monthly cultural exchange events
• Achievement badges and streaks
• Study buddy matching
• Regional meetup coordination

📞 SUPPORT:
For questions or to report issues:
Email: enquiries@longhornpublishers.com
Phone: +254 20 444 8888 (Kenya)
Phone: +255 22 218 4750 (Tanzania)
Website: longhornpublishers.com
Community Platform: somokirwahili.com

Karibu sana - You're very welcome! 🇰🇪🇹🇿🇺🇬
                `;
                
                const blob = new Blob([guidelinesContent], { type: 'text/plain' });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'SomoKiswahili-Community-Guidelines.txt';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
                
                toast({
                  title: "Guidelines Downloaded!",
                  description: "Community guidelines have been downloaded. Welcome to our learning community!",
                });
              }}
            >
              Community Guidelines
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;