import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, ArrowRight } from "lucide-react";

const CulturalHighlights = () => {
  const regions = [
    {
      name: "Tanzania",
      capital: "Dodoma",
      speakers: "61M+",
      feature: "Birthplace of Kiswahili",
      description: "Discover the origins of Kiswahili in the coastal regions and learn about Tanzanian culture.",
      traditions: ["Ujamaa Philosophy", "Traditional Music", "Makonde Art"],
      color: "primary"
    },
    {
      name: "Kenya", 
      capital: "Nairobi",
      speakers: "53M+",
      feature: "Modern Urban Swahili",
      description: "Explore contemporary Kiswahili as spoken in Kenya's vibrant cities and rural communities.",
      traditions: ["Harambee Spirit", "Safari Culture", "Maasai Heritage"],
      color: "accent"
    },
    {
      name: "Uganda",
      capital: "Kampala", 
      speakers: "45M+",
      feature: "Cross-Cultural Bridge",
      description: "Learn how Kiswahili connects diverse ethnic groups across the Pearl of Africa.",
      traditions: ["Buganda Kingdom", "Coffee Culture", "Traditional Dance"],
      color: "primary"
    }
  ];

  const culturalFacts = [
    {
      title: "Official Language",
      description: "Kiswahili is an official language in 4+ countries",
      stat: "4+"
    },
    {
      title: "Native Speakers",
      description: "Over 200 million people speak Kiswahili worldwide",
      stat: "200M+"
    },
    {
      title: "UNESCO Recognition", 
      description: "Recognized as a language of African unity",
      stat: "2022"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
            Cultural Heritage
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              East Africa
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding Kiswahili means understanding the rich tapestry of cultures, 
            traditions, and histories that make East Africa unique.
          </p>
        </div>

        {/* Cultural Facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {culturalFacts.map((fact, index) => (
            <Card key={index} className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">{fact.stat}</div>
              <h3 className="font-semibold text-foreground mb-2">{fact.title}</h3>
              <p className="text-sm text-muted-foreground">{fact.description}</p>
            </Card>
          ))}
        </div>
        
        {/* Regional Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {regions.map((region, index) => {
            const isPrimary = region.color === "primary";
            
            return (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-warm transition-smooth group border-border/50 bg-card/80 backdrop-blur-sm"
              >
                {/* Card Header */}
                <div className={`p-6 ${isPrimary ? 'bg-gradient-hero' : 'bg-gradient-accent'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {region.name}
                    </h3>
                    <div className="flex items-center gap-1 text-white/80">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{region.speakers}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/80 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{region.capital}</span>
                  </div>
                  
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {region.feature}
                  </Badge>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {region.description}
                  </p>
                  
                  {/* Traditions */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Cultural Traditions:
                    </h4>
                    <div className="space-y-2">
                      {region.traditions.map((tradition, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className={`w-2 h-2 rounded-full ${
                            isPrimary ? 'bg-primary' : 'bg-accent'
                          }`} />
                          {tradition}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                  >
                    Explore Culture
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Cultural Learning CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Weekly cultural deep-dives available</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="h-12 px-8">
              Join Cultural Sessions
            </Button>
            <Button variant="warm" size="lg" className="h-12 px-8">
              Download Culture Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalHighlights;