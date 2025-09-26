import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Clock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VideoPlayerProps {
  video: {
    id: number;
    title: string;
    duration: string;
    views: number;
    rating: number;
    thumbnail: string;
    teacher: string;
    level: string;
    description: string;
    type: string;
  };
  children: React.ReactNode;
}

const VideoPlayer = ({ video, children }: VideoPlayerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  // Sample video URLs for demonstration - in a real app these would come from your database
  const getVideoUrl = (id: number) => {
    const sampleVideos = [
      "https://www.youtube.com/embed/dQw4w9WgXcQ", // Pronunciation Basics
      "https://www.youtube.com/embed/3JZ_D3ELwOQ", // Street Food Tour
      "https://www.youtube.com/embed/kJQP7kiw5Fk", // Business Meeting
      "https://www.youtube.com/embed/9bZkp7q19f0", // Market Conversations
    ];
    return sampleVideos[id - 1] || sampleVideos[0];
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{video.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Video Player */}
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              src={getVideoUrl(video.id)}
              title={video.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Information */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {video.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {video.description}
                </p>
              </div>
              <Badge variant="secondary" className="ml-4">
                {video.level}
              </Badge>
            </div>

            {/* Video Stats */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span>{video.rating} rating</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{video.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{video.teacher}</span>
              </div>
              <span>{video.views.toLocaleString()} views</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t">
              <Button 
                variant="hero" 
                className="flex-1"
                onClick={() => {
                  toast({
                    title: "Added to Learning Path",
                    description: `"${video.title}" has been added to your learning path!`,
                  });
                }}
              >
                <Play className="w-4 h-4" />
                Add to Learning Path
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  toast({
                    title: "Saved for Later",
                    description: `"${video.title}" has been saved to your library!`,
                  });
                }}
              >
                Save for Later
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayer;