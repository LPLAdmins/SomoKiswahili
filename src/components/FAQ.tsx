import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Users, 
  CreditCard, 
  Smartphone, 
  Globe, 
  Award,
  MessageCircle,
  HelpCircle
} from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const { toast } = useToast();
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      color: "primary",
      faqs: [
        {
          question: "How do I start learning Kiswahili on SomoKiswahili?",
          answer: "Getting started is easy! Create your free account, take our 5-minute level assessment, and we'll recommend the perfect starting point. You can begin with our free Level 1 content immediately, or book a trial lesson with one of our expert tutors."
        },
        {
          question: "What's the difference between self-paced and live tutoring?",
          answer: "Self-paced learning gives you access to our complete library of courses, graded readers, and videos that you can study anytime. Live tutoring adds personalized 1-on-1 sessions with certified teachers for conversation practice, pronunciation help, and customized learning plans."
        },
        {
          question: "How long does it take to become conversational in Kiswahili?",
          answer: "With consistent daily practice (30-60 minutes), most learners achieve basic conversation skills in 3-4 months. Our Level 2 graduates typically handle everyday situations confidently. Advanced fluency (Level 5-6) usually takes 12-18 months of dedicated study."
        },
        {
          question: "Do I need any prior knowledge of Kiswahili?",
          answer: "Not at all! Our courses start from absolute beginner level. We'll teach you the Kiswahili alphabet, basic pronunciation, and essential phrases from day one. Our graded approach ensures you build confidence gradually."
        }
      ]
    },
    {
      title: "Tutors & Lessons",
      icon: Users,
      color: "secondary", 
      faqs: [
        {
          question: "How do I choose the right tutor for me?",
          answer: "Browse our tutor directory and filter by specialty (conversation, business, beginner-friendly), price range, and availability. Each tutor has detailed profiles with intro videos, student reviews, and areas of expertise. You can also book a 30-minute trial lesson at a discounted rate."
        },
        {
          question: "What happens during a tutoring session?",
          answer: "Sessions are conducted via video call using our integrated platform. Your tutor will assess your level, create a personalized lesson plan, and focus on areas you want to improve. Sessions include conversation practice, pronunciation correction, grammar explanations, and cultural insights."
        },
        {
          question: "Can I reschedule or cancel lessons?",
          answer: "Yes! You can reschedule up to 4 hours before your lesson or cancel up to 24 hours in advance for a full refund. Emergency cancellations are handled case-by-case by our support team."
        },
        {
          question: "Are tutors available in different time zones?",
          answer: "Our tutors are based across East Africa (EAT timezone) but many offer flexible hours to accommodate international students. When booking, you'll see available times converted to your local timezone automatically."
        }
      ]
    },
    {
      title: "Pricing & Payments",
      icon: CreditCard,
      color: "accent",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept Visa/Mastercard credit and debit cards, as well as M-Pesa mobile payments for customers in Kenya, Tanzania, and Uganda. All payments are processed securely through our encrypted payment system."
        },
        {
          question: "Can I try SomoKiswahili before committing to a paid plan?",
          answer: "Absolutely! Our Free Explorer plan gives you access to Level 1 content, community features, and basic progress tracking. You can also book a discounted trial lesson with any tutor to experience our live teaching quality."
        },
        {
          question: "Do you offer refunds?",
          answer: "Yes! We offer a 30-day money-back guarantee on all paid subscriptions. For individual tutor sessions, cancellations 24+ hours in advance receive full refunds. Lesson bundles can be refunded on unused sessions within 90 days."
        },
        {
          question: "Can I switch between plans?",
          answer: "Yes, you can upgrade or downgrade your plan anytime. Upgrades take effect immediately, while downgrades apply at your next billing cycle. Any unused tutor session credits roll over when upgrading."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: Smartphone,
      color: "primary",
      faqs: [
        {
          question: "Is there a mobile app?",
          answer: "Yes! Our mobile app is available for iOS and Android, offering full access to courses, graded readers, video content, and progress tracking. You can even download content for offline learning during commutes or travel."
        },
        {
          question: "What devices and browsers are supported?",
          answer: "SomoKiswahili works on all modern devices and browsers. For the best experience, we recommend Chrome, Safari, Firefox, or Edge. Our video calling feature requires camera and microphone permissions for live tutoring sessions."
        },
        {
          question: "I'm having trouble with video calls during tutoring",
          answer: "First, check your internet connection and ensure your browser has camera/microphone permissions. Try refreshing the page or switching browsers. If issues persist, contact our technical support team who can help troubleshoot or arrange alternative communication methods."
        },
        {
          question: "Can I download content for offline use?",
          answer: "Paid subscribers can download graded readers, audio files, and select video content through our mobile app for offline study. This is perfect for learning during flights, commutes, or in areas with limited internet connectivity."
        }
      ]
    },
    {
      title: "Certification & Progress",
      icon: Award,
      color: "secondary",
      faqs: [
        {
          question: "Do you offer certificates of completion?",
          answer: "Yes! Paid subscribers receive certificates for completed courses and achievement badges for reaching milestones. Our Professional certification (Kiswahili for Pros) is recognized by major employers and institutions across East Africa."
        },
        {
          question: "How do you track my progress?", 
          answer: "Our platform automatically tracks lesson completions, time spent studying, vocabulary learned, and streak days. You'll see detailed analytics showing your strengths, areas for improvement, and learning patterns. Tutors can also add personalized progress notes."
        },
        {
          question: "Can I get credit for prior Kiswahili knowledge?",
          answer: "Absolutely! Take our comprehensive level assessment to place into the appropriate course level. Advanced learners can test out of beginner courses and jump directly to intermediate or advanced content that matches their current abilities."
        },
        {
          question: "Is SomoKiswahili accredited by educational institutions?",
          answer: "Our curriculum is developed by certified linguists and university professors. While we're not formally accredited as a university, our certificates are widely recognized by employers across East Africa, and many students use our platform to supplement formal language studies."
        }
      ]
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help during business hours",
      availability: "Mon-Fri, 8AM-6PM EAT",
      icon: MessageCircle,
      action: "Start Chat"
    },
    {
      title: "Email Support", 
      description: "Detailed help for complex questions",
      availability: "24-48 hour response time",
      icon: Globe,
      action: "Send Email"
    },
    {
      title: "Community Forum",
      description: "Get help from fellow learners",
      availability: "Active 24/7",
      icon: Users,
      action: "Browse Forum"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step guides and walkthroughs", 
      availability: "Available anytime",
      icon: BookOpen,
      action: "Watch Tutorials"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Got{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about learning Kiswahili, using our platform, 
            working with tutors, and managing your subscription.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8 mb-20">
          {faqCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const getColorClasses = (color: string) => {
              switch(color) {
                case 'primary': return 'text-primary border-primary/20 bg-primary/5';
                case 'secondary': return 'text-secondary border-secondary/20 bg-secondary/5';  
                case 'accent': return 'text-accent border-accent/20 bg-accent/5';
                default: return 'text-primary border-primary/20 bg-primary/5';
              }
            };

            return (
              <Card key={categoryIndex} className="border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
                {/* Category Header */}
                <div className={`p-6 border-b border-border ${getColorClasses(category.color)}`}>
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6" />
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>

                {/* FAQ Items */}
                <div className="divide-y divide-border">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex; // Unique index across all categories
                    const isOpen = openItems.includes(globalIndex);

                    return (
                      <div key={faqIndex} className="group">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-smooth"
                        >
                          <h4 className="font-semibold text-foreground text-lg pr-4 group-hover:text-primary transition-smooth">
                            {faq.question}
                          </h4>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6 animate-slide-up">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Support Channels */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Need More Help?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our support team is here to help you succeed. Choose the best way to get in touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card key={index} className="p-6 text-center border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-soft transition-smooth group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{channel.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{channel.description}</p>
                  <p className="text-xs text-muted-foreground mb-4">{channel.availability}</p>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    {channel.action}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 rounded-full px-6 py-3 mb-6">
            <HelpCircle className="w-5 h-5" />
            <span className="font-medium">Still have questions? We're here to help!</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="h-12 px-8 font-semibold"
              onClick={() => {
                toast({
                  title: "Contact Support",
                  description: "Contact Longhorn Publishers: enquiries@longhornpublishers.com or +254 20 444 8888",
                });
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Contact Support
            </Button>
            <Button 
              variant="warm" 
              size="lg" 
              className="h-12 px-8 font-semibold"
              onClick={() => {
                // Scroll to the video library section
                const librarySection = document.getElementById('library');
                if (librarySection) {
                  librarySection.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => {
                    toast({
                      title: "Video Tutorials",
                      description: "Browse our collection of instructional videos and step-by-step guides below.",
                    });
                  }, 500);
                } else {
                  // If not on the home page, navigate there
                  window.location.href = '/#library';
                }
              }}
            >
              <BookOpen className="w-5 h-5" />
              View Tutorials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;