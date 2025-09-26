import { Button } from "@/components/ui/button";
import { Menu, X, BookOpen, Users, Video, GraduationCap, Building, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* SomoKiswahili Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground leading-none">SomoKiswahili</span>
                <span className="text-xs text-muted-foreground leading-none">by Longhorn Publishers</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="#learn" className="text-foreground hover:text-primary transition-smooth font-medium">
              Learn
            </a>
            <a href="#tutors" className="text-foreground hover:text-primary transition-smooth font-medium">
              Tutors
            </a>
            <a href="#courses" className="text-foreground hover:text-primary transition-smooth font-medium">
              Courses
            </a>
            <a href="#library" className="text-foreground hover:text-primary transition-smooth font-medium">
              Library
            </a>
            <a href="#pros" className="text-foreground hover:text-primary transition-smooth font-medium">
              Pros
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-smooth font-medium">
              Pricing
            </a>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="font-medium">
              Sign In
            </Button>
            <Button variant="hero" size="sm" className="font-semibold">
              Start Learning
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              <a href="#learn" className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth py-2 font-medium">
                <BookOpen className="w-4 h-4" />
                Learn
              </a>
              <a href="#tutors" className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth py-2 font-medium">
                <Users className="w-4 h-4" />
                Tutors
              </a>
              <a href="#courses" className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth py-2 font-medium">
                <GraduationCap className="w-4 h-4" />
                Courses
              </a>
              <a href="#library" className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth py-2 font-medium">
                <Video className="w-4 h-4" />
                Library
              </a>
              <a href="#pros" className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth py-2 font-medium">
                <Building className="w-4 h-4" />
                Pros
              </a>
              <a href="#pricing" className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth py-2 font-medium">
                Pricing
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start font-medium">
                  Sign In
                </Button>
                <Button variant="hero" size="sm" className="font-semibold">
                  Start Learning
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-navy-foreground">SomoKiswahili</span>
                <span className="text-xs text-navy-foreground/70">by Longhorn Publishers</span>
              </div>
            </div>
            <p className="text-navy-foreground/80 text-sm">
              Learn Kiswahili the Somo way with expert tutors, interactive content, and cultural immersion.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-navy-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#learn" className="text-navy-foreground/80 hover:text-navy-foreground transition-smooth">Learn</a></li>
              <li><a href="#tutors" className="text-navy-foreground/80 hover:text-navy-foreground transition-smooth">Find Tutors</a></li>
              <li><a href="#courses" className="text-navy-foreground/80 hover:text-navy-foreground transition-smooth">Courses</a></li>
              <li><a href="#library" className="text-navy-foreground/80 hover:text-navy-foreground transition-smooth">Library</a></li>
              <li><a href="#pros" className="text-navy-foreground/80 hover:text-navy-foreground transition-smooth">Kiswahili for Pros</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold text-navy-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="text-navy-foreground/80 hover:text-navy-foreground transition-smooth">FAQ</a></li>
              <li><a href="#contact" className="text-navy-foreground/80 hover:text-navy-foreground transition-smooth">Contact Us</a></li>
              <li><a href="#community" className="text-navy-foreground/80 hover:text-navy-foreground transition-smooth">Community</a></li>
              <li><a href="#pricing" className="text-navy-foreground/80 hover:text-navy-foreground transition-smooth">Pricing</a></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-semibold text-navy-foreground mb-4">Connect</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-navy-foreground/80">
                <Mail className="w-4 h-4" />
                <span>hello@somokiswahili.com</span>
              </div>
              <div className="flex items-center gap-2 text-navy-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+254 722 204 608</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Longhorn Publishers Section */}
        <div className="border-t border-navy-foreground/20 pt-8 mb-6">
          <div className="bg-navy-foreground/5 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Building className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-navy-foreground mb-2">Proudly Owned by Longhorn Publishers Plc</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-navy-foreground/80">
                  <div className="space-y-1">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        <p>Funzi Road, Industrial Area</p>
                        <p>Nairobi, Kenya</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p><span className="font-medium">P.O Box:</span> 18033-00500, Nairobi, Kenya</p>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+254 722 204 608 | +254 708 282 260</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:enquiries@longhornpublishers.com" className="hover:text-navy-foreground transition-smooth">
                        enquiries@longhornpublishers.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-navy-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-navy-foreground/70">
          <p>&copy; 2024 SomoKiswahili by Longhorn Publishers Plc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-navy-foreground transition-smooth">Privacy Policy</a>
            <a href="/terms" className="hover:text-navy-foreground transition-smooth">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Navigation, Footer };