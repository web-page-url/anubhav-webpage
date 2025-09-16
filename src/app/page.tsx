import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BlogsSection } from "@/components/BlogsSection";
import { AboutSection } from "@/components/AboutSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ImageGallery } from "@/components/ImageGallery";
import { TechStackSection } from "@/components/TechStackSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        {/* <ServicesSection /> */}
        {/* <BlogsSection /> */}
        <AboutSection />
        <ResumeSection />
        <ImageGallery />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
