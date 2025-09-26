import { Navigation, Footer } from "@/components/Layout";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CourseCatalog from "@/components/CourseCatalog";
import TutorDirectory from "@/components/TutorDirectory";
import Library from "@/components/Library";
import KiswahiliForPros from "@/components/KiswahiliForPros";
import Pricing from "@/components/Pricing";
import Community from "@/components/Community";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <Hero />
      <Features />
      <CourseCatalog />
      <TutorDirectory />
      <Library />
      <KiswahiliForPros />
      <Pricing />
      <Community />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
