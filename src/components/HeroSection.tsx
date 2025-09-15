import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Instagram, Briefcase } from "lucide-react";
import { CodeEditor } from "./CodeEditor";

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Status Badge */}
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
              🟣 Creating content daily
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                I <span className="gradient-text">Create</span>
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-muted-foreground">
                For Developers
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Content creator sharing daily programming tips, tutorials, and behind-the-scenes
              development content on Instagram. Also available for freelance projects and mentoring.
            </p>

            {/* Role Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="px-4 py-2 bg-purple-500/10 text-purple-400 border-purple-500/30">
                🎨 Content Creator
              </Badge>
              <Badge variant="outline" className="px-4 py-2 bg-blue-500/10 text-blue-400 border-blue-500/30">
                💻 Full-Stack Developer
              </Badge>
              <Badge variant="outline" className="px-4 py-2 bg-green-500/10 text-green-400 border-green-500/30">
                🏘️ Community Builder
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow">
                <Instagram className="w-5 h-5 mr-2" />
                Follow @code.clash
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                <Briefcase className="w-5 h-5 mr-2" />
                Hire Me
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">132K+</div>
                <div className="text-sm text-muted-foreground">Instagram Followers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">441+</div>
                <div className="text-sm text-muted-foreground">Posts Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">49+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
            </div>
          </div>

          {/* Right Content - Code Editor */}
          <div className="lg:pl-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <CodeEditor />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground mb-4">Making coding accessible to everyone</p>
          <div className="inline-block animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full relative">
              <div className="w-1 h-3 bg-muted-foreground rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};
