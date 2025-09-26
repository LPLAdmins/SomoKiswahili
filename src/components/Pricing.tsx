import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, Users, BookOpen, Video, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
  const { toast } = useToast();
  const plans = [
    {
      name: "Free Explorer",
      price: "Free",
      period: "forever",
      description: "Perfect for trying out Kiswahili learning",
      features: [
        "5 graded readers (Level 1)",
        "Basic pronunciation guides",
        "Community access",
        "Progress tracking",
        "Mobile app access"
      ],
      limitations: [
        "Limited to Level 1 content",
        "No tutor sessions",
        "No downloadable content"
      ],
      cta: "Start Free",
      popular: false,
      color: "outline"
    },
    {
      name: "Self-Paced Learner",
      price: "KES 2,500",
      period: "per month",
      description: "Complete access to all self-study materials",
      features: [
        "All graded readers (Levels 1-6)",
        "Complete video library",
        "Downloadable content",
        "Advanced progress analytics",
        "Certificate of completion",
        "Offline mobile access",
        "Cultural immersion content",
        "Weekly live Q&A sessions"
      ],
      limitations: [
        "No 1-on-1 tutor sessions"
      ],
      cta: "Start Learning",
      popular: true,
      color: "hero"
    },
    {
      name: "Live Learning Plus",
      price: "KES 8,500",
      period: "per month",
      description: "Everything + live tutor sessions",
      features: [
        "Everything in Self-Paced",
        "4 hours of tutor sessions/month",
        "Priority tutor booking",
        "Personalized learning plan",
        "Speaking assessment",
        "Cultural immersion sessions",
        "Business Kiswahili module",
        "Advanced writing feedback"
      ],
      limitations: [],
      cta: "Go Premium",
      popular: false,
      color: "accent"
    }
  ];

  const tutorRates = [
    {
      category: "Standard Tutors",
      rate: "KES 1,000 - 1,500",
      description: "Certified teachers with 3+ years experience",
      features: ["Basic conversation practice", "Grammar lessons", "Cultural context"]
    },
    {
      category: "Expert Tutors", 
      rate: "KES 1,500 - 2,000",
      description: "Advanced specialists and university professors",
      features: ["Business Kiswahili", "Academic writing", "Literature analysis"]
    },
    {
      category: "Premium Specialists",
      rate: "KES 2,000 - 3,000", 
      description: "Domain experts for professional needs",
      features: ["Medical terminology", "Legal translation", "Technical writing"]
    }
  ];

  const bundles = [
    {
      name: "5-Hour Bundle",
      price: "KES 6,000",
      savings: "Save KES 1,500",
      description: "Perfect for conversation practice",
      expires: "Valid for 3 months"
    },
    {
      name: "10-Hour Bundle",
      price: "KES 11,000",
      savings: "Save KES 4,000",
      description: "Intensive learning package",
      expires: "Valid for 6 months",
      popular: true
    },
    {
      name: "20-Hour Bundle", 
      price: "KES 20,000",
      savings: "Save KES 10,000",
      description: "Complete fluency program",
      expires: "Valid for 12 months"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Learning Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing for every learner. Start free, upgrade anytime. 
            No hidden fees, cancel whenever you want.
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden border-2 transition-smooth hover:shadow-medium ${
                plan.popular 
                  ? 'border-primary shadow-soft scale-105' 
                  : 'border-border/50 hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-hero text-center py-2">
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 font-semibold">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.period !== "forever" && (
                      <span className="text-muted-foreground ml-2">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4">Includes:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-4">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                {plan.name === "Free Explorer" ? (
                  <Link to="/auth" className="w-full">
                    <Button 
                      variant={plan.color as any}
                      size="lg"
                      className="w-full font-semibold"
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    variant={plan.color as any}
                    size="lg"
                    className="w-full font-semibold"
                    onClick={() => {
                      if (plan.name === "Self-Paced Learner") {
                        // Navigate to courses section
                        const coursesSection = document.getElementById('courses');
                        if (coursesSection) {
                          coursesSection.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.href = '/#courses';
                        }
                      } else {
                        toast({
                          title: "Ready to Subscribe?",
                          description: `Sign up to get started with the ${plan.name} plan!`,
                        });
                      }
                    }}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Tutor Rates */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Live Tutor Rates
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book individual sessions or save with our lesson bundles. All sessions include personalized feedback and progress tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {tutorRates.map((rate, index) => (
              <Card key={index} className="p-6 border-border/50 bg-card/80 backdrop-blur-sm">
                <div className="text-center mb-4">
                  <h4 className="font-bold text-foreground text-lg mb-2">{rate.category}</h4>
                  <div className="text-2xl font-bold text-primary mb-2">{rate.rate}</div>
                  <div className="text-xs text-muted-foreground">per hour</div>
                </div>
                <p className="text-sm text-muted-foreground text-center mb-4">{rate.description}</p>
                <ul className="space-y-2">
                  {rate.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Bundles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bundles.map((bundle, index) => (
              <Card 
                key={index}
                className={`p-6 transition-smooth hover:shadow-medium ${
                  bundle.popular 
                    ? 'border-2 border-accent shadow-soft' 
                    : 'border-border/50'
                }`}
              >
                {bundle.popular && (
                  <Badge variant="secondary" className="bg-accent text-accent-foreground border-0 mb-4">
                    <Zap className="w-3 h-3 mr-1" />
                    Best Value
                  </Badge>
                )}
                <h4 className="font-bold text-foreground text-lg mb-2">{bundle.name}</h4>
                <div className="text-2xl font-bold text-primary mb-1">{bundle.price}</div>
                <div className="text-sm text-green-600 font-medium mb-2">{bundle.savings}</div>
                <p className="text-sm text-muted-foreground mb-2">{bundle.description}</p>
                <p className="text-xs text-muted-foreground mb-4">{bundle.expires}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Bundle Purchase",
                      description: `Ready to purchase the ${bundle.name}? Sign up to get started!`,
                    });
                  }}
                >
                  Purchase Bundle
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 rounded-full px-6 py-3 mb-6">
            <Trophy className="w-5 h-5" />
            <span className="font-medium">30-day money-back guarantee on all paid plans</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button variant="hero" size="lg" className="h-12 px-8 font-semibold">
                Start Free Trial
              </Button>
            </Link>
            <Button 
              variant="warm" 
              size="lg" 
              className="h-12 px-8 font-semibold"
              onClick={() => {
                toast({
                  title: "Sales Inquiry",
                  description: "We'll connect you with our sales team to discuss your learning goals!",
                });
              }}
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;