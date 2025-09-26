import { Button } from "@/components/ui/button";
import { Menu, X, Globe, BookOpen, Users, Trophy } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import UserProfile from "./UserProfile";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isOnAuthPage = location.pathname === '/auth';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">SomoKiswahili</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#lessons" className="text-foreground hover:text-primary transition-smooth">
              Lessons
            </a>
            <Link to="/courses" className="text-foreground hover:text-primary transition-smooth">
              Course Previews
            </Link>
            <a href="#culture" className="text-foreground hover:text-primary transition-smooth">
              Culture
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-smooth">
              Community
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About
            </a>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <UserProfile />
            ) : (
              <>
                {isOnAuthPage ? (
                  <>
                    <Link to="/">
                      <Button variant="ghost" size="sm">
                        Back to Home
                      </Button>
                    </Link>
                    <Button 
                      variant="hero" 
                      size="sm"
                      onClick={() => {
                        // Switch to sign up tab if on auth page
                        const signupTab = document.querySelector('[data-value="signup"]') as HTMLElement;
                        signupTab?.click();
                      }}
                    >
                      Create Account
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth">
                      <Button variant="ghost" size="sm">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/auth">
                      <Button variant="hero" size="sm">
                        Start Learning
                      </Button>
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#lessons" className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth py-2">
                <BookOpen className="w-4 h-4" />
                Lessons
              </a>
              <Link to="/courses" className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth py-2">
                <BookOpen className="w-4 h-4" />
                Course Previews
              </Link>
              <a href="#culture" className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth py-2">
                <Globe className="w-4 h-4" />
                Culture
              </a>
              <a href="#community" className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth py-2">
                <Users className="w-4 h-4" />
                Community
              </a>
              <a href="#about" className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth py-2">
                <Trophy className="w-4 h-4" />
                About
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                {user ? (
                  <div className="flex items-center gap-3 py-2">
                    <UserProfile />
                    <span className="text-sm text-foreground">
                      {user.user_metadata?.full_name || user.email}
                    </span>
                  </div>
                ) : (
                  <>
                    {isOnAuthPage ? (
                      <>
                        <Link to="/">
                          <Button variant="ghost" size="sm" className="justify-start w-full">
                            Back to Home
                          </Button>
                        </Link>
                        <Button 
                          variant="hero" 
                          size="sm" 
                          className="w-full"
                          onClick={() => {
                            // Switch to sign up tab if on auth page
                            const signupTab = document.querySelector('[data-value="signup"]') as HTMLElement;
                            signupTab?.click();
                          }}
                        >
                          Create Account
                        </Button>
                      </>
                    ) : (
                      <>
                        <Link to="/auth">
                          <Button variant="ghost" size="sm" className="justify-start w-full">
                            Sign In
                          </Button>
                        </Link>
                        <Link to="/auth">
                          <Button variant="hero" size="sm" className="w-full">
                            Start Learning
                          </Button>
                        </Link>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;